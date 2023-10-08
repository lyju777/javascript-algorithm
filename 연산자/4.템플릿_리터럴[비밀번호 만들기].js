/**
개발자 원두는 이전에 만들었던 사내 프로그램 테스트용 아이디에 대한

비밀번호를 함께 만들어 달라는 추가 업무를 받았습니다.

팀원의 생년월일을 비밀번호로 하려 했지만 보안성이 낮아 보였습니다.

보안성을 높이기 위해 생년월일에 회사의 설립 연도를 더한 숫자를

비밀번호로 만들기로 하였습니다.

원두는 이 비밀번호를 팀원들의 이메일에

“비밀번호는 @@@@ 입니다.” 라고 전송하려 합니다.

팀원의 생년월일이 birth로 주어지고 회사의 설립 연도가 date로 주어질 때

“비밀번호는 @@@@입니다.”를 return 하는 함수 solution을 완성하세요.
 */

function solution(brith, date) {
  const password = brith + date;

  const send = `비밀번호는${password}입니다.`;
  return send;
}

console.log(solution(900501, 2021));
