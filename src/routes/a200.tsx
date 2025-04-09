import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a200')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a200"!</div>
}
