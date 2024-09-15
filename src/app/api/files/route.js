import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request, res) {
  const directoryPath = path.join(__dirname);
  // const data  =await req.json()
  // const data = await request.json()
  // console.log(data)

  // const formData = await request.formData()
  // console.log(formData)
  console.log(directoryPath)
  const searchParams = request.nextUrl.searchParams;
  const folder = searchParams.get('path');

  console.log(folder)

  const files = fs.readdirSync(folder);


  console.log(files)


  return NextResponse.json({files,directoryPath});;

}