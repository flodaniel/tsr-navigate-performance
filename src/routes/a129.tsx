import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a129')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a129"!</div>
}
