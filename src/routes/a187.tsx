import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a187')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a187"!</div>
}
