import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a169')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a169"!</div>
}
