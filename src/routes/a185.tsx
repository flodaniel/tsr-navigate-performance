import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a185')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a185"!</div>
}
