import { tools } from '../data/portfolio'
import { Heading, Reveal, Section } from '../components/ui'

const bg = ['bg-coral/20', 'bg-blue/15', 'bg-lime/50']
export default function Tools() {
  return (
    <Section id="tools" className="!pt-0">
      <Heading title="Tools and platforms" />
      <div className="grid gap-5 md:grid-cols-3">
        {Object.entries(tools).map(([group, items], i) => (
          <Reveal key={group} delay={0.1 * i} className="rounded-[2rem] bg-white/70 p-6">
            <h3 className="mb-4 text-lg font-semibold">{group}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((t) => <li key={t} className={`rounded-full px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 ${bg[i]}`}>{t}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
