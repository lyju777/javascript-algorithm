/**
개발자 원두가 열심히 개발을 하다 보니,

조금 출출함을 느껴 편의점에 가 호빵을 사 먹기로 했습니다.

호빵을 혼자 먹을 수는 없고 사무실 직원들과 나누어 먹어야 합니다.

한 팩당 5개가 들어 있는 호빵을 n명의 사무실 직원과 나누어 먹기 위해

최소 몇 팩을 구매해야 하는지 return 하는 solution 함수를 완성해 주세요.

**제한 사항**

- 한 사람당 적어도 한 개의 호빵을 먹습니다.
- n은 1 이상 100 이하의 number 타입입니다.
 */

function solution(n) {
  const 호빵 = 5;
  return Math.ceil(n / 호빵);
}

console.log(solution(23)); // 5
console.log(solution(76)); // 16
console.log(solution(3)); // 1
