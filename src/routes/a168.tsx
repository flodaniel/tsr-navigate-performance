import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a168')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a168"!</div>
}
