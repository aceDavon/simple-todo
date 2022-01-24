$(document).ready(function () {
    // $('.todo_banner').css({
    //     backgroundColor: 'blue',
    //     padding: '15px',
    //     width: '95%',
    //     color: '#fff',
    //     borderRadius: '12px',
    //     margin: 'auto'
    // });

    // $('#todo_input').css({
    //     padding: '8px 5px',
    //     width: '85%',
    //     borderRadius: '8px',
    //     border: 'none'
    // });

    // $('.todo_btn').css({
    //     padding: '5px',
    //     backgroundColor: 'red',
    //     color: 'white',
    //     borderRadius: '12px',
    //     border: '1px solid white',
    //     cursor: 'pointer'
    // });

    $('.todo_btn').on('click', function () {
        if(!$('#todo_input').val()) {

            alert('please enter a todo');
        }else{
            let todo_items = $('<li></li>');
            let checkList = $('<input type="checkbox" class="check_btn" />');
            let delButton = $('<button class="delBtn">Delete</button>');
            window.localStorage.setItem('todo', $('#todo_input').val());
            todo_items.html($('#todo_input').val());

            // $(todo_items).addClass('todo_list')
    
            todo_items.append(checkList);
            todo_items.append(delButton);
            $('#todo_list').append(todo_items);
            $('#todo_input').val("");


            delButton.each(function (i, btn) { 
                $(btn).on('click', function () {
                     $(btn).parent().remove();
                });  
             });

            checkList.each(function (i, check) { 
                 $(check).on('change', function () {
                     if($(check).prop("checked")){
                        $(check).parent().css('text-decoration', 'line-through');
                     } else {
                        $(check).parent().css('text-decoration', 'none');
                     }
                 });
            });
    
        }
        
    });
});