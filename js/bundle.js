(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
