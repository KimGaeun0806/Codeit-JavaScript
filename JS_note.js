//*js 개념정리*//

//브라우저의 콘솔 탭에 내용 출력하기
    console.log(15);

//변수 선언
    let zico = 30;
    let onew = 33;

//상수
    const PI = 3.14;

//변수명 지을 때 
    //1. js 식별자는 문자, _, $로 시작해야 함
    //2. 변수명 지을 때 camelCase 쓰기 
        let zicoHandsomeBoy;
    //3. 변수명 아무렇게나 짓지 말고 관련된 의미있는 이름으로 짓기

//함수 선언
    function 함수이름(){
        명령;
        명령;
    }

    function flower(){
        console.log('Hi');
        console.log('안녕');
    }

//함수 호출
    flower();

//파라미터
    function 함수이름(파라미터){ 
        console.log(파라미터);
    }
    함수이름(값); //값이 파라미터로 전달됨

    function flower(name){
        console.log('안녕하세요' + name + '님');
    }
    flower('지코');
    flower('온유');
    flower('류진');

    function cloud(x){
        console.log(x*x);
    }
    cloud(2);
    cloud(3);

//파라미터 여러 개
    function flower(num1, num2){
        console.log(num1 + num2);
    }
    flower(10, 5);

    function cloud(name, birth, job){
        console.log('제 이름은 ' + name + '입니다.');
        console.log('제 생일은 ' + birth + '입니다.');
        console.log('제 직업은 ' + job + '입니다.'); 
    }
    cloud('지코', '92.09.14', '아티스트');

//옵셔널 파라미터
    function flower(name, age, nationality = '미국'){ //옵셔널 파라미터 다음에 일반 파라미터가 나오면 안됨
        console.log(`제 이름은 ${name}입니다.`);
        console.log(`제 나이는 ${age}살입니다.`);
        console.log(`제 국적은 ${nationality}입니다.`);
    }
    flower('지코', 30, '한국'); 
    //=> 제 이름은 지코입니다. 
    //   제 나이는 30살입니다.
    //   제 국적은 한국입니다.
    flower('지코', 30);
    //=> 제 이름은 지코입니다.
    //   제 나이는 30살입니다.
    //   제 국적은 미국입니다. 

//return
    function flower(){
        return 2;
    }
    console.log(flower());
    
    function cloud(num){
        return num*2;
    }
    console.log(cloud(5));

    function wind(num){
        return num*2;
    }
    let x = wind(5);
    let y = wind(2);
    console.log(x*y);

//return과 console.log
    function flower(x){
        console.log(x*x);
    }
    function cloud(x){
        return x*x;
    }
    console.log(cloud(3)); //=> 9
    console.log(flower(3)); //=> undefined


//typeof 연산자
    console.log(typeof 914); //=> number
    console.log(typeof 'zico'); //=> string
    console.log(typeof 'true'); //=> boolean
    console.log(typeof '914'); //=> string

    let zico = '지코';
    function flower(){
        console.log('Hello');
    }
    console.log(typeof zico); //=> string
    console.log(typeof flower); //=> function
    console.log(typeof 'Hello' + 'zico'); //잘못됨
    console.log(typeof ('Hello' + 'zico')); //=> string
    console.log(typeof 8 -3); //=> NaN
    console.log(typeof (8 - 3)); //=> number

//형변환
    console.log(Number('10') + Number('5')); //=> 15
    console.log(String(10) + String(5)); //=> 105

//템플릿 문자열
    let year = 2021;
    let month = 3;
    let day = 11;
    console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

    let myNumber = 3;
    function flower(x){
        return x*2;
    }
    console.log(`${myNumber}의 두 배는 ${flower(myNumber)}입니다.`);

//if문
    if (조건부분){
        동작부분
    }

    let temperature = 1;
    if (temperature <= 0){
        console.log('물이 업니다.');
    }
    else if (temperature < 100){
        console.log('물이 얼지도 끓지도 않습니다.');
    }
    else if (temperature < 150){
        console.log('물이 끓습니다.');
    }
    else {
        console.log('물이 모두 수증기가 되었습니다.');
    }

//switch문
    switch (비교할_값){
        case 조건값1:
            동작부분;
            break;
        case 조건값2:
            동작부분;
            break;
        default:
            동작부분;
    }

    let myChoice = 2;
    switch (myChoice){
        case 1:
            console.log('지코');
            break;
        case 2:
            console.log('온유');
            break;
        case 3:
            console.log('슬기');
            break;
        case 4:
            console.log('류진');
            break;
        default:
            console.log('1에서 4 사이의 숫자를 선택해주세요.');
    }

    //if문으로 변경
    if (myChoice === 1){ 
        console.log('지코');
    }
    else if (myChoice === 2){
        console.log('온유');
    }
    else if (myChoice === 3){
        console.log('슬기');
    }
    else if (myChoice === 4){
        console.log('류진');
    }
    else {
        console.log('1에서 4 사이의 숫자를 선택해주세요.');
    } //switch문은 값들을 비교할 때 자료형 엄격히 구분. switch문을 if문으로 대체할 때는 반드시 ===로 일치비교해야 함

//for문
    for (초기화부분; 조건부분; 추가동작부분){
        동작부분
    }

    for (let i = 1; i <= 10; i++){ //i는 로컬변수라 for 반복문 밖에서 사용x
        console.log(`버블티  ${i}개 먹고싶다`);
    }

//while문
    while (조건부분){
        동작부분
    }

    let i = 1;
    while (i <= 10){
        console.log(`버블티 ${i}잔 나왔습니다.`);
        i++;
    }

    let i = 30;
    while (i % 7 !== 0){
        i++;
    }
    console.log(i); //=> 35

//continue
    for (let i = 1; i<= 10; i++){
        if (i % 2 === 0){
            continue;
        }
        console.log(i);
    } //=> 1 3 5 7 9

    while (i <= 10){
        if (i % 2 !== 0){
            i++;
            continue;
        }
        console.log(i);
        i++;
    } //=> 2 4 6 8 10

//객체
    let zico = {
        name: '지코',
        bornYear: 1992,
        'born Year': 1992,
        isVeryNice: true,
        worstSong: null,
        bestSong: {
            title: '유레카',
            language: 'js'
        }
    };
    console.log(zico.bornYear); //=> 1992
    console.log(zico['born Year']); //=> 1992
    console.log(zico.bestSong.title); //=> 유레카
    console.log(zico.bestSong['title']); //=> 유레카 

//객체 수정
    let zico = {
        name: '지코',
        bornYear: 1992,
        isVeryNice: true,
        worstSong: null,
        bestSong: {
            title: '유레카',
            language: 'js'
        }
    };

    zico.name = '우사장';
    console.log(zico.name); //=> 우사장

    console.log(zico.house); //=> undefined
    zico.house = '청담동';
    console.log(zico.house); //=> 청담동

    delete zico.worstSong;
    console.log(zico.worstSong); //=> undefined

    console.log('name' in zico); //=> true

//메소드
    let zico = {
        sayHello: function(name){
            console.log(`Hello ${name}`);
        },
        sayHi: function(){
            console.log('Hi');
        },
        sayBye: function(){
            console.log('Bye');
        }
    };
    zico.sayHello('온유'); //=> Hello 온유 
    zico['sayHello']('온유'); //=> Hello 온유

//for .. in
    for (변수 in 객체){
        동작부분
    } //객체의 프로퍼티 열거하는 반복문 

    let onew = {
        name: '온유',
        bornYear: 1989,
        inVeryNice: true,
        worstSong: null,
        bestSong: 'Blue'
    }

    for (let key in onew){
        console.log(key); 
    } //=> name bornYear inVeryNice worstSong bestSong

    for (let k in onew){
        console.log(k);
        console.log(onew[k]); 
    } //=> name 온유 bornYear 1989 inVeryNice true worstSong null bestSong Blue

    let zico = {
        3: '정수3',
        name: '지코',
        1: '정수1',
        birthDay: '1992.09.14',
        2: '정수2'
    };
    for (let key in zico){
        console.log(key);
    } //=> 1 2 3 name birthDay
    //객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬. 정수형 프로퍼티에 따옴표를 붙여 문자열처럼 만들어도 정렬방식은 동일
    
//Date 객체
    let myDate = new Date();
    console.log(myDate); //이 객체를 생성한 순간의 시간이 출력됨. Thu May 18 2017 00:00:00 GMT_0900 (대한민국 표준시)

    let myDate = new Date(1000); //1970년 1월 1일 00:00:00 UTC + 1000밀리초 출력됨.

    let myDate1 = new Date('2021-06-26');
    console.log(myDate1); //=> Fri June 26 2021 00:00:00 GMT+0900 (대한민국 표준시)

    let myDate2 = new Date('2021-06-26T19:11:16');
    console.log(myDate2); //=> Fri June 26 2021 19:11:16 GMT+0900 (대한민국 표준시)

    let myDate3 = new Date(2021, 5, 26, 19, 11, 16); //month는 0부터 시작
    let myDate4 = new Date(2021, 5, 26, 19, 11);
    let myDate5 = new Date(2021, 5, 26, 19);
    let myDate6 = new Date(2021, 5, 26);
    let myDate7 = new Date(2021, 5);
    //new Date(year, month, date, hours, minutes, seconds, ms)

    console.log(myDate3); //=> Fri June 26 2021 19:11:16 GMT+0900 (대한민국 표준시)
    console.log(myDate4); //=> Fri June 26 2021 19:11:00 GMT+0900 (대한민국 표준시)
    console.log(myDate5); //=> Fri June 26 2021 19:00:00 GMT+0900 (대한민국 표준시)
    console.log(myDate6); //=> Fri June 26 2021 00:00:00 GMT+0900 (대한민국 표준시)
    console.log(myDate7); //=> Fri June 01 2021 00:00:00 GMT+0900 (대한민국 표준시)

    let myDate = new Date(2017, 4, 18, 19, 11, 16);
    console.log(myDate.getFullYear); //=> 2017
    console.log(myDate.getMonth); //=> 4
    console.log(myDate.getDate); //=> 18 (일자)
    console.log(myDate.getDay); //=> 4 (요일(일요일부터 0~6))
    console.log(myDate.getHours); //=> 19
    console.log(myDate.getMinutes); //=> 11
    console.log(myDate.getSeconds); //=> 16
    console.log(myDate.getMilliseconds); //=> 0

    let myDate = new Date(2017, 4, 18, 19, 11, 16);
    myDate.setFullYear(2002); //생성된 Date객체의 정보 수정
    myDate.setMonth(6); 
    myDate.setDate(20);

    let myDate = new Date();
    console.log(myDate.toLocaleDateString()); //myDate가 가진 날짜에 대한 정보 (년.월.일)
    console.log(myDate.toLocaleTimeString); //myDate가 가진 시간에 대한 정보 (시:분:초)
    console.log(myDate.toLocaleString); //myDate가 가진 날짜와 시간에 대한 정보 (년.월.일 시:분:초)

//배열
    let zico = [
        '유레카',
        '사람',
        '아무노래',
        '날'
    ];
    console.log(zico[2+1]); //=> 날

    let members = ['지코', '온유', '류진', '슬기', '선우'];

    console.log(members.length); //=> 5
    console.log(members['length']); //=> 5
    console.log(members[members.length - 1]); //=> 선우

//배열 수정
    member[5] = '윤아'; //member[6]일 경우 -> 5번째는 empty 되고 6번째에 윤아 들어감. 
    console.log(members[5]); //=> 윤아

    member[3] = '재효';
    console.log(members); //=> ["지코", "온유", "류진", "재효", "선우", "윤아"]

   delete members[4];
   console.log(members); //=> ["지코", "온유", "류진", "재효", empty, "윤아"]

   let members = ['지코', '온유', '류진', '슬기', '선우'];

    members.splice(4); //splice(startIndex, deleteCount, item)
    console.log(members); //=> ["지코", "온유", "류진", "슬기"]
    members.splice(1);
    console.log(members); //=> ["지코"]
    members.splice(1, 2);
    console.log(members); //=> ["지코", "슬기", "선우"]
    members.splice(1, 1, '재효', '윤아');
    console.log(members); //=> ["지코", "재효", "윤아", "류진", "슬기", "선우"]

    members.shift(); //배열의 첫 요소 삭제
    members.pop(); //배열의 마지막 요소 삭제
    members.unshift('비범'); //배열의 첫 요소로 '비범' 추가
    members.push('태민'); //배열의 마지막 요소로 '태민' 추가 

//배열에서 값 찾기
    let shinee = ['온유', '태민', '종현', '키', '민호', '태민']; 
    //array.indexOf(item)을 하면 array 배열에 item이 포함돼있는지 확인할 수 있음
    console.log(shinee.indexOf('태민')); //=> 1 (포함돼있으면 item이 있는 인덱스 리턴, 만약 여러 번 포함됐으면 처음 발견된 인덱스 리턴)
    console.log(shinee.indexOf('피오')); //=> -1 (포함돼있지 않으면 -1 리턴)
    console.log(shinee.lastIndexOf('태민')); //=> 5 (뒤에서부터 탐색)

    //array.includes(item)을 하면 array 배열에 item이 있을 경우 true, 없을 경우 false 리턴
    console.log(shinee.includes('온유')); //=> true
    console.log(shinee.includes('박경')); //=> false

//배열 뒤집기
    let shinee = ['온유', '태민', '종현', '키', '민호']; 
    shinee.reverse();
    console.log(shinee); //=> ["민호", "키", "종현", "태민", "온유"]

//for .. of
    for (변수 of 배열){
        동작부분
    }

    let influencer = ['zico', 'onew', 'taemin', 'po']
    for (let element of influencer){
        console.log(element);
    } //=> zico onew taemin po

    let myString = 'Zico';
    for (let str of myString){
        console.log(str);
    } //=> Z i c o


    for (let index in influencer){ //for in은 객체 순환에 사용. 배열에는 사용하지 않는 것이 좋음
        console.log(influencer[index]);
    }

//다차원 배열
    let zico = [[1, 2], [3, 4]];
    console.log(zico[0]); //=> [1, 2]
    console.log(zico[0][1]); //=> 2

//숫자형 메소드
    let myNumber = 0.3591;
    console.log(myNumber.toFixed(3)); //=> 0.359
    console.log(myNumber.toFixed(7)); //=> 0.3591000
    console.log(typeof myNumber.toFixed(7)); //=> string
    console.log(+myNumber.toFixed(7)); //값 앞에 +기호를 붙여주면 Number 함수와 똑같은 기능

//Math 객체
    //Math.abs(x) -> x의 절댓값 리턴
    console.log(Math.abs(-10)); //=> 10
    console.log(Math.abs(10)); //=> 10

    //Math.max -> 가장 큰 값 리턴
    console.log(Math.max(2, -1, 4, 5, 0)); //=> 5

    //Math.min -> 가장 작은 값 리턴
    console.log(Math.min(2, -1, 4, 5, 0)); //=> -1

    //Math.pow(x, y) -> x의 y승 결과값 리턴
    console.log(Math.pow(2, 3)); //=> 8

    //Math.sqrt(x) -> x의 제곱근 리턴
    console.log(Math.sqrt(25)); //=> 5

    //Math.round(x) -> x 반올림값 리턴
    console.log(Math.round(2.3)); //=> 2
    console.log(Math.round(2.6)); //=> 3

    //Math.floor(x) -> x의 버림값 리턴
    console.log(Math.floor(2.4)); //=> 2
    console.log(Math.floor(2.8)); //=> 2

    //Math.ceil(x) -> x의 올림값 리턴
    console.log(Math.ceil(2.4)); //=> 3
    console.log(Math.ceil(2.8)); //=> 3

    //Math.random -> 0 이상 1 미만의 값 랜덤 리턴
    console.log(Math.random());

//문자열
    let myString = 'Hi Onew';
    console.log(myString.length); //=> 7

    console.log(myString[3]); //=> O
    console.log(myString.charAt(3)); //=> O

    console.log(myString.indexOf('a')); //=> -1 (앞부터)
    console.log(myString.lastIndexOf('e')); //=> 5 (뒤부터)

    console.log(myString.toUpperCase()); //=> HI ONEW
    console.log(myString.toLowerCase()); //=> hi onew

    console.log(myString.trim()); //양 끝 공백 제거

    console.log(myString.slice(0, 2)); //=> Hi
    console.log(myString.slice(3)); //=> Onew
    console.log(myString.slice()); //=> Hi Onew
    //slice (start, end) 

//기본형과 참조형
    let x = 3;
    let y = x;
    console.log(x); //=> 3
    console.log(y); //=> 3
    y = 5;
    console.log(x); //=> 3
    console.log(y); //=> 5

    let x = {name: 'zico'};
    let y = x;
    console.log(x); //=> {name: "zico"}
    console.log(y); //=> {name: "zico"}
    y.birth = 1992;
    console.log(x); //=> {name: "zico", birth: 1992}
    console.log(y); //=> {name: "zico", birth: 1992}
    //기본형 -> Number, String, Boolean, NUll, Undefined (변수 = 값)
    //참조형 -> Object (변수 = 주소값)

//참조형 복사하기
    let number1 = [1, 2, 3];
    let number2 = number1.slice();
    number2.push(4);
    console.log(number1); //=> [1, 2, 3]
    console.log(number2); //=> [1, 2, 3, 4]

    let course1 = {
        title: '파이썬',
        language: 'python'
    };
    let course2 = Object.assign({}, course1);
    course2.title = '알고리즘';
    console.log(course1); //=> {title: "파이썬", language: "python"}
    console.log(course2); //=> {title: "알고리즘", language: "python"}

    let course1 = {
        title: '파이썬',
        language: 'python'
    };
    let course2 = {};
    for (let key in course1){
        course2[key] = course1[key];
    }
    course2.title = '자료구조';
    console.log(course1); //=> {title: "파이썬", language: "python"}
    console.log(course2); //=> {title: "자료구조", language: "python"}

    function cloneObject(object){
        let temp = {};
        for (let key in object){
            temp[key] = object[key];
        }
        return temp;
    }
    let course1 = {
        title: '파이썬',
        language: 'python'
    };
    let course2 = cloneObject(course1);
    let course3 = cloneObject(course1);
    course2.title = '알고리즘';
    course3.title = '객체지향';

    console.log(course2); //=> {title: "알고리즘", language: "python"}
    console.log(course3); //=> {title: "객체지향", language: "python"}
    //객체나 배열 안에 중첩해서 객체나 배열이 있는 경우에는 복사할 때 또 주소값이 복사됨




































    






















































    


























