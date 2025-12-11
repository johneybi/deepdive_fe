// 06. 주어진 문자가 들어있는 User의 이름을 출력(대소문자 구분없음)
const users = ["Ghost", "Irangi", "Camel", "Shoopa", "Nuvis"];
function mission6(arr, char) {
  return arr.filter(
    (name) => name.toLowerCase().includes(char.toLowerCase())
    // name.toLowerCase() : 이름을 모두 소문자로 변환 (대소문자 무시하기 위해)
    // char.toLowerCase() : 찾고자 하는 문자도 소문자로 변환
  );
}
console.log(mission6(users, "c"));
console.log(mission6(users, "s"));

// 07. 대소문자 변환
// 주어진 문자열을 대문자는 소문자로, 소문자는 대문자로 변환하시오

function mission7(str) {
  return str
    .split("")
    .map((char) => //배열의 각 글자(ch)를 검사해서 새 배열 만들기
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase() //연산자를 사용해서 변환
    )
    .join("");
}
console.log(mission7("Hello Ghost")); // 'hELLO gHOST'
//

// 08. 문자열 자르기
// 이메일주소에서 아이디 부분만 추출하는 함수를 작성하시오.
function mission8(email) {
  return email.split("@")[0];
}
console.log(mission8("ghost@gmail.com")); // 'ghost' 출력
//

// 09. 문자열 교체
// 주어진 문자열에서 'apples'를 'oranges'로 교체하는 함수를 작성하시오
// 정규식 패턴과 플래그를 이용하시오.
function mission9(str) {
  return str.replace(/apples/gi, "oranges"); // g 플래그  → global, 문자열 전체에서 모든 일치 항목 찾기 // i 플래그  → ignore case, 대소문자 구분 안 함
}
console.log(mission9("I love apples, Apples are very good"));
// 'I love oranges, oranges are very good'
//

// 10. 문자열 길이제한
// 문자열이 10자를 넘으면 자르고, 문자열 뒤에 '...'를 붙이시오.
function mission10(str) {
  return str.length > 10 ? str.slice(0, 10) + "..." : str;
}
console.log(mission10("This is a very long sentences."));
// 'This is a ...'
