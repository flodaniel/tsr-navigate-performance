import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a151')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a151"!</div>
}
