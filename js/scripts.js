// business logic for ToDoList
function ToDoList(){
  this.task = {};
  

}

ToDoList.prototype.addTask = function(task){
  task.id = this.assignId();
  this.task[task.id] = task;
}

ToDoList.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

// business logic for Task
function Task(name,objectives,status){
  this.name = name;
  this.objectives = objectives;
  this.status = status;
}