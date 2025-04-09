import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a166')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a166"!</div>
}
