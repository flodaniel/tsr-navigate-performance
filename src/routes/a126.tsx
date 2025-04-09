import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a126')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a126"!</div>
}
