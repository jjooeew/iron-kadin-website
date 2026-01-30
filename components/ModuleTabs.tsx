'use client'

import React, { useState } from 'react'

const tabs = [
    { label: 'FOUNDATION', id: 'foundation'},
    { label: 'PERFORMANCE', id: 'performance'},
    { label: 'BODY COMP', id: 'bodycomp' },
    { label: 'MOBILITY', id: 'mobility' },
    { label: 'RECOVERY', id: 'recovery' },
]

export default function ModuleTabs() {

        const [activeTab, setActiveTab ] = useState('foundation')

        const handleClick = ( id: string ) => {
            setActiveTab(id);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView( {behavior: 'smooth', block: 'center' })
            }
        };

  return (
    <div className='sticky top-24 z-40 max-w-4xl mx-auto px-4 py-8'>
        <div className='frosted rounded-full p-1 flex overflow-x-auto no-scrollbar shadow-2xl'>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => handleClick(tab.id)}
                    className={`flex-1 min-w-30 py-3 px-4 rounded-full text-[10px] md:text-xs font-bold tracking-widest transition-all duration-300 ${
                        activeTab === tab.id ? 'bg-acid-lime text-black shadow-glow' : 'text-white/40 hover:text-white/80'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    </div>
  )
}
