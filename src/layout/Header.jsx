import React from "react";

function Header() {
  return (
    <div>
      {/* darknavbar */}
      <div className="bg-navbarColor text-navbarLight flex justify-between pt-4 pb-4">
        <div className="flex">
          <div className="flex  p-2 ml-5">
            <i class="fa-solid fa-phone p-1"></i>
            <p className="text-center font-montserrat font-bold text-sm">
              (532) 532-0532
            </p>
          </div>
          <div className="flex  p-2">
            <i class="fa-solid fa-envelope p-1"></i>
            <p className="text-center font-montserrat font-bold text-sm">
              pars.sale@parsale.com
            </p>
          </div>
        </div>
        <div className="p-2 font-montserrat font-bold text-sm">
          Follow Us and get a chance to win 80% off
        </div>
        <div className="flex mr-5">
          <p className="p-2 font-montserrat font-bold text-sm">Follow Us :</p>
          <i class="fa-brands fa-instagram p-3"></i>
          <i class="fa-brands fa-youtube p-3"></i>
          <i class="fa-brands fa-facebook p-3"></i>
          <i class="fa-brands fa-twitter p-3"></i>
        </div>
      </div>
      {/* lightnavbar */}
      <div className="bg-navbarLight flex justify-between pl-10 pt-4 pb-4">
        <div className="flex">
          <p className="font-montserrat font-bold text-2xl pt-2">Parsale</p>
        </div>
        <div className="flex flex-grow pl-20">
          <div className="font-medium text-sm text-grey flex pt-4 justify-start max-w-2xl">
            <ul>
              <a href="#" className="pr-6 pl-6 text-sm">
                Home
              </a>
            </ul>
            <ul>
              <a href="#" className="pr-6 pl-6 text-sm">
                Shop
              </a>
            </ul>
            <ul>
              <a href="#" className="pr-6 pl-6 text-sm">
                About
              </a>
            </ul>
            <ul>
              <a href="#" className="pr-6 pl-6 text-sm">
                Blog
              </a>
            </ul>
            <ul>
              <a href="#" className="pr-6 pl-6 text-sm">
                Contact
              </a>
            </ul>
            <ul>
              <a href="#" className="pr-6 pl-6 text-sm">
                Pages
              </a>
            </ul>
          </div>
          <div className="flex pt-4 justify-end flex-grow pr-8">
            <div>
              <button className="flex pr-4 pl-4">
                <i class="fa-regular fa-user text-iconblue"></i>
                <p className="pl-2 font-montserrat text-sm font-medium text-iconblue">
                  Login / Register
                </p>
              </button>
            </div>
            <div>
              <button className="flex pr-4 pl-4">
                <i class="fa-solid fa-magnifying-glass  text-iconblue"></i>
              </button>
            </div>
            <div>
              <button className="flex pr-4 pl-4">
                <i class="fa-solid fa-cart-shopping  text-iconblue"></i>
              </button>
            </div>
            <div>
              <button className="flex pr-4 pl-4">
                <i class="fa-regular fa-heart  text-iconblue"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
