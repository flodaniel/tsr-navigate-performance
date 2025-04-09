import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a139')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a139"!</div>
}
