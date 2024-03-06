import React from "react";

function Header() {
  return (
    <div>
      <div className="bg-navbarColor text-navbarLight flex justify-between ">
        <div className="flex">
          <div className="flex  p-2 ml-5">
            <i class="fa-solid fa-phone p-1"></i>
            <p className="text-center">(225) 555-0118</p>
          </div>
          <div className="flex  p-2">
            <i class="fa-solid fa-envelope p-1"></i>
            <p className="text-center">michelle.rivera@example.com</p>
          </div>
        </div>
        <div className="p-2">Follow Us and get a chance to win 80% off</div>
        <div className="flex mr-5">
          <p className="p-2">Follow Us :</p>
          <i class="fa-brands fa-instagram p-3"></i>
          <i class="fa-brands fa-youtube p-3"></i>
          <i class="fa-brands fa-facebook p-3"></i>
          <i class="fa-brands fa-twitter p-3"></i>
        </div>
      </div>
      <div className="bg-navbarLight"></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Header;
