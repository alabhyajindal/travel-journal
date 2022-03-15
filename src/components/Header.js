import React from "react";
import { GlobeIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <nav className="nav">
      <GlobeIcon className="globe" />
      <h1 className="heading">my travel journal.</h1>
    </nav>
  );
}
