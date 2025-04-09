import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a22')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a22"!</div>
}
