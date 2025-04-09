import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a170')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a170"!</div>
}
