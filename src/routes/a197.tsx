import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a197')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a197"!</div>
}
