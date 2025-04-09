import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a43')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a43"!</div>
}
