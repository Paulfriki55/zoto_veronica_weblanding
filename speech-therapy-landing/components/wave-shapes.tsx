import React from 'react';

export const WaveShape = {
  Top: () => (
    <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
      {/* Onda superior clara */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute top-2 left-0 w-full h-full fill-secondary opacity-50"
      >
        <path d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
      {/* Onda superior oscura */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full fill-accent opacity-70"
      >
        <path d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,96,576,90.7C672,85,768,96,864,112C960,128,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </div>
  ),

  Bottom: () => (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
      {/* Onda inferior clara */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-2 left-0 w-full h-full fill-secondary opacity-50"
      >
        <path d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,149.3C672,128,768,128,864,149.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
      {/* Onda inferior oscura */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-full fill-accent opacity-70"
      >
        <path d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,160C672,171,768,149,864,138.7C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>
    </div>
  ),

  Divider: () => (
    <div className="relative h-24 overflow-hidden">
      {/* Onda divider clara */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute top-2 left-0 w-full h-full fill-secondary opacity-50"
      >
        <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
      {/* Onda divider oscura */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full fill-accent opacity-70"
      >
        <path d="M0,192L48,213.3C96,235,192,277,288,261.3C384,245,480,181,576,186.7C672,192,768,224,864,229.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </div>
  ),

  Curve: () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className="absolute w-full h-full fill-secondary opacity-40"
      >
        <path
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          opacity=".3"
        />
        <path
          d="M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          opacity=".5"
        />
        <path
          d="M0,64L48,90.7C96,117,192,171,288,181.3C384,192,480,160,576,154.7C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  ),

  LeafPattern: () => (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy92MDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InBhdHRlcm4iIHg9IjAiIHk9IjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTMwIDEwIEMzMCAzNSAxMCAzMCAzNSAzMCBDNjAgMzAgNTUgMTAgNTUgMzUgQzU1IDYwIDM1IDU1IDM1IDU1IEMxMCA1NSA1IDM1IDUgNjAiIHN0cm9rZT0icmdiYSgyMDAsMjM1LDIyMCwwLjMpIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-15 mix-blend-overlay" />
    </div>
  ),

  WaveContainer: ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`relative ${className}`}>
      <div className="relative z-10 p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover-lift">
        {children}
      </div>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 500 500"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="waveClipPath">
            <path
              d="M 0, 100 C 0, 50, 50, 0, 100, 0 H 400 C 450, 0, 500, 50, 500, 100 V 400 C 500, 450, 450, 500, 400, 500 H 100 C 50, 500, 0, 450, 0, 400 V 100 Z"
              stroke="none"
              fill="none"
            />
             <path
                d="M0,108 Q50,80,100,108 L100,0 H0z M400,0 H500 L500,108 Q450,80,400,108z M0,400 L0,500 H100 Q50,420,100,400z M400,400 Q450,420,500,400 L500,500 H400z"
                fill="white"
             />
             <path
               d="M100,0 H400 V50 C400,70, 380,90, 350,90 H150 C120,90, 100,70, 100,50 V0 z  M100,500 H400 V450 C400,430, 380,410, 350,410 H150 C120,410, 100,430, 100,450 V500 z"
               fill="white"
             />
             <path
                d="M0,108 C50,136, 50,164, 0, 192  V108 z M500,108 C450,136, 450,164, 500, 192  V108 z M0,400 C50,372, 50,344, 0, 312  V400 z M500,400 C450,372, 450,344, 500, 312  V400 z"
                fill="#E5EDE9"
             />
             <path
               d="M0,192 C50,228, 50,272, 0, 308  V192 z M500,192 C450,228, 450,272, 500, 308  V192 z"
               fill="#C8EBDC"
             />
          </clipPath>
        </defs>
        <rect width="100%" height="100%" fill="white" clipPath="url(#waveClipPath)" />
      </svg>
    </div>
  ),
};