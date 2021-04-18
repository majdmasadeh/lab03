console.log('Welcome to Cosmatica shop');
alert('Welcometo Cosmatica shop');
//var userlist=prompt('Please type your list name ');
//var userproduct=prompt('(Please type your product)');
function username()
  {
    var name = prompt('welcome to cosmatica page ... enter your name');
    return name ;
  }
alert ('welcome'+ username());

function gender()
{
  var gen = prompt ( 'please enter your gender (femal , male)');
  return gen;
}
alert ('welcome our sweeties '+gender())

function userlist (prod){
  var ask1 = prompt('Please type your product list name?');
  return ask1;
}
userlist('lips');
userlist('skincare');
console.log('user list'+ userlist);
//console.log('user product' + userproduct)


var productnumber= Number (prompt('how many products you want to order'));
for (var i=1;i<=productnumber;i++){

if(userlist =='skincare')
{
  var image = '<img src="https://anamalika.com/wp-content/uploads/2019/03/%D9%83%D8%B1%D9%8A%D9%85-%D8%A7%D8%B3%D8%A7%D8%B3-studio-fix-fluid-%D9%85%D9%86-%D9%85%D8%A7%D8%B1%D9%83%D8%A9-%D9%85%D8%A7%D9%83.jpg" alt= "skincare creams"/>';
  
  document.write(image);
  {alert('skincare crems')}

}else if(userlist =='lips'){
  var image1 = '<img src="https://www.sayidaty.net/sites/default/files/2018/12/06/4622716-206623972.jpg" alt= "lips stick"/>';
  
  document.write(image1);
  {alert('lips stick')}}
  if(userlist!=='lips'||userlist!=='skincare'){
    console.log('we will provide it soon');
  }
}
