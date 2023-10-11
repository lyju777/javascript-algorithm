/**
 개발자가 되고 싶은 원두는 A회사에 이력서를 넣었습니다.

그런데 주변 동료들의 추천으로 B회사로 이력서를 변경하고자 합니다.

원두가 희망했던 회사 a, 변경하고자 하는 회사 b가 매개변수로 주어질 때

let을 이용해 company라는 변수명으로 a를 할당하여 선언한 후에

b로 재할당한 후 company 변수를 return하는 함수 solution을 완성하세요.
 */

function solution(a, b) {
  let company = a;
  company = b;

  return company;
}

solution("캠프코드", "코드캠프");
solution("코딩", "딩코");
