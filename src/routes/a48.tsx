import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a48')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a48"!</div>
}
