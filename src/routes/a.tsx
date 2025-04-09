import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a")({
  component: () => {
    return (
      <div className="p-2">
        <h3>Welcome to Route A!</h3>
      </div>
    );
  },
});
