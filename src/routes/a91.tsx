import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a91')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/a91"!</div>
}
