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
    // log 메소드는 여러 값을 쉼표로 구분해서 전달하면 전달받는 모든 값을 출력, dir 메소드는 여러 값을 전달하더라도 첫 번째 값만 출력 

// Dom 트리 (요소 노드에 대한 이동 프로퍼티) (html4)
    const myyTag = document.querySelector('#content');
    cosnsole.log(myyTag); //=> <div id="content">...</div>
        // Dom 트리의 부모, 자식, 형제 관계를 이용해서 태그 선택

        // 자식 요소 노드
        console.log(myyTag.children); //=> content의 4개 자식 요소 선택됨 
        console.log(myyTag.children[1]); //=> <ul id="list-1">...</ul>
        console.log(myyTag.firstElementChild); // 자식들 중 가장 첫 번째 요소 //=> <h2 id="title-1">Cat-1</h2>
        console.log(myyTag.lastElementChild); // 자식들 중 가장 마지막 요소 //=> <ul id="list-2">...</ul>

        // 부모 요소 노드
        console.log(myyTag.parentElement); //=> <body...</body>

        // 형제 요소 노드
        console.log(myyTag.previousElementSibling); // 이전 형제 //=> null
        console.log(myyTag.nextElementSibling); // 다음 형제 //=> <script src="index.js"></script>

        console.log(myyTag.parentElement.nextElementSibling); //=> 부모 요소의 형제 요소에 접근

// 모든 노드에 대한 이동 프로퍼티 
    // 위의 프로퍼티들은 노드 중에서도 요소 노드인 경우에만 존재하는 프로퍼티. 요소 노드가 아닌 다른 노드에 접근하고 싶을 땐 아래와 같은 프로퍼티 활용
    // node.childNodes / 자식 노드 / 결과 -> node의 자식 노드 모음 (NodeList)
    // node.firstChild / 자식 노드 / 결과 -> node의 첫 번째 자식 노드 하나
    // node.lastChild / 자식 노드 / 결과 -> node의 마지막 자식 노드 하나
    // node.parentNode / 부모 노드 / 결과 -> node의 부모 노드 하나 
    // node.previousSibiling / 형제 노드 / 결과 -> node의 이전 (previous) 혹은 좌측 (left)에 있는 노드 하나
    // node.nextSibiling / 형제 노드 / 결과 -> node의 다음 (next) 혹은 우측 (right)에 있는 노드 하나

// 요소 노드 주요 프로퍼티
    const cloud = document.querySelector('#list-1');
    // innerHTML
    console.log(cloud.innerHTML); // 요소 안에 있는 HTML 자체를 문자열로 리턴 (태그와 태그 사이의 줄바꿈이나 들여쓰기같은 것들도 모두 포함됨)
    cloud.innerHTML = '<li>Exotic</li>'; // 해당 요소가 수정됨 
    cloud.innerHTML += '<li>Exotic2</li>'; // 기존 HTML의 마지막 부분에 요소 추가

    // outerHTML
    console.log(cloud.outerHTML); // 해당 요소를 포함한 전체 HTML 코드를 문자열로 리턴 //=> list-1 태그가 그대로 출력 (줄바꿈, 들여쓰기, 띄어쓰기 모두 포함)
    cloud.outerHTML = '<ul id="new-list"><li>Exotic3</li></ul>'; // 새로운 HTML 코드 할당. 요소 자체가 새로운 요소로 교체됨

    // textContent
    console.log(cloud.textContent); // 요소 안에 있는 내용들 중 HTML을 제외한 텍스트만 가져옴 
    cloud.textContent = 'new text'; // 요소 안의 내용 수정. <ul id="list-1">new text</ul>
    cloud.textContent = '<li>new text</li>'; // 특수문자나 html 코드를 포함하더라도 모두 텍스트로 처리함. <li>new text</li> 모두 텍스트로 취급돼서 적용됨 

// 요소 노드 추가하기 (html5)
    const first = document.createElement('li'); // 요소 노드 만들기
    first.textContent = '처음'; // 요소 노드 꾸미기 (textContent, innerHTML ...)
    tomorrow.prepend(first); // 요소 노드 추가하기 (prepend, append, after, before) // prepend 메소드를 이용하면 메소드를 호출한 노드의 제일 첫 번째 노드로, 파라미터로 전달한 값을 추가할 수 있음 
    
    const last = document.createElement('li');
    last.textContent = '마지막';
    tomorrow.append(last); // 파라미터로 전달한 값을, 메소드를 호출한 노드의 제일 마지막 자식 노드로

    const prev = document.createElement('p');
    prev.textContent = '이전';
    tomorrow.before(prev); // 파라미터로 전달한 값을, 메소드를 호출한 노드의 앞쪽 형제 노드로 추가 

    const next = document.createElement('p');
    next.textContent = '다음';
    tomorrow.after(next); // 파라미터로 전달한 값을, 메소드를 호출한 노드의 뒤쪽 형제 노드로 추가 

    tomorrow. before ('문자열', prev); // 문자열도 전달 가능 // 여러 개의 값을 전달하면, 그 순서대로 노드를 한 번에 추가할 수 있음 

// 노드 삭제와 이동
    const today = document.querySelector('#today');
    const tomorrow = document.querySelector('#tomorrow');

    // 노드 삭제 
    tomorrow.remove();
    today.children[2].remove();

    // 노드 이동 
    today.append(tomorrow.children[1]); //=> tomorrow의 자식 요소 중에서 1번 인덱스를 today의 제일 마지막에 넣음 
    tomorrow.children[1].after(today.children[1]); //=> today의 1번 인덱스가 tomorrow의 2번 인덱스로
    tomorrow.children[2].before(today, children[1]);
    tomorrow.lastElementChild.before(today.children[1]);

// HTML 속성 다루기 (html6)
    const tomorrow = document.querySelector('#tomorrow');
    const item = tomorrow.firstElementChild;
    const link = item.firstElementChild;

    console.log(tomorrow.getAttribute('href')); // getAttribute('속성') -> 속성에 접근하기 (모든 속성 접근 가능)
    console.log(item.getAttribute('class'));
    
    console.log(tomorrow);
    console.log(tomorrow.id); // id 속성

    console.log(item);
    console.log(item.className); // class 속성

    console.log(link);
    console.log(link.href); // href 속성 
    console.log(tomorrow.href); //=> undefined

    tomorrow.setAttribute('class', 'list'); // setAttribute('속성', '값') -> 속성 추가하기
    link.setAttribute('href', 'https://www.codeit.kr'); // 속성 수정하기 

    tomorrow.removeAttribute('href'); // removeAttribute('속성') -> 속성 제거하기 
    tomorrow.removeAttribute('class');

// 스타일 (html7)
    const today = document.querySelector('#today');
    const tomorrow = document.querySelector('#tomorrow');

    today.children[0].style.textDecoration = 'line-through';
    today.children[0].style.backgroundColor = '#DDDDDD';

    today.children[1].className = 'done'; // css에 .done { } 스타일 만들어놓았을 때 

    console.log(today.classList); // classList는 클래스의 속성값을 유사배열로 다루는 프로퍼티 
    console.log(today.children[1].classList); 

    const item = tomorrow.children[1];
    item.classList.add('done'); // tomorrow의 1번 인덱스에 done 클래스가 추가됨 // 여러 클래스를 전달하고 싶다면 쉼표로 구분해서 넣기 (item.classList.add('done', 'other');)
    item.classList.remove('done'); // add와 같이 쉼표로 여러 개 전달 가능 
    item.classList.toggle('done'); // toggle은 있으면 제거하고 없으면 추가하는 메소드 (여러 개 전달 x)
    item.classList.toggle('done', true); // add의 기능만
    item.classList.toggle('done', false); // remove의 기능만 
    // 클래스 속성의 값을 통째로 바꿀 때는 className, 클래스 속성의 값을 부분적으로 수정할 때는 classList 활용 






















