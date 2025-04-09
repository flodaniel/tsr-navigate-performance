import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a145')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a145"!</div>
}
