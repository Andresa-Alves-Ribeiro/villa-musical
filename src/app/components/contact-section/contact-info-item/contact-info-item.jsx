'use client';

/**
 * Item de informação de contato com ícone.
 * Design: card glass, acentos âmbar, hover sutil.
 */
export default function ContactInfoItem({ icon: Icon, label, children }) {
  return (
    <div className="group relative p-5 rounded-xl border border-white/[0.05] bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm hover:border-amber-800/30 hover:bg-amber-950/10 transition-all duration-300">
      <div className="absolute top-0 left-5 w-8 h-px bg-gradient-to-r from-amber-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-amber-900/30 border border-amber-800/20 group-hover:border-amber-600/40 group-hover:bg-amber-900/50 transition-colors duration-300">
            <Icon className="text-amber-400/90" size={22} weight="duotone" />
          </div>
          <h3 className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-amber-200/80">
            {label}
          </h3>
        </div>
        <div className="text-zinc-300 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
