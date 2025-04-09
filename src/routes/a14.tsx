import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a14')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a14"!</div>
}
