import { testimonials } from '../data/portfolio'
import { Heading, Reveal, Section } from '../components/ui'

export default function Testimonials() {
  return (
    <div className="bg-lime/40">
      <Section id="testimonials">
        <Heading title="Kind words" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={0.1 * i} className={i === 1 ? 'md:mt-10' : ''}>
              <figure className="h-full rounded-[2rem] bg-cream p-8">
                <blockquote className="font-display text-xl font-medium leading-snug">{t.quote}</blockquote>
                <figcaption className="mt-6 text-sm text-ink/65">
                  <span className="font-semibold text-ink">{t.name}</span><br />{t.role}
                  {t.placeholder && <span className="mt-3 block text-xs italic">Placeholder. Replace in portfolio.js.</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  )
}
