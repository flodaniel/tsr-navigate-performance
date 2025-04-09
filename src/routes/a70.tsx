import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a70')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a70"!</div>
}
