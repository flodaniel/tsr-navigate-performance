import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a94')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a94"!</div>
}
