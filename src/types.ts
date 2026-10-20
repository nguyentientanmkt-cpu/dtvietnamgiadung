export type ProductCategory = 
  | 'all'
  | 'xu-ly-rong-reu'       // Bột Tẩy Rong Rêu, Tẩy Mốc Tường Sân
  | 'duoi-chuot-con-trung'  // Xịt Đuổi Chuột Rat Off, Chai Xịt Mối Chaindrite Thái Lan, Viên Đuổi Chuột Sinh Học
  | 'tay-rua-ve-sinh'      // Tẩy Dầu Mỡ T-LEX, Nước Lau Gỗ Suzy Wood, Bột Thông Cống Clean
  | 'gia-dung-tien-ich'   // Khay Lọc Rác INOX 304, Móc Dán Tường 3M, Băng Keo Chống Thấm Nhật Bản
  | 'diet-moi-mot'
  | 'xit-con-trung'
  | 'diet-chuot'
  | 'gia-dung'
  | 'cham-soc-nha-cua'
  | 'ban-chay'
  | 'san-pham-moi';

export type CatalogCategory = 
  | 'all'
  | 'diet-moi-mot'
  | 'xit-con-trung'
  | 'diet-chuot'
  | 'gia-dung'
  | 'cham-soc-nha-cua'
  | 'ban-chay'
  | 'san-pham-moi';

export interface CategoryInfo {
  id: CatalogCategory;
  name: string;
  shortTitle: string;
  icon: string;
  description: string;
  badge?: string;
}

export interface ProductVariant {
  name: string;
  priceDelta?: number;
  inStock: boolean;
}

export interface ProductReview {
  author: string;
  rating: number;
  date: string;
  comment: string;
  channel?: 'Shopee' | 'TikTok Shop' | 'Khách Hàng Đã Mua';
  verified?: boolean;
}

export interface Product {
  id: string;
  name: string;
  shortName?: string;
  category: ProductCategory;
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  soldCount: number;
  thumbnail: string;
  images: string[];
  videoUrl?: string; // Clip demo video
  videoPoster?: string;
  videoDuration?: string;
  variants?: ProductVariant[];
  tag?: 'Bán Chạy' | 'Chính Hãng' | 'Nội Địa Thái Lan' | 'Khuyên Dùng' | 'Hàng Mới Về';
  isFeatured?: boolean;
  shortDescription: string;
  description: string; // Mô tả
  uses: string[]; // Công dụng
  usageInstructions: string[]; // Hướng dẫn sử dụng
  specifications: Record<string, string>; // Quy cách
  origin: string; // Xuất xứ
  precautions: string[]; // Lưu ý
  features: string[]; // Điểm nổi bật
  reviews: ProductReview[]; // Đánh giá
  inStock: boolean;
  shopeeUrl?: string;
  tiktokUrl?: string;
  facebookUrl?: string;
  landingPageUrl?: string;
}

export interface CartItem {
  id: string; // unique item key: productId + variant
  product: Product;
  selectedVariant: string;
  quantity: number;
}

export interface Voucher {
  code: string;
  discountType: 'fixed' | 'percent';
  discountValue: number;
  minOrderValue: number;
  description: string;
}

export type StoreVoucher = Voucher;

export interface OrderInfo {
  customerName: string;
  phoneNumber: string;
  province: string;
  district: string;
  ward?: string;
  streetAddress: string;
  note: string;
  paymentMethod: 'cod' | 'vietqr';
  voucherCode?: string;
  shippingFee: number;
  discountAmount: number;
  totalAmount: number;
  items: CartItem[];
  orderId?: string;
  orderDate?: string;
}

export type ActiveTab = 'home' | 'products' | 'about' | 'contact' | 'reviews' | 'policy-purchase' | 'policy-return' | 'policy-privacy' | 'policy-terms';
