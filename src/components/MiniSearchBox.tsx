import { TextField } from "@mui/material";
import { useLocation, useNavigate } from "@tanstack/react-router";

const MinimalSearchBox: React.FC = ({}) => {
  return <input type="text" placeholder="Search..." />;
};

const TSRSearchBox = () => {
  const q = useLocation({ select: (state) => state.search.s });

  const navigate = useNavigate();

  const setQuery = (newValue: string) => {
    navigate({
      to: ".",
      search: (prev) => ({
        ...prev,
        s: newValue,
      }),
      replace: true,
    });
  };
  const query = q ?? "";

  return <TextField value={query} onChange={(e) => setQuery(e.target.value)} />;
};

export const MiniSearchBox = () => {
  const initialEntries = [
    {
      name: "a",
      id: "a",
      rank: 1,
      subtitle: "b",
      rankingValue: 1,
    },
    { name: "b", id: "b", rank: 2, subtitle: "c", rankingValue: 2 },
  ];

  return (
    <>
      <MinimalSearchBox />
      <TSRSearchBox />
      {initialEntries.length}
    </>
  );
};
