import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface JobTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function JobTabs({ tabs, activeTab, onTabChange }: JobTabsProps) {
  return (
    <div className="flex justify-center gap-4 mb-12 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 cursor-pointer ${
            activeTab === tab.id
              ? 'bg-linear-to-r from-orange-300 to-orange-200 text-gray-800 shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-linear-to-r hover:from-orange-300 hover:to-orange-200 hover:text-gray-800'
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
