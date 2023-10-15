/**
개발자 원두는 사용자가 검색창에 검색어를 한 글자씩 작성하면

해당 검색어를 포함한 추천 검색어를 추천해주는 프로그램을 만들려고 합니다.

여러 가지 데이터들을 모아 추천해주고 싶은 검색어 목록은 배열로 이미 완성하였습니다.

하지만 추천 목록을 언제까지 노출해야 할지 고민입니다.

사용자가 작성하려고 하는 검색어를 의미하는 문자열 **search**와

추천해줄 검색어 목록을 의미하는 배열 **recommends**가 주어질 때

검색어 목록에 전부 해당하는 가장 긴 문자열을 return하는 함수 solution을 완성하세요.

예를 들어, search로 “flutter”와 recommends로 [”flower”, “flow”, “flight”]가 주어졌을 때,

flutter에서 각각의 단어와 처음부터 겹치는 가장 긴 문자는 “fl”이므로 “fl”까지 입력될 때까지는

검색어 목록을 보여주도록 solution 함수에서 문자열 “fl”을 return합니다.

만약, 겹치는 문자가 없다면 빈 문자열을 return 해주세요

**제한 사항**

- search는 길이 1 이상 200 이하인 문자열입니다.
- 배열 recommends의 길이는 3 이상 100 이하입니다.
- 배열 recommends의 각 요소의 길이는 1 이상 200 이하인 문자열입니다.
- search와 배열 recommends의 단어들은 영어 소문자로만 구성되어 있습니다.
 */

function solution(search, recommends) {
  for (let i = search.length; i > 0; i--) {
    const 검색어 = search.slice(0, i);
    for (let j = 0; j < recommends.length; j++) {
      const 단어 = recommends[j];

      if (단어.startsWith(검색어) === false) {
        break;
      }
      if (j === recommends.length - 1) {
        return 검색어;
      }
    }
  }
  return " ";
}

console.log(solution("flutter", ["flower", "flow", "flight"])); // "fl"
console.log(solution("apple", ["dad", "racecar", "car"])); // ""
