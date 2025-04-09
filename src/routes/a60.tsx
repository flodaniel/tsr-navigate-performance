import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a60')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a60"!</div>
}
