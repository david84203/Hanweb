import React, { useState, useEffect } from 'react';

// 圖片副檔名可能是 .jpg 或 .png：先試 .jpg，載入失敗自動改試 .png
// 用法：<SmartImg base="/collagen/01" alt="..." className="..." />
export default function SmartImg({ base, ...props }) {
  const [ext, setExt] = useState('jpg');

  useEffect(() => {
    setExt('jpg');
  }, [base]);

  if (ext === 'none') return null;

  return (
    <img
      src={`${base}.${ext}`}
      onError={() => setExt(ext === 'jpg' ? 'png' : 'none')}
      {...props}
    />
  );
}
