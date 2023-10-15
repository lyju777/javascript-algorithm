/**
개발자 원두는 조만간 있을 회사 창립기념일을 위해

창립기념일 파티에 초대할 사람들에게 메일을 보내려고 합니다.

초대자 명단을 받은 원두는 격식을 차리기 위해 초대자 이름 뒤에

”님”을 붙여서 메일을 전송해야 합니다.

초대자 명단이 담겨 있는 배열 **nameList**가 매개변수로 주어질 때

각 초대자 이름 뒤에 “님”을 추가한 배열을 return 하는 함수 solution을 완성하세요.

**제한 사항**

- nameList는 길이 1 이상 10 이하인 배열입니다.
- nameList의 원소는 1 이상 5 이하의 길이를 가지는 문자열입니다.
- **map을 이용해서 문제를 풀어야 합니다.**
 */

function solution(nameList) {
  const 양식 = nameList.map((res) => res + "님");
  return 양식;
}

console.log(solution(["병건", "호민", "풍"])); // ["병건님", "호민님", "풍님"]
