var bookNums=prompt('how many books have you read?');



if(bookNums >=5 & bookNums<12){
  document.write('<h3> Good job, youv\'e read '+bookNums+'   books</h3>');
}else if(bookNums >=12){
  document.write('<h3> Woow youv\'e read '+ bookNums+ ' books, Great job</h3>');
}else{
  document.write('<h3>You\'e read less than 5 books, please try to read more</h3>');
}

var bookRead=prompt('Did you read harry potter?');

// there is a way to change to lower case.


if(bookRead=='yes'){
  document.write('<h3>and Harry potter is one of them</h3>');
document.write('<img src="https://i2.wp.com/www.piratesandprincesses.net/wp-content/uploads/2021/01/harry-potter.jpg?fit=1000%2C600&ssl=1" width="250px">'); 
}else{
  
  document.write('<h3>I suggest you to read Harry potter</h3>');
  document.write('<img src="https://i2.wp.com/www.piratesandprincesses.net/wp-content/uploads/2021/01/harry-potter.jpg?fit=1000%2C600&ssl=1" width="250px">'); 
}


