$('.change-eaten').on('click', function (event){
    var id = $(this).data('id');
    if($(this).data('eaten') === false)
    {
        var nowEaten = true;
    }
    $.put({
        url:'/api/burger/' + id,
        data: nowEaten
    }).then(function(data){
        location.reload()
    })
})

$("#sumbitBtn").on('click', function(event) {
    var burgerName = $('#newBurger').value;
    console.log(burgerName)
    if(burgerName == ""){
        alert("please fill in the required fields of name")
    }
    else{
        $.post({
            url:'/api/burger',
            data: burgerName
        }).then(function(data){
            location.redirect('/')
        })
    }
})