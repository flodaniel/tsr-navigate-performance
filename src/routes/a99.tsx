import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a99')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a99"!</div>
}
