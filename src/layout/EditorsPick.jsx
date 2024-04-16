import React from "react";

function EditorsPick() {
  return (
    <div className="container mx-auto font-montserrat">
      <div className="text-center">
        <h3 className="font-bold">EDITOR'S PICK</h3>
        <p className="p-2 text-textgrey">
          Problems trying to resolve the conflict between.
        </p>
      </div>
      <div className="grid grid-cols-3 h-[500px] pl-3 ">
        <div className="col-span-1">
          <img src="src/assets/boy1.jpg" />
          <button className="bg-navbarLight font-bold border-2 px-12 py-2">
            MEN
          </button>
        </div>
        <div className="col-span-1 h-[500px] pl-3">
          <img src="src/assets/girl1.jpg" />
          <button className="bg-navbarLight font-bold border-2 px-12 py-2">
            WOMEN
          </button>
        </div>
        <div className="col-span-1 h-[500px]">
          <img src="src/assets/boy2.jpg" className="h-[41%]" />
          <button className="bg-navbarLight font-bold border-2 px-4 py-2">
            ACCCESSORIES
          </button>
          <img src="src/assets/girl2.jpg" className="h-[41%]" />
          <button className="bg-navbarLight font-bold border-2 px-8 py-2">
            KIDS
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorsPick;
