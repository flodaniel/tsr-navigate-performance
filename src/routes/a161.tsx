import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a161')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a161"!</div>
}
