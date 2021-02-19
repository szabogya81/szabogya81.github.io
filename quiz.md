# 1. JavaScript haladó - Változók, függvények és tömbök

## Változók

### KÉRDÉS 1 / 3
Melyik kulcsszóval létrehozott változók esetében van hoisting?
Válaszd ki az ÖSSZES megfelelő választ!

A   var
B   let
C   const
    D   Egyinkél sincs

Helyes válasz
Mind a háromnál van hoisting, a különbség annyi, hogy var esetében a változó inicializálódik is undefined kezdőértékkel.

### KÉRDÉS 2 / 3
Melyik kulcsszóval létrehozott változó esetében nem megengedett a reassignement (újra értékadás)?
Válaszd ki az EGYETLEN megfelelő választ!

    A   var
    B   let
C   const
    D   Mindegyiknél megengedett

Helyes válasz
A const immutable bindingot hoz létre, nem lehet újra értéket adni a változónak.

### KÉRDÉS 3 / 3
Melyik állítások igazak a let, és const kulcsszóval deklarált változókra?
Válaszd ki az ÖSSZES megfelelő választ!

A   nem lehet őket újradeklarálni
B   blokk hatókörűek
C   inicializálás előtt nem elérhetőek
    D   nem lehet új értéket adni nekik

Helyes válasz
Egyedül a const kulcsszóval létrehozott változóknál nem engedélyezett a reassignment (új értéket adni a "= " operátorral).



## Függvények

### KÉRDÉS 1 / 3
Hogy hívják azt a függvényt, amit más függvénynek adunk át paraméterként?

Válaszd ki az EGYETLEN megfelelő választ!

A   callback function
    B   arrow function
    C   higher order function
    D   IIFE

Helyes válasz
Azt a függvényt, amelyet másik függvénynek adunk át paraméterként egyezményesen callback functionnek hívjuk.  Azt pedig, amelyik ezzel dolgozik, higher order functionnek.   
Az arrow function  egy újabb szintaxis function expression létrehozására, illetve rendelkezik néhány speciális tulajdonsággal.   
Az IIFE (Immediately Invoked Function Expression - Azonnal Meghívott Függvény Kifejezés) segítségével oylan függvényeket tudunk írni, ami a definiálásakor rögtön le is fut.

### KÉRDÉS 2 / 3
Melyik állítások helyesek a JavaScript memóriakezelésével kapcsolatban?

Válaszd ki az ÖSSZES megfelelő választ!

A   A Heap rendezetlen memóriaterület
    B   A Stackben tárolódnak az objektumok
    C   A Heapben tárolódnak a primitívek
D   A JavaScriptben automatikus a szemétgyűjtés

Helyes válasz
A Heap egy rendezetlen nagyméretű memóriaterület, ahol az objektumok tárolódnak.  A Stack mérete sokkal korlátozottabb, a primitívek itt tárolódnak.  A JavaScriptben a szemétgyűjtés automatikus. A Garbage Collector munkájába nem tudunk közvetlenül beleavatkozni.

### KÉRDÉS 3 / 3
Melyik állítás igaz az arrow functionre?
Válaszd ki az EGYETLEN megfelelő választ!

A   nem bindolja a this-t
    B   a paramétert/paramétereket  kötelező zárójelbe tenni
    C   objektum nem szerepelhet visszatérési értékként
    D   mindig használnunk kel la return utasítást a függvényen belül

Helyes válasz
Az arrow function nem köti a saját thist ezért ne használjuk objektum metódusaként.  
Amennyiben csak egy darab paraméter van, azt nem kötelező zárójelbe tenni.  
Arrow function esetében, akárcsak hagyományos függvényeknél, bármilyen típusú adat lehet visszatérési érték.
Return utasítást nem kötelező használni, lehet implicit visszatérési értékünk.



## Tömbök

### KÉRDÉS 1 / 3
Melyik metódus módosítja az eredeti tömböt?
Válaszd ki az EGYETLEN megfelelő választ!

    A   forEach()
    B   map()
    C   reduce()
D   egyik sem

Helyes válasz
A fenti metódusok az eredeti tömböt nem módosítják, azaz nem mutálják ellenben a push(), pop(), shift(), unshift() metódusok például igen. Érdemes mindig olyan megoldásokra törekednünk, amelyek az eredeti tömböt nem módosítják.

### KÉRDÉS 2 / 3
Az alábbi metódushívásnak mi lesz a visszatérési értéke?
[0, null ,undefined, ''].filter(item => item)
Válaszd ki az EGYETLEN megfelelő választ!

A   []
    B   [0]
    C   [0, null ,undefined, '']
    D   [null, '']

Helyes válasz
Üres tömböt fogok visszakapni, mert feltételvizsgálatnál mind a 0, a null, az undefined, és az üres string is false-t ad vissza.

### KÉRDÉS 3 / 3
Mi lesz a value értéke? A 0 paraméter csak a kezdőértéket állítja be?
const value = [{v: 1}, {v: 2}, {v: 3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.v, 0)
Válaszd ki az EGYETLEN megfelelő választ!

    A   1
    B   2
    C   3
D   6

Helyes válasz
A reduce jelen esetben nem csinál mást, mint hogy összeadja a tömbben lévő objektumok v tulajdonságainak az értékét. A kezdőértéket 0-ra állítjuk, és az accumulator-ban ehhez folyamatosan hozzáadjuk a soron lévő objektum v tulajdonságának értékét.



# 2. JavaScript haladó - Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása

## Szövegek

### KÉRDÉS 1 / 3
Mi lesz a b értéke a függvényen belül?
    function restParameter(a, ...b) {
        //...
    }
    restParameter(1, 2, 3, 4, 5);
Válaszd ki az EGYETLEN megfelelő választ!

    A   2
    B   [1]
C   [2, 3, 4, 5]
    D   [1, 2, 3, 4, 5]

Helyes válasz
Jelen esetben rest paramétert használtunk. Az a értéke 1 lesz, míg a b értéke az összes többi paraméter tömbösítve, tehát: [2, 3, 4, 5].

## KÉRDÉS 2 / 3
Az alábbi kód lefutása után mi lesz a konzolon?
    const age = { age: 33 }
    const name = { firstname: 'John', lastname: 'Doe'}
    console.log({...name, ...age })
Válaszd ki az EGYETLEN megfelelő választ!

A   { firstname: 'John', lastname: 'Doe', age: 33 }
    B   [ firstname: 'John', lastname: 'Doe', { age: 33 } ]
    C   [ { firstname: 'John', lastname: 'Doe'}, { age: 33 } ]
    D   [ 'John', 'Doe', 33 ]

Helyes válasz
Két objektumot fűztünk össze. A kimeneten egy olyan új objektum lesz, amely mind a kettő tulajdonságait tartalmazza.

### KÉRDÉS 3 / 3
Melyik kifejezés nem lenne helyes egy konzolra való kiíráskor, amennyiben a kiinduló kód a következő:
    const a = 10
    const b = 20
    const sum = (firstNumber, secondNumber) => firstNumber + secondNumber 
Válaszd ki az EGYETLEN megfelelő választ!

    A   érték: ${a + b}
    B   érték: ${sum(a, b)}
C   érték: ${sum(firstNumber, secondNumber)}
    D   érték: ${sum(10, 20)}

Helyes válasz
A firstNumber és a secondNumber a paraméterek nevei, csak függvényen belül használhatom őket.
A függvényen kívül nem léteznek, tehát itt ReferenceError-t kapunk.


## Számok, és a Math objektum

### KÉRDÉS 1 / 3
Mi lesz a két visszatérési érték az alábbi esetekben?
    isNaN('value')
    Number.isNaN('value')
Válaszd ki az EGYETLEN megfelelő választ!

    A   true, true
B   true, false
    C   false, true
    D   false, false

Helyes válasz
A globális isNaN() loose equality-t használ, addig a Number.isNaN() strict equality-t, tehát a típust is vizsgálja nem csak az értéket.

### KÉRDÉS 2 / 3
Az alábbiak közül milyen számrendszerbeli számokkal tudunk dolgozni JavaScriptben?
Válaszd ki az ÖSSZES megfelelő választ!

A   bináris (2)
B   oktális (8)
C   decimális (10)
D   hexadecimális (16)

Helyes válasz
Mindegyik helyes megoldás volt. Alaphelyzetben 10-es számrendszerbeli számokkal dolgozunk, azonban 0b, 0o, 0x előtagokkal megadott számok automatikusan a bináris, oktális, és hexadecimális számrendszerbe fognak tartozni.

### KÉRDÉS 3 / 3
Maximum mekkora értéket vehetnek fel a BigInt típusú számok?
Válaszd ki az EGYETLEN megfelelő választ!

    A   A Number.MAX_SAFE_INTEGER segítségével lekérdezhető
    B   A Number.MAX_VALUE segítségével lekérdezhető
C   Nincs elvi korlátja, maximum a memória mennyisége szab neki határt
    D   Pontosan 10 a századikon a legnagyobb ábrázolható érték

Helyes válasz
A BigInt típusnak nincs a mérete lekorlátozva. Amíg van elég memória bármekkora értéket felvehet.


## Adatok átstrukturálása

### KÉRDÉS 1 / 3
Mi lesz az n és az s és k változók értéke?
    const pet = {
        name: 'Szetti',
        species: 'dog',
        age: 3
    }

    const { name: n, species: s, kor: k = 10 } = pet;
Válaszd ki az EGYETLEN megfelelő választ!

    A   Szetti', 'dog', 3
B   Szetti', 'dog', 10
    C   'Szetti', 'dog', undefined
    D   Hibás a kód

Helyes válasz
A pet objektum nem rendelkezik kor tulajdonsággal, így a megadott default value, azaz 10 lesz az értéke.

### KÉRDÉS 2 / 3
Mi lesz az a és a d változók értéke?
    const arr = ['one', 'two', 'three', 'four'];
    const [a, , , d] = arr;
Válaszd ki az EGYETLEN megfelelő választ!

    A   'one', 'two'
    B   'one', 'three'
C   'one', 'four'
    D   Hibás a kód

Helyes válasz
Az a értéke a tömb első elemének az értékét veszi fel, majd két elemet kihagyunk, a d a negyedik elem, azaz a 3. indexű elem értékét kapja meg ami 'four'

### KÉRDÉS 3 / 3
Mi lesz a pet objektum name tulajdonságának az értéke a kód lefutása után?
    const pet = {
        name: 'Szetti',
        species: 'dog',
        age: 3
    }

    let { name } = pet
    name = 'Bogyó'
Válaszd ki az EGYETLEN megfelelő választ!

A   Szetti
    B   Bogyó
    C   undefined
    D   Hibás a kód

Helyes válasz
A destructuring után a referencia elveszik. A name egy egyszerű primitív lesz. Ha azt módosítjuk az objektum tulajdonsága nem fog módosulni.


## Dátumok

### KÉRDÉS 1 / 3
Az alábbi kód esetében a date változónál a 2020-as év melyik hónapja és napja van beállítva?
    const date = new Date(2020, 1, 1)
Válaszd ki az EGYETLEN megfelelő választ!

    A   január 1.
B   február 1.
    C   január 2.
    D   február 2.

Helyes válasz
Mivel a hónapok 0-tól kezdődően számozódnak (mint a tömbindexek), ezért az 1 a február hónapot jelöli.
A második egyes a nap száma, az 1-től számozódik.

### KÉRDÉS 2 / 3
Mi lesz a konzolon az alábbi kód lefutása után?
    const date = new Date(2020, 0, 1)
    date.setDate(32)
    console.log(date)
Válaszd ki az EGYETLEN megfelelő választ!

    A   Jan 01 2020
    B   Jan 32 2020
C   Feb 01 2020
    D   RangeError: Invalid argument.

Helyes válasz
Trükkös volt. A január 1-et módosítjuk. A napszámot 32-re átállítottam. Ugyan januárban nincs 32. nap, azonban ez nem probléma, mert ilyen esetben automatikusan ugrik a következő dátumra. Tehát januárban 31 nap van, plusz egy az február 1.

### KÉRDÉS 3 / 3
Mi lesz a konzolon az alábbi kód lefutása után?
    const date = Date.UTC(2020, 0, 1)
    console.log(date)
Válaszd ki az EGYETLEN megfelelő választ!

    A   Egy date object UTC alapú értékkel
    B   Egy date object lokális idő alapú értékkel
C   1970 január 1 óta eltelt idő ezredmásodpercben
    D   Error

Helyes válasz
Az UTC() metódus az 1970 január 1 óta eltelt időt adja vissza ezredmásodpercben.


# 3. JavaScript haladó - Modulok és kivételek

## Egyéb újdonságok

### KÉRDÉS 1 / 3
Melyik adatszerkezetben nem lehetséges duplikált elemek elhelyezése?
Válaszd ki az EGYETLEN megfelelő választ!

    A   Array
    B   Map
C   Set
    D   WeakMap

Helyes válasz
Dokumentáció
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

### KÉRDÉS 2 / 3
Melyik metódus nem érhető el WeakMap esetben?
Válaszd ki az EGYETLEN megfelelő választ!

    A   get
    B   set
    C   delete
D   clear

Helyes válasz
Dokumentáció
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
A WeakMap csak get(), set(), has(), delete() metódusokkal rendelkezik.

### KÉRDÉS 3 / 3
Mi lesz a konzolon?
    const id = Symbol('id');
    const person = {
        [id]: 1,
        firstName: 'John',
        lastName: 'Doe'
    }
    console.log(person.id)
Válaszd ki az EGYETLEN megfelelő választ!

    A   1
B   undefined
    C   Symbol(id): 1
    D   Error

Helyes válasz
A person id tulajdonságát a pont operátorral nem érjük el. Használjuk a getOwnPropertySymbols() metódust a Symbol property-k elérésére, vagy itt akár a person[id]-t.

### Web storage-ok

### KÉRDÉS 1 / 3
Melyik storage típus tartalma törlődik a böngésző bezárásakor?
Válaszd ki az EGYETLEN megfelelő választ!

    A   cookie
B   sessionStorage
    C   localStorage
    D   egyiké sem

Helyes válasz
A cookie és a localStorage megőrzi a benne tárolt adatokat, amíg mi vagy a user ki nem törli őket.
Ezzel szemben a sessionStorage, ahogy a neve is mondja csak az adott sessionre, azaz munkamenetre őrzi meg a tartalmat.

### KÉRDÉS 2 / 3
Mekkora lehet egy süti maximális mérete (általában)?
Válaszd ki az EGYETLEN megfelelő választ!

A   4KB
    B   5MB
    C   25MB
    D   Nincs korlátozva

Helyes válasz
Dokumentáció
https://tools.ietf.org/html/rfc6265#section-4.1.1
RFC szabvány által van meghatározva.

### KÉRDÉS 3 / 3
Hol tároljuk a titkosítatlan jelszavakat?  
Válaszd ki az EGYETLEN megfelelő választ!

    A   cookie-ban
    B   localStorage-ben
    C   sessionStorage-ben
D   Sehol

Helyes válasz
A jelszavakat mindig sózzuk, titkosítjuk!


## A JavaScript modul rendszere

### KÉRDÉS 1 / 3
Maximum hány darab export utasítás lehet egy file-ban?
Válaszd ki az EGYETLEN megfelelő választ!

    A   1
    B   2
    C   Csak export default lehet, sima export nem
D   Akármennyi

Helyes válasz
Az exportok száma nincs bekorlátozva a szabvány alapján.

### KÉRDÉS 2 / 3
Maximum hány darab export default utasítás lehet egy file-ban?
Válaszd ki az EGYETLEN megfelelő választ!

A   1
    B   2
    C   32
    D   Akármennyi

Helyes válasz
Míg named export-ból akármennyi lehet, defaultból csak egy darab. Akkor használjuk ha az adott file csak egy class-t, object-et stb. tartalmaz.

### KÉRDÉS 3 / 3
Lehetséges az import utasítást feltételhez kötni? Pl.:
    if (condition) {
    import { myModule } from './my.js';
    }
Válaszd ki az EGYETLEN megfelelő választ!

    A   Igen, bármikor lehet
B   Nem lehet
    C   Csak import as utasítás lehet feltételnél
    D   Csak default export esetében lehet feltételhez kötött import

Helyes válasz
Minden importnak a file elején kell szerepelnie. Tehát nem lehet ilyen módon feltételhez kötni.


## A Regexp objektum

### KÉRDÉS 1 / 3
Melyik Regexp flag segítségével tudom case insensitive-en vizsgálni az illeszkedést?
Válaszd ki az EGYETLEN megfelelő választ!

    A   g
    B   m
C   i
    D   Nincs rá lehetőség

Helyes válasz
Az i az ignorecase kapcsoló. Nem fog különbséget tenni a kis-, és nagybetűk között. A g flaggel globális keresést, az m-el a többsoros keresést tudjuk bekapcsolni.

### KÉRDÉS 2 / 3
Adott az alábbi reguláris kifejezés: ([A-Z])\w+/g  
Hány találatunk lenne illeszkedés vizsgálatakor az alábbi mondat esetében?:
“RegExr was created By trining360.com.”
Válaszd ki az EGYETLEN megfelelő választ!

    A   1
B   2
    C   3
    D   4

Helyes válasz
Kettő darab nagybetűvel kezdődő szó van a mondatban, ezekre fog illeszkedni a kifejezés.
[A-Z]: legyen egy angol nagybetű 
\w: utána az alábbiak közül: a-z, A-Z, 0-9, _
+: egy vagy több az előző karakterből
/g: globálisan keresünk

### KÉRDÉS 3 / 3
Melyik stringre fog illeszkedni az alábbi minta?
    /^(\d{3} ){2}\d{3}$/
Válaszd ki az EGYETLEN megfelelő választ!

    A   '123456789'
B   '123 456 789'
    C   123
    D   456 789

Helyes válasz
A leckék során már egyszer előkeült ez a példa. A TAJ számot validáltuk.
^(\d{3} ){2}: kezdődjön a string három darab számmal, ami után egy szóköz
{2}: az előbbiből legyen 2
\d{3}$: majd a végén legyen még 3 darab számjegy egymás után


## Kivételkezelés

### KÉRDÉS 1 / 3
Egy try blokk után mennyi catch blokk lehet?  
Válaszd ki az EGYETLEN megfelelő választ!

A   csak egy
    B   maximum 12 darab
    C   akármennyi
    D   ha van utána finally akkor akármennyi

Helyes válasz
JavaScriptem nem támogatott a multiple catch ág.  
Ha több kivételt szeretnénk lekezelni azt egy catch blokkon belül kell megtennünk.

### KÉRDÉS 2 / 3
Milyen estben fut le finally ágban lévő kód?

Válaszd ki az EGYETLEN megfelelő választ!

A   csak akkor, ha a try blokkban nem volt hiba
B   csak akkor, ha a try blokkban hiba volt, ilyenkor a catch blokk kódja után
C   csak akkor, ha a try blokkban hiba volt, ilyenkor a catch blokk kódja előtt
D   mindig

Helyes válasz
Mindig. A finally mindig lefut akár volt hiba akár nem.

### KÉRDÉS 3 / 3
Milyen típusú hibát fogok kapni az alábbi kód esetében? (Csak ennyi a file tartalma!)
    try {
        powFunction();
    } catch(error){
        console.log(error.name);
    }
Válaszd ki az EGYETLEN megfelelő választ!

A   ReferenceError
    B   SyntaxError
    C   TypeError
    D   RangeError

Helyes válasz
ReferenceError, mert nem létezik a powFunction nevű függvény.


# 4. JavaScript haladó - Aszinkron programozás

## Promise

### KÉRDÉS 1 / 3
Az alábbiak közül melyik nem lehet egy Promise állapota?
Válaszd ki az EGYETLEN megfelelő választ!

    A   rejected
    B   resolved
    C   pending
D   canceled

Helyes válasz
A promise az alábbi állapotokkal rendelkezhet: pending, fulfilled, rejected, illetve settled ha fulfilled vagy rejected, de nem pending.

### KÉRDÉS 2 / 3
Mi lesz az alábbi kód lefutása után a konzolon?
    Promise.resolve('ok')
    .then(data => {
        return data.toUpperCase()
    })
    .then(data => {
        console.log(data)
        return data
    })
    .then(console.log)
Válaszd ki az EGYETLEN megfelelő választ!

    A   ok
    B   OK
    C   ok, OK
D   OK, OK

Helyes válasz
Az első then-ben nagybetűssé alakítjuk az ok stringet. A második then-ben ezt kiírjuk a konzolra, és továbbadjuk. A harmadik then ezt callback function-je a console.log, ami automatikusan megkapja a stringet, tehát felesleges ezt írnunk: data => console.log(data)

### KÉRDÉS 3 / 3
Mit vált ki a fetch API?
Válaszd ki az EGYETLEN megfelelő választ!

    A   a setTimeout()-ot
B   az XMLHttpRequestet
    C   a callback-eket
    D   a Promise-okat

Helyes válasz
Dokumentáció
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API


## Aszinkron programozás

### KÉRDÉS 1 / 3
Mire tipikus példa az alábbi kód?
    one(1, function () {
        two(2, function () {
            three(3, function () {
                four(4, function () {
                    five(5)
                })
            })
        })
    })
Válaszd ki az EGYETLEN megfelelő választ!

    A   async programming
B   callback hell
    C   timer
    D   loopback

Helyes válasz
Függvény, ami paraméterként kap egy függvényt ami paraméterként kap egy függvényt, ami…
Callback hell. Callbacknek hívjuk a függvényt amit paraméterként adunk át másik függvénynek. Ebből van sok egymásba ágyazva. Pokoli nehéz átlátni egy idő után.

### KÉRDÉS 2 / 3
Mi lesz a konzolon az alábbi kód esetén, ha rákattintok a DOM-ba lévő click-me class-ű gombra?
    const btn = document.querySelector('.click-me');

    btn.addEventListener('click', () => {
        console.log('Listener');

        setTimeout(console.log, 0, 'Timer')

        Promise
            .resolve('Promise1')
            .then(console.log)

        Promise
            .resolve('Promise2')
            .then(console.log)    
    })
Válaszd ki az EGYETLEN megfelelő választ!

    A   Promise1, Promise2, Listener, Timer
    B   Listener, Timer, Promise1, Promise2
C   Listener, Promise1, Promise2, Timer
    D   Timer, Promise1, Promise2, Listener

Helyes válasz
Először lefut a szinkron kód, utána a Microtask queue-ben lévő 2 Promise, tehát Promise1, Promise2, és a végén a Task Queue-ben lévő timeout callbackje.

### KÉRDÉS 3 / 3
Mi lesz a kimeneten?
    console.log('start');
    setTimeout(console.log, 1000, '1000');
    console.log('end');
    setTimeout(console.log, 0, '0');
Válaszd ki az EGYETLEN megfelelő választ!

    A   start, 1000, end, 0
    B   start, end, 1000, 0
C   start, end, 0, 1000
    D   0, 1000, start, end

Helyes válasz
Először sorrendben a 2 szinkron utasítás: start, end
Utána a két callback, jelen esetben elsőnek a 0, mert itt sokkal kisebb volt a delay, (hacsak az előtte lévő console.log(‘end’) művelet lefuttatása nem tart egy másodpercig, és nem fog) mint az 1000-es párjánál, ami a legvégén fog csak lefutni.


## Generátorok

### KÉRDÉS 1 / 2
Mi a next() metódus visszatérési értéke?
Válaszd ki az EGYETLEN megfelelő választ!

    A   egy value, azaz valamilyen érték
    B   egy boolean, amit true, ha a függvény befejezett egyéként false
C   egy object, amit done, és value tulajdonságokat tartalmaz
    D   egy Promise

Helyes válasz
A visszatérési érték egy olyan object, ahol a done property értéke true, ha a függvény befejezett egyéként false, a value property értéke pedig a yield utáni érték.

### KÉRDÉS 2 / 2
Válaszd ki az igaz állításokat!
Válaszd ki az ÖSSZES megfelelő választ!

A   Meg lehet adni generátor függvényen belül a yield után értéknek egy másik generátor függvény hívás értékét
    B   A hibakezelést mindig a generátor függvényen kívül kell megvalósítanunk, az nem tartalmazhat try catch blokkot
    C   Generátor függvényen belül a return használata esetén mindig hibát kapunk
D   Generátor függvényeket kombinálhatunk Promise-okkal

Helyes válasz
Meg lehet adni generátor függvényen belül a yield után értéknek egy másik generátor függvény hívás értékét: igaz, hiszen a yield* pont erre szolgál
A hibakezelést mindig a generátor függvényen kívül kell megvalósítanunk, az nem tartalmazhat try catch blokkot: hamis, példát is láthattunk a használatára
Generátor függvényen belül a return használata esetén mindig hibát kapunk: nem kapunk hibát egyszerűen next() metódushívásnál nem lesz ott return utáni érték
Generátor függvényeket kombinálhatunk Promise-okkal: természetesen, erre is láthattunk példát. Több fetch kérést küldtünk el a kettő kombinálásával.


## Aszinkron függvények

### KÉRDÉS 1 / 2
Mi lesz az async function visszatérési értéke?  
Válaszd ki az EGYETLEN megfelelő választ!

    A   amit megadunk return után
B   mindig egy Promise
    C   egy Iterable
    D   egy Iterator

Helyes válasz
Az aszinkron függvények visszatérési értéke indig egy Promise.  
A async await valójába csak egy egyszerűsített szintaxis a new Promise, then... részekre.

### KÉRDÉS 2 / 2
Mi lesz a konzolon az alábbi kód lefutása után, ha minden async hívás is véget ért?
    const thenable = {
        age: 30,
        then(resolve, reject) {
            setTimeout(() => resolve(this.age * 2), 1000)
        }
    };

    async function f() {
        const result = await thenable;
        console.log(result)
    }

    f();
Válaszd ki az EGYETLEN megfelelő választ!

    A   Error
B   60
    C   Promise
    D   ƒ Function() { [native code] }

Helyes válasz
Az await után megadtunk egy thenable objectet, tehát egy olyan objektumot aminek van then metódusa.  
Tehát az await után a thenable object then metódusa hívódik meg. Ott egy setTimeout van, ami egy másodperc múlva meghívja resolve-ot, paraméterként átadva neki az age property értékének a dupláját a 2 * 30-at. Az f függvényen belül ezt az értéket fogjuk kiírni.



# 5. JavaScript haladó - Objektum Orientált Programozás

## This

### KÉRDÉS 1 / 4
Mi lesz a this értéke a függvényen belül, amikor meghívjuk? (A globális környezetben vagyunk)
    'use strict';

    function myFunction() {
        return this;
    }

    myFunction();
Válaszd ki az EGYETLEN megfelelő választ!

    A   A function
    B   A Window object
    C   null
D   undefined

Helyes válasz
Strict módban globális kódban elhelyezett függvény esetében mindig undefined.

### KÉRDÉS 2 / 4
Mi lesz a this értéke a függvényen belül, amikor meghívjuk? (A globális környezetben vagyunk)
    function myFunction() {
        return this;
    }

    myFunction();
Válaszd ki az EGYETLEN megfelelő választ!

    A   A function
B   A Window object
    C   null
    D   undefined

Helyes válasz
Strict mód nélkül globális kódban elhelyezett függvény esetében mindig a globális Window object.

### KÉRDÉS 3 / 4
Mi lesz a konzolon az alábbi kód lefutása után?
    'use strict';

    const user = {
        name: 'John',
        myNameIs() {
            console.log(this.name);
        }
    };

    const data = {
        name: 'Jane',
    }

    const person = user.myNameIs;
    person.call(data);
Válaszd ki az EGYETLEN megfelelő választ!

A   Jane
    B   John
    C   Window object
    D   undefined

Helyes válasz
A person-nak átadom a myNameIs metódus referenciáját.
Meghívom ezt a call-al a this értéknek a data-t adom meg, tehát a name értéke Jane lesz. Ez lesz a logon.

### KÉRDÉS 4 / 4
Mi lesz a konzolon, miután rákattintok a gombra? (A gomb a DOM része)
    document.body.insertAdjacentHTML(
        'afterend', 
        '<button onclick="console.log(this)">Click me</button>'
    );
Válaszd ki az EGYETLEN megfelelő választ!

    A   A Window object
B   A Button element
    C   Az Element
    D   undefined

Helyes válasz
Az onclick attributumnál hívjuk meg a console.log() metódust.
A Event a gombon következett be, a this maga a button lesz.


## Objektumok – haladó

### KÉRDÉS 1 / 2
Az alábbiak közül melyik nem egy property descriptor?
Válaszd ki az EGYETLEN megfelelő választ!

    A   enumerable
    B   configurable
    C   writable
D   readable

Helyes válasz
writable: módosítható e vagy sem
configurable: törölhető e
enumerable: felsorolható e

### KÉRDÉS 2 / 2
Minek van prototype tulajdonsága?
Válaszd ki az EGYETLEN megfelelő választ!

    A   minden objektumnak
B   minden függvénynek
    C   minden primitívnek
    D   minden objektumnak ami nem függvény

Helyes válasz
Függvénynek prototype tulajdonsága van, az objecteknek (minden típusú objectnek a függvényeket is beleértve), pedig [[Prototype]] (is).