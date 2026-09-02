import { createFileRoute } from '@tanstack/react-router'
import HeroList from '#/components/CharacterList'

export const Route = createFileRoute('/character/')({
    head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Heroes',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: '/styles.css',
      },
    ],
  }),
  component: HeroListComponent,
})

function HeroListComponent() {
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
