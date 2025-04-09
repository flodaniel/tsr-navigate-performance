import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a82')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a82"!</div>
}
