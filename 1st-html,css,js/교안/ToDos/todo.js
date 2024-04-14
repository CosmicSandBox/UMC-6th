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
  const temp = e.target.parentElement;
  temp.remove();
  temp.lastChild.innerText = "삭제";
  temp.lastChild.classList.remove("complete");
  temp.lastChild.classList.add("delete");
  temp.lastChild.addEventListener("click", (e) => onDelete(e));
  temp.classList.remove("todo");
  temp.classList.add("done");
  temp.firstChild.classList.remove("todoText");
  temp.firstChild.classList.add("doneText");
  doneBoard.appendChild(temp);
}
function onDelete(e) {
  const temp = e.target.parentElement;
  temp.remove();
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoObj = {
    id: Math.ceil(Math.random() * 100),
    text: e.target[0].value,
  };
  paintNode(todoObj);
});