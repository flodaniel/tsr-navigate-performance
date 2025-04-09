import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a164')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a164"!</div>
}
