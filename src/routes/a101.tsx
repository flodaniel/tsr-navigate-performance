import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a101')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a101"!</div>
}
