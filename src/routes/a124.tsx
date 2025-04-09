import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a124')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a124"!</div>
}
