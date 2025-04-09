import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a172')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a172"!</div>
}
