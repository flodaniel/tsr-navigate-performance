import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a133')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a133"!</div>
}
