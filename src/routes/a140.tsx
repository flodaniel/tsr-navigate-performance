import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a140')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a140"!</div>
}
