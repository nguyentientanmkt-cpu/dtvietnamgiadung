/**
 * D&T VIỆT NAM - CONVERSION TRACKING ENGINE
 * 
 * Hỗ trợ theo dõi hành vi chuyển đổi chính xác:
 * - click_shopee
 * - click_tiktok
 * - click_zalo
 * - click_hotline
 * 
 * Lưu trữ đầy đủ:
 * - product_name
 * - product_id
 * - category
 * - page_url
 * - button_position
 * - utm parameters & referrer
 */

export type TrackingEventName = 
  | 'click_shopee' 
  | 'click_tiktok' 
  | 'click_facebook'
  | 'click_zalo' 
  | 'click_hotline'
  | 'view_product_detail'
  | 'search_product';

export interface TrackingPayload {
  eventName: TrackingEventName;
  productName?: string;
  productId?: string;
  category?: string;
  buttonPosition: 
    | 'header'
    | 'hero_shopee'
    | 'hero_tiktok'
    | 'hero_facebook'
    | 'hero_wholesale_zalo'
    | 'hero_hotline'
    | 'product_card_shopee'
    | 'product_card_tiktok'
    | 'product_detail_shopee'
    | 'product_detail_tiktok'
    | 'product_detail_zalo'
    | 'product_detail_hotline'
    | 'wholesale_section_zalo'
    | 'wholesale_section_hotline'
    | 'mobile_sticky_shopee'
    | 'mobile_sticky_tiktok'
    | 'mobile_sticky_zalo'
    | 'mobile_sticky_hotline'
    | 'floating_widget_zalo'
    | 'floating_widget_hotline'
    | 'search_autocomplete'
    | 'catalog_card'
    | 'footer'
    | 'other';
  additionalData?: Record<string, any>;
}

export interface TrackedEventRecord extends TrackingPayload {
  id: string;
  timestamp: string;
  pageUrl: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

// Lấy tham số UTM từ URL hiện tại
function getUtmParams(): { utmSource?: string; utmMedium?: string; utmCampaign?: string } {
  try {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get('utm_source') || undefined,
      utmMedium: params.get('utm_medium') || undefined,
      utmCampaign: params.get('utm_campaign') || undefined,
    };
  } catch {
    return {};
  }
}

/**
 * Ghi nhận sự kiện chuyển đổi
 */
export function trackConversion(payload: TrackingPayload): void {
  try {
    const utm = getUtmParams();
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const referrer = typeof document !== 'undefined' ? document.referrer : '';

    const record: TrackedEventRecord = {
      ...payload,
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      timestamp: new Date().toISOString(),
      pageUrl,
      referrer,
      ...utm,
    };

    // 1. Log ra Console cho Dev & Marketer dễ theo dõi
    console.info(`[D&T Tracking] 🎯 ${payload.eventName.toUpperCase()}:`, {
      event: payload.eventName,
      position: payload.buttonPosition,
      product: payload.productName || 'N/A',
      productId: payload.productId || 'N/A',
      category: payload.category || 'N/A',
      url: pageUrl,
      time: record.timestamp,
    });

    // 2. Tương thích Google Tag Manager / Google Analytics 4 (DataLayer)
    if (typeof window !== 'undefined') {
      const win = window as any;
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: payload.eventName,
        conversion_type: payload.eventName,
        button_position: payload.buttonPosition,
        product_name: payload.productName || null,
        product_id: payload.productId || null,
        product_category: payload.category || null,
        page_location: pageUrl,
        page_referrer: referrer,
        utm_source: utm.utmSource || null,
        utm_medium: utm.utmMedium || null,
        utm_campaign: utm.utmCampaign || null,
        ...payload.additionalData,
      });

      // 3. Tương thích Meta (Facebook) Pixel
      if (typeof win.fbq === 'function') {
        win.fbq('trackCustom', payload.eventName, {
          content_name: payload.productName,
          content_ids: payload.productId ? [payload.productId] : undefined,
          content_category: payload.category,
          button_position: payload.buttonPosition,
        });
      }

      // 4. Tương thích TikTok Pixel
      if (typeof win.ttq === 'object' && typeof win.ttq.track === 'function') {
        win.ttq.track(payload.eventName, {
          content_name: payload.productName,
          content_id: payload.productId,
          content_category: payload.category,
        });
      }

      // 5. Lưu 50 sự kiện gần nhất vào localStorage để quản trị viên có thể kiểm tra trực tiếp
      try {
        const STORAGE_KEY = 'dt_conversion_logs';
        const existingRaw = localStorage.getItem(STORAGE_KEY);
        const existing: TrackedEventRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
        existing.unshift(record);
        if (existing.length > 50) existing.length = 50;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
      } catch {
        // bỏ qua nếu quota đầy
      }

      // 6. Phát sự kiện Custom Event trên window
      window.dispatchEvent(new CustomEvent('dt_conversion_event', { detail: record }));
    }
  } catch (error) {
    console.error('[D&T Tracking Error]', error);
  }
}

/**
 * Lấy lịch sử sự kiện tracking đã lưu
 */
export function getStoredTrackingLogs(): TrackedEventRecord[] {
  try {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem('dt_conversion_logs');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Xóa lịch sử tracking trong localStorage
 */
export function clearStoredTrackingLogs(): void {
  try {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('dt_conversion_logs');
    }
  } catch {}
}
