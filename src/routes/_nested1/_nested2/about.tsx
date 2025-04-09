import * as React from "react";
import { createFileRoute, useMatches } from "@tanstack/react-router";
import { MiniSearchBox } from "../../../components/MiniSearchBox";

export const Route = createFileRoute("/_nested1/_nested2/about")({
  component: AboutComponent,
  validateSearch: (params) => {
    return { s: (params.s as string) ?? "" };
  },
});

function AboutComponent() {
  const matches = useMatches();
  const matches2 = useMatches();
  const matches3 = useMatches();
  console.log("matches", matches);
  console.log("matches2", matches2);
  console.log("matches3", matches3);
  return (
    <div className="p-2">
      <h3>About</h3>
      <MiniSearchBox />
    </div>
  );
}
