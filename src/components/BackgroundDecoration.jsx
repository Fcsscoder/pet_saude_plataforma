export default function BackgroundDecoration() {
  return (
    <div className="hidden sm:block">
      {/* Animated gradient orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#3490dc]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#155dfc]/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#e8501e]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '12s', animationDelay: '4s' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(52, 144, 220, 0.05) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(52, 144, 220, 0.05) 1px, transparent 1px)
               `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Subtle geometric shapes */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[#3490dc]/20 rounded-2xl rotate-12" />
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-[#155dfc]/20 rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-[#e8501e]/20 rounded-xl -rotate-45" />
      </div>
    </div>
  );
}
