import React, { useState, useEffect } from 'react';
import { Home, Leaf, Heart, Sparkles, Star, Camera } from 'lucide-react';
import TabBar from './components/TabBar';
import HomeTab from './components/tabs/HomeTab';
import SlimmingTab from './components/tabs/SlimmingTab';
import StoryTab from './components/tabs/StoryTab';
import SkinTab from './components/tabs/SkinTab';
import CollagenTab from './components/tabs/CollagenTab';
import LookbookTab from './components/tabs/LookbookTab';

const TABS = [
  { id: 'home',     label: '首頁', icon: Home     },
  { id: 'slimming', label: '瘦身', icon: Leaf     },
  { id: 'story',    label: '故事', icon: Heart    },
  { id: 'skin',     label: '美肌', icon: Sparkles },
  { id: 'collagen', label: '膠原', icon: Star     },
  { id: 'lookbook', label: '精選', icon: Camera   },
];

function renderTab(id) {
  switch (id) {
    case 'home':     return <HomeTab />;
    case 'slimming': return <SlimmingTab />;
    case 'story':    return <StoryTab />;
    case 'skin':     return <SkinTab />;
    case 'collagen': return <CollagenTab />;
    case 'lookbook': return <LookbookTab />;
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
      <div className="max-w-md mx-auto bg-white shadow-2xl shadow-slate-100/50 min-h-screen relative overflow-x-hidden">
        {renderTab(activeTab)}
        <TabBar tabs={TABS} active={activeTab} onChange={setActiveTab} />
      </div>
    </div>
  );
}
