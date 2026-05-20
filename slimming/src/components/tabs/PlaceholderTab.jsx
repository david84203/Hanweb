import React from 'react';

export default function PlaceholderTab({ label }) {
    return (
        <div className="min-h-screen bg-[var(--color-cream)] flex flex-col items-center justify-center pb-20 px-8">
            <div className="text-center">
                <div className="w-16 h-px bg-slate-200 mx-auto mb-8" />
                <p className="text-[10px] tracking-[0.3em] text-[var(--color-gold)] uppercase font-light mb-4">
                    Coming Soon
                </p>
                <h2 className="text-xl font-serif text-slate-700 tracking-wider mb-3">
                    {label}
                </h2>
                <p className="text-xs text-slate-400 font-light tracking-wide">
                    即將推出，敬請期待
                </p>
                <div className="w-16 h-px bg-slate-200 mx-auto mt-8" />
            </div>
        </div>
    );
}
