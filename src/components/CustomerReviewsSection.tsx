import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle, 
  MessageSquare, 
  Filter, 
  ThumbsUp, 
  Store, 
  ShoppingBag,
  Sparkles
} from 'lucide-react';

interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  productName: string;
  comment: string;
  channel: 'Shopee' | 'TikTok Shop' | 'Khách Hàng Đã Mua';
  verified: boolean;
  avatarText: string;
  likes: number;
  highlightTag?: string;
}

export const CustomerReviewsSection: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<'all' | 'Shopee' | 'TikTok Shop' | 'Khách Hàng Đã Mua'>('all');

  const reviews: ReviewItem[] = [
    {
      id: 'rev-1',
      author: 'Nguyễn Văn Hoà',
      rating: 5,
      date: '14/09/2026',
      productName: 'Bột Tẩy Rong Rêu D&T Việt Nam 500g',
      comment: 'Sân nhà mình bị rêu xanh bám trơn trượt cả năm trời, rải bột này 15 phút rồi lấy vòi nước xịt chà qua là trắng tinh như mới xây. Cả nhà đi lại yên tâm không lo trơn té nữa. Mua gói 500g làm được cả cái sân hơn 12m2 rộng thênh thang.',
      channel: 'Shopee',
      verified: true,
      avatarText: 'NH',
      likes: 24,
      highlightTag: 'Sạch rêu siêu nhanh'
    },
    {
      id: 'rev-2',
      author: 'Lê Quốc Huy',
      rating: 5,
      date: '12/09/2026',
      productName: 'Bình Xịt Diệt Mối Mọt Chaindrite Thái Lan 600ml',
      comment: 'Tủ bếp gỗ sồi bị mọt kêu cót két đêm nào cũng mất ngủ. Shop gửi chai Chaindrite chuẩn Thái Lan có kèm cái vòi kim loại nhỏ xíu luồn tận vào lỗ mọt. Xịt xong 1 lần là mọt chết sạch, êm ru luôn. Hàng đóng hộp xốp kỹ càng.',
      channel: 'Shopee',
      verified: true,
      avatarText: 'QH',
      likes: 19,
      highlightTag: 'Kèm vòi kim loại xịn'
    },
    {
      id: 'rev-3',
      author: 'Đặng Quốc Bảo (Hà Nội)',
      rating: 5,
      date: '10/09/2026',
      productName: 'Chai Xịt Chuột RATOFF Anti Rat Spray Thái Lan 300ml',
      comment: 'Xe mình để hầm chung cư bị chuột vào cắn rách dây điện bugi. Mua chai RATOFF Thái Lan này xịt khoang máy theo hướng dẫn của shop D&T, mùi thảo mộc cay nồng xịt xong mấy tuần nay mở nắp capo kiểm tra không còn hạt phân chuột nào. Rất đáng đồng tiền.',
      channel: 'Shopee',
      verified: true,
      avatarText: 'QB',
      likes: 35,
      highlightTag: 'Cứu tinh khoang máy ô tô'
    },
    {
      id: 'rev-4',
      author: 'Trần Thị Thuỷ',
      rating: 5,
      date: '08/09/2026',
      productName: 'Bột Tẩy Rong Rêu D&T Việt Nam 500g',
      comment: 'Thấy shop livestream trên TikTok Shop hướng dẫn làm ướt sân rồi rắc bột 10-15 phút là cọ trôi hết rêu. Đặt thử 3 gói về làm sạch bồn nước với chân tường, hiệu quả y hệt trên video clip. Giao hàng 2 ngày là nhận được.',
      channel: 'TikTok Shop',
      verified: true,
      avatarText: 'TT',
      likes: 15,
      highlightTag: 'Đúng chuẩn quảng cáo'
    },
    {
      id: 'rev-5',
      author: 'Đỗ Tuấn Kiệt',
      rating: 5,
      date: '10/09/2026',
      productName: 'Móc Dán Tường INOX 304 Treo Đồ Nặng Siêu Dính',
      comment: 'Inox 304 xước mờ dày dặn có dập chữ SUS304 sắc nét. Dán lên gạch men phòng bếp treo cái thớt gỗ nghiến nặng 4kg chắc nịch không lung lay. Shop đóng gói bọc chống sốc cẩn thận.',
      channel: 'Shopee',
      verified: true,
      avatarText: 'TK',
      likes: 12,
      highlightTag: 'Keo 3M siêu chắc'
    },
    {
      id: 'rev-6',
      author: 'Mai Tuyết Lan',
      rating: 5,
      date: '13/09/2026',
      productName: 'Sản Phẩm Lọc Rác Bồn Rửa Chén INOX 304 Chống Tắc',
      comment: 'Khay lọc dập nguyên khối sáng bóng, lỗ nhỏ li ti giữ lại từng hạt cơm nhỏ nhất, có quai cầm nhấc đổ rác rất vệ sinh không dính tay vào đồ bẩn. Giá rẻ mà chất lượng tuyệt vời.',
      channel: 'Shopee',
      verified: true,
      avatarText: 'TL',
      likes: 8,
      highlightTag: 'Lọc rác mịn sạch tay'
    },
    {
      id: 'rev-7',
      author: 'Lê Minh Trang',
      rating: 5,
      date: '11/09/2026',
      productName: 'Nước Tẩy Rửa Đa Năng Cực Mạnh T-LEX 500ml',
      comment: 'Lưới hút mùi bếp ăn đóng mỡ vàng khè xịt T-LEX 5 phút là mỡ tự chảy rữa ra, xối nước sôi cái là sáng loáng như mới mua. Shop tư vấn nhiệt tình, ship nhanh.',
      channel: 'Khách Hàng Đã Mua',
      verified: true,
      avatarText: 'MT',
      likes: 14,
      highlightTag: 'Tẩy dầu mỡ cực đỉnh'
    },
    {
      id: 'rev-8',
      author: 'Trần Văn Cường',
      rating: 5,
      date: '25/08/2026',
      productName: 'Viên Đuổi Chuột Sinh Học Cao Cấp – Hiệu Quả 1 Năm',
      comment: 'Mua 1 hộp 8 viên được tặng kèm túi lưới treo tiện lợi. Mình treo 2 viên khoang máy ô tô, 1 viên tủ quần áo. Không có mùi hôi chuột nữa, mùi bạc hà quế dễ chịu.',
      channel: 'Shopee',
      verified: true,
      avatarText: 'VC',
      likes: 11,
      highlightTag: 'Bảo vệ suốt 1 năm'
    }
  ];

  const filteredReviews = selectedChannel === 'all' 
    ? reviews 
    : reviews.filter(r => r.channel === selectedChannel);

  return (
    <section id="reviews-section" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header & Overall Rating Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 uppercase">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Đánh Giá Thực Tế Từ Khách Hàng
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Khách Hàng Nói Gì Về D&amp;T Việt Nam?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Tổng hợp phản hồi thực tế từ hệ thống 5 gian hàng Shopee, TikTok Shop và đơn hàng trực tiếp.
            </p>
          </div>

          {/* Rating Summary Card matching actual Shopee stats (4.8 / 5.0) */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-5 shrink-0">
            <div className="text-center pr-5 border-r border-slate-200">
              <div className="text-3xl sm:text-4xl font-black text-slate-900">4.8</div>
              <div className="flex items-center justify-center gap-0.5 text-amber-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-slate-500 font-semibold block">515+ Đánh giá</span>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-14 text-slate-500 font-medium">Chất lượng:</span>
                <span className="font-bold text-slate-800">Tuyệt vời (98%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-14 text-slate-500 font-medium">Giao hàng:</span>
                <span className="font-bold text-slate-800">Nhanh chóng (1-2 ngày)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-14 text-slate-500 font-medium">Tư vấn:</span>
                <span className="font-bold text-slate-800">Tận tâm, chi tiết</span>
              </div>
            </div>
          </div>
        </div>

        {/* Channel Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium hidden sm:inline flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Lọc theo nguồn:
            </span>
            <button
              onClick={() => setSelectedChannel('all')}
              className={`px-3 py-1.5 rounded-xl font-bold cursor-pointer transition-all ${
                selectedChannel === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              Tất cả ({reviews.length})
            </button>
            <button
              onClick={() => setSelectedChannel('Shopee')}
              className={`px-3 py-1.5 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                selectedChannel === 'Shopee'
                  ? 'bg-orange-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              Shopee ({reviews.filter(r => r.channel === 'Shopee').length})
            </button>
            <button
              onClick={() => setSelectedChannel('TikTok Shop')}
              className={`px-3 py-1.5 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                selectedChannel === 'TikTok Shop'
                  ? 'bg-slate-800 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              TikTok Shop ({reviews.filter(r => r.channel === 'TikTok Shop').length})
            </button>
            <button
              onClick={() => setSelectedChannel('Khách Hàng Đã Mua')}
              className={`px-3 py-1.5 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                selectedChannel === 'Khách Hàng Đã Mua'
                  ? 'bg-rose-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Khách Đã Mua ({reviews.filter(r => r.channel === 'Khách Hàng Đã Mua').length})
            </button>
          </div>

          <span className="text-xs text-slate-400 italic">
            * 100% đánh giá từ người dùng đã mua hàng và sử dụng thực tế
          </span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredReviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-all space-y-3"
            >
              <div className="space-y-2.5">
                {/* User & Channel Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center border border-slate-200">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 leading-tight">
                        {rev.author}
                      </h4>
                      <span className="text-[10px] text-slate-400 block">{rev.date}</span>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    rev.channel === 'Shopee' 
                      ? 'bg-orange-50 text-orange-600 border border-orange-200' 
                      : rev.channel === 'TikTok Shop'
                      ? 'bg-slate-100 text-slate-800 border border-slate-200'
                      : 'bg-rose-50 text-rose-600 border border-rose-200'
                  }`}>
                    {rev.channel}
                  </span>
                </div>

                {/* Stars & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  {rev.highlightTag && (
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      ✓ {rev.highlightTag}
                    </span>
                  )}
                </div>

                {/* Purchased Product */}
                <div className="text-[11px] text-slate-500 font-medium bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100 line-clamp-1">
                  Đã mua: <strong className="text-slate-700 font-semibold">{rev.productName}</strong>
                </div>

                {/* Comment */}
                <p className="text-xs text-slate-700 leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Verified footer */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Đã xác thực đơn hàng
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <ThumbsUp className="w-3 h-3" /> {rev.likes}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
