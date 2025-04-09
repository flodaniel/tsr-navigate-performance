import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a78')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a78"!</div>
}
