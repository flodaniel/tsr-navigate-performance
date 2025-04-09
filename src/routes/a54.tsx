import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a54')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a54"!</div>
}
