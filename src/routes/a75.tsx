import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a75')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a75"!</div>
}
