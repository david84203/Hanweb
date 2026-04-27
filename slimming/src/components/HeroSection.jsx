import React from 'react';

/**
 * HeroSection — 核心視覺（The Vibe）
 * 情境圖 + 品牌標語，營造「毫不費力」的高級美學初印象。
 */
export default function HeroSection() {
    return (
        <section className="relative w-full bg-[var(--color-cream)]">
            {/* 情境圖 */}
            <div className="w-full h-[65vh] relative">
                <img
                    src="https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=800&q=80"
                    alt="自然光感下展現輕盈自信的女性"
                    className="w-full h-full object-cover rounded-b-[2.5rem]"
                    loading="eager"
                />
                {/* 柔和漸層遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent rounded-b-[2.5rem]" />
            </div>

            <div className="px-8 py-12 text-center -mt-10 relative z-10">
                <h1 className="text-3xl font-serif text-slate-800 leading-snug mb-5 tracking-wide">
                    真正的高級感，
                    <br />
                    是活得<span className="italic text-[var(--color-sage)]">毫不費力</span>。
                </h1>
                <p className="text-sm text-slate-600 leading-relaxed font-light tracking-wider">
                    享受美食與展現自信線條，不該是拉鋸戰。
                    <br />
                    透過聰明的「內在管理儀式」，
                    <br />
                    陪妳找回身體最輕盈的節奏。
                </p>
            </div>
        </section>
    );
}
