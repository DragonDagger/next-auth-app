"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const [buttonToggle, setButtonToggle] = useState(false);

  const onSignup = async () => {};

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setButtonToggle(true);
    } else {
      setButtonToggle(false);
    }
  }, [user]);

  return (
    <div className="text-center">
      <h1 className="mt-5 text-5xl font-bold">Sign up</h1>
      <br />
      <div className="mt-10 mx-auto max-w-sm">
        <div className="flex justify-center mb-4">
          <label htmlFor="username" className="p-2 w-1/3">
            Username:
          </label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="username"
            className="p-2 w-2/3 text-black"
          />
        </div>
        <div className="flex justify-center mb-4">
          <label htmlFor="email" className="p-2 w-1/3">
            Email:
          </label>
          <input
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
            className="p-2 w-2/3 text-black"
          />
        </div>
        <div className="flex justify-center">
          <label htmlFor="password" className="p-2 w-1/3">
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
            className="p-2 w-2/3 text-black"
          />
        </div>
      </div>
      <button
        className={`${
          buttonToggle
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-gray-400 pointer-events-none"
        } px-4 py-2 text-white font-semibold rounded-lg shadow-md mt-6 mb-6`}
        disabled={!buttonToggle}
      >
        Sign up
      </button>
      <br />
      <Link href="/login">← Login page</Link>
    </div>
  );
}

export default Signup;
