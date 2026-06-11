export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[160px]" />

      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[140px]" />
    </div>
  );
}