import React, { useState, useEffect } from 'react';
import { Home, Leaf, Heart, Sparkles, Palette, Star, Camera } from 'lucide-react';
import TabBar from './components/TabBar';
import HomeTab from './components/tabs/HomeTab';
import SlimmingTab from './components/tabs/SlimmingTab';
import StoryTab from './components/tabs/StoryTab';
import SkinTab from './components/tabs/SkinTab';
import MakeupTab from './components/tabs/MakeupTab';
import CollagenTab from './components/tabs/CollagenTab';
import LookbookTab from './components/tabs/LookbookTab';

const TABS = [
  { id: 'home',     label: '首頁', icon: Home     },
  { id: 'slimming', label: '體態', icon: Leaf     },
  { id: 'story',    label: '故事', icon: Heart    },
  { id: 'skin',     label: '美肌', icon: Sparkles },
  { id: 'makeup',   label: '彩妝課', icon: Palette },
  { id: 'collagen', label: '膠原', icon: Star     },
  { id: 'lookbook', label: '精選', icon: Camera   },
];

const STRUCTURED_DATA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Effortless Chic',
    url: 'https://han-sigma.vercel.app/',
    logo: 'https://han-sigma.vercel.app/images/LOGO.png',
    sameAs: [
      'https://heyyo520.tw/',
      'https://www.instagram.com/heyyo520.tw',
      'https://www.facebook.com/heyyo520.tw',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Han',
    brand: {
      '@type': 'Brand',
      name: 'Effortless Chic',
    },
    worksFor: {
      '@type': 'Organization',
      name: '莎朗嘿yo照相館',
      url: 'https://heyyo520.tw/',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Effortless Chic',
    url: 'https://han-sigma.vercel.app/',
    inLanguage: 'zh-Hant-TW',
  },
];

// go：切換分頁的函式，只給需要導流到彩妝課的分頁當 onNavigate prop
function renderTab(id, go) {
  switch (id) {
    case 'home':     return <HomeTab onNavigate={go} />;
    case 'slimming': return <SlimmingTab />;
    case 'story':    return <StoryTab />;
    case 'skin':     return <SkinTab onNavigate={go} />;
    case 'makeup':   return <MakeupTab />;
    case 'collagen': return <CollagenTab />;
    case 'lookbook': return <LookbookTab onNavigate={go} />;
    default:         return <HomeTab />;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // 切換分頁時自動回到頂部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-slate-800 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <div className="max-w-md mx-auto bg-white shadow-2xl shadow-slate-100/50 min-h-screen relative overflow-x-hidden">
        {renderTab(activeTab, setActiveTab)}
        <TabBar tabs={TABS} active={activeTab} onChange={setActiveTab} />
      </div>
    </div>
  );
}
