import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a63')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a63"!</div>
}
