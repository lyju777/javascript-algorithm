/**
개발자 원두는 재무팀 입사 동기에게 다른 업체들로부터 받아야 할 돈을

자동으로 계산해줄 수 있는 프로그램을 만들어달라고 부탁받았습니다.

계산서에는 업체마다 받아야 할 금액들이 배열 형태로 적혀 있습니다.

원두는 해당 업체에서 받을 금액의 합계를 계산하는 프로그램을 만들어야 합니다.

금액들이 나열된 2차원 배열 bill이 주어질 때,

각 업체에게 받을 금액의 합계를 

배열에 순서대로 담아 return 하는 함수 solution을 완성하세요.

**제한 사항**

- bill은 길이 1 이상 10 이하인 2차원 배열입니다.
- bill의 원소 배열의 원소는 1 이상 1,000 이하인 숫자 데이터입니다.
 */

function solution(bill) {
  const result = [];
  for (let i = 0; i < bill.length; i++) {
    let 합계 = 0;
    for (let j = 0; j < bill[i].length; j++) {
      합계 = 합계 + bill[i][j];
    }
    result.push(합계);
  }
  return result;
}

console.log(
  solution([
    [1000, 500, 800],
    [600, 200, 200],
  ])
); // [2300, 1000]

console.log(
  solution([
    [1, 2],
    [3, 3, 4, 5, 6],
  ])
); // [3, 21]
