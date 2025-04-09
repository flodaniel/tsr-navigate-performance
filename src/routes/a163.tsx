import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a163')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a163"!</div>
}
