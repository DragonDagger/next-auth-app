"use client";

import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

function Profile() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="text-center mt-6">
      <h2 className="font-bold text-5xl mb-6">Profile Page</h2>
      <p>Here is where profile info will be viewed, if auth check passes.</p>
      <br></br>
      <ul className="font-semibold">
        <li className="text-blue-300 hover:text-blue-600">
          <Link href="/">🡐 Homepage</Link>
        </li>
      </ul>
      <br></br>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
