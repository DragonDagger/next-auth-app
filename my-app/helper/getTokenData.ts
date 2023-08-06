import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getTokenData = (request: NextRequest) => {
  try {
    const encodedToken = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(
      encodedToken,
      process.env.TOKEN_SECRET!
    );

    // grabbing the id from the decoded token data (could also access email or username as well but for now just accessing the id)
    return decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
