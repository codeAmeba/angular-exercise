import { Component } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  template: `
  <div class="container">
    <h1 class="title">Todos</h1>
    <div class="ver">3.5</div>

    <input (keyup.enter)="addTodo()" [(ngModel)]="content" class="input-todo" placeholder="What needs to be done?" autofocus>
    <ul (click)="selectState($event)" class="nav">
      <li (click)="allTodos()" id="all" class="active">All</li>
      <li (click)="activeTodos()" id="active">Active</li>
      <li (click)="completedTodos()" id="completed">Completed</li>
    </ul>

    <ul *ngFor="let todo of todos" class="todos">
      <li id="{{todo.id}}" class="todo-item">
        <input class="custom-checkbox" type="checkbox" id="ck-{{todo.id}}" (change)="checkTodo(todo.id)" [checked]="todo.completed">
        <label for="ck-{{todo.id}}">{{todo.content}}</label>
        <i (click)="removeTodo(todo.id)" class="remove-todo far fa-times-circle"></i>
      </li>
    </ul>
    <div class="footer">
      <div class="complete-all">
        <input (change)="checkedAll($event.target.checked)" class="custom-checkbox" type="checkbox" id="ck-complete-all">
        <label for="ck-complete-all">Mark all as complete</label>
      </div>
      <div class="clear-completed">
        <button (click)="removeAll()" class="btn">Clear completed (<span class="completed-todos">{{countClear()}}</span>)</button>
        <strong class="active-todos">{{countLeft()}}</strong> items left
      </div>
    </div>
  </div>
  <pre>{{ todos | json }}</pre>

  `,

  styles: [`
    .container {
      max-width: 750px;
      min-width: 450px;
      margin: 0 auto;
      padding: 15px;
    }

    .title {
      /* margin: 10px 0; */
      font-size: 4.5em;
      font-weight: 100;
      text-align: center;
      color: #23b7e5;
    }

    .ver {
      font-weight: 100;
      text-align: center;
      color: #23b7e5;
      margin-bottom: 30px;
    }

    /* .input-todo  */
    .input-todo {
      display: block;
      width: 100%;
      height: 45px;
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.3333333;
      color: #555;
      border: 1px solid #ccc;
      border-color: #e7ecee;
      border-radius: 6px;
      outline: none;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }

    .input-todo:focus {
      border-color: #23b7e5;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    }

    .input-todo::-webkit-input-placeholder {
      color: #999;
    }

    /* .nav */
    .nav {
      display: flex;
      margin: 15px;
      list-style: none;
    }

    .nav > li {
      padding: 4px 10px;
      border-radius: 4px;
      cursor: pointer;
    }

    .nav > li.active {
      color: #fff;
      background-color: #23b7e5;
    }

    .todo-list {}

    /* .todo-item */
    .todo-item {
      position: relative;
      /* display: block; */
      height: 50px;
      padding: 10px 15px;
      margin-bottom: -1px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-color: #e7ecee;
      list-style: none;
    }

    .todo-item:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    .todo-item:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    /*
      .custom-checkbox
      custom-checkbox 바로 뒤에 위치한 label의 before와 after를 사용해
      custom-checkbox의 외부 박스와 내부 박스를 생성한다.

      <input class="custom-checkbox" type="checkbox" id="myId">
      <label for="myId">Content</label>
    */

    .custom-checkbox {
      display: none;
    }

    .custom-checkbox + label {
      position: absolute; /* 부모 위치를 기준으로 */
      top: 50%;
      left: 15px;
      transform: translate3d(0, -50%, 0);
      display: inline-block;
      width: 90%;
      line-height: 2em;
      padding-left: 35px;
      cursor: pointer;
      user-select: none;
    }

    .custom-checkbox + label:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate3d(0, -50%, 0);
      width: 20px;
      height: 20px;
      background-color: #fff;
      border: 1px solid #cfdadd;
    }

    .custom-checkbox:checked + label:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 6px;
      transform: translate3d(0, -50%, 0);
      width: 10px;
      height: 10px;
      background-color: #23b7e5;
    }

    /* .remove-todo button */
    .remove-todo {
      display: none;
      position: absolute;
      top: 50%;
      right: 10px;
      cursor: pointer;
      transform: translate3d(0, -50%, 0);
    }

    /* todo-item이 호버 상태이면 삭제 버튼을 활성화 */
    .todo-item:hover > .remove-todo {
      display: block;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
    }

    .complete-all, .clear-completed {
      position: relative;
      flex-basis: 50%;
    }

    .clear-completed {
      text-align: right;
      padding-right: 15px;
    }

    .btn {
      padding: 1px 5px;
      font-size: .8em;
      line-height: 1.5;
      border-radius: 3px;
      outline: none;
      color: #333;
      background-color: #fff;
      border-color: #ccc;
      cursor: pointer;
    }

    .btn:hover {
      color: #333;
      background-color: #e6e6e6;
      border-color: #adadad;
    }
  `]
})
export class TodoComponent {

  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  content = '';
  clear: number;

  addTodo() {
    if (this.content) {
    // todos의 배열을 spread operator로 풀어서 새로운 todo를 추가함
    // trim() 메서드로 앞,뒤 공백 제거
    this.todos = [{ id: this.generateId(), content: this.content.trim(), completed: false }, ...this.todos];
    this.content = '';
    }
  }

  generateId(): number {
    // 현재 todos의 요소를 확인해서 가장 높은 숫자의 id를 확인하여 +1, 만약 todos 요소가 없으면 1
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  removeTodo(id: number) {
    // filter() 메서드 사용해서 선택한 요소의 id와 다른 id를 가진 요소만 남김
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  checkTodo(id: number) {
    // map() 메서드 사용해서 선택한 요소의 id와 같은 id라면, todo 객체를 spread operator로 풀어서
    // completed를 반전 시켜서 넣어줌
    // 선택한 id가 아니라면 기존 todo 반환
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
  }

  selectState(e) {
    if (e.target.nodeName !== 'LI') { return; }
    [...e.target.parentNode.children].forEach(item => {
      if (e.target === item) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  allTodo() {
    return this.todos;
  }

  activeTodos() {
    
  }

  completedTodos() {

  }

  countClear() {
    //  this.todos.map(todo => todo.completed);
    return this.todos.filter(todo => todo.completed).length;
  }

  removeAll() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  countLeft() {
    return this.todos.filter(todo => !todo.completed).length;
  }

  checkedAll(checked: boolean) {
    this.todos.forEach(todo => todo.completed = checked);
  }
}

