import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a11')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a11"!</div>
}
