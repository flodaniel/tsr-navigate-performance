import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a109')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a109"!</div>
}
