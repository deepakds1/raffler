$(document).on('submit', "#form_user", function(e){
    e.preventDefault();
    var form_data = $("#form_user").serialize();
    $.ajax({
        url: '/users',
        method: 'post',
        data: form_data,
        dataType: 'script',
        success: function(){
          $("#form_user")[0].reset();
        }
    })
})