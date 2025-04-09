import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a175')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a175"!</div>
}
