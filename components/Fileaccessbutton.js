import React from "react";

function Fileaccessbutton({ value, onClick, onchange }) {
  return (
    <div className="h-[105px] w-[35%] flex flex-col justify-around items-center mt-2">
      <h1 className="text-2xl text-orange-600"> {value}</h1>
      <button
        onClick={onClick}
        className="h-[45px] w-[190px] bg-slate-800 rounded-xl text-lg text-white"
      >
        <input
          className="absolute left-16 opacity-0"
          type="file"
          accept="zip/*"
          onChange={onchange}
        />
        {value}
      </button>
    </div>
  );
}

export default Fileaccessbutton;
