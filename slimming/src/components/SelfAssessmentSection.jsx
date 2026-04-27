import React from 'react';
import { Check } from 'lucide-react';

/** 自我檢測題目 */
const SIGNALS = [
    '在忙碌的空檔，習慣用精緻澱粉與甜食療癒自己？',
    '感覺節奏變慢，穿上心儀的合身洋裝時不再那麼從容？',
    '明明有休息，卻總覺得狀態沉甸甸的，散發不出光澤？',
];

/**
 * SelfAssessmentSection — 身體的悄悄話
 * 引導使用者自我覺察，建立痛點共鳴。
 */
export default function SelfAssessmentSection() {
    return (
        <section className="px-8 py-16 bg-[#FAFAF8]">
            <h2 className="text-xl font-serif text-center mb-10 text-slate-800 tracking-wide">
                傾聽身體的訊號，
                <br />
                妳是否也正經歷這些日常？
            </h2>

            <div className="space-y-6 mb-12">
                {SIGNALS.map((text, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-sage-bg)]/40 flex items-center justify-center">
                            <Check size={12} className="text-[var(--color-sage)]" />
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed font-light">{text}</p>
                    </div>
                ))}
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-50">
                <p className="text-sm text-[var(--color-sage)] leading-relaxed font-medium">
                    如果答案是肯定的，那不是妳不夠努力，
                    <br />
                    而是身體需要一次溫柔的「重整」。
                </p>
            </div>
        </section>
    );
}
