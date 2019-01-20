$(function () {

  let tasks = []
  // if (localStorage.tasks) {
  //   tasks = localStorage.tasks.split(',')
  // }
  $.get('http://localhost:4444/', (data) => {
    if (data) {
      tasks = data
      showTasks()

    }
  })

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
    $.get('http://localhost:4444/add?task='+$('#newtask').val(''))
    $('#newtask').val('')
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
