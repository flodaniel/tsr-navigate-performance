import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a76')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a76"!</div>
}
