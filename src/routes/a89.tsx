import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a89')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a89"!</div>
}
