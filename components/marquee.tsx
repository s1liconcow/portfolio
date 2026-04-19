import { cn } from '@/lib/cn'

type MarqueeProps = {
  items: string[]
  className?: string
  separator?: string
  speed?: 'slow' | 'normal' | 'fast'
}

export function Marquee({
  items,
  className,
  separator = '✧',
  speed = 'normal',
}: MarqueeProps) {
  const duration = speed === 'slow' ? '70s' : speed === 'fast' ? '35s' : '50s'
  const content = (
    <div
      className="flex shrink-0 items-center gap-8 pr-8"
      style={{ animationDuration: duration }}
    >
      {items.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-8 font-display text-[clamp(2.2rem,6vw,5.5rem)] leading-none whitespace-nowrap"
        >
          <span className="italic">{item}</span>
          <span className="text-oxblood text-[0.5em] not-italic">
            {separator}
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div
      className={cn(
        'no-scrollbar overflow-hidden py-6 border-y border-ink-rule/60',
        className
      )}
    >
      <div className="flex animate-marquee" style={{ animationDuration: duration }}>
        {content}
        {content}
      </div>
    </div>
  )
}
