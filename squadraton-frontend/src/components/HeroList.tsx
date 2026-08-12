import { heroes } from '../entities/hero'
import HeroCard from './HeroCard'

export default function HeroList() {
  return (
    <div className="p-8">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
    </div>
  )
}