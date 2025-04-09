import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a13')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a13"!</div>
}
