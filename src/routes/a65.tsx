import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a65')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a65"!</div>
}
