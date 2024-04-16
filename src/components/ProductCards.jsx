import React from "react";

function ProductCards() {
  return (
    <div className="border-2 m-10 text-center">
      <img src="src/assets/productcard1.jpg" />
      <div>
        <h5>Graphic Dizayn</h5>
        <p>English Department</p>
        <div className="flex">
          <h5>$16.48</h5>
          <h5>$6.48</h5>
        </div>
        <div className="flex">
          <i class="fa-solid fa-circle text-[#23A6F0]"></i>
          <i class="fa-solid fa-circle text-[#23856D]"></i>
          <i class="fa-solid fa-circle text-[#E77C40]"></i>
          <i class="fa-solid fa-circle text-[#252B42]"></i>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
