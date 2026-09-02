import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/character/create')({
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
        title: 'Create Hero',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: '/styles.css',
      },
    ],
  }),
  component: HeroCreateComponent,
})

function HeroCreateComponent() {
  return (
    <section className="p-8">
      <div>
        Hello "/hero/create"!
      </div>
    </section>
  );
}
