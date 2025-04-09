import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a158')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a158"!</div>
}
