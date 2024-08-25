import { NextResponse } from 'next/server';

import creatServer from '@/lib/supabase/server';

export const GET = async () => {
  const supabase = await creatServer();

  const result = await supabase.from('fortuneCookie').select('*');

  return NextResponse.json({ ...result });
};