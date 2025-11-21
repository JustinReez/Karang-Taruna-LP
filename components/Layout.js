import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {children}
    </div>
  );
}
