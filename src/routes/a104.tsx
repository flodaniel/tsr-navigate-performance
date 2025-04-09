import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a104')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a104"!</div>
}
