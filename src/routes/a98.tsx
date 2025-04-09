import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a98')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a98"!</div>
}
