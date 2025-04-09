import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a8')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a8"!</div>
}
