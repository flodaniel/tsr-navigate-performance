import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a4')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a4"!</div>
}
