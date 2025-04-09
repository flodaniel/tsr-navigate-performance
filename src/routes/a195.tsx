import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a195')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a195"!</div>
}
