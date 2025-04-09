import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a90')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a90"!</div>
}
