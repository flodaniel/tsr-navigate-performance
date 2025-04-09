import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a135')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a135"!</div>
}
