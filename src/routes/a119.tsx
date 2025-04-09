import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a119')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a119"!</div>
}
