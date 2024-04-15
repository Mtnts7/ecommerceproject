import React from "react";

function Header() {
  return (
    <div id="header">
      <div
        id="dark__header"
        className="flex justify-between bg-navbarColor text-navbarLight pl-5 pr-5"
      >
        <div id="dark__header__left__text" className="flex">
          <div id="phone__number" className="flex">
            <i class="fa-solid fa-phone gap-3 p-3"></i>
            <h6 className="gap-3 p-3">(255) 555-0118</h6>
          </div>
          <div id="email" className="flex gap-3 p-3">
            <i class="fa-solid fa-envelope"></i>
            <h6>michelle.rivera@example.com</h6>
          </div>
        </div>
        <div id="dark__header__mid__text" className="gap-3 p-3">
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>
        <div id="dark__header__right__text" className="flex gap-3 p-3">
          <h6>Follow Us :</h6>
          <div id="dark__header__right__icon">
            <i class="fa-brands fa-instagram gap-3 p-2"></i>
            <i class="fa-brands fa-youtube gap-3 p-2"></i>
            <i class="fa-brands fa-facebook gap-3 p-2"></i>
            <i class="fa-brands fa-twitter gap-3 p-2  "></i>
          </div>
        </div>
      </div>
      <div id="light__header" className="flex justify-between pl-5 pr-5 pt-3">
        <div id="light__header__left__text">
          <h3 className="text-2xl font-bold">Bandage</h3>
        </div>
        <div id="light__header__mid__text" className="flex">
          <ul className="list-none flex font-semibold text-sm gap-3 p-3 text-textgrey">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
              <i class="fa-solid fa-chevron-down"></i>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
          </ul>
        </div>
        <div id="light__header__left__text" className="flex">
          <ul className="list-none flex">
            <li className="flex p-3 font-semibold">
              <i class="fa-regular fa-user text-iconblue p-1"></i>
              <p className="text-iconblue">Login/Register</p>
            </li>
            <li>
              <i class="fa-solid fa-magnifying-glass  text-iconblue p-4"></i>
            </li>
            <li>
              <i class="fa-solid fa-cart-shopping  text-iconblue p-4"></i>
            </li>
            <li>
              <i class="fa-regular fa-heart  text-iconblue p-4"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>

    // <div>
    //   {/* darknavbar */}
    //   <div className="bg-navbarColor text-navbarLight flex justify-between pt-4 pb-4">
    //     <div className="flex">
    //       <div className="flex  p-2 ml-5">
    //         <i class="fa-solid fa-phone p-1"></i>
    //         <p className="text-center font-montserrat font-bold text-sm">
    //           (532) 532-0532
    //         </p>
    //       </div>
    //       <div className="flex  p-2">
    //         <i class="fa-solid fa-envelope p-1"></i>
    //         <p className="text-center font-montserrat font-bold text-sm">
    //           pars.sale@parsale.com
    //         </p>
    //       </div>
    //     </div>
    //     <div className="p-2 font-montserrat font-bold text-sm">
    //       Follow Us and get a chance to win 80% off
    //     </div>
    //     <div className="flex mr-5">
    //       <p className="p-2 font-montserrat font-bold text-sm">Follow Us :</p>
    //       <i class="fa-brands fa-instagram p-3"></i>
    //       <i class="fa-brands fa-youtube p-3"></i>
    //       <i class="fa-brands fa-facebook p-3"></i>
    //       <i class="fa-brands fa-twitter p-3"></i>
    //     </div>
    //   </div>
    //   {/* lightnavbar */}
    //   <div className="bg-navbarLight flex justify-between pl-10 pt-4 pb-4">
    //     <div className="flex">
    //       <p className="font-montserrat font-bold text-2xl pt-2">Parsale</p>
    //     </div>
    //     <div className="flex flex-grow pl-20">
    //       <div className="font-medium text-sm text-grey flex pt-4 justify-start max-w-2xl">
    //         <ul>
    //           <a href="#" className="pr-6 pl-6 text-sm">
    //             Home
    //           </a>
    //         </ul>
    //         <ul>
    //           <a href="#" className="pr-6 pl-6 text-sm">
    //             Shop
    //           </a>
    //         </ul>
    //         <ul>
    //           <a href="#" className="pr-6 pl-6 text-sm">
    //             About
    //           </a>
    //         </ul>
    //         <ul>
    //           <a href="#" className="pr-6 pl-6 text-sm">
    //             Blog
    //           </a>
    //         </ul>
    //         <ul>
    //           <a href="#" className="pr-6 pl-6 text-sm">
    //             Contact
    //           </a>
    //         </ul>
    //         <ul>
    //           <a href="#" className="pr-6 pl-6 text-sm">
    //             Pages
    //           </a>
    //         </ul>
    //       </div>
    //       <div className="flex pt-4 justify-end flex-grow pr-8">
    //         <div>
    //           <button className="flex pr-4 pl-4">
    //             <i class="fa-regular fa-user text-iconblue"></i>
    //             <p className="pl-2 font-montserrat text-sm font-medium text-iconblue">
    //               Login / Register
    //             </p>
    //           </button>
    //         </div>
    //         <div>
    //           <button className="flex pr-4 pl-4">
    //             <i class="fa-solid fa-magnifying-glass  text-iconblue"></i>
    //           </button>
    //         </div>
    //         <div>
    //           <button className="flex pr-4 pl-4">
    //             <i class="fa-solid fa-cart-shopping  text-iconblue"></i>
    //           </button>
    //         </div>
    //         <div>
    //           <button className="flex pr-4 pl-4">
    //             <i class="fa-regular fa-heart  text-iconblue"></i>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Header;
