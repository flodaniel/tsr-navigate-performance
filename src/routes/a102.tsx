import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a102')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a102"!</div>
}
