$(function(){
  var $todoInput = $("[data-js='type__here']");
  var $form = $("[data-js='form']");
  var $todoList = $("[data-js='todo-list']");
  var $selectedTodo = [];


  $form.on("submit", function(e){
    e.preventDefault();
  })

  $todoInput.on("keyup", function(e){
    console.log(e);
    if($todoInput.val().length > 1 && e.keyCode === 13){
      $todoList.append("<li data-js='todo-item'>" + $todoInput.val() + "</li>");
      $todoInput.val('');
    }
  });
  // deligating to child todo items because they may not exist yet
  $todoList.on("click", "[data-js='todo-item']", function(e){
    $selectedTodo = $(e.target);
  })

  // this to delet a "todo"
  // find todo item that was click
  $todoList.on("keydown", function(e){
    //checking if delete key pressed
    if(e.keyCode === 8){
      // have item deleted that was clicked
      $selectedTodo.remove();
      }
    });
})
//press delete key
//delete todo
