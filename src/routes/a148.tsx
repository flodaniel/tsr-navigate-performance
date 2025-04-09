import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a148')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a148"!</div>
}
