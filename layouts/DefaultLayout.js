import React from "react";
import Navbar from "../components/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
}
