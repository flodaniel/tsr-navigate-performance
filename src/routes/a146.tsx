import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a146')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a146"!</div>
}
