/**
 * Cabeçalho reutilizável para seções.
 * Segue o padrão visual institucional: badge + título + descrição opcional.
 * @param {Object} props
 * @param {'center' | 'left'} props.align - Alinhamento do conteúdo (default: center)
 */
export default function SectionHeader({ badge, title, description, align = 'center', className = '' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  const titleMarginClass = align === 'left' ? 'mb-8' : 'mb-3';

  return (
    <div className={`${alignClass} mb-14 ${className}`}>
      <p className="badge-institucional mb-4">{badge}</p>
      <h2
        className={`text-2xl md:text-3xl font-semibold text-white ${titleMarginClass} tracking-tight`}
        style={{ fontFamily: '"Cinzel", serif' }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto">{description}</p>
      )}
    </div>
  );
}
