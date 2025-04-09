import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a147')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a147"!</div>
}
