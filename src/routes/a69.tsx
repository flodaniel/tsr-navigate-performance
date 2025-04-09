import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a69')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a69"!</div>
}
