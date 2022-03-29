import React from "react";

export const NavMenu = () => {
  return (
    <div className="absolute top-12 right-2 bg-white shadow-xl p-4">
      <ul>
        <li className="p-2 text-lg text-black hover:bg-slate-200 rounded-md">
          <a href="/" className="title">
            My orders
          </a>
        </li>
        <li className="p-2 mb-2 text-lg text-black hover:bg-slate-200 rounded-md">
          <a href="/">My account</a>
        </li>
        <hr />
        <li className="p-2 text-lg font-semibold hover:bg-slate-200 rounded-md">
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};
