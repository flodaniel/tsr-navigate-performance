import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/f")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/f"!</div>;
}
