import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a149')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a149"!</div>
}
