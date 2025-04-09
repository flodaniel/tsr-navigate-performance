import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a111')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a111"!</div>
}
