import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a19')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a19"!</div>
}
