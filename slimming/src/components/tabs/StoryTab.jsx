import React, { useEffect, useRef, useState } from 'react';

function useFadeInOnScroll(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
}

const FadeIn = ({ children, delay = 'delay-0', className = '' }) => {
  const [ref, isVisible] = useFadeInOnScroll({ threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${delay} ${className}`}
    >
      {children}
    </div>
  );
};

export default function StoryTab() {
  return (
    <div className="text-[#4A4947] font-sans selection:bg-[#DDBFB4] selection:text-white">

      {/* 第一區塊：質感個人獨照與引言 */}
      <section className="bg-[#FAFAFA] px-6 pt-16 pb-20">
        <FadeIn>
          <div className="rounded-3xl overflow-hidden mb-12 aspect-[4/5] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
              alt="質感獨照"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay="delay-150">
          <div className="space-y-8 text-[15px] leading-loose tracking-wide font-light px-2">
            <p>從小，我就深刻體會現實的重量。</p>

            <p>
              過去的我，習慣把每一分錢捏得很緊。<br/>
              潛意識裡總覺得：<br/>
              「我必須非常、非常用力，<br/>
              才能換取一點點的安全感。」
            </p>

            <p>
              看著身邊的人，<br/>
              從容地買下喜歡的包、隨時啟程探索世界，<br/>
              我羨慕的，其實從來不是那些物品。
            </p>

            <p>我嚮往的，是不被薪水與打卡鐘綁住的「自由」。</p>

            <p>
              那時我意識到，<br/>
              如果繼續困在「以時間換取金錢」的框架裡，<br/>
              我永遠無法過上那種真正鬆弛、優雅的生活。<br/>
              我渴望把人生的選擇權，重新握回自己手裡。
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 第二區塊：局部氛圍特寫與轉折故事 */}
      <section className="bg-[#F7F4F0] px-6 py-24">
        <FadeIn>
          <div className="space-y-8 text-[15px] leading-loose tracking-wide font-light px-2 mb-12">
            <p>
              學生時期的我，曾被嚴重的敏感與痘痘肌折磨，<br/>
              容貌焦慮讓我從未真正自信過。
            </p>

            <p>
              直到遇見一套溫柔接住我肌膚狀況的保養品。<br/>
              它不僅是皮膚的救贖，<br/>
              更開啟了我「愛自己」的第一步。
            </p>

            <p>
              過程中，我遇見了生命中的貴人——我的美容顧問。<br/>
              她沒有因為我只是個預算有限的學生而怠慢，<br/>
              反而用最真誠的陪伴，<br/>
              讓我看見了「變美」背後的無窮力量。
            </p>

            <p>
              透過她，我第一次了解到：<br/>
              一份理想的事業，<br/>
              原來不需要砸下重金或承擔巨大風險。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay="delay-150">
          <div className="rounded-[2.5rem] overflow-hidden mb-12 aspect-square shadow-sm mx-2">
            <img
              src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80"
              alt="保養氛圍特寫"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="space-y-8 text-[15px] leading-loose tracking-wide font-light px-2">
            <p>
              這個不費力就能開啟的低門檻起點讓我明白——<br/>
              只要願意跨出那一步，即使平凡如我，<br/>
              也能為自己優雅地打造一份嚮往的美麗事業。
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 第三區塊：質感生活照與心境轉變 */}
      <section className="bg-[#FAFAFA] px-6 py-24">
        <FadeIn>
          <div className="rounded-t-[3rem] rounded-b-3xl overflow-hidden mb-12 aspect-[4/3] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?auto=format&fit=crop&w=800&q=80"
              alt="質感生活與另一半"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay="delay-150">
          <div className="space-y-8 text-[15px] leading-loose tracking-wide font-light px-2">
            <p>回首這十年的每一頁，我看待世界的眼光漸漸不同。</p>

            <p>
              過去總用「達成下一個目標」嚴格鞭策自己；<br/>
              現在，我學會了在忙碌中停下腳步，好好享受當下。
            </p>

            <p>
              這樣的心境轉折，很大一部分來自我的信仰。<br/>
              在無數次感到疲憊不堪時，<br/>
              我都經歷了被上帝溫柔接住的奇妙時刻。<br/>
              感謝神，這一切的帶領讓我深深明白，<br/>
              我走的是一條滿溢祝福的恩典之路。
            </p>

            <p>
              我也很幸運，在學會認真對待自己後，<br/>
              遇見了全然包容、無條件寵愛我的另一半。
            </p>

            <p>
              在他身邊，我曾有過的不安被慢慢治癒。<br/>
              我們並肩同行、彼此扶持，<br/>
              讓我能帶著對未來的盼望，安心走入婚姻。
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 第四區塊：未來藍圖與行動呼喚 */}
      <section className="bg-[#F7F4F0] px-6 pt-24 pb-12">
        <FadeIn>
          <div className="space-y-8 text-[15px] leading-loose tracking-wide font-light px-2 mb-16">
            <p>
              「信仰第一，家庭第二，事業第三。」<br/>
              這是我深深認同的理念，<br/>
              來自於玫琳凱品牌的創辦人 —— Mary Kay Ash。
            </p>

            <p>
              曾經，這對我來說只是一個遙遠的理想；<br/>
              但現在，它真切地成為了我的日常。
            </p>

            <p>我擁有了真正的時間自主權。</p>

            <p>
              這份美業事業的彈性，<br/>
              讓我能不受限制地創造質感收入；<br/>
              我能優雅地打理照相館的日常，<br/>
              更陪伴著一群女孩，逐步實現美麗的蛻變與財務的藍圖。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay="delay-150">
          <div className="grid grid-cols-2 gap-3 mb-16">
            <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80" alt="照相館側拍" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=400&q=80" alt="質感料理" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=400&q=80" alt="歐洲旅遊" className="w-full h-full object-cover" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="space-y-8 text-[15px] leading-loose tracking-wide font-light px-2 mb-12">
            <p>
              我也終於有餘裕，把最好的時光留給最愛的人——<br/>
              能靜下心來陪伴家人聊聊天、<br/>
              為心愛的人烹飪健康不重複的日常料理，<br/>
              也能滿心期待地，和老公細細規劃那趟長達兩週的歐洲蜜月旅行。
            </p>

            <p>
              這份不費力的從容，<br/>
              正是過去十年在美業扎實累積，所帶給我的底氣。
            </p>

            <p>
              現在的我深信：<br/>
              「追求卓越是本能，<br/>
              但懂得優雅生活，才是真正的本事。」
            </p>

            <p>
              我們不是為了工作而活著，<br/>
              而是為了擁有更好的生活品質而工作。
            </p>

            <p>
              把時間留給愛的人，做自己喜歡的事，<br/>
              這樣的生活，才真正不留遺憾。
            </p>

            <div className="py-6 flex justify-center">
              <div className="h-[1px] w-12 bg-[#DDBFB4]" />
            </div>

            <p>
              如果妳也厭倦了必須很用力的生活，<br/>
              渴望增加一份質感收入；<br/>
              或許，這會是妳人生中一次溫柔的轉折。
            </p>

            <p>
              改變不需要轟轟烈烈，<br/>
              有時候只需要妳願意給自己一個重新選擇的機會。
            </p>

            <p>
              讓我陪妳一起，<br/>
              試著把嚮往的高級感，過成毫不費力的日常。
            </p>
          </div>
        </FadeIn>

        {/* CTA 按鈕（非固定，隨頁面捲動，底部留空給 Tab 列） */}
        <button className="w-full bg-[#DDBFB4] text-white py-5 text-center text-lg font-medium tracking-widest shadow-sm transition-opacity hover:opacity-95 active:opacity-90 flex items-center justify-center gap-2 rounded-xl mb-28">
          開啟妳的溫柔轉折
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </section>

    </div>
  );
}
