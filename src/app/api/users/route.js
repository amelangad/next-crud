import connectMongoDB from "../../lib/connect";
import User from '../../models/user'
import { NextResponse } from "next/server";



export async function POST (request) {
    const { firstName, lastName, email, password, avatar, date, gender} = await request.json();
    await connectMongoDB();
    await User.create({ firstName, lastName, email, password, avatar, date, gender});
    return NextResponse.json({message: "User created"}, {status: 201});
}

export async function GET () {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({users});
}

export async function DELETE (request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({message: "User deleted"}, {status: 200})
}