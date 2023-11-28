'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthButton() {
  const supabase = createClientComponentClient();

  const handleLogIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    });
  };

  const handleLogOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
}