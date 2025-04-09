import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a45')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a45"!</div>
}
