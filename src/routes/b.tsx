import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/b")({
  component: () => {
    return (
      <div className="p-2">
        <h3>Welcome to Route B!</h3>
      </div>
    );
  },
});
