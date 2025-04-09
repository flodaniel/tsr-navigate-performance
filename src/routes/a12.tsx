import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a12')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a12"!</div>
}
