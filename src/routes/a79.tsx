import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a79')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a79"!</div>
}
