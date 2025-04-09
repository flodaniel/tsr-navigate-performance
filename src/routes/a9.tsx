import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a9')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a9"!</div>
}
