// @ts-nocheck
import SmartImg from '../SmartImg';
import React, { useEffect } from 'react';
import {
  ArrowRight, Sparkles, Heart, Sun, Leaf,
  Feather, Instagram, MessageCircle
} from 'lucide-react';

import { buildLineUrl, LINE_TEXT } from '../../lib/line';

const LineCTAButton = ({ label, lineText, icon: Icon = ArrowRight, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-[#5C534A] text-white hover:bg-[#4A4139] shadow-[0_4px_20px_rgba(92,83,74,0.3)] hover:shadow-[0_8px_30px_rgba(92,83,74,0.4)] hover:-translate-y-0.5',
    gold: 'bg-[#C9A87C] text-white hover:bg-[#B8975B] shadow-[0_4px_20px_rgba(201,168,124,0.3)]',
  };
  return (
    <a
      href={buildLineUrl(lineText)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm font-medium tracking-[0.12em] text-sm transition-all duration-500 group ${variants[variant]}`}
    >
      {label}
      <Icon size={16} className="group-hover:translate-x-1 transition-transform" />
    </a>
  );
};

const SectionDivider = () => (
  <div className="flex items-center justify-center py-4">
    <div className="w-16 h-[1px] bg-[#C9A87C]/30" />
    <Sparkles size={12} className="text-[#C9A87C]/40 mx-4" />
    <div className="w-16 h-[1px] bg-[#C9A87C]/30" />
  </div>
);

export default function LookbookTab({ onNavigate }) {
  // 捲動淡入動畫
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('lb-visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.lb-fade').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-[#F7F3ED] min-h-screen selection:bg-[#C9A87C] selection:text-white">

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #EDE5DB 0%, #F2ECE4 40%, #F5F0E9 70%, #F7F3ED 100%)' }}>
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#D4C5A0]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-[#C9A87C]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full px-6 flex flex-col items-center gap-10 relative z-10 py-16">
          {/* 圖片 */}
          <div className="lb-fade w-full max-w-[320px] aspect-[3/4] rounded-[16px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] bg-gray-100 border-[6px] border-white/80 relative">
            <SmartImg base="/lookbook/01" alt="Han — 莎朗嘿yo 負責人" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 via-transparent to-transparent h-1/3 pointer-events-none" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-sm shadow-lg border border-[#E5DCD0]">
              <p className="text-[9px] text-[#C9A87C] tracking-[0.2em] uppercase font-bold mb-0.5">Since 2015</p>
              <p className="text-[#5C534A] text-[10px] font-light tracking-wider">10+ Years of Expertise</p>
            </div>
          </div>

          {/* 文案 */}
          <div className="lb-fade text-center">
            <div className="inline-flex items-center gap-2 justify-center text-[#C9A87C] text-xs font-bold tracking-[0.25em] uppercase mb-5">
              <Sparkles size={12} fill="currentColor" /> Han's Aesthetic Lookbook
            </div>
            <h1 className="text-2xl font-normal text-[#333333] mb-6 leading-snug tracking-wide">
              最高級的濾鏡，<br />
              是妳的<span className="text-[#C9A87C] font-medium">原生底氣</span>。
            </h1>
            <p className="text-[#3D2E22] text-sm mb-4 leading-loose">
              在「莎朗嘿yo」的攝影棚裡，我為無數女孩按下快門。最高級的濾鏡，從來不是完美的妝容，而是妳由內而外透出的那份從容與底氣。
            </p>
            <p className="text-[#3D2E22] text-sm mb-4 leading-loose">
              當肌膚養出了乾淨的原生光澤，當身體維持在沒有負擔的輕盈節奏，妳只需要一點點色彩點綴，就已經美得讓人移不開目光。
            </p>
            <p className="text-[#C9A87C] text-xs tracking-[0.15em] font-medium mb-1">— Han ・ 莎朗嘿yo 負責人</p>
            <p className="text-[#999] text-[10px] tracking-wider font-light">造型師 / 保養顧問 / 體態美學研究者</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Chapter 01 — 無濾鏡的原生美肌 */}
      <section className="relative py-20 overflow-hidden px-6" style={{ background: 'linear-gradient(180deg, #F7F3ED 0%, #F2ECE4 50%, #F7F3ED 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="lb-fade text-center mb-12">
            <span className="text-[#C9A87C] tracking-[0.2em] text-xs font-bold uppercase mb-3 flex items-center justify-center gap-2">
              <Sun size={12} /> Chapter 01 — Bare Skin
            </span>
            <h2 className="text-xl font-normal text-[#333333] tracking-wider relative inline-block">
              無濾鏡的原生美肌
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#C9A87C]" />
            </h2>
          </div>
          <div className="lb-fade">
            <div className="aspect-[4/5] rounded-[12px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] bg-gray-100 mb-8">
              <SmartImg base="/lookbook/02" alt="原生美肌" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="lb-fade">
            <p className="text-[#C9A87C] text-xs tracking-wider mb-4">「底妝再輕薄，也比不上養好的皮膚本身。」</p>
            <p className="text-[#3D2E22] text-sm leading-loose mb-4">
              身為造型師，這 10 年來我摸過無數張臉孔，深知再高超的遮瑕技巧，都需要一張純淨的畫布來承載。過去我也曾因為反覆的粗糙與瑕疵感到焦慮，盲目嘗試各種猛烈的酸類與保養偏方，結果反而破壞了肌膚原本的健康屏障。
            </p>
            <p className="text-[#3D2E22] text-sm leading-loose mb-4">
              直到我懂得了「減法保養」的藝術。透過早 C 晚 A 的溫和保養節奏，讓肌膚重新深呼吸。
            </p>
            <p className="text-[#3D2E22] text-sm leading-loose mb-8">
              把底子養好，永遠是最聰明的投資。如果妳的保養也遇到了停滯期，讓我來幫妳梳理。
            </p>
            <LineCTAButton
              label="了解原生美肌保養"
              lineText={LINE_TEXT.skin}
            />
            <p className="text-[#7A6555] text-[10px] tracking-wide mt-3">＊ 點擊將開啟 LINE 對話，由 Han 為妳進行一對一膚況諮詢</p>
            <p className="text-[#3D2E22] text-sm leading-loose mt-6">
              養好底子之後，也可以來看看{' '}
              <button
                type="button"
                onClick={() => onNavigate?.('makeup')}
                className="underline underline-offset-2 text-[#C9A87C] font-medium"
              >
                彩妝課
              </button>
              ，學會怎麼把妝畫得更適合自己。
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Chapter 02 — 晨間的發光儀式 */}
      <section className="relative py-20 overflow-hidden px-6" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FBF7F2 30%, #F7F0E8 60%, #FBF7F2 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="lb-fade text-center mb-12">
            <span className="text-[#C9A87C] tracking-[0.2em] text-xs font-bold uppercase mb-3 flex items-center justify-center gap-2">
              <Heart size={12} /> Chapter 02 — Morning Glow
            </span>
            <h2 className="text-xl font-normal text-[#333333] tracking-wider relative inline-block">
              晨間發光儀式
              <span className="block text-sm text-[#7A6555] tracking-widest mt-2 font-light">澎潤 Q 彈計畫</span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#C9A87C]" />
            </h2>
          </div>
          <div className="lb-fade">
            <div className="aspect-[4/5] rounded-[12px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] bg-gray-100 mb-8">
              <SmartImg base="/lookbook/03" alt="晨間發光儀式" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="lb-fade">
            <p className="text-[#C9A87C] text-xs tracking-wider mb-4">「最高級的狀態，是就算素顏也充滿彈性與底氣。」</p>
            <p className="text-[#3D2E22] text-sm leading-loose mb-4">
              每天早晨，在開啟一整天的忙碌之前，我一定會留給自己一段安靜的專屬儀式。真正迷人的狀態，不只是臉上的透亮，是整個人看起來有在好好照顧自己。
            </p>
            <p className="text-[#3D2E22] text-sm leading-loose mb-4">
              這款膠原蛋白肽，是我私下堅持了很久的自我投資。早晨加在溫水裡喝下，就像是溫柔地喚醒身體，替自己補上日常顧不到的那一塊。
            </p>
            <p className="text-[#3D2E22] text-sm leading-loose mb-8">
              保養，從來不該是焦慮的追趕，而是學會好好寵愛自己的過程。
            </p>
            <LineCTAButton
              label="了解澎潤 Q 彈計畫"
              lineText={LINE_TEXT.collagen}
            />
            <p className="text-[#7A6555] text-[10px] tracking-wide mt-3">＊ 點擊將開啟 LINE 對話，Han 會為妳推薦最適合的補充節奏</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Chapter 03 — 享受生活的輕盈自由 */}
      <section className="relative py-20 overflow-hidden px-6" style={{ background: 'linear-gradient(180deg, #F7F3ED 0%, #F2ECE4 50%, #F7F3ED 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="lb-fade text-center mb-12">
            <span className="text-[#C9A87C] tracking-[0.2em] text-xs font-bold uppercase mb-3 flex items-center justify-center gap-2">
              <Feather size={12} /> Chapter 03 — Light & Free
            </span>
            <h2 className="text-xl font-normal text-[#333333] tracking-wider relative inline-block">
              享受生活的輕盈自由
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#C9A87C]" />
            </h2>
          </div>
          <div className="lb-fade">
            <div className="aspect-[4/5] rounded-[12px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] bg-gray-100 mb-8">
              <SmartImg base="/lookbook/04" alt="輕盈生活" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="lb-fade">
            <p className="text-[#C9A87C] text-xs tracking-wider mb-4">「懂享受，也要懂得維持生活的輕盈節奏。」</p>
            <p className="text-[#3D2E22] text-sm leading-loose mb-4">
              我熱愛工作，也熱愛生活裡每一個品嚐美食的時刻。我都不希望「維持體態」成為享受生活的絆腳石。
            </p>
            <p className="text-[#3D2E22] text-sm leading-loose mb-4">
              比起極端的忌口與節食，我更相信「維持順暢」帶來的安全感。在享受大餐前，我習慣用一套溫和的植萃輕盈配方作為餐前小儀式。
            </p>
            <p className="text-[#3D2E22] text-sm leading-loose mb-8">
              如果妳也嚮往不用餓肚子、依然能優雅掌控狀態的輕盈自由，讓我為妳客製專屬的體態管理計畫。
            </p>
            <LineCTAButton
              label="了解體態管理計畫"
              lineText={LINE_TEXT.body}
            />
            <p className="text-[#7A6555] text-[10px] tracking-wide mt-3">＊ 點擊將開啟 LINE 對話，Han 會依據妳的飲食習慣客製方案</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 美學合夥人 */}
      <section className="relative py-20 overflow-hidden px-6" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FBF7F2 30%, #F5EDE3 70%, #EDE5DB 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="lb-fade">
            <div className="aspect-square rounded-[12px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] bg-gray-100 mb-8">
              <SmartImg base="/lookbook/05" alt="美學合夥人" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="lb-fade">
            <span className="text-[#C9A87C] tracking-[0.2em] text-xs font-bold uppercase mb-3 flex items-center gap-2">
              <Leaf size={12} /> A Note for You
            </span>
            <h2 className="text-xl font-normal text-[#333333] tracking-wider mb-8 relative inline-block">
              寫給正在尋找自由的妳
              <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-[#C9A87C]" />
            </h2>
            <p className="text-[#3D2E22] text-sm leading-loose mb-4">
              有時候我會收到這樣的私訊：「Han，妳怎麼能同時經營照相館、做保養選品，卻還能保有生活裡的從容與餘裕？」
            </p>
            <p className="text-[#3D2E22] text-sm leading-loose mb-4">
              答案是——我找到了一種讓「熱情」與「生活」完美共存的方式。這份美學事業，給了我時間與財務上的選擇權，讓我能優雅地支撐起理想中的生活品質。
            </p>
            <p className="text-[#3D2E22] text-sm leading-loose mb-8">
              加入這個計畫，是我們一起提升生活質感、慢慢把日常過得精緻的過程。只要妳對質感生活有著真誠的嚮往，隨時歡迎妳來找我聊聊。
            </p>
            <LineCTAButton
              label="了解美學合夥人計畫"
              lineText="Han～想跟妳聊聊「美學合夥人」計畫"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center pb-28" style={{ background: 'linear-gradient(180deg, #EDE5DB 0%, #E8DFD4 100%)' }}>
        <p className="text-[#C9A87C] text-[10px] tracking-[0.25em] uppercase font-bold mb-3">Han's Aesthetic Lookbook</p>
        <p className="text-[#888] text-[10px] tracking-wide mb-5 leading-relaxed">
          此頁面所推薦之品項，皆為負責人 Han 親身使用後之真誠分享。<br />
          個人感受因體質而異，如有任何疑慮歡迎透過 LINE 諮詢。
        </p>
        <div className="flex items-center justify-center gap-4 mb-5">
          <a href="https://www.instagram.com/han228228" target="_blank" rel="noreferrer" className="text-[#bbb] hover:text-[#C9A87C] transition-colors">
            <Instagram size={16} />
          </a>
        </div>
        <p className="text-[#999] text-[10px] tracking-wider">
          © {new Date().getFullYear()} 莎朗嘿yo Korean Photo Studio. All rights reserved.
        </p>
      </footer>

      {/* 浮動 LINE 按鈕（在 Tab 列上方） */}
      <div className="fixed bottom-[70px] right-4 z-40">
        <a
          href={buildLineUrl(LINE_TEXT.custom)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#5C534A] text-white rounded-full flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle size={16} />
          <span className="text-[8px] font-bold">LINE</span>
        </a>
      </div>
    </div>
  );
}
