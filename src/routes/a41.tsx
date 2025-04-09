import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a41')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a41"!</div>
}
