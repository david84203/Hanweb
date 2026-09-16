import React from 'react';
import { ChevronRight } from 'lucide-react';
import FadeIn from '../FadeIn';
import { buildLineUrl, LINE_TEXT } from '../../lib/line';

// 彩妝課色票：延用 index.css 的 --color-rose 系列，跟其他分頁的莫蘭迪色系一致但獨立出來
const ROSE = '#A87B7B';
const ROSE_DARK = '#8F6767';
const ROSE_BG = '#F2E3E3';
const INK = '#3A3A3A';
const INK_SOFT = '#6B6060';

const Section = ({ children, className = '', id = '' }) => (
  <section id={id} className={`py-16 px-6 w-full flex justify-center ${className}`}>
    <div className="max-w-2xl w-full">{children}</div>
  </section>
);

// 本頁不放照片，用色塊＋線條做裝飾
const Divider = () => (
  <div className="flex items-center justify-center gap-2 my-6">
    <div className="w-8 h-px" style={{ backgroundColor: ROSE }} />
    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ROSE }} />
    <div className="w-8 h-px" style={{ backgroundColor: ROSE }} />
  </div>
);

// 按鈕文字就是送進 LINE 的預填句（A／B 兩句在 line.js 的 LINE_TEXT，LINE 後台各設一組關鍵字）
const PrimaryButton = ({ text }) => (
  <a
    href={buildLineUrl(text)}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full transition-all duration-300 text-sm font-light tracking-wider shadow-md hover:shadow-lg w-full sm:w-auto"
    style={{ backgroundColor: ROSE }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ROSE_DARK)}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ROSE)}
  >
    {text}
    <ChevronRight className="w-4 h-4" />
  </a>
);

const PlanCard = ({ tag, title, tagline, price, detail, ctaText }) => (
  <div className="rounded-[2rem] border p-6" style={{ backgroundColor: '#FFFFFF', borderColor: ROSE_BG }}>
    <span
      className="inline-block text-[10px] tracking-[0.2em] uppercase font-medium px-3 py-1 rounded-full mb-4"
      style={{ backgroundColor: ROSE_BG, color: ROSE_DARK }}
    >
      {tag}
    </span>
    <h3 className="text-lg font-medium mb-2" style={{ color: INK }}>{title}</h3>
    <p className="text-sm font-light mb-4" style={{ color: INK_SOFT }}>{tagline}</p>
    <p className="text-2xl font-serif mb-1" style={{ color: ROSE }}>{price}</p>
    <p className="text-sm font-light mb-6" style={{ color: INK_SOFT }}>{detail}</p>
    <PrimaryButton text={ctaText} />
  </div>
);

export default function MakeupTab() {
  return (
    <div className="font-sans min-h-screen pb-28" style={{ backgroundColor: '#FFFBF9', color: INK }}>

      {/* 1. Hero */}
      <section className="relative w-full py-20 px-6 flex flex-col items-center text-center overflow-hidden">
        <div
          className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{ backgroundColor: ROSE_BG }}
        />
        <div
          className="absolute top-24 -left-12 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ backgroundColor: ROSE_BG }}
        />
        <FadeIn className="relative z-10 max-w-sm">
          <span
            className="text-[10px] tracking-[0.3em] uppercase font-light mb-5 block"
            style={{ color: ROSE }}
          >
            Makeup Class
          </span>
          <h1 className="text-2xl font-serif font-light leading-relaxed mb-6" style={{ color: INK }}>
            化妝，不是改變自己，
            <br />
            而是看見更美好的自己。
          </h1>
          <p className="text-sm font-light leading-loose" style={{ color: INK_SOFT }}>
            想學畫出真正適合自己的妝容？
            <br />
            Han 一對一教，兩種上法任妳選。
          </p>
        </FadeIn>
      </section>

      {/* 2. 兩方案總覽卡片 */}
      <Section>
        <FadeIn>
          <div className="grid grid-cols-1 gap-6">
            <PlanCard
              tag="方案 A"
              title="一對一彩妝教學實作課"
              tagline="先解決眼前最卡關的地方。"
              price="NT$1,600"
              detail="2 小時，當堂完成一個妝容。"
              ctaText={LINE_TEXT.makeupA}
            />
            <PlanCard
              tag="方案 B"
              title="個人彩妝養成課"
              tagline="從頭建立一套屬於自己的妝容系統。"
              price="NT$18,800"
              detail="3 堂共 6 小時，一對一，每月限收 5 位。"
              ctaText={LINE_TEXT.makeupB}
            />
          </div>
        </FadeIn>
      </Section>

      {/* 3. 怎麼選 */}
      <Section className="bg-white">
        <FadeIn>
          <h2 className="text-xl font-serif font-light mb-4" style={{ color: INK }}>怎麼選</h2>
          <Divider />
          <div className="space-y-4 text-sm font-light leading-relaxed" style={{ color: INK_SOFT }}>
            <p>
              如果妳只是某個地方一直畫不好，比如眼線總畫歪、假睫毛黏不好，或底妝老是浮粉，先上「彩妝教學實作課」，兩小時就能抓到問題在哪。
            </p>
            <p>
              如果妳想要的是一整套屬於自己的化妝邏輯，從打底、修容到不同場合的妝感都學會，「個人彩妝養成課」會分三堂一步步帶妳建立起來。
            </p>
            <p>
              上過 1,600 的實作課，之後再報 18,800 的養成課，1,600 可以全額折抵。
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 4. 方案 A 詳情 */}
      <Section>
        <FadeIn>
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: ROSE }}>Plan A</span>
          <h2 className="text-xl font-serif font-light mt-2 mb-4" style={{ color: INK }}>一對一彩妝教學實作課</h2>
          <Divider />
          <div className="space-y-5 text-sm font-light leading-relaxed" style={{ color: INK_SOFT }}>
            <div>
              <p className="font-medium mb-1" style={{ color: INK }}>適合</p>
              <p>底妝總是不服貼、某個地方一直畫不好（眼線、假睫毛…），或想先試試看再決定要不要學更多。</p>
            </div>
            <div>
              <p className="font-medium mb-1" style={{ color: INK }}>怎麼上</p>
              <p>
                兩小時，一對一。先聊聊妳平常化妝卡在哪裡。一個妝容，Han 示範一半，妳自己完成另一半。妳的工具現場一起用，Han 會告訴妳是工具的問題還是手法要調整。沒有彩妝品也沒關係，現場有工具可以用，不用先花錢買。
              </p>
            </div>
            <div>
              <p className="font-medium mb-1" style={{ color: INK }}>費用</p>
              <p>NT$1,600，訂金 NT$500，上課當天付尾款。</p>
            </div>
          </div>
          <div className="mt-8">
            <PrimaryButton text={LINE_TEXT.makeupA} />
          </div>
        </FadeIn>
      </Section>

      {/* 5. 方案 B 詳情 */}
      <Section className="bg-white">
        <FadeIn>
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: ROSE }}>Plan B</span>
          <h2 className="text-xl font-serif font-light mt-2 mb-4" style={{ color: INK }}>個人彩妝養成課</h2>
          <Divider />
          <div className="space-y-5 text-sm font-light leading-relaxed" style={{ color: INK_SOFT }}>
            <div>
              <p className="font-medium mb-1" style={{ color: INK }}>適合</p>
              <p>想從頭建立一整套屬於自己的妝容系統，而不只是解決單一問題。</p>
            </div>
            <div>
              <p className="font-medium mb-2" style={{ color: INK }}>三堂課，一對一，時間依妳的習慣安排</p>
              <ul className="space-y-3 pl-4 border-l-2" style={{ borderColor: ROSE_BG }}>
                <li>
                  <span className="font-medium" style={{ color: INK }}>第一堂　養膚打底×透亮底妝</span>
                  ——了解膚況、妝前保養與底妝技巧，打造乾淨、服貼、自然透亮的底妝。
                </li>
                <li>
                  <span className="font-medium" style={{ color: INK }}>第二堂　五官優化×日常質感妝</span>
                  ——依照臉型、眉眼與五官比例，建立真正適合妳的日常妝容。
                </li>
                <li>
                  <span className="font-medium" style={{ color: INK }}>第三堂　風格轉換×指定妝感實作</span>
                  ——從裸妝感、亞裔妝、千金感、約會妝當中，選一種妳最想學的風格實作。
                </li>
              </ul>
            </div>
            <div>
              <p>
                課程包含專屬養膚彩妝組：超過 15 樣正品，依妳的膚質調整、依膚色與妝感搭配，每一份都不是制式組合。第一堂了解膚質與適合妝容，第二堂交付產品。每月只收 5 位，確保每一堂都能好好教。
              </p>
            </div>
            <div>
              <p className="font-medium mb-1" style={{ color: INK }}>費用</p>
              <p>NT$18,800，訂金 NT$2,000，第一堂上課付清尾款。上過「彩妝教學實作課」的話，1,600 元全額折抵。</p>
            </div>
          </div>
          <div className="mt-8">
            <PrimaryButton text={LINE_TEXT.makeupB} />
          </div>
        </FadeIn>
      </Section>

      {/* 6. 共通說明 */}
      <Section>
        <FadeIn>
          <h2 className="text-xl font-serif font-light mb-4" style={{ color: INK }}>共通說明</h2>
          <Divider />
          <ul className="space-y-3 text-sm font-light leading-relaxed" style={{ color: INK_SOFT }}>
            {[
              '上課地點韓式照相館（莎朗嘿yo，台中東區）',
              '平日、假日都可以約，時間一對一協調',
              '改期最多一次，請提前三天告知',
              '上課前七天取消全額退訂金，七天內不退但可以轉讓給朋友',
              '付款方式 LINE Pay、街口支付、轉帳都可以',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: ROSE }} />
                {text}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Section>

      {/* 7. 頁底一句 */}
      <Section className="text-center">
        <FadeIn>
          <p className="text-sm font-light leading-relaxed" style={{ color: INK_SOFT }}>
            若妳本身有經營社群、團購或小店，完成課程後可以另外了解選品合作方式。
          </p>
        </FadeIn>
      </Section>
    </div>
  );
}
