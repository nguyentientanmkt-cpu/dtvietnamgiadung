/**
 * D&T VIỆT NAM - LANDING PAGE & PRODUCT CATALOG
 * 
 * Mô hình: Landing Page + Catalog Sản Phẩm
 * - KHÔNG giỏ hàng
 * - KHÔNG thanh toán trực tiếp
 * - Mua lẻ: Chuyển trực tiếp sang Shopee / TikTok Shop
 * - Mua sỉ / đại lý: Chuyển trực tiếp sang Zalo / Hotline
 * - Tối ưu mobile-first, tốc độ cao, giao diện trắng - đỏ D&T Việt Nam
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Product, CatalogCategory } from './types';
import { PRODUCTS } from './data/products';
import { 
  CATALOG_GROUPS, 
  filterProductsByCategory 
} from './utils/productFilter';
import { trackConversion } from './utils/tracking';

// Header, Hero, Navigation
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategoryNavGrid } from './components/CategoryNavGrid';
import { TrustBadges } from './components/TrustBadges';
import { CategorySectionBlock } from './components/CategorySectionBlock';
import { AllProductsCatalogPage } from './components/AllProductsCatalogPage';
import { WholesaleSection } from './components/WholesaleSection';
import { WarehouseCredibilitySection } from './components/WarehouseCredibilitySection';
import { CustomerTrustMidSection } from './components/CustomerTrustMidSection';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingContactWidgets } from './components/FloatingContactWidgets';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FaqSection } from './components/FaqSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'catalog'>('home');
  const [selectedCategory, setSelectedCategory] = useState<CatalogCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);

  // Cuộn mượt đến khu vực sỉ
  const handleScrollToWholesale = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('wholesale-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('wholesale-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cuộn mượt đến khối danh mục trên trang chủ
  const handleScrollToCategorySection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Nếu chưa có trên DOM hoặc đang ở Catalog, chuyển sang catalog
      setCurrentView('catalog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Xem tất cả sản phẩm của 1 danh mục -> Mở trang Catalog tương ứng (Yêu cầu 3)
  const handleViewAllCategory = (cat: CatalogCategory) => {
    setSelectedCategory(cat);
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    trackConversion({
      eventName: 'view_product_detail',
      buttonPosition: 'catalog_card',
      category: cat,
      additionalData: { action: 'view_all_category_click' }
    });
  };

  // Mở chi tiết sản phẩm: Nếu có Landing Page riêng thì chuyển hướng trực tiếp
  const handleOpenDetail = (product: Product) => {
    const landingUrl = product.landingPageUrl || (
      product.id === 'dt-chaindrite-600ml' || product.name.toLowerCase().includes('bình xịt diệt mối')
        ? '/binh-xit-diet-moi-mot-kien-gian-con-trung/'
        : null
    );

    if (landingUrl) {
      trackConversion({
        eventName: 'view_product_detail',
        productName: product.name,
        productId: product.id,
        category: product.category,
        buttonPosition: 'product_card_shopee',
        additionalData: { action: 'open_landing_page', landingUrl }
      });
      window.location.href = landingUrl;
      return;
    }

    setSelectedProductDetail(product);
    trackConversion({
      eventName: 'view_product_detail',
      productName: product.name,
      productId: product.id,
      category: product.category,
      buttonPosition: 'product_card_shopee',
      additionalData: { action: 'open_modal_detail' }
    });
  };

  // Danh sách sản phẩm nổi bật cho 7 nhóm chính trên trang chủ (mỗi nhóm 4-6 sản phẩm)
  const bestSellers = useMemo(() => filterProductsByCategory(PRODUCTS, 'ban-chay'), []);
  const termiteProducts = useMemo(() => filterProductsByCategory(PRODUCTS, 'diet-moi-mot'), []);
  const ratProducts = useMemo(() => filterProductsByCategory(PRODUCTS, 'diet-chuot'), []);
  const insectProducts = useMemo(() => filterProductsByCategory(PRODUCTS, 'xit-con-trung'), []);
  const homeCareProducts = useMemo(() => filterProductsByCategory(PRODUCTS, 'cham-soc-nha-cua'), []);
  const utilityProducts = useMemo(() => filterProductsByCategory(PRODUCTS, 'gia-dung'), []);
  const newProducts = useMemo(() => filterProductsByCategory(PRODUCTS, 'san-pham-moi'), []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-red-600 selection:text-white pb-16 md:pb-0">
      
      {/* 1. HEADER CHUẨN LANDING PAGE: Logo, Search Lớn, Menu 7 Danh Mục, Hotline (KHÔNG GIỎ HÀNG, KHÔNG CHECKOUT) */}
      <Header
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setCurrentView('catalog');
        }}
        searchQuery={searchQuery}
        onSearchChange={(q) => setSearchQuery(q)}
        products={PRODUCTS}
        onOpenProduct={handleOpenDetail}
        onNavigateView={(v) => setCurrentView(v)}
        currentView={currentView}
        onScrollToWholesale={handleScrollToWholesale}
      />

      {/* VIEW SWITCHER: TRANG CHỦ vs TRANG CATALOG */}
      {currentView === 'catalog' ? (
        /* TRANG CATALOG ĐẦY ĐỦ: Lọc 7 nhóm, tìm kiếm tức thì, sắp xếp, link Shopee/TikTok (KHÔNG GIỎ HÀNG) */
        <AllProductsCatalogPage
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
          onOpenDetail={handleOpenDetail}
          onBackToHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onScrollToWholesale={handleScrollToWholesale}
        />
      ) : (
        /* TRANG CHỦ THIẾT KẾ MỚI: Gọn gàng, Mobile-first, CTA lớn, 4-6 SP/nhóm */
        <main>
          
          {/* 2. HERO ĐẦU TRANG: Banner Tổng Kho + 2 CTA lớn Shopee/TikTok + Zalo Sỉ/Hotline */}
          <HeroBanner onScrollToWholesale={handleScrollToWholesale} />

          {/* 3. CAM KẾT UY TÍN D&T VIỆT NAM (Trust Badges) */}
          <TrustBadges />

          {/* 4. MENU 7 DANH MỤC DẠNG ICON/CARD (YÊU CẦU 3) */}
          <CategoryNavGrid
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
            }}
            onScrollToCategorySection={handleScrollToCategorySection}
          />

          {/* 5. CÁC KHỐI SẢN PHẨM NỔI BẬT THEO DANH MỤC (MỖI DANH MỤC 4–6 SP, CÓ NÚT XEM TẤT CẢ) */}
          
          {/* NHÓM 1: SẢN PHẨM BÁN CHẠY NHẤT */}
          <CategorySectionBlock
            id="category-section-ban-chay"
            title="Sản Phẩm Bán Chạy Nhất"
            subtitle="Top các sản phẩm được khách hàng mua nhiều nhất và nhận đánh giá 5 sao tại Shopee &amp; TikTok"
            category="ban-chay"
            products={bestSellers}
            maxDisplay={6}
            icon="🔥"
            badge="Top 1 Bán Chạy"
            onOpenDetail={handleOpenDetail}
            onViewAllCategory={handleViewAllCategory}
          />

          {/* NHÓM 2: DIỆT MỐI MỌT */}
          <CategorySectionBlock
            id="category-section-diet-moi-mot"
            title="Diệt Mối Mọt Tận Gốc"
            subtitle="Bình xịt Chaindrite Thái Lan 600ml kèm vòi kim loại luồn sâu diệt tận gốc tổ mối, mọt gỗ"
            category="diet-moi-mot"
            products={termiteProducts}
            maxDisplay={6}
            icon="🪵"
            badge="Chuyên Dụng"
            onOpenDetail={handleOpenDetail}
            onViewAllCategory={handleViewAllCategory}
          />

          {/* NHÓM 3: DIỆT CHUỘT & ĐUỔI CHUỘT */}
          <CategorySectionBlock
            id="category-section-diet-chuot"
            title="Diệt Chuột &amp; Đuổi Chuột Sinh Học"
            subtitle="Chai xịt chuột Rat Off Thái Lan bảo vệ khoang máy ô tô &amp; viên đuổi chuột sinh học hiệu quả 1 năm"
            category="diet-chuot"
            products={ratProducts}
            maxDisplay={6}
            icon="🐀"
            badge="Bán Chạy Nhất"
            onOpenDetail={handleOpenDetail}
            onViewAllCategory={handleViewAllCategory}
          />

          {/* KHỐI GIỮA TRANG: ĐƯỢC HÀNG NGÀN KHÁCH HÀNG TIN TƯỞNG (NGƯỜI THẬT VIỆC THẬT, ẢNH GIAO HÀNG & PHẢN HỒI THỰC TẾ) */}
          <CustomerTrustMidSection onScrollToWholesale={handleScrollToWholesale} />

          {/* NHÓM 4: XỊT CÔN TRÙNG */}
          <CategorySectionBlock
            id="category-section-xit-con-trung"
            title="Xịt Côn Trùng &amp; Diệt Ruồi Muỗi"
            subtitle="Chai xịt ruồi King Bio, xịt thằn lằn Vim Nano, xịt gián kiến an toàn không độc hại"
            category="xit-con-trung"
            products={insectProducts}
            maxDisplay={6}
            icon="🪰"
            badge="Hiệu Quả Cao"
            onOpenDetail={handleOpenDetail}
            onViewAllCategory={handleViewAllCategory}
          />

          {/* NHÓM 5: CHĂM SÓC NHÀ CỬA & TẨY RỬA */}
          <CategorySectionBlock
            id="category-section-cham-soc-nha-cua"
            title="Chăm Sóc Nhà Cửa &amp; Tẩy Rửa Sinh Học"
            subtitle="Bột tẩy rong rêu D&amp;T 500g độc quyền, sáp ong Beewax đánh bóng đồ gỗ, keo trám tường, tẩy xoong nồi"
            category="cham-soc-nha-cua"
            products={homeCareProducts}
            maxDisplay={6}
            icon="✨"
            badge="Độc Quyền D&T"
            onOpenDetail={handleOpenDetail}
            onViewAllCategory={handleViewAllCategory}
          />

          {/* NHÓM 6: GIA DỤNG TIỆN ÍCH */}
          <CategorySectionBlock
            id="category-section-gia-dung"
            title="Gia Dụng &amp; Tiện Ích Nhà Bếp"
            subtitle="Dụng cụ vắt cam inox đòn bẩy, máy đánh trứng 7 tốc độ, máy xay hạt khô 300W, thùng 30 gói khăn giấy Sipiao"
            category="gia-dung"
            products={utilityProducts}
            maxDisplay={6}
            icon="🍳"
            badge="Tiện Ích Bếp"
            onOpenDetail={handleOpenDetail}
            onViewAllCategory={handleViewAllCategory}
          />

          {/* NHÓM 7: SẢN PHẨM MỚI */}
          <CategorySectionBlock
            id="category-section-san-pham-moi"
            title="Sản Phẩm Mới Nhập Kho"
            subtitle="Hàng mới nhập kho D&amp;T Việt Nam, công nghệ thông minh, giá ưu đãi xuất xưởng"
            category="san-pham-moi"
            products={newProducts}
            maxDisplay={6}
            icon="⚡"
            badge="Mới Về"
            onOpenDetail={handleOpenDetail}
            onViewAllCategory={handleViewAllCategory}
          />

          {/* 6. HÌNH ẢNH HOẠT ĐỘNG THỰC TẾ & NĂNG LỰC TỔNG KHO (CONTAINER, ĐÓNG GÓI, QC XUẤT KHO) */}
          <WarehouseCredibilitySection />

          {/* 7. KHU VỰC KHÁCH MUA SỈ / ĐẠI LÝ (YÊU CẦU 6: BẠN MUỐN NHẬP SỈ?) */}
          <WholesaleSection />

          {/* 7. GIỚI THIỆU TỔNG KHO D&T VIỆT NAM (AboutSection) */}
          <AboutSection 
            onContactClick={handleScrollToWholesale}
            onBrowseProductsClick={() => {
              setSelectedCategory('all');
              setCurrentView('catalog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* 8. HỎI ĐÁP THƯỜNG GẶP (FaqSection) */}
          <FaqSection />

        </main>
      )}

      {/* 9. FOOTER TOÀN DIỆN: Kênh mua hàng, cam kết, pháp lý (KHÔNG GIỎ HÀNG) */}
      <Footer 
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setCurrentView('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onScrollToWholesale={handleScrollToWholesale}
      />

      {/* 10. THANH CTA CỐ ĐỊNH MOBILE: [SHOPEE] [TIKTOK] [ZALO] [GỌI NGAY] (YÊU CẦU 7) */}
      <MobileStickyBar />

      {/* 11. SPEED DIAL LIÊN HỆ TRÊN DESKTOP */}
      <FloatingContactWidgets />

      {/* 12. MODAL CHI TIẾT SẢN PHẨM (YÊU CẦU 5: CTA MUA NGAY SHOPEE/TIKTOK, CHAT ZALO/GỌI HOTLINE) */}
      <ProductDetailModal
        product={selectedProductDetail}
        isOpen={Boolean(selectedProductDetail)}
        onClose={() => setSelectedProductDetail(null)}
        allProducts={PRODUCTS}
        onSelectProduct={(p) => setSelectedProductDetail(p)}
      />

    </div>
  );
}
