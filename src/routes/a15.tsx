import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a15')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a15"!</div>
}
