import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/e")({
  component: () => {
    return (
      <div className="p-2">
        <h3>Welcome to Route D!</h3>
      </div>
    );
  },
});
