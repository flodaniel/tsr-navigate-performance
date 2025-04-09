import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a84')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a84"!</div>
}
