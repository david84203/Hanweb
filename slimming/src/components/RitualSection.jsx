import React from 'react';

/** 三步驟產品資料 */
const STEPS = [
    {
        step: '01',
        title: '內在淨化儀式',
        subtitle: '小黃',
        description:
            '補充日常難得的水溶性膳食纖維，幫妳卸下看不見的積累與負擔，找回久違的順暢與純淨。',
        accentColor: 'var(--color-gold)',
        bgClass: 'bg-[var(--color-gold-bg)]/30',
        blurClass: 'bg-[var(--color-gold-bg)]/50',
    },
    {
        step: '02',
        title: '輕盈防禦屏障',
        subtitle: '小綠',
        description:
            '澱粉愛好者的神隊友。在享受豐盛餐點時，幫助促進新陳代謝，陪妳零罪惡感地品味美食。',
        accentColor: 'var(--color-sage)',
        bgClass: 'bg-[var(--color-sage-bg)]/30',
        blurClass: 'bg-[var(--color-sage-bg)]/50',
    },
    {
        step: '03',
        title: '極致透亮光感',
        subtitle: '粉妍片',
        description:
            '當身體清空了負擔，正是注入養分的最佳時機。為內在循環點燃火種，由內而外透出好氣色。',
        accentColor: 'var(--color-rose)',
        bgClass: 'bg-[var(--color-rose-bg)]/40',
        blurClass: 'bg-[var(--color-rose-bg)]/60',
    },
];

/**
 * RitualSection — 輕盈三部曲（The Ritual）
 * 用三張卡片呈現瘦身保養的三步驟產品。
 */
export default function RitualSection() {
    return (
        <section className="px-6 py-20 bg-white">
            <h2 className="text-2xl font-serif text-center mb-16 text-slate-800 tracking-wide">
                The Ritual
                <br />
                <span className="text-base text-slate-500 font-sans font-light mt-2 block">
                    專屬妳的輕盈三部曲
                </span>
            </h2>

            <div className="space-y-10">
                {STEPS.map(({ step, title, subtitle, description, accentColor, bgClass, blurClass }) => (
                    <div key={step} className={`${bgClass} rounded-3xl p-8 relative overflow-hidden`}>
                        <div className={`absolute -right-4 -top-4 w-24 h-24 ${blurClass} rounded-full blur-2xl`} />
                        <div className="relative z-10">
                            <span
                                className="text-xs font-semibold tracking-widest mb-3 block"
                                style={{ color: accentColor }}
                            >
                                STEP {step}
                            </span>
                            <h3 className="text-lg font-serif text-slate-800 mb-3">
                                {title}{' '}
                                <span className="text-sm font-sans font-light text-slate-500">/ {subtitle}</span>
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-light">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
