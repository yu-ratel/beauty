'use client';

import createClient from '@/lib/supabase/client';

function Page() {
  // 추후 타 플랫폼 추가를 위해 일단은 kakao default
  const supabase = createClient();

  const kakaoLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const handler = async () => {
    const result = await supabase.auth.getUser();

    if (result?.data?.user) logout();
    else kakaoLogin();
  };

  handler();

  return <div>기다려주세요~</div>;
}

export default Page;
