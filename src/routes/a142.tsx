import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a142')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a142"!</div>
}
