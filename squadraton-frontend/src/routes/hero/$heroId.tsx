import HeroList from '#/components/HeroList';
import { heroes } from '../../entities/hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hero/$heroId')({
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
        title: 'Hero Details',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: '/styles.css',
      },
    ],
  }),
  loader: async ({ params }) => {
    const heroId = Number(params.heroId);
    const hero = heroes.find(h => h.id === heroId);
    if (!hero) throw new Error('Герой не найден');
    return hero;
  },
  component: HeroDetailsComponent,
  errorComponent: ({ error }) => (
    <section>
      <h1>Ошибка</h1>
      <p>{error.message}</p>
    </section>
  ),
})

function HeroDetailsComponent() {
  const heroInfo = Route.useLoaderData();

  return (
    <main className="p-8">
    <section>
      <div>Hello "/hero/{heroInfo.id}"!</div>
      <h1>{heroInfo.name}</h1>
      <p>{heroInfo.description}</p>
      <p>Роль: {heroInfo.role}</p>
    </section>
    <h2 className="text-2xl font-bold mb-4">Все герои</h2>
    <section>
      <HeroList />
    </section>
    </main>
  );
}

