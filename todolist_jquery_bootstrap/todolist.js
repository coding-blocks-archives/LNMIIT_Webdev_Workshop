$(function () {

  let tasks = []
  if (localStorage.tasks) {
    tasks = localStorage.tasks.split(',')
  }

  function showTasks() {
    $('#tasklist').empty()
    for (task of tasks) {
      $('#tasklist').append(
        $('<li>')
        .text(task)
        .attr('class', 'list-group-item')
      )
    }
  }
  showTasks()

  function addTask() {
    tasks.push($('#newtask').val())
    showTasks()
    $('#newtask').val('')
    localStorage.tasks = tasks
  }

  $('#addtask').click(() => {
    addTask()
  })

  $('#newtask').keypress((e) => {
    if (e.originalEvent.key == 'Enter') {
      addTask()
    }
  })
})
