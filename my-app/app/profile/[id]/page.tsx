"use client";

import React from "react";

function SingleProfile({ params }: any) {
  return (
    <div className="text-center mt-6">
      <h2 className="font-bold text-5xl mb-6">Single Profile Page</h2>
      <p>Here is where profile info will be viewed, if auth check passes.</p>

      <p className="p-10">
        Profile info for:{" "}
        <span className="p-2 rounded bg-yellow-400 text-black text-2xl font-semibold">
          {params.id}
        </span>
      </p>
      <br></br>
    </div>
  );
}

export default SingleProfile;
