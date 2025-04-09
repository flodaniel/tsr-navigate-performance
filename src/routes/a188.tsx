import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a188')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a188"!</div>
}
