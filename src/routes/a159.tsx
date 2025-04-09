import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a159')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a159"!</div>
}
