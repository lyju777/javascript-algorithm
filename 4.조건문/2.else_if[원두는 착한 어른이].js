/**
개발자 원두는 어린이날을 맞이해

저소득층에게 간식을 전하는 봉사에 참여하기로 했습니다.

봉사단체에서는 나이대에 따라 간식을 다르게 전달합니다.

0세부터 3세까지는 **“분유 스틱”**을, 4세부터 7세까지는 **“초콜릿과 사탕”**을,

나머지는 **“쿠키”**를 나눠줍니다.

원두는 받아 가야 할 간식을 쉽게 구분하기 위해 나이를 입력하면

받아야 할 간식을 문자열로 return 해주는 함수를 만들기로 합니다.

나이가 age로 주어질 때, 받아 가야 할 간식을 return 하는 함수 solution을 완성해주세요.
 */

function solution(age) {
  if (age <= 3) {
    return `분유와 스틱`;
  } else if (age <= 7) {
    return `초콜릿과 사탕`;
  } else {
    return `쿠키`;
  }
}

console.log(solution(7)); // “초콜릿과 사탕”
console.log(solution(2)); // “분유 스틱”
console.log(solution(19)); // “쿠키”
