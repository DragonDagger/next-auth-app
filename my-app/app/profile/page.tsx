import React from "react";
import Link from "next/link";

function Profile() {
  return (
    <div className="text-center mt-6">
      <h2 className="font-bold text-5xl mb-6">Profile Page</h2>
      <p>Here is where profile info will be viewed, if auth check passes.</p>
      <br></br>
      <ul className="font-semibold">
        <li className="text-violet-300 hover:text-blue-600">
          <Link href="/login">Login page</Link>
        </li>
        <li className="text-violet-300 hover:text-blue-600">
          <Link href="/signup">Signup page</Link>
        </li>
        <li className="text-violet-300 hover:text-blue-600">
          <Link href="/">Homepage</Link>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
