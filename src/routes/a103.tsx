import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a103')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a103"!</div>
}
