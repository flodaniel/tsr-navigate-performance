import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a160')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a160"!</div>
}
