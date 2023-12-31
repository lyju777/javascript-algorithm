/**
 개발자 원두가 속한 개발팀에서는 매주 돌아가면서 공부한 것을 발표하는 스터디가 있습니다.

발표 순서를 정하는 규칙은 아래와 같습니다.

- 지난 발표에서 첫 번째로 발표한 사람은 마지막 순서로 발표하게 됩니다.
- 새로 참여하는 사람은 첫 번째로 발표합니다.
- 나머지 사람들의 발표 순서는 동일합니다.

지난번 발표한 사람들의 닉네임이 순서대로 담긴 배열 prev와 

새로 참여한 사람의 닉네임이 문자열 join으로 주어질 때

이번 스터디의 발표 순서가 담긴 배열을 return하는 함수 solution을 완성해주세요.
 */

function solution(prev, join) {
  const 지난번_처음발표자 = prev.shift();
  return [join, ...prev, 지난번_처음발표자];
}

console.log(solution(["sudo", "임금"], "라떼")); // ["라떼", "임금", "sudo"];
console.log(solution(["아버", "광어", "안드로이드", "siri"], "피카츄")); // ["피카츄", "광어", "안드로이드", "siri", "아버"];
