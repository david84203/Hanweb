import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { buildLineUrl } from '../lib/line';

/** 三張產品卡共用：製造商小字 */
const MANUFACTURER_NOTE = '台灣製藥大廠 永信 製造';

/** 三步驟產品資料 */
const STEPS = [
    {
        step: '01',
        title: '內在淨化儀式',
        subtitle: '小黃',
        productName: '膳食纖維粉末',
        spec: '30 包／盒・每包 5 g',
        price: 'NT$2,250',
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
        productName: '白腎豆粉末',
        spec: '30 包／盒・每包 5 g',
        price: 'NT$2,450',
        description:
            '澱粉愛好者的神隊友。在享受豐盛餐點時，陪妳維持輕盈自在，零罪惡感地品味美食。',
        accentColor: 'var(--color-sage)',
        bgClass: 'bg-[var(--color-sage-bg)]/30',
        blurClass: 'bg-[var(--color-sage-bg)]/50',
    },
    {
        step: '03',
        title: '極致透亮光感',
        subtitle: '粉妍片',
        productName: '粉妍片',
        spec: '60 錠／盒・每錠 506 mg',
        price: 'NT$2,680',
        description:
            '當身體清空了負擔，正是注入養分的最佳時機。為內在循環點燃火種，由內而外透出好氣色。',
        accentColor: 'var(--color-rose)',
        bgClass: 'bg-[var(--color-rose-bg)]/40',
        blurClass: 'bg-[var(--color-rose-bg)]/60',
    },
];

/**
 * RitualSection — 輕盈三部曲（The Ritual）
 * 用三張卡片呈現體態保養的三步驟產品。
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

            {/* 價格公開，但刻意不做三支並排的價目表：先講「從一支開始」，再分別列 */}
            <div className="mb-12 rounded-3xl border border-slate-100 bg-[#FAFAF8] px-6 py-6 text-center">
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                    不用三支都買，<span className="text-slate-800 font-medium">從一支開始就好</span>。
                    <br />
                    最低從膳食纖維粉末 NT$2,250 起。
                </p>
                <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">
                    一盒吃多久因人而異。想知道自己適合從哪一支開始，直接問我。
                </p>
            </div>

            <div className="space-y-10">
                {STEPS.map(({ step, title, subtitle, productName, spec, price, description, accentColor, bgClass, blurClass }) => (
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
                            <div className="mt-4 pt-3 border-t border-white/70">
                                <p className="text-xs text-slate-500 font-light">{productName}・{spec}</p>
                                <p className="mt-1 text-sm font-medium text-slate-800 tracking-wide">{price}</p>
                            </div>
                            <p className="flex items-center gap-1 mt-3 text-xs text-slate-400">
                                <ShieldCheck size={13} className="shrink-0" />
                                {MANUFACTURER_NOTE}
                            </p>
                            <a
                                href={buildLineUrl(`Han～我想了解「${title}・${subtitle}」`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 mt-5 text-xs tracking-wider text-slate-700 border-b border-slate-400 pb-0.5 hover:text-slate-900 hover:border-slate-700 transition-colors"
                            >
                                預約了解{subtitle} →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
