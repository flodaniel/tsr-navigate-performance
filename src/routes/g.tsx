import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/g')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/g"!</div>
}
