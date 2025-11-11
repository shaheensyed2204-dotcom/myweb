'use client';

import TextPressure from '../components/TextPressure';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071024] via-[#00121a] to-[#052b3a] animate-gradient-shift" 
             style={{
               backgroundSize: '600% 600%',
               animation: 'bgShift 18s ease infinite'
             }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] w-[140vmax] h-[140vmax] pointer-events-none z-0 opacity-90"
             style={{
               background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 30%)',
               mixBlendMode: 'overlay',
               animation: 'spotFloat 8s ease-in-out infinite'
             }} />
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-90"
             style={{
               backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><rect width="20" height="20" fill="none"/><circle cx="2" cy="2" r="0.6" fill="%23ffffff" opacity="0.02"/></svg>')`,
               mixBlendMode: 'soft-light'
             }} />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="w-full max-w-6xl h-[360px] flex items-center justify-center">
          <TextPressure
            text="SUMAYYA"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
      </main>

      <style jsx>{`
        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes spotFloat {
          0% { transform: translate(-52%, -60%) scale(1); }
          50% { transform: translate(-48%, -62%) scale(1.02); }
          100% { transform: translate(-52%, -60%) scale(1); }
        }
      `}</style>
    </div>
  );
}
