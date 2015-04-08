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
    });
});

$(document).on('click', "#draw", function(e){
    e.preventDefault();
    var winner_id;
    var lis = $('ul#users_list').children(':not(.winner)');
    var users = lis.map(function(){ return $(this).text()});
    var winner_user = users[Math.floor(Math.random()*users.length)];
    lis.each(function(){
        if ($(this).text() == winner_user ) {
            winner_id = $(this).data('userid');
            $(this).addClass('winner');
            $.ajax({
                url: '/users/' + winner_id,
                method: 'put',
                data: {
                    user: {
                        winner: true
                    }
                },
                dataType: 'script'
            });
        }
    });
});