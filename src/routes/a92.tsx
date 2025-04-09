import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a92')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a92"!</div>
}
