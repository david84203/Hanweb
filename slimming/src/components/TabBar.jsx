import React from 'react';

export default function TabBar({ tabs, active, onChange }) {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50">
      <div className="bg-white/96 backdrop-blur-sm border-t border-slate-100 flex">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className="flex-1 flex flex-col items-center pt-1.5 pb-3 relative transition-all active:opacity-50"
              style={{ minHeight: 52 }}
            >
              {/* 頂部啟用指示線 */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300"
                style={{
                  width: isActive ? 24 : 0,
                  backgroundColor: 'var(--color-sage)',
                }}
              />

              <Icon
                size={isActive ? 22 : 20}
                className={`transition-colors duration-200 ${isActive ? 'text-[var(--color-sage)]' : 'text-slate-300'}`}
                strokeWidth={isActive ? 2 : 1.5}
              />

              {/* Active：顯示標籤；Inactive：佔位保持高度一致 */}
              {isActive ? (
                <span className="text-[9px] tracking-wide text-[var(--color-sage)] font-medium mt-0.5 leading-none">
                  {label}
                </span>
              ) : (
                <div className="h-[11px]" />
              )}
            </button>
          );
        })}
      </div>
      {/* iOS 底部安全區域 */}
      <div className="bg-white h-[env(safe-area-inset-bottom,0px)]" />
    </div>
  );
}
