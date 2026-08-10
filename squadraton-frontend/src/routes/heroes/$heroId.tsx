import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/heroes/$heroId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/heroes/$heroId"!</div>
}
