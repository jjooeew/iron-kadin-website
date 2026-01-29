'use client'

import { CheckCircle2 } from 'lucide-react';
import React from 'react'
import { Bar, BarChart, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis } from 'recharts';


interface ModuleCardProps {
  id: string,
  number: string,
  title: string,
  description: string,
  bullets: string[];
  type: 'bars' | 'chart' | 'ring' | 'sliders' | 'recovery';
}

export default function ModuleCards({ id, number, title, description, bullets, type }: ModuleCardProps) {
  
  const renderVisual = () => {
    switch (type) {
      case 'bars':
        const barData = [
          { name: 'STR', val: 85 },
          { name: 'END', val: 72 },
          { name: 'POW', val: 91},
          { name: 'STA', val: 65}
        ];
        return (
          <div className='h-64 w-full'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
              <BarChart data={barData}>
                <Bar dataKey="val" fill="#C6FF00" radius={[4, 4, 0, 0]} />
                <XAxis dataKey={'name'} stroke='#555' fontSize={12} axisLine={false} tickLine={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      case 'chart':
        const lineData = [
          { time: 'W1', v: 40 },
          { time: 'W2', v: 45 },
          { time: 'W3', v: 48 },
          { time: 'W4', v: 54 },
          { time: 'W5', v: 52 },
          { time: 'W6', v: 58 },
        ]
        return (
          <div className='h-64 w-full'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
              <LineChart data={lineData}>
                <Line type={"monotone"} dataKey={'v'} stroke='#C6FF00' strokeWidth={3} dot={{ r: 4, fill: '#C6FF00' }} />
                <XAxis dataKey={'time'} stroke='#555' fontSize={12} axisLine={false} tickLine={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )
        case 'ring':
          const ringData = [{  name: 'Compliant', value: 88 }, { name: 'Off', value: 12 }]
          return (
            <div className="h-64 w-full flex items-center justify-center relative">
              <div className='absolute text-center'>
                <div className='text-4xl font-display font-bold text-acid-lime'>88%</div>
                <div className='text-[10px] text-white/50 tracking-widest uppercase'>Compliance</div>
              </div>
              <ResponsiveContainer width={'100%'} height={'100%'}>
                <PieChart>
                  <Pie
                  data={ringData} 
                  innerRadius={60} 
                  outerRadius={80} 
                  paddingAngle={5} 
                  dataKey="value"
                  >
                    <Cell fill='#C6FF00' />
                    <Cell fill='rgba(255,255,255,0.05)' />
                  </Pie>                    
                </PieChart>
              </ResponsiveContainer>
            </div>
          );
        case 'sliders':
          return (
            <div className='space-y-6'>
              {['Ankle Dorsiflexion', 'Hip Internal Rotation', 'Shoulder Flexion'].map((item, i) => (
                <div key={item} className='space-y-2'>
                  <div className='flex justify-between text-[10px] font-bold text-white/70 uppercase'>
                    <span>{item}</span>
                    <span className='text-acid-lime'>{(85 - i * 5)}%</span>
                  </div>
                  <div className='w-full h-1 bg-white/5 rounded-full'>
                    <div className='h-full bg-acid-lime shadow-[0_0_20px_rgba(34,197,94,0.4)]' style={{ width: `${85 - i * 5}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )
        case 'recovery':
          return (
            <div className='grid grid-cols-2 gap-4'>
              {[
                { l: 'HRV', v: '92ms', s: 'OPTIMAL'},
                { l: 'SLEEP', v: '8h 12m', s: 'DEEP' },
                { l: 'CNS', v: '98%', s: 'READY' },
                { l: 'CORTISOL', v: 'LOW', s: 'STABLE' },
              ].map((stat) => (
                <div key={stat.l} className='p-4 border border-white/5 bg-white/5 rounded-xl'>
                  <div className="text-[9px] text-white/40 mb-1">{stat.l}</div>
                  <div className="text-xl font-bold">{stat.v}</div>
                  <div className="text-[8px] text-acid-lime font-bold mt-1 tracking-widest">{stat.s}</div>               
                </div>
              ))}
            </div>
          );
        default:
          return null;
    }
  };
  
  return (
    <section id={id} className='relative group'>
      <div className='frosted rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-12 group-hover:border-acid-lime/20 transition-colors duration-500 shadow-2xl'>
        {/* Left Column */}
        <div className='flex-1 space-y-6'>
          <div className='inline-block py-1 px-3 bg-acid-lime/10 border border-acid-lime/20 rounded text-acid-lime font-mono text-xs font-bold'>
            MOD {number}
          </div>
          <h2 className='text-3xl md:text-5xl font-display font-bold tracking-tight'>
            {title}
          </h2>
          <p className='text-white/60 text-lg leading-relaxed'>
            {description}
          </p>
          <ul className='space-y-3'>
            {bullets.map((bullet) => (
              <li key={bullet} className='flex items-center gap-3 text-sm text-white/80'>
                <CheckCircle2 size={16} className='text-acid-lime' />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column (Data visualisations) */}
        <div className='lg:w-1/3 bg-graphite-900/50 rounded-2xl p-8 border border-white/5 shadow-inner flex items-center justify-center'>
            {renderVisual()}
        </div>
      </div>
    </section>
  )
}
