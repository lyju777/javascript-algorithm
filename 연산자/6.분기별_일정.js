/**
개발자 원두는 앞으로의 계획을 세우기 위해 분기별로 일정표를 짜려고 합니다.

좀 더 편한 계획을 위해 원두는 

해당 월을 입력하면 몇 분기인지 number 형태로 알려주는 알고리즘을 만들려 합니다.

특정 월이 month로 주어질 때, month는 몇 분기에 해당하는지 return 하는 함수 solution을 완성하세요.
 */

function solution(month) {
  return Math.ceil(month / 3);
}

console.log(solution(4)); // 2
console.log(solution(12)); // 4
