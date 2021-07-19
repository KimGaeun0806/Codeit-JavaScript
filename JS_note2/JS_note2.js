// id로 태그 선택하기 (html1)
    document.getElementById('id');

    const myTag = document.getElementById('myNumber');
    console.log(myTag); //=> <div id="myNumber">0</div>
    const myTag2 = document.getElementById('btns');
    console.log(myTag2); //=> <div id="btns">...</div> 내부 요소들 전부
    // id 자리에 존재하지 않는 태그를 선택하게 되면 console에 null 리턴 

// class로 태그 선택하기
    document.getElementsByClassName('class');

    const myTags = document.getElementsByClassName('color-btn');
    console.log(myTags); //=> HTMLCollection(8), color-btn class가 있는 모든 태그들이 배열의 형태로 리턴됨 (완벽한 배열은 x -> 유사배열 (Array-Like Object)) 
    console.log(myTags[1]); //=> <button class="color-btn orange" data-color="#FFA500"></button>
    console.log(myTags.length); //=> 8
    for (let tag of myTags) {
        console.log(tag);
    }

    const myTags2 = document.getElementsByClassName('red'); //=> HTMLCollection [button.color-btm.red]
    // red같이 하나밖에 없는 class를 선택하더라도 요소 하나가 들어있는 HTMLCollection이 출력됨. 그러므로 이 태그를 선택하려면 아래처럼 0번 인덱스에 접근해야 함
    console.log(myTags[0]);
    // class 자리에 존재하지 않는 태그를 선택하게 되면 HTMLCollection [] 출력됨 

// 태그 이름으로 태그 선택하기
     document.getElementsByTagName('tag name');

     const btns = document.getElementsByTagName('button'); //=> HTMLCollection(10), 모든 button 태그 선택
     const allTags = document.getElementsByTagName('*'); // 모든 태그를 선택할 수 있음 

// 유사배열 (Array-Like Object)
    // 배열과 유사한 객체
    // 숫자 형태의 indexing 가능
    // length 프로퍼티 존재 
    // 배열의 기본 메소드 사용할 수 x (push, splice 같은)
    // Array.isArray(유사배열)은 false (isArray 메소드는 파라미터로 전달한 값이 배열인지 아닌지 평가해서 그 결과를 불린 형태 값으로 리턴)

// css 선택자로 태그 선택하기
    const myTagg = document.querySelector('#myNumber');
    console.log(myTagg); //=> <div id="myNumber">0</div>
        // 아래와 같은 결과
        const myTagg2 = document.getElementById('myNumber');
        console.log(myTagg2);

    const myTag3 = document.querySelector('.color-btn'); // color-btn 클래스가 붙은 태그들 중에서 가장 첫 번째 요소만 선택됨
    console.log(myTag3); //=> <button class="color-btn red" data-color="#FF0000"></button> 
    
    const myTagss = document.querySelectorAll('.color-btn'); // 
    console.log(myTagss); //=> NodeList(8), 모든 요소가 다 출력됨 
        // 아래와 이름은 다르지만 요소는 똑같이 출력됨 
        const myTagss2 = document.getElementsByClassName('color-btn');
        console.log(myTagss2);

// 태그 정리 !!
    document.getElementById("id"); // HTML id 속성으로 태그 선택하기 / 결과 -> id에 해당하는 태그 하나
    document.getElementsByClassName('class'); // HTML class 속성으로 태그 선택하기 / 결과 -> class에 해당하는 태그 모음 (HTMLCollection)
    document.getElementsByTagName('tag'); // HTML 태그 이름으로 태그 선택하기 / 결과 -> tag에 해당하는 태그 모음 (HTMLCollection)
    document.querySelector('css'); // css 선택자로 태그 선택하기 / 결과 -> css 선택자에 해당하는 태그 중 가장 첫 번째 태그 하나 
    document.querySelectorAll('css'); // css 선택자로 태그 선택하기 / 결과 -> css 선택자에 해당하는 태그 모음 (NodeList)

// 이벤트(Event)와 버튼 클릭 (html2)
    const btn = document.querySelector('#myBtn');
    btn.onclick = function(){
        console.log('Handsome Zico'); 
    } // 버튼 클릭하면 Handsome Zico 출력 
    // HTML에 바로 표시할 수 있음 -> <button id="myBtn" onclick="console.log('Handsome Zico')">클릭!</button>
    // 이벤트가 발생했을 때 특별한 동작을 하도록 이벤트들을 다루는 것을 이벤트 핸들링(Event Handling)이라고 함
    // 구체적인 동작들을 코드로 표현한 함수 부분을 이벤트 핸들러(Event Handler)라고 함

// window 객체 : 전역객체(Global Objects)
    console.log(window);
    console.log(window.innerWidth);
    console.log(window.innerHeight);

// DOM(문서 객체 모델, Document Object Model) (html3)
    console.log(document); //=> dom에 해당하는 html 출력됨
    console.log(typeof document); //=> object
    console.dir(document); // console.log는 태그 형태로 출력되지만, dir 메소드는 객체 형태로 프로퍼티들이 출력됨  

    const title = document.querySelector('#title'); //=> <h1 id="title">DOM(Document Object Model)</h1>

// console.log와 console.dir의 차이 
    // 출력하는 자료형이 다름 -> dir 메소드는 문자열 표시 형식으로 콘솔에 출력
    // log 메소드는 파라미터로 전달받은 값을 위주로 출력, dir 메소드는 객체의 속성을 좀 더 자세하게 출력
    // log 메소드는 여러 값을 쉼표로 구분해서 전달하면 전달받는







