function chase() {
    let mouse = document.getElementById('mouse');
    let top = Math.floor(Math.random() * 300) + 'px';
    let left = Math.floor(Math.random() * 300) + 'px';

    mouse.style.top = top;
    mouse.style.left = left;
}

function caught() {
    let msg = ['Well done', 'Good Work', 'You caught the mouse', 'The mouse had no chance'];
    let random = Math.floor(Math.random() * 4);
    alert( msg[random] );
}
