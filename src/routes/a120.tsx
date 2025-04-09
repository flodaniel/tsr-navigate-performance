import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a120')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a120"!</div>
}
