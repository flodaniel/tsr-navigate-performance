import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a55')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a55"!</div>
}
