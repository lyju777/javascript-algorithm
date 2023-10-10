/**
 개발자 원두는 담당하고 있는 프로젝트의 명세서를 작성하고 있습니다.

프로젝트에서 사용된 기술 스택의 이름이 배열 stacks로 주어질 때

내림차순으로 정렬하여 return하는 함수 solution을 완성해주세요.

 */

function solution(stacks) {
  return stacks.sort().reverse();
}

console.log(solution(["typescript", "express", "node", "react"])); // ["typescript", "react", "node", "express"]
console.log(solution(["docker", "graphql", "javascript"])); // ["javascript", "graphql", "docker"]
