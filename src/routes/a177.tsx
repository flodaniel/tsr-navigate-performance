import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a177')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a177"!</div>
}
