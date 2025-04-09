import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a37')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a37"!</div>
}
