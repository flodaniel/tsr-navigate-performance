import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a178')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a178"!</div>
}
