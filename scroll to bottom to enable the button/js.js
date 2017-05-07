$(document).ready(function(){

    $('textarea').scroll(function(e){
        let top = parseInt($(this).scrollTop());
        $('div').html(top);

//if we change the text we can see the number when we scroll to the bottom and set top to be equal to the new number
        if (top == 225) {
            $('button').removeAttr('disabled');
        }
    });
});