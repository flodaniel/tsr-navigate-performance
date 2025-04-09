import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a112')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a112"!</div>
}
