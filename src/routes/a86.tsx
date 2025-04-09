import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a86')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a86"!</div>
}
