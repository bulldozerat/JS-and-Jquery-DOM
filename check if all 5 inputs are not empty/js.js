$(document).ready(function(){
    $('button').click(function(){
        let check = false;

        $('input').each(function(){
            if ($('input').val() == '') {
                check = true;
            }
        });

        if (check == true) {
            alert('Fill all fields please');
        }else if (check == false) {
            alert('All fields are filled');
        }
    });
});