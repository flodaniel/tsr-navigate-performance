import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a23')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a23"!</div>
}
