import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a153')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a153"!</div>
}
