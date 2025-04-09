import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a81')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a81"!</div>
}
