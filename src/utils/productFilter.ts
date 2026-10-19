import { Product, CatalogCategory, CategoryInfo } from '../types';

/**
 * 7 Nhóm danh mục chính theo yêu cầu thiết kế D&T Việt Nam:
 * 1. Diệt mối mọt
 * 2. Xịt côn trùng
 * 3. Diệt chuột
 * 4. Gia dụng
 * 5. Chăm sóc nhà cửa
 * 6. Sản phẩm bán chạy
 * 7. Sản phẩm mới
 */
export const CATALOG_GROUPS: CategoryInfo[] = [
  {
    id: 'diet-moi-mot',
    name: 'Diệt Mối Mọt',
    shortTitle: 'Diệt mối mọt',
    icon: '🪵',
    description: 'Bình xịt Chaindrite Thái Lan luồn sâu tận gốc tổ mối, mọt gỗ, diệt trừ vĩnh viễn',
    badge: 'Chuyên dụng',
  },
  {
    id: 'xit-con-trung',
    name: 'Xịt Côn Trùng',
    shortTitle: 'Xịt côn trùng',
    icon: '🪰',
    description: 'Xịt diệt ruồi King Bio, xịt thằn lằn Vim Nano, diệt muỗi gián kiến an toàn',
    badge: 'Hiệu quả cao',
  },
  {
    id: 'diet-chuot',
    name: 'Diệt Chuột',
    shortTitle: 'Diệt chuột',
    icon: '🐀',
    description: 'Chai xịt chuột Rat Off Thái Lan khoang máy ô tô & viên đuổi chuột sinh học 1 năm',
    badge: 'Bán chạy nhất',
  },
  {
    id: 'gia-dung',
    name: 'Gia Dụng',
    shortTitle: 'Gia dụng tiện ích',
    icon: '🍳',
    description: 'Dụng cụ vắt cam đòn bẩy inox, máy xay hạt khô 300W, máy đánh trứng, khay bồn rửa 304',
    badge: 'Tiện ích bếp',
  },
  {
    id: 'cham-soc-nha-cua',
    name: 'Chăm Sóc Nhà Cửa',
    shortTitle: 'Chăm sóc nhà cửa',
    icon: '✨',
    description: 'Bột tẩy rong rêu D&T 500g, sáp ong Beewax đồ gỗ, nước lau gỗ Suzy, keo chống thấm',
    badge: 'Độc quyền D&T',
  },
  {
    id: 'ban-chay',
    name: 'Sản Phẩm Bán Chạy',
    shortTitle: 'Bán chạy nhất',
    icon: '🔥',
    description: 'Top sản phẩm được mua nhiều nhất và nhận đánh giá 5 sao trên Shopee & TikTok',
    badge: 'Top 1 Đánh giá',
  },
  {
    id: 'san-pham-moi',
    name: 'Sản Phẩm Mới',
    shortTitle: 'Sản phẩm mới về',
    icon: '⚡',
    description: 'Hàng mới nhập kho D&T Việt Nam, công nghệ nâng cấp, giá xuất xưởng tốt nhất',
    badge: 'Mới về',
  },
];

/**
 * Chuẩn hóa chuỗi tiếng Việt không dấu
 */
export function removeVietnameseAccents(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

/**
 * Kiểm tra xem 1 sản phẩm có thuộc danh mục CatalogCategory hay không
 */
export function matchProductCategory(product: Product, category: CatalogCategory): boolean {
  if (category === 'all') return true;

  const rawText = `${product.name} ${product.shortName || ''} ${(product.uses || []).join(' ')} ${(product.features || []).join(' ')} ${product.description || ''}`.toLowerCase();

  switch (category) {
    case 'diet-moi-mot':
      return /\b(mối|mọt|chaindrite|termite)\b/i.test(rawText);

    case 'xit-con-trung':
      return /\b(côn trùng|ruồi|muỗi|kiến|gián|thằn lằn|thạch sùng|bọ chét|ve chó|king bio|vim nano)\b/i.test(rawText);

    case 'diet-chuot':
      return /\b(chuột|rat off|ratoff|anti rat)\b/i.test(rawText);

    case 'gia-dung':
      return (
        product.category === 'gia-dung-tien-ich' ||
        /\b(inox|vắt cam|máy xay|đánh trứng|búa|rổ|chậu|khay|dao|kéo|giấy sipiao|kẹp gắp|bọc thực phẩm)\b/i.test(rawText)
      );

    case 'cham-soc-nha-cua':
      return (
        product.category === 'tay-rua-ve-sinh' ||
        product.category === 'xu-ly-rong-reu' ||
        /\b(rong rêu|beewax|sáp ong|suzy|t-lex|chống thấm|tẩy mốc|lau gỗ|tẩy xoong|trám tường|thả bồn cầu|thú cưng|phục hồi nhựa)\b/i.test(rawText)
      );

    case 'ban-chay':
      return (
        product.tag === 'Bán Chạy' ||
        product.soldCount >= 200 ||
        product.isFeatured === true ||
        product.id === 'dt-rat-off-spray-300ml' ||
        product.id === 'dt-chaindrite-600ml' ||
        product.id === 'dt-bot-tay-rong-reu-500g' ||
        product.id === 'dt-sap-ong-beewax' ||
        product.id === 'dt-vat-cam-inox'
      );

    case 'san-pham-moi':
      return (
        product.tag === 'Hàng Mới Về' ||
        product.tag === 'Chính Hãng' ||
        product.soldCount < 50
      );

    default:
      return true;
  }
}

/**
 * Lọc danh sách sản phẩm theo Category và sắp xếp hợp lý
 */
export function filterProductsByCategory(products: Product[], category: CatalogCategory): Product[] {
  if (category === 'all') return products;

  const matched = products.filter((p) => matchProductCategory(p, category));

  if (category === 'ban-chay') {
    // Ưu tiên các sản phẩm chủ lực: Rat Off, Chaindrite, Bột tẩy rong rêu, Sáp ong Beewax, Vắt cam
    const keyHeroIds = [
      'dt-rat-off-spray-300ml',
      'dt-chaindrite-600ml',
      'dt-bot-tay-rong-reu-500g',
      'dt-sap-ong-beewax',
      'dt-vat-cam-inox',
      'dt-may-danh-trung-7-toc-do',
      'dt-khan-giay-sipiao-30',
      'dt-may-xay-hat-kho-cong-suat-300w-thiet-ke--21953',
    ];

    matched.sort((a, b) => {
      const aHero = keyHeroIds.indexOf(a.id);
      const bHero = keyHeroIds.indexOf(b.id);
      if (aHero !== -1 && bHero !== -1) return aHero - bHero;
      if (aHero !== -1) return -1;
      if (bHero !== -1) return 1;
      return (b.soldCount || 0) - (a.soldCount || 0);
    });
  }

  return matched;
}

/**
 * Tìm kiếm tức thì thông minh theo từ khóa, công dụng, tên sản phẩm, nhu cầu
 * Trả về danh sách được chấm điểm theo độ phù hợp
 */
export function searchProducts(products: Product[], query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;

  const normalizedQ = removeVietnameseAccents(q);
  const terms = normalizedQ.split(/\s+/).filter(Boolean);

  const scored: { product: Product; score: number }[] = [];

  for (const product of products) {
    const rawName = `${product.name} ${product.shortName || ''}`.toLowerCase();
    const normName = removeVietnameseAccents(rawName);
    const rawUses = (product.uses || []).join(' ').toLowerCase();
    const normUses = removeVietnameseAccents(rawUses);
    const rawDesc = (product.description || '').toLowerCase();
    const normDesc = removeVietnameseAccents(rawDesc);

    let score = 0;

    // 1. Khớp chính xác tên sản phẩm
    if (rawName.includes(q)) score += 120;
    else if (normName.includes(normalizedQ)) score += 90;

    // 2. Ý định người dùng (User intent matching)
    if ((normalizedQ.includes('moi') || normalizedQ.includes('mot')) && (normName.includes('chaindrite') || normName.includes('moi') || normName.includes('mot'))) {
      score += 150;
    }
    if (normalizedQ.includes('chuot') && (normName.includes('rat') || normName.includes('chuot'))) {
      score += 150;
    }
    if ((normalizedQ.includes('con trung') || normalizedQ.includes('ruoi') || normalizedQ.includes('than lan')) && 
        (normName.includes('chaindrite') || normName.includes('king bio') || normName.includes('con trung') || normName.includes('than lan'))) {
      score += 150;
    }
    if ((normalizedQ.includes('reu') || normalizedQ.includes('rong reu')) && normName.includes('rong reu')) {
      score += 150;
    }
    if ((normalizedQ.includes('vat cam') || normalizedQ.includes('ep cam') || normalizedQ === 'cam') && (normName.includes('vat cam') || normName.includes('ep cam') || normName.includes('chanh'))) {
      score += 150;
    }
    if ((normalizedQ.includes('go') || normalizedQ.includes('sap ong') || normalizedQ.includes('beewax')) && (normName.includes('beewax') || normName.includes('suzy') || normName.includes('go'))) {
      score += 150;
    }

    // 3. Khớp từng term
    for (const term of terms) {
      if (normName.includes(term)) score += 35;
      if (normUses.includes(term)) score += 15;
      if (normDesc.includes(term)) score += 5;
    }

    if (score > 25) {
      scored.push({ product, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.map((s) => s.product);
}

/**
 * Từ khóa tìm kiếm nhanh phổ biến
 */
export const POPULAR_SEARCH_KEYWORDS = [
  'mối',
  'chuột',
  'côn trùng',
  'bột tẩy rong rêu',
  'sáp ong lau gỗ',
  'vắt cam inox',
  'máy xay hạt khô',
  'khăn giấy Sipiao',
];
