import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a36')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a36"!</div>
}
