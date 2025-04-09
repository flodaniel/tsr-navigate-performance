import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a122')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a122"!</div>
}
