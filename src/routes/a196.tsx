import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a196')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a196"!</div>
}
