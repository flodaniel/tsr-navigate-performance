import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a100')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a100"!</div>
}
