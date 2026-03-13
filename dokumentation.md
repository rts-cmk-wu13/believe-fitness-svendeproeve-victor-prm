# Believe Fitness
Victor Permild, WU13

## Tech stack
- **Nextjs** som frontend framework (JS, ikke TS)
- **API** som datakilde (Express/SQL-baseret)
- **Tailwind** til styling
- Diverse dependencies/libraries
    - **Zod** til datavalidering
    - **SplideJS** til slider/karrusel
    - **React Toastify** til toast beskeder
    - **React Icons** til ikoner
    - **lodash** til hjælpefunktioner (fx. sammenligning af objekter, debounce til søgefunktion)
    - **jwt-decode** til at læse token payloads og timestamps (e.g expiry checks)

## Routes oversigt
```
├── 📁 app
│   ├── 📁 auth
│   │   ├── 📁 login
│   │   │   └── 📄 page.jsx
│   │   └── 📄 page.jsx
│   ├── 📁 classes
│   │   ├── 📁 [id]
│   │   │   └── 📄 page.jsx
│   │   └── 📄 page.jsx
│   ├── 📁 profile
│   │   └── 📄 page.jsx
│   ├── 📁 search
│   │   └── 📄 page.jsx
│   ├── 📁 splash
│   │   └── 📄 page.jsx
│   ├── 📄 error.jsx
│   ├── 📄 layout.jsx
│   ├── 📄 loading.jsx
│   ├── 📄 not-found.jsx
│   └── 📄 page.jsx ⇐ landing page
```

---

## Projektets struktur og perspektivering heraf
### Framework
Nextjs er et komponent-baseret Javascript framework. Jeg har valgt Nextjs, fordi jeg finder mig godt tilpas i en React-baseret kontekst, men også godt kan lide at der taget en række strukturelle valg på forhånd - fx. synes jeg godt om, at Nextjs bliver leveret med router som default, og jeg synes filbaseret routing giver god mening ift. projektets arkitektur og skalering ifm. dette. Desuden giver next mulighed for at afvikle kode og komponenter på serveren, hvilket åbner op for mange fordele, bl.a. ift. sikkerhed, caching og loading-tider. Nextjs er en moderne industristandard, som er søgt på arbejdsmarkedet. Det er nemt at bygge oven på, både med egen kode og de store antal af biblioteker der lavet af store brede community af adopters. Frameworket udførligt dokumenteret til et virvar af use-cases, og selv hvor docs ikke rammer plet, er det ofte nemt at finde løsninger på problemer mange andre også har stået i tidligere, fx. på stackoverflow og lignende fora.
<br>
<br>

### Struktur
Projektet er bygget i en klassisk Nextjs-struktur, der næsten følger standardinsdtillingerne når man skaber et nyt next project med ```create next-app@latest```. Det eneste jeg har valgt anderledes, er at undlade at bruge typescript, som jeg ellers er fan af funktionelt. Jeg ville dog ikke risikere at havne typescript-problemer, når vi kun har 5 dage til at løse opgaven i. I stedet har jeg forsøgt at være god til at typecaste variable manuelt, og skrive guard-clauses hvor komponenter/funktionen kan gå i stykker, hvis ikke dataen er rigtigt forarbejdet.


Helt basalt er projektet opbygget efter konventionen i NextJS hvor hvert route har et mappenavn (som ender med at blive navnet på routen i browseren), med en page.jsx i hver mappe (se Routes oversigt i toppen af dette dokument). Projektet gør stor brug af genbrugelige komponenter. Komponenterne er opbygget lignende den måde routes er lavet på. Komponentets mappenavn beskriver hvad komponentets funktion, og hver mappe har en index.jsx i sig, der indholder koden til at rendere det. I visse tilfælde ligger der også andre filer i disse komponentmapper. Det kan fx. være hvis en server action hører til et givent komponent, eller hvis ét komponent består af flere relaterede underkomponenter. Se Appendix A1 for oversigt over hele projektets struktur.

Projektets "profile"-view (/profile) er beskyttet af en ``proxy.js`` fil, der navigerer brugeren til auth-logic hvis ikke de er logget ind. Proxy'en er ikke eneste lag af beskyttelse. Adskillige steder i appen checkes der om brugeren er logget ind eller ej, og ændrer indholdet (og redigerings-rettingheder) derefter. Nogle steder bliver man redirected hvis man allerede er logget ind (fx. hvis du besøger /auth eller /auth/login). Ligeledes er der en cookie der husker om brugeren har set splash-screen denne session. Lige nu er dette tjek kun implementeret på forsiden, men tænker også det giver fin mening som en start.
<br>
<br>

### Libraries
Til flere af hjemmesidens features, har jeg valgt at bruge libraries. Bl.a. har jeg brugt SplideJS til testimonial-karrusellen på forsiden, og React Toastify til fx. at give brugeren besked om at en form er sendt succesfuldt afsted (fx. nyhedsbrev/kontaktformular/ratings). 

Selvom toasts og slider-elementer ikke ville have været svære at kode selv, synes jeg det værd at overveje at stå på skuldrene af andre. Ved at vælge libraries, får jeg en masse ting foræret out-of-the-box, som jeg nok ikke ville have prioriteret at kode med i oplevelsen, hvis jeg havde kodet det fra bunden selv. Bl.a. er det out-of-the-box muligt at dragge/swipe i min testimonial-karrusel, og det var også supernemt at tilføje en progress-bar, der viser hvor lang til der går før slidet automatisk skifter. Brugen af libraries gør det på mange måde nemmere for udviklere at blive introduceret (eller genintroduceret) til projektet. Alt der er inkluderet er vedligeholdt og godt dokumenteret, hvilket sparer tid ift. at skrive dokumentation selv eller at skulle introducere andre programmører til ens selvskrevne kode alle steder. I stedet er det muligt at pege folk til dokumentation/fora forbundet med de libraries der er brugt. 

Der er selvfølgelig også potentielle ulemper, da man ligesom gør sig selv afhængig af andres kode. Vi må holde øje med at bibliotekerne ikke uddør/breaker vores kode, og ikke er mål for sikkerhedsangreb/brud. Alt dette er ikke rigtig et problem i vores lille opgave-miljø, men jeg vil tilføje at det tog mig lidt længere end normalt, lige at sætte mig ind i hvordan mine slides/toasts kunne styles, når man skulle overskrive normal-indstillingerne.

Projektets ensartede struktur, den udbredte brug af komponenter og hjælpefunktioner, samt inklusionen af libraries er med til at gøre appen skalérbar. Det tog en smule længere til at komme fra start, men så snart en god handfuld komponenter var lavet, begyndte det at tage fart, og især de sidste dage op til aflevering var det nemt at være produktiv. I projektets nuværende stand, vil jeg vove at påstå at det skulle være meget ligetil at tilføje nye views/pages/komponenter herfra, samt meget nemmere at lave yderligere interaktioner API'et.
<br>
<br>

## Ekstraopgave
Jeg har løst **Valgfri opgave A – Ratings** <br>
Desuden har jeg gjort det muligt for brugeren at forblive logget ind - dog med den note at en token (pga. den måde API er leveret) kun valid i max. 1 time. Men det er muligt at sætte en session cookie vs. expiresIn/validUntil-cookie, så tokens kan bevares selv hvis sessionen slutter midlertidigt (fx. hvis browseren lukkes/åbnes igen). 
<br>
<br>

## Kodeeksempel
Jeg har valgt at dele denne fetch-wrapper-funktion, som jeg har brugt flittigt rundt omkring i appen - ja, faktisk alle steder jeg læser og skriver data til api'et. Jeg har valgt at dele denne funktion, da det nok er den enkelte fil jeg har brugt mest tid på. Jeg har endda skrevet en lille JSDocs specifikation til den. Det gør det nemmere at bruge funktionen rundt omkring i appen (uden at skulle tilbage i funktionen og se hvad der er hvad). VSCode viser en popup med funktionens parametre som man begynder at taste. Desuden er det lettere at komme tilbage til funktionen en senere gang. Nu brugte jeg ikke typescript i dette projekt, men det bl.a. disse lignende egenskaber jeg godt kan lide ved typescript (udover type-safety).

I stedet for at skrive en lang liste om hvad funktionen gør her, har jeg kommenteret koden blok for blok, så I kan følge med i mine intentioner med denne funktion. Jeg koder altid på engelsk (inkl. kommentarer), så jeg håber I kan leve med at kommentarerne er på engelsk. Efter kode-eksemplet vil jeg forklare lidt om hvorfor denne funktion har været til hjælp, hvordan den bruges i praksis mm.

[General-purpose Fetch Wrapper](/lib/dal/general.js) ⇐ Klik her for at se filen

```javascript
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { checkTokenValidity } from "../utils";

// Implemenent JSDocs for future developers (including myself)
/**
 * General-purpose fetch utility
 * @param {string} endpoint - API path (e.g. "/api/v1/activities")
 * @param {object} options - Configuration object
 *    options.method - HTTP method (default: GET)
 *    options.values - JSON object or FormData to send
 *    options.secured - Boolean, attach Bearer token if true
 *    options.headers - Extra headers
 *    options.query - Object of query params
 */

export async function fetchFromAPI(
    endpoint,
    {
        method = "GET",
        values = null,
        secured = false,
        headers = {},
        query = null,
    } = {}
) {
    // Use Next.js server-side API to access cookies for the current request. 
    // Fetching cookies is cheap, so usually it’s fine to do it unconditionally
    // cookies() gives a CookieStore you can read from; this is only available in server components / server actions.
    const cookieStore = await cookies();

    // Manually check if we have a token, and check if it's expired
    // Grab the token if it exists. Using optional chaining avoids errors if cookie is missing.
    const token = cookieStore.get("believe-access-token")?.value;
    let tokenExpired = checkTokenValidity(token);

    // If route is secured but no token exists, redirect to auth.
    // redirect() throws and stops execution.
    if (secured && !token) {
        redirect("/auth");
    }

    // Start building the full API URL.
    let url = `http://localhost:4000${endpoint}`;

    // Convert query object into URL query string if provided.
    if (query && typeof query === "object") {
        // Only append if query string is not empty.
        const params = new URLSearchParams(query).toString();
        if (params) url += `?${params}`;
    }

    // Detect if body is FormData
    const isFormData = values instanceof FormData;

    const response = await fetch(url, {
        method, // HTTP method (GET, POST, etc.)
        headers: {
            // Default JSON header, omit for FormData
            ...(!isFormData && { "Content-Type": "application/json" }),

            // Attach Bearer token for secured requests.
            ...(secured && token && {
                Authorization: `Bearer ${token}`,
            }),

            // Allow caller to override or extend headers.
            ...headers,
        },


        // Include request body only if values exist.
        // If it's FormData, pass it directly; otherwise stringify JSON.
        ...(values && {
            body: isFormData ? values : JSON.stringify(values),
        }),
    });

    // If the HTTP status is not 2xx, treat it as an error.
    // response.ok is true for status codes 200–299.
    if (!response.ok) {
        console.warn("Response not ok!")

        //If token is expired, stop any further investigation to the problem
        if (tokenExpired) {
            return null;
        }

        // Attempt to read the error message from the response body.
        // Hopefully we get useful error details in the body.
        const text = await response.text();

        //Check if call is unauthorized (401)
        if (response.status === 401) {
            console.error("Credentials are missing or invalid")
            return null;
        }

        // Throw an error to stop execution and let the caller handle it.
        // If no body exists, fallback to a generic message.
        throw new Error(text || `Request failed (${response.status})`);
    }

    // The server guarantees there is no response body (204 means "No Content").
    // Trying to parse JSON here would throw an error.
    if (response.status === 204) {
        return { success: true };
    }

    // Read the body as plain text.
    // We use .text() instead of .json() to avoid automatic JSON parsing errors.
    const text = await response.text();

    // If the body is empty (""), return a success object.
    // This prevents "Unexpected end of JSON input".
    if (!text) {
        return { success: true };
    }

    // Attempt to parse the response as JSON.
    // Not all APIs return JSON — some return plain text.
    try {
        return JSON.parse(text);
    } catch {
        // If parsing fails, return the raw text instead of crashing.
        // This makes the function more robust and flexible.
        return text;
    }
}
```

### Funktionens Raison d'être
Grunden til at jeg lavede denne wrapper, var at jeg gerne ville prøve at standardisere hvordan fetches blev lavet rundt omkring i appen. Jeg ville gerne have en centraliseret måde at opbygge mine fetches. Endnu vigtigere, ville jeg gerne have en centraliseret måde at lave fejlhåndtering, så det (så vidt muligt) ikke skulle gøres individuelt på hvert eneste af de mange fetches, der bliver laver rundt omkring i appen (15+ styks i skrivende stund). <br>

Lad os kigge på et simpelt eksempel i brug:
![Simpelt POST eksempel](/assignment/docs_eksempel_1.png)

Ovenstående endpoint kan interageres med således:

```javascript
const values = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

const result = await fetchFromAPI("/api/v1/messages", { method: "POST", values: values })
```
Ligesom et normalt ```fetch()``` er standard-metoden ```GET```, så vi specificerer at dette skal være et ```POST```. Og så er det bare og sende ```formData```værdierne med, og funktionen vil selv dynamisk generere en ```body``` og bruger ```JSON.Stringify``` til værdierne. I min app bliver værdierne selvfølgelig også valideret før de sendes til API'et - ovenstående er bare et hurtigt eksempel.
<br>
<br>

En anden fordel er, at jeg med dette fetch kan inkludere nøglen (key'en) ```secured```til mit ```options```-objekt. Således kan jeg, alene ved at sætte ```options:{secured:true}```, b.la. sørge for at følgende punker er taget højde for (ikke 100% i rækkefølge):

- Sig til funktionen, at det pågælden endpoint er beskyttet, og derfor kræver en gyldig token
- Forsøge at finde selvsamme token fra brugerens cookies
- Hvis ikke ikke token findes, kan der navigeres til at logge ind (så brugeren har mulighed anskaffe sig en gyldig token)
- Dynamisk tilføje Authorization Header med Bearer "ey......" hvis token findes og ruten er beskyttet
- Tjekke om token er udløbet (selvom den findes), og logisk give et andet udfald hvis ja.
<br>
<br>

Alt sammen, bare ved at sætte en enklet key i mine options. Og således kan følgende endpoint...
![POST eksempel med beskyttet route](/assignment/docs_eksempel_2.png)

...interageres med således

```javascript
const values = {
        rating: Number(formData.get("rating")),
        userId: formData.get("userId"),
        classId: formData.get("classId")
    };

    const result = await fetchFromAPI(`/api/v1/classes/${values.classId}/ratings`, {
        method: "POST",
        values: values,
        secured: true
    })
```

Det har været fedt, ikke at skulle lave sådanne logik forfra hver gang jeg skulle tilgå et endpoint i API'et fra min app (beskyttet endpoint eller ej). <br><br>
Er der denne funktion perfekt? Nej. Har jeg genopfundet den dybe tallerken? Måske. Men denne wrapper har fulgt mig omkring i projektet fra dag 1. Sjældent har den fejlet, og hvis den har, har jeg været inde og forbedre og udbygge den på ny. Men vigtigst af alt har det været en sjov og lærerig process at skulle lave en funktion der skal kunne modtage og berarbejde så meget information - og så endda med et API i den anden ende som øjeblikkelig dommer. Alt i alt, synes jeg synes selv jeg kom godt i mål. I skrivende stund er der ikke nogen opgaver jeg stødt på, hvor min kode ikke har kunne håndtere hvad API'et har krævet af den.

## Appendix

### A1 - Projektstruktur
```
├── 📁 app
│   ├── 📁 (landing)
│   │   ├── 📁 landing-footer
│   │   │   └── 📄 index.jsx
│   │   ├── 📁 landing-hero
│   │   │   └── 📄 index.jsx
│   │   └── 📁 landing-main
│   │       ├── 📁 landing-section
│   │       │   ├── 📁 landing-contact
│   │       │   │   ├── 📄 action.js
│   │       │   │   └── 📄 index.jsx
│   │       │   ├── 📁 landing-news
│   │       │   │   ├── 📁 news-item
│   │       │   │   │   └── 📄 index.jsx
│   │       │   │   └── 📄 index.jsx
│   │       │   ├── 📁 landing-newsletter
│   │       │   │   ├── 📄 action.js
│   │       │   │   └── 📄 index.jsx
│   │       │   ├── 📁 landing-testimonials
│   │       │   │   ├── 📁 testimonial-slider
│   │       │   │   │   └── 📄 index.jsx
│   │       │   │   └── 📄 index.jsx
│   │       │   └── 📄 index.jsx
│   │       └── 📄 index.jsx
│   ├── 📁 auth
│   │   ├── 📁 login
│   │   │   ├── 📁 login-form
│   │   │   │   ├── 📄 action.js
│   │   │   │   └── 📄 index.jsx
│   │   │   └── 📄 page.jsx
│   │   └── 📄 page.jsx
│   ├── 📁 classes
│   │   ├── 📁 [id]
│   │   │   ├── 📁 participant-count
│   │   │   │   └── 📄 index.jsx
│   │   │   ├── 📁 participation-form
│   │   │   │   ├── 📄 action.js
│   │   │   │   └── 📄 index.jsx
│   │   │   └── 📄 page.jsx
│   │   ├── 📁 class-main
│   │   │   ├── 📁 class-hero
│   │   │   │   ├── 📁 rating-popover
│   │   │   │   │   ├── 📄 action.js
│   │   │   │   │   └── 📄 index.jsx
│   │   │   │   └── 📄 index.jsx
│   │   │   ├── 📁 class-item
│   │   │   │   ├── 📁 rating-meter
│   │   │   │   │   └── 📄 index.jsx
│   │   │   │   └── 📄 index.jsx
│   │   │   ├── 📁 class-slider
│   │   │   ├── 📁 class-trainer
│   │   │   │   └── 📄 index.jsx
│   │   │   └── 📄 index.jsx
│   │   └── 📄 page.jsx
│   ├── 📁 profile
│   │   ├── 📁 calendar-item
│   │   │   ├── 📁 leave-form
│   │   │   │   └── 📄 index.jsx
│   │   │   └── 📄 index.jsx
│   │   ├── 📁 logout-form
│   │   │   ├── 📄 action.js
│   │   │   └── 📄 index.jsx
│   │   └── 📄 page.jsx
│   ├── 📁 search
│   │   ├── 📁 search-main
│   │   │   ├── 📁 search-bar
│   │   │   │   └── 📄 index.jsx
│   │   │   └── 📄 index.jsx
│   │   └── 📄 page.jsx
│   ├── 📁 splash
│   │   ├── 📁 animated-header
│   │   │   └── 📄 index.jsx
│   │   └── 📄 page.jsx
│   ├── 📄 error.jsx
│   ├── 🎨 globals.css
│   ├── 🖼️ icon.svg
│   ├── 📄 layout.jsx
│   ├── 📄 loading.jsx
│   ├── 📄 not-found.jsx
│   └── 📄 page.jsx
├── 📁 assignment
│   ├── 📕 Believe Fitness Kravsspecifikation.pdf
│   ├── 📕 Believe Fitness Opgavebeskrivelse.pdf
│   ├── 📝 README.md
│   ├── 📝 dokumentation.md
│   ├── 📝 log.md
│   └── 🖼️ welcome.jpg
├── 📁 components
│   ├── 📁 layout
│   │   ├── 📁 app-main
│   │   │   └── 📄 index.jsx
│   │   ├── 📁 page-container
│   │   │   └── 📄 index.jsx
│   │   └── 📁 page-section
│   │       └── 📄 index.jsx
│   └── 📁 ui
│       ├── 📁 buttons
│       │   ├── 📁 button-menu
│       │   │   └── 📄 index.jsx
│       │   ├── 📁 button-primary
│       │   │   └── 📄 index.jsx
│       │   └── 📁 button-secondary
│       │       └── 📄 index.jsx
│       ├── 📁 card-list
│       │   └── 📄 index.jsx
│       ├── 📁 company-logo
│       │   └── 📄 index.jsx
│       ├── 📁 horizontal-divider
│       │   └── 📄 index.jsx
│       ├── 📁 input-field
│       │   └── 📄 index.jsx
│       ├── 📁 nav-header
│       │   ├── 📁 menu-overlay
│       │   │   └── 📄 index.jsx
│       │   └── 📄 index.jsx
│       └── 📁 spinning-loader
│           └── 📄 index.jsx
├── 📁 lib
│   ├── 📁 dal
│   │   ├── 📄 general.js
│   │   └── 📄 session.js
│   ├── 📄 fuzzy-search.js
│   ├── 📄 schemas.js
│   └── 📄 utils.js
├── 📁 public
│   ├── 🖼️ splash.jpg
│   ├── 🖼️ splash_alt.jpg
│   ├── 🖼️ splash_alt_full.jpg
│   ├── 🖼️ splash_full.jpg
│   └── 🖼️ welcome.jpg
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.mjs
├── ⚙️ jsconfig.json
├── 📄 next.config.mjs
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 postcss.config.mjs
└── 📄 proxy.js
```

---
