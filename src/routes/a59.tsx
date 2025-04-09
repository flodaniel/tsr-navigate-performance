import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a59')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a59"!</div>
}
