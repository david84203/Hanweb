import React, { useEffect } from 'react';
import FadeIn from '../FadeIn';

// 自訂色彩（對應 page3 的 brand-* 色票）
// brand-bg: #FAF9F6 | brand-text: #3A3A3A | brand-muted: #7A7A7A
// brand-accent: #D4C9C1 | brand-btn: #C5B5A5

export default function CollagenTab() {
  return (
    <div className="font-sans text-[#3A3A3A] bg-[#FAF9F6] min-h-screen selection:bg-[#D4C9C1] selection:text-white">

      {/* 1. Hero */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="光影與肌膚意象"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-[#FAF9F6]/40 backdrop-blur-[2px]" />
        </div>
        <FadeIn className="relative z-10 text-center px-6 max-w-sm mx-auto mt-16">
          <h1 className="text-2xl font-medium tracking-widest text-[#3A3A3A] mb-6 leading-tight">
            最好的底妝，<br />是妳肌膚自帶的光澤。
          </h1>
          <p className="text-sm tracking-wider text-[#3A3A3A]/80 font-light leading-loose">
            卸下繁複的修飾，以毫不費力的姿態，<br />透出由內而外的原生純淨。
          </p>
        </FadeIn>
      </section>

      {/* 2. 痛點共鳴 */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] mb-10">
              <img
                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="純淨氛圍"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="font-serif text-[#7A7A7A] italic mb-3 tracking-widest text-sm">Before We Start...</p>
            <h2 className="text-xl font-medium mb-8 tracking-wider">
              在追求美的路上，<br />妳是否也曾有過這些無聲的嘆息？
            </h2>
            <ul className="space-y-6">
              {[
                '換了再多專櫃粉底，到了下午，眼周與法令紋還是悄悄卡了粉？',
                '凝視鏡子時，發現臉部輪廓的線條，似乎不再像從前那般緊緻上揚？',
                '即使每天認真保養，肌膚依然有種難以言喻的疲憊感、缺乏飽滿的彈性？',
                '曾經嘗試過各種膠原蛋白，卻總覺得只是在吃心安，遲遲看不見期待的改變？',
              ].map((text, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#D4C9C1] mr-3 mt-0.5">・</span>
                  <p className="text-[#3A3A3A]/80 text-sm leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-6 border-t border-[#D4C9C1]/30">
              <p className="text-base tracking-widest font-medium">
                如果妳輕輕點了頭，請放心，妳並不孤單。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. 主理人告白 */}
      <section className="py-20 bg-white/50 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="flex flex-col items-center gap-8">
              <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl shadow-[#D4C9C1]/20 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="主理人 Han"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="relative">
                <span className="absolute -top-8 -left-4 text-5xl text-[#D4C9C1]/30 font-serif font-bold">"</span>
                <blockquote className="relative z-10">
                  <p className="text-sm tracking-wide leading-loose mb-4">
                    Hi, 我是 Han。<br /><br />
                    在美業耕耘的這 10 年裡，我為無數女孩打理過妝容，看過各種狀態的肌膚。我漸漸明白，真正讓人移不開雙眼的，從來不是多完美的遮瑕，而是一種「穠纖合度的自信」。
                  </p>
                  <p className="text-sm tracking-wide leading-loose mb-6">
                    那份自信，必須建立在穩固的「內在支撐力」上。當我們的肌底有了真實的力量，自然能撐起輕盈透亮的氣色，不再需要依賴厚重的粉底。
                  </p>
                  <footer className="text-xs font-medium tracking-widest text-[#7A7A7A] border-l-2 border-[#D4C9C1] pl-4">
                    —— 10 年造型師 / 莎朗嘿yo韓式照相館主理人 Han
                  </footer>
                </blockquote>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. 成分美學 */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="font-serif text-[#7A7A7A] italic mb-2 text-sm tracking-widest">Ingredient Aesthetics</p>
              <h2 className="text-2xl font-medium tracking-wider mb-3">不妥協的成分美學</h2>
              <p className="text-[#7A7A7A] text-sm">給身體的，理當是最純粹且精準的奢華給養。</p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {[
              {
                num: '01', title: '極致微小的滲透藝術',
                img: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                desc: '1000-3000 道爾頓的極致胜肽分子，能以最高效的姿態，在兩小時內溫柔遊走全身。我們將 5g 的有效胜肽收攏於一小包中，這等同於 2-3 條深海魚的珍貴精華，為妳帶來真正有感的吸收。'
              },
              {
                num: '02', title: '21 型全方位的細緻呵護',
                img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                desc: '捨棄市售單一型態的侷限，我們珍萃深海鯰魚魚皮，完整保留 21 型膠原蛋白。從臉龐的澎潤、支撐衣著的自信線條，到步履間的輕盈細節，給予全身毫無死角的細膩照顧。'
              },
              {
                num: '03', title: '雙蛋白協同的彈潤金字塔',
                img: 'https://images.unsplash.com/photo-1507005891461-127e7d03f5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                desc: '5000mg 義大利鯰魚膠原蛋白肽，遇上源自日本珍稀「彈性蛋白」。若膠原蛋白是穩固基底的水泥，彈性蛋白便是賦予韌性的鋼筋，兩者完美協同，由內而外喚醒全身肌膚的Ｑ彈保水度。'
              },
              {
                num: '04', title: '植萃飆速的純淨配方',
                img: 'https://images.unsplash.com/photo-1490818387583-1baba5e638ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                desc: '揉合維他命 C 之王「刺梨」、含鐵與葉酸的「法國紅甜菜根」，及青春「巴西莓果」。這組配方不僅將吸收率優雅提升 29%，更溫柔擁抱女性內在保養，細心安撫每個月的那些不適。'
              },
              {
                num: '05', title: '尋回專屬的隱形彈力網',
                img: 'https://images.unsplash.com/photo-1601614210648-522614b1b827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                desc: '透過頂級胜肽的深層滋養，幫助身體重塑內在懸吊支撐的「彈力網」。讓歲月帶走的緊緻，以最不費力的方式，重新回到挺拔迷人的理想狀態。'
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div>
                  <div className="aspect-square overflow-hidden mb-4 rounded-sm">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="font-serif text-[#D4C9C1] text-xl mb-1">{item.num}</div>
                  <h3 className="text-base font-medium tracking-wider mb-3">{item.title}</h3>
                  <p className="text-[#3A3A3A]/70 text-sm leading-loose">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 品質保障 */}
      <section className="py-20 bg-[#D4C9C1]/5 px-6 border-y border-[#D4C9C1]/10">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="font-serif text-[#7A7A7A] italic mb-2 text-sm tracking-widest">Pure Promise</p>
            <h2 className="text-xl font-medium tracking-wider mb-8 leading-snug">
              純粹的底氣，<br />源於極致的嚴謹。
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: '千項以上的品質把關',
                  desc: '產品歷經超過 1000 項以上的嚴格品質檢驗合格，確保無多餘負擔，讓妳的每一口都純淨無虞。'
                },
                {
                  title: '台灣大江生醫 頂尖精工製造',
                  desc: '攜手具備國際頂尖研發實力的台灣大江生醫 (TCI) 製造。以最高規格的無塵環境與科學萃取技術，完整封存每一滴美好精華。'
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 mt-0.5 border border-[#D4C9C1]/20">
                    <svg className="w-4 h-4 text-[#D4C9C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1 tracking-wider">{item.title}</h3>
                    <p className="text-[#3A3A3A]/70 text-sm leading-loose">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. 結語 CTA */}
      <section className="py-24 px-6 bg-white/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4C9C1]/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-xl font-medium tracking-widest mb-6 leading-relaxed">
              真正的美，從來都不該是費力的折騰，<br />而是日常中不經意的優雅。
            </h2>
            <p className="text-sm text-[#3A3A3A]/70 tracking-widest mb-10">
              把保養化為一場靜謐的自我療癒，妳值得擁有最純粹的支撐。
            </p>
            <a
              href="https://line.me/R/ti/p/@726rmfol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#C5B5A5] hover:bg-[#B3A190] text-white px-10 py-4 rounded-full text-sm tracking-widest transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(197,181,165,0.6)] hover:-translate-y-1"
            >
              <span className="mr-2">🤍</span>
              與 Han 預約妳的專屬澎潤計畫
            </a>
            <p className="mt-6 text-xs text-[#7A7A7A]/70 tracking-wider leading-relaxed mb-24">
              輕點按鈕，將引導您前往官方 LINE 聊天室。<br />
              Han 將親自為您進行一對一諮詢。
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
