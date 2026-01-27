import React from 'react'
const StatBlock = ({ number, label, desc, color }) => (
  <div className={`p-10 ${color === 'red' ? 'bg-[#9E0203]' : 'bg-[#003366]'} text-white relative overflow-hidden group`}>
    <div className="absolute -bottom-4 -right-4 text-9xl font-black opacity-10 transform group-hover:scale-110 transition-transform">{number}</div>
    <div className="relative z-10 space-y-4">
      <div className="text-5xl md:text-7xl font-black font-jakarta tracking-tighter uppercase">{number}</div>
      <div className="space-y-1">
        <h4 className="text-xl font-black uppercase tracking-widest">{label}</h4>
        <p className="text-white/60 text-sm font-medium uppercase tracking-tight">{desc}</p>
      </div>
    </div>
  </div>
);
function Incubated_startups_rendering() {
    return (
        <div>
            <section className="relative bg-black py-24 md:py-32 overflow-hidden border-b-[12px] border-[#9E0203]">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9E0203]/5 skew-x-[-20deg] transform translate-x-1/3 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                        <div className="w-full md:w-5/12 space-y-8 text-left">
                            <div className="flex items-center space-x-4">
                                <div className="h-1 bg-[#9E0203] w-12"></div>
                                <span className="text-white/60 font-black uppercase tracking-[0.5em] text-[10px]">Ecosystem Portfolio</span>
                            </div>
                            <h1 className="text-white text-6xl md:text-8xl font-black font-jakarta uppercase tracking-tighter leading-[0.85]">
                                INCUBATED <br />
                                <span className="text-[#9E0203]">VENTURES</span>
                            </h1>
                            <div className="space-y-4">
                                <div className="h-1 w-32 bg-white"></div>
                                <p className="text-gray-400 text-xl font-bold uppercase tracking-tight leading-snug max-w-md">
                                    Meet the architects of tomorrow, building high-impact solutions in our innovation labs.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-7/12 relative">
                            <div className="absolute -inset-4 border-2 border-white/5 rounded-3xl translate-x-4 translate-y-4"></div>
                            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                                <img
                                    src="/assets/incubated_hero.png"
                                    alt="Boardroom"
                                    className="w-full h-full object-cover aspect-[16/9]"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-[#9E0203] p-8 shadow-2xl border-4 border-black">
                                <div className="text-white font-black text-4xl uppercase tracking-tighter leading-none">BUILDING<br />LEGACIES</div>
                                <div className="text-white/70 text-[10px] uppercase font-bold tracking-widest mt-2">Scale-Ready Portfolio</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PORTFOLIO INSIGHTS - Signature Blocks */}
            <section className="grid grid-cols-1 md:grid-cols-3">
                <StatBlock number="60+" label="Ventures" desc="Active Incubated Startups" color="red" />
                <StatBlock number="500+" label="Jobs" desc="Employment Opportunities Created" color="navy" />
                <StatBlock number="20Cr+" label="Funding" desc="Total Ecosystem Capital Raised" color="red" />
            </section>

        </div>
    )
}

export default Incubated_startups_rendering