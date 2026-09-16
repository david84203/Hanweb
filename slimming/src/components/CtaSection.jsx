import React from 'react';
import { ChevronRight } from 'lucide-react';
import { buildLineUrl, LINE_TEXT } from '../lib/line';

const LINE_URL = buildLineUrl(LINE_TEXT.body);

/**
 * CtaSection — 專屬行動呼籲（Call to Action）
 * LINE 一鍵諮詢按鈕。
 */
export default function CtaSection() {
    return (
        <section className="px-8 pt-16 pb-24 bg-white text-center rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-20">
            <div className="max-w-[280px] mx-auto mb-10">
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                    每個人的體質與生活節奏不同。
                    <br />
                    讓專業的成分照顧身體，
                    <br />
                    <span className="text-slate-800 font-medium">把時間留給更美好的生活。</span>
                </p>
            </div>

            <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-800 text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 hover:bg-slate-700 transition-all active:scale-[0.98] shadow-lg shadow-slate-200 cursor-pointer"
            >
                <span className="text-sm font-medium tracking-wider">
                    🤍 預約體態管理諮詢
                </span>
                <ChevronRight size={18} className="opacity-70" />
            </a>

            <p className="mt-6 text-xs text-slate-400 font-light tracking-wide">
                一對一專屬諮詢・為妳量身打造
            </p>
        </section>
    );
}
