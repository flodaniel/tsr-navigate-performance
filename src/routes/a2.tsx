import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a2')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a2"!</div>
}
