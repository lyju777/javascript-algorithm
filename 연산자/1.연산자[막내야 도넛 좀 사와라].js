/**
막내 개발자 원두는 사내 컨퍼런스에서 제공될 도넛을 사려고 합니다.

컨퍼런스에 참여하는 인원이 n으로 주어지고

한 상자에 들어 있는 도넛의 개수가 donuts로 주어질 경우,

컨퍼런스에 참여하는 모든 인원이 도넛 하나씩을 받을 수 있게 구매하려면

몇 박스의 도넛을 구매해야 하는지 return하는 함수 solution을 완성하세요.
 */

function solution(n, dunuts) {
  const dunutsBox = n / dunuts;

  return dunutsBox;
}

console.log(solution(120, 12));
console.log(solution(40, 12));
