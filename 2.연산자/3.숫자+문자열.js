/**
개발자 원두는 사내 프로그램 테스트를 위한

테스트용 아이디를 만드는 업무를 받았습니다.

원두는 개발팀 팀원의 영어 이름과 생년월일 6자리를 뒤에 붙인 형태로

아이디를 만들기로 하였습니다.

개발팀 팀원의 영어 이름이 name으로 주어지고 생년월일이 birth로 주어질 경우

만들어지는 아이디를 return하는 함수 solution을 완성하세요.
 */

function solution(name, birth) {
  const id = name + birth;
  return id;
}

console.log(solution("marco", 971204));
