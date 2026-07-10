import { GlowCard } from "@/components/ui/spotlight-card";

export function Default() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 custom-cursor">
      <GlowCard glowColor="blue" className="border border-white/10 bg-zinc-900 p-4">
        <div className="text-white">Blue glow</div>
      </GlowCard>
      <GlowCard glowColor="purple" className="border border-white/10 bg-zinc-900 p-4">
        <div className="text-white">Purple glow</div>
      </GlowCard>
      <GlowCard glowColor="green" className="border border-white/10 bg-zinc-900 p-4">
        <div className="text-white">Green glow</div>
      </GlowCard>
    </div>
  );
}
