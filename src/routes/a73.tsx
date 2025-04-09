import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a73')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a73"!</div>
}
