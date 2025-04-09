import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a21')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a21"!</div>
}
