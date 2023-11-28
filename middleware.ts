import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { type NextRequest, NextResponse } from 'next/server';

// Refresh cookie on server
// If the cookie expires and the user refreshes the page,
// the cookie is removed on the client -> logged out
// but the server still attempts to use the expired cookie.
// Middleware will refresh the session with a new cookie from supabase, if required.

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res: response });

  await supabase.auth.getSession();
  return response;
}
