import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a17')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a17"!</div>
}
