import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";

export const Route = createFileRoute("/_nested1/_nested2")({
  component: RouteComponent,
});

function RouteComponent() {
  // const matches = useMatches();
  return (
    <div>
      Hello "/_nested1/_nested2/_nested2"!
      <Outlet />
    </div>
  );
}
