import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a157')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a157"!</div>
}
