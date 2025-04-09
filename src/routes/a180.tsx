import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a180')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a180"!</div>
}
