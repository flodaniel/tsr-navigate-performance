import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a152')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a152"!</div>
}
