import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a35')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a35"!</div>
}
