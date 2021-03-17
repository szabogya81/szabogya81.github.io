/* eslint-disable no-template-curly-in-string */
// eslint-disable-next-line no-unused-vars
const quizInput = [
  // Záróvizsga
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Látja -e a Facebook a böngészőben futó JavaScripttel<br>
    létrehozott OpenGraph meta adatokat?<br><br>
    Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['nem, mert csak a html dokumentum betöltődésekor található adatokat nézi a js betöltődése nélkül',
      'nem, mert a Facebook nem támogatja az EcmaScriptet',
      'igen, mert a Facebook minden DOM változást letölt',
      'igen, mert a böngésző eleve a JavaScript-ből érkező információkat rendereli belel a html fejlécbe'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Az első válasz a helyes. A FB JS nélkül nézi a HTML-t a betöltéskor',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mely sorok tartalmaznak csak szemantikai elemeket?<br><br>
    Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['<header>, <nav>, <strong>, <aside>, <em>',
      '<main>, <footer>, <a>, <article>, <i>, <table>',
      '<article>, <b>, <main>, <figcaption>',
      '<div>, <strong>, <section >, <figure>'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A trükk annyi volt benne, hogy a strong, és em is szementikusak (a b nem)',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Melyik link fog új ablakban megnyílni?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['<a href="/" target="_newWindow()">Link</a>',
      '<a href="/_self">Link</a>',
      '<a href="/_blank" window="_new">Link</a>',
      '<a href="/_blank()" target="popup">Link</a>'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A link target attribútum _blank értékre beállítása adja a kívánt eredményt.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Az og:image meta elem milyen célt szolgál?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['A közösségi média felületén megjelenő kép elérési útvonalára utal',
      'Egy html elem képforrását jeleníti meg',
      'Javascript objektumban lehet vele képtípust megadni',
      'A képhez kötött alternatív leírás egy formája'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Egy OpenGraph meta elemről van szó, ami a kapcsolódó kép elérését tárolja.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Igaz, vagy hamis? Szabad html &lt;div> elembe &lt;svg> elemet tenni "inline" módon.<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['igaz',
      'hamis',
      'csak akkor, ha a div elemnek nincs display: flex; tulajdonsága',
      'csak akkor, ha az svg elem nem üres'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Igen, így lehet használni IE 9-től felfelé már támogatott.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Melyik nem szemantikus tag?<br><br>
       Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['b',
      'strong',
      'section',
      'em'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A b elem nem szementikus a fentiek közül csak.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mi az opengraph?<br><br>
       Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['Webes gyorsítótár',
      'A szerver és a böngésző közötti folyamatos kommunikációt biztosítja',
      'egy JavaScript Web API',
      'Metaadatok egységesítésére létrehozott protokoll, ami a közösségi felületeken való megjelenítést teszi lehetővé'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Közösségi médiában használt metaadat protokoll.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Melyik szelektor választja ki ezt az elemet?<br>
        &lt;p id="page-lead"><br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['.page-lead',
      '#page-lead',
      '&page-lead',
      '@page-lead'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A # CSS szelektor szolgál az Id alapú kiválasztásra.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Melyik a megfelelő css media query beállítás, ha azt akarom, hogy csak<br>
    600px és 900px viewport szélesség között legyen érvényes egy css szabály?<br><br>
    Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['media (min-width: 600px) and (max-width: 900px) {}',
      'media (min-width: 500px) and (max-width: 800px) {}',
      '@media (min-width: 600px) and (max-width: 900px) {}',
      '@media (min-width: 600px && max-width: 900px) {}'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Szintaktikailag így helyes: @media (min-width: 600px) and (max-width: 900px) {}',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mi a különbség a pszeudo osztályok és a pszeudo elemek szintaktikájában<br><br>
    Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['A szelektorban a pszeudo osztályok esetén egy kettőspontot, pszeudo elemek esetén kettő kettőspontot használunk',
      'A szelektorban a pszeudo osztályok esetén kettő kettőspontot, pszeudo elemek esetén egy kettőspontot használunk',
      'A szelektorban a pszeudo osztályok esetén három kettőspontot, pszeudo elemek esetén négy kettőspontot használunk',
      'A szelektorban a pszeudo osztályok esetén kötőjelet a pszeudo elemek esetén kettőpontot használunk'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Pszeudo osztályok esetén :, elemek esetén pedig ::  a helyes használat',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Melyik css property az, ami nélkül nem fognak megjelenni a before és after pszeudo elemek?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['position',
      'content',
      'display',
      'constructor'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A before, és after a content elé/után szúródik be.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mit jelent a mixin a CSS preprocesszorok esetében?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['Össze lehet vele keverni a css property-ket',
      'Több elemet tudsz egymás után felsorolni a jel segítségével',
      'JavaScriptet lehet vele beágyazni a css-ben a segítségével',
      'Újrafelhasználható preprocessorban írt kódrészleteket különíthetünk el benne'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Újrafelhasználható scss kódrészletek létrehozására szolgál.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mi a media query helyes szintaxisa a következők közül?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['media @(max-width: 900px) {}',
      'media (max-width: 900px) {}',
      '@media (maxwidth: 900px) {}',
      '@media (max-width: 900px) {}'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'A helyes szintaxis: @media (max-width: 900px) {}',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mit jelent a következő css beállítás:<br>
    display: grid;<br>
    grid-template-columns: repeat(6, 1fr);<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['Hat egyenlő magasságú sorba rendezi a child elemeket',
      'Hat egyenlő szélességű oszlopba rendezi a child elemeket',
      'Az első elem 6 egység széles lesz a többi elemhez képest',
      'Az első elem 6 egység magas lesz a többi elemhez képest'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'repeat ismétlés 6x - oszlopra, 1fr, azaz 6 egyenlő oszlop a gridben.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mi a különbség a sima for és a while között?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['A for csak tömbökön alkalmazható a while csak objektumokon',
      'csak a szintaxis, mindkettő előltesztelő ciklus, amit meg tudunk valósítani az egyikkel, azt a másikkal is',
      'a while depracted státuszú, már nem használjuk',
      'a for depracted státuszú, már nem használjuk'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Mindkettő használatos, csak más a szintaxis. A for átláthatóbb, ha a ciklusok pontos számát tudjuk.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mit jelent az Extend a Class-ok esetében?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['Ezzel jelöljük a többszörös öröklődést',
      'az extends metódus minden alkalommal lefut példányosításkor',
      'osztályok közötti öröklődées jelölésére használjuk',
      'class-ek esetében nem megengedett az extends használata'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Annak jelölésére használjuk, hogy egy osztály egy másik (ős)osztályból származik.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mit jelent az URL-ben a kettőskereszt utáni rész?<br>
    https://example.com/#contact<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['A # utáni rész az elérési utat jelzi',
      'a # jellel jelezzük, hogy a contact nevű fájlt szeretnénk megnyitni',
      'Nem értelmezzük a #-et, az oldal nem található',
      'A # paraméterrel tudunk egy oldalon belül navigálni. Itt a contact ID-jú elemhez fog vinni az oldalon belül'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Az oldalon belül a contact Id-jú elemhez navigál',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mi lesz az alábbi metódushívás visszatérési értéke?<br>
    [2, 4, 6, 8, 10].filter(item => item % 3);<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['[2, 4, 6, 8, 10]',
      '[2, 4, 8, 10]',
      '[2, 4, 8]',
      '[4, 8]'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A filter kiszűrí a 3-mal, osztható számokat a tömbből - ez csak a 6-ra igaz',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mit jelent a request kifejezés a HTTP Method-ok kapcsán?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['hozzáférést a program adatbázisához',
      'POST method esetén az autentikációt',
      'GET method esetén az autentikációt',
      'az elküldött kérést'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Az elküldött kérés a request, a válasz pedig a response.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `A szerver megkapja -e az URL parameter-eket?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['Igen',
      'Igen, de csak korlátozott számban',
      'Nem, mert ahhoz nincs hozzáférése',
      'Igen, de nagyon bonyolult a feldolgozása, így nem foglalkozunk vele'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A szerver megkapja a URL paramétereket is a kérésnél.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mit jelent a constructor a Class-ok esetében?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['Semmit, ugyanis class-eknél nincs konstruktor',
      'Azt a metódust, ami példányosításkor fut le',
      'Azt a metódust, ami minden metódushívás után lefut',
      'Azt a metódust, amit példányosítás után mindig le kell futtatnunk manuálisan'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A constructor az objektumok példányosítása során automatikusan lefutó metódus.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mit csinál a következő parancs?<br>
    git merge feature-branch-212<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['Az aktuális branch és a feature-branch-212 nevű branch fájljait összefésüli és egyesíti azok commit history-ját',
      'A main branch-be illeszti a feature-branch-212 nevű branch fájljait és egyesíti azok history-ját',
      'A feature-branch-212 nevű branch-be illeszti az aktuális branch fájljait és egyesíti azok history-ját',
      'Önmagában nem csinál semmmit'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Az aktuális branch-en hajtódik végre. A from paraméter a feature-branch-212',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mit csinál a következő parancs?<br>
    git fetch --all<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['Az összes remote branch fetch-elése',
      'Az összes local branch fetch-elése',
      'Az összes remote commit fetch-elése',
      'Az összes local commit fetch-elése'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Az összes remote branch-re fetch-et jelent.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mit jelent a deployment?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['Az applikáció tesztelése',
      'Az applikáció értékesítése',
      'Az applikáció folyamatos fejlesztése és tesztelése',
      'Az alkalmazás elérhetővé tétele a felhasználók számára'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'A deployment az elkészült alkalmazás kihelyezése, a felhasználók számára.',
  },
  {
    header1: '# JS, CSS, HTML, BS, SCSS vegyes',
    header2: 'Záróvizsga',
    question: `Mit jelent a CD (Continous Delivery)?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['Kódunk telepítése és elindítása',
      'Szoftver kiadása éles környezetbe',
      'A kódok frissítéseinek változásainak folyamatos szállítása a production környzetbe',
      'Az alkalmazás elérhetővé tétele a felhasználók számára'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A változtatások, javítások, folyamatos szállítása.',
  },
  // 1. részvizsga
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Adott a következő tömb:<br>
    const arr = [34, 65, 78, 99, 212, 1001];<br><br>
    Ebben a tömbben keresem a 78-as értéket.<br>
    Hányszor fog a lineáris, és hányszor logaritmikus 
    keresési algoritmus esetén lefutni a belső ciklus?<br><br>
    Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['6,1',
      '6,3',
      '3,3',
      '3,1'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Lineáris keresésnél az első elemtől a harmadikig kell elmennünk, logaritmikus esetben a 78-as elem pont a tömb közepe.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Az alábbi kód futtatása során mi lesz a konzolon?<br><br>
        fnDeclaration();<br>
        fnExpr();<br><br>
        function fnDeclaration() {<br>
        &nbsp;&nbsp;console.log('fnDec');<br>
        }<br><br>
        var funExpr = () => {<br>
        &nbsp;&nbsp;console.log('fnExp');<br>
        }<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['fnDec fnExp',
      'fnDec TypeError',
      'fnDec ReferenceError',
      'fnDec undefined'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Function Expression hívása a definiálás előtt ReferenceError-t eredményez. (Uncaught ReferenceError: fnExpr is not defined)',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mi lesz az arr tömb tartalma a kód lefutása után?<br><br>
        const arr = [1, 2, 3];<br>
        arr.splice(1,0,4);<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['[1, 4, 2, 3]',
      '[1, 2, 4]',
      '[1, 2, 3, 4]',
      '[1, 2, 3]'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A splice a 1. indexű helyen 0 elemet töröl, és egy elemet, a 4-et beszúrja.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Az alábbi függvény növekvő, vagy csökkenő sorrendbe rendezi az elemeket?<br><br>
        function bubbleSort(arr) {<br>
        &nbsp;&nbsp;let swapped;<br>
        &nbsp;&nbsp;do {<br>
        &nbsp;&nbsp;&nbsp;&nbsp; swapped = false;<br>
        &nbsp;&nbsp;&nbsp;&nbsp; for (let i = 0; i < arr.length -1; i += 1) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (arr[i] > arr[i + 1]) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let temp = arr[i];<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[i] = arr[i + 1];<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[i + 1] = temp;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swapped = true;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;} while (swapped)<br>
        &nbsp;&nbsp;return arr;<br>
        }<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['Csökkenő',
      'Növekvő',
      'Nem fog rendezni',
      'Error-t fog dobni.'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A bubble sort magjában látható, hogy a temp-be akkor tesszük a tömb elemet, ha az nagyobb, mint az eddigi legnagyobb.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Melyik kulcsszóval létrehozott változók esetében van hoisting?<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['var',
      'var, let, const',
      'let, const',
      'egyiknél sem'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Mindhárom esetben van, de a var esetén undefined inicializálás is.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Melyik kulcsszóval létrehozott változók kell rögtön deklaráció?<br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['var',
      'let',
      'const',
      'egyiknél sem'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Csak a const esetén, mivel annak az értéke később nem változtatható meg.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Az alábbiak közül melyik állítás igaz a függvényekre?<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['Nem lehet másik függvény visszatérési értéke',
      'Nem adhatjuk át paraméterként másik függvénynek',
      'Nem rendelhetjük hozzá változóhoz',
      'Egyik sem igaz'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Mindhárom megtehető egy függvénnyel.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Hányszor fog lefutni a ciklusmag?<br><br>
        const arr = [1, 2, 3, 4, 5];<br>
        arr[1000] = 1000;<br>
        for (const key in arr) {<br>
        &nbsp;&nbsp;if (arr.hasOwnProperty(key)) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;console.log(arr[key]);<br>
        &nbsp;&nbsp;}<br>
        }<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['5',
      '6',
      '1000',
      'Nem fut le.'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A for in ciklus csak a tömb nem üres elemein fog végigmenni, ezért 6. Az arr.lenght viszont 1001 lesz, ahogy a for of használata során is!',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mire példa az alábbi kód?<br><br>
        (function() {<br>
        &nbsp;&nbsp;console.log('example')<br>
        })()<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['IIFE',
      'Callback',
      'closure',
      'Arrow function'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Ez egy IIFE, azaz azonnal végrehajtandó függvény.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Az alábbiak közül melyik nem primitív típus?<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['number',
      'string',
      'array',
      'undefined'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Az array nem primitív típus. Primitívek: number, string, boolean, null (type of bugos object-et ad vissza), undefined, BigInt, Symbol',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mi lesz a konzolon az alábbi kód lefutása után?<br><br>
        console.log(firstName);<br>
        var firstName = 'John';<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['John',
      'ReferenceError',
      'TypeError',
      'undefined'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Var-ral létrehozott változók esetén a hoisting inicializálja is a változót undefined értékkel.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mi lesz a konzolon az alábbi kód lefutása után?<br><br>
        console.log(firstName);<br>
        const firstName = 'John';<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['John',
      'ReferenceError',
      'TypeError',
      'undefined'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Const-al hoztuk létre a változót, de a hivatkozás rá korábban történne.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mi lesz a konzolon az alábbi kód lefutása után?<br><br>
        console.log(firstName);<br>
        const firstName;<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['SyntaxError',
      'ReferenceError',
      'TypeError',
      'undefined'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Const-al hoztuk létre a változót, de nem adtunk neki kezdőértéket.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mi lesz a konzolon az alábbi kód lefutása után?<br><br>
        console.log(firstName);<br>
        let firstName;<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['SyntaxError',
      'ReferenceError',
      'TypeError',
      'undefined'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Let-tel hoztuk létre a változót, de a hivatkozás rá korábban történne.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mi lesz a függvény visszatérési értéke?<br><br>
        function logger(data) {<br>
        &nbsp;&nbsp;return <br>
        &nbsp;&nbsp;&nbsp;&nbsp;'log' + data;<br>
        }<br>
        logger('error');<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['logerror',
      'null',
      'undefined',
      'Hibát fog dobni'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A becsapós az, hogy a return utáni rész új sorban van, a JS pedig alkalmazza az automaikus ; kiegészítést, így return; lesz a visszatérés (undefined)',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Az alábbi feltételvizsgálatok milyen értéket adnak vissza?<br><br>
        1 == '1';<br>
        1 === '1';<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['true, true',
      'true, false',
      'false, true',
      'false, false'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A második vizgálatnál strict, azaz típusellenőrzés is van az értékellenőrzés mellett.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Milyen típusú a typeof visszatérési értéke?<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['string',
      'number',
      'boolean',
      'type'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'String formában adja vissza a kérdéses típust.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Melyik nevezetes algoritmus kódját reprezentálja az alábbi kód?<br><br>
        function algo(arr) {<br>
        &nbsp;&nbsp;let value = arr[0];<br>
        &nbsp;&nbsp;for(let i = 1; i < arr.length; i += 1) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;if (arr[i] < value) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value = arr[i];<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;}<br>
        &nbsp;&nbsp;return value;<br>
        }<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['Összegzés',
      'Számlálás',
      'Minimum kiválasztás',
      'Maximum kiválasztás'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Végigmegyünk a tömb elemein, és ha a soron köveztkező elem kisebb, mint az eddig legkisebb, akkor az lesz az új legkisebb.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Megírtad a bináris keresés algoritmust, de valamiért nem jól működik. Mi a baj?<br><br>
        function binarySearch(arr, search) {<br>
        &nbsp;&nbsp;let start = 0;<br>
        &nbsp;&nbsp;let end = arr.length - 1;<br>
        &nbsp;&nbsp;while (start <= end) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;const mid = Math.floor(start + end) / 2);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;if (arr[mid] === search) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;else if (arr[mid] > search) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start = mid + 1;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;else {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end = mid -1;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;}<br>
        &nbsp;&nbsp;return value;<br>
        }<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['A const mid = Math.floor((start + end) / 2) sorban nem const kell, hanem let',
      'Az arr[mid] > serach kódrésznél rossz a relációs jel',
      'A két visszatérési értéket meg kell cserélni',
      'Nincs semmi gond a kóddal'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Ha a középső elem nagyobb, mint a keresett, akkor a rendezett tömb alsó felében kell tovább keresni.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Melyik állítás igaz a tömbökre JavaScriptben?<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['A tömb mindig szekvenciális, azaz folyamatosan tartalmaz elemeket',
      'Csak adott típusú elemeket tartalmazhat',
      'Maximum 128 eleme lehet',
      'Egyik állítás sem igaz'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'A fentiek egyike sem igaz JS-ben a tömbökre.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mi lesz a konzolon az alábbi kód lefutása után?<br><br>
        const grade = 3;<br>
        switch (grade) {<br>
        &nbsp;&nbsp;case 1:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;console.log('Elégtelen');<br>
        &nbsp;&nbsp;case 2:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;console.log('Elégséges');<br>
        &nbsp;&nbsp;case 3:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;console.log('Közepes');<br>
        &nbsp;&nbsp;case 4:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;console.log('Jó');<br>
        &nbsp;&nbsp;case 5:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;console.log('Jeles');<br>
        &nbsp;&nbsp;default:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;console.log('Ez nem osztályzat');<br>
        }<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['Közepes',
      'Ez nem osztályzat',
      'Jeles',
      'Közepes, Jó, Jeles, Ez nem osztályzat'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Mivel nem szerepelnek break;-ek az egyes case-ek végén, 3 tól lefelé az összes kiírás megtörténik.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mi lesz a függvény visszatérési értéke?<br><br>
        function sample() {<br>
            &nbsp;&nbsp;console.log(true);<br>
        };<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['true',
      'false',
      'undefined',
      'Error-t fog dobni'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A függvény valójában egy eljárás - nincs benne return, ezért undefined lesz.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mi lesz a person értéke a kód lefutása után?<br><br>
        const person = {<br>
        &nbsp;&nbsp;firstName: 'John'<br>
        &nbsp;&nbsp;lastName: 'Doe'<br>
        };<br><br>
        person.firstName = 'Jane';<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['firstName: John, lastname: Doe',
      'firstName: Jane, lastname: Doe',
      'Jane',
      'Error-t fog dobni'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Const-al hoztuk létre, így új értéket nem kaphat a person - ellenben külön-külön a property-jeit megváltoztathatóak.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mi lesz a person értéke a kód lefutása után?<br><br>
        const person = {<br>
        &nbsp;&nbsp;firstName: 'John'<br>
        &nbsp;&nbsp;lastName: 'Doe'<br>
        };<br><br>
        person = {<br>
        &nbsp;&nbsp;firstName: 'Jane'<br>
        &nbsp;&nbsp;firstName: 'Doe'<br>
        };<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['firstName: John, lastname: Doe',
      'firstName: Jane, lastname: Doe',
      'Jane',
      'Error-t fog dobni'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Const-al hoztuk létre, így új értéket nem kaphat a person - ellenben külön-külön a property-jeit megváltoztathatnánk.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mikor ad a JavaScript null értéket egy változónak?<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['Var kulcsszóval létrehozott változónak, ha nem adunk meg értéket',
      'Függvény visszatérési értékének, ha nem használunk return kulcsszót',
      'Függvény visszatérési értékének, ha nem adunk meg értéket a return kulcsszó után',
      'Csak akkor, ha magunk adunk null-t egy változónak.'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'A fentiek egyike sem igaz JS-ben a tömbökre.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Min tudok végigiterálni a for in ciklus segítségével?<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['Objektum tulajdonságain (azaz a property name-eken)',
      'Objektum tulajdonságainak az értékén',
      'Tömb elemein, azaz az értékeken',
      'Semmin'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A for in segítségével egy objektum kulcsait járhatjuk be pl.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Valid -e az alábbi for header? Ha nem, miért nem? Ha igen, miért igen?<br>
        for(;;) {<br>
        }<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['Igen, ez egy végtelen ciklus',
      'Igen, de soha nem lép be a ciklusmagba',
      'Nem, szintaktikailag hibás',
      'Nem, mert üres a ciklusmag'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Szintaktikailag korrekt. A for-ban bármelyik tag elhagyható - végtelen ciklust eredményez a fenti.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mi lesz az arr tömb tartalma a kód lefutása után?<br><br>
        const arr = [435, 567, 8, 435, 345, 677];<br>
        arr.splice(0,0,0);<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['[]',
      '[0]',
      '[0, 435, 567, 8, 435, 345, 677]',
      '[435, 567, 8, 435, 345, 677]'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A splice a 0. indexű helyen 0 elemet töröl, és egy elemet, a 0-át beszúrja.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Mi lesz az arr1 tartalma?<br><br>
        const arr1 = [1, 2, 3];<br>
        const arr2 = arr1;<br>
        arr2.push(4);<br>
        <br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['[1, 2, 3]',
      '4',
      '[4]',
      '[1, 2, 3, 4]'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Az arr2 az arr1-el azonos címre, objektumra hivatkozik. Az arr2-be rakott új elem, így az arr1-ben is megjelenik.',
  },
  {
    header1: '# JS, CSS, HTML vegyes',
    header2: '1. részvizsga',
    question: `Melyik állítások igazak a let, és const kulcsszóval deklarált változókra?<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['Nem lehet őket újradeklarálni',
      'Lokális hatókörűek',
      'Inicializálás előtt elérhetők.',
      'Nem lehet újrainicializálni őket'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Nem deklarálhatóak újra, blokk hatókörűek. A let-re nem igaz az utolsó kettő állítás.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Melyik html elem jelenik meg biztosan block típusú elemként alapértelmezetten a legtöbb böngészőben?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['<div>',
      '<span>',
      '<button>',
      '<a>'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A div blokk szintű elem csak a fentiek közül.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Mire ajánlott használni az aside HTML elemet?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['A fő tartalmi résztől logikailag eltérő tartalom létrehozására',
      'Felső, vagy alsó menüsáv megjelenítésére',
      'Lábléc megjelenítésére',
      'Nincs ilyen HTML elem'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Az &ltaside> elem mellék/eltérő tartalom megjelenítésére való.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Melyik elemet érdemes a &lt;body> tag közé tenni?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['<div>',
      '<meta>',
      '<style>',
      '<link>'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A div az egyetlen a fentiek közül, ami a body-ba kerül. (a többi a &lt;head> részbe)',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `A navigációt melyik szemantikus elemben érdemes elhelyezni?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['nav',
      'navigation',
      'footer',
      'section'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A nav az a szemantikus elem, amiben a navigációt elhelyezzük',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Mi a &lt;div> a html-ben?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['sign',
      'attribute',
      'property',
      'tag'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'A div egy html tag - elemek csoportosítására használjuk.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Érvényes -e beletenni egy &lt;h1> elemet egy &lt;h2> elembe?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['nem',
      'igen',
      'Akkor, ha a <header> tagben vannak',
      'Akkor, ha a <head> tagben vannak'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Nem a h1 felsőbb szintű, sőt SEO szempontból az egyetlen h1 tag a szerencsés',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Melyik link fog új ablakban megnyílni?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['<a href="https://w3schools.com" target="_blank">Visit W3Schools</a>',
      '<a href="https://w3schools.com">Visit W3Schools</a>',
      '<a href="https://w3schools.com" window="_new">Visit W3Schools</a>',
      '<a href="https://w3schools.com" target="popup">Visit W3Schools</a>'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A link target attribútum _blank értékre beállítása adja a kívánt eredményt.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Az alábbiak közül melyik érvényes beviteli mező?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['string',
      'boolean',
      'password',
      'phone'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A password típus létezik. Ezen felül még.: button, checkbox, color, date, datetime-local, email, file, hidden, radio, range, reset, search, submit, tel, text, time, url, week',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Igaz, vagy hamis? Szabad html elembe &lt;svg> elemet tenni "inline" módon.<br>
        &lt;div><br>
        &nbsp;&nbsp;&lt;svg></svg><br>
        &lt;/div><br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['igen',
      'nem',
      'csak <noscript> tagek között',
      'csak a dokumentum <head> részében'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Igen, így lehet használni IE 9-től felfelé már támogatott.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `A következők közül melyik single tag (nem használunk záró tag-et)?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['br',
      'html',
      'span',
      'li'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A fentiek közül csak a br self-closed. Hasonlóan pl. még: area, base, col, command, embed, hr, img, input, keygen, link, menuitem, meta, param, source, track, wbr',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Melyik szelektor választja ki csak az első li elemet?<br>
        &lt;ul class="menu"><br>
        &nbsp;&nbsp;&lt;li></li><br>
        &nbsp;&nbsp;&lt;li></li><br>
        &lt;/ul><br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['.menu li:first-child',
      '.menu li[1]',
      '.menu li',
      'li:last-child'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A :first-child szelektor azt az elemet választja ki, ami első gyermeke a szülőjének.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Melyik értéket veheti fel a display tulajdonság?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['float',
      'blocked',
      'flex',
      'root'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A fentiek közül csak a felx érvényes display property érték.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Melyik CSS property-t használjuk szöveg méretének a megadásához?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['font-style',
      'text-size',
      'text-style',
      'font-size'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'A font-size property segítségével adhatjuk meg a betűméretet.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `CSS-ben adott egy szabály? "padding: 22px 20px 10px 12px". Mennyi a bal oldali behúzás mértéke?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['12px',
      '22px',
      '10px',
      '20px'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A padding shorthand megadásnál az értékek sorban: top, right, bottom, left.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Melyik szelektor választja ki ezt az elemet?<br>
        &lt;p id="page-lead"><br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['#page-lead',
      '.page-lead',
      '[page-lead]',
      'page-lead'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A # CSS szelektor szolgál az Id alapú kiválasztásra.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Melyik szelektor választja ki a belső span elemet?<br>
        &lt;p id="page-lead"><br>
        &nbsp;&nbsp;&lt;span class="title"></span><br>
        &lt;/p><br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['#page-lead .title',
      '#page-lead.title',
      '#page-lead title',
      '.page-lead .title'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A # Id szeketor választja ki a p elemet, azon belül (szóköz a szelektorok között) pedig . class szelektor a title class-ű span-t',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Hogyan választod ki az összes p elemet egy div-en belül?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['div.p',
      'div + p',
      'div p',
      'div> .p'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A szóközzel lehet jelezni egy elemen belüli elemet kiválasztani CSS-ben.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Melyik CSS tulajdonság segítségével lehet a flex konténeren belül az elemeket a vízszintes tengely mentén középre igazítani?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['align-items',
      'justify-self',
      'justify-content',
      'align-self'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Alapértelmezetten (row flex-direction) a main-axis a horizontális, ennek mentén a justify-content igazítja az elemeket.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Hogyan állítjuk be a háttérszínét minden h1 elemnek fehérre?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['h1 { background-color: #ffffff; }',
      'all.h1 { background-color: #ffffff; }',
      'h1.all { background-color: #ffffff; }',
      'all > h1 { background-color: #ffffff; }'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A h1 szelektor minden h1-re vonatkozik, nem kell semmilyen all mellé/elé.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Melyik az alapértelmezett position?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['static',
      'absolute',
      'relative',
      'fixed'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Alapértelmezetten a position értéke static.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Melyik változó típusra igaz, hogy nem tudom módosítani, de ha tömb az értéke, akkor a tömb elemeit módosíthatom?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['const',
      'let',
      'var',
      'Object'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A const-al létrehozott változónak nem adhatunk új értéket, de ha pl. tömb/objektum, akkor annak elemeit/tulajdonságait módosíthatom.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Mik a callback függvények?<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['Amiket más függvényeknek adunk át paraméterként',
      'Amiket HTTP kéréseknél használunk',
      'Amiknek nincs visszatérési értéke',
      'Amik arrow funtion-ök és nincs hozzájuk változónév rendelve'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Callback funtion-öknek nevezzük azokat a függvényeket, amiket más függvényeknek adunk paraméterül. Aminek átadjuk, azt pedig higher-order funtion-nek.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Melyik nevezetes algoritmus kódját reprezentálja az alábbi kód?<br><br>
        function algo(arr) {<br>
        &nbsp;&nbsp;let value = arr[0];<br>
        &nbsp;&nbsp;for(let i = 1; i < arr.length; i += 1) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;if (arr[i] < value) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value = arr[i];<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;}<br>
        &nbsp;&nbsp;return value;<br>
        }<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['Összegzés',
      'Számlálás',
      'Minimum kiválasztás',
      'Maximum kiválasztás'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Végigmegyünk a tömb elemein, és ha a soron köveztkező elem kisebb, mint az eddig legkisebb, akkor az lesz az új legkisebb.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Hány elemű lesz a filter metódus által visszaadott tömb?<br>
        [NaN, null, undefined, '', 0, false, {}].filter(item => item);<br><br>
        Adja meg a legjobb választ az alábbi kérdésre!`,
    options: ['7',
      '6',
      '4',
      '1'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'A fenti tömbből, csak a {} (üres objektum) tér vissza true-val a filter-ben, ez lesz az egyetlen elem az eredmény tömbben.',
  },
  {
    header1: '# JS, CSS, SCSS, Bootstrap, HTML vegyes',
    header2: '3. részvizsga - éles',
    question: `Mi lesz az arr tömb tartalma a kód lefutása után?<br><br>
        const arr = [435, 567, 8, 435, 345, 677];<br>
        arr.splice(0,0,0);<br><br>
        Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['[]',
      '[0]',
      '[0, 435, 567, 8, 435, 345, 677]',
      '[435, 567, 8, 435, 345, 677]'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A splice a 0. indexű helyen 0 elemet töröl, és egy elemet, a 0-át beszúrja.',
  },
  // JS, CSS, HTML, Bootstrap, SCSS vegyes - 3. részvizsga
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `<p skip="true">Elérhető az i változó a ciklus után?<br><br>for (let i = 0; i &lt; 2; i++) {<br>&nbsp; &nbsp; console.log(i);<br>}<br>console.log(i);</p>
        <br>

Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['Nem',
      'Nem, mert function scope -ú.',
      'Igen',
      'Igen, mert lehet módosítani az értékét.'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Az i ebben az esetben csak a ciklusban érhető el, mert block-scoped, azaz a {} jelek között él.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `<p>Miért a [6] lesz a kimenete az alábbi kódnak?</p><pre>console.log( [1, 3, 5, 6, 7].filter( num =&gt; num % 2 === 0 ) );</pre>
        <br>

Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['Mert a szűrésnél a 6 az egyetlen szám, ami 2 -vel osztva 0 maradékot ad.',
      'Mert a 6 a negyedik eleme a tömbnek.',
      'Mert ha megszorzom 2 -vel a hatot és osztom nullával, akkor 1 marad.',
      'Mert a 6 a 3 -as indexű eleme az eredeti tömbnek és a filter mindig azt adja vissza.'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A filter úgy működik, hogy azt a számot adja vissza, ami 2 -vel osztva 0 maradékot ad.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `Melyik elem self-closed elem az alábbiak közül?
        <br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['input',
      'span',
      'h2',
      'form'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Az input self closed elem.<br>Például: &lt;input name="hobby" type="text">',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `Melyik scss változó van létrehozva helyesen?
        <br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['$primary-color: #333;',
      '#primary-color: #333;',
      '~primary-color: #333;',
      '$primary-color: 333;'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Mindig $ jellel kezdünk és a hexadecimális színek elé # teszünk.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `<p>Melyik két technológiára lesz szükségem, ha az alábbi gombokat szeretném megjeleníteni?</p><pre>&lt;div class="btn-group"&gt;
    &lt;button class="btn btn-info"&gt;
        &lt;i class="fa fa-eye"&gt;&lt;/i&gt;
    &lt;/button&gt;
    &lt;button class="btn btn-danger"&gt;
&nbsp; &nbsp; &nbsp; &nbsp; &lt;i class="fa fa-trash"&gt;&lt;/i&gt;
&nbsp; &nbsp; &lt;/button&gt;
&lt;/div&gt;</pre><br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['bootstrap font-awesome',
      'bootstrap angular',
      'angular json-server',
      'jquery angular'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A gombok formázásához bootstrap, az ikonokhoz font-awesome kell.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: '<p>Melyik Bootstrap osztállyal tudok az alábbi div -nek 3em jobb margót adni?</p><pre>&lt;div class="btn-group"&gt;&lt;/div&gt;</pre><br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['mr-3',
      'mt-3',
      'mb-3',
      'margin-right-3'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Az mr osztálok állítanak be jobb margót.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: 'Miben különbözik az arrow function a hagyományos JAVASCRIPT függvényektől?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['Nem bindolja a thist.',
      'Bindolja a thist.',
      'Thiseli a bindot.',
      'Semmiben.'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Nem bindolja, azaz nem köti a this -t. Ennek következtében például eseményeknél nem változik meg a this értéke.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `<p>Miért 'hello' lesz a kimenete az alábbi kódnak?</p><pre>var message = 'hello';
const test = () =&gt; {
    const message = 'hello';
    console.log(this.message);
}
test();</pre><br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['Mert a var kulcsszó a window -hoz köti a message változót.',
      'Mert a függvényt a const message tartalmát írja ki.',
      'Mert az arrow function bindolja a this -t.',
      'Mert a két változó egyforma értékű, ezért mindegy melyiket írja ki a függvény és úgy döntött, hogy inkább a lokálist írja ki.'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Az arrow function -on belül a window a this, és a var kulcsszóval létrehozott változó a window változója lesz.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `<p>Az alábbi bootstrap -pel formázott HTML kód hatására hány kártya lesz egymás mellett az első sorban mobil nézetben?</p><pre>&lt;div class="row"&gt;
    &lt;div class="card col-4"&gt;&lt;/div&gt;
&nbsp; &nbsp; &lt;div class="card&nbsp;col-4"&gt;&lt;/div&gt;
&nbsp; &nbsp; &lt;div class="card&nbsp;col-2"&gt;&lt;/div&gt;
&nbsp; &nbsp; &lt;div class="card&nbsp;col-4"&gt;&lt;/div&gt;
&nbsp; &nbsp; &lt;div class="card&nbsp;col-4"&gt;&lt;/div&gt;
&lt;/div&gt;</pre><br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['3',
      '4',
      '2',
      '5'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A 12 oszlop miatt 3 fér ki, 2 + 2 + 4, a következő 4 már nem.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `<p>Mi lesz a user értéke a művelet után?</p><pre>let user = {name: 'Pisti'};
user = ({...user, id: 4});</pre><br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['{id: 4, name: \'Pisti\'}',
      '{name: \'Pisti\'}',
      '{id: 4}',
      '{id: 4, name: \'Sándor\'}'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A kezdeti, csak name property-vel (value: Pisti) rendelkező user-t kiegészítjük az id property-vel. (value: 4)',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `Hány h1 tag lehet egy html oldalon belül
        <br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['1',
      'akármennyi',
      'ahány article tag',
      'ahány header tag'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A h1 elemek száma nem függ sem az article sem a header tag-ektől. Egy oldalon akármennyi lehet.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `Mit használnál abban az esetben, ha különböző breakpointoknál
más-más képet kellene betölteni? A lehető leghatékonyabb és hibatűrő megoldást kell választani!<br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['az img tag srcset tulajdonságát adnám meg',
      'A picture taget használnám',
      'Javascriptel figyelném a screen-t és az img tag',
      'css background image-et használnék, és media queryket'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Amennyiben egy adott kép különböző részleteit akarjuk használni, vagy eltérő képeket különböző töréspontokon a picture tag a legszerencsésebb választás. Az src-set-et akkor érdemes használni, ha ugyanazok kép más méretű verzióira van szükségünk.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `Melyik két css tulajdonság megadásával tudom egy flex div-en belül az elemeket mind vertikálisan, mind horizontálisan középre igazítani?
        <br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['align-items, text-align',
      'position, text-align',
      'align-items, justify-content',
      'text-align, justify-content'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Flex típusú elemnél a horizontális és a vertikális pozícionálást mindig ezen két tulajdonsággal oldjuk meg.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `A html elemnél a font size: 16px. Hány pixel széles lesz a bal oldali margó egy elemnél, ha az alábbi CSS kódot látjuk:
margin: 1rem .25rem .5rem;<br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['4',
      '8',
      '16',
      '2'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A margó értékek: felső jobb-bal, alsó<br>A 16px-nek a negyede 4px.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `Mi lesz az num értéke?<br>
function fn(a) {<br>
  &nbsp;&nbsp;if (arguments.length == 2) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;return arguments[0] + arguments[1];<br>
  &nbsp;&nbsp;} else {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;return function(b) { return a + b; };<br>
  &nbsp;&nbsp;}<br>
}<br>
const num = fn(2)(3)<br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['2',
      '3',
      '5',
      '6'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Egyszerűen csak meghívtuk a visszatérési értékként megadott függvényt is. 2 + 3 = 5',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `Mi lesz az alábbi művelet eredménye?
{} === {}<br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['true',
      'false',
      'Hibát dob',
      'undefined'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Két objektum sosem lesz egyenlő. Más memóriaterületen vannak.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `Hány elemű lesz a filter metódus által visszaadott tömb?<br>
[NaN, null, undefined, '',0, false, {}].filter(item => item)<br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['7',
      '6',
      '4',
      '1'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'A NaN, null, undefined, \'\',0, false értékek feltételvizsgálatban mindig false-t adnak. Minden objektum, még ha üres is true-t. Tehát egyedül az üres objektum lesz a tömbben.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `Mennyi lesz a tömb hossza?<br>
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
<br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['0',
      '1',
      '2',
      '3'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Mivel beállítottuk 0-ra, ezzel törölve az elemeket, ezért a hossz 0 lesz.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: `Mi lesz a konzolon az alábbi kód lefutása után?<br>
const user = {<br>
    &nbsp;&nbsp;name: "John",<br>
    &nbsp;&nbsp;getName(){<br>
       &nbsp;&nbsp;&nbsp;&nbsp;return this.name;<br>
    &nbsp;&nbsp;},<br>
  };<br>
  var name = "Jane";<br>
  const getUserName = user.getName;<br>
  console.log(getUserName());<br>Válaszd ki az EGYETLEN megfelelő választ!`,
    options: ['Jane',
      'John',
      'Error',
      'undefined'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A user objektum getName metódusát kimentettük egy külön  változóba, ami a globális környezetben van. HA ez meghívom a this a globális this, tehát a Window object. A var-al létrehozott változók a Window property-jeként megjelennek. Mivel a name változó értéke "Jane" ez lesz a konzolon.',
  },
  {
    header1: '# JS, CSS, HTML, Bootstrap, SCSS vegyes',
    header2: '3. részvizsga',
    question: 'JavaScriptben minek van [[Prototype]] tulajdonsága?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['Minden funcion-nek',
      'Minden Object objektumnak',
      'semminek',
      'Minden egyes objektumnak'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Belső [[Prototype]] tulajdonsága minden objektumnak van. NEM összekeverendő a prototype-al, ami a függvényeknek.',
  },
  // 1. JS - Változók
  {
    header1: '1. JavaScript haladó - Változók, függvények és tömbök',
    header2: 'Változók 1 / 3',
    question: 'Melyik kulcsszóval létrehozott változók esetében van hoisting?<br>Válaszd ki az ÖSSZES megfelelő választ!',
    options: ['var',
      'let',
      'const',
      'Egyiknél sincs'],
    results: 'A, B, C',
    result: 123,
    boolres: [true, true, true, false],
    answer: 'Mind a háromnál van hoisting, a különbség annyi,<br>hogy var esetében a változó inicializálódik is undefined kezdőértékkel.',
  },
  {
    header1: '1. JavaScript haladó - Változók, függvények és tömbök',
    header2: 'Változók 2 / 3',
    question: 'Melyik kulcsszóval létrehozott változó esetében nem megengedett a reassignement (újra értékadás)?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['var',
      'let',
      'const',
      'Mindegyiknél megengedett'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A const immutable bindingot hoz létre, nem lehet újra értéket adni a változónak.',
  },
  {
    header1: '1. JavaScript haladó - Változók, függvények és tömbök',
    header2: 'Változók 3 / 3',
    question: 'Melyik állítások igazak a let, és const kulcsszóval deklarált változókra?<br>Válaszd ki az ÖSSZES megfelelő választ!',
    options: ['nem lehet őket újradeklarálni',
      'blokk hatókörűek',
      'inicializálás előtt nem elérhetőek',
      'nem lehet új értéket adni nekik'],
    results: 'A, B, C',
    result: 123,
    boolres: [true, true, true, false],
    answer: 'Egyedül a const kulcsszóval létrehozott változóknál nem engedélyezett a reassignment (új értéket adni a "= " operátorral).',
  },
  // 1. JS - Függvények
  {
    header1: '1. JavaScript haladó - Változók, függvények és tömbök',
    header2: 'Függvények 1 / 3',
    question: 'Hogy hívják azt a függvényt, amit más függvénynek adunk át paraméterként?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['callback function',
      'arrow function',
      'higher order function',
      'IIFE'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Azt a függvényt, amelyet másik függvénynek adunk át paraméterként egyezményesen callback functionnek hívjuk.<br>Azt pedig, amelyik ezzel dolgozik, higher order functionnek.<br>Az arrow function  egy újabb szintaxis function expression létrehozására, illetve rendelkezik néhány speciális tulajdonsággal.<br>Az IIFE (Immediately Invoked Function Expression - Azonnal Meghívott Függvény Kifejezés) segítségével oylan függvényeket tudunk írni, ami a definiálásakor rögtön le is fut.',
  },
  {
    header1: '1. JavaScript haladó - Változók, függvények és tömbök',
    header2: 'Függvények 2 / 3',
    question: 'Melyik állítások helyesek a JavaScript memóriakezelésével kapcsolatban?<br>Válaszd ki az ÖSSZES megfelelő választ!',
    options: ['A Heap rendezetlen memóriaterület',
      'A Stackben tárolódnak az objektumok',
      'A Heapben tárolódnak a primitívek',
      'A JavaScriptben automatikus a szemétgyűjtés'],
    results: 'A, D',
    result: 14,
    boolres: [true, false, false, true],
    answer: 'A Heap egy rendezetlen nagyméretű memóriaterület, ahol az objektumok tárolódnak.<br>A Stack mérete sokkal korlátozottabb, a primitívek itt tárolódnak.<br>A JavaScriptben a szemétgyűjtés automatikus. A Garbage Collector munkájába nem tudunk közvetlenül beleavatkozni.',
  },

  {
    header1: '1. JavaScript haladó - Változók, függvények és tömbök',
    header2: 'Függvények 3 / 3',
    question: 'Melyik állítás igaz az arrow functionre?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['nem bindolja a this-t',
      'a paramétert/paramétereket  kötelező zárójelbe tenni',
      'objektum nem szerepelhet visszatérési értékként',
      'mindig használnunk kel la return utasítást a függvényen belül'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Az arrow function nem köti a saját thist ezért ne használjuk objektum metódusaként.<br>Amennyiben csak egy darab paraméter van, azt nem kötelező zárójelbe tenni.<br>Arrow function esetében, akárcsak hagyományos függvényeknél, bármilyen típusú adat lehet visszatérési érték.<br>Return utasítást nem kötelező használni, lehet implicit visszatérési értékünk.',
  },
  // 1. JS - Tömbök
  {
    header1: '1. JavaScript haladó - Változók, függvények és tömbök',
    header2: 'Tömbök 1 / 3',
    question: 'Melyik metódus módosítja az eredeti tömböt?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['forEach()',
      'map()',
      'reduce()',
      'egyik sem'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'A fenti metódusok az eredeti tömböt nem módosítják, azaz nem mutálják ellenben a push(), pop(), shift(), unshift() metódusok például igen.<br>Érdemes mindig olyan megoldásokra törekednünk, amelyek az eredeti tömböt nem módosítják.',
  },
  {
    header1: '1. JavaScript haladó - Változók, függvények és tömbök',
    header2: 'Tömbök 2 / 3',
    question: 'Az alábbi metódushívásnak mi lesz a visszatérési értéke?<br>[0, null ,undefined, \'\'].filter(item => item)<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['[ ]',
      '[0]',
      '[0, null ,undefined, \'\']',
      '[null, \'\']'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Üres tömböt fogok visszakapni, mert feltételvizsgálatnál mind a 0, a null, az undefined, és az üres string is false-t ad vissza.',
  },
  {
    header1: '1. JavaScript haladó - Változók, függvények és tömbök',
    header2: 'Tömbök 3 / 3',
    question: 'Mi lesz a value értéke? A 0 paraméter csak a kezdőértéket állítja be?<br>&emsp; const value = [{v: 1}, {v: 2}, {v: 3}].reduce(<br>(accumulator, currentValue) => accumulator + currentValue.v, 0)<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['1',
      '2',
      '3',
      '6'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'A reduce jelen esetben nem csinál mást, mint hogy összeadja a tömbben lévő objektumok v tulajdonságainak az értékét.<br>A kezdőértéket 0-ra állítjuk, és az accumulator-ban ehhez folyamatosan hozzáadjuk a soron lévő objektum v tulajdonságának értékét.',
  },
  // 2. JS - Szövegek
  {
    header1: '2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
    header2: 'Szövegek 1 / 3',
    question: 'Mi lesz a b értéke a függvényen belül?<br>function restParameter(a, ...b) {<br>&emsp; //...<br>}<br>restParameter(1, 2, 3, 4, 5);<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['2',
      '[1]',
      '[2, 3, 4, 5]',
      '[1, 2, 3, 4, 5]'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Jelen esetben rest paramétert használtunk.<br>Az a értéke 1 lesz, míg a b értéke az összes többi paraméter tömbösítve, tehát: [2, 3, 4, 5].',
  },

  {
    header1: '2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
    header2: 'Szövegek 2 / 3',
    question: 'Az alábbi kód lefutása után mi lesz a konzolon?<br>const age = { age: 33 }<br>const name = { firstname: \'John\', lastname: \'Doe\'}<br>console.log({...name, ...age })<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['{ firstname: \'John\', lastname: \'Doe\', age: 33 }',
      '[ firstname: \'John\', lastname: \'Doe\', { age: 33 } ]',
      '[ { firstname: \'John\', lastname: \'Doe\'}, { age: 33 } ]',
      '[ \'John\', \'Doe\', 33 ]'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Két objektumot fűztünk össze.<br>A kimeneten egy olyan új objektum lesz, amely mind a kettő tulajdonságait tartalmazza.',
  },
  {
    header1: '2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
    header2: 'Szövegek 3 / 3',
    question: 'Melyik kifejezés nem lenne helyes egy konzolra való kiíráskor, amennyiben a kiinduló kód a következő:<br>const a = 10<br>const b = 20<br>const sum = (firstNumber, secondNumber) => firstNumber + secondNumber <br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['érték: ${a + b}',
      'érték: ${sum(a, b)}',
      'érték: ${sum(firstNumber, secondNumber)}',
      'érték: ${sum(10, 20)}'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A firstNumber és a secondNumber a paraméterek nevei, csak függvényen belül használhatom őket.<br>A függvényen kívül nem léteznek, tehát itt ReferenceError-t kapunk.',
  },
  // 2. JS - Számok, és a Math objektum
  {
    header1: '2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
    header2: 'Számok, és a Math objektum 1 / 3',
    question: 'Mi lesz a két visszatérési érték az alábbi esetekben?<br>isNaN(\'value\')<br>Number.isNaN(\'value\')<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['true, true',
      'true, false',
      'false, true',
      'false, false'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A globális isNaN() loose equality-t használ, addig a Number.isNaN() strict equality-t, tehát a típust is vizsgálja nem csak az értéket.',
  },
  {
    header1: '2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
    header2: 'Számok, és a Math objektum 2 / 3',
    question: 'Az alábbiak közül milyen számrendszerbeli számokkal tudunk dolgozni JavaScriptben?<br>Válaszd ki az ÖSSZES megfelelő választ!',
    options: ['bináris (2)',
      'oktális (8)',
      'decimális (10)',
      'hexadecimális (16)'],
    results: 'A, B, C, D',
    result: 1234,
    boolres: [true, true, true, true],
    answer: 'Mindegyik helyes megoldás volt.<br>Alaphelyzetben 10-es számrendszerbeli számokkal dolgozunk, azonban 0b, 0o, 0x előtagokkal megadott számok automatikusan a bináris, oktális, és hexadecimális számrendszerbe fognak tartozni.',
  },
  {
    header1: '2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
    header2: 'Számok, és a Math objektum 3 / 3',
    question: 'Maximum mekkora értéket vehetnek fel a BigInt típusú számok?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['A Number.MAX_SAFE_INTEGER segítségével lekérdezhető',
      'A Number.MAX_VALUE segítségével lekérdezhető',
      'Nincs elvi korlátja, maximum a memória mennyisége szab neki határt',
      'Pontosan 10 a századikon a legnagyobb ábrázolható érték'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A BigInt típusnak nincs a mérete lekorlátozva. Amíg van elég memória bármekkora értéket felvehet.',
  },
  // 2. JS - Adatok átstrukturálása
  {
    header1: '2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
    header2: 'Adatok átstrukturálása 1 / 3',
    question: 'Mi lesz az n és az s és k változók értéke?<br>&emsp; const pet = {<br>&emsp; &emsp; name: \'Szetti\',<br>&emsp; &emsp; species: \'dog\',<br>&emsp; &emsp; age: 3<br>&emsp; }<br><br>&emsp; const { name: n, species: s, kor: k = 10 } = pet;<br>Válaszd ki az EGYETLEN megfelelő választ!<br>',
    options: ['Szetti\', \'dog\', 3',
      'Szetti\', \'dog\', 10',
      '\'Szetti\', \'dog\', undefined',
      'Hibás a kód'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A pet objektum nem rendelkezik kor tulajdonsággal, így a megadott default value, azaz 10 lesz az értéke.',
  },
  {
    header1: '2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
    header2: 'Adatok átstrukturálása 2 / 3',
    question: 'Mi lesz az a és a d változók értéke?<br>&emsp; const arr = [\'one\', \'two\', \'three\', \'four\'];<br>&emsp; const [a, , , d] = arr;<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['\'one\', \'two\'',
      '\'one\', \'three\'',
      '\'one\', \'four\'',
      'Hibás a kód'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Az a értéke a tömb első elemének az értékét veszi fel, majd két elemet kihagyunk, a d a negyedik elem, azaz a 3. indexű elem értékét kapja meg ami \'four\'',
  },
  {
    header1: '2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
    header2: 'Adatok átstrukturálása 3 / 3',
    question: 'Mi lesz a pet objektum name tulajdonságának az értéke a kód lefutása után?<br>&emsp; const pet = {<br>&emsp; &emsp; name: \'Szetti\',<br>&emsp; &emsp; species: \'dog\',<br>&emsp; &emsp; age: 3<br>&emsp; }<br><br>&emsp; let { name } = pet<br>&emsp; name = \'Bogyó\'<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['Szetti',
      'Bogyó',
      'undefined',
      'Hibás a kód'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A destructuring után a referencia elveszik. A name egy egyszerű primitív lesz. Ha azt módosítjuk az objektum tulajdonsága nem fog módosulni.',
  },
  // 2. JS - Dátumok
  {
    header1: '2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
    header2: 'Dátumok 1 / 3',
    question: 'Az alábbi kód esetében a date változónál a 2020-as év melyik hónapja és napja van beállítva?<br>&emsp; const date = new Date(2020, 1, 1)<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['január 1.',
      'február 1.',
      'január 2.',
      'február 2.'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Mivel a hónapok 0-tól kezdődően számozódnak (mint a tömbindexek), ezért az 1 a február hónapot jelöli.<br>A második egyes a nap száma, az 1-től számozódik.',
  },
  {
    header1: '2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
    header2: 'Dátumok 2 / 3',
    question: 'Mi lesz a konzolon az alábbi kód lefutása után?<br>&emsp; const date = new Date(2020, 0, 1)<br>&emsp; date.setDate(32)<br>&emsp; console.log(date)<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['Jan 01 2020',
      'Jan 32 2020',
      'Feb 01 2020',
      'RangeError: Invalid argument.'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Trükkös volt. A január 1-et módosítjuk. A napszámot 32-re átállítottam.<br>Ugyan januárban nincs 32. nap, azonban ez nem probléma, mert ilyen esetben automatikusan ugrik a következő dátumra.<br>Tehát januárban 31 nap van, plusz egy az február 1.',
  },
  {
    header1: '2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
    header2: 'Dátumok 3 / 3',
    question: 'Mi lesz a konzolon az alábbi kód lefutása után?<br>&emsp; const date = Date.UTC(2020, 0, 1)<br>&emsp; console.log(date)<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['Egy date object UTC alapú értékkel',
      'Egy date object lokális idő alapú értékkel',
      '1970 január 1 óta eltelt idő ezredmásodpercben',
      'Error'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Az UTC() metódus az 1970 január 1 óta eltelt időt adja vissza ezredmásodpercben.',
  },
  // 3. JS - Modulok és kivételek
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'Egyéb újdonságok 1 / 3',
    question: 'Melyik adatszerkezetben nem lehetséges duplikált elemek elhelyezése?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['Array',
      'Map',
      'Set',
      'WeakMap'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" target="_blank">Dokumentáció</a>',
  },
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'Egyéb újdonságok 2 / 3',
    question: 'Melyik metódus nem érhető el WeakMap esetben?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['get',
      'set',
      'delete',
      'clear'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap" target="_blank">Dokumentáció</a><br>A WeakMap csak get(), set(), has(), delete() metódusokkal rendelkezik.',
  },
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'Egyéb újdonságok 3 / 3',
    question: 'Mi lesz a konzolon?<br>&emsp; const id = Symbol(\'id\');<br>&emsp; const person = {<br>&emsp; &emsp; [id]: 1,<br>&emsp; &emsp; firstName: \'John\',<br>&emsp; &emsp; lastName: \'Doe\'<br>&emsp; }<br>&emsp; console.log(person.id)<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['1',
      'undefined',
      'Symbol(id): 1',
      'Error'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A person id tulajdonságát a pont operátorral nem érjük el.<br>Használjuk a getOwnPropertySymbols() metódust a Symbol property-k elérésére, vagy itt akár a person[id]-t.',
  },
  // 3. JS - Web storage-ok
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'Web storage-ok 1 / 3',
    question: 'Melyik storage típus tartalma törlődik a böngésző bezárásakor?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['cookie',
      'sessionStorage',
      'localStorage',
      'egyiké sem'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A cookie és a localStorage megőrzi a benne tárolt adatokat, amíg mi vagy a user ki nem törli őket.<br>Ezzel szemben a sessionStorage, ahogy a neve is mondja csak az adott sessionre, azaz munkamenetre őrzi meg a tartalmat.',
  },
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'Web storage-ok 2 / 3',
    question: 'Mekkora lehet egy süti maximális mérete (általában)?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['4KB',
      '5MB',
      '25MB',
      'Nincs korlátozva'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: '<a href="https://tools.ietf.org/html/rfc6265#section-4.1.1" target="_blank">Dokumentáció</a><br>RFC szabvány által van meghatározva.',
  },
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'Web storage-ok 3 / 3',
    question: 'Hol tároljuk a titkosítatlan jelszavakat?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['cookie-ban',
      'localStorage-ben',
      'sessionStorage-ben',
      'Sehol'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'A jelszavakat mindig sózzuk, titkosítjuk!',
  },
  // 3. JS - A JavaScript modul rendszere
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'A JavaScript modul rendszere 1 / 3',
    question: 'Maximum hány darab export utasítás lehet egy file-ban?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['1',
      '2',
      'Csak export default lehet, sima export nem',
      'Akármennyi'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Az exportok száma nincs bekorlátozva a szabvány alapján.',
  },
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'A JavaScript modul rendszere 2 / 3',
    question: 'Maximum hány darab export default utasítás lehet egy file-ban?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['1',
      '2',
      '32',
      'Akármennyi'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'Míg named export-ból akármennyi lehet, defaultból csak egy darab.<br>Akkor használjuk ha az adott file csak egy class-t, object-et stb. tartalmaz.',
  },
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'A JavaScript modul rendszere 3 / 3',
    question: 'Lehetséges az import utasítást feltételhez kötni? Pl.:<br>&emsp; if (condition) {<br>&emsp; &emsp; import { myModule } from \'./my.js\';<br>&emsp; }<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['Igen, bármikor lehet',
      'Nem lehet',
      'Csak import as utasítás lehet feltételnél',
      'Csak default export esetében lehet feltételhez kötött import'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Minden importnak a file elején kell szerepelnie. Tehát nem lehet ilyen módon feltételhez kötni.',
  },
  // 3. JS - A Regexp objektum
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'A Regexp objektum 1 / 3',
    question: 'Melyik Regexp flag segítségével tudom case insensitive-en vizsgálni az illeszkedést?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['g',
      'm',
      'i',
      'Nincs rá lehetőség'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Az i az ignorecase kapcsoló. Nem fog különbséget tenni a kis-, és nagybetűk között.<br>A g flaggel globális keresést, az m-el a többsoros keresést tudjuk bekapcsolni.',
  },
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'A Regexp objektum 2 / 3',
    question: 'Adott az alábbi reguláris kifejezés: ([A-Z])\\w+/g<br>Hány találatunk lenne illeszkedés vizsgálatakor az alábbi mondat esetében?:<br>“RegExr was created By trining360.com.”<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['1',
      '2',
      '3',
      '4'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Kettő darab nagybetűvel kezdődő szó van a mondatban, ezekre fog illeszkedni a kifejezés.<br>[A-Z]: legyen egy angol nagybetű <br>\w: utána az alábbiak közül: a-z, A-Z, 0-9, _<br>+: egy vagy több az előző karakterből<br>/g: globálisan keresünk',
  },
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'A Regexp objektum 3 / 3',
    question: 'Melyik stringre fog illeszkedni az alábbi minta?<br>&emsp; /^(\d{3} ){2}\d{3}$/<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['\'123456789\'',
      '\'123 456 789\'',
      '123',
      '456 789'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'A leckék során már egyszer előkerült ez a példa. A TAJ számot validáltuk.<br>^(\d{3} ){2}: kezdődjön a string három darab számmal, ami után egy szóköz<br>{2}: az előbbiből legyen 2<br>\d{3}$: majd a végén legyen még 3 darab számjegy egymás után',
  },
  // 3. JS - Kivételkezelés
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'Kivételkezelés 1 / 3',
    question: 'Egy try blokk után mennyi catch blokk lehet?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['csak egy',
      'maximum 12 darab',
      'akármennyi',
      'ha van utána finally akkor akármennyi'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'JavaScriptben nem támogatott a multiple catch ág.<br>Ha több kivételt szeretnénk lekezelni, azt egy catch blokkon belül kell megtennünk.',
  },
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'Kivételkezelés 2 / 3',
    question: 'Milyen estben fut le finally ágban lévő kód?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['csak akkor, ha a try blokkban nem volt hiba',
      'csak akkor, ha a try blokkban hiba volt, ilyenkor a catch blokk kódja után',
      'csak akkor, ha a try blokkban hiba volt, ilyenkor a catch blokk kódja előtt',
      'mindig'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Mindig. A finally mindig lefut akár volt hiba akár nem.',
  },
  {
    header1: '3. JavaScript haladó - Modulok és kivételek',
    header2: 'Kivételkezelés 3 / 3',
    question: 'Milyen típusú hibát fogok kapni az alábbi kód esetében? (Csak ennyi a file tartalma!)<br>&emsp; try {<br>&emsp; &emsp; powFunction();<br>&emsp; } catch(error){<br>&emsp; &emsp; console.log(error.name);<br>&emsp; }<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['ReferenceError',
      'SyntaxError',
      'TypeError',
      'RangeError'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'ReferenceError, mert nem létezik a powFunction nevű függvény.',
  },
  // 4. JS - Promise
  {
    header1: '4. JavaScript haladó - Aszinkron programozás',
    header2: 'Promise 1 / 3',
    question: 'Az alábbiak közül melyik nem lehet egy Promise állapota?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['rejected',
      'resolved',
      'pending',
      'canceled'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'A promise az alábbi állapotokkal rendelkezhet: pending, fulfilled, rejected, illetve settled ha fulfilled vagy rejected, de nem pending.',
  },
  {
    header1: '4. JavaScript haladó - Aszinkron programozás',
    header2: 'Promise 2 / 3',
    question: 'Mi lesz az alábbi kód lefutása után a konzolon?<br>&emsp; Promise.resolve(\'ok\')<br>&emsp; .then(data => {<br>&emsp; &emsp; return data.toUpperCase()<br>&emsp; })<br>&emsp; .then(data => {<br>&emsp; &emsp; console.log(data)<br>&emsp; &emsp; return data<br>&emsp; })<br>&emsp; .then(console.log)<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['ok',
      'OK',
      'ok, OK',
      'OK, OK'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Az első then-ben nagybetűssé alakítjuk az ok stringet.<br>A második then-ben ezt kiírjuk a konzolra, és továbbadjuk.<br>A harmadik then ezt callback function-je a console.log, ami automatikusan megkapja a stringet, tehát felesleges ezt írnunk: data => console.log(data)',
  },
  {
    header1: '4. JavaScript haladó - Aszinkron programozás',
    header2: 'Promise 3 / 3',
    question: 'Mit vált ki a fetch API?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['a setTimeout()-ot',
      'az XMLHttpRequestet',
      'a callback-eket',
      'a Promise-okat'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank">Dokumentáció</a>',
  },
  // 4. JS - Aszinkron programozás
  {
    header1: '4. JavaScript haladó - Aszinkron programozás',
    header2: 'Aszinkron programozás 1 / 3',
    question: 'Mire tipikus példa az alábbi kód?<br>&emsp; one(1, function () {<br>&emsp; &emsp; two(2, function () {<br>&emsp; &emsp; &emsp; three(3, function () {<br>&emsp; &emsp; &emsp; &emsp; four(4, function () {<br>&emsp; &emsp; &emsp; &emsp; &emsp; five(5)<br>&emsp; &emsp; &emsp; &emsp; })<br>&emsp; &emsp; &emsp; })<br>&emsp; &emsp; })<br>&emsp; })<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['async programming',
      'callback hell',
      'timer',
      'loopback'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Függvény, ami paraméterként kap egy függvényt ami paraméterként kap egy függvényt, ami...<br>Callback hell. Callbacknek hívjuk a függvényt amit paraméterként adunk át másik függvénynek.<br>Ebből van sok egymásba ágyazva. Pokoli nehéz átlátni egy idő után.',
  },
  {
    header1: '4. JavaScript haladó - Aszinkron programozás',
    header2: 'Aszinkron programozás 2 / 3',
    question: 'Mi lesz a konzolon az alábbi kód esetén, ha rákattintok a DOM-ba lévő click-me class-ű gombra?<br>&emsp; const btn = document.querySelector(\'.click-me\');<br><br>&emsp; btn.addEventListener(\'click\', () => {<br>&emsp; &emsp; console.log(\'Listener\');<br><br>&emsp; &emsp; setTimeout(console.log, 0, \'Timer\')<br><br>&emsp; &emsp; Promise<br>&emsp; &emsp; &emsp; .resolve(\'Promise1\')<br>&emsp; &emsp; &emsp; .then(console.log)<br><br>&emsp; &emsp; Promise<br>&emsp; &emsp; &emsp; .resolve(\'Promise2\')<br>&emsp; &emsp; &emsp; .then(console.log)<br>&emsp; })<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['Promise1, Promise2, Listener, Timer',
      'Listener, Timer, Promise1, Promise2',
      'Listener, Promise1, Promise2, Timer',
      'Timer, Promise1, Promise2, Listener'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Először lefut a szinkron kód, utána a Microtask queue-ben lévő 2 Promise, tehát Promise1, Promise2, és a végén a Task Queue-ben lévő timeout callbackje.',
  },
  {
    header1: '4. JavaScript haladó - Aszinkron programozás',
    header2: 'Aszinkron programozás 3 / 3',
    question: 'Mi lesz a kimeneten?<br>&emsp; console.log(\'start\');<br>&emsp; setTimeout(console.log, 1000, \'1000\');<br>&emsp; console.log(\'end\');<br>&emsp; setTimeout(console.log, 0, \'0\');<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['start, 1000, end, 0',
      'start, end, 1000, 0',
      'start, end, 0, 1000',
      '0, 1000, start, end'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'Először sorrendben a 2 szinkron utasítás: start, end<br>Utána a két callback, jelen esetben elsőnek a 0, mert itt sokkal kisebb volt a delay, (hacsak az előtte lévő console.log(‘end’) művelet lefuttatása nem tart egy másodpercig, és nem fog) mint az 1000-es párjánál, ami a legvégén fog csak lefutni.',
  },
  // 4. JS - Generátorok
  {
    header1: '4. JavaScript haladó - Aszinkron programozás',
    header2: 'Generátorok 1 / 2',
    question: 'Mi a next() metódus visszatérési értéke?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['egy value, azaz valamilyen érték',
      'egy boolean, amit true, ha a függvény befejezett egyéként false',
      'egy object, amit done, és value tulajdonságokat tartalmaz',
      'egy Promise'],
    results: 'C',
    result: 3,
    boolres: [false, false, true, false],
    answer: 'A visszatérési érték egy olyan object, ahol a done property értéke true, ha a függvény befejezett egyéként false, a value property értéke pedig a yield utáni érték.',
  },
  {
    header1: '4. JavaScript haladó - Aszinkron programozás',
    header2: 'Generátorok 2 / 2',
    question: 'Válaszd ki az igaz állításokat!<br>Válaszd ki az ÖSSZES megfelelő választ!',
    options: ['Meg lehet adni generátor függvényen belül a yield után értéknek egy másik generátor függvény hívás értékét',
      'A hibakezelést mindig a generátor függvényen kívül kell megvalósítanunk, az nem tartalmazhat try catch blokkot',
      'Generátor függvényen belül a return használata esetén mindig hibát kapunk',
      'Generátor függvényeket kombinálhatunk Promise-okkal'],
    results: 'A, D',
    result: 14,
    boolres: [true, false, false, true],
    answer: 'Meg lehet adni generátor függvényen belül a yield után értéknek egy másik generátor függvény hívás értékét: igaz, hiszen a yield* pont erre szolgál<br>A hibakezelést mindig a generátor függvényen kívül kell megvalósítanunk, az nem tartalmazhat try catch blokkot: hamis, példát is láthattunk a használatára<br>Generátor függvényen belül a return használata esetén mindig hibát kapunk: nem kapunk hibát egyszerűen next() metódushívásnál nem lesz ott return utáni érték<br>Generátor függvényeket kombinálhatunk Promise-okkal: természetesen, erre is láthattunk példát. Több fetch kérést küldtünk el a kettő kombinálásával.',
  },
  // 4. JS - Aszinkron függvények
  {
    header1: '4. JavaScript haladó - Aszinkron programozás',
    header2: 'Aszinkron függvények 1 / 2',
    question: 'Mi lesz az async function visszatérési értéke?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['amit megadunk return után',
      'mindig egy Promise',
      'egy Iterable',
      'egy Iterator'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Az aszinkron függvények visszatérési értéke indig egy Promise.<br>A async await valójába csak egy egyszerűsített szintaxis a new Promise, then... részekre.',
  },
  {
    header1: '4. JavaScript haladó - Aszinkron programozás',
    header2: 'Aszinkron függvények 2 / 2',
    question: 'Mi lesz a konzolon az alábbi kód lefutása után, ha minden async hívás is véget ért?<br>&emsp; const thenable = {<br>&emsp; &emsp; age: 30,<br>&emsp; &emsp; then(resolve, reject) {<br>&emsp; &emsp; &emsp; setTimeout(() => resolve(this.age * 2), 1000)<br>&emsp; &emsp; }<br>&emsp; };<br><br>&emsp; async function f() {<br>&emsp; &emsp; const result = await thenable;<br>&emsp; &emsp; console.log(result)<br>&emsp; }<br><br>&emsp; f();<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['Error',
      '60',
      'Promise',
      'ƒ Function() { [native code] }'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Az await után megadtunk egy thenable objectet, tehát egy olyan objektumot aminek van then metódusa.<br>Tehát az await után a thenable object then metódusa hívódik meg. Ott egy setTimeout van, ami egy másodperc múlva meghívja resolve-ot, paraméterként átadva neki az age property értékének a dupláját a 2 * 30-at. Az f függvényen belül ezt az értéket fogjuk kiírni.',
  },
  // 5. JS - This
  {
    header1: '# 5. JavaScript haladó - Objektum Orientált Programozás',
    header2: 'This 1 / 4',
    question: 'Mi lesz a this értéke a függvényen belül, amikor meghívjuk? (A globális környezetben vagyunk)<br>&emsp; \'use strict\';<br><br>&emsp; function myFunction() {<br>&emsp; &emsp; return this;<br>&emsp; }<br><br>&emsp; myFunction();<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['A function',
      'A Window object',
      'null',
      'undefined'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'Strict módban globális kódban elhelyezett függvény esetében mindig undefined.',
  },
  {
    header1: '# 5. JavaScript haladó - Objektum Orientált Programozás',
    header2: 'This 2 / 4',
    question: 'Mi lesz a this értéke a függvényen belül, amikor meghívjuk? (A globális környezetben vagyunk)<br>&emsp; function myFunction() {<br>&emsp; &emsp; return this;<br>&emsp; }<br><br>&emsp; myFunction();<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['A function',
      'A Window object',
      'null',
      'undefined'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Strict mód nélkül globális kódban elhelyezett függvény esetében mindig a globális Window object.',
  },
  {
    header1: '# 5. JavaScript haladó - Objektum Orientált Programozás',
    header2: 'This 3 / 4',
    question: 'Mi lesz a konzolon az alábbi kód lefutása után?<br>&emsp; \'use strict\';<br><br>&emsp; const user = {<br>&emsp; &emsp; name: \'John\',<br>&emsp; &emsp; myNameIs() {<br>&emsp; &emsp; &emsp; console.log(this.name);<br>&emsp; &emsp; }<br>&emsp; };<br><br>&emsp; const data = {<br>&emsp; &emsp; name: \'Jane\',<br>&emsp; }<br><br>&emsp; const person = user.myNameIs;<br>&emsp; person.call(data);<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['Jane',
      'John',
      'Window object',
      'undefined'],
    results: 'A',
    result: 1,
    boolres: [true, false, false, false],
    answer: 'A person-nak átadom a myNameIs metódus referenciáját.<br>Meghívom ezt a call-al a this értéknek a data-t adom meg, tehát a name értéke Jane lesz. Ez lesz a logon.',
  },
  {
    header1: '# 5. JavaScript haladó - Objektum Orientált Programozás',
    header2: 'This 4 / 4',
    question: 'Mi lesz a konzolon, miután rákattintok a gombra? (A gomb a DOM része)<br>&emsp; document.body.insertAdjacentHTML(<br>&emsp; &emsp; \'afterend\', <br>&emsp; &emsp; \'<<span style="font-size: 0rem;"> </span>button onclick="console.log(this)">Click me<<span style="font-size: 0rem;"> </span>/button>\'<br>&emsp; );<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['A Window object',
      'A Button element',
      'Az Element',
      'undefined'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Az onclick attributumnál hívjuk meg a console.log() metódust.<br>A Event a gombon következett be, a this maga a button lesz.',
  },
  // 5. JS - Objektumok – haladó
  {
    header1: '# 5. JavaScript haladó - Objektum Orientált Programozás',
    header2: 'Objektumok – haladó 1 / 2',
    question: 'Az alábbiak közül melyik nem egy property descriptor?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['enumerable',
      'configurable',
      'writable',
      'readable'],
    results: 'D',
    result: 4,
    boolres: [false, false, false, true],
    answer: 'writable: módosítható e vagy sem<br>configurable: törölhető e<br>enumerable: felsorolható e',
  },
  {
    header1: '# 5. JavaScript haladó - Objektum Orientált Programozás',
    header2: 'Objektumok – haladó 2 / 2',
    question: 'Minek van prototype tulajdonsága?<br>Válaszd ki az EGYETLEN megfelelő választ!',
    options: ['minden objektumnak',
      'minden függvénynek',
      'minden primitívnek',
      'minden objektumnak ami nem függvény'],
    results: 'B',
    result: 2,
    boolres: [false, true, false, false],
    answer: 'Függvénynek prototype tulajdonsága van, az objecteknek (minden típusú objectnek a függvényeket is beleértve), pedig [[Prototype]] (is).',
  },
];
