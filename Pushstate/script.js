
/*
  Pushstate
  The HTML5 History API gives developers the ability to modify a website's URL
  without a full page refresh. This is particularly useful for loading
  portions of a page with JavaScript, such that the content is significantly
  different and warrants a new URL.
  https://css-tricks.com/using-the-html5-history-api/
*/

var button = document.querySelector('button');
console.log("dfgh",button);
var text = document.querySelector('input');
console.log("input");

/*
  Button functie
  Wordt uitgevoerd als op de  button wordt geklikt
*/
button.addEventListener("click", function(event) {
  var pushurl = url.value; //geselecteerde value uit het form fixen
  console.log("pushurl",pushurl);

  var state = { 'page_id': 1, 'user_id': 5 };
  var title = '';
  var url = 'hello-world.html';

  //history.pushState(state, title, url);
  //history.replaceState(null, null, 'hello');

  event.preventDefault(); //dus niet het formulier echt versturen met de submit button
}, false); //end form.addEventListener submit
