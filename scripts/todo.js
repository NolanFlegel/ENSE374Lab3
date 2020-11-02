$(function() {

  $('ul').on('click', 'li', function() {
    $(this).toggleClass('taskFinished');
  });

  $('input[type="text"]').on('keypress', function(e) {
    if (e.which === 13) {
      let taskText = $(this).val();
      if (taskText === '') return;
      $(this).val('');
      $('ul').append('<li class="unclaimed"><input class="checkbox" type="checkbox">  ' + taskText + '</li>');
    }
  });

  $('#btnAddTask').on('click', function(e) {
      let taskText = $("#taskTextArea").val();
      $('ul').append('<li class="unclaimed"><input class="checkbox" type="checkbox"> ' + taskText + '</li>');
    
  });
});
