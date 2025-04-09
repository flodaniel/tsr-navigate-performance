import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a38')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a38"!</div>
}
