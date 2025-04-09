import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a189')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a189"!</div>
}
