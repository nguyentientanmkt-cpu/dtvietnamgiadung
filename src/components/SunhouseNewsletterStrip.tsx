import React, { useState } from 'react';
import { Share2, Send, CheckCircle2, Sparkles, ThumbsUp, ExternalLink } from 'lucide-react';

export const SunhouseNewsletterStrip: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <div className="bg-[#00383f] text-white py-10 border-t border-[#002f35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Block 1: Facebook Fanpage Box (Sunhouse style) */}
          <div className="bg-[#002b31] p-4 rounded-2xl border border-[#004d57] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                f
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-white uppercase">D&amp;T VIỆT NAM</h4>
                <p className="text-[11px] text-cyan-200">Hơn 5 Fanpage Facebook chính thức</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#contact-section"
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1 shadow-xs"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>Theo dõi</span>
              </a>
            </div>
          </div>

          {/* Block 2: Red TikTok Shop & Video Channel (Sunhouse Youtube/TikTok style) */}
          <div className="bg-[#002b31] p-4 rounded-2xl border border-[#004d57] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-lg shadow-md">
                ▶
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-white uppercase">D&amp;T VIỆT NAM TIKTOK SHOP</h4>
                <p className="text-[11px] text-cyan-200">Video mẹo vặt gia đình &amp; Live test</p>
              </div>
            </div>

            <div>
              <a
                href="#contact-section"
                className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-xs flex items-center gap-1"
              >
                <span>Xem Ngay</span>
              </a>
            </div>
          </div>

          {/* Block 3: Email Subscription */}
          <div className="bg-[#002b31] p-4 rounded-2xl border border-[#004d57] space-y-2">
            <p className="text-xs text-cyan-100 font-semibold">
              Đăng ký để cập nhật khuyến mãi &amp; sản phẩm mới:
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold py-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Đã đăng ký nhận tin khuyến mãi thành công!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  className="w-full text-xs text-slate-800 bg-white px-3 py-2 rounded-xl focus:outline-none placeholder:text-slate-400"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0 uppercase tracking-wider"
                >
                  GỬI
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
