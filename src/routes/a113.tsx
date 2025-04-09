import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a113')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a113"!</div>
}
