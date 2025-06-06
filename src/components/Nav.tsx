import { loginState } from '@/utils/loginState';

import ActiveLink from './ActiveLink';

async function Nav() {
  const isUser = loginState();
  const loginText = isUser ? '로그아웃' : '로그인';

  return (
    <nav className="m-6 flex h-[10%] justify-between">
      <ActiveLink path="/">아름다움</ActiveLink>
      <div className="flex space-x-3 sm:space-x-10">
        <ActiveLink path="/board/1">게시판</ActiveLink>
        {isUser && (
          <ActiveLink path="/mypage/info" myPage>
            마이페이지
          </ActiveLink>
        )}
        <ActiveLink path={`/auth?login=${isUser}`}>{loginText}</ActiveLink>
      </div>
    </nav>
  );
}

export default Nav;
