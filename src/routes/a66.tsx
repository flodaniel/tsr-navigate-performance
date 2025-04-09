import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a66')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a66"!</div>
}
