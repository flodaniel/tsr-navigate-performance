import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a31')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a31"!</div>
}
