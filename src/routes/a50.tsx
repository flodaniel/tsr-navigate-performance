import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a50')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a50"!</div>
}
