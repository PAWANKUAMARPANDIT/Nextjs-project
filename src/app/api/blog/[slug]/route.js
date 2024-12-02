import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = await params;
  console.log(slug);
  

   const res = fetch(`http://localhost:3000/blog/${slug}`);
  
  if (!res.ok) {
    return NextResponse.error();
  }
  const data = await res.json();
  return NextResponse.json(data);
}