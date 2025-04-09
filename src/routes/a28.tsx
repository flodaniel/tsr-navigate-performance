import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a28')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a28"!</div>
}
