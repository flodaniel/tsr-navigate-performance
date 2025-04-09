import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/c")({
  component: () => {
    return (
      <div className="p-2">
        <h3>Welcome to Route C!</h3>
      </div>
    );
  },
});
