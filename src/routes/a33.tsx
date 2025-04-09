import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a33')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a33"!</div>
}
