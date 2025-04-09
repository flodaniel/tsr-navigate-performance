import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a186')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a186"!</div>
}
