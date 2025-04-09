import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a83')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a83"!</div>
}
