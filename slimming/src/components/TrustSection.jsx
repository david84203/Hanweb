import React from 'react';
import { FlaskConical, Factory, ShieldCheck } from 'lucide-react';

/** 信任背書資料 */
const TRUST_ITEMS = [
    {
        icon: FlaskConical,
        color: 'text-[var(--color-gold)]',
        title: '百年科學底蘊',
        description:
            '針對「粉妍片」，特別採用擁有百年歷史的歐洲製藥領導品牌 DSM（帝斯曼）專利研發技術，注入頂級煥活秘密。',
    },
    {
        icon: Factory,
        color: 'text-[var(--color-sage)]',
        title: '權威大廠把關',
        description:
            '全系列品項皆交由台灣權威 GMP 藥品級大廠「永信」高規格生產，以嚴謹的科學標準確保品質精準安定。',
    },
    {
        icon: ShieldCheck,
        color: 'text-[var(--color-rose)]',
        title: '國家級安心認證',
        description:
            '每一款產品皆通過第三方權威嚴格的安全測試。沒有隱藏風險，只有對身體最純粹的寵愛。',
    },
];

/**
 * TrustSection — 零死角的純淨承諾（The Trust）
 * 三大品質信任背書。
 */
export default function TrustSection() {
    return (
        <section className="px-8 py-20 bg-[var(--color-cream)]">
            <div className="text-center mb-14">
                <h2 className="text-xl font-serif text-slate-800 mb-4 tracking-wide">
                    這份從容的底氣，
                    <br />
                    來自世界級的嚴格把關。
                </h2>
            </div>

            <div className="space-y-10">
                {TRUST_ITEMS.map(({ icon: Icon, color, title, description }) => (
                    <div key={title} className="flex flex-col items-center text-center">
                        <div className={`w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-5 ${color}`}>
                            <Icon strokeWidth={1.5} size={28} />
                        </div>
                        <h4 className="text-base font-medium text-slate-800 mb-2">{title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-light px-4">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
