import connectMongoDB from "../../../lib/connect";
import User from '../../../models/user'
import { NextResponse } from "next/server";


export  async function PUT(request, {params}){
    const {id} = params;
    const {newFirstname: firstName, newLastname: lastName, newEmail: email, newAvatar: avatar, newDate: date, newGender: gender} = await request.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, {firstName, lastName, email, avatar, date, gender});
    return NextResponse.json({message:"User updated"}, {status: 200})
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const user = await User.findOne({_id: id});
    return NextResponse.json( {user}, {status:200});
}