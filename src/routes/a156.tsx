import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a156')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a156"!</div>
}
