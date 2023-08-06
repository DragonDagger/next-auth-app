"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

function Login() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [buttonToggle, setButtonToggle] = useState(false);

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonToggle(true);
    } else {
      setButtonToggle(false);
    }
  }, [user]);

  return (
    <div className="text-center">
      <h1 className="mt-5 text-5xl font-bold">Login</h1>
      <br />
      <div className="mt-10 mx-auto max-w-sm">
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
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-400 pointer-events-none"
        } px-4 py-2 text-white font-semibold rounded-lg shadow-md mt-6 mb-6`}
        disabled={!buttonToggle}
        onClick={onLogin}
      >
        Login
      </button>
      <br />
      <Link href="/signup">Sign up →</Link>
    </div>
  );
}

export default Login;
