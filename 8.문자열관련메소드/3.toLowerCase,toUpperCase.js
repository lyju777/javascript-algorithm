/**
개발자 원두가 대표님께 간단한 프로그램을 만들어달라는 부탁을 받았습니다.

대표님의 어린 딸이 비밀 일기장을 쓰고 있는데, 조금 이상하게 작성되어 있다고 합니다.

다행히 대표님께서 주말 동안 고민한 결과 

알파벳 어순을 거꾸로 작성하고 있다는 것을 알아냈습니다.

각각의 비밀 일기장에서 해당하는 알파벳은 다음과 같습니다.

| a | z | d | w | g | t | j | q | m | n | p | k | s | h | v | e | y | b |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b | y | e | v | h | s | k | p | n | m | q | j | t | g | w | d | z | a |
| c | x | f | u | i | r | l | o | o | l | r | i | u | f | x | c |  |  |

문자열 str가 주어질 때 비밀 일기를 해석한 내용을 return 하는 함수 solution을 완성해주세요.

**제한 사항**

- str은 길이 1 이상 100 이하의 문자열입니다.
- 일기는 영문 알파벳, 공백으로만 작성되어 있습니다.
- 대문자도 소문자처럼 알파벳 어순이 거꾸로 작성되어 있습니다.
 */

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function solution(str) {
  let 해석본 = "";

  for (let i = 0; i < str.length; i++) {
    // 1. 공백인 경우
    if (str[i] === " ") {
      해석본 = 해석본 + " ";
      continue;
    }

    const 인덱스 = ALPHABET.indexOf(str[i]);

    // 2. 대문자인 경우
    // 1) 소문자로 변환
    // 2) ALPHABET[인덱스] ==>   ALPHABET[끝인덱스 - 인덱스]
    // 3) 대문자로 변환
    if (인덱스 === -1) {
      const 대문자인덱스 = ALPHABET.indexOf(str[i].toLowerCase());
      해석본 =
        해석본 + ALPHABET[ALPHABET.length - 1 - 대문자인덱스].toUpperCase();
    } else {
      // 3. 소문자인 경우
      // ALPHABET[인덱스] ==>   ALPHABET[끝인덱스 - 인덱스]
      해석본 = 해석본 + ALPHABET[ALPHABET.length - 1 - 인덱스];
    }
  }
  return 해석본;
}

console.log(solution("R dzmg gl vzg ggvlpylppr")); // "I want to eat tteokbokki"
console.log(solution("Xzgh ziv xfgv")); // "Cats are cute"
