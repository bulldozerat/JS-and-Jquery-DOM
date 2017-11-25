
let num = 0;

function createBook(a, b, c, d) {
  num++;

  let selector = $(a);
  let div2 = $(`<div id='book${num}'></div>`);
   let title = `<p class="title">${b}</p>`;
   let author = `<p class="author">${c}</p>`;
   let isbn = `<p class="isbn">${d}</p>`;
   let btn1 = '<button>Select</button>';
   let btn2 = '<button>Deselect</button>';
   selector.append(div2, title, author, isbn, btn1, btn2);

   $('button').click(function () {
     if(this.innerHTML === 'Select') {
       $('div').css({border: '2px solid blue'});
     }else{
       $('div').css({border: 'none'});
     }
   });
}
