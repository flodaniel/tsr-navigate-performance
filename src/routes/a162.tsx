import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a162')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a162"!</div>
}
