import React from 'react';
import SmartImg from '../SmartImg';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

import { buildLineUrl, LINE_TEXT } from '../../lib/line';

const Section = ({ children, className = '', id = '' }) => (
  <section id={id} className={`py-20 px-6 w-full flex justify-center ${className}`}>
    <div className="max-w-2xl w-full">{children}</div>
  </section>
);

const PrimaryButton = ({ href, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8C7A6B] text-white rounded-full hover:bg-[#7A6A5C] transition-all duration-300 text-sm font-light tracking-wider shadow-md hover:shadow-lg"
  >
    {text}
    <ChevronRight className="w-4 h-4" />
  </a>
);

const offers = [
  {
    title: "🕊️ 階段一：細節保養｜感知優雅的開始",
    image: "/skin/02",
    budgetTip: "適合想微調狀態的妳，用最小的改變感受質感升級。",
    items: [
      { name: "1.【柔嫩細節・唇部柔焦 SPA 組】", desc: "最迷人的妝容，往往藏在細節裡。富含乳木果油溫和帶走死皮，深層封存水分，重現母胎般的柔嫩唇色。" },
      { name: "2.【明眸亮眼・眼周平撫微導霜】", desc: "告別熬夜疲態。輕盈質地好吸收、不給眼周帶來多餘負擔，每天早晚的點按，就是點亮眼神的專屬儀式。" },
      { name: "3.【局部重點・無瑕淨痘舒緩露】", desc: "化妝包裡最安心的後盾。溫和精準收斂局部瑕疵，給予肌膚最溫柔的安撫與舒緩。" },
    ]
  },
  {
    title: "🌿 階段二：基礎體驗｜建立純淨屏障",
    image: "/skin/03",
    budgetTip: "適合尋找溫和打底的妳，給予肌膚極簡且安心的呵護。",
    items: [
      { name: "4.【極簡淨化・會呼吸的洗顏組】", desc: "保養的第一步從把臉洗對開始。溫和帶走油脂髒汙不乾澀，還原肌膚深呼吸的純淨感。" },
      { name: "5.【舒緩純粹・屏障調理水潤組】", desc: "給予嬌弱肌膚最安心的避風港。極簡純粹的植萃呵護力安撫躁動，找回喝飽水般的健康柔嫩。" },
    ]
  },
  {
    title: "✨ 階段三：核心週期｜精準煥新計畫",
    image: "/skin/04",
    budgetTip: "針對渴望明顯改善粗糙、暗沉與瑕疵的妳。用一季的時間，投資肌膚的細緻透亮。",
    items: [
      {
        name: "6.【溫和拋光・0.3% A醇煥新計畫】 🌟 (Han 私心最愛)",
        desc: (
          <span className="block mt-2">
            <strong className="text-gray-800 font-medium tracking-wide">針對反覆出現的粉刺顆粒與暗沉印記。</strong><br />
            <span className="block mt-2">以精準 0.3% A醇溫和喚醒肌膚更新節奏，不需經歷脫皮陣痛期，讓睡夢中的肌膚更顯平滑淨透。</span>
            <span className="block mt-3 text-xs text-[#8C7A6B] tracking-wide">✓ 通過專業美國皮膚科醫生驗證（Dermatologist-Validated）</span>
          </span>
        )
      },
    ]
  },
  {
    title: "🤍 階段四：專屬高訂｜私人保養策展",
    image: "/skin/05",
    budgetTip: "適合渴望突破現狀、或追求極致客製化的妳。享受一場毫無負擔的專業對談。",
    items: [
      { name: "7.【Han 的專屬私訂・1 對 1 膚況 Omakase】", desc: "最高級的養膚，是給予肌膚「剛剛好」的精準對策。透過 10 年的美業底蘊，我將陪妳檢視目前的保養盲點。無論是解決複雜困擾或追求巔峰狀態，都將依照真實膚況與預算，量身調配專屬的養膚提案。" },
    ],
    cta: { text: "預約專屬高訂對談 🤍", lineText: "Han～我想了解【階段四：專屬高訂】的內容" },
  }
];

export default function SkinTab({ onNavigate }) {
  return (
    <div className="font-sans text-gray-800 bg-[#FAF8F5] min-h-screen selection:bg-[#E8DCCB] selection:text-gray-900">

      {/* Hero */}
      <section className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartImg base="/skin/01" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 text-center px-8 max-w-sm mx-auto flex flex-col items-center">
          <span className="text-xs tracking-[0.3em] uppercase text-white/70 mb-5 block font-light">Skin Aesthetics</span>
          <h1 className="text-2xl font-serif font-light leading-relaxed mb-6 text-white drop-shadow-sm">
            最迷人的狀態，<br />是妳看起來<span className="italic">毫不費力</span>。
          </h1>
          <p className="text-sm font-light text-white/80 leading-loose">
            從事美業 10 年，在鏡頭下，我見過無數種美麗。<br />
            真正的高級感，是肌膚由內而外透出的<br />
            「淨・透・潤」。
          </p>
        </div>
      </section>

      {/* 痛點 */}
      <Section className="bg-white">
        <h2 className="text-2xl font-serif font-light text-gray-900 leading-snug mb-4">
          妳是否也曾在鏡子前<br />感到困擾？
        </h2>
        <div className="w-12 h-px bg-[#8C7A6B] mb-6" />
        <div className="space-y-3 text-gray-600 font-light leading-relaxed text-sm">
          <p>明明擦了昂貴的保養品，肌膚卻依舊暗沉疲憊；</p>
          <p>試過各種熱門成分，卻換來反覆的躁動與乾澀。</p>
          <p className="pt-2">保養不該是盲目的加法，而是一場精準的「養膚儀式」。</p>
        </div>
      </Section>

      {/* 核心價值 */}
      <Section className="bg-[#FAF8F5]">
        <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">將嚴謹的科研力，化為最溫柔的觸碰。</h2>
        <div className="w-12 h-px bg-[#8C7A6B] mb-6" />
        <p className="text-gray-600 font-light leading-relaxed text-sm mb-4">
          我是 Han。這 10 年來，我將美學與保養結合，為妳篩選出不僅僅是「產品」，更是「改變」的契機。
        </p>
        <ul className="space-y-3 mt-4">
          {['十年美業經驗親自篩選', '嚴格安全檢驗把關', '溫和科研配方', '拒絕極端速效傷害'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700 font-light text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#8C7A6B] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* 體驗 CTA */}
      <Section className="bg-white">
        <div className="bg-[#F4EFEB] rounded-[2rem] p-8 text-center">
          <h2 className="text-xl font-serif font-light text-gray-900 mb-4">在決定之前，先讓肌膚親自感受。</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-8 text-sm">
            每個月開放 <strong className="text-gray-900 font-medium">10 個免費「肌膚微體驗」名額</strong>，到店讓肌膚親自試過再決定。<br /><br />不方便來店也沒關係，在 LINE 裡我一樣會仔細幫妳看膚況、推薦最適合妳的。直接購買也不用擔心，都有三個月滿意保證。
          </p>
          <PrimaryButton
            href={buildLineUrl(LINE_TEXT.skinTrial)}
            text="預約免費肌膚微體驗 🕊️"
          />
        </div>
      </Section>

      {/* 方案 */}
      <Section className="bg-white" id="offers">
        <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">尋找妳的專屬養膚提案 ✨</h2>
        <div className="w-12 h-px bg-[#8C7A6B] mb-6" />
        <p className="text-gray-600 font-light leading-relaxed text-sm mb-10">
          依照目前的膚況，看看妳落在哪個階段：
        </p>
        <div className="space-y-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-[#FAF8F5] rounded-[2rem] overflow-hidden border border-[#EBE5DF]">
              <div className="h-40 w-full">
                <SmartImg base={offer.image} alt="氛圍圖" className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="p-6">
                <h3 className="text-base font-medium text-gray-900 mb-3">{offer.title}</h3>
                <div className="inline-block bg-[#F4EFEB] border border-[#E8DCCB] rounded-xl px-4 py-2 mb-6">
                  <p className="text-[#8C7A6B] italic font-light text-xs">{offer.budgetTip}</p>
                </div>
                <div className="space-y-6">
                  {offer.items.map((item, i) => (
                    <div key={i} className="pl-4 border-l-2 border-[#D4C4B7]">
                      <h4 className="text-sm font-medium text-gray-800 mb-1">{item.name}</h4>
                      <p className="text-gray-600 font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                {offer.cta && (
                  <div className="mt-8 text-center">
                    <PrimaryButton href={buildLineUrl(offer.cta.lineText)} text={offer.cta.text} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 最終 CTA */}
      <Section className="bg-[#F4EFEB]">
        <h2 className="text-2xl font-serif font-light text-gray-900 mb-4 text-center">無壓力的承諾，<br />是我對妳的底氣。</h2>
        <div className="w-12 h-px bg-[#8C7A6B] mx-auto mb-8" />
        <div className="space-y-4 text-gray-700 font-light leading-relaxed text-sm text-center mb-8">
          <p>改變需要時間，而我會給妳足夠的耐心。</p>
          <p>提供業界少有的<strong className="text-gray-900 font-medium">「三個月滿意保證」</strong>，90 天內若不適合，我都會協助妳換貨。</p>
          <p>
            保養之後想學怎麼上妝，看看
            <button
              type="button"
              onClick={() => onNavigate?.('makeup')}
              className="underline underline-offset-2 text-[#8C7A6B] font-medium"
            >
              彩妝課
            </button>
            {' '}→
          </p>
        </div>
        <div className="bg-white p-8 rounded-[2rem] text-center">
          <p className="text-lg font-serif text-gray-900 mb-6">現在，把手交給我吧 🤍</p>
          <PrimaryButton
            href={buildLineUrl(LINE_TEXT.skin)}
            text="預約專屬養膚處方籤 ✨"
          />
        </div>
        <div className="mt-10 text-center text-[#8C7A6B] font-serif italic text-xl pb-28">
          — Yours, Han.
        </div>
      </Section>
    </div>
  );
}
