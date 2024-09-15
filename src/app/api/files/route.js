import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { writeFile } from "fs/promises";
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

const workDir = path.join(process.cwd())

  return NextResponse.json({ files, directoryPath,workDir });;

}

export async function POST(request, res) {
  const formData = await request.formData()

  const file = formData.getAll('file')[0]
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", "_");
  console.log(buffer)
  const directoryPath = path.join(__dirname);
  console.log(directoryPath)


  const basePath = path.join(process.cwd(), '../mnt')
  console.log(basePath)
  // process.env.NODE_ENV === 'production'
  try {
    // Write the file to the specified directory (public/assets) with the modified filename
    await writeFile(
      path.join(basePath, filename),
      buffer
    );
    // Return a JSON response with a success message and a 201 status code
    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    // If an error occurs during file writing, log the error and return a JSON response with a failure message and a 500 status code
    console.log("Error occurred ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }


}