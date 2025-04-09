import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a7')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a7"!</div>
}
