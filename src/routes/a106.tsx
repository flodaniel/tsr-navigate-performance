import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a106')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a106"!</div>
}
