import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a173')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a173"!</div>
}
