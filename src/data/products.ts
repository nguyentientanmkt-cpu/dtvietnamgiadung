import { Product, ProductCategory, Voucher } from '../types';
import { STORE_CONFIG } from './config';

export { STORE_CONFIG };

export const formatVND = (price: number): string => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

export const CATEGORY_LABELS: Record<ProductCategory, { name: string; desc: string; icon: string }> = {
  'all': {
    name: 'Tất Cả Sản Phẩm',
    desc: 'Toàn bộ 77 sản phẩm chính hãng từ gian hàng Shopee Tổng Kho D&T Việt Nam (Shop ID: 1477950332)',
    icon: 'Store'
  },
  'duoi-chuot-con-trung': {
    name: 'Diệt Mối Mọt & Côn Trùng',
    desc: 'Bình xịt Chaindrite Thái Lan 600ml, chai xịt đuổi chuột Rat Off, diệt ruồi King Bio, xịt thằn lằn',
    icon: 'ShieldCheck'
  },
  'tay-rua-ve-sinh': {
    name: 'Tẩy Rửa & Chăm Sóc Nhà Cửa',
    desc: 'Sáp ong Beewax, nước lau gỗ Suzy, tẩy xoong nồi Hàn Quốc, tẩy trắng quần áo T-LEX, vệ sinh tủ lạnh',
    icon: 'Flame'
  },
  'gia-dung-tien-ich': {
    name: 'Gia Dụng Tiện Ích Nhà Bếp',
    desc: 'Dụng cụ vắt cam inox, máy xay hạt khô, máy đánh trứng, rổ inox kéo giãn, khay lọc rác, khăn giấy Sipiao',
    icon: 'Home'
  },
  'xu-ly-rong-reu': {
    name: 'Xử Lý Rong Rêu & Chống Thấm',
    desc: 'Bột tẩy rong rêu sinh học D&T Việt Nam 500g, kem trám tường, băng keo chống thấm mái tôn Nhật Bản',
    icon: 'Sparkles'
  }
};

export const FEATURED_CATEGORIES = [
  {
    id: 'duoi-chuot-con-trung' as ProductCategory,
    title: 'Xịt Mối Mọt Chaindrite',
    subtitle: 'Nhập khẩu Thái Lan 600ml',
    image: '/images/products/shopee-50854875110.jpg',
    itemCount: 'Chính hãng 100%'
  },
  {
    id: 'duoi-chuot-con-trung' as ProductCategory,
    title: 'Xịt Đuổi Chuột Rat Off',
    subtitle: 'Thái Lan 300ml bảo vệ ô tô',
    image: '/images/products/shopee-25291704971.jpg',
    itemCount: 'Bán chạy Shopee'
  },
  {
    id: 'xu-ly-rong-reu' as ProductCategory,
    title: 'Bột Tẩy Rong Rêu D&T',
    subtitle: 'Độc quyền sạch nhanh 10 phút',
    image: '/images/products/shopee-52759532752.jpg',
    itemCount: '500g Đậm đặc'
  },
  {
    id: 'tay-rua-ve-sinh' as ProductCategory,
    title: 'Sáp Ong Đồ Gỗ Beewax',
    subtitle: 'Phục hồi bóng vân gỗ tự nhiên',
    image: '/images/products/shopee-25091715364.jpg',
    itemCount: 'Bán chạy Shopee'
  },
  {
    id: 'gia-dung-tien-ich' as ProductCategory,
    title: 'Dụng Cụ Vắt Cam Ép Inox',
    subtitle: 'Vắt kiệt 99% không đắng vỏ',
    image: '/images/products/shopee-57514681119.jpg',
    itemCount: 'Cao cấp không gỉ'
  },
  {
    id: 'gia-dung-tien-ich' as ProductCategory,
    title: 'Đồ Lọc Rác Bồn Rửa 304',
    subtitle: 'Inox liền khối chống tắc',
    image: '/images/products/shopee-27576663247.jpg',
    itemCount: 'Inox 304 chuẩn'
  },
  {
    id: 'gia-dung-tien-ich' as ProductCategory,
    title: 'Máy Xay Hạt Khô 300W',
    subtitle: 'Lưỡi thép 6 cánh đa năng',
    image: '/images/products/shopee-44032421953.jpg',
    itemCount: 'Công suất 300W'
  },
  {
    id: 'gia-dung-tien-ich' as ProductCategory,
    title: 'Khăn Giấy Gấu Trúc Sipiao',
    subtitle: 'Thùng 30 gói sợi tre siêu dai',
    image: '/images/products/shopee-29326812332.jpg',
    itemCount: 'Thùng 30 bịch'
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": "dt-rat-off-spray-300ml",
    "shortName": "Chai Xịt Chuột RATOFF ANTI RAT SPRAY Thái Lan 300ml",
    "name": "(Chính Hãng) Chai Xịt Chuột RATOFF ANTI RAT SPRAY Thái Lan 300ml",
    "category": "duoi-chuot-con-trung",
    "price": 149000,
    "originalPrice": 195000,
    "discountPercent": 24,
    "rating": 4.77,
    "reviewCount": 189,
    "soldCount": 150,
    "thumbnail": "/images/products/shopee-25291704971.jpg",
    "images": [
      "/images/products/shopee-25291704971.jpg",
      "/images/products/rat-off-1.jpg",
      "/images/products/rat-off-2.jpg",
      "/images/products/rat-off-3.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": true,
    "shortDescription": "(Chính Hãng) Chai Xịt Chuột RATOFF ANTI RAT SPRAY Thái Lan 300ml.",
    "description": "(Chính Hãng) Chai Xịt Chuột RATOFF ANTI RAT SPRAY Thái Lan 300ml\n\nHƯỚNG DẪN DÙNG:\n\n1. ĐỐI VỚI VỊ TRÍ LẦN ĐẦU SỬ DỤNG:\n● Xịt 1 lần 1 ngày\n● Xịt vào những vị trí chuột hay đi lại hay tụ tập và nên xịt vào buổi tối, lúc mà chuột hay đi lại\n● Mỗi lần xịt tầm 3 4 lần bấm nút để tăng hiệu quả\n\n2. SỬ DỤNG LÂU DÀI\nTrong quá trình sử dụng, sẽ có lúc chuột đi lại, vì vậy bạn nên tiếp tục xịt 2 - 3 lần/ 1 tuần để liên tục tạo mùi đuổi chuột đi. Về lâu dài sẽ rất hiệu quả.\nDù thế nào thì chúng ta vẫn đang dùng cách này hay cách khác để đuổi chuột ra khỏi nơi nó sinh sống, ẩn nấp. Vì vậy chúng ta chịu khó xịt để lâu dài chúng không còn trú ngụ và phá phách.",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "Bento",
      "Mã Shopee ID": "25291704971",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng Bento",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Xịt 1 lần 1 ngày",
      "Xịt vào những vị trí chuột hay đi lại hay tụ tập và nên xịt vào buổi tối, lúc mà chuột hay đi lại",
      "Mỗi lần xịt tầm 3 4 lần bấm nút để tăng hiệu quả"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/(Chính-Hãng)-Chai-Xịt-Chuột-RATOFF-ANTI-RAT-SPRAY-Thái-Lan-300ml-i.1477950332.25291704971",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-bua-inox-2-dau-dam-thit-dap-da-da-nang-b-90584",
    "shortName": "Búa Inox 2 Đầu Dầm Thịt Đập Đá Đa Năng, Bền Bỉ An Toàn",
    "name": "Búa Inox 2 Đầu Dầm Thịt Đập Đá Đa Năng, Bền Bỉ An Toàn",
    "category": "gia-dung-tien-ich",
    "price": 69000,
    "originalPrice": 99000,
    "discountPercent": 30,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 203,
    "thumbnail": "/images/products/shopee-46566590584.jpg",
    "images": [
      "/images/products/shopee-46566590584.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": true,
    "shortDescription": "Mua Búa Inox 2 Đầu Dầm Thịt Đập Đá Đa Năng, Bền Bỉ An Toàn giá tốt.",
    "description": "Mua Búa Inox 2 Đầu Dầm Thịt Đập Đá Đa Năng, Bền Bỉ An Toàn giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "46566590584",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Búa-Inox-2-Đầu-Dầm-Thịt-Đập-Đá-Đa-Năng-Bền-Bỉ-An-Toàn-i.1477950332.46566590584",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-may-xay-sinh-to-cam-tay-340ml-10-luoi-da-63916",
    "shortName": "Máy Xay Sinh Tố Cầm Tay 340ml,10 Lưỡi Dao Xay Đá, Máy Ép Trái Cây Mini Di Động",
    "name": "Máy Xay Sinh Tố Cầm Tay 340ml,10 Lưỡi Dao Xay Đá, Máy Ép Trái Cây Mini Di Động",
    "category": "gia-dung-tien-ich",
    "price": 189000,
    "originalPrice": 260000,
    "discountPercent": 27,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 256,
    "thumbnail": "/images/products/shopee-44333163916.jpg",
    "images": [
      "/images/products/shopee-44333163916.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": true,
    "shortDescription": "Mua Máy Xay Sinh Tố Cầm Tay 340ml,10 Lưỡi Dao Xay Đá, Máy Ép Trái Cây Mini Di Động giá tốt.",
    "description": "Mua Máy Xay Sinh Tố Cầm Tay 340ml,10 Lưỡi Dao Xay Đá, Máy Ép Trái Cây Mini Di Động giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "44333163916",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Máy-Xay-Sinh-Tố-Cầm-Tay-340ml-10-Lưỡi-Dao-Xay-Đá-Máy-Ép-Trái-Cây-Mini-Di-Động-i.1477950332.44333163916",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-dung-cu-gap-rac-thong-tac-cong-nhanh-cho-93536",
    "shortName": "Dụng Cụ Gắp Rác, Thông Tắc Cống Nhanh Chóng, Cây Móc Rác, Que Lấy Rác Thông Minh",
    "name": "Dụng Cụ Gắp Rác, Thông Tắc Cống Nhanh Chóng, Cây Móc Rác, Que Lấy Rác Thông Minh",
    "category": "gia-dung-tien-ich",
    "price": 39000,
    "originalPrice": 65000,
    "discountPercent": 40,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 309,
    "thumbnail": "/images/products/shopee-28976793536.jpg",
    "images": [
      "/images/products/shopee-28976793536.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": true,
    "shortDescription": "Mua Dụng Cụ Gắp Rác, Thông Tắc Cống Nhanh Chóng, Cây Móc Rác, Que Lấy Rác Thông Minh giá tốt.",
    "description": "Mua Dụng Cụ Gắp Rác, Thông Tắc Cống Nhanh Chóng, Cây Móc Rác, Que Lấy Rác Thông Minh giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "28976793536",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Dụng-Cụ-Gắp-Rác-Thông-Tắc-Cống-Nhanh-Chóng-Cây-Móc-Rác-Que-Lấy-Rác-Thông-Minh-i.1477950332.28976793536",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-keo-dan-sieu-dinh-nhat-ban-d-t-tuyp-60g--74254",
    "shortName": "Keo Dán Siêu Dính Nhật Bản D&T Tuýp 60g, Dính Trên Mọi Bề Mặt Chịu Lực Lên 120kg",
    "name": "Keo Dán Siêu Dính Nhật Bản D&amp;T Tuýp 60g, Dính Trên Mọi Bề Mặt Chịu Lực Lên 120kg",
    "category": "gia-dung-tien-ich",
    "price": 49000,
    "originalPrice": 79000,
    "discountPercent": 38,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 362,
    "thumbnail": "/images/products/shopee-26276674254.jpg",
    "images": [
      "/images/products/shopee-26276674254.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": true,
    "shortDescription": "Mua Keo Dán Siêu Dính Nhật Bản D&amp;T Tuýp 60g, Dính Trên Mọi Bề Mặt Chịu Lực Lên 120kg giá tốt.",
    "description": "Mua Keo Dán Siêu Dính Nhật Bản D&amp;T Tuýp 60g, Dính Trên Mọi Bề Mặt Chịu Lực Lên 120kg giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "26276674254",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Keo-Dán-Siêu-Dính-Nhật-Bản-D-T-Tuýp-60g-Dính-Trên-Mọi-Bề-Mặt-Chịu-Lực-Lên-120kg-i.1477950332.26276674254",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-bang-keo-chong-tham-nuoc-bang-dinh-chong-66427",
    "shortName": "Băng Keo Chống Thấm Nước, Băng Dính Chống Thấm Dột, Chịu Nhiệt Cao, Chống Ăn Mòn , Dán Mái Tôn",
    "name": "Băng Keo Chống Thấm Nước, Băng Dính Chống Thấm Dột, Chịu Nhiệt Cao, Chống Ăn Mòn , Dán Mái Tôn",
    "category": "xu-ly-rong-reu",
    "price": 79000,
    "originalPrice": 120000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 415,
    "thumbnail": "/images/products/shopee-29126966427.jpg",
    "images": [
      "/images/products/shopee-29126966427.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": true,
    "shortDescription": "Mua Băng Keo Chống Thấm Nước, Băng Dính Chống Thấm Dột, Chịu Nhiệt Cao, Chống Ăn Mòn , Dán Mái Tôn giá tốt.",
    "description": "Mua Băng Keo Chống Thấm Nước, Băng Dính Chống Thấm Dột, Chịu Nhiệt Cao, Chống Ăn Mòn , Dán Mái Tôn giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "29126966427",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Băng-Keo-Chống-Thấm-Nước-Băng-Dính-Chống-Thấm-Dột-Chịu-Nhiệt-Cao-Chống-Ăn-Mòn-Dán-Mái-Tôn-i.1477950332.29126966427",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-khay-loc-rac-d-t-gio-loc-rac-bon-rua-che-58513",
    "shortName": "Khay Lọc Rác D&T, Giỏ Lọc Rác Bồn Rửa Chén thiên nga Chất Liệu Inox 201 Lọc Cặn Thức Ăn Nhanh Chóng",
    "name": "Khay Lọc Rác D&amp;T, Giỏ Lọc Rác Bồn Rửa Chén thiên nga Chất Liệu Inox 201 Lọc Cặn Thức Ăn Nhanh Chóng",
    "category": "gia-dung-tien-ich",
    "price": 39000,
    "originalPrice": 65000,
    "discountPercent": 40,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 468,
    "thumbnail": "/images/products/shopee-27676658513.jpg",
    "images": [
      "/images/products/shopee-27676658513.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": true,
    "shortDescription": "Mua Khay Lọc Rác D&amp;T, Giỏ Lọc Rác Bồn Rửa Chén thiên nga Chất Liệu Inox 201 Lọc Cặn Thức Ăn Nhanh Chóng giá tốt.",
    "description": "Mua Khay Lọc Rác D&amp;T, Giỏ Lọc Rác Bồn Rửa Chén thiên nga Chất Liệu Inox 201 Lọc Cặn Thức Ăn Nhanh Chóng giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "27676658513",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Khay-Lọc-Rác-D-T-Giỏ-Lọc-Rác-Bồn-Rửa-Chén-thiên-nga-Chất-Liệu-Inox-201-Lọc-Cặn-Thức-Ăn-Nhanh-Chóng-i.1477950332.27676658513",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-dau-loc-nuoc-truc-tiep-tai-voi-6-lop-xoa-32169",
    "shortName": "Đầu Lọc Nước Trực Tiếp Tại Vòi 6 Lớp Xoay - Đầu Vòi Lọc Nước 4 Tầng",
    "name": "Đầu Lọc Nước Trực Tiếp Tại Vòi 6 Lớp Xoay - Đầu Vòi Lọc Nước 4 Tầng",
    "category": "gia-dung-tien-ich",
    "price": 45000,
    "originalPrice": 75000,
    "discountPercent": 40,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 521,
    "thumbnail": "/images/products/shopee-29526932169.jpg",
    "images": [
      "/images/products/shopee-29526932169.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": true,
    "shortDescription": "Mua Đầu Lọc Nước Trực Tiếp Tại Vòi 6 Lớp Xoay - Đầu Vòi Lọc Nước 4 Tầng giá tốt.",
    "description": "Mua Đầu Lọc Nước Trực Tiếp Tại Vòi 6 Lớp Xoay - Đầu Vòi Lọc Nước 4 Tầng giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "29526932169",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Đầu-Lọc-Nước-Trực-Tiếp-Tại-Vòi-6-Lớp-Xoay-Đầu-Vòi-Lọc-Nước-4-Tầng-i.1477950332.29526932169",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-xit-ve-sinh-noi-that-o-to-leather-cleane-91097",
    "shortName": "Xịt Vệ Sinh Nội Thất Ô Tô Leather Cleaner 500ml – Làm Sạch Ghế Da, Trần Nỉ, Taplo, Kính Xe",
    "name": "Xịt Vệ Sinh Nội Thất Ô Tô Leather Cleaner 500ml – Làm Sạch Ghế Da, Trần Nỉ, Taplo, Kính Xe",
    "category": "tay-rua-ve-sinh",
    "price": 119000,
    "originalPrice": 169000,
    "discountPercent": 30,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 574,
    "thumbnail": "/images/products/shopee-46654891097.jpg",
    "images": [
      "/images/products/shopee-46654891097.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": true,
    "shortDescription": "Mua Xịt Vệ Sinh Nội Thất Ô Tô Leather Cleaner 500ml – Làm Sạch Ghế Da, Trần Nỉ, Taplo, Kính Xe giá tốt.",
    "description": "Mua Xịt Vệ Sinh Nội Thất Ô Tô Leather Cleaner 500ml – Làm Sạch Ghế Da, Trần Nỉ, Taplo, Kính Xe giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "46654891097",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Xịt-Vệ-Sinh-Nội-Thất-Ô-Tô-Leather-Cleaner-500ml-–-Làm-Sạch-Ghế-Da-Trần-Nỉ-Taplo-Kính-Xe-i.1477950332.46654891097",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-tlex-500ml",
    "shortName": "Chai Tẩy Trắng Quần Áo T-LEX 500ml, Tẩy Mốc, Ố Vàng, Không Phai Màu",
    "name": "Chai Tẩy Trắng Quần Áo T-LEX 500ml, Tẩy Mốc, Ố Vàng, Không Phai Màu",
    "category": "tay-rua-ve-sinh",
    "price": 89000,
    "originalPrice": 135000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 627,
    "thumbnail": "/images/products/shopee-28426806296.jpg",
    "images": [
      "/images/products/shopee-28426806296.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": true,
    "shortDescription": "Mua Chai Tẩy Trắng Quần Áo T-LEX 500ml, Tẩy Mốc, Ố Vàng, Không Phai Màu giá tốt.",
    "description": "Mua Chai Tẩy Trắng Quần Áo T-LEX 500ml, Tẩy Mốc, Ố Vàng, Không Phai Màu giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "28426806296",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Chai-Tẩy-Trắng-Quần-Áo-T-LEX-500ml-Tẩy-Mốc-Ố-Vàng-Không-Phai-Màu-i.1477950332.28426806296",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-gio-loc-rac-treo-bon-rua-chen-bat-inox-2-86505",
    "shortName": "Giỏ Lọc Rác Treo Bồn Rửa Chén Bát Inox 201 Thoát Nước Nhanh Khay Rổ Đựng Rác Đa Năng Tiện Lợi",
    "name": "Giỏ Lọc Rác Treo Bồn Rửa Chén Bát Inox 201 Thoát Nước Nhanh Khay Rổ Đựng Rác Đa Năng Tiện Lợi",
    "category": "gia-dung-tien-ich",
    "price": 59000,
    "originalPrice": 90000,
    "discountPercent": 34,
    "rating": 5,
    "reviewCount": 11,
    "soldCount": 680,
    "thumbnail": "/images/products/shopee-55357286505.jpg",
    "images": [
      "/images/products/shopee-55357286505.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": true,
    "shortDescription": "Chống tắc nghẽn hiệu quả cho bồn rửa bát! 🚰.",
    "description": "Chống tắc nghẽn hiệu quả cho bồn rửa bát! 🚰\nGiỏ lọc rác bồn rửa bát inox là giải pháp tuyệt vời giúp ngăn chặn tóc, dầu mỡ, thức ăn và các mảnh vụn nhỏ rơi xuống cống, giữ cho đường ống luôn thông thoáng và hạn chế mùi hôi khó chịu.\n\nChất liệu bền bỉ, dễ vệ sinh\n- Sản phẩm được làm từ inox không gỉ, chắc chắn và bền đẹp theo thời gian.\n- Thiết kế rỗng thoáng giúp nước thoát nhanh, không đọng lại và dễ dàng làm sạch chỉ trong vài giây.\n\nPhù hợp với nhiều loại bồn rửa\n- Kích thước phổ biến, phù hợp với hầu hết các loại bồn rửa bát trong gia đình.\n- Dễ dàng lắp đặt, không cần khoan đục, chỉ cần đặt lên miệng bồn là sử dụng ngay.\n\nChi tiết lựa chọn\n- Màu sắc: Bạc (màu inox tự nhiên)\n- Kích thước: 11.1 x 11.1 x 5.3 cm\n\nLựa chọn thông minh cho căn bếp hiện đại\nGiỏ lọc rác inox không chỉ giúp giữ gìn vệ sinh mà còn bảo vệ đường ống thoát nước, mang lại sự tiện lợi và an tâm cho mọi gia đình!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T",
      "Mã Shopee ID": "55357286505",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Sản phẩm được làm từ inox không gỉ, chắc chắn và bền đẹp theo thời gian.",
      "Thiết kế rỗng thoáng giúp nước thoát nhanh, không đọng lại và dễ dàng làm sạch chỉ trong vài giây.",
      "Kích thước phổ biến, phù hợp với hầu hết các loại bồn rửa bát trong gia đình.",
      "Dễ dàng lắp đặt, không cần khoan đục, chỉ cần đặt lên miệng bồn là sử dụng ngay."
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Giỏ-Lọc-Rác-Treo-Bồn-Rửa-Chén-Bát-Inox-201-Thoát-Nước-Nhanh-Khay-Rổ-Đựng-Rác-Đa-Năng-Tiện-Lợi-i.1477950332.55357286505",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-loc-rac-inox-304",
    "shortName": "Đồ lọc rác bồn rửa chén bát, rổ lọc thức ăn thừa, khay đựng thức ăn - Inox 304 cao cấp",
    "name": "Đồ lọc rác bồn rửa chén bát, rổ lọc thức ăn thừa, khay đựng thức ăn - Inox 304 cao cấp",
    "category": "gia-dung-tien-ich",
    "price": 179000,
    "originalPrice": 240000,
    "discountPercent": 25,
    "rating": 4.96,
    "reviewCount": 68,
    "soldCount": 733,
    "thumbnail": "/images/products/shopee-27576663247.jpg",
    "images": [
      "/images/products/shopee-27576663247.jpg",
      "/images/products/khay-loc-1.jpg",
      "/images/products/khay-loc-2.jpg",
      "/images/products/khay-loc-3.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": true,
    "shortDescription": "Khay lọc rác, rổ lọc thức ăn thừa: Có 2 phân loại, Khách nhớ lưu ý lựa chọn giúp em.",
    "description": "Khay lọc rác, rổ lọc thức ăn thừa: Có 2 phân loại, Khách nhớ lưu ý lựa chọn giúp em.\nThông tin sản phẩm: \nMẫu 1: Khay lọc rác Inox 304\n- Chất liệu: INOX 304 chống gỉ cao cấp \n- Kích thước: 18 x 10 x 9 CM \nMẫu 2; Rổ, khay lọc rác loại lưới\n- Chất liệu INOX chống hoen gỉ \n- Kích thước: 18x13x8.5cm\nCông dụng: dùng để lọc thức ăn thừa, phơi rau củ quả ráo nước, để dụng cụ rửa chén...\nThiết kế sản phẩm tiện lợi có thể tháo lắp dễ dàng để đổ thức ăn thừa vào thùng rác, các lỗ li ti giúp thoát nước nhanh chóng cùng chất liệu Inox 304 bền bỉ với thời gian",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "Sunlight",
      "Mã Shopee ID": "27576663247",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng Sunlight",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu: INOX 304 chống gỉ cao cấp",
      "Kích thước: 18 x 10 x 9 CM",
      "Chất liệu INOX chống hoen gỉ",
      "Kích thước: 18x13x8.5cm"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Đồ-lọc-rác-bồn-rửa-chén-bát-rổ-lọc-thức-ăn-thừa-khay-đựng-thức-ăn-Inox-304-cao-cấp-i.1477950332.27576663247",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-ro-luoi-inox-304-keo-gian-bon-rua-chen-r-08322",
    "shortName": "Rổ Lưới Inox 304 Kéo Giãn Bồn Rửa Chén - Rổ Rửa Rau Củ Quả, Giá Úp Chén Bát Thoát Nước Tiện Lợi",
    "name": "Rổ Lưới Inox 304 Kéo Giãn Bồn Rửa Chén - Rổ Rửa Rau Củ Quả, Giá Úp Chén Bát Thoát Nước Tiện Lợi",
    "category": "gia-dung-tien-ich",
    "price": 129000,
    "originalPrice": 185000,
    "discountPercent": 30,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 786,
    "thumbnail": "/images/products/shopee-43680408322.jpg",
    "images": [
      "/images/products/shopee-43680408322.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Rổ Lưới Inox 304 Kéo Giãn Bồn Rửa Chén - Rổ Rửa Rau Củ Quả, Giá Úp Chén Bát Thoát Nước Tiện Lợi giá tốt.",
    "description": "Mua Rổ Lưới Inox 304 Kéo Giãn Bồn Rửa Chén - Rổ Rửa Rau Củ Quả, Giá Úp Chén Bát Thoát Nước Tiện Lợi giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "43680408322",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Rổ-Lưới-Inox-304-Kéo-Giãn-Bồn-Rửa-Chén-Rổ-Rửa-Rau-Củ-Quả-Giá-Úp-Chén-Bát-Thoát-Nước-Tiện-Lợi-i.1477950332.43680408322",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-ray-loc-thuc-an-bang-thep-khong-gi-co-ca-76958",
    "shortName": "Ray Lọc Thức Ăn Bằng Thép Không Gỉ Có Cán 10cm Tiện Dụng Cho Nhà Bếp, Dung Cụ Vớt Đồ Chiên Tiện Lợi",
    "name": "Ray Lọc Thức Ăn Bằng Thép Không Gỉ Có Cán 10cm Tiện Dụng Cho Nhà Bếp, Dung Cụ Vớt Đồ Chiên Tiện Lợi",
    "category": "gia-dung-tien-ich",
    "price": 39000,
    "originalPrice": 60000,
    "discountPercent": 35,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 839,
    "thumbnail": "/images/products/shopee-45909576958.jpg",
    "images": [
      "/images/products/shopee-45909576958.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Ray Lọc Thức Ăn Bằng Thép Không Gỉ Có Cán 10cm Tiện Dụng Cho Nhà Bếp, Dung Cụ Vớt Đồ Chiên Tiện Lợi giá tốt.",
    "description": "Mua Ray Lọc Thức Ăn Bằng Thép Không Gỉ Có Cán 10cm Tiện Dụng Cho Nhà Bếp, Dung Cụ Vớt Đồ Chiên Tiện Lợi giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "45909576958",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Ray-Lọc-Thức-Ăn-Bằng-Thép-Không-Gỉ-Có-Cán-10cm-Tiện-Dụng-Cho-Nhà-Bếp-Dung-Cụ-Vớt-Đồ-Chiên-Tiện-Lợi-i.1477950332.45909576958",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-gio-thoat-nuoc-bon-rua-tam-giac-nha-bep--66429",
    "shortName": "Giỏ thoát nước bồn rửa tam giác Nhà bếp Giỏ lọc tam giác Trái cây và rau củ Giá thoát nước",
    "name": "Giỏ thoát nước bồn rửa tam giác Nhà bếp Giỏ lọc tam giác Trái cây và rau củ Giá thoát nước",
    "category": "gia-dung-tien-ich",
    "price": 35000,
    "originalPrice": 55000,
    "discountPercent": 36,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 892,
    "thumbnail": "/images/products/shopee-53809566429.jpg",
    "images": [
      "/images/products/shopee-53809566429.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Giỏ thoát nước bồn rửa tam giác Nhà bếp Giỏ lọc tam giác Trái cây và rau củ Giá thoát nước giá tốt.",
    "description": "Mua Giỏ thoát nước bồn rửa tam giác Nhà bếp Giỏ lọc tam giác Trái cây và rau củ Giá thoát nước giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "53809566429",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Giỏ-thoát-nước-bồn-rửa-tam-giác-Nhà-bếp-Giỏ-lọc-tam-giác-Trái-cây-và-rau-củ-Giá-thoát-nước-i.1477950332.53809566429",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-kem-tram-tuong-keo-va-vet-nut-tuong-nha--99099",
    "shortName": "Kem Trám Tường/ Keo Vá Vết Nứt Tường Nhà Chống Thấm, Chống Ẩm Mốc",
    "name": "Kem Trám Tường/ Keo Vá Vết Nứt Tường Nhà Chống Thấm, Chống Ẩm Mốc",
    "category": "xu-ly-rong-reu",
    "price": 49000,
    "originalPrice": 85000,
    "discountPercent": 42,
    "rating": 4.88,
    "reviewCount": 16,
    "soldCount": 945,
    "thumbnail": "/images/products/shopee-27626799099.jpg",
    "images": [
      "/images/products/shopee-27626799099.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Keo Vá Tường Chống Thấm LKB 250gr - Trám Trét Vết Nứt Khe Hở Tường - Chống Mốc Ẩm Làm Sạch Tường - HÀNG CHÍNH HÃNG.",
    "description": "Keo Vá Tường Chống Thấm LKB 250gr - Trám Trét Vết Nứt Khe Hở Tường - Chống Mốc Ẩm Làm Sạch Tường - HÀNG CHÍNH HÃNG\nKeo vá chống thâm tường và vết nứt tường đa năng.\nTường nhà bạn lâu năm đã bị tróc lem lở không còn thẩm mĩ giờ đây bạn không phải lo nữa đã có keo vá tường.\nKeo vá tường giúp bạn vá những mảng tường lâu ngày bị bong chóc mất thẩm mĩ.\n📍  Thông Tin Sản Phẩm Keo Vá Tường Chống Thấm Vá Vết Nứt.\nHàng nhập khẩu Nhật chính hãng.\nHạn sử dụng : 4 năm.\nBảo hành chất lượng trong 12 tháng.\nBộ sản phẩm bao gồm: 1 chai keo, 1 đầu xịt keo, 1 cọ trám.\nCông dụng Giúp hàn gắn các vết nứt ,lỗ bong tróc tường và vết nấm ố mốc.\n📍  Đặc Điểm Nổi Bật Của Keo Vá Tường\nChỉ sau vài phút xử lý mọi vết nứt và độ ẩm đã được xử lý triệt để .\nTrám tường siêu tốc không chỉ kết dính tốt sản phẩm còn có thể chịu đựng tốt các tác nhân thời tiết như mưa, nắng, hay thậm chí là bão.\nChất keo màu trắng, phù hợp với những gam màu tường sáng thông dụng hiện nay ở các gia đình Việt Nam.\n📍 Công Dụng Của Keo Vá Tường \nKeo vá tường đa năng được làm từ nhựa epoxy và chất trám có cường độ cao có khả năng phục hồi lại tường bị nứt, bong tróc sơn, xóa vết ố vàng, giúp tường nhà bạn luôn như mới.\nKeo vá tường chịu được thời tiết khắc nghiệt và tia UV. \nCách sử dụng vô cùng đơn giản và hiệu quả, bạn chỉ cần trát keo vào tường và đợi khô là đã có thể lấp đầy các vết nứt nẻ trên tường, vết ố bám lâu ngày.\nGiúp mang lại diện mạo mới cho ngôi nhà của bạn vừa đẹp và sạch sẽ khang trang như mới xây xong.\n📍 Hướng dẫn sử dụng Bột bả vá tường đa năng\n1. Đầu tiên dùng xẻng để loại bỏ chỗ hư hỏng và bong tróc, dùng chổi quét để loại bỏ bụi bẩn.\n2 Xịt hơi ướt tường, và trực tiếp cạo bột trét tường lên phần tường bị hư hỏng sau khi xử lý.  \n3. Sau 24 giờ, chà nhám khu vực sửa chữa bằng giấy nhám.  \n4 Lau sạch bụi tạo ra sau khi mài bằng vải khô\n\n📍 Ưu Điểm Vượt Trội Của Keo Vá Tường Đa Năng.\nThời gian xử lý của keo rất nhanh chỉ sau 2-3ph là bạn đã có một bức tường sáng bóng như mới.\nKeo vá tường đa năng có thiết kế đầu chai keo  dễ dàng sử dụng cho các khu vực nhỏ hẹp. \nChi phí cho mỗi lần sử dụng rất nhỏ và lại ít tốn kém phù hợp với mọi điều kiện của tường\n\n        #đanang\n  .\ná_tường  ửa_tường ường_nhà ết_nứt óc #đa_",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "Victor Nhật Bản",
      "Mã Shopee ID": "27626799099",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng Victor Nhật Bản",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "--------------"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Kem-Trám-Tường-Keo-Vá-Vết-Nứt-Tường-Nhà-Chống-Thấm-Chống-Ẩm-Mốc-i.1477950332.27626799099",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-ro-hap-inox-gap-gon-dung-hap-thuc-pham-t-57413",
    "shortName": "Rổ hấp Inox gấp gọn, dùng hấp thực phẩm tiện lợi",
    "name": "Rổ hấp Inox gấp gọn, dùng hấp thực phẩm tiện lợi",
    "category": "gia-dung-tien-ich",
    "price": 49000,
    "originalPrice": 79000,
    "discountPercent": 38,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 998,
    "thumbnail": "/images/products/shopee-44857057413.jpg",
    "images": [
      "/images/products/shopee-44857057413.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Rổ hấp Inox gấp gọn, dùng hấp thực phẩm tiện lợi giá tốt.",
    "description": "Mua Rổ hấp Inox gấp gọn, dùng hấp thực phẩm tiện lợi giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "44857057413",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Rổ-hấp-Inox-gấp-gọn-dùng-hấp-thực-phẩm-tiện-lợi-i.1477950332.44857057413",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-tap-de-nha-bep-pvc-chong-dau-chong-nuoc--33966",
    "shortName": "Tạp Dề Nhà Bếp PVC Chống Dầu Chống Nước – Tạp Dề Làm Bếp, Vệ Sinh, Chống Bụi Bẩn",
    "name": "Tạp Dề Nhà Bếp PVC Chống Dầu Chống Nước – Tạp Dề Làm Bếp, Vệ Sinh, Chống Bụi Bẩn",
    "category": "gia-dung-tien-ich",
    "price": 45000,
    "originalPrice": 70000,
    "discountPercent": 36,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1051,
    "thumbnail": "/images/products/shopee-42533833966.jpg",
    "images": [
      "/images/products/shopee-42533833966.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Tạp Dề Nhà Bếp PVC Chống Dầu Chống Nước – Tạp Dề Làm Bếp, Vệ Sinh, Chống Bụi Bẩn giá tốt.",
    "description": "Mua Tạp Dề Nhà Bếp PVC Chống Dầu Chống Nước – Tạp Dề Làm Bếp, Vệ Sinh, Chống Bụi Bẩn giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "42533833966",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Tạp-Dề-Nhà-Bếp-PVC-Chống-Dầu-Chống-Nước-–-Tạp-Dề-Làm-Bếp-Vệ-Sinh-Chống-Bụi-Bẩn-i.1477950332.42533833966",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-khoa-phanh-dia-xe-may-xe-dap-chong-trom--08263",
    "shortName": "Khóa Phanh Đĩa Xe Máy, Xe Đạp Chống Trộm Chất Liệu Thép Nguyên Khối, Thiết Kế Thông Minh An Toàn, Tiện Lợi",
    "name": "Khóa Phanh Đĩa Xe Máy, Xe Đạp Chống Trộm Chất Liệu Thép Nguyên Khối, Thiết Kế Thông Minh An Toàn, Tiện Lợi",
    "category": "gia-dung-tien-ich",
    "price": 79000,
    "originalPrice": 120000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1104,
    "thumbnail": "/images/products/shopee-45566608263.jpg",
    "images": [
      "/images/products/shopee-45566608263.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Khóa Phanh Đĩa Xe Máy, Xe Đạp Chống Trộm Chất Liệu Thép Nguyên Khối, Thiết Kế Thông Minh An Toàn, Tiện Lợi giá tốt.",
    "description": "Mua Khóa Phanh Đĩa Xe Máy, Xe Đạp Chống Trộm Chất Liệu Thép Nguyên Khối, Thiết Kế Thông Minh An Toàn, Tiện Lợi giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "45566608263",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Khóa-Phanh-Đĩa-Xe-Máy-Xe-Đạp-Chống-Trộm-Chất-Liệu-Thép-Nguyên-Khối-Thiết-Kế-Thông-Minh-An-Toàn-Tiện-Lợi-i.1477950332.45566608263",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-moc-go-treo-do-da-nang-8-moc-xoay-360-ti-38085",
    "shortName": "Móc Gỗ Treo Đồ Đa Năng 8 Móc Xoay 360° - Tiết Kiệm Không Gian, Treo Thắt Lưng, Đồ Lót Gọn Gàng",
    "name": "Móc Gỗ Treo Đồ Đa Năng 8 Móc Xoay 360° - Tiết Kiệm Không Gian, Treo Thắt Lưng, Đồ Lót Gọn Gàng",
    "category": "gia-dung-tien-ich",
    "price": 59000,
    "originalPrice": 90000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1157,
    "thumbnail": "/images/products/shopee-42883838085.jpg",
    "images": [
      "/images/products/shopee-42883838085.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua Móc Gỗ Treo Đồ Đa Năng 8 Móc Xoay 360° - Tiết Kiệm Không Gian, Treo Thắt Lưng, Đồ Lót Gọn Gàng giá tốt.",
    "description": "Mua Móc Gỗ Treo Đồ Đa Năng 8 Móc Xoay 360° - Tiết Kiệm Không Gian, Treo Thắt Lưng, Đồ Lót Gọn Gàng giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "42883838085",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Móc-Gỗ-Treo-Đồ-Đa-Năng-8-Móc-Xoay-360°-Tiết-Kiệm-Không-Gian-Treo-Thắt-Lưng-Đồ-Lót-Gọn-Gàng-i.1477950332.42883838085",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-may-xay-hat-kho-mau-xanh-may-nghien-hat--97995",
    "shortName": "Máy xay hạt khô màu xanh, Máy nghiền Hạt - Ngũ Cốc - Đồ khô đa chức năng lưỡi thép không gỉ",
    "name": "Máy xay hạt khô màu xanh, Máy nghiền Hạt - Ngũ Cốc - Đồ khô đa chức năng lưỡi thép không gỉ",
    "category": "gia-dung-tien-ich",
    "price": 169000,
    "originalPrice": 235000,
    "discountPercent": 28,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1210,
    "thumbnail": "/images/products/shopee-49666597995.jpg",
    "images": [
      "/images/products/shopee-49666597995.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Máy xay hạt khô màu xanh, Máy nghiền Hạt - Ngũ Cốc - Đồ khô đa chức năng lưỡi thép không gỉ giá tốt.",
    "description": "Mua Máy xay hạt khô màu xanh, Máy nghiền Hạt - Ngũ Cốc - Đồ khô đa chức năng lưỡi thép không gỉ giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "49666597995",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Máy-xay-hạt-khô-màu-xanh-Máy-nghiền-Hạt-Ngũ-Cốc-Đồ-khô-đa-chức-năng-lưỡi-thép-không-gỉ-i.1477950332.49666597995",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-keo-dan-sua-giay-dep-subida-do-sieu-dinh-01609",
    "shortName": "Keo dán, sửa giày dép SUBIDA đỏ siêu dính siêu bền chắc chắn chống nước",
    "name": "Keo dán, sửa giày dép SUBIDA đỏ siêu dính siêu bền chắc chắn chống nước",
    "category": "gia-dung-tien-ich",
    "price": 39000,
    "originalPrice": 60000,
    "discountPercent": 35,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1263,
    "thumbnail": "/images/products/shopee-47466601609.jpg",
    "images": [
      "/images/products/shopee-47466601609.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Keo dán, sửa giày dép SUBIDA đỏ siêu dính siêu bền chắc chắn chống nước giá tốt.",
    "description": "Mua Keo dán, sửa giày dép SUBIDA đỏ siêu dính siêu bền chắc chắn chống nước giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "47466601609",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Keo-dán-sửa-giày-dép-SUBIDA-đỏ-siêu-dính-siêu-bền-chắc-chắn-chống-nước-i.1477950332.47466601609",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-dung-cu-lam-thit-vien-bang-thep-khong-gi-67178",
    "shortName": "Dụng Cụ Làm Thịt Viên Bằng Thép Không Gỉ Làm Gạo Thịt Cá Tự Làm Kẹp Thịt Viên Nhồi Bông, Khuôn Thịt Viên",
    "name": "Dụng Cụ Làm Thịt Viên Bằng Thép Không Gỉ Làm Gạo Thịt Cá Tự Làm Kẹp Thịt Viên Nhồi Bông, Khuôn Thịt Viên",
    "category": "gia-dung-tien-ich",
    "price": 49000,
    "originalPrice": 75000,
    "discountPercent": 35,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1316,
    "thumbnail": "/images/products/shopee-55766567178.jpg",
    "images": [
      "/images/products/shopee-55766567178.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Dụng Cụ Làm Thịt Viên Bằng Thép Không Gỉ Làm Gạo Thịt Cá Tự Làm Kẹp Thịt Viên Nhồi Bông, Khuôn Thịt Viên giá tốt.",
    "description": "Mua Dụng Cụ Làm Thịt Viên Bằng Thép Không Gỉ Làm Gạo Thịt Cá Tự Làm Kẹp Thịt Viên Nhồi Bông, Khuôn Thịt Viên giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "55766567178",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Dụng-Cụ-Làm-Thịt-Viên-Bằng-Thép-Không-Gỉ-Làm-Gạo-Thịt-Cá-Tự-Làm-Kẹp-Thịt-Viên-Nhồi-Bông-Khuôn-Thịt-Viên-i.1477950332.55766567178",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-dung-cu-dap-toi-ep-toi-nghien-toi-inox-d-71585",
    "shortName": "Dụng cụ dập tỏi, ép tỏi, nghiền tỏi inox, dụng cụ nghiền tỏi bằng thép không gỉ",
    "name": "Dụng cụ dập tỏi, ép tỏi, nghiền tỏi inox, dụng cụ nghiền tỏi bằng thép không gỉ",
    "category": "gia-dung-tien-ich",
    "price": 55000,
    "originalPrice": 85000,
    "discountPercent": 35,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1369,
    "thumbnail": "/images/products/shopee-52666571585.jpg",
    "images": [
      "/images/products/shopee-52666571585.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua Dụng cụ dập tỏi, ép tỏi, nghiền tỏi inox, dụng cụ nghiền tỏi bằng thép không gỉ giá tốt.",
    "description": "Mua Dụng cụ dập tỏi, ép tỏi, nghiền tỏi inox, dụng cụ nghiền tỏi bằng thép không gỉ giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "52666571585",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Dụng-cụ-dập-tỏi-ép-tỏi-nghiền-tỏi-inox-dụng-cụ-nghiền-tỏi-bằng-thép-không-gỉ-i.1477950332.52666571585",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-set-50-100-khuon-giay-bac-lam-banh-tart--62291",
    "shortName": "Set 50-100 Khuôn giấy bạc Làm Bánh Tart Bằng Lá Nhôm Đế Chén Giấy Bạc Làm Khuôn Nướng",
    "name": "Set 50-100 Khuôn giấy bạc Làm Bánh Tart Bằng Lá Nhôm Đế Chén Giấy Bạc Làm Khuôn Nướng",
    "category": "gia-dung-tien-ich",
    "price": 45000,
    "originalPrice": 70000,
    "discountPercent": 36,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1422,
    "thumbnail": "/images/products/shopee-51016562291.jpg",
    "images": [
      "/images/products/shopee-51016562291.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Set 50-100 Khuôn giấy bạc Làm Bánh Tart Bằng Lá Nhôm Đế Chén Giấy Bạc Làm Khuôn Nướng giá tốt.",
    "description": "Mua Set 50-100 Khuôn giấy bạc Làm Bánh Tart Bằng Lá Nhôm Đế Chén Giấy Bạc Làm Khuôn Nướng giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "51016562291",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Set-50-100-Khuôn-giấy-bạc-Làm-Bánh-Tart-Bằng-Lá-Nhôm-Đế-Chén-Giấy-Bạc-Làm-Khuôn-Nướng-i.1477950332.51016562291",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-bo-dung-cu-lam-vuon-mini-3-mon-can-go-xe-54180",
    "shortName": "Bộ Dụng Cụ Làm Vườn Mini 3 Món Cán Gỗ: Xẻng,Xúc,Cào,Tiện Dụng, Bền,Thép Không Rỉ",
    "name": "Bộ Dụng Cụ Làm Vườn Mini 3 Món Cán Gỗ: Xẻng,Xúc,Cào,Tiện Dụng, Bền,Thép Không Rỉ",
    "category": "gia-dung-tien-ich",
    "price": 49000,
    "originalPrice": 75000,
    "discountPercent": 35,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1475,
    "thumbnail": "/images/products/shopee-58016554180.jpg",
    "images": [
      "/images/products/shopee-58016554180.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Bộ Dụng Cụ Làm Vườn Mini 3 Món Cán Gỗ: Xẻng,Xúc,Cào,Tiện Dụng, Bền,Thép Không Rỉ giá tốt.",
    "description": "Mua Bộ Dụng Cụ Làm Vườn Mini 3 Món Cán Gỗ: Xẻng,Xúc,Cào,Tiện Dụng, Bền,Thép Không Rỉ giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "58016554180",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Bộ-Dụng-Cụ-Làm-Vườn-Mini-3-Món-Cán-Gỗ-Xẻng-Xúc-Cào-Tiện-Dụng-Bền-Thép-Không-Rỉ-i.1477950332.58016554180",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-bo-noi-kem-ro-chien-loc-dau-inox-2in1-ti-63799",
    "shortName": "Bộ Nồi Kèm Rổ Chiên Lọc Dầu Inox 2in1 Tiện lợi - Nồi chiên ngập dầu",
    "name": "Bộ Nồi Kèm Rổ Chiên Lọc Dầu Inox 2in1 Tiện lợi - Nồi chiên ngập dầu",
    "category": "gia-dung-tien-ich",
    "price": 189000,
    "originalPrice": 270000,
    "discountPercent": 30,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1528,
    "thumbnail": "/images/products/shopee-41333163799.jpg",
    "images": [
      "/images/products/shopee-41333163799.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Bộ Nồi Kèm Rổ Chiên Lọc Dầu Inox 2in1 Tiện lợi - Nồi chiên ngập dầu giá tốt.",
    "description": "Mua Bộ Nồi Kèm Rổ Chiên Lọc Dầu Inox 2in1 Tiện lợi - Nồi chiên ngập dầu giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "41333163799",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Bộ-Nồi-Kèm-Rổ-Chiên-Lọc-Dầu-Inox-2in1-Tiện-lợi-Nồi-chiên-ngập-dầu-i.1477950332.41333163799",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-dung-cu-vat-ep-nuoc-chanh-tac-tien-loi-i-53759",
    "shortName": "Dụng cụ vắt, ép nước chanh, tắc tiện lợi - inox cao cấp, an toàn",
    "name": "Dụng cụ vắt, ép nước chanh, tắc tiện lợi - inox cao cấp, an toàn",
    "category": "gia-dung-tien-ich",
    "price": 59000,
    "originalPrice": 90000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1581,
    "thumbnail": "/images/products/shopee-57115053759.jpg",
    "images": [
      "/images/products/shopee-57115053759.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua Dụng cụ vắt, ép nước chanh, tắc tiện lợi - inox cao cấp, an toàn giá tốt.",
    "description": "Mua Dụng cụ vắt, ép nước chanh, tắc tiện lợi - inox cao cấp, an toàn giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "57115053759",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Dụng-cụ-vắt-ép-nước-chanh-tắc-tiện-lợi-inox-cao-cấp-an-toàn-i.1477950332.57115053759",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-may-danh-trung-7-toc-do",
    "shortName": "Máy đánh trứng cầm tay 7 tốc độ công suất 260W",
    "name": "Máy đánh trứng cầm tay 7 tốc độ công suất 260W",
    "category": "gia-dung-tien-ich",
    "price": 119000,
    "originalPrice": 169000,
    "discountPercent": 30,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1634,
    "thumbnail": "/images/products/shopee-56715207961.jpg",
    "images": [
      "/images/products/shopee-56715207961.jpg",
      "/images/products/danh-trung-1.jpg",
      "/images/products/danh-trung-2.jpg",
      "/images/products/danh-trung-3.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": true,
    "shortDescription": "Mua Máy đánh trứng cầm tay 7 tốc độ công suất 260W giá tốt.",
    "description": "Mua Máy đánh trứng cầm tay 7 tốc độ công suất 260W giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "56715207961",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Máy-đánh-trứng-cầm-tay-7-tốc-độ-công-suất-260W-i.1477950332.56715207961",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-lo-tha-toilet-aab-pink-180g-51028",
    "shortName": "Lọ Thả Toilet AAB Pink 180g",
    "name": "Lọ Thả Toilet AAB Pink 180g",
    "category": "tay-rua-ve-sinh",
    "price": 49000,
    "originalPrice": 75000,
    "discountPercent": 35,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1687,
    "thumbnail": "/images/products/shopee-50865151028.jpg",
    "images": [
      "/images/products/shopee-50865151028.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Lọ Thả Toilet AAB Pink 180g giá tốt.",
    "description": "Mua Lọ Thả Toilet AAB Pink 180g giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "50865151028",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Lọ-Thả-Toilet-AAB-Pink-180g-i.1477950332.50865151028",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-chan-ke-may-giat-tu-lanh-may-rua-chen-in-57157",
    "shortName": "Chân Kê Máy Giặt, Tủ Lạnh, Máy Rửa Chén Inox 304 Chống Rung, Điều Chỉnh Kích Thước, Nâng Cao Gầm",
    "name": "Chân Kê Máy Giặt, Tủ Lạnh, Máy Rửa Chén Inox 304 Chống Rung, Điều Chỉnh Kích Thước, Nâng Cao Gầm",
    "category": "gia-dung-tien-ich",
    "price": 169000,
    "originalPrice": 250000,
    "discountPercent": 32,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1740,
    "thumbnail": "/images/products/shopee-47615157157.jpg",
    "images": [
      "/images/products/shopee-47615157157.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Chân Kê Máy Giặt, Tủ Lạnh, Máy Rửa Chén Inox 304 Chống Rung, Điều Chỉnh Kích Thước, Nâng Cao Gầm giá tốt.",
    "description": "Mua Chân Kê Máy Giặt, Tủ Lạnh, Máy Rửa Chén Inox 304 Chống Rung, Điều Chỉnh Kích Thước, Nâng Cao Gầm giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "47615157157",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Chân-Kê-Máy-Giặt-Tủ-Lạnh-Máy-Rửa-Chén-Inox-304-Chống-Rung-Điều-Chỉnh-Kích-Thước-Nâng-Cao-Gầm-i.1477950332.47615157157",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-gia-do-dien-thoai-xoay-360-do-kim-loai-c-26746",
    "shortName": "Giá Đỡ Điện Thoại Xoay 360 độ Kim Loại Chắc Chắn, Nhỏ Gọn",
    "name": "Giá Đỡ Điện Thoại Xoay 360 độ Kim Loại Chắc Chắn, Nhỏ Gọn",
    "category": "gia-dung-tien-ich",
    "price": 69000,
    "originalPrice": 110000,
    "discountPercent": 37,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1793,
    "thumbnail": "/images/products/shopee-50665126746.jpg",
    "images": [
      "/images/products/shopee-50665126746.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua Giá Đỡ Điện Thoại Xoay 360 độ Kim Loại Chắc Chắn, Nhỏ Gọn giá tốt.",
    "description": "Mua Giá Đỡ Điện Thoại Xoay 360 độ Kim Loại Chắc Chắn, Nhỏ Gọn giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "50665126746",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Giá-Đỡ-Điện-Thoại-Xoay-360-độ-Kim-Loại-Chắc-Chắn-Nhỏ-Gọn-i.1477950332.50665126746",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-dao-nao-rau-cu-da-nang-inox-304-cao-cap--99639",
    "shortName": "Dao Nạo Rau Củ Đa Năng Inox 304 Cao Cấp – Dụng Cụ Bào Sợi, Gọt Vỏ Tiện Lợi Cho Nhà Bếp",
    "name": "Dao Nạo Rau Củ Đa Năng Inox 304 Cao Cấp – Dụng Cụ Bào Sợi, Gọt Vỏ Tiện Lợi Cho Nhà Bếp",
    "category": "gia-dung-tien-ich",
    "price": 39000,
    "originalPrice": 65000,
    "discountPercent": 40,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1846,
    "thumbnail": "/images/products/shopee-47915099639.jpg",
    "images": [
      "/images/products/shopee-47915099639.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Dao Nạo Rau Củ Đa Năng Inox 304 Cao Cấp – Dụng Cụ Bào Sợi, Gọt Vỏ Tiện Lợi Cho Nhà Bếp giá tốt.",
    "description": "Mua Dao Nạo Rau Củ Đa Năng Inox 304 Cao Cấp – Dụng Cụ Bào Sợi, Gọt Vỏ Tiện Lợi Cho Nhà Bếp giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "47915099639",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Dao-Nạo-Rau-Củ-Đa-Năng-Inox-304-Cao-Cấp-–-Dụng-Cụ-Bào-Sợi-Gọt-Vỏ-Tiện-Lợi-Cho-Nhà-Bếp-i.1477950332.47915099639",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-kep-gap-thuc-pham-inox-cao-cap-da-nang-g-58143",
    "shortName": "Kẹp Gắp Thực Phẩm Inox Cao Cấp – Đa Năng Gắp Thịt Nướng, Bánh Mì, Bánh Ngọt, Buffet",
    "name": "Kẹp Gắp Thực Phẩm Inox Cao Cấp – Đa Năng Gắp Thịt Nướng, Bánh Mì, Bánh Ngọt, Buffet",
    "category": "gia-dung-tien-ich",
    "price": 45000,
    "originalPrice": 70000,
    "discountPercent": 36,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1899,
    "thumbnail": "/images/products/shopee-55115058143.jpg",
    "images": [
      "/images/products/shopee-55115058143.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Kẹp Gắp Thực Phẩm Inox Cao Cấp – Đa Năng Gắp Thịt Nướng, Bánh Mì, Bánh Ngọt, Buffet giá tốt.",
    "description": "Mua Kẹp Gắp Thực Phẩm Inox Cao Cấp – Đa Năng Gắp Thịt Nướng, Bánh Mì, Bánh Ngọt, Buffet giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "55115058143",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Kẹp-Gắp-Thực-Phẩm-Inox-Cao-Cấp-–-Đa-Năng-Gắp-Thịt-Nướng-Bánh-Mì-Bánh-Ngọt-Buffet-i.1477950332.55115058143",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-hop-100-gang-tay-victoria-bay-nau-an-lam-69059",
    "shortName": "Hộp 100 Găng Tay Victoria Bay Nấu Ăn, Làm Bếp Siêu Dai Chất Liệu TPE Không Mùi Chống Nhăn",
    "name": "Hộp 100 Găng Tay Victoria Bay Nấu Ăn, Làm Bếp Siêu Dai Chất Liệu TPE Không Mùi Chống Nhăn",
    "category": "gia-dung-tien-ich",
    "price": 59000,
    "originalPrice": 90000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 1952,
    "thumbnail": "/images/products/shopee-45265069059.jpg",
    "images": [
      "/images/products/shopee-45265069059.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Hộp 100 Găng Tay Victoria Bay Nấu Ăn, Làm Bếp Siêu Dai Chất Liệu TPE Không Mùi Chống Nhăn giá tốt.",
    "description": "Mua Hộp 100 Găng Tay Victoria Bay Nấu Ăn, Làm Bếp Siêu Dai Chất Liệu TPE Không Mùi Chống Nhăn giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "45265069059",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Hộp-100-Găng-Tay-Victoria-Bay-Nấu-Ăn-Làm-Bếp-Siêu-Dai-Chất-Liệu-TPE-Không-Mùi-Chống-Nhăn-i.1477950332.45265069059",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-vat-cam-inox",
    "shortName": "Dụng Cụ Vắt Cam Cao Cấp – Vắt Kiệt Bã, Giữ Trọn Vị Tươi",
    "name": "Dụng Cụ Vắt Cam Cao Cấp – Vắt Kiệt Bã, Giữ Trọn Vị Tươi",
    "category": "gia-dung-tien-ich",
    "price": 85000,
    "originalPrice": 129000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2005,
    "thumbnail": "/images/products/shopee-57514681119.jpg",
    "images": [
      "/images/products/shopee-57514681119.jpg",
      "/images/products/vat-cam-1.jpg",
      "/images/products/vat-cam-2.jpg",
      "/images/products/vat-cam-3.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": true,
    "shortDescription": "Mua Dụng Cụ Vắt Cam Cao Cấp – Vắt Kiệt Bã, Giữ Trọn Vị Tươi giá tốt.",
    "description": "Mua Dụng Cụ Vắt Cam Cao Cấp – Vắt Kiệt Bã, Giữ Trọn Vị Tươi giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "57514681119",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Dụng-Cụ-Vắt-Cam-Cao-Cấp-–-Vắt-Kiệt-Bã-Giữ-Trọn-Vị-Tươi-i.1477950332.57514681119",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-may-xay-da-nang-osaka-nhat-ban-may-xay-s-03704",
    "shortName": "Máy Xay Đa Năng Osaka Nhật Bản - Máy Xay Sinh Tố, Máy xay Thịt Cao Cấp-Lưỡi Dao Lớn Không Gỉ",
    "name": "Máy Xay Đa Năng Osaka Nhật Bản - Máy Xay Sinh Tố, Máy xay Thịt Cao Cấp-Lưỡi Dao Lớn Không Gỉ",
    "category": "gia-dung-tien-ich",
    "price": 199000,
    "originalPrice": 290000,
    "discountPercent": 31,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2058,
    "thumbnail": "/images/products/shopee-42632903704.jpg",
    "images": [
      "/images/products/shopee-42632903704.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Máy Xay Đa Năng Osaka Nhật Bản - Máy Xay Sinh Tố, Máy xay Thịt Cao Cấp-Lưỡi Dao Lớn Không Gỉ giá tốt.",
    "description": "Mua Máy Xay Đa Năng Osaka Nhật Bản - Máy Xay Sinh Tố, Máy xay Thịt Cao Cấp-Lưỡi Dao Lớn Không Gỉ giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "42632903704",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Máy-Xay-Đa-Năng-Osaka-Nhật-Bản-Máy-Xay-Sinh-Tố-Máy-xay-Thịt-Cao-Cấp-Lưỡi-Dao-Lớn-Không-Gỉ-i.1477950332.42632903704",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-keo-nha-bep-kapusi-nhat-ban-keo-cat-thuc-94356",
    "shortName": "Kéo Nhà Bếp Kapusi Nhật Bản - Kéo Cắt Thực Phẩm Đa Năng Thép Không Gỉ Siêu Bền, Siêu Sắc Bén",
    "name": "Kéo Nhà Bếp Kapusi Nhật Bản - Kéo Cắt Thực Phẩm Đa Năng Thép Không Gỉ Siêu Bền, Siêu Sắc Bén",
    "category": "gia-dung-tien-ich",
    "price": 79000,
    "originalPrice": 120000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2111,
    "thumbnail": "/images/products/shopee-44714694356.jpg",
    "images": [
      "/images/products/shopee-44714694356.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Kéo Nhà Bếp Kapusi Nhật Bản - Kéo Cắt Thực Phẩm Đa Năng Thép Không Gỉ Siêu Bền, Siêu Sắc Bén giá tốt.",
    "description": "Mua Kéo Nhà Bếp Kapusi Nhật Bản - Kéo Cắt Thực Phẩm Đa Năng Thép Không Gỉ Siêu Bền, Siêu Sắc Bén giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "44714694356",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Kéo-Nhà-Bếp-Kapusi-Nhật-Bản-Kéo-Cắt-Thực-Phẩm-Đa-Năng-Thép-Không-Gỉ-Siêu-Bền-Siêu-Sắc-Bén-i.1477950332.44714694356",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-may-lam-sua-hat-ostmars-800ml-may-xay-na-88763",
    "shortName": "Máy Làm Sữa Hạt OSTMARS 800ML – Máy Xay Nấu Đa Năng Xay Mịn, Hẹn Giờ Thông Minh",
    "name": "Máy Làm Sữa Hạt OSTMARS 800ML – Máy Xay Nấu Đa Năng Xay Mịn, Hẹn Giờ Thông Minh",
    "category": "gia-dung-tien-ich",
    "price": 389000,
    "originalPrice": 550000,
    "discountPercent": 29,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2164,
    "thumbnail": "/images/products/shopee-44764688763.jpg",
    "images": [
      "/images/products/shopee-44764688763.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Máy Làm Sữa Hạt OSTMARS 800ML – Máy Xay Nấu Đa Năng Xay Mịn, Hẹn Giờ Thông Minh giá tốt.",
    "description": "Mua Máy Làm Sữa Hạt OSTMARS 800ML – Máy Xay Nấu Đa Năng Xay Mịn, Hẹn Giờ Thông Minh giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "44764688763",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Máy-Làm-Sữa-Hạt-OSTMARS-800ML-–-Máy-Xay-Nấu-Đa-Năng-Xay-Mịn-Hẹn-Giờ-Thông-Minh-i.1477950332.44764688763",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-o-khoa-so-chu-u-loai-cao-cap-o-khoa-mat--45340",
    "shortName": "Ổ Khoá Số Chữ U Loại Cao Cấp - Ổ Khoá Mật Mã 4 Số An Toàn Chống Trộm, Bảo Mật Cao",
    "name": "Ổ Khoá Số Chữ U Loại Cao Cấp - Ổ Khoá Mật Mã 4 Số An Toàn Chống Trộm, Bảo Mật Cao",
    "category": "gia-dung-tien-ich",
    "price": 99000,
    "originalPrice": 150000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2217,
    "thumbnail": "/images/products/shopee-51664645340.jpg",
    "images": [
      "/images/products/shopee-51664645340.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua Ổ Khoá Số Chữ U Loại Cao Cấp - Ổ Khoá Mật Mã 4 Số An Toàn Chống Trộm, Bảo Mật Cao giá tốt.",
    "description": "Mua Ổ Khoá Số Chữ U Loại Cao Cấp - Ổ Khoá Mật Mã 4 Số An Toàn Chống Trộm, Bảo Mật Cao giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "51664645340",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Ổ-Khoá-Số-Chữ-U-Loại-Cao-Cấp-Ổ-Khoá-Mật-Mã-4-Số-An-Toàn-Chống-Trộm-Bảo-Mật-Cao-i.1477950332.51664645340",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-bo-got-bao-cu-qua-5-in-1-chat-lieu-cao-c-38483",
    "shortName": "Bộ Gọt Bào Củ Quả 5 In 1 - Chất Liệu Cao Cấp",
    "name": "Bộ Gọt Bào Củ Quả 5 In 1 - Chất Liệu Cao Cấp",
    "category": "gia-dung-tien-ich",
    "price": 69000,
    "originalPrice": 110000,
    "discountPercent": 37,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2270,
    "thumbnail": "/images/products/shopee-57664638483.jpg",
    "images": [
      "/images/products/shopee-57664638483.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Bộ Gọt Bào Củ Quả 5 In 1 - Chất Liệu Cao Cấp giá tốt.",
    "description": "Mua Bộ Gọt Bào Củ Quả 5 In 1 - Chất Liệu Cao Cấp giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "57664638483",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Bộ-Gọt-Bào-Củ-Quả-5-In-1-Chất-Liệu-Cao-Cấp-i.1477950332.57664638483",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-mang-boc-thuc-pham-co-chun-co-gian-100-c-63096",
    "shortName": "Màng Bọc Thực Phẩm Có Chun Co Giãn 100 Cái - Bọc Bát Đĩa, Tô Chén, Nồi, Thực Phẩm Tái Sử Dụng",
    "name": "Màng Bọc Thực Phẩm Có Chun Co Giãn 100 Cái - Bọc Bát Đĩa, Tô Chén, Nồi, Thực Phẩm Tái Sử Dụng",
    "category": "gia-dung-tien-ich",
    "price": 39000,
    "originalPrice": 60000,
    "discountPercent": 35,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2323,
    "thumbnail": "/images/products/shopee-45864163096.jpg",
    "images": [
      "/images/products/shopee-45864163096.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Màng Bọc Thực Phẩm Có Chun Co Giãn 100 Cái - Bọc Bát Đĩa, Tô Chén, Nồi, Thực Phẩm Tái Sử Dụng giá tốt.",
    "description": "Mua Màng Bọc Thực Phẩm Có Chun Co Giãn 100 Cái - Bọc Bát Đĩa, Tô Chén, Nồi, Thực Phẩm Tái Sử Dụng giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "45864163096",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Màng-Bọc-Thực-Phẩm-Có-Chun-Co-Giãn-100-Cái-Bọc-Bát-Đĩa-Tô-Chén-Nồi-Thực-Phẩm-Tái-Sử-Dụng-i.1477950332.45864163096",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-ro-luoi-inox-da-nang-co-quai-xach-ro-ino-49409",
    "shortName": "Rổ Lưới Inox Đa Năng Có Quai Xách - Rổ Inox  304 Tròn Lớn Đựng Rau Củ, Trái Cây, Ráo Nước Tiện Lợi",
    "name": "Rổ Lưới Inox Đa Năng Có Quai Xách - Rổ Inox  304 Tròn Lớn Đựng Rau Củ, Trái Cây, Ráo Nước Tiện Lợi",
    "category": "gia-dung-tien-ich",
    "price": 89000,
    "originalPrice": 135000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2376,
    "thumbnail": "/images/products/shopee-43182649409.jpg",
    "images": [
      "/images/products/shopee-43182649409.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Rổ Lưới Inox Đa Năng Có Quai Xách - Rổ Inox  304 Tròn Lớn Đựng Rau Củ, Trái Cây, Ráo Nước Tiện Lợi giá tốt.",
    "description": "Mua Rổ Lưới Inox Đa Năng Có Quai Xách - Rổ Inox  304 Tròn Lớn Đựng Rau Củ, Trái Cây, Ráo Nước Tiện Lợi giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "43182649409",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Rổ-Lưới-Inox-Đa-Năng-Có-Quai-Xách-Rổ-Inox-304-Tròn-Lớn-Đựng-Rau-Củ-Trái-Cây-Ráo-Nước-Tiện-Lợi-i.1477950332.43182649409",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-ro-inox-ra-vo-gao-28cm-ro-luoi-inox-sau--09895",
    "shortName": "Rổ Inox Rá Vo Gạo 28cm - Rổ Lưới Inox Sâu Lòng Rửa Rau Củ, Trái Cây, Đựng Thực Phẩm Đa Năng",
    "name": "Rổ Inox Rá Vo Gạo 28cm - Rổ Lưới Inox Sâu Lòng Rửa Rau Củ, Trái Cây, Đựng Thực Phẩm Đa Năng",
    "category": "gia-dung-tien-ich",
    "price": 79000,
    "originalPrice": 120000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2429,
    "thumbnail": "/images/products/shopee-57614109895.jpg",
    "images": [
      "/images/products/shopee-57614109895.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua Rổ Inox Rá Vo Gạo 28cm - Rổ Lưới Inox Sâu Lòng Rửa Rau Củ, Trái Cây, Đựng Thực Phẩm Đa Năng giá tốt.",
    "description": "Mua Rổ Inox Rá Vo Gạo 28cm - Rổ Lưới Inox Sâu Lòng Rửa Rau Củ, Trái Cây, Đựng Thực Phẩm Đa Năng giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "57614109895",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Rổ-Inox-Rá-Vo-Gạo-28cm-Rổ-Lưới-Inox-Sâu-Lòng-Rửa-Rau-Củ-Trái-Cây-Đựng-Thực-Phẩm-Đa-Năng-i.1477950332.57614109895",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-ro-inox-chu-nhat-co-chan-de-ro-luoi-inox-09964",
    "shortName": "Rổ Inox Chữ Nhật Có Chân Đế - Rổ Lưới Inox Đựng Rau Củ, Trái Cây, Thực Phẩm Đa Năng Ráo Nước",
    "name": "Rổ Inox Chữ Nhật Có Chân Đế - Rổ Lưới Inox Đựng Rau Củ, Trái Cây, Thực Phẩm Đa Năng Ráo Nước",
    "category": "gia-dung-tien-ich",
    "price": 85000,
    "originalPrice": 130000,
    "discountPercent": 35,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2482,
    "thumbnail": "/images/products/shopee-53164109964.jpg",
    "images": [
      "/images/products/shopee-53164109964.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Rổ Inox Chữ Nhật Có Chân Đế - Rổ Lưới Inox Đựng Rau Củ, Trái Cây, Thực Phẩm Đa Năng Ráo Nước giá tốt.",
    "description": "Mua Rổ Inox Chữ Nhật Có Chân Đế - Rổ Lưới Inox Đựng Rau Củ, Trái Cây, Thực Phẩm Đa Năng Ráo Nước giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "53164109964",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Rổ-Inox-Chữ-Nhật-Có-Chân-Đế-Rổ-Lưới-Inox-Đựng-Rau-Củ-Trái-Cây-Thực-Phẩm-Đa-Năng-Ráo-Nước-i.1477950332.53164109964",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-vi-nuong-inox-304-cao-cap-vi-nuong-bbq-k-14807",
    "shortName": "Vỉ Nướng Inox 304 Cao Cấp - Vỉ Nướng BBQ Kẹp Thịt Cá, Hải Sản Dùng Cho Bếp Than, Bếp Gas",
    "name": "Vỉ Nướng Inox 304 Cao Cấp - Vỉ Nướng BBQ Kẹp Thịt Cá, Hải Sản Dùng Cho Bếp Than, Bếp Gas",
    "category": "gia-dung-tien-ich",
    "price": 95000,
    "originalPrice": 145000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2535,
    "thumbnail": "/images/products/shopee-56564114807.jpg",
    "images": [
      "/images/products/shopee-56564114807.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Vỉ Nướng Inox 304 Cao Cấp - Vỉ Nướng BBQ Kẹp Thịt Cá, Hải Sản Dùng Cho Bếp Than, Bếp Gas giá tốt.",
    "description": "Mua Vỉ Nướng Inox 304 Cao Cấp - Vỉ Nướng BBQ Kẹp Thịt Cá, Hải Sản Dùng Cho Bếp Than, Bếp Gas giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "56564114807",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Vỉ-Nướng-Inox-304-Cao-Cấp-Vỉ-Nướng-BBQ-Kẹp-Thịt-Cá-Hải-Sản-Dùng-Cho-Bếp-Than-Bếp-Gas-i.1477950332.56564114807",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-khan-giay-sipiao-30",
    "shortName": "Giấy Ăn gấu Trúc Sipiao - Thùng 30 Bịch Loại Xịn Dai Dày",
    "name": "Giấy Ăn gấu Trúc Sipiao - Thùng 30 Bịch Loại Xịn Dai Dày",
    "category": "gia-dung-tien-ich",
    "price": 189000,
    "originalPrice": 250000,
    "discountPercent": 24,
    "rating": 5,
    "reviewCount": 8,
    "soldCount": 2588,
    "thumbnail": "/images/products/shopee-29326812332.jpg",
    "images": [
      "/images/products/shopee-29326812332.jpg",
      "/images/products/khan-giay-1.jpg",
      "/images/products/khan-giay-2.jpg",
      "/images/products/khan-giay-3.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": true,
    "shortDescription": "Giấy Ăn gấu Trúc - Thùng 30 Bịch Loại Xịn Dai Dày.",
    "description": "Giấy Ăn gấu Trúc - Thùng 30 Bịch Loại Xịn Dai Dày\n\nGiấy làm hoàn toàn từ bột trúc nguyên sinh, không tẩy trắng, nên chỉ có độ trắng ngà như thân trúc chứ không trắng như các loại giấy thông thường. Có độ dai tự nhiên, thấm nước không rách, nát... , các mẹ thấm nước dùng thay khăn ướt cho các bé rất an toàn nhé.\nThùng 30 gói giấy ăn gấu trúc SIPIAO 6021 nội địa trung [SIÊU DAI] không tẩy trắng gói 300 tờ\nChất liệu: Chiết xuất từ bột trúc- không chất tẩy trắng\nThùng 30 gói - mỗi gói 300 tờ\nĐược phân phối độc quyền ở Việt Nam bởi đơn vị CHEF&CHEF\nGiấy dai, bền, đẹp, mà đặc biệt KHÔNG CHẤT TẨY TRẮNG.\nMột tờ 3 lớp chống ẩm - chống rách - chịu lực ép cao\nCó độ dai tự nhiên, thấm nước không rách, nát... , \nCác mẹ thấm nước dùng thay khăn ướt cho các bé rất an toàn nhé.\nCó độ dai tự nhiên, thấm nước không rách, nát...\n\nGÓC CẢNH BÁO\nHIỆN NAY THỊ TRƯỜNG CÓ RẤT NHIỀU MÃ GIẤY ĂN GẤU TRÚC SIPIAO DO VIỆT NAM SẢN XUẤT CHẤT LƯỢNG KÉM\nCác khách chú ý không lại mua phải hàng kém chất lượng => Giá rẻ mà ko hề rẻ\nVì gói to nhưng giấy thô và dày, 1 gói không đủ 300 tờ\nCách phân biệt các bạn xem trên ảnh shop có hướng dẫn cách phân biệt rồi ạ",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "Violet",
      "Mã Shopee ID": "29326812332",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng Violet",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Giấy-Ăn-gấu-Trúc-Sipiao-Thùng-30-Bịch-Loại-Xịn-Dai-Dày-i.1477950332.29326812332",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-binh-xit-tay-rua-da-nang-ve-sinh-nha-bep-89775",
    "shortName": "Bình Xịt Tẩy Rửa Đa Năng Vệ Sinh Nhà Bếp Kitchen Cleaner, Nhà Tắm Bathroom Cleaner 500ml",
    "name": "Bình Xịt Tẩy Rửa Đa Năng Vệ Sinh Nhà Bếp Kitchen Cleaner, Nhà Tắm Bathroom Cleaner 500ml",
    "category": "tay-rua-ve-sinh",
    "price": 89000,
    "originalPrice": 130000,
    "discountPercent": 32,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2641,
    "thumbnail": "/images/products/shopee-26026889775.jpg",
    "images": [
      "/images/products/shopee-26026889775.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua Bình Xịt Tẩy Rửa Đa Năng Vệ Sinh Nhà Bếp Kitchen Cleaner, Nhà Tắm Bathroom Cleaner 500ml giá tốt.",
    "description": "Mua Bình Xịt Tẩy Rửa Đa Năng Vệ Sinh Nhà Bếp Kitchen Cleaner, Nhà Tắm Bathroom Cleaner 500ml giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "26026889775",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Bình-Xịt-Tẩy-Rửa-Đa-Năng-Vệ-Sinh-Nhà-Bếp-Kitchen-Cleaner-Nhà-Tắm-Bathroom-Cleaner-500ml-i.1477950332.26026889775",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-chao-nuong-khong-dau-chao-dien-nuong-cho-72420",
    "shortName": "Chảo Nướng Không Dầu, Chảo Điện Nướng Chống Dính Đa Năng , Chảo Đá Nướng Thịt BBQ",
    "name": "Chảo Nướng Không Dầu, Chảo Điện Nướng Chống Dính Đa Năng , Chảo Đá Nướng Thịt BBQ",
    "category": "gia-dung-tien-ich",
    "price": 169000,
    "originalPrice": 245000,
    "discountPercent": 31,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2694,
    "thumbnail": "/images/products/shopee-47963872420.jpg",
    "images": [
      "/images/products/shopee-47963872420.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Chảo Nướng Không Dầu, Chảo Điện Nướng Chống Dính Đa Năng , Chảo Đá Nướng Thịt BBQ giá tốt.",
    "description": "Mua Chảo Nướng Không Dầu, Chảo Điện Nướng Chống Dính Đa Năng , Chảo Đá Nướng Thịt BBQ giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "47963872420",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Chảo-Nướng-Không-Dầu-Chảo-Điện-Nướng-Chống-Dính-Đa-Năng-Chảo-Đá-Nướng-Thịt-BBQ-i.1477950332.47963872420",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-chao-chong-dinh-da-hoa-cuong-30cm-chao-c-57230",
    "shortName": "Chảo Chống Dính Đá Hoa Cương 30cm - Chảo Chiên Xào Đa Năng Dùng Bếp Từ, Bếp Gas, Dễ Vệ Sinh",
    "name": "Chảo Chống Dính Đá Hoa Cương 30cm - Chảo Chiên Xào Đa Năng Dùng Bếp Từ, Bếp Gas, Dễ Vệ Sinh",
    "category": "gia-dung-tien-ich",
    "price": 189000,
    "originalPrice": 270000,
    "discountPercent": 30,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2747,
    "thumbnail": "/images/products/shopee-57163857230.jpg",
    "images": [
      "/images/products/shopee-57163857230.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Chảo Chống Dính Đá Hoa Cương 30cm - Chảo Chiên Xào Đa Năng Dùng Bếp Từ, Bếp Gas, Dễ Vệ Sinh giá tốt.",
    "description": "Mua Chảo Chống Dính Đá Hoa Cương 30cm - Chảo Chiên Xào Đa Năng Dùng Bếp Từ, Bếp Gas, Dễ Vệ Sinh giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "57163857230",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Chảo-Chống-Dính-Đá-Hoa-Cương-30cm-Chảo-Chiên-Xào-Đa-Năng-Dùng-Bếp-Từ-Bếp-Gas-Dễ-Vệ-Sinh-i.1477950332.57163857230",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-noi-lau-dien-ozhu-mini-2-tang-kem-gia-ha-81398",
    "shortName": "Nồi Lẩu Điện Ozhu Mini 2 Tầng Kèm Giá Hấp Dung Tích 1.8L Chống Dính Vấn Đá Tiện Lợi",
    "name": "Nồi Lẩu Điện Ozhu Mini 2 Tầng Kèm Giá Hấp Dung Tích 1.8L Chống Dính Vấn Đá Tiện Lợi",
    "category": "gia-dung-tien-ich",
    "price": 219000,
    "originalPrice": 320000,
    "discountPercent": 32,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2800,
    "thumbnail": "/images/products/shopee-47363881398.jpg",
    "images": [
      "/images/products/shopee-47363881398.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Nồi Lẩu Điện Ozhu Mini 2 Tầng Kèm Giá Hấp Dung Tích 1.",
    "description": "Mua Nồi Lẩu Điện Ozhu Mini 2 Tầng Kèm Giá Hấp Dung Tích 1.8L Chống Dính Vấn Đá Tiện Lợi giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "47363881398",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Nồi-Lẩu-Điện-Ozhu-Mini-2-Tầng-Kèm-Giá-Hấp-Dung-Tích-1.8L-Chống-Dính-Vấn-Đá-Tiện-Lợi-i.1477950332.47363881398",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-dung-cu-xay-hanh-toi-ot-cam-tay-may-xay--51407",
    "shortName": "Dụng Cụ Xay Hành Tỏi Ớt Cầm Tay - Máy Xay Thực Phẩm Mini Dây Kéo Tiện Lợi",
    "name": "Dụng Cụ Xay Hành Tỏi Ớt Cầm Tay - Máy Xay Thực Phẩm Mini Dây Kéo Tiện Lợi",
    "category": "gia-dung-tien-ich",
    "price": 49000,
    "originalPrice": 75000,
    "discountPercent": 35,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2853,
    "thumbnail": "/images/products/shopee-52363851407.jpg",
    "images": [
      "/images/products/shopee-52363851407.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua Dụng Cụ Xay Hành Tỏi Ớt Cầm Tay - Máy Xay Thực Phẩm Mini Dây Kéo Tiện Lợi giá tốt.",
    "description": "Mua Dụng Cụ Xay Hành Tỏi Ớt Cầm Tay - Máy Xay Thực Phẩm Mini Dây Kéo Tiện Lợi giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "52363851407",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Dụng-Cụ-Xay-Hành-Tỏi-Ớt-Cầm-Tay-Máy-Xay-Thực-Phẩm-Mini-Dây-Kéo-Tiện-Lợi-i.1477950332.52363851407",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-tui-loc-rac-bon-rua-chen-tui-luoi-loc-ra-75570",
    "shortName": "Túi Lọc Rác Bồn Rửa Chén - Túi Lưới Lọc Rác Chậu Rửa Bát Co Giãn, Tiện Lợi",
    "name": "Túi Lọc Rác Bồn Rửa Chén - Túi Lưới Lọc Rác Chậu Rửa Bát Co Giãn, Tiện Lợi",
    "category": "gia-dung-tien-ich",
    "price": 29000,
    "originalPrice": 50000,
    "discountPercent": 42,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 2906,
    "thumbnail": "/images/products/shopee-27395275570.jpg",
    "images": [
      "/images/products/shopee-27395275570.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Túi Lọc Rác Bồn Rửa Chén - Túi Lưới Lọc Rác Chậu Rửa Bát Co Giãn, Tiện Lợi giá tốt.",
    "description": "Mua Túi Lọc Rác Bồn Rửa Chén - Túi Lưới Lọc Rác Chậu Rửa Bát Co Giãn, Tiện Lợi giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "27395275570",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Túi-Lọc-Rác-Bồn-Rửa-Chén-Túi-Lưới-Lọc-Rác-Chậu-Rửa-Bát-Co-Giãn-Tiện-Lợi-i.1477950332.27395275570",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-may-xay-hat-kho-cong-suat-300w-thiet-ke--21953",
    "shortName": "Máy Xay Hạt Khô Công Suất 300W Thiết Kế Bằng Thép Không Gỉ 6 Lưỡi Đa Năng An Toàn",
    "name": "Máy Xay Hạt Khô Công Suất 300W Thiết Kế Bằng Thép Không Gỉ 6 Lưỡi Đa Năng An Toàn",
    "category": "gia-dung-tien-ich",
    "price": 259000,
    "originalPrice": 350000,
    "discountPercent": 26,
    "rating": 4.89,
    "reviewCount": 9,
    "soldCount": 2959,
    "thumbnail": "/images/products/shopee-44032421953.jpg",
    "images": [
      "/images/products/shopee-44032421953.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Máy Xay Hạt Khô Đa Năng – Xay Nhanh, Tiện Lợi Cho Mọi Gia Đình.",
    "description": "Máy Xay Hạt Khô Đa Năng – Xay Nhanh, Tiện Lợi Cho Mọi Gia Đình\nMáy xay hạt khô công suất 300W được thiết kế với 6 lưỡi dao inox sắc bén, giúp xay nhanh nhiều loại hạt, ngũ cốc, gia vị và thực phẩm khô. Kiểu dáng nhỏ gọn, dễ sử dụng, phù hợp cho gia đình, quán ăn hoặc cửa hàng chế biến thực phẩm.\n\nTHÔNG TIN SẢN PHẨM\nCông suất: 300W\nĐiện áp: 220V\nChất liệu cối: Inox không gỉ\nChất liệu lưỡi dao: Inox 6 cánh\nKích thước: 19 × 18 × 36 cm\nDung tích xay tham khảo: khoảng 800g/lần (tùy loại nguyên liệu)\nThiết kế: Tay cầm tiện lợi, thân máy chắc chắn\n\nƯU ĐIỂM NỔI BẬT\n✅ Động Cơ Công Suất 300W\nHỗ trợ xay nhanh nhiều loại nguyên liệu khô.\nVận hành ổn định, đáp ứng nhu cầu sử dụng hằng ngày.\nTiết kiệm thời gian chế biến thực phẩm.\n✅ Lưỡi Dao Inox 6 Cánh\nLưỡi dao sắc bén, bền bỉ.\nGiúp nguyên liệu được xay nhỏ và đồng đều hơn.\nChống gỉ sét, dễ vệ sinh sau khi sử dụng.\n✅ Thiết Kế Tiện Lợi\nCối inox bền đẹp, hạn chế bám mùi.\nĐế chống trượt giúp máy đứng vững khi hoạt động.\nThiết kế thân máy dễ cầm nắm và thao tác.\nCó thể nghiêng thân máy để lấy nguyên liệu thuận tiện (nếu đúng với sản phẩm).\n\nCÔNG DỤNG\n✔ Xay các loại hạt như đậu xanh, đậu nành, gạo, mè, tiêu, hạt điều...\n✔ Xay ngũ cốc, bột khô.\n✔ Xay gia vị như tiêu, quế, hồi, ớt khô...\n✔ Xay dược liệu khô (phù hợp với nguyên liệu có độ cứng vừa phải).\n✔ Có thể sử dụng để xay một số nguyên liệu mềm theo hướng dẫn của nhà sản xuất.\n\nHƯỚNG DẪN SỬ DỤNG\nCho nguyên liệu vào cối, không vượt quá dung tích khuyến nghị.\nĐậy kín nắp trước khi vận hành.\nCắm điện và nhấn công tắc để xay.\nSau khi sử dụng, rút nguồn điện và vệ sinh cối xay sạch sẽ.\n\nLƯU Ý\nKhông vận hành máy liên tục trong thời gian dài để bảo vệ động cơ.\nKhông cho quá nhiều nguyên liệu vào cùng lúc.\nKhông nhúng phần động cơ vào nước.\nĐể xa tầm tay trẻ em.\n\nCAM KẾT\nSản phẩm đúng hình ảnh và mô tả.\nKiểm tra kỹ trước khi đóng gói.\nHỗ trợ đổi trả theo chính sách Shopee nếu sản phẩm có lỗi từ nhà sản xuất.",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "MIRA",
      "Mã Shopee ID": "44032421953",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng MIRA",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Máy-Xay-Hạt-Khô-Công-Suất-300W-Thiết-Kế-Bằng-Thép-Không-Gỉ-6-Lưỡi-Đa-Năng-An-Toàn-i.1477950332.44032421953",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-gio-luoi-loc-rac-inox-cho-bon-rua-luoi-l-52679",
    "shortName": "Giỏ Lưới Lọc Rác Inox Cho Bồn Rửa – Lưới Lọc Thức Ăn Thừa, Giữ Bồn Sạch Sẽ",
    "name": "Giỏ Lưới Lọc Rác Inox Cho Bồn Rửa – Lưới Lọc Thức Ăn Thừa, Giữ Bồn Sạch Sẽ",
    "category": "gia-dung-tien-ich",
    "price": 35000,
    "originalPrice": 55000,
    "discountPercent": 36,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 3012,
    "thumbnail": "/images/products/shopee-54963652679.jpg",
    "images": [
      "/images/products/shopee-54963652679.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Giỏ Lưới Lọc Rác Inox Cho Bồn Rửa – Lưới Lọc Thức Ăn Thừa, Giữ Bồn Sạch Sẽ giá tốt.",
    "description": "Mua Giỏ Lưới Lọc Rác Inox Cho Bồn Rửa – Lưới Lọc Thức Ăn Thừa, Giữ Bồn Sạch Sẽ giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "54963652679",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Giỏ-Lưới-Lọc-Rác-Inox-Cho-Bồn-Rửa-–-Lưới-Lọc-Thức-Ăn-Thừa-Giữ-Bồn-Sạch-Sẽ-i.1477950332.54963652679",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-bot-tay-xoong-noi-han-quoc-tay-xoong-noi-54252",
    "shortName": "Bột Tẩy Xoong Nồi Hàn Quốc Tẩy Xoong Nồi Tẩy Trắng Nồi Chảo Sàn Nhà Tắm Bếp Nhập Khẩu Đa Năng",
    "name": "Bột Tẩy Xoong Nồi Hàn Quốc Tẩy Xoong Nồi Tẩy Trắng Nồi Chảo Sàn Nhà Tắm Bếp Nhập Khẩu Đa Năng",
    "category": "tay-rua-ve-sinh",
    "price": 69000,
    "originalPrice": 110000,
    "discountPercent": 37,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 3065,
    "thumbnail": "/images/products/shopee-45813654252.jpg",
    "images": [
      "/images/products/shopee-45813654252.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua Bột Tẩy Xoong Nồi Hàn Quốc Tẩy Xoong Nồi Tẩy Trắng Nồi Chảo Sàn Nhà Tắm Bếp Nhập Khẩu Đa Năng giá tốt.",
    "description": "Mua Bột Tẩy Xoong Nồi Hàn Quốc Tẩy Xoong Nồi Tẩy Trắng Nồi Chảo Sàn Nhà Tắm Bếp Nhập Khẩu Đa Năng giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "45813654252",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Bột-Tẩy-Xoong-Nồi-Hàn-Quốc-Tẩy-Xoong-Nồi-Tẩy-Trắng-Nồi-Chảo-Sàn-Nhà-Tắm-Bếp-Nhập-Khẩu-Đa-Năng-i.1477950332.45813654252",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-dung-cu-mai-dao-keo-3-luoi-inox-cao-cap--20939",
    "shortName": "Dụng cụ mài dao kéo 3 lưỡi inox cao cấp cầm tay, mài dao bén sắc nhanh tiện lợi",
    "name": "Dụng cụ mài dao kéo 3 lưỡi inox cao cấp cầm tay, mài dao bén sắc nhanh tiện lợi",
    "category": "gia-dung-tien-ich",
    "price": 59000,
    "originalPrice": 90000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 3118,
    "thumbnail": "/images/products/shopee-24548320939.jpg",
    "images": [
      "/images/products/shopee-24548320939.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Dụng cụ mài dao kéo 3 lưỡi inox cao cấp cầm tay, mài dao bén sắc nhanh tiện lợi giá tốt.",
    "description": "Mua Dụng cụ mài dao kéo 3 lưỡi inox cao cấp cầm tay, mài dao bén sắc nhanh tiện lợi giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "24548320939",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Dụng-cụ-mài-dao-kéo-3-lưỡi-inox-cao-cấp-cầm-tay-mài-dao-bén-sắc-nhanh-tiện-lợi-i.1477950332.24548320939",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-chaindrite-600ml",
    "shortName": "Bình xịt diệt MỐI MỌT KIẾN GIÁN CÔN TRÙNG tận gốc hiệu quả an toàn hàng Thái Lan 600ml",
    "name": "(Chính hãng) Bình xịt diệt MỐI MỌT KIẾN GIÁN CÔN TRÙNG tận gốc hiệu quả an toàn hàng Thái Lan 600ml",
    "category": "duoi-chuot-con-trung",
    "price": 135000,
    "originalPrice": 190000,
    "discountPercent": 29,
    "rating": 4.95,
    "reviewCount": 102,
    "soldCount": 3171,
    "thumbnail": "/images/products/shopee-50854875110.jpg",
    "images": [
      "/images/products/shopee-50854875110.jpg",
      "/images/products/chaindrite-1.jpg",
      "/images/products/chaindrite-2.jpg",
      "/images/products/chaindrite-3.jpg",
      "/images/products/chaindrite-4.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": true,
    "shortDescription": "Chai xịt diệt mối, mọt, kiến, gián, côn trùng tận gốc Chaindrite siêu mạnh nhập khẩu Thái Lan chính hãng.",
    "description": "Chai xịt diệt mối, mọt, kiến, gián, côn trùng tận gốc Chaindrite siêu mạnh nhập khẩu Thái Lan chính hãng.\nHiệu quả cao trong việc diệt và ngăn chặn mối mọt, bảo vệ nội thất gỗ trong gia đình. Dung tích lớn, dễ sử dụng, thiết kế dạng xịt tiện lợi. Có thể cải tiến với hương thơm dễ chịu, an toàn cho không gian sống khi sử dụng đúng cách.\n\nCông dụng:\nDiệt mối tận gốc\nHạn chế mùi khó chịu\nBảo vệ đồ gỗ, tường nhà\n\nHướng dẫn:\nLắc đều, xịt trực tiếp vào nơi có mối hoặc khu vực nghi có mối (chân tường, tủ gỗ,...). Tránh xa thực phẩm, trẻ nhỏ và thú cưng.\n\nCam kết:\n✔ Chính hãng 100%, không chính hãng đền gấp 3\n✔ Hoàn tiền nếu không hiệu quả hoặc gây kích ứng\n✔ Có giấy tờ chứng minh chất lượng\n\nịt ệtmối    ệtmọt ệtgián ệtkiến ối ọt ến án",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "CHAINDRITE",
      "Mã Shopee ID": "50854875110",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng CHAINDRITE",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/(Chính-hãng)-Bình-xịt-diệt-MỐI-MỌT-KIẾN-GIÁN-CÔN-TRÙNG-tận-gốc-hiệu-quả-an-toàn-hàng-Thái-Lan-600ml-i.1477950332.50854875110",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-diet-ruoi-dang-xit-king-bio-300ml-xit-la-85022",
    "shortName": "Diệt ruồi dạng xịt King Bio 300ml - Xịt là diệt ngay - Diệt ruồi nhà, ruồi đen, ruồi cánh bướm",
    "name": "Diệt ruồi dạng xịt King Bio 300ml - Xịt là diệt ngay - Diệt ruồi nhà, ruồi đen, ruồi cánh bướm",
    "category": "duoi-chuot-con-trung",
    "price": 99000,
    "originalPrice": 140000,
    "discountPercent": 29,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 3224,
    "thumbnail": "/images/products/shopee-48501685022.jpg",
    "images": [
      "/images/products/shopee-48501685022.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Diệt ruồi dạng xịt King Bio 300ml - Xịt là diệt ngay - Diệt ruồi nhà, ruồi đen, ruồi cánh bướm giá tốt.",
    "description": "Mua Diệt ruồi dạng xịt King Bio 300ml - Xịt là diệt ngay - Diệt ruồi nhà, ruồi đen, ruồi cánh bướm giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "48501685022",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Diệt-ruồi-dạng-xịt-King-Bio-300ml-Xịt-là-diệt-ngay-Diệt-ruồi-nhà-ruồi-đen-ruồi-cánh-bướm-i.1477950332.48501685022",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-moc-dan-tuong-inox-304-treo-do-nang-treo-01251",
    "shortName": "Móc Dán Tường INOX 304 Treo Đồ nặng, Treo Thớt, Nồi Niêu Treo Đồ Đa Năng Dán Mọi Bề Mặt",
    "name": "Móc Dán Tường INOX 304 Treo Đồ nặng, Treo Thớt, Nồi Niêu Treo Đồ Đa Năng Dán Mọi Bề Mặt",
    "category": "gia-dung-tien-ich",
    "price": 89000,
    "originalPrice": 135000,
    "discountPercent": 34,
    "rating": 5,
    "reviewCount": 2,
    "soldCount": 3277,
    "thumbnail": "/images/products/shopee-52013401251.jpg",
    "images": [
      "/images/products/shopee-52013401251.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Móc Treo Dán Tường Inox 304 Chịu Lực 8KG - Móc Treo Đồ Nhà Bếp, Nhà Tắm Không Cần Khoan, Chống Gỉ Cao Cấp.",
    "description": "Móc Treo Dán Tường Inox 304 Chịu Lực 8KG - Móc Treo Đồ Nhà Bếp, Nhà Tắm Không Cần Khoan, Chống Gỉ Cao Cấp\nMÔ TẢ SẢN PHẨM\nMóc treo dán tường Inox 304 là giải pháp lưu trữ thông minh giúp tiết kiệm không gian, giữ cho nhà bếp, nhà tắm và phòng khách luôn gọn gàng. Sản phẩm sử dụng keo cường lực bám dính chắc chắn, không cần khoan tường, lắp đặt nhanh chóng và đảm bảo tính thẩm mỹ.\n\nTHÔNG TIN SẢN PHẨM\nChất liệu: Inox 304 cao cấp\nKiểu dáng: Móc số 7\nKích thước: 4.2 cm\nMàu sắc: Bạc Inox\nChịu lực: Tối đa khoảng 8kg/móc (trên bề mặt phù hợp)\nLắp đặt: Keo dán cường lực, không cần khoan\nỨng dụng: Nhà bếp, phòng tắm, phòng khách, phòng ngủ, ban công, văn phòng...\n\nƯU ĐIỂM NỔI BẬT\n✅ Inox 304 chống gỉ sét, chống ăn mòn, bền đẹp theo thời gian.\n✅ Chịu lực tốt lên đến 8kg khi dán đúng kỹ thuật.\n✅ Không cần khoan tường, không làm hư hỏng bề mặt.\n✅ Keo cường lực bám chắc, chống bong tróc trong môi trường ẩm ướt.\n✅ Thiết kế nhỏ gọn, hiện đại, phù hợp nhiều không gian.\n✅ Tuổi thọ sử dụng lâu dài, có thể lên đến 10 năm trong điều kiện sử dụng phù hợp.\n\nCÔNG DỤNG\nTreo khăn tắm, khăn mặt.\nTreo vá, muỗng, dụng cụ nhà bếp.\nTreo quần áo, mũ, túi xách.\nTreo chổi, cây lau nhà và các vật dụng gia đình.\nGiúp tối ưu không gian sống, giữ nhà cửa luôn gọn gàng.\n\nBỀ MẶT PHÙ HỢP\n✔ Gạch men, gạch ốp tường.\n✔ Kính.\n✔ Đá hoa cương, đá granite.\n✔ Inox, kim loại.\n✔ Gỗ phẳng và các bề mặt nhẵn.\nKhông khuyến khích sử dụng trên: tường sơn nước, tường xi măng, tường gạch thô, tường dán giấy hoặc bề mặt nhiều bụi vì độ bám dính sẽ giảm.\n\nHƯỚNG DẪN LẮP ĐẶT\nLau sạch và làm khô hoàn toàn bề mặt trước khi dán.\nBóc lớp bảo vệ keo và dán lên vị trí mong muốn.\nMiết chặt để loại bỏ bọt khí.\nNên chờ từ 24–48 giờ trước khi treo vật nặng để keo đạt độ bám tối ưu.\n\nCAM KẾT\n✔ Hàng đúng mô tả, chất lượng đảm bảo.\n✔ Kiểm tra kỹ sản phẩm trước khi đóng gói.\n✔ Hỗ trợ đổi trả theo chính sách của Shopee nếu sản phẩm có lỗi từ nhà sản xuất.",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T",
      "Mã Shopee ID": "52013401251",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Móc-Dán-Tường-INOX-304-Treo-Đồ-nặng-Treo-Thớt-Nồi-Niêu-Treo-Đồ-Đa-Năng-Dán-Mọi-Bề-Mặt-i.1477950332.52013401251",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-khay-inox-304-co-nap-da-nang-om-ca-nau-l-89694",
    "shortName": "Khay Inox 304 Có Nắp Đa Năng - Om Cá, Nấu Lẩu, Hấp Thực Phẩm, Chịu Nhiệt, Dùng Mọi Loại Bếp",
    "name": "Khay Inox 304 Có Nắp Đa Năng - Om Cá, Nấu Lẩu, Hấp Thực Phẩm, Chịu Nhiệt, Dùng Mọi Loại Bếp",
    "category": "gia-dung-tien-ich",
    "price": 159000,
    "originalPrice": 230000,
    "discountPercent": 31,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 3330,
    "thumbnail": "/images/products/shopee-52363389694.jpg",
    "images": [
      "/images/products/shopee-52363389694.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Khay Inox 304 Có Nắp Đa Năng - Om Cá, Nấu Lẩu, Hấp Thực Phẩm, Chịu Nhiệt, Dùng Mọi Loại Bếp giá tốt.",
    "description": "Mua Khay Inox 304 Có Nắp Đa Năng - Om Cá, Nấu Lẩu, Hấp Thực Phẩm, Chịu Nhiệt, Dùng Mọi Loại Bếp giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "52363389694",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Khay-Inox-304-Có-Nắp-Đa-Năng-Om-Cá-Nấu-Lẩu-Hấp-Thực-Phẩm-Chịu-Nhiệt-Dùng-Mọi-Loại-Bếp-i.1477950332.52363389694",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-set-ro-chau-inox-304-cao-cap-2-mon-sang--01454",
    "shortName": "Set Rổ Chậu Inox 304 Cao Cấp 2 Món Sáng Bóng Chống Gỉ",
    "name": "Set Rổ Chậu Inox 304 Cao Cấp 2 Món Sáng Bóng Chống Gỉ",
    "category": "gia-dung-tien-ich",
    "price": 139000,
    "originalPrice": 200000,
    "discountPercent": 31,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 3383,
    "thumbnail": "/images/products/shopee-50713401454.jpg",
    "images": [
      "/images/products/shopee-50713401454.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Set Rổ Chậu Inox 304 Cao Cấp 2 Món Sáng Bóng Chống Gỉ giá tốt.",
    "description": "Mua Set Rổ Chậu Inox 304 Cao Cấp 2 Món Sáng Bóng Chống Gỉ giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "50713401454",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Set-Rổ-Chậu-Inox-304-Cao-Cấp-2-Món-Sáng-Bóng-Chống-Gỉ-i.1477950332.50713401454",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-khan-lau-da-nang-bang-soi-than-tre-khan--93301",
    "shortName": "Khăn Lau Đa Năng Bằng Sợi Than Tre, Khăn Lau Tay Nhà Bếp Siêu Thấm Hút, Kháng Khuẩn Mềm Mại 20x20cm",
    "name": "Khăn Lau Đa Năng Bằng Sợi Than Tre, Khăn Lau Tay Nhà Bếp Siêu Thấm Hút, Kháng Khuẩn Mềm Mại 20x20cm",
    "category": "gia-dung-tien-ich",
    "price": 39000,
    "originalPrice": 60000,
    "discountPercent": 35,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 3436,
    "thumbnail": "/images/products/shopee-51113393301.jpg",
    "images": [
      "/images/products/shopee-51113393301.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Khăn Lau Đa Năng Bằng Sợi Than Tre, Khăn Lau Tay Nhà Bếp Siêu Thấm Hút, Kháng Khuẩn Mềm Mại 20x20cm giá tốt.",
    "description": "Mua Khăn Lau Đa Năng Bằng Sợi Than Tre, Khăn Lau Tay Nhà Bếp Siêu Thấm Hút, Kháng Khuẩn Mềm Mại 20x20cm giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "51113393301",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Khăn-Lau-Đa-Năng-Bằng-Sợi-Than-Tre-Khăn-Lau-Tay-Nhà-Bếp-Siêu-Thấm-Hút-Kháng-Khuẩn-Mềm-Mại-20x20cm-i.1477950332.51113393301",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-vien-duoi-chuot-sieu-manh-hieu-qua-1-nam-42321",
    "shortName": "Viên đuổi chuột siêu mạnh Hiệu quả 1 năm An toàn không độc Dùng được cho cả nhà bếp và kho chứa đồ",
    "name": "Viên đuổi chuột siêu mạnh Hiệu quả 1 năm An toàn không độc Dùng được cho cả nhà bếp và kho chứa đồ",
    "category": "duoi-chuot-con-trung",
    "price": 89000,
    "originalPrice": 130000,
    "discountPercent": 32,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 3489,
    "thumbnail": "/images/products/shopee-51307042321.jpg",
    "images": [
      "/images/products/shopee-51307042321.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua Viên đuổi chuột siêu mạnh Hiệu quả 1 năm An toàn không độc Dùng được cho cả nhà bếp và kho chứa đồ giá tốt.",
    "description": "Mua Viên đuổi chuột siêu mạnh Hiệu quả 1 năm An toàn không độc Dùng được cho cả nhà bếp và kho chứa đồ giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "51307042321",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Viên-đuổi-chuột-siêu-mạnh-Hiệu-quả-1-năm-An-toàn-không-độc-Dùng-được-cho-cả-nhà-bếp-và-kho-chứa-đồ-i.1477950332.51307042321",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-xit-con-trung-chaindrite-thai-lan-600ml--62700",
    "shortName": "Xịt Côn Trùng Chaindrite Thái Lan 600ml - Diệt Mối, Gián, Muỗi Tận Gốc Màu Xanh",
    "name": "Xịt Côn Trùng Chaindrite Thái Lan 600ml - Diệt Mối, Gián, Muỗi Tận Gốc Màu Xanh",
    "category": "duoi-chuot-con-trung",
    "price": 135000,
    "originalPrice": 190000,
    "discountPercent": 29,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 3542,
    "thumbnail": "/images/products/shopee-56309562700.jpg",
    "images": [
      "/images/products/shopee-56309562700.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Xịt Côn Trùng Chaindrite Thái Lan 600ml - Diệt Mối, Gián, Muỗi Tận Gốc Màu Xanh giá tốt.",
    "description": "Mua Xịt Côn Trùng Chaindrite Thái Lan 600ml - Diệt Mối, Gián, Muỗi Tận Gốc Màu Xanh giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "56309562700",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Xịt-Côn-Trùng-Chaindrite-Thái-Lan-600ml-Diệt-Mối-Gián-Muỗi-Tận-Gốc-Màu-Xanh-i.1477950332.56309562700",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-bot-tay-rong-reu-500g",
    "shortName": "Bột Tẩy Rong Rêu Siêu Sạch D&T Việt Nam 500G – Diệt Tận Gốc, Sạch Nhanh 10 Phút",
    "name": "Bột Tẩy Rong Rêu Siêu Sạch D&amp;T Việt Nam 500G – Diệt Tận Gốc, Sạch Nhanh 10 Phút",
    "category": "xu-ly-rong-reu",
    "price": 89000,
    "originalPrice": 135000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 3595,
    "thumbnail": "/images/products/shopee-52759532752.jpg",
    "images": [
      "/images/products/shopee-52759532752.jpg",
      "/images/products/bot-tay-1.jpg",
      "/images/products/bot-tay-2.jpg",
      "/images/products/bot-tay-3.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": true,
    "shortDescription": "Mua Bột Tẩy Rong Rêu Siêu Sạch D&amp;T Việt Nam 500G – Diệt Tận Gốc, Sạch Nhanh 10 Phút giá tốt.",
    "description": "Mua Bột Tẩy Rong Rêu Siêu Sạch D&amp;T Việt Nam 500G – Diệt Tận Gốc, Sạch Nhanh 10 Phút giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "52759532752",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Bột-Tẩy-Rong-Rêu-Siêu-Sạch-D-T-Việt-Nam-500G-–-Diệt-Tận-Gốc-Sạch-Nhanh-10-Phút-i.1477950332.52759532752",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-nap-day-cong-thoat-nuoc-ngan-mui-thong-m-95932",
    "shortName": "Nắp Đậy Cống Thoát Nước Ngăn Mùi Thông Minh, Ngăn Côn Trùng, Tránh Tắc Nghẽn Cống",
    "name": "Nắp Đậy Cống Thoát Nước Ngăn Mùi Thông Minh, Ngăn Côn Trùng, Tránh Tắc Nghẽn Cống",
    "category": "gia-dung-tien-ich",
    "price": 49000,
    "originalPrice": 80000,
    "discountPercent": 39,
    "rating": 5,
    "reviewCount": 7,
    "soldCount": 3648,
    "thumbnail": "/images/products/shopee-28726595932.jpg",
    "images": [
      "/images/products/shopee-28726595932.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Nắp Đậy Cống Thoát Nước Ngăn Mùi Thông Minh, Ngăn Côn Trùng, Tránh Tắc Nghẽn Cống.",
    "description": "Nắp Đậy Cống Thoát Nước Ngăn Mùi Thông Minh, Ngăn Côn Trùng, Tránh Tắc Nghẽn Cống\n1. Thông tin sản phẩm:\n- Chất liệu: Đồng thau nguyên chất\n- Kích thước: 4.2x3x3.2cm, vừa với đường kính ống khoảng 38-41mm\n- Thoát nước nhanh 36 lít / phút cho máy giặt 10 kg thoát nước cũng có thể dễ dàng xử lý\n - Phù hợp với đường ống chậu rửa, thoát sàn, nhà tắm, nhà bếp\nPhù hợp với hầu hết các đường ống thoát nước sàn và hầu hết các đường cống trong nhà bếp và phòng tắm hiện nay.\n- Thoát nước nhanh và có thể ngăn chặn các chất độc hại, côn trùng hoặc mùi hôi thoát ra qua lỗ thoát nước, đồng thời cũng là  van một chiều tốt.\n- NGĂN CHẶN MÙI HÔI VÀ VI KHUẨN: Nắp cống chống mùi với cơ chế khóa 1 chiều thông minh cùng lớp cao su mềm TPR tạo thành lớp bảo vệ vững chắc, ngăn chặn mùi hôi và vi khuẩn xâm nhập từ bên dưới đường ống.\n- THOÁT NƯỚC DỄ DÀNG: Cấu tạo ống trụ gồm 4 cửa xoáy 360 độ, giúp thoát nước nhanh và ổn định.\nXÓA BỎ NỖI LO TẮC CỐNG: Nhờ lớp lưới ngăn chặn rác, tóc và các cặn bẩn hiệu quả, bạn sẽ không còn lo đường ống bị tắc nghẽn hay trào nước.\n- AN TOÀN, TIỆN LỢI: Lắp đặt dễ dàng, bảo vệ sức khỏe bạn và gia đình.\n- TIẾT KIỆM CHI PHÍ: Thay thế các loại nắp inox đắt đỏ, kém hiệu quả. Giờ đây bạn chỉ cần bỏ ra chi phí rất nhỏ mà vẫn đạt được hiệu quả vượt trội.\n-Tự động mở khi thoát nước, đóng cửa sau khi thoát nước.\n- Áp dụng: Được sử dụng rộng rãi cho Ống ống trong Nhà vệ sinh, Phòng tắm, Nhà bếp, Sàn nhà và hơn thế nữa.\n2.Nguyên tắc làm việc:\n(1) Khi nước vào cống mặt đất, trọng lực của nước sẽ mở đáy miếng đệm ABS, nhỏ giọt.\n(2) Sau khi ngắt nước, miếng đệm sẽ tự động đóng lại do trọng lực. Hoàn toàn được bịt kín để khí trong đường ống và quá dòng không thể lên được.\n\nệsinh",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "Ưu Việt",
      "Mã Shopee ID": "28726595932",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng Ưu Việt",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu: Đồng thau nguyên chất",
      "Kích thước: 4.2x3x3.2cm, vừa với đường kính ống khoảng 38-41mm",
      "Thoát nước nhanh 36 lít / phút cho máy giặt 10 kg thoát nước cũng có thể dễ dàng xử lý",
      "Phù hợp với đường ống chậu rửa, thoát sàn, nhà tắm, nhà bếp"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Nắp-Đậy-Cống-Thoát-Nước-Ngăn-Mùi-Thông-Minh-Ngăn-Côn-Trùng-Tránh-Tắc-Nghẽn-Cống-i.1477950332.28726595932",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-mua-2-1-gel-nano-bac-gaolibai-danh-bay-c-05055",
    "shortName": "MUA 2+1 Gel Nano Bạc GAOLIBAI - Đánh Bay Cao Răng, Sạch Mảng Bám, Trắng Răng Nhập Khẩu Nhật Bản",
    "name": "MUA 2+1 Gel Nano Bạc GAOLIBAI - Đánh Bay Cao Răng, Sạch Mảng Bám, Trắng Răng Nhập Khẩu Nhật Bản",
    "category": "tay-rua-ve-sinh",
    "price": 219000,
    "originalPrice": 320000,
    "discountPercent": 32,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 201,
    "thumbnail": "/images/products/shopee-27576605055.jpg",
    "images": [
      "/images/products/shopee-27576605055.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua MUA 2+1 Gel Nano Bạc GAOLIBAI - Đánh Bay Cao Răng, Sạch Mảng Bám, Trắng Răng Nhập Khẩu Nhật Bản giá tốt.",
    "description": "Mua MUA 2+1 Gel Nano Bạc GAOLIBAI - Đánh Bay Cao Răng, Sạch Mảng Bám, Trắng Răng Nhập Khẩu Nhật Bản giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "27576605055",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/MUA-2-1-Gel-Nano-Bạc-GAOLIBAI-Đánh-Bay-Cao-Răng-Sạch-Mảng-Bám-Trắng-Răng-Nhập-Khẩu-Nhật-Bản-i.1477950332.27576605055",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-gel-nano-bac-gaolibai-danh-bay-cao-rang--87858",
    "shortName": "Gel Nano Bạc GAOLIBAI - Đánh Bay Cao Răng, Sạch Mảng Bám, Trắng Răng Nhập Khẩu Nhật Bản",
    "name": "Gel Nano Bạc GAOLIBAI - Đánh Bay Cao Răng, Sạch Mảng Bám, Trắng Răng Nhập Khẩu Nhật Bản",
    "category": "tay-rua-ve-sinh",
    "price": 129000,
    "originalPrice": 180000,
    "discountPercent": 28,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 254,
    "thumbnail": "/images/products/shopee-27126587858.jpg",
    "images": [
      "/images/products/shopee-27126587858.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Gel Nano Bạc GAOLIBAI - Đánh Bay Cao Răng, Sạch Mảng Bám, Trắng Răng Nhập Khẩu Nhật Bản giá tốt.",
    "description": "Mua Gel Nano Bạc GAOLIBAI - Đánh Bay Cao Răng, Sạch Mảng Bám, Trắng Răng Nhập Khẩu Nhật Bản giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "27126587858",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Gel-Nano-Bạc-GAOLIBAI-Đánh-Bay-Cao-Răng-Sạch-Mảng-Bám-Trắng-Răng-Nhập-Khẩu-Nhật-Bản-i.1477950332.27126587858",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-hop-12-vien-tay-long-may-giat-the-he-moi-29276",
    "shortName": "Hộp 12 Viên Tẩy Lồng Máy Giặt Thế Hệ Mới - Hương Chanh Tươi Mát",
    "name": "Hộp 12 Viên Tẩy Lồng Máy Giặt Thế Hệ Mới - Hương Chanh Tươi Mát",
    "category": "tay-rua-ve-sinh",
    "price": 49000,
    "originalPrice": 75000,
    "discountPercent": 35,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 307,
    "thumbnail": "/images/products/shopee-29526829276.jpg",
    "images": [
      "/images/products/shopee-29526829276.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Hộp 12 Viên Tẩy Lồng Máy Giặt Thế Hệ Mới - Hương Chanh Tươi Mát giá tốt.",
    "description": "Mua Hộp 12 Viên Tẩy Lồng Máy Giặt Thế Hệ Mới - Hương Chanh Tươi Mát giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "29526829276",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Hộp-12-Viên-Tẩy-Lồng-Máy-Giặt-Thế-Hệ-Mới-Hương-Chanh-Tươi-Mát-i.1477950332.29526829276",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-lo-lon-tha-bon-cau-tinh-nang-diet-khuan--38664",
    "shortName": "Lọ Lợn Thả Bồn Cầu, Tính Năng Diệt Khuẩn, Khử Mùi Nhanh, Mùi Hoa Oải Hương Trọng Lượng 300g",
    "name": "Lọ Lợn Thả Bồn Cầu, Tính Năng Diệt Khuẩn, Khử Mùi Nhanh, Mùi Hoa Oải Hương Trọng Lượng 300g",
    "category": "tay-rua-ve-sinh",
    "price": 49000,
    "originalPrice": 75000,
    "discountPercent": 35,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 360,
    "thumbnail": "/images/products/shopee-28776838664.jpg",
    "images": [
      "/images/products/shopee-28776838664.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Lọ Lợn Thả Bồn Cầu, Tính Năng Diệt Khuẩn, Khử Mùi Nhanh, Mùi Hoa Oải Hương Trọng Lượng 300g giá tốt.",
    "description": "Mua Lọ Lợn Thả Bồn Cầu, Tính Năng Diệt Khuẩn, Khử Mùi Nhanh, Mùi Hoa Oải Hương Trọng Lượng 300g giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "28776838664",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Lọ-Lợn-Thả-Bồn-Cầu-Tính-Năng-Diệt-Khuẩn-Khử-Mùi-Nhanh-Mùi-Hoa-Oải-Hương-Trọng-Lượng-300g-i.1477950332.28776838664",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-chai-xit-than-lan-thach-sung-vim-nano-50-80369",
    "shortName": "Chai Xịt Thằn Lằn, Thạch Sùng Vim Nano 500ml Mùi Hương Dễ Chịu Xuất Xứ Thảo Mộc",
    "name": "Chai Xịt Thằn Lằn, Thạch Sùng Vim Nano 500ml Mùi Hương Dễ Chịu Xuất Xứ Thảo Mộc",
    "category": "duoi-chuot-con-trung",
    "price": 119000,
    "originalPrice": 165000,
    "discountPercent": 28,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 413,
    "thumbnail": "/images/products/shopee-27976980369.jpg",
    "images": [
      "/images/products/shopee-27976980369.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua Chai Xịt Thằn Lằn, Thạch Sùng Vim Nano 500ml Mùi Hương Dễ Chịu Xuất Xứ Thảo Mộc giá tốt.",
    "description": "Mua Chai Xịt Thằn Lằn, Thạch Sùng Vim Nano 500ml Mùi Hương Dễ Chịu Xuất Xứ Thảo Mộc giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "27976980369",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Chai-Xịt-Thằn-Lằn-Thạch-Sùng-Vim-Nano-500ml-Mùi-Hương-Dễ-Chịu-Xuất-Xứ-Thảo-Mộc-i.1477950332.27976980369",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-xit-ve-sinh-tu-lanh-da-nang-calidad-500m-65725",
    "shortName": "Xịt Vệ Sinh Tủ Lạnh Đa Năng CALIDAD 500ml – Khử Mùi, Tẩy Sạch Mảng Bám, Diệt Khuẩn",
    "name": "Xịt Vệ Sinh Tủ Lạnh Đa Năng CALIDAD 500ml – Khử Mùi, Tẩy Sạch Mảng Bám, Diệt Khuẩn",
    "category": "tay-rua-ve-sinh",
    "price": 99000,
    "originalPrice": 145000,
    "discountPercent": 32,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 466,
    "thumbnail": "/images/products/shopee-49507065725.jpg",
    "images": [
      "/images/products/shopee-49507065725.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": false,
    "shortDescription": "Mua Xịt Vệ Sinh Tủ Lạnh Đa Năng CALIDAD 500ml – Khử Mùi, Tẩy Sạch Mảng Bám, Diệt Khuẩn giá tốt.",
    "description": "Mua Xịt Vệ Sinh Tủ Lạnh Đa Năng CALIDAD 500ml – Khử Mùi, Tẩy Sạch Mảng Bám, Diệt Khuẩn giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "49507065725",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Xịt-Vệ-Sinh-Tủ-Lạnh-Đa-Năng-CALIDAD-500ml-–-Khử-Mùi-Tẩy-Sạch-Mảng-Bám-Diệt-Khuẩn-i.1477950332.49507065725",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-chai-phu-bong-chai-nano-phuc-hoi-nhua-nh-00348",
    "shortName": "Chai Phủ Bóng, Chai Nano Phục Hồi Nhựa Nhám, Gel Phục Hồi Đánh Bóng Đa Năng Chuyên Dụng D&T Việt Nam",
    "name": "Chai Phủ Bóng, Chai Nano Phục Hồi Nhựa Nhám, Gel Phục Hồi Đánh Bóng Đa Năng Chuyên Dụng D&amp;T Việt Nam",
    "category": "tay-rua-ve-sinh",
    "price": 99000,
    "originalPrice": 149000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 519,
    "thumbnail": "/images/products/shopee-49057600348.jpg",
    "images": [
      "/images/products/shopee-49057600348.jpg"
    ],
    "tag": "Chính Hãng",
    "isFeatured": false,
    "shortDescription": "Mua Chai Phủ Bóng, Chai Nano Phục Hồi Nhựa Nhám, Gel Phục Hồi Đánh Bóng Đa Năng Chuyên Dụng D&amp;T Việt Nam giá tốt.",
    "description": "Mua Chai Phủ Bóng, Chai Nano Phục Hồi Nhựa Nhám, Gel Phục Hồi Đánh Bóng Đa Năng Chuyên Dụng D&amp;T Việt Nam giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "49057600348",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Chai-Phủ-Bóng-Chai-Nano-Phục-Hồi-Nhựa-Nhám-Gel-Phục-Hồi-Đánh-Bóng-Đa-Năng-Chuyên-Dụng-D-T-Việt-Nam-i.1477950332.49057600348",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-xit-khu-mui-thu-cung-d-t-viet-nam-500ml--36742",
    "shortName": "Xịt Khử Mùi Thú Cưng D&T Việt Nam 500ML – Diệt Khuẩn 99%, Khử Hôi Nhanh, Thơm Dịu An Toàn",
    "name": "Xịt Khử Mùi Thú Cưng D&amp;T Việt Nam 500ML – Diệt Khuẩn 99%, Khử Hôi Nhanh, Thơm Dịu An Toàn",
    "category": "tay-rua-ve-sinh",
    "price": 109000,
    "originalPrice": 160000,
    "discountPercent": 32,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 572,
    "thumbnail": "/images/products/shopee-57359536742.jpg",
    "images": [
      "/images/products/shopee-57359536742.jpg"
    ],
    "tag": "Khuyên Dùng",
    "isFeatured": false,
    "shortDescription": "Mua Xịt Khử Mùi Thú Cưng D&amp;T Việt Nam 500ML – Diệt Khuẩn 99%, Khử Hôi Nhanh, Thơm Dịu An Toàn giá tốt.",
    "description": "Mua Xịt Khử Mùi Thú Cưng D&amp;T Việt Nam 500ML – Diệt Khuẩn 99%, Khử Hôi Nhanh, Thơm Dịu An Toàn giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "57359536742",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Xịt-Khử-Mùi-Thú-Cưng-D-T-Việt-Nam-500ML-–-Diệt-Khuẩn-99-Khử-Hôi-Nhanh-Thơm-Dịu-An-Toàn-i.1477950332.57359536742",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-chinh-hang-nuoc-xit-lau-do-go-diet-khuan-85611",
    "shortName": "Nước xịt lau đồ gỗ DIỆT KHUẨN SUZY 500ml - thành phần HỮU CƠ, chất lượng NHẬT BẢN",
    "name": "(Chính hãng) Nước xịt lau đồ gỗ DIỆT KHUẨN SUZY 500ml - thành phần HỮU CƠ, chất lượng NHẬT BẢN",
    "category": "tay-rua-ve-sinh",
    "price": 95000,
    "originalPrice": 140000,
    "discountPercent": 32,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 625,
    "thumbnail": "/images/products/shopee-48604885611.jpg",
    "images": [
      "/images/products/shopee-48604885611.jpg"
    ],
    "tag": "Hàng Mới Về",
    "isFeatured": false,
    "shortDescription": "Mua (Chính hãng) Nước xịt lau đồ gỗ DIỆT KHUẨN SUZY 500ml - thành phần HỮU CƠ, chất lượng NHẬT BẢN giá tốt.",
    "description": "Mua (Chính hãng) Nước xịt lau đồ gỗ DIỆT KHUẨN SUZY 500ml - thành phần HỮU CƠ, chất lượng NHẬT BẢN giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "48604885611",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/(Chính-hãng)-Nước-xịt-lau-đồ-gỗ-DIỆT-KHUẨN-SUZY-500ml-thành-phần-HỮU-CƠ-chất-lượng-NHẬT-BẢN-i.1477950332.48604885611",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  },
  {
    "id": "dt-sap-ong-beewax",
    "shortName": "Sáp Ong Đánh Bóng và Phục Hồi Đồ Gỗ Beewax, Sáp Làm Mới Bàn Ghế Tủ Tự Nhiên",
    "name": "Sáp Ong Đánh Bóng và Phục Hồi Đồ Gỗ Beewax, Sáp Làm Mới Bàn Ghế Tủ Tự Nhiên",
    "category": "tay-rua-ve-sinh",
    "price": 79000,
    "originalPrice": 120000,
    "discountPercent": 34,
    "rating": 4.9,
    "reviewCount": 48,
    "soldCount": 678,
    "thumbnail": "/images/products/shopee-25091715364.jpg",
    "images": [
      "/images/products/shopee-25091715364.jpg",
      "/images/products/sap-ong-1.jpg",
      "/images/products/sap-ong-2.jpg",
      "/images/products/sap-ong-3.jpg"
    ],
    "tag": "Bán Chạy",
    "isFeatured": true,
    "shortDescription": "Mua Sáp Ong Đánh Bóng và Phục Hồi Đồ Gỗ Beewax, Sáp Làm Mới Bàn Ghế Tủ Tự Nhiên giá tốt.",
    "description": "Mua Sáp Ong Đánh Bóng và Phục Hồi Đồ Gỗ Beewax, Sáp Làm Mới Bàn Ghế Tủ Tự Nhiên giá tốt. Mua hàng qua mạng uy tín, tiện lợi. Shopee đảm bảo nhận hàng, hoặc được hoàn lại tiền Giao Hàng Miễn Phí. XEM NGAY!",
    "uses": [
      "Sử dụng tiện lợi trong gia đình, đời sống hàng ngày",
      "Đáp ứng nhu cầu vệ sinh, chăm sóc nhà cửa và tiện ích gia đình",
      "Thiết kế tối ưu hiệu quả và tiết kiệm thời gian"
    ],
    "usageInstructions": [
      "Đọc kỹ hướng dẫn kèm theo trên bao bì sản phẩm trước khi sử dụng.",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ],
    "specifications": {
      "Thương hiệu": "D&T Việt Nam",
      "Mã Shopee ID": "25091715364",
      "Phân phối": "Tổng Kho D&T Việt Nam",
      "Tình trạng": "Mới 100% nguyên đai nguyên kiện"
    },
    "origin": "Chính hãng D&T Việt Nam",
    "precautions": [
      "Để xa tầm tay trẻ em",
      "Bảo quản nơi khô ráo thoáng mát"
    ],
    "features": [
      "Chất liệu cao cấp bền bỉ an toàn",
      "Thiết kế thông minh tiện lợi cho gia đình",
      "Chính hãng từ gian hàng Shopee D&T"
    ],
    "reviews": [],
    "inStock": true,
    "shopeeUrl": "https://shopee.vn/Sáp-Ong-Đánh-Bóng-và-Phục-Hồi-Đồ-Gỗ-Beewax-Sáp-Làm-Mới-Bàn-Ghế-Tủ-Tự-Nhiên-i.1477950332.25091715364",
    "tiktokUrl": "https://www.tiktok.com/@dtvietnam_?_r=1&_t=ZS-9A1QeIhIHrO",
    "facebookUrl": "https://www.facebook.com/tongkhodtvietnam/"
  }
];

export const VOUCHERS: Voucher[] = [
  {
    code: 'DTVN15K',
    discountType: 'fixed',
    discountValue: 15000,
    minOrderValue: 199000,
    description: 'Giảm 15.000đ cho đơn từ 199.000đ'
  },
  {
    code: 'DTVN30K',
    discountType: 'fixed',
    discountValue: 30000,
    minOrderValue: 399000,
    description: 'Giảm 30.000đ cho đơn từ 399.000đ'
  }
];

export const FAQ_LIST = [
  {
    question: 'Sản phẩm của Tổng Kho D&T Việt Nam có phải chính hãng không?',
    answer: 'Tổng Kho D&T Việt Nam cam kết 100% sản phẩm có nguồn gốc xuất xứ rõ ràng, bình xịt mối Chaindrite và xịt chuột Rat Off nhập khẩu chính ngạch Thái Lan chuẩn mã vạch, các sản phẩm gia dụng và hóa phẩm có đầy đủ thông tin kiểm định.'
  },
  {
    question: 'Tôi có được kiểm tra hàng trước khi thanh toán không?',
    answer: 'Có. D&T Việt Nam áp dụng chính sách ĐỒNG KIỂM COD TOÀN QUỐC. Khi shipper giao hàng tới, quý khách được quyền mở hộp kiểm tra đúng mẫu mã, quy cách rồi mới thanh toán tiền.'
  },
  {
    question: 'Chính sách bảo hành và đổi trả của D&T như thế nào?',
    answer: 'Chúng tôi cam kết 1 đổi 1 miễn phí trong vòng 30 ngày nếu sản phẩm có lỗi từ nhà sản xuất hoặc bị nứt vỡ trong quá trình vận chuyển.'
  },
  {
    question: 'Thời gian giao hàng mất bao lâu?',
    answer: 'Đơn hàng tại TP.HCM được giao trong 24 giờ. Các tỉnh thành khác trên toàn quốc từ 2 đến 3 ngày làm việc qua các đơn vị chuyển phát nhanh uy tín.'
  }
];

export const HOME_TIPS = [
  {
    id: 'tip-1',
    title: 'Cách diệt tận gốc tổ mối ngầm trong đồ nội thất gỗ bằng bình xịt Chaindrite Thái Lan',
    desc: 'Mẹo nhận biết tổ mối, cách gắn kim xịt luồn sâu vào khe kẽ chân tường để tiêu diệt sạch mối chúa và bảo vệ tủ gỗ gia đình suốt 1 năm.',
    date: '26/09/2026',
    author: 'Kỹ Thuật D&T',
    image: '/images/products/chaindrite-3.jpg'
  },
  {
    id: 'tip-2',
    title: 'Bí quyết đuổi chuột khoang máy ô tô và nhà cửa triệt để bằng Rat Off Thái Lan',
    desc: 'Cách xịt tạo lớp màng bảo vệ mùi thảo mộc đuổi sạch chuột không cắn đứt dây điện động cơ và ngăn chuột làm tổ.',
    date: '25/09/2026',
    author: 'Kỹ Thuật Ô Tô D&T',
    image: '/images/products/rat-off-3.jpg'
  },
  {
    id: 'tip-3',
    title: 'Phục hồi đồ gỗ cũ kỹ xỉn màu sáng bóng như mới bằng sáp ong Beewax',
    desc: 'Bí quyết bảo dưỡng bàn ghế, tủ gỗ, sập gụ và sàn gỗ chống ẩm mốc, mờ vết trầy xước tự nhiên không cần tốn tiền sơn lại PU.',
    date: '24/09/2026',
    author: 'Nội Thất Gỗ D&T',
    image: '/images/products/sap-ong-3.jpg'
  },
  {
    id: 'tip-4',
    title: 'Đánh bay rong rêu sân gạch, tường xi măng ẩm mốc sau 10 phút với bột tẩy sinh học D&T',
    desc: 'Giải pháp làm sạch rêu mốc sân vườn trơn trượt mùa mưa, an toàn không độc hại cho sân gạch đỏ và xi măng.',
    date: '23/09/2026',
    author: 'Môi Trường D&T',
    image: '/images/products/bot-tay-3.jpg'
  }
];
