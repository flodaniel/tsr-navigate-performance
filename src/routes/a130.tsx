import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a130')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a130"!</div>
}
