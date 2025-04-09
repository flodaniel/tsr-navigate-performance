import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a27')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a27"!</div>
}
