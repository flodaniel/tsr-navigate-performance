import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a96')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a96"!</div>
}
