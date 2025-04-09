import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a18')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a18"!</div>
}
