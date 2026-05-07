import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const firstName =
    formData.get('q3_fullName[first]') ||
    formData.get('q3_name[first]') ||
    formData.get('first_name') ||
    formData.get('name') ||
    '';

  const params = new URLSearchParams();
  if (firstName) params.set('name', firstName.toString().split(' ')[0]);

  return NextResponse.redirect(new URL(`/thank-you?${params.toString()}`, req.url));
}
