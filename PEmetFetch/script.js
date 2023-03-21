//declaraties
//knoppen en links
let butNext = document.querySelector("a[rel='next']")
butNext.addEventListener("click", next);
let butPrev
const articleFirst = document.querySelector("article:first-child")

//counter bijhouden om te weten welke pagina getoond moet worden
//eerste pagina, index.html = 0
let current = 0

/*
LOADNEXT
Met Fetch de volgende pagina laden en aan de DOM toevoegen.
*/
function loadNext(link){
  console.log("link",link)

  fetch(link).then(function (response) {
    return response.text()

  }).then(function (data) {
    // Eerst van de fetch text-string html maken
    const parser = new DOMParser();
    const html = parser.parseFromString(data, 'text/html');

    //alleen het article selecteren van de geladen pagina
    //en niet de hele html met head en body
    const articleNew = html.querySelector("article")
    //elke article een data-nr
    // articleNew.setAttribute("data-nr",current)
    // article aan de dom toevoegen
    document.querySelector("main").appendChild(articleNew)

    //Nav overnemen van de geladen pagina
    //en nav in de dom vervangen
    let navNew = document.querySelector("nav")
    navNew.replaceWith(html.querySelector("nav"))
    //button acties aanmaken
    //eerst even checken of ze wel bestaan ...
    if(document.querySelector("a[rel='next']")){
      butNext = document.querySelector("a[rel='next']")
      butNext.addEventListener("click", next);      
    }
    if(document.querySelector("a[rel='prev']")){
      butPrev = document.querySelector("a[rel='prev']")
      butPrev.addEventListener("click", prev);
    }
    //als het artikel is geplaatst, 
    //en de nav heeft nieuwe acties
    //pagina tonen:
    articleFirst.style.setProperty("--margin", current)

  }).catch(function (error){
    console.log("error",error)
  })
}

//Prev & Next functions
function next(event){
  //counter bijhouden om te weten welke pagina getoond moet worden
  current+=1;
  //laad de nieuwe pagina
  loadNext(this.href)
  event.preventDefault()
}
function prev(event){
  //counter bijhouden om te weten welke pagina getoond moet worden
  current-=1
  //laad de nieuwe pagina
  loadNext(this.href)
  event.preventDefault()
}