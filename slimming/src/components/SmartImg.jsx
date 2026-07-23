import React, { useEffect, useState } from 'react';

const FALLBACK_EXTS = ['jpg', 'png', 'webp'];

// Usage: <SmartImg base="/collagen/01" alt="..." className="..." />
export default function SmartImg({ base, onError, ...props }) {
  const [fallbackIndex, setFallbackIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFallbackIndex(0);
    setFailed(false);
  }, [base]);

  if (failed) return null;

  const ext = FALLBACK_EXTS[fallbackIndex];

  return (
    <img
      {...props}
      src={`${base}.${ext}`}
      onError={(event) => {
        onError?.(event);
        setFallbackIndex((current) => {
          const next = current + 1;
          if (next >= FALLBACK_EXTS.length) {
            setFailed(true);
            return current;
          }
          return next;
        });
      }}
    />
  );
}
