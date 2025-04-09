import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a199')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a199"!</div>
}
