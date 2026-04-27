import React from 'react';
import HeroSection from './components/HeroSection';
import SelfAssessmentSection from './components/SelfAssessmentSection';
import RitualSection from './components/RitualSection';
import TrustSection from './components/TrustSection';
import CtaSection from './components/CtaSection';

/**
 * App — Effortless Chic 瘦身一頁式 Landing Page
 *
 * 設計美學：Effortless Chic（毫不費力的高級感）
 * 色彩系統：奶油白基底，搭配鼠尾草綠 / 奶茶金 / 柔玫瑰三色系
 */
export default function App() {
    return (
        <div className="min-h-screen bg-[var(--color-cream)] text-slate-800 font-sans">
            <div className="max-w-md mx-auto bg-white shadow-2xl shadow-slate-100/50 overflow-hidden">
                <HeroSection />
                <SelfAssessmentSection />
                <RitualSection />
                <TrustSection />
                <CtaSection />
            </div>
        </div>
    );
}
