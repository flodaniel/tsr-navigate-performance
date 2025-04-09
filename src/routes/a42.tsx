import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a42')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a42"!</div>
}
