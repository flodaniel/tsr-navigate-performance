import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a134')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a134"!</div>
}
