import React from 'react';
import { ChevronRight } from 'lucide-react';
import SmartImg from '../SmartImg';
import { buildLineUrl, LINE_TEXT } from '../../lib/line';

/** 入口卡樣式：標題、副標、卡片底色（沿用現有色票） */
const CARD_CLASS = 'rounded-2xl p-4 text-left flex flex-col gap-1 active:scale-[0.98] transition-transform';

export default function HomeTab({ onNavigate }) {
    return (
        <div className="min-h-screen bg-[var(--color-cream)] flex flex-col pb-20">
            {/* 主視覺 */}
            <div className="relative w-full h-[55vh]">
                <SmartImg
                    base="/home/01"
                    alt="Han"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-transparent to-transparent" />
            </div>

            {/* 品牌區塊 */}
            <div className="flex flex-col items-center -mt-6 relative z-10 px-8 text-center">
                <p className="text-[10px] tracking-[0.3em] text-[var(--color-gold)] uppercase font-light mb-2">
                    Effortless Chic
                </p>
                <h1 className="text-3xl font-serif text-slate-800 tracking-widest mb-1">
                    Han
                </h1>
                <p className="text-xs text-slate-500 font-light tracking-wider mt-1">
                    乾淨・明亮・溫柔
                </p>

                {/* 分隔線 */}
                <div className="flex items-center gap-3 my-8 w-full max-w-[200px]">
                    <div className="flex-1 h-px bg-slate-200" />
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                    <div className="flex-1 h-px bg-slate-200" />
                </div>

                {/* 品牌介紹 */}
                <p className="text-sm text-slate-600 leading-relaxed font-light tracking-wide max-w-[280px]">
                    美，不該是努力的結果，
                    <br />
                    而是一種生活的狀態。
                </p>

                <p className="mt-4 text-xs text-slate-500 leading-loose font-light">
                    韓式照相館・輕盈保養・品牌美學・彩妝課
                </p>
            </div>

            {/* 入口卡：想從哪裡開始 */}
            <div className="px-6 mt-10">
                <p className="text-center text-xs tracking-[0.2em] text-slate-400 uppercase font-light mb-5">
                    想從哪裡開始？
                </p>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => onNavigate('skin')}
                        className={`bg-[var(--color-sage-bg)]/40 ${CARD_CLASS}`}
                    >
                        <span className="text-sm font-serif text-[var(--color-sage)]">原生美肌</span>
                        <span className="text-[11px] text-slate-500 font-light leading-snug">減法保養，每一步都用對</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => onNavigate('makeup')}
                        className={`bg-[var(--color-rose-bg)]/40 ${CARD_CLASS}`}
                    >
                        <span className="text-sm font-serif text-[var(--color-rose)]">彩妝課</span>
                        <span className="text-[11px] text-slate-500 font-light leading-snug">一對一，找真正屬於妳的妝</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => onNavigate('collagen')}
                        className={`bg-[var(--color-gold-bg)]/40 ${CARD_CLASS}`}
                    >
                        <span className="text-sm font-serif text-[var(--color-gold)]">澎潤Q彈計畫</span>
                        <span className="text-[11px] text-slate-500 font-light leading-snug">每天早上留給自己的小儀式</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => onNavigate('slimming')}
                        className={`bg-[var(--color-sage-bg)]/40 ${CARD_CLASS}`}
                    >
                        <span className="text-sm font-serif text-[var(--color-sage)]">體態管理</span>
                        <span className="text-[11px] text-slate-500 font-light leading-snug">懂享受，也懂維持輕盈節奏</span>
                    </button>
                </div>

                <a
                    href={buildLineUrl(LINE_TEXT.custom)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full bg-slate-800 text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 hover:bg-slate-700 transition-all active:scale-[0.98] shadow-lg shadow-slate-200"
                >
                    <span className="text-sm font-medium tracking-wider">不知道從哪開始？請 Han 幫我看</span>
                    <ChevronRight size={18} className="opacity-70" />
                </a>
            </div>
        </div>
    );
}
