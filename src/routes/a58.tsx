import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a58')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a58"!</div>
}
