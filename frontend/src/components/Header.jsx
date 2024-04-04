import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

const Header = () => {
  return (
    <div className="bg-yellow-500 text-white p-5 pl-10 text-3xl font-bold sans-serif font-heading flex gap-2">
      <HighlightIcon fontSize="large" />
      Keeper
    </div>
  );
};

export default Header;
