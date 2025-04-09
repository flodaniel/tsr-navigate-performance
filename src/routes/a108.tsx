import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a108')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a108"!</div>
}
