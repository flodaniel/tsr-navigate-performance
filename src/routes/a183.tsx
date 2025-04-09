import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a183')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a183"!</div>
}
