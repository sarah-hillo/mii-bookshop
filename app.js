alert('welcome to mii Bookshop');


var bookNums=prompt('how many books have you read?');

<<<<<<< HEAD
document.write('<section id="cc" style="text-align:center">');
=======
'<section id="cc">'
>>>>>>> ce556d7a8178a682bdd3f96dc12df1763800b152

if(bookNums >=5 & bookNums<12){
  document.write('<h3> Good job, youv\'e read '+bookNums+'   books</h3>');
}else if(bookNums >=12){
  document.write('<h3> Woow youv\'e read '+ bookNums+ ' books, Great job</h3>');
}else{
  document.write('<h3>You\'e read less than 5 books, please try to read more</h3>');
}

var bookRead=prompt('Did you read harry potter?');



if(bookRead=='yes'){
  document.write('<h3>and Harry potter is one of them</h3>');
document.write('<img src="https://i2.wp.com/www.piratesandprincesses.net/wp-content/uploads/2021/01/harry-potter.jpg?fit=1000%2C600&ssl=1" width="250px" style="border-radius: 25px;">'); 
}else{
  
  document.write('<h3>I suggest you to read Harry potter</h3>');
  document.write('<img src="https://i2.wp.com/www.piratesandprincesses.net/wp-content/uploads/2021/01/harry-potter.jpg?fit=1000%2C600&ssl=1" width="250px" style="border-radius: 25px;"><br>'); 
} 


var favouriteBook = prompt('what do you like more harry potter or lord of the rings?');
var getFavorite = function () {

while (favouriteBook !== 'harry potter' && favouriteBook !== 'lord of the rings') {
  favouriteBook = prompt('please only answer with harry potter or lord of the rings');
  
} return favouriteBook;

}
var books = prompt('how many books did you like?');

var bookResult = '';
var getBooksNum = function () {


  if (books > 15) {
    books = 15;
  }
  document.write('<br><b>You liked');
  for (var i = 0; i < books; i++) {
    bookResult= 0;

    bookResult += document.write(' <img src="https://api.time.com/wp-content/uploads/2015/06/521811839-copy.jpg" width="50px">');
  }
  return books;
}
<<<<<<< HEAD
document.write(getBooksNum());
document.write('<br >your favourite book is '+ getFavorite());
//document.write('<b>books');
document.write('</section>');
=======
document.write('books');
'</section>'
>>>>>>> ce556d7a8178a682bdd3f96dc12df1763800b152
