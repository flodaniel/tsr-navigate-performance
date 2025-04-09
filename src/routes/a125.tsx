import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a125')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a125"!</div>
}
