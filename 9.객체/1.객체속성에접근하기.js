/**
입사 후 열심히 일하고 있던 개발자 원두는 

본인이 사내 시스템에 등록되어 있지 않은 것을 이제야 깨달았습니다.

다급해진 원두는 직접 자신의 이름을 등록하려고 합니다.

각 팀의 명단을 담은 객체 **team**이 주어질 때

“원두”를 개발팀에 추가하여 return하는 함수 solution을 완성해주세요.

**제한 사항**

- 개발팀의 명단은 객체 team의 dev라는 key의 값에 해당하는 배열입니다.
 */
function solution(team) {
  team["dev"].push("원두");
  return team;
}

console.log(solution({ dev: ["카페", "라떼"] })); // {dev: ["카페", "라떼", "원두"]}
