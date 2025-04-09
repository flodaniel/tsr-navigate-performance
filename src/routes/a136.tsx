import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a136')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a136"!</div>
}
