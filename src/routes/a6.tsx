import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a6')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a6"!</div>
}
