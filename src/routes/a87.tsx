import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a87')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a87"!</div>
}
