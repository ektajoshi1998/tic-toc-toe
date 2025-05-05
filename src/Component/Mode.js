import React, { useState } from "react";
import SelectMode from "./SelectMode";
import Player from "./PlayerNameForm";

const Mode = () => {
  const [selectMode, setSelectMode] = useState(null);
  return (
    <div>
      {!selectMode ? (
        <SelectMode onSelectMode={setSelectMode} />
      ) : (
        <Player mode={selectMode} />
      )}
    </div>
  );
};

export default Mode;
