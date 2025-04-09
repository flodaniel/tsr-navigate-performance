import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a25')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a25"!</div>
}
