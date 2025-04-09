import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a155')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a155"!</div>
}
