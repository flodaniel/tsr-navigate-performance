import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a117')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a117"!</div>
}
