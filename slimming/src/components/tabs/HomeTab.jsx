import React from 'react';

export default function HomeTab() {
    return (
        <div className="min-h-screen bg-[var(--color-cream)] flex flex-col pb-20">
            {/* 主視覺 */}
            <div className="relative w-full h-[55vh]">
                <img
                    src="/images/Han.jpg"
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
                    韓式照相館・輕盈保養・品牌美學
                </p>
            </div>
        </div>
    );
}
