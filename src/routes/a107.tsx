import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a107')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a107"!</div>
}
