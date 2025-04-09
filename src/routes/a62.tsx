import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a62')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a62"!</div>
}
