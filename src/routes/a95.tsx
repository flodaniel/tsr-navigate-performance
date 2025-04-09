import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a95')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a95"!</div>
}
