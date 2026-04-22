// Background component with multiple style options

const BackgroundStyles = {
  // Style 1: Geometric Patterns
  geometric: (
    <div className="absolute inset-0">
      {/* Animated Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply animate-float shape-rotate"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg rotate-45 mix-blend-multiply animate-float-delayed"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full mix-blend-multiply animate-float-slow"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-bg"></div>
      </div>
      
      {/* Light Beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent light-beam"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent light-beam"></div>
    </div>
  ),

  // Style 2: Tech Code Theme
  techCode: (
    <div className="absolute inset-0">
      {/* Floating Code Elements */}
      <div className="absolute top-1/4 left-1/6 text-6xl text-blue-400/15 font-mono code-float">&lt;/&gt;</div>
      <div className="absolute top-3/4 right-1/6 text-5xl text-purple-400/15 font-mono code-float">{'{}'}</div>
      <div className="absolute bottom-1/3 left-1/2 text-4xl text-cyan-400/15 font-mono code-float">( )</div>
      <div className="absolute top-1/2 right-1/4 text-3xl text-emerald-400/15 font-mono code-float">[ ]</div>
      
      {/* Binary Rain Effect */}
      <div className="absolute top-0 left-1/5 text-xs text-blue-300/10 font-mono leading-none animate-pulse">
        01001000<br/>01100101<br/>01101100<br/>01101100<br/>01101111
      </div>
      <div className="absolute top-0 right-1/5 text-xs text-purple-300/10 font-mono leading-none animate-pulse delay-1000">
        01010111<br/>01101111<br/>01110010<br/>01101100<br/>01100100
      </div>
      
      {/* Circuit Lines */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
      <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"></div>
    </div>
  ),

  // Style 3: Abstract Art
  abstractArt: (
    <div className="absolute inset-0">
      {/* Abstract Shapes */}
      <div className="absolute top-20 left-16 w-48 h-48 bg-gradient-to-br from-blue-500/15 to-transparent rounded-full blur-xl mesh-animate"></div>
      <div className="absolute bottom-20 right-16 w-64 h-64 bg-gradient-to-br from-purple-500/15 to-transparent rounded-full blur-2xl mesh-animate"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl gradient-pulse"></div>
      
      {/* Curved Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <path d="M0,100 Q150,50 300,100 T600,100" stroke="url(#gradient1)" strokeWidth="2" fill="none">
          <animateTransform attributeName="transform" type="translate" values="0,0;50,0;0,0" dur="10s" repeatCount="indefinite"/>
        </path>
        <path d="M0,200 Q200,150 400,200 T800,200" stroke="url(#gradient2)" strokeWidth="2" fill="none">
          <animateTransform attributeName="transform" type="translate" values="0,0;-30,0;0,0" dur="15s" repeatCount="indefinite"/>
        </path>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  ),

  // Style 4: Minimal Dots
  minimalDots: (
    <div className="absolute inset-0">
      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle Gradients */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
    </div>
  ),

  // Style 5: Hexagon Tech
  hexagonTech: (
    <div className="absolute inset-0">
      {/* Hexagon Shapes */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-400/10 transform rotate-30" 
           style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
      </div>
      <div className="absolute top-3/4 right-1/4 w-20 h-20 bg-purple-400/10 transform rotate-45" 
           style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
      </div>
      <div className="absolute top-1/2 left-3/4 w-12 h-12 bg-cyan-400/10 transform rotate-60" 
           style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
      </div>
      
      {/* Tech Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.3) 25%, rgba(59, 130, 246, 0.3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.3) 75%, rgba(59, 130, 246, 0.3) 76%, transparent 77%, transparent),
                 linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, 0.3) 25%, rgba(139, 92, 246, 0.3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.3) 75%, rgba(139, 92, 246, 0.3) 76%, transparent 77%, transparent)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
    </div>
  )
};

export default BackgroundStyles;