import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a176')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a176"!</div>
}
