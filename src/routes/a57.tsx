import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a57')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a57"!</div>
}
