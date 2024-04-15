const form = document.querySelector(".form");
const doneBoard = document.querySelector(".dones");
const del = document.querySelector(".delete");
const todoNodes = document.querySelector(".todos");

/* todoObj 라는 매개변수를 받아서 새로운 Todo 항목을 생성하고 화면에 그린다. */
function paintNode(todoObj) {
  const newTodo = document.createElement("div"); /* 새로운 div 요소를 생성(새로운 Todo 항목을 나타내는 컨테이너 역할) */
  newTodo.classList.add("todo"); /* 새로 생성된 Todo 요소에 todo 클래스를 추가한다. */
  newTodo.id = todoObj.id; /* Todo 항목의 고유한 식별자인 id를 설정 (추후에 Todo 항목을 식별하고 조작하는데 사용) */

  const newTodoText = document.createElement("div"); /* 새로운 div 요소를 생성 (Todo 항목의 텍스트 내용을 표시하는 역할) */
  newTodoText.classList.add("todoText"); /*새로 생성된 Todo 텍스트 요소에 todoText 클래스를 추가*/
  newTodoText.innerText = todoObj.text; /* Todo 항목의 텍스트 내용을 설정한다 */

  const newComplete = document.createElement("button"); /* 새로운 button 요소를 생성 (이 버튼은 Todo 항목을 완료하는데 사용할 것) */
  newComplete.classList.add("complete");  /*새로 생성된 완료 버튼에 complete 클래스를 추가(해당 클래스는 css에서 버튼의 스타일을 정의하는데 사용) */
  newComplete.innerText = "완료"; /* 완료 버튼의 텍스트를 설정 */
  newComplete.addEventListener("click", onComplete); /* 완료 버튼에 클릭 이벤트 리스너를 추가 (이벤트 발생하면 onComplete 함수가 실행) */

  newTodo.appendChild(newTodoText); /*새로 생성된 Todo 요소에 '텍스트 요소'를 자식 요소로 추가 */
  newTodo.appendChild(newComplete); /*새로 생성된 Todo 요소에 '완료 버튼'을 자식 요소로 추가 */

  todoNodes.appendChild(newTodo); /*Todo 리스트를 나타내는 부모 요소에 새로 생성된 Todo 요소를 추가 */
}

function onComplete(e) {
  const temp = e.target.parentElement; /*클릭된 요소의 부모 요소를 찾아서 'temp'에 저장 -> 클릭된 요소는 "완료"버튼 -> 해당 버튼 포함된 <div class="todo"> 요소가 temp에 저장 */
  /* e는 이벤트 객체를 의미 (여기서 click 이벤트),  target은 이벤트가 방생한 요소(여기서 사용자가 클릭한 요소) */
  temp.remove(); /* Todo 항목을 나타내는 요소를 화면에서 제거 (완료된 항목이 화면에서 사라지게 된다.) */
  temp.lastChild.innerText = "삭제"; /* Todo 항목의 마지막 자식 요소 (여기서는 "완료"버튼)의 텍스트를 "삭제"로 변경 -> 이렇게 함으로써 완료된 항목을 삭제할 수 있는 버튼으로 변경*/
  temp.lastChild.classList.remove("complete"); /* "완료"버튼의 클래스에서 "complete를 제거*/
  temp.lastChild.classList.add("delete"); /* "완료"버튼에 "delete" 클래스를 추가한다. 이로써 완료된 항목을 삭제할 수 있는 버튼으로 모양이 변경*/
  temp.lastChild.addEventListener("click", (e) => onDelete(e)); /* "삭제" 버튼에 클릭 이벤트 리스너를 추가한다. 이렇게 하면 사용자가 "삭제" 버튼을 클릭했을 때 실행될 함수가 설정된다. */
  temp.classList.remove("todo"); /* Todo 항목의 클래스에서 "todo"를 제거한다. */
  temp.classList.add("done"); /*Todo 항목에 "done" 클래스를 추가한다. 이로써 완료된 항목의 스타일이 변경된다. */
  temp.firstChild.classList.remove("todoText"); /*Todo 항목의 첫 번째 자식 요소 (여기서는 텍스트 요소)의 클래스에서 "todotext"를 제거한다. */
  temp.firstChild.classList.add("doneText"); /*Todo 항목의 텍스트 요소에 "doneText" 클래스를 추가한다. 이로써 완료된 항목의 텍스트 스타일이 변경된다. */
  doneBoard.appendChild(temp); /*Todo 항목의 텍스트 요소에 "doneText" 클래스를 추가한다. 이로써 완료된 항목이 "해낸 일" 목록으로 이동한다. */
}

/*삭제 버튼이 클릭될 때 호출되는 함수 */
function onDelete(e) {
  const temp = e.target.parentElement;  
  /* e.target -> 클릭된 요소, 즉 삭제 버튼을 가리킨다 */
  /* e.tartget.parentElement는 삭제 버튼이 속한 Todo 항목의 부모 요소를 가리킨다. */
  temp.remove(); /* Todo 항목을 DOM에서 삭제한다. */
}

/* form 요소의 submit 이벤트 리스너 */
form.addEventListener("submit", (e) => {
  e.preventDefault(); /* e.preventDefault()를 호출하여 기본 제출 동작을 방지합니다. 즉, 페이지를 새로고침하지 않습니다. */

  /* 새로운 Todo 객체인 todoObj를 생성합니다. 이 객체는 무작위로 생성된 id와 폼에 입력된 text를 가집니다. */
  const todoObj = {
    id: Math.ceil(Math.random() * 100),
    text: e.target[0].value,
  };ㅣ
  /* paintNode(todoObj)를 호출하여 새로운 Todo를 생성하고 화면에 표시합니다. */
  paintNode(todoObj);
});