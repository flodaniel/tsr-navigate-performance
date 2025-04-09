import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a71')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a71"!</div>
}
