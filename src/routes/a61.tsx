import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a61')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a61"!</div>
}
