import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a77')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a77"!</div>
}
