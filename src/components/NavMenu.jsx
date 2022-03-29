import React from "react";

export const NavMenu = () => {
  return (
    <div className="absolute top-12 right-2">
      <ul>
        <li>
          <a href="/" className="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};
