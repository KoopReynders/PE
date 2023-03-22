//declaraties
//queries, knoppen, events
let butNext = document.querySelector("a[rel='next']")
butNext.addEventListener("click", next)
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
  
  //Fetch html pagina 
  //url wordt meegegeven als argument: 'link'
  fetch(link).then(function (response) {
    return response.text()

  }).then(function (data) {
    // Eerst van de fetch text-string html maken
    const parser = new DOMParser()
    const html = parser.parseFromString(data, 'text/html')

    //Toon Article
    //alleen het article selecteren van de geladen pagina
    //en niet de hele html met head en body
    const articleNew = html.querySelector("article")
    // article aan de DOM toevoegen
    document.querySelector("main").appendChild(articleNew)

    //Nav aanpassen
    //Nav overnemen van de geladen pagina
    //en default acties overschrijven
    let navNew = document.querySelector("nav")
    navNew.replaceWith(html.querySelector("nav"))
    //button acties aanmaken
    if(document.querySelector("a[rel='next']")){ //als de button bestaat in de geladen pagina, dan ...
      butNext = document.querySelector("a[rel='next']")
      butNext.addEventListener("click", next)     
    }
    if(document.querySelector("a[rel='prev']")){ //als de button bestaat in de geladen pagina, dan ...
      butPrev = document.querySelector("a[rel='prev']")
      butPrev.addEventListener("click", prev)
    }
    //als het artikel en nav is geplaatst dan pagina tonen:
    showArticle()
    

  }).catch(function (error){
    console.log("error",error)
  })
}

//Check functie

/*
SHOWARTICLE
Article tonen met een CSS animatie
met de counter current wordt de css variabele verandert
(in css staat een calc() voor de animatie)
*/
function showArticle(){
  articleFirst.style.setProperty("--margin", current)
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
