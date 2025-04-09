import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a179')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a179"!</div>
}
