import { connect } from "@/db/db";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function GET(request: NextRequest) {
  try {
  } catch (error: any) {}
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { username, email, password } = reqBody;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { error: "User already exists!" },
        { status: 400 }
      );
    }

    // 10 rounds for next/express, encrypt password before it enters the db.
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json(
      { message: "User created successfully!!", savedUser },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
  } catch (error: any) {}
}

export async function PATCH(request: NextRequest) {
  try {
  } catch (error: any) {}
}

export async function DELETE(request: NextRequest) {
  try {
  } catch (error: any) {}
}
