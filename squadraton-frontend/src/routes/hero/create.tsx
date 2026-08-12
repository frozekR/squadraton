import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hero/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="p-8">
      <div>
        Hello "/hero/create"!
      </div>
    </section>
  );
}
