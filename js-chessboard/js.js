function food(input) {
    let html = '<div class="chessboard">\n';

    for (let i = 0; i < input; i++) {
        html += '\n<div>';

        for (let k = 0; k < input; k++){
           if((i+k)%2!=0) {
               html += '<div class="white"></div>';
           }else {
               html += '<div class="black"></div>';
           }
        }

        html += '</div>\n';
    }
    html += '</div>';
    document.write(html);
}

food(5);