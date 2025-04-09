import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a46')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a46"!</div>
}
