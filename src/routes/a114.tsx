import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a114')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a114"!</div>
}
