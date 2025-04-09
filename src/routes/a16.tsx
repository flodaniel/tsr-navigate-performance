import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a16')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a16"!</div>
}
