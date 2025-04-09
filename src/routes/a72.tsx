import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a72')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a72"!</div>
}
