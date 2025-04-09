import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a191')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a191"!</div>
}
