import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a93')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a93"!</div>
}
