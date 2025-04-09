import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a181')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a181"!</div>
}
