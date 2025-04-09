import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a30')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a30"!</div>
}
