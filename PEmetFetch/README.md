# Progressive Enhancement: HTML pagina's laden met Fetch

Als de Browser Javascript heeft dan worden de artikelen met Fetch geladen en getoond. Als er geen Javascript is, dan worden de losse HTML pagina's met de artikelen geladen.  

Klik op 'vorige of 'volgende' om een ander artikel te bekijken. Kijk wat er gebeurt als je in de dev tools van je browser Javascript aan of uit zet.

[Bekijk de demo hier](https://koopreynders.github.io/PE/PEmetFetch/)


## Todo

- `let butNext = document.querySelector("a[rel='next']")`
- `parseFromString` ?
-> feature detects ontbreken!
- `loadNext();` 
-> hier zou ik de feature detect omheen zetten: `if (fetch && queryselector) { loadNext(); }`, a la cutting the mustard

- Volgende stap? Touch implementeren om door de lijst artikelen te swipen ...
