"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFE600] text-black selection:bg-black selection:text-[#FFE600] font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Syne:wght@800&family=JetBrains+Mono:wght@800&display=swap');
        * { border-radius: 0 !important; }
      `}</style>

      {/* HASH PATTERN BG */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.07]" style={{
        backgroundImage: `repeating-linear-gradient( -45deg, #000 0 2px, transparent 2px 12px)`,
      }} />

      {/* TOP MARQUEE */}
      <div className="relative z-20 bg-black text-[#FFE600] border-y-[4px] border-black overflow-hidden py-2">
        <div className="flex animate-[marquee_12s_linear_infinite] whitespace-nowrap text-sm font-black tracking-[0.2em] uppercase gap-8">
          <span>Water&apos;s Falling — Site Under Maintenance — RoboGyaan — Water&apos;s Falling — Site Under Maintenance — RoboGyaan —</span>
          <span>Water&apos;s Falling — Site Under Maintenance — RoboGyaan — Water&apos;s Falling — Site Under Maintenance — RoboGyaan —</span>
          <span>Water&apos;s Falling — Site Under Maintenance — RoboGyaan — Water&apos;s Falling — Site Under Maintenance — RoboGyaan —</span>
        </div>
      </div>

      {/* HEADER - BRUTALIST */}
      <header className="relative z-20 max-w-[1400px] mx-auto px-3 sm:px-6 mt-3 sm:mt-4">
        <div className="bg-white border-[4px] border-black flex items-center justify-between px-3 sm:px-6 py-3 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 sm:h-12 sm:w-12 bg-black border-[3px] border-black grid place-items-center text-white font-black text-xl sm:text-2xl leading-none">
              R
            </div>
            <div className="leading-none">
              <div className="font-black text-xl sm:text-[26px] tracking-tighter uppercase flex items-baseline gap-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                Robo<span className="bg-[#FFE600] border-[2px] border-black px-1">Gyaan</span>
              </div>
              <div className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase opacity-70">रोबो ज्ञान • EST. 2026</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span className="bg-[#FF3B30] text-white border-[3px] border-black px-3 py-1 font-black text-xs tracking-widest uppercase shadow-[4px_4px_0px_0px_#000]">● LIVE SOON</span>
            <span className="bg-black text-white px-4 py-2 font-mono text-xs font-bold tracking-widest">SYSTEM // PAUSED</span>
          </div>
          <div className="md:hidden bg-black text-[#FFE600] px-3 py-1 font-black text-[11px] tracking-widest border-[3px] border-black">PAUSED</div>
        </div>
      </header>

      {/* MAIN */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-3 sm:px-6 pb-10 mt-4 sm:mt-6">
        {/* HERO TITLE BLOCK */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          {/* LEFT BIG MESSAGE */}
          <div className="col-span-12 lg:col-span-7 bg-white border-[4px] border-black shadow-[8px_8px_0px_0px_#000] p-4 sm:p-6 md:p-8 relative overflow-hidden">
            {/* hash corner */}
            <div className="absolute top-0 right-0 w-24 h-24 opacity-10" style={{ backgroundImage: `repeating-linear-gradient(45deg, #000 0 2px, transparent 2px 8px)` }} />
            
            <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 font-mono text-[11px] font-black tracking-[0.2em] uppercase mb-4 border-[2px] border-black">
              <span className="h-2 w-2 bg-[#FFE600] animate-pulse" /> NOTICE BOARD — STOP HERE
            </div>

            <h1 className="font-black leading-[0.85] tracking-tighter uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
              <span className="block text-[34px] sm:text-[48px] md:text-[62px]">WATER&apos;S</span>
              <span className="block text-[34px] sm:text-[48px] md:text-[62px] bg-[#22D3EE] border-[4px] border-black px-2 inline-block shadow-[6px_6px_0px_0px_#000] my-1 -rotate-[1deg]">FALLING</span>
              <span className="block text-[28px] sm:text-[38px] md:text-[46px] mt-2">LIKE THIS SITE IS</span>
              <span className="block text-[36px] sm:text-[52px] md:text-[66px] bg-[#FFE600] border-[4px] border-black px-2 inline-block shadow-[6px_6px_0px_0px_#000] rotate-[0.5deg]">UNDER</span>
              <span className="block text-[36px] sm:text-[52px] md:text-[66px]">MAINTENANCE!!!</span>
            </h1>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-end">
              <p className="font-mono text-xs sm:text-sm font-bold leading-relaxed border-l-[4px] border-black pl-3 bg-[#FFE600]/30 py-2">
                We&apos;re rebuilding RoboGyaan — harder, funkier, sharper. 
                <br className="hidden sm:block" /> New labs, new bots, new chaos. Stay tuned.
              </p>
              <div className="bg-black text-white px-4 py-3 font-black text-center border-[3px] border-black shadow-[4px_4px_0px_0px_#000]">
                <div className="text-[11px] tracking-[0.2em] opacity-60">ETA</div>
                <div className="text-lg leading-none">VERY SOON</div>
              </div>
            </div>

            {/* bottom hash strip */}
            <div className="mt-6 h-4 border-[3px] border-black bg-white relative overflow-hidden">
              <div className="absolute inset-0" style={{ backgroundImage: `repeating-linear-gradient(90deg, #000 0 3px, transparent 3px 10px)` }} />
            </div>
          </div>

          {/* RIGHT - WATERFALL SCENE */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-[#A78BFA] border-[4px] border-black shadow-[8px_8px_0px_0px_#000] p-3 sm:p-4 h-full flex flex-col">
              <div className="flex items-center justify-between bg-black text-white px-3 py-2 font-mono text-[11px] font-black tracking-widest uppercase border-[3px] border-black">
                <span>▓ WATERFALL VIEW — 01</span>
                <span className="bg-[#FFE600] text-black px-2 py-0.5">LIVE FEED</span>
              </div>

              {/* WATERFALL CONTAINER */}
              <div className="relative mt-3 border-[4px] border-black bg-[#22D3EE] overflow-hidden flex-1 min-h-[420px] sm:min-h-[480px] flex flex-col">
                {/* hash sides - absolute */}
                <div className="absolute inset-0 grid grid-cols-[18%_1fr_18%] pointer-events-none">
                  <div className="bg-[#FFE600] border-r-[4px] border-black relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `repeating-linear-gradient(-45deg, #000 0 2px, transparent 2px 9px)` }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-around py-6 font-black text-[10px] tracking-widest opacity-30" style={{ writingMode: 'vertical-rl' }}>
                      <span>##### ///// #####</span>
                      <span>##### ///// #####</span>
                      <span>##### ///// #####</span>
                    </div>
                  </div>
                  <div className="relative" />
                  <div className="bg-[#FFE600] border-l-[4px] border-black relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `repeating-linear-gradient(45deg, #000 0 2px, transparent 2px 9px)` }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-around py-6 font-black text-[10px] tracking-widest opacity-30" style={{ writingMode: 'vertical-rl' }}>
                      <span>##### ///// #####</span>
                      <span>##### ///// #####</span>
                      <span>##### ///// #####</span>
                    </div>
                  </div>
                </div>

                {/* Cliff top */}
                <div className="relative z-10 h-[70px] bg-[#8B5CF6] border-b-[4px] border-black flex items-end justify-center overflow-hidden">
                  <div className="absolute inset-0" style={{ backgroundImage: `repeating-linear-gradient(90deg, #000 0 2px, transparent 2px 18px)` , opacity: 0.12 }} />
                  {/* rocks */}
                  <div className="absolute bottom-0 left-[22%] right-[22%] h-[34px] bg-black border-t-[4px] border-x-[4px] border-black flex">
                    <div className="flex-1 bg-[#1a1a1a] border-r-[3px] border-black" />
                    <div className="flex-1 bg-[#2a2a2a] border-r-[3px] border-black" />
                    <div className="flex-1 bg-[#1a1a1a]" />
                  </div>
                  {/* grass top */}
                  <div className="absolute top-0 left-[18%] right-[18%] h-3 bg-[#22C55E] border-b-[3px] border-black flex gap-[6px] px-2">
                    <div className="flex-1 bg-[#16A34A] h-full border-r-[2px] border-black/20" />
                    <div className="flex-1 bg-[#22C55E] h-full" />
                    <div className="flex-1 bg-[#16A34A] h-full border-l-[2px] border-black/20" />
                  </div>
                  <span className="relative z-20 mb-8 bg-white border-[3px] border-black px-2 py-0.5 font-black text-[9px] tracking-widest">CLIFF EDGE — DO NOT CROSS</span>
                </div>

                {/* Falling Water */}
                <div className="relative z-10 flex-1 mx-[18%] bg-white overflow-hidden border-x-[4px] border-black flex">
                  {/* water columns */}
                  <div className="flex-1 relative overflow-hidden bg-[#BAE6FD]">
                    <div className="absolute inset-0 water-anim opacity-90" style={{
                      backgroundImage: `repeating-linear-gradient(180deg, transparent 0 10px, rgba(255,255,255,0.9) 10px 14px, #22D3EE 14px 22px, #0EA5E9 22px 26px)`,
                    }} />
                    {/* shimmer */}
                    <div className="absolute inset-0 water-anim2 opacity-40" style={{
                      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 8px, rgba(255,255,255,0.6) 8px 12px)`,
                    }} />
                    {/* vertical streaks */}
                    <div className="absolute inset-0 flex">
                      <div className="flex-1 border-r border-white/60" />
                      <div className="flex-1 border-r border-white/40" />
                      <div className="flex-1 border-r border-white/60" />
                      <div className="flex-1" />
                    </div>
                  </div>
                  <div className="flex-1 relative overflow-hidden bg-[#7DD3FC] border-l-[3px] border-black/10">
                    <div className="absolute inset-0 water-anim opacity-90" style={{
                      backgroundImage: `repeating-linear-gradient(180deg, transparent 0 12px, rgba(255,255,255,0.85) 12px 16px, #38BDF8 16px 24px, #0284C7 24px 28px)`,
                      animationDelay: '0.2s'
                    }} />
                  </div>
                  <div className="flex-1 relative overflow-hidden bg-[#BAE6FD] border-l-[3px] border-black/10">
                    <div className="absolute inset-0 water-anim opacity-90" style={{
                      backgroundImage: `repeating-linear-gradient(180deg, transparent 0 9px, rgba(255,255,255,0.9) 9px 13px, #22D3EE 13px 21px, #0EA5E9 21px 25px)`,
                      animationDelay: '0.4s'
                    }} />
                  </div>
                </div>

                {/* Splash pool */}
                <div className="relative z-10 h-[70px] bg-[#0EA5E9] border-t-[4px] border-black mx-[18%] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 30% 50%, white 2px, transparent 2px), radial-gradient(circle at 70% 30%, white 1.5px, transparent 1.5px)` , backgroundSize: '18px 18px' }} />
                  <div className="absolute bottom-0 left-0 right-0 h-3 bg-white/60 blur-[2px]" />
                  <span className="relative bg-white border-[3px] border-black px-2 py-1 font-black text-[10px] tracking-widest">SPLASH ZONE ≈≈≈</span>
                </div>

                {/* NOTICE BOARD - IN FRONT OF WATERFALL */}
                <div className="absolute z-20 left-1/2 -translate-x-1/2 bottom-[22%] w-[78%] max-w-[320px]">
                  {/* posts */}
                  <div className="absolute -bottom-6 left-[18%] w-[14px] h-10 bg-[#92400E] border-[3px] border-black" />
                  <div className="absolute -bottom-6 right-[18%] w-[14px] h-10 bg-[#92400E] border-[3px] border-black" />
                  {/* board */}
                  <div className="relative bg-[#FFE600] border-[4px] border-black shadow-[6px_6px_0px_0px_#000] p-3 text-center rotate-[-0.8deg]">
                    {/* bolts */}
                    <div className="absolute top-2 left-2 h-2 w-2 bg-black rounded-full border border-white" />
                    <div className="absolute top-2 right-2 h-2 w-2 bg-black rounded-full border border-white" />
                    <div className="absolute bottom-2 left-2 h-2 w-2 bg-black rounded-full border border-white" />
                    <div className="absolute bottom-2 right-2 h-2 w-2 bg-black rounded-full border border-white" />

                    <div className="bg-[#FF3B30] text-white border-[3px] border-black inline-flex items-center gap-2 px-3 py-1 font-black tracking-[0.15em] text-sm sm:text-base">
                      <span className="h-5 w-5 bg-white text-[#FF3B30] grid place-items-center text-xs border-2 border-black">✋</span>
                      STOP HERE
                    </div>
                    <div className="mt-2 font-black text-[11px] tracking-[0.2em] uppercase bg-black text-[#FFE600] inline-block px-2 py-1">
                      Waterfall Ahead — Danger!
                    </div>
                    <div className="mt-1 font-mono text-[10px] font-bold tracking-wide">
                      SITE UNDER MAINTENANCE
                    </div>
                    {/* tape */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-black text-[#FFE600] text-[8px] font-black tracking-[0.3em] px-3 py-0.5 border border-white rotate-[1deg]">ROBOGYAAN ★ ROBOGYAAN</div>
                  </div>
                </div>

                {/* side warning tags */}
                <div className="absolute z-10 top-[46%] -left-1 bg-[#FF3B30] text-white border-[3px] border-black px-2 py-1 font-black text-[10px] tracking-widest rotate-[-90deg] origin-center hidden sm:block">CAUTION</div>
                <div className="absolute z-10 top-[46%] -right-1 bg-[#FF3B30] text-white border-[3px] border-black px-2 py-1 font-black text-[10px] tracking-widest rotate-[90deg] origin-center hidden sm:block">CAUTION</div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="bg-white border-[3px] border-black p-2 text-center">
                  <div className="font-black text-lg leading-none">99%</div>
                  <div className="font-mono text-[9px] font-bold tracking-widest uppercase">Falling</div>
                </div>
                <div className="bg-black text-white border-[3px] border-black p-2 text-center">
                  <div className="font-black text-lg leading-none">01</div>
                  <div className="font-mono text-[9px] font-bold tracking-widest uppercase opacity-70">Board Active</div>
                </div>
                <div className="bg-[#FFE600] border-[3px] border-black p-2 text-center">
                  <div className="font-black text-lg leading-none">∞</div>
                  <div className="font-mono text-[9px] font-bold tracking-widest uppercase">Splashes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP - FUNKY */}
        <div className="mt-4 grid grid-cols-12 gap-3 sm:gap-4">
          <div className="col-span-12 md:col-span-8 bg-black text-white border-[4px] border-black p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[6px_6px_0px_0px_#000]">
            <div>
              <div className="font-black text-lg sm:text-xl tracking-tighter uppercase flex items-center gap-2">
                <span className="bg-[#FFE600] text-black px-2 border-2 border-white">BE RIGHT BACK</span>
                <span className="hidden sm:inline">— WE&apos;RE POLISHING THE ROBOTS</span>
              </div>
              <div className="font-mono text-xs opacity-70 mt-1">robogyaan.in is getting a full brutalist makeover. Funk in progress.</div>
            </div>
            <div className="flex gap-2 shrink-0">
              <a href="mailto:hello@robogyaan.in" className="bg-white text-black border-[3px] border-white px-4 py-2 font-black text-xs tracking-widest uppercase hover:bg-[#FFE600] transition-colors">EMAIL US</a>
              <a href="#" className="bg-[#A78BFA] text-black border-[3px] border-white px-4 py-2 font-black text-xs tracking-widest uppercase hover:bg-[#22D3EE] transition-colors">INSTAGRAM</a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-[#FF3B30] border-[4px] border-black p-4 shadow-[6px_6px_0px_0px_#000] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `repeating-linear-gradient(45deg, #fff 0 2px, transparent 2px 10px)` }} />
            <div className="relative">
              <div className="font-black text-white text-sm tracking-widest uppercase">HASHED & BRUTAL</div>
              <div className="font-mono text-xs font-bold text-white/90 mt-1">No rounded corners. No soft edges. Just pure concrete, hashes & waterfall energy. Built for RoboGyaan.</div>
              <div className="mt-3 flex gap-1">
                <div className="h-2 flex-1 bg-black border border-white" />
                <div className="h-2 flex-1 bg-white border border-black" />
                <div className="h-2 flex-1 bg-[#FFE600] border border-black" />
              </div>
            </div>
          </div>
        </div>

        {/* footer brutal */}
        <div className="mt-4 bg-white border-[4px] border-black shadow-[6px_6px_0px_0px_#000] px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] font-bold tracking-widest uppercase">
          <span>© 2026 ROBOGYAAN — ROBOTICS & STEM FOR BHARAT</span>
          <span className="bg-black text-[#FFE600] px-2 py-1">MAINTENANCE MODE // WATERFALL PROTOCOL ACTIVE</span>
        </div>
      </main>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes waterFall {
          0% { transform: translateY(-28px); }
          100% { transform: translateY(28px); }
        }
        .water-anim {
          animation: waterFall 0.45s linear infinite;
        }
        .water-anim2 {
          animation: waterFall 0.7s linear infinite;
        }
      `}</style>
    </div>
  );
}
