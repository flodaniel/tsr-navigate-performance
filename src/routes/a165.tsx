import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a165')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a165"!</div>
}
