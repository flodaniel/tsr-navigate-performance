import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a80')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a80"!</div>
}
