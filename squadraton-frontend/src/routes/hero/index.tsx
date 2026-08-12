import { createFileRoute } from '@tanstack/react-router'
import HeroList from '#/components/HeroList'

export const Route = createFileRoute('/hero/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <section className="p-8">
    <div>
      Hello "/hero/"!
    </div>
    <HeroList/>

    <a href="/hero/create" className="block mt-4 text-blue-500">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="button">
        Создать героя
      </button>
    </a>
  </section>
)}
