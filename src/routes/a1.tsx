import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a1')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a1"!</div>
}
