import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a52')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a52"!</div>
}
