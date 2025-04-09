import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a53')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a53"!</div>
}
