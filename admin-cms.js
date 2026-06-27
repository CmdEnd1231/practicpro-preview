(function () {
  const STORAGE_KEY = "practicpro_cms_items_v1";
  const DIACRITICS_MIGRATION_KEY = "practicpro_diacritics_migration_20260627";
  const STORAGE_BACKUP_KEY = "practicpro_cms_items_backup_before_migration_20260627";
  const CATEGORY_STORAGE_KEY = "practicpro_cms_categories_v1";
  const CATEGORY_SPLIT_KEY = "practicpro_cms_categories_split_20260627";

  const seedItems = [
    {
      id: "articol-cv",
      type: "article",
      status: "published",
      title: "CV-ul tău poate spune o poveste buna",
      category: "CV",
      date: "2026-06-24",
      excerpt: "Ghid simplu pentru elevii care aplică la primul stagiu de practică.",
      image: "",
      content: "<p>Un CV bun este clar, scurt și adaptat primului stagiu de practică. Include datele de contact, școala, abilitățile și proiectele relevante.</p>"
    },
    {
      id: "articol-interviu",
      type: "article",
      status: "published",
      title: "Cum răspunzi la primul interviu",
      category: "Interviu",
      date: "2026-06-25",
      excerpt: "Întrebări frecvente, răspunsuri naturale și exemple practice.",
      image: "",
      content: "<p>Primul interviu este mai ușor dacă știi ce vrei să transmiți: seriozitate, curiozitate și dorința de a învăța.</p>"
    },
    {
      id: "articol-documente",
      type: "article",
      status: "published",
      title: "Ce documente sunt necesare pentru practică",
      category: "Documente",
      date: "2026-06-26",
      excerpt: "Contractul de practică, anexa pedagogică și pașii de validare prin școala.",
      image: "",
      content: "<p>După acceptarea la un stagiu, elevul merge la școala pentru documentele necesare. școala marchează participarea după semnare.</p>"
    },
    {
      id: "eveniment-primul-stagiu",
      type: "event",
      status: "published",
      title: "De la școala la primul stagiu",
      category: "Workshop",
      date: "2026-06-24",
      excerpt: "O sesiune despre cum alegi oportunitatea și cum îți pregătești aplicația.",
      image: "",
      location: "Online",
      content: "<p>Workshop dedicat elevilor care vor să înțeleagă pașii de la căutarea unei oferte până la începerea stagiului.</p>"
    },
    {
      id: "eveniment-angajatori",
      type: "event",
      status: "published",
      title: "Ce caută angajatorii la elevi",
      category: "Q&A",
      date: "2026-06-30",
      excerpt: "Dialog cu reprezentanți ai companiilor despre așteptări, atitudine și abilități utile.",
      image: "",
      location: "Hybrid",
      content: "<p>Eveniment interactiv pentru elevii care vor să înțeleagă cum să se prezinte la primul contact cu o companie.</p>"
    },
    {
      id: "eveniment-parteneri",
      type: "event",
      status: "published",
      title: "Ziua partenerilor PracticPRO",
      category: "Companii",
      date: "2026-07-08",
      excerpt: "Prezentări scurte ale companiilor și exemple de activități de practică.",
      image: "",
      location: "Fizic",
      content: "<p>Companiile partenere prezintă domeniile în care pot primi elevi și tipurile de activități propuse.</p>"
    }
  ];

  const pageTextItems = [
    {
      id: "home-hero-eyebrow",
      type: "page",
      status: "published",
      title: "Homepage - eticheta hero",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Text scurt de deasupra titlului principal.",
      image: "",
      location: "index.html",
      content: "Platforma pentru practică, orientare și colaborare"
    },
    {
      id: "home-hero-title",
      type: "page",
      status: "published",
      title: "Homepage - titlu principal",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Titlul mare din prima secțiune.",
      image: "",
      location: "index.html",
      content: "Stagii de practică pentru elevi, școli și companii"
    },
    {
      id: "home-hero-copy",
      type: "page",
      status: "published",
      title: "Homepage - subtitlu hero",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Descrierea de sub titlul principal.",
      image: "",
      location: "index.html",
      content: "PracticPRO aduce într-un singur loc ofertele de practică, companiile partenere, școlile implicate și resursele care îi ajută pe elevi să facă primul pas spre carieră."
    },
    {
      id: "home-hero-button-student",
      type: "page",
      status: "published",
      title: "Hero - buton elev",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Textul butonului principal pentru elevi.",
      image: "",
      location: "index.html",
      content: "Sunt elev"
    },
    {
      id: "home-hero-button-company",
      type: "page",
      status: "published",
      title: "Hero - buton companie",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Textul butonului pentru companii.",
      image: "",
      location: "index.html",
      content: "Reprezint o companie"
    },
    {
      id: "home-hero-button-school",
      type: "page",
      status: "published",
      title: "Hero - buton școala",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Textul butonului pentru școli.",
      image: "",
      location: "index.html",
      content: "Reprezint o școala"
    },
    {
      id: "home-hero-pill-offers",
      type: "page",
      status: "published",
      title: "Hero - badge oferte",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Primul text scurt de sub butoanele hero.",
      image: "",
      location: "index.html",
      content: "Oferte de practică verificate"
    },
    {
      id: "home-hero-pill-partnerships",
      type: "page",
      status: "published",
      title: "Hero - badge parteneriate",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Al doilea text scurt de sub butoanele hero.",
      image: "",
      location: "index.html",
      content: "Parteneriate școala-companie"
    },
    {
      id: "home-hero-pill-resources",
      type: "page",
      status: "published",
      title: "Hero - badge resurse",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Al treilea text scurt de sub butoanele hero.",
      image: "",
      location: "index.html",
      content: "Resurse și evenimente pentru elevi"
    },
    {
      id: "home-roles-title",
      type: "page",
      status: "published",
      title: "Homepage - titlu roluri",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Titlul secșiunii de alegere rol.",
      image: "",
      location: "index.html",
      content: "Cu ce rol intri în platformă?"
    },
    {
      id: "home-roles-copy",
      type: "page",
      status: "published",
      title: "Homepage - descriere roluri",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Descrierea secșiunii de roluri.",
      image: "",
      location: "index.html",
      content: "Alege categoria potrivită și vezi ce poți face în PracticPRO. Fiecare rol are un traseu clar, de la informare până la înscriere și gestionarea activității."
    },
    {
      id: "home-card-student-kicker",
      type: "page",
      status: "published",
      title: "Card elev - eticheta",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Eticheta cardului pentru elevi.",
      image: "",
      location: "index.html",
      content: "Ești elev?"
    },
    {
      id: "home-card-student-title",
      type: "page",
      status: "published",
      title: "Card elev - titlu",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Titlul cardului pentru elevi.",
      image: "",
      location: "index.html",
      content: "Descoperă stagii de practică"
    },
    {
      id: "home-card-student-copy",
      type: "page",
      status: "published",
      title: "Card elev - descriere",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Descrierea cardului pentru elevi.",
      image: "",
      location: "index.html",
      content: "Caută oferte potrivite, pregătește-ți profilul și aplică la companiile partenere cu școala ta."
    },
    {
      id: "home-card-student-action",
      type: "page",
      status: "published",
      title: "Card elev - actiune",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Textul linkului din cardul pentru elevi.",
      image: "",
      location: "index.html",
      content: "Intră în zona elevului"
    },
    {
      id: "home-card-company-kicker",
      type: "page",
      status: "published",
      title: "Card companie - eticheta",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Eticheta cardului pentru companii.",
      image: "",
      location: "index.html",
      content: "Reprezinți o companie?"
    },
    {
      id: "home-card-company-title",
      type: "page",
      status: "published",
      title: "Card companie - titlu",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Titlul cardului pentru companii.",
      image: "",
      location: "index.html",
      content: "Publică oferte și găsește elevi motivați"
    },
    {
      id: "home-card-company-copy",
      type: "page",
      status: "published",
      title: "Card companie - descriere",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Descrierea cardului pentru companii.",
      image: "",
      location: "index.html",
      content: "Completează profilul companiei, solicită parteneriate cu școli și gestionează aplicațiile primite."
    },
    {
      id: "home-card-company-action",
      type: "page",
      status: "published",
      title: "Card companie - actiune",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Textul linkului din cardul pentru companii.",
      image: "",
      location: "index.html",
      content: "Intră în zona companiei"
    },
    {
      id: "home-card-school-kicker",
      type: "page",
      status: "published",
      title: "Card școala - eticheta",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Eticheta cardului pentru școli.",
      image: "",
      location: "index.html",
      content: "Reprezinți o școală?"
    },
    {
      id: "home-card-school-title",
      type: "page",
      status: "published",
      title: "Card școala - titlu",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Titlul cardului pentru școli.",
      image: "",
      location: "index.html",
      content: "Urmărește parteneriatele și elevii"
    },
    {
      id: "home-card-school-copy",
      type: "page",
      status: "published",
      title: "Card școala - descriere",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Descrierea cardului pentru școli.",
      image: "",
      location: "index.html",
      content: "Vezi cererile companiilor, aprobă colaborările și monitorizează elevii acceptați la practică."
    },
    {
      id: "home-card-school-action",
      type: "page",
      status: "published",
      title: "Card școala - actiune",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Textul linkului din cardul pentru școli.",
      image: "",
      location: "index.html",
      content: "Intră în zona școlii"
    },
    {
      id: "home-flow-title",
      type: "page",
      status: "published",
      title: "Homepage - titlu traseu",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Titlul secșiunii despre fluxul de practică.",
      image: "",
      location: "index.html",
      content: "Un traseu simplu, de la ofertă la practică"
    },
    {
      id: "home-flow-copy",
      type: "page",
      status: "published",
      title: "Homepage - descriere traseu",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Descrierea fluxului elev-școala-companie.",
      image: "",
      location: "index.html",
      content: "PracticPRO păstrează legătura dintre elev, școala și compania pe tot parcursul stagiului, astfel încât fiecare pas să fie vizibil și ușor de urmărit."
    },
    {
      id: "home-step-1-title",
      type: "page",
      status: "published",
      title: "Traseu - pas 1 titlu",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Titlul primului pas.",
      image: "",
      location: "index.html",
      content: "Companiile își prezintă oportunitățile"
    },
    {
      id: "home-step-1-copy",
      type: "page",
      status: "published",
      title: "Traseu - pas 1 descriere",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Descrierea primului pas.",
      image: "",
      location: "index.html",
      content: "Fiecare ofertă include domeniul, locația, perioada, numărul de locuri și cerințele pentru elevi."
    },
    {
      id: "home-step-2-title",
      type: "page",
      status: "published",
      title: "Traseu - pas 2 titlu",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Titlul pasului doi.",
      image: "",
      location: "index.html",
      content: "școlile validează parteneriatele"
    },
    {
      id: "home-step-2-copy",
      type: "page",
      status: "published",
      title: "Traseu - pas 2 descriere",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Descrierea pasului doi.",
      image: "",
      location: "index.html",
      content: "O companie devine vizibilă pentru elevi după ce parteneriatul cu școala este verificat și acceptat."
    },
    {
      id: "home-step-3-title",
      type: "page",
      status: "published",
      title: "Traseu - pas 3 titlu",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Titlul pasului trei.",
      image: "",
      location: "index.html",
      content: "Elevii aplică direct din platformă"
    },
    {
      id: "home-step-3-copy",
      type: "page",
      status: "published",
      title: "Traseu - pas 3 descriere",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Descrierea pasului trei.",
      image: "",
      location: "index.html",
      content: "Elevii își completează profilul, încarcă CV-ul și urmăresc statusul aplicațiilor din contul lor."
    },
    {
      id: "home-step-4-title",
      type: "page",
      status: "published",
      title: "Traseu - pas 4 titlu",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Titlul pasului patru.",
      image: "",
      location: "index.html",
      content: "Practica este monitorizată până la final"
    },
    {
      id: "home-step-4-copy",
      type: "page",
      status: "published",
      title: "Traseu - pas 4 descriere",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Descrierea pasului patru.",
      image: "",
      location: "index.html",
      content: "școala vede elevii acceptați, documentele necesare și participarea la stagiile aprobate."
    },
    {
      id: "home-latest-title",
      type: "page",
      status: "published",
      title: "Resurse recente - titlu",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Titlul secșiunii de resurse și evenimente recente.",
      image: "",
      location: "index.html",
      content: "Cele mai noi resurse și evenimente"
    },
    {
      id: "home-latest-copy",
      type: "page",
      status: "published",
      title: "Resurse recente - descriere",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Descrierea secșiunii de resurse și evenimente recente.",
      image: "",
      location: "index.html",
      content: "Materiale practice, ghiduri și întâlniri care îi ajută pe elevi, școli și companii să parcurgă mai clar etapele stagiului de practică."
    },
    {
      id: "home-latest-button",
      type: "page",
      status: "published",
      title: "Resurse recente - buton",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Textul butonului către bibliotecă de resurse.",
      image: "",
      location: "index.html",
      content: "Vezi toate resursele"
    },
    {
      id: "home-partners-title",
      type: "page",
      status: "published",
      title: "Parteneri - titlu",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Titlul secșiunii de parteneri.",
      image: "",
      location: "index.html",
      content: "Companii care pot susține primul pas în carieră"
    },
    {
      id: "home-partners-copy",
      type: "page",
      status: "published",
      title: "Parteneri - descriere",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Descrierea secșiunii de parteneri.",
      image: "",
      location: "index.html",
      content: "Platforma poate evidenția companiile partenere și domeniile în care elevii pot face primul pas profesional."
    },
    {
      id: "home-footer-copy",
      type: "page",
      status: "published",
      title: "Footer - descriere",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Textul descriptiv din footer.",
      image: "",
      location: "index.html",
      content: "Platforma conectează elevii, școlile și companiile prin stagii de practică, parteneriate, resurse și evenimente relevante."
    },
    {
      id: "home-footer-compliance",
      type: "page",
      status: "published",
      title: "Footer - text finantare",
      category: "Homepage",
      date: "2026-06-24",
      excerpt: "Textul de conformitate și finantare din footer.",
      image: "",
      location: "index.html",
      content: "Proiect cofinanțat de Uniunea Europeană prin Fondul Social European Plus (FSE+). Programul Educație și Ocupare 2021-2027. PracticPRO - Oportunități în carieră profesională prin stagii de practică."
    },
    {
      id: "student-hero-title",
      type: "page",
      status: "published",
      title: "Elevi - titlu hero",
      category: "Elevi",
      date: "2026-06-24",
      excerpt: "Titlul paginii pentru elevi.",
      image: "",
      location: "elevi.html",
      content: "Alege un stagiu de practică potrivit pentru tine"
    },
    {
      id: "student-hero-copy",
      type: "page",
      status: "published",
      title: "Elevi - subtitlu hero",
      category: "Elevi",
      date: "2026-06-24",
      excerpt: "Descrierea paginii pentru elevi.",
      image: "",
      location: "elevi.html",
      content: "Găsești oferte publicate de companii partenere cu școala ta, îți pregătești profilul și urmărești aplicațiile direct din cont."
    },
    {
      id: "company-hero-title",
      type: "page",
      status: "published",
      title: "Companii - titlu hero",
      category: "Companii",
      date: "2026-06-24",
      excerpt: "Titlul paginii pentru companii.",
      image: "",
      location: "companii.html",
      content: "Publică stagii și construiește parteneriate cu școlile"
    },
    {
      id: "company-hero-copy",
      type: "page",
      status: "published",
      title: "Companii - subtitlu hero",
      category: "Companii",
      date: "2026-06-24",
      excerpt: "Descrierea paginii pentru companii.",
      image: "",
      location: "companii.html",
      content: "Companiile își pot prezenta oportunitățile, pot solicita parteneriate și pot gestiona aplicațiile elevilor într-un flux clar."
    },
    {
      id: "school-hero-title",
      type: "page",
      status: "published",
      title: "școli - titlu hero",
      category: "școli",
      date: "2026-06-24",
      excerpt: "Titlul paginii pentru școli.",
      image: "",
      location: "scoli.html",
      content: "Coordoneaza parteneriatele și elevii aflati în practică"
    },
    {
      id: "school-hero-copy",
      type: "page",
      status: "published",
      title: "școli - subtitlu hero",
      category: "școli",
      date: "2026-06-24",
      excerpt: "Descrierea paginii pentru școli.",
      image: "",
      location: "scoli.html",
      content: "școala vede cererile companiilor, verifica documentele și urmărește elevii acceptați la stagii."
    },
    {
      id: "resources-hero-title",
      type: "page",
      status: "published",
      title: "Resurse - titlu hero",
      category: "Resurse",
      date: "2026-06-24",
      excerpt: "Titlul paginii de resurse.",
      image: "",
      location: "resources.html",
      content: "Resurse pentru primul stagiu de practică"
    },
    {
      id: "resources-hero-copy",
      type: "page",
      status: "published",
      title: "Resurse - subtitlu hero",
      category: "Resurse",
      date: "2026-06-24",
      excerpt: "Descrierea paginii de resurse.",
      image: "",
      location: "resources.html",
      content: "Ghiduri scurte, articole și materiale utile pentru elevi, școli și companii. Tot ce este publicat din CMS apare automat aici."
    },
    {
      id: "events-hero-title",
      type: "page",
      status: "published",
      title: "Evenimente - titlu hero",
      category: "Evenimente",
      date: "2026-06-24",
      excerpt: "Titlul paginii de evenimente.",
      image: "",
      location: "events.html",
      content: "Evenimente, workshopuri și întâlniri utile"
    },
    {
      id: "events-hero-copy",
      type: "page",
      status: "published",
      title: "Evenimente - subtitlu hero",
      category: "Evenimente",
      date: "2026-06-24",
      excerpt: "Descrierea paginii de evenimente.",
      image: "",
      location: "events.html",
      content: "Sesiuni pentru elevi, întâlniri cu angajatori și evenimente dedicate școlilor și companiilor partenere."
    },
    {
      id: "contact-hero-title",
      type: "page",
      status: "published",
      title: "Contact - titlu hero",
      category: "Contact",
      date: "2026-06-24",
      excerpt: "Titlul paginii de contact.",
      image: "",
      location: "contact.html",
      content: "Ai nevoie de informații despre platformă?"
    },
    {
      id: "contact-hero-copy",
      type: "page",
      status: "published",
      title: "Contact - subtitlu hero",
      category: "Contact",
      date: "2026-06-24",
      excerpt: "Descrierea paginii de contact.",
      image: "",
      location: "contact.html",
      content: "Scrie-ne pentru detalii despre înscriere, conturi, parteneriate sau organizarea stagiilor de practică."
    }
  ];

  function pageText(id, title, location, content, section) {
    return {
      id,
      type: "page",
      status: "published",
      title,
      category: section || "Texte pagină",
      date: "2026-06-27",
      excerpt: title,
      image: "",
      location,
      content
    };
  }

  const extraPageTextItems = [
    pageText("student-hero-eyebrow", "Hero - eticheta", "elevi.html", "Pentru elevi", "Hero"),
    pageText("student-main-title", "Conținut - titlu secțiune", "elevi.html", "Ce poți face ca elev", "Conținut principal"),
    pageText("student-main-copy", "Conținut - descriere secțiune", "elevi.html", "PracticPRO te ajută să vezi oportunitățile disponibile, să aplici informat și să știi ce urmează după ce ești acceptat.", "Conținut principal"),
    pageText("student-card-1-title", "Card 1 - titlu", "elevi.html", "Vezi oferte eligibile", "Carduri informații"),
    pageText("student-card-1-copy", "Card 1 - descriere", "elevi.html", "Ofertele afișate sunt legate de școala selectată la înscriere și de parteneriatele acceptate.", "Carduri informații"),
    pageText("student-card-2-title", "Card 2 - titlu", "elevi.html", "îți completezi profilul", "Carduri informații"),
    pageText("student-card-2-copy", "Card 2 - descriere", "elevi.html", "Adaugi datele de bază, școala, domeniile de interes și CV-ul în format PDF.", "Carduri informații"),
    pageText("student-card-3-title", "Card 3 - titlu", "elevi.html", "Aplici la stagii", "Carduri informații"),
    pageText("student-card-3-copy", "Card 3 - descriere", "elevi.html", "Trimiți aplicația către companie și urmărești statusul: trimisă, în analiză, acceptată sau respinsă.", "Carduri informații"),
    pageText("student-card-4-title", "Card 4 - titlu", "elevi.html", "Finalizezi documentele", "Carduri informații"),
    pageText("student-card-4-copy", "Card 4 - descriere", "elevi.html", "După acceptare, mergi la școala pentru contractul de practică și anexa pedagogică.", "Carduri informații"),
    pageText("student-form-title", "Formular - titlu", "elevi.html", "Intră în contul de elev", "Formular lateral"),
    pageText("student-form-copy", "Formular - descriere", "elevi.html", "Conectează-te sau creează cont pentru a vedea ofertele disponibile pentru școala ta.", "Formular lateral"),
    pageText("student-form-label-email", "Formular - label email", "elevi.html", "Email", "Formular lateral"),
    pageText("student-form-label-school", "Formular - label școala", "elevi.html", "școala", "Formular lateral"),
    pageText("student-form-button-login", "Formular - buton conectare", "elevi.html", "Intră în cont", "Formular lateral"),
    pageText("student-form-button-register", "Formular - buton cont nou", "elevi.html", "Creează cont nou", "Formular lateral"),

    pageText("company-hero-eyebrow", "Hero - eticheta", "companii.html", "Pentru companii", "Hero"),
    pageText("company-main-title", "Conținut - titlu secțiune", "companii.html", "Fluxul companiei", "Conținut principal"),
    pageText("company-main-copy", "Conținut - descriere secțiune", "companii.html", "Înainte ca o ofertă să ajunga la elevi, compania își completează profilul și are un parteneriat acceptat cu școala.", "Conținut principal"),
    pageText("company-card-1-title", "Card 1 - titlu", "companii.html", "Completezi profilul", "Carduri informații"),
    pageText("company-card-1-copy", "Card 1 - descriere", "companii.html", "Adaugi numele companiei, CUI, sediul social, punctul de lucru și datele reprezentantului.", "Carduri informații"),
    pageText("company-card-2-title", "Card 2 - titlu", "companii.html", "Generezi contractul", "Carduri informații"),
    pageText("company-card-2-copy", "Card 2 - descriere", "companii.html", "Datele completate intră automat în template-ul de contract, pregătit pentru semnare.", "Carduri informații"),
    pageText("company-card-3-title", "Card 3 - titlu", "companii.html", "Solicîți parteneriate", "Carduri informații"),
    pageText("company-card-3-copy", "Card 3 - descriere", "companii.html", "Poși trimite cereri către una sau mai multe școli și urmărești statusul fiecăreia.", "Carduri informații"),
    pageText("company-card-4-title", "Card 4 - titlu", "companii.html", "Publici oferte", "Carduri informații"),
    pageText("company-card-4-copy", "Card 4 - descriere", "companii.html", "După acceptarea parteneriatului, ofertele devin disponibile elevilor din școala respectiva.", "Carduri informații"),
    pageText("company-form-title", "Formular - titlu", "companii.html", "Intră în contul companiei", "Formular lateral"),
    pageText("company-form-copy", "Formular - descriere", "companii.html", "Conectează-te pentru a gestiona profilul, parteneriatele și ofertele de practică.", "Formular lateral"),
    pageText("company-form-label-email", "Formular - label email", "companii.html", "Email companie", "Formular lateral"),
    pageText("company-form-label-cui", "Formular - label CUI", "companii.html", "CUI", "Formular lateral"),
    pageText("company-form-button-login", "Formular - buton conectare", "companii.html", "Intră în cont", "Formular lateral"),
    pageText("company-form-button-register", "Formular - buton înregistrare", "companii.html", "înregistrează compania", "Formular lateral"),

    pageText("school-hero-eyebrow", "Hero - eticheta", "scoli.html", "Pentru școli și profesori", "Hero"),
    pageText("school-main-title", "Conținut - titlu secțiune", "scoli.html", "Ce gestionează școala", "Conținut principal"),
    pageText("school-main-copy", "Conținut - descriere secțiune", "scoli.html", "Contul școlii păstrează controlul asupra parteneriatelor și asupra elevilor care participă la practică.", "Conținut principal"),
    pageText("school-card-1-title", "Card 1 - titlu", "scoli.html", "Verifică parteneriate", "Carduri informații"),
    pageText("school-card-1-copy", "Card 1 - descriere", "scoli.html", "școala vede profilul companiei, contractul generat și statusul fiecărei cereri.", "Carduri informații"),
    pageText("school-card-2-title", "Card 2 - titlu", "scoli.html", "Aprobă colaborări", "Carduri informații"),
    pageText("school-card-2-copy", "Card 2 - descriere", "scoli.html", "Acceptarea se face din pagina de detalii, după verificarea companiei și a documentelor.", "Carduri informații"),
    pageText("school-card-3-title", "Card 3 - titlu", "scoli.html", "Urmărește elevii", "Carduri informații"),
    pageText("school-card-3-copy", "Card 3 - descriere", "scoli.html", "Lista elevilor include profilul, aplicațiile și stagiile pentru care au fost acceptați.", "Carduri informații"),
    pageText("school-card-4-title", "Card 4 - titlu", "scoli.html", "Validează participarea", "Carduri informații"),
    pageText("school-card-4-copy", "Card 4 - descriere", "scoli.html", "După semnarea contractului și anexei pedagogice, școala marchează elevul ca participant.", "Carduri informații"),
    pageText("school-form-title", "Formular - titlu", "scoli.html", "Intră în contul școlii", "Formular lateral"),
    pageText("school-form-copy", "Formular - descriere", "scoli.html", "Conectează-te pentru a vedea parteneriatele, elevii și stagiile asociate școlii.", "Formular lateral"),
    pageText("school-form-label-email", "Formular - label email", "scoli.html", "Email instituțional", "Formular lateral"),
    pageText("school-form-label-type", "Formular - label tip cont", "scoli.html", "Tip cont", "Formular lateral"),
    pageText("school-form-button-login", "Formular - buton conectare", "scoli.html", "Intră în cont", "Formular lateral"),
    pageText("school-form-button-register", "Formular - buton acces", "scoli.html", "Solicită acces", "Formular lateral"),

    pageText("contact-hero-eyebrow", "Hero - eticheta", "contact.html", "Contact", "Hero"),
    pageText("contact-details-title", "Detalii - titlu", "contact.html", "Detalii rapide", "Detalii contact"),
    pageText("contact-details-copy", "Detalii - descriere", "contact.html", "Datele de contact sunt disponibile pentru solicitări despre conturi, parteneriate și organizarea stagiilor de practică.", "Detalii contact"),
    pageText("contact-form-title", "Formular - titlu", "contact.html", "Trimite un mesaj", "Formular contact"),
    pageText("contact-form-label-name", "Formular - label nume", "contact.html", "Nume", "Formular contact"),
    pageText("contact-form-label-email", "Formular - label email", "contact.html", "Email", "Formular contact"),
    pageText("contact-form-label-type", "Formular - label solicităre", "contact.html", "Tip solicităre", "Formular contact"),
    pageText("contact-form-label-message", "Formular - label mesaj", "contact.html", "Mesaj", "Formular contact"),
    pageText("contact-form-button", "Formular - buton", "contact.html", "Trimite mesaj", "Formular contact"),

    pageText("resources-hero-eyebrow", "Hero - eticheta", "resources.html", "Bibliotecă PracticPRO", "Hero"),
    pageText("resources-hero-button-register", "Hero - buton cont", "resources.html", "Creează cont", "Hero"),
    pageText("resources-hero-button-events", "Hero - buton evenimente", "resources.html", "Vezi evenimentele", "Hero"),
    pageText("resources-main-title", "Conținut - titlu secțiune", "resources.html", "Articole publicate", "Conținut principal"),
    pageText("resources-main-copy", "Conținut - descriere secțiune", "resources.html", "Materialele sunt pregătite pentru a fi administrate din SuperAdmin, prin editorul de conținut.", "Conținut principal"),
    pageText("resources-footer-copy", "Footer - descriere", "resources.html", "Platforma conectează elevii, școlile și companiile prin stagii de practică, resurse și evenimente relevante.", "Footer"),

    pageText("events-hero-eyebrow", "Hero - eticheta", "events.html", "Calendar PracticPRO", "Hero"),
    pageText("events-hero-button-register", "Hero - buton înscriere", "events.html", "Mă înscriu în platformă", "Hero"),
    pageText("events-hero-button-resources", "Hero - buton resurse", "events.html", "Vezi resursele", "Hero"),
    pageText("events-main-title", "Conținut - titlu secțiune", "events.html", "Evenimente publicate", "Conținut principal"),
    pageText("events-main-copy", "Conținut - descriere secțiune", "events.html", "Fiecare eveniment poate fi adăugat și editat din SuperAdmin, apoi apare automat în lista publică.", "Conținut principal"),
    pageText("events-footer-copy", "Footer - descriere", "events.html", "Platforma conectează elevii, școlile și companiile prin stagii de practică, resurse și evenimente relevante.", "Footer"),

    pageText("login-title", "Login - titlu", "login.html", "Conectare", "Formular login"),
    pageText("login-copy", "Login - descriere", "login.html", "Alege rolul contului tău și conectează-te în zona potrivită.", "Formular login"),
    pageText("login-role-student", "Login - rol elev", "login.html", "Elev", "Formular login"),
    pageText("login-role-company", "Login - rol companie", "login.html", "Companie", "Formular login"),
    pageText("login-role-school", "Login - rol școala", "login.html", "școala", "Formular login"),
    pageText("login-label-email", "Login - label email", "login.html", "Email", "Formular login"),
    pageText("login-label-password", "Login - label parolă", "login.html", "Parolă", "Formular login"),
    pageText("login-button-submit", "Login - buton conectare", "login.html", "Intră în cont", "Formular login"),
    pageText("login-button-register", "Login - buton înregistrare", "login.html", "Nu ai cont? Înregistrează-te", "Formular login"),

    pageText("register-title", "înregistrare - titlu", "register.html", "înregistrare", "Formular înregistrare"),
    pageText("register-copy", "înregistrare - descriere", "register.html", "Completează datele de bază și alege tipul de cont. Fluxul final va valida rolul în funcție de regulile platformei.", "Formular înregistrare"),
    pageText("register-label-account-type", "înregistrare - label tip cont", "register.html", "Tip cont", "Formular înregistrare"),
    pageText("register-label-student-name", "înregistrare elev - nume", "register.html", "Nume complet", "Formular înregistrare"),
    pageText("register-label-company-name", "înregistrare companie - nume", "register.html", "Nume companie", "Formular înregistrare"),
    pageText("register-label-company-cui", "înregistrare companie - CUI", "register.html", "CUI", "Formular înregistrare"),
    pageText("register-label-school-name", "Înregistrare școală - nume", "register.html", "Denumire instituție de învățământ", "Formular înregistrare"),
    pageText("register-label-email", "înregistrare - email", "register.html", "Email", "Formular înregistrare"),
    pageText("register-label-phone", "înregistrare - telefon", "register.html", "Telefon", "Formular înregistrare"),
    pageText("register-label-password", "înregistrare - parolă", "register.html", "Parolă", "Formular înregistrare"),
    pageText("register-button-submit", "înregistrare - buton creare", "register.html", "Creează cont", "Formular înregistrare"),
    pageText("register-button-login", "înregistrare - buton login", "register.html", "Am deja cont", "Formular înregistrare")
  ];

  const allSeedItems = seedItems.concat(pageTextItems, extraPageTextItems);

  const textCleanupPairs = [
    ["încarc?", "încarcă"],
    ["înt?lniri", "întâlniri"],
    ["pîn?", "până"],
    ["înv???mînt", "învățământ"],
    ["Cauta", "Caută"],
    ["cauta", "caută"],
    ["Esti", "Ești"],
    ["esti", "ești"],
    ["Reprezinti", "Reprezinți"],
    ["Descopera", "Descoperă"],
    ["Publica", "Publică"],
    ["aproba", "aprobă"],
    ["platforma?", "platformă?"],
    ["Ma înscriu", "Mă înscriu"],
    ["cofinantat", "cofinanțat"],
    ["Control operational", "Control operațional"],
    ["Dezvoltare ulterioara", "Dezvoltare ulterioară"],
    ["Denumire instituție de înv???mînt", "Denumire instituție de învățământ"]
  ];

  function cleanupRomanianText(value) {
    if (typeof value !== "string") return value;
    return textCleanupPairs.reduce((text, pair) => text.replaceAll(pair[0], pair[1]), value);
  }

  function cleanupStoredItems(items) {
    return items.map((item) => ({
      ...item,
      title: cleanupRomanianText(item.title),
      excerpt: cleanupRomanianText(item.excerpt),
      content: cleanupRomanianText(item.content),
      category: cleanupRomanianText(item.category),
      location: cleanupRomanianText(item.location)
    }));
  }

  function syncSeedTexts(items) {
    const seedById = new Map(allSeedItems.map((item) => [item.id, item]));
    return items.map((item) => {
      const seed = seedById.get(item.id);
      if (!seed || seed.type !== "page") return item;
      return {
        ...item,
        type: seed.type,
        status: seed.status,
        title: seed.title,
        category: seed.category,
        date: seed.date,
        excerpt: seed.excerpt,
        content: seed.content,
        location: seed.location,
        image: item.image || seed.image || ""
      };
    });
  }

  function uid() {
    return "item-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
  }

  function readItems() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allSeedItems));
        localStorage.setItem(DIACRITICS_MIGRATION_KEY, "done");
        return allSeedItems.slice();
      }
      if (!localStorage.getItem(STORAGE_BACKUP_KEY)) {
        localStorage.setItem(STORAGE_BACKUP_KEY, raw);
      }
      let items = cleanupStoredItems(JSON.parse(raw));
      if (!localStorage.getItem(DIACRITICS_MIGRATION_KEY)) {
        items = syncSeedTexts(items);
        localStorage.setItem(DIACRITICS_MIGRATION_KEY, "done");
      }
      const existingIds = new Set(items.map((item) => item.id));
      const missingSeeds = allSeedItems.filter((item) => !existingIds.has(item.id));
      if (missingSeeds.length) {
        const merged = items.concat(missingSeeds);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        return merged;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      return items;
    } catch (error) {
      return allSeedItems.slice();
    }
  }

  function writeItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function stripHtml(value) {
    const div = document.createElement("div");
    div.innerHTML = value || "";
    return div.textContent || div.innerText || "";
  }

  function formatType(type) {
    if (type === "event") return "Eveniment";
    if (type === "page") return "Text pagină";
    return "Articol";
  }

  function formatStatus(status) {
    return status === "published" ? "Publicat" : "Draft";
  }

  function getPageLabel(location) {
    const labels = {
      "index.html": "Home Page",
      "elevi.html": "Pagină Elevi",
      "companii.html": "Pagină Companii",
      "scoli.html": "Pagină școli",
      "resources.html": "Pagină Resurse",
      "events.html": "Pagină Evenimente",
      "contact.html": "Pagină Contact",
      "login.html": "Pagină Login",
      "register.html": "Pagină înregistrare"
    };
    return labels[location] || location || "Pagină site";
  }

  function getPageGroups(items) {
    const groups = new Map();
    items.filter((item) => item.type === "page").forEach((item) => {
      const key = item.location || "site";
      if (!groups.has(key)) {
        groups.set(key, {
          key,
          title: getPageLabel(key),
          category: item.category || "Pagină",
          items: []
        });
      }
      groups.get(key).items.push(item);
    });
    return [...groups.values()].sort((a, b) => a.title.localeCompare(b.title));
  }

  function getPageSection(item) {
    if (item.location !== "index.html") {
      if (item.id.includes("hero")) return "Editează secțiunea Hero";
      return item.category || "Texte pagină";
    }
    if (item.id.startsWith("home-hero-")) return "Editează secțiunea Hero";
    if (item.id.startsWith("home-card-") || item.id === "home-roles-title" || item.id === "home-roles-copy") return "Editează secțiunea Carduri roluri";
    if (item.id.startsWith("home-step-") || item.id === "home-flow-title" || item.id === "home-flow-copy") return "Editează secțiunea Traseu practică";
    if (item.id.startsWith("home-latest-")) return "Editează secțiunea Resurse și evenimente";
    if (item.id.startsWith("home-partners-")) return "Editează secțiunea Parteneri";
    if (item.id.startsWith("home-footer-")) return "Editează secțiunea Footer";
    return "Texte pagină";
  }

  function sectionRank(section) {
    const order = [
      "Editează secțiunea Hero",
      "Editează secțiunea Carduri roluri",
      "Editează secțiunea Traseu practică",
      "Editează secțiunea Resurse și evenimente",
      "Editează secțiunea Parteneri",
      "Editează secțiunea Footer",
      "Conținut principal",
      "Carduri informații",
      "Formular lateral",
      "Detalii contact",
      "Formular contact",
      "Footer",
      "Formular login",
      "Formular înregistrare",
      "Texte pagină"
    ];
    const index = order.indexOf(section);
    return index === -1 ? order.length : index;
  }

  function formatDateLong(value) {
    if (!value) return "";
    return new Date(value + "T12:00:00").toLocaleDateString("ro-RO", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  function getPublishedItems(type) {
    return readItems()
      .filter((item) => item.type === type && item.status === "published")
      .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  }

  function getCategories(items) {
    return [...new Set(items.map((item) => item.category).filter(Boolean))];
  }

  function normalizeCategory(value) {
    return String(value || "").trim();
  }

  function defaultCategoryStore() {
    return {
      article: getCategories(allSeedItems.filter((item) => item.type === "article")).concat("Resurse"),
      event: getCategories(allSeedItems.filter((item) => item.type === "event"))
    };
  }

  function readCategoryStore() {
    try {
      const raw = localStorage.getItem(CATEGORY_STORAGE_KEY);
      const defaults = defaultCategoryStore();
      if (!raw) return defaults;
      const parsed = JSON.parse(raw);
      const store = {
        article: Array.isArray(parsed.article) ? parsed.article.map(normalizeCategory).filter(Boolean) : defaults.article,
        event: Array.isArray(parsed.event) ? parsed.event.map(normalizeCategory).filter(Boolean) : defaults.event
      };
      if (!localStorage.getItem(CATEGORY_SPLIT_KEY)) {
        const articleDefaults = new Set(defaults.article);
        const eventDefaults = new Set(defaults.event);
        store.article = store.article.filter((category) => !eventDefaults.has(category));
        store.event = store.event.filter((category) => !articleDefaults.has(category));
        localStorage.setItem(CATEGORY_SPLIT_KEY, "done");
        writeCategoryStore(store);
      }
      return store;
    } catch (error) {
      return defaultCategoryStore();
    }
  }

  function writeCategoryStore(store) {
    localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify({
      article: getCategories((store.article || []).map((category) => ({ category: normalizeCategory(category) }))),
      event: getCategories((store.event || []).map((category) => ({ category: normalizeCategory(category) })))
    }));
  }

  function getCmsCategories(type) {
    const categoryType = type === "event" ? "event" : "article";
    const store = readCategoryStore();
    const defaults = defaultCategoryStore();
    const oppositeDefaults = new Set(categoryType === "event" ? defaults.article : defaults.event);
    const storedCategories = store[categoryType] || [];
    const usedCategories = getCategories(readItems().filter((item) => item.type === categoryType))
      .filter((category) => storedCategories.includes(category) || !oppositeDefaults.has(category));
    return getCategories(storedCategories.concat(usedCategories).map((category) => ({ category })));
  }

  function renderEditableText() {
    const pageItems = new Map(readItems()
      .filter((item) => item.type === "page" && item.status === "published")
      .map((item) => [item.id, item]));

    document.querySelectorAll("[data-editable]").forEach((element) => {
      const item = pageItems.get(element.dataset.editable);
      if (!item || !item.content) return;
      element.innerHTML = item.content;
    });
  }

  function initCmsAdmin() {
    const list = document.querySelector("[data-cms-list]");
    const form = document.querySelector("[data-cms-form]");
    const preview = document.querySelector("[data-cms-preview]");
    if (!list || !form || !preview) return;

    const fields = {
      id: form.querySelector("[name='id']"),
      type: form.querySelector("[name='type']"),
      status: form.querySelector("[name='status']"),
      title: form.querySelector("[name='title']"),
      category: form.querySelector("[name='category']"),
      date: form.querySelector("[name='date']"),
      location: form.querySelector("[name='location']"),
      excerpt: form.querySelector("[name='excerpt']"),
      image: form.querySelector("[name='image']"),
      imageUpload: form.querySelector("[name='imageUpload']"),
      content: form.querySelector("[data-editor]")
    };

    const search = document.querySelector("[data-cms-search]");
    const filter = document.querySelector("[data-cms-filter]");
    const newButton = document.querySelector("[data-cms-new]");
    const deleteButton = document.querySelector("[data-cms-delete]");
    const resetButton = document.querySelector("[data-cms-reset]");
    const previewOpenButton = document.querySelector("[data-cms-preview-open]");
    const statusMessage = document.querySelector("[data-cms-status]");
    const pageEditor = document.querySelector("[data-page-editor]");
    const pageTitle = document.querySelector("[data-page-title]");
    const pageSubtitle = document.querySelector("[data-page-subtitle]");
    const pageFields = document.querySelector("[data-page-fields]");
    const pageSaveButton = document.querySelector("[data-page-save]");
    const pagePreviewButton = document.querySelector("[data-page-preview]");
    const backToContentButton = document.querySelector("[data-back-to-content]");
    const categoryType = document.querySelector("[data-category-type]");
    const categoryNew = document.querySelector("[data-category-new]");
    const categoryAdd = document.querySelector("[data-category-add]");
    const categoryList = document.querySelector("[data-category-list]");
    const contentBrowser = document.querySelector("[data-content-browser]");
    const contentBrowserTitle = document.querySelector("[data-content-browser-title]");
    const contentBrowserSubtitle = document.querySelector("[data-content-browser-subtitle]");
    const contentBrowserCount = document.querySelector("[data-content-browser-count]");
    const contentBrowserBody = document.querySelector("[data-content-browser-body]");
    const cmsHomeLink = document.querySelector("[data-cms-home]");
    const cmsBrowserLinks = [...document.querySelectorAll("[data-cms-browser-link]")];
    const mainBreadcrumbs = document.querySelector("[data-main-breadcrumbs]");
    const mainTitle = document.querySelector("[data-main-title]");
    let activePageKey = "";
    let activeBrowserType = "";

    function setActiveCmsNav(active) {
      if (cmsHomeLink) cmsHomeLink.classList.toggle("active", active === "cms");
      cmsBrowserLinks.forEach((link) => {
        link.classList.toggle("active", link.dataset.cmsBrowserLink === active);
      });
    }

    function setMainHeading(title, breadcrumbs = "Super Admin / CMS conținut") {
      if (mainTitle) mainTitle.textContent = title;
      if (mainBreadcrumbs) mainBreadcrumbs.textContent = breadcrumbs;
    }

    function showContentEditor() {
      form.classList.remove("is-hidden");
      if (pageEditor) pageEditor.classList.add("is-hidden");
      if (contentBrowser) contentBrowser.classList.add("is-hidden");
      setActiveCmsNav("cms");
      setMainHeading("Builder conținut");
    }

    function showPageEditor() {
      form.classList.add("is-hidden");
      if (pageEditor) pageEditor.classList.remove("is-hidden");
      if (contentBrowser) contentBrowser.classList.add("is-hidden");
      setActiveCmsNav("cms");
      setMainHeading("Editor pagină");
    }

    function showContentBrowser(type) {
      activeBrowserType = type === "event" ? "event" : (type === "all" ? "all" : "article");
      form.classList.add("is-hidden");
      if (pageEditor) pageEditor.classList.add("is-hidden");
      if (contentBrowser) contentBrowser.classList.remove("is-hidden");
      setActiveCmsNav(activeBrowserType === "all" ? "cms" : activeBrowserType);
      setMainHeading(activeBrowserType === "event" ? "Evenimente publice" : (activeBrowserType === "all" ? "CMS conținut" : "Resurse publice"), activeBrowserType === "all" ? "Super Admin / Bibliotecă CMS" : "Super Admin / CMS public");
      renderContentBrowser(activeBrowserType);
      updateStatus(activeBrowserType === "event" ? "Listă evenimente publice." : (activeBrowserType === "all" ? "Bibliotecă CMS generală." : "Listă resurse publice."));
    }

    function emptyForm(type = "article") {
      fields.id.value = "";
      fields.type.value = type;
      if (categoryType && type !== "page") categoryType.value = type === "event" ? "event" : "article";
      fields.status.value = "draft";
      fields.title.value = "";
      renderCategoryOptions(type === "event" ? "Workshop" : (type === "page" ? "Homepage" : "Resurse"));
      fields.date.value = new Date().toISOString().slice(0, 10);
      fields.location.value = type === "event" ? "Online" : (type === "page" ? "index.html" : "");
      fields.excerpt.value = "";
      fields.image.value = "";
      if (fields.imageUpload) fields.imageUpload.value = "";
      fields.content.innerHTML = type === "page" ? "Scrie textul de pagină aici..." : "<p>Scrie conținutul aici...</p>";
      updatePreview();
      renderCategoryManager();
    }

    function loadItem(item) {
      fields.id.value = item.id;
      fields.type.value = item.type || "article";
      if (categoryType && fields.type.value !== "page") categoryType.value = fields.type.value === "event" ? "event" : "article";
      fields.status.value = item.status || "draft";
      fields.title.value = item.title || "";
      renderCategoryOptions(item.category || "");
      fields.date.value = item.date || "";
      fields.location.value = item.location || "";
      fields.excerpt.value = item.excerpt || "";
      fields.image.value = item.image || "";
      if (fields.imageUpload) fields.imageUpload.value = "";
      fields.content.innerHTML = item.content || "";
      updatePreview();
      renderCategoryManager();
    }

    function renderCategoryOptions(selectedCategory = "") {
      const type = fields.type.value;
      if (type === "page") {
        fields.category.innerHTML = `<option value="${escapeHtml(selectedCategory || "Texte pagină")}">${escapeHtml(selectedCategory || "Texte pagină")}</option>`;
        fields.category.disabled = true;
        return;
      }
      fields.category.disabled = false;
      const categories = getCmsCategories(type);
      const selected = normalizeCategory(selectedCategory) || categories[0] || "";
      const fullList = getCategories(categories.concat(selected).map((category) => ({ category })));
      fields.category.innerHTML = fullList.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
      fields.category.value = selected;
    }

    function getManagedCategoryType() {
      return categoryType && categoryType.value === "event" ? "event" : "article";
    }

    function renderCategoryManager() {
      if (!categoryList) return;
      const type = getManagedCategoryType();
      const categories = getCmsCategories(type);
      categoryList.innerHTML = categories.map((category) => `
        <span class="cms-category-chip">
          ${escapeHtml(category)}
          <button class="cms-category-icon-button" type="button" title="Redenumește categoria" aria-label="Redenumește categoria" data-category-edit="${escapeHtml(category)}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4l10.5-10.5-4-4L4 16v4Z"></path><path d="m13.5 6.5 4 4"></path></svg>
          </button>
          <button type="button" title="Șterge categoria" data-category-delete="${escapeHtml(category)}">×</button>
        </span>
      `).join("");
    }

    function addManagedCategory() {
      if (!categoryNew) return;
      const type = getManagedCategoryType();
      const category = normalizeCategory(categoryNew.value);
      if (!category) {
        updateStatus("Scrie numele categoriei înainte de adăugare.");
        return;
      }
      const store = readCategoryStore();
      const current = getCmsCategories(type);
      if (current.includes(category)) {
        updateStatus("Categoria există deja pentru acest tip de conținut.");
        return;
      }
      store[type] = getCategories((store[type] || []).concat(category).map((item) => ({ category: item })));
      writeCategoryStore(store);
      categoryNew.value = "";
      renderCategoryOptions(fields.category.value);
      renderCategoryManager();
      updateStatus("Categorie adăugată: " + category);
    }

    function deleteManagedCategory(category) {
      const type = getManagedCategoryType();
      const used = readItems().some((item) => item.type === type && item.category === category);
      if (used) {
        updateStatus("Categoria este folosită de conținut existent și nu poate fi ștearsă.");
        return;
      }
      const store = readCategoryStore();
      store[type] = (store[type] || []).filter((item) => item !== category);
      writeCategoryStore(store);
      renderCategoryOptions(fields.category.value === category ? "" : fields.category.value);
      renderCategoryManager();
      updateStatus("Categorie ștearsă: " + category);
    }

    function renameManagedCategory(oldCategory) {
      const type = getManagedCategoryType();
      const nextCategory = normalizeCategory(window.prompt("Nume nou pentru categorie:", oldCategory));
      if (!nextCategory || nextCategory === oldCategory) return;
      const existing = getCmsCategories(type).filter((category) => category !== oldCategory);
      if (existing.includes(nextCategory)) {
        updateStatus("Există deja o categorie cu acest nume pentru tipul selectat.");
        return;
      }
      const store = readCategoryStore();
      store[type] = getCategories((store[type] || []).map((category) => ({
        category: category === oldCategory ? nextCategory : category
      })));
      if (!store[type].includes(nextCategory)) store[type].push(nextCategory);
      writeCategoryStore(store);

      const items = readItems();
      let changed = false;
      items.forEach((item) => {
        if (item.type === type && item.category === oldCategory) {
          item.category = nextCategory;
          changed = true;
        }
      });
      if (changed) writeItems(items);

      renderCategoryOptions(fields.category.value === oldCategory ? nextCategory : fields.category.value);
      renderCategoryManager();
      renderList();
      updateStatus("Categorie redenumită: " + oldCategory + " → " + nextCategory);
    }

    function getFormItem() {
      return {
        id: fields.id.value || uid(),
        type: fields.type.value,
        status: fields.status.value,
        title: fields.title.value.trim(),
        category: fields.category.value.trim(),
        date: fields.date.value,
        location: fields.location.value.trim(),
        excerpt: fields.excerpt.value.trim(),
        image: fields.image.value.trim(),
        content: fields.content.innerHTML.trim()
      };
    }

    function updateStatus(message) {
      if (statusMessage) statusMessage.textContent = message;
    }

    function renderList() {
      const items = readItems();
      const term = (search && search.value ? search.value : "").toLowerCase();
      const type = filter && filter.value ? filter.value : "all";
      const contentItems = items.filter((item) => {
        if (item.type === "page") return false;
        const matchesType = type === "all" || item.type === type;
        const haystack = [item.title, item.category, item.excerpt, item.location].join(" ").toLowerCase();
        return matchesType && haystack.includes(term);
      });
      const pageGroups = type === "article" || type === "event" ? [] : getPageGroups(items).filter((group) => {
        const haystack = [group.title, group.category, group.key, group.items.map((item) => item.title).join(" ")].join(" ").toLowerCase();
        return haystack.includes(term);
      });
      const pageMarkup = pageGroups.map((group) => `
        <button class="cms-list-item cms-page-item" type="button" data-page-key="${escapeHtml(group.key)}">
          <span>
            <strong>${escapeHtml(group.title)}</strong>
            <small>Pagină site - ${group.items.length} texte editabile</small>
          </span>
          <span class="badge blue">Pagină</span>
        </button>
      `).join("");
      const contentMarkup = contentItems.map((item) => `
        <button class="cms-list-item" type="button" data-id="${escapeHtml(item.id)}">
          <span>
            <strong>${escapeHtml(item.title || "Fără titlu")}</strong>
            <small>${formatType(item.type)} - ${escapeHtml(item.category || "Fără categorie")}</small>
          </span>
          <span class="badge ${item.status === "published" ? "green" : "amber"}">${formatStatus(item.status)}</span>
        </button>
      `).join("");
      list.innerHTML = pageMarkup + contentMarkup;
      return;
      const filtered = items.filter((item) => {
        const matchesType = type === "all" || item.type === type;
        const haystack = [item.title, item.category, item.excerpt, item.location].join(" ").toLowerCase();
        return matchesType && haystack.includes(term);
      });

      list.innerHTML = filtered.map((item) => `
        <button class="cms-list-item" type="button" data-id="${escapeHtml(item.id)}">
          <span>
            <strong>${escapeHtml(item.title || "Fără titlu")}</strong>
            <small>${formatType(item.type)} · ${escapeHtml(item.category || "Fără categorie")}</small>
          </span>
          <span class="badge ${item.status === "published" ? "green" : "amber"}">${formatStatus(item.status)}</span>
        </button>
      `).join("");
    }

    function renderContentBrowser(type = activeBrowserType || "article") {
      if (!contentBrowserBody) return;
      if (type === "all") {
        const items = readItems();
        const pages = getPageGroups(items);
        if (contentBrowserTitle) contentBrowserTitle.textContent = "CMS conținut";
        if (contentBrowserSubtitle) contentBrowserSubtitle.textContent = "Paginile site-ului care au texte editabile în CMS.";
        if (contentBrowserCount) contentBrowserCount.textContent = pages.length + (pages.length === 1 ? " pagină" : " pagini");
        contentBrowserBody.innerHTML = `
          <section class="cms-content-category">
            <div class="cms-content-category-head">
              <h3>Texte pagini site</h3>
              <span class="badge blue">${pages.length} ${pages.length === 1 ? "pagină" : "pagini"}</span>
            </div>
            <div class="cms-content-items">
              ${pages.length ? pages.map((page) => `
                <button class="cms-content-item" type="button" data-browser-page-key="${escapeHtml(page.key)}">
                  <span>
                    <strong>${escapeHtml(page.title)}</strong>
                    <small>${page.items.length} texte editabile</small>
                  </span>
                  <span class="badge blue">Pagină</span>
                </button>
              `).join("") : `<p class="cms-content-empty">Nu există pagini editabile.</p>`}
            </div>
          </section>
        `;
        return;
      }
      const normalizedType = type === "event" ? "event" : "article";
      const items = readItems()
        .filter((item) => item.type === normalizedType)
        .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")) || String(a.title || "").localeCompare(String(b.title || "")));
      const categories = getCmsCategories(normalizedType);
      const fallbackCategory = "Fără categorie";
      const categoryListForView = getCategories(categories.concat(items.filter((item) => !item.category).length ? fallbackCategory : "").map((category) => ({ category })));

      if (contentBrowserTitle) contentBrowserTitle.textContent = normalizedType === "event" ? "Evenimente publice" : "Resurse publice";
      if (contentBrowserSubtitle) contentBrowserSubtitle.textContent = normalizedType === "event"
        ? "Evenimentele sunt grupate pe categoriile dedicate evenimentelor."
        : "Articolele și resursele sunt grupate pe categoriile dedicate resurselor.";
      if (contentBrowserCount) contentBrowserCount.textContent = items.length + (items.length === 1 ? " item" : " itemuri");

      if (!items.length) {
        contentBrowserBody.innerHTML = `<p class="cms-content-empty">Nu există conținut pentru această secțiune.</p>`;
        return;
      }

      contentBrowserBody.innerHTML = categoryListForView.map((category) => {
        const categoryItems = items.filter((item) => (item.category || fallbackCategory) === category);
        if (!categoryItems.length) {
          return `
            <section class="cms-content-category">
              <div class="cms-content-category-head">
                <h3>${escapeHtml(category)}</h3>
                <span class="badge">0 itemuri</span>
              </div>
              <p class="cms-content-empty">Nu există conținut în această categorie.</p>
            </section>
          `;
        }
        return `
          <section class="cms-content-category">
            <div class="cms-content-category-head">
              <h3>${escapeHtml(category)}</h3>
              <span class="badge blue">${categoryItems.length} ${categoryItems.length === 1 ? "item" : "itemuri"}</span>
            </div>
            <div class="cms-content-items">
              ${categoryItems.map((item) => `
                <button class="cms-content-item" type="button" data-browser-item-id="${escapeHtml(item.id)}">
                  <span>
                    <strong>${escapeHtml(item.title || "Fără titlu")}</strong>
                    <small>${escapeHtml(item.excerpt || stripHtml(item.content).slice(0, 140) || "Fără rezumat")}</small>
                  </span>
                  <span class="badge ${item.status === "published" ? "green" : "amber"}">${formatStatus(item.status)}</span>
                </button>
              `).join("")}
            </div>
          </section>
        `;
      }).join("");
    }

    function renderPageEditor(pageKey) {
      const items = readItems()
        .filter((item) => item.type === "page" && item.location === pageKey)
        .sort((a, b) => {
          const sectionDiff = sectionRank(getPageSection(a)) - sectionRank(getPageSection(b));
          return sectionDiff || a.title.localeCompare(b.title);
        });
      if (!items.length || !pageEditor || !pageFields) return;
      activePageKey = pageKey;
      if (pageTitle) pageTitle.textContent = getPageLabel(pageKey);
      if (pageSubtitle) pageSubtitle.textContent = "Editează toate textele acestei pagini într-un singur loc.";
      const grouped = new Map();
      items.forEach((item) => {
        const section = getPageSection(item);
        if (!grouped.has(section)) grouped.set(section, []);
        grouped.get(section).push(item);
      });
      pageFields.innerHTML = [...grouped.entries()].map(([section, sectionItems]) => `
        <section class="page-section-editor">
          <h3>${escapeHtml(section)}</h3>
          <div class="page-section-fields">
            ${sectionItems.map((item) => `
              <label class="page-field">
                <span>${escapeHtml(item.title)}</span>
                <small>${escapeHtml(item.excerpt || "Text editabil")}</small>
                <textarea class="cms-input" rows="${item.content.length > 110 ? 5 : 3}" data-page-item-id="${escapeHtml(item.id)}">${escapeHtml(item.content)}</textarea>
              </label>
            `).join("")}
          </div>
        </section>
      `).join("");
      showPageEditor();
      updateStatus("Editare pagină: " + getPageLabel(pageKey));
    }

    function savePageEditor() {
      if (!activePageKey || !pageFields) return;
      const values = [...pageFields.querySelectorAll("[data-page-item-id]")].map((input) => ({
        id: input.dataset.pageItemId,
        content: input.value.trim()
      }));
      const items = readItems();
      values.forEach((value) => {
        const item = items.find((entry) => entry.id === value.id);
        if (item) item.content = value.content;
      });
      writeItems(items);
      renderList();
      renderPageEditor(activePageKey);
      updateStatus("Pagină salvata: " + getPageLabel(activePageKey));
    }

    function updatePreview() {
      const item = getFormItem();
      if (item.type === "page") {
        preview.innerHTML = `
          <article class="cms-preview-card">
            <div class="cms-preview-visual">Text site</div>
            <div>
              <span class="badge ${item.status === "published" ? "green" : "amber"}">${formatStatus(item.status)}</span>
              <h3>${escapeHtml(item.title || "Text de pagină")}</h3>
              <p>${escapeHtml(item.excerpt || "Acest text se aplică automat în pagină publică.")}</p>
              <div class="cms-preview-page-text">${item.content || "Textul editabil apare aici."}</div>
              <p class="cms-preview-note">Pagină țintă: ${escapeHtml(item.location || "site")}</p>
            </div>
          </article>
        `;
        return;
      }
      preview.innerHTML = `
        <article class="cms-preview-card">
          ${item.image ? `<img src="${escapeHtml(item.image)}" alt="">` : `<div class="cms-preview-visual">${formatType(item.type)}</div>`}
          <div>
            <span class="badge ${item.status === "published" ? "green" : "amber"}">${formatStatus(item.status)}</span>
            <h3>${escapeHtml(item.title || "Titlu conținut")}</h3>
            <p>${escapeHtml(item.excerpt || "Rezumatul va apărea aici.")}</p>
            <div class="cms-preview-content">${item.content || "<p>Conșinul articolului apare aici.</p>"}</div>
          </div>
        </article>
      `;
    }

    function handleImageUpload() {
      const file = fields.imageUpload && fields.imageUpload.files ? fields.imageUpload.files[0] : null;
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        updateStatus("Fișierul selectat trebuie să fie o imagine.");
        fields.imageUpload.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        fields.image.value = reader.result;
        updatePreview();
        updateStatus("Imagine încărcată în preview.");
      };
      reader.readAsDataURL(file);
    }

    function saveItem(event) {
      event.preventDefault();
      saveCurrentItem();
    }

    function saveCurrentItem() {
      const item = getFormItem();
      if (!item.title) {
        updateStatus("Adaugă un titlu inainte de salvare.");
        fields.title.focus();
        return null;
      }
      const items = readItems();
      const index = items.findIndex((entry) => entry.id === item.id);
      if (index >= 0) items[index] = item;
      else items.unshift(item);
      writeItems(items);
      fields.id.value = item.id;
      renderList();
      if (activeBrowserType && item.type === activeBrowserType) renderContentBrowser(activeBrowserType);
      updatePreview();
      updateStatus(item.type === "page" ? "Text actualizat pe site: " + item.title : "Salvat: " + item.title);
      return item;
    }

    function deleteItem() {
      const id = fields.id.value;
      if (!id) {
        updateStatus("Nu ai selectat un conținut salvat.");
        return;
      }
      const items = readItems().filter((item) => item.id !== id);
      writeItems(items);
      emptyForm(fields.type.value);
      renderList();
      updateStatus("Conținut șters.");
    }

    document.querySelectorAll("[data-command]").forEach((button) => {
      button.addEventListener("click", () => {
        document.execCommand(button.dataset.command, false, null);
        fields.content.focus();
        updatePreview();
      });
    });

    document.querySelectorAll("[data-block]").forEach((button) => {
      button.addEventListener("click", () => {
        document.execCommand("formatBlock", false, button.dataset.block);
        fields.content.focus();
        updatePreview();
      });
    });

    form.addEventListener("submit", saveItem);
    form.addEventListener("input", updatePreview);
    form.addEventListener("change", updatePreview);
    fields.type.addEventListener("change", () => {
      renderCategoryOptions(fields.type.value === "event" ? "Workshop" : "Resurse");
      if (categoryType && fields.type.value !== "page") categoryType.value = fields.type.value === "event" ? "event" : "article";
      renderCategoryManager();
      updatePreview();
    });
    if (fields.imageUpload) fields.imageUpload.addEventListener("change", handleImageUpload);
    fields.content.addEventListener("input", updatePreview);
    if (categoryType) categoryType.addEventListener("change", renderCategoryManager);
    if (categoryAdd) categoryAdd.addEventListener("click", addManagedCategory);
    if (categoryNew) categoryNew.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addManagedCategory();
      }
    });
    if (categoryList) categoryList.addEventListener("click", (event) => {
      const editButton = event.target.closest("[data-category-edit]");
      if (editButton) {
        renameManagedCategory(editButton.dataset.categoryEdit);
        return;
      }
      const button = event.target.closest("[data-category-delete]");
      if (!button) return;
      deleteManagedCategory(button.dataset.categoryDelete);
    });
    if (cmsHomeLink) cmsHomeLink.addEventListener("click", (event) => {
      event.preventDefault();
      showContentBrowser("all");
    });
    cmsBrowserLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showContentBrowser(link.dataset.cmsBrowserLink);
      });
    });
    if (contentBrowserBody) contentBrowserBody.addEventListener("click", (event) => {
      const pageButton = event.target.closest("[data-browser-page-key]");
      if (pageButton) {
        renderPageEditor(pageButton.dataset.browserPageKey);
        return;
      }
      const button = event.target.closest("[data-browser-item-id]");
      if (!button) return;
      const item = readItems().find((entry) => entry.id === button.dataset.browserItemId);
      if (!item) return;
      showContentEditor();
      loadItem(item);
      updateStatus("Editare: " + (item.title || "conținut"));
    });
    list.addEventListener("click", (event) => {
      const pageRow = event.target.closest("[data-page-key]");
      if (pageRow) {
        renderPageEditor(pageRow.dataset.pageKey);
        return;
      }
      const row = event.target.closest("[data-id]");
      if (!row) return;
      const item = readItems().find((entry) => entry.id === row.dataset.id);
      if (item) {
        showContentEditor();
        loadItem(item);
      }
    });
    if (newButton) newButton.addEventListener("click", () => {
      showContentEditor();
      emptyForm(fields.type.value === "page" ? "article" : fields.type.value);
    });
    if (deleteButton) deleteButton.addEventListener("click", deleteItem);
    if (previewOpenButton) previewOpenButton.addEventListener("click", () => {
      const item = saveCurrentItem();
      if (!item) return;
      if (item.type === "page" && item.location) {
        window.open(item.location, "_blank");
        return;
      }
      window.open("cms-preview.html?id=" + encodeURIComponent(item.id), "_blank");
    });
    if (resetButton) resetButton.addEventListener("click", () => {
      localStorage.setItem(STORAGE_BACKUP_KEY, localStorage.getItem(STORAGE_KEY) || "[]");
      writeItems(allSeedItems);
      renderList();
      showContentEditor();
      emptyForm();
      updateStatus("Conținutul inițial a fost resetat. Backup-ul anterior a fost păstrat local.");
    });
    if (pageSaveButton) pageSaveButton.addEventListener("click", savePageEditor);
    if (pagePreviewButton) pagePreviewButton.addEventListener("click", () => {
      savePageEditor();
      if (activePageKey) window.open(activePageKey, "_blank");
    });
    if (backToContentButton) backToContentButton.addEventListener("click", () => {
      showContentEditor();
      emptyForm();
    });
    if (search) search.addEventListener("input", renderList);
    if (filter) filter.addEventListener("change", renderList);

    renderList();
    emptyForm();
    renderCategoryManager();
    showContentBrowser("all");
  }

  function renderPublicContent() {
    const target = document.querySelector("[data-public-content]");
    if (!target) return;
    const type = target.dataset.publicContent;
    const items = getPublishedItems(type);
    const filterTarget = document.querySelector(`[data-content-filters="${type}"]`);
    let activeCategory = new URLSearchParams(window.location.search).get("category") || "all";

    function paint() {
      const visible = activeCategory === "all" ? items : items.filter((item) => item.category === activeCategory);
      if (!visible.length) {
        target.innerHTML = `<article class="public-empty"><h3>Nu există conținut publicat</h3><p>Conținutul salvat din Super Admin va apărea aici după publicare.</p></article>`;
        return;
      }
      target.innerHTML = visible.map((item) => renderPublicCard(item)).join("");
    }

    if (!items.length) {
      target.innerHTML = `<article class="public-empty"><h3>Nu există conținut publicat</h3><p>Conșinul salvat din Super Admin va apărea aici după publicare.</p></article>`;
      return;
    }
    if (filterTarget) {
      const categories = getCategories(items);
      if (activeCategory !== "all" && !categories.includes(activeCategory)) activeCategory = "all";
      filterTarget.innerHTML = [`<button class="filter-chip ${activeCategory === "all" ? "active" : ""}" type="button" data-category="all">Toate</button>`]
        .concat(categories.map((category) => `<button class="filter-chip ${activeCategory === category ? "active" : ""}" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`))
        .join("");
      filterTarget.addEventListener("click", (event) => {
        const button = event.target.closest("[data-category]");
        if (!button) return;
        activeCategory = button.dataset.category;
        filterTarget.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
        paint();
      });
    }
    paint();
  }

  function renderPublicCard(item) {
    const link = "cms-preview.html?id=" + encodeURIComponent(item.id);
    if (item.type === "event") {
      const date = item.date ? new Date(item.date + "T12:00:00") : null;
      const day = date ? String(date.getDate()).padStart(2, "0") : "--";
      const month = date ? date.toLocaleDateString("ro-RO", { month: "short" }) : "";
      return `
        <a class="public-event-card" href="${link}">
          ${item.image ? `<img class="public-card-image" src="${escapeHtml(item.image)}" alt="">` : `<div class="event-accent"></div>`}
          <div class="event-date"><strong>${day}</strong><span>${escapeHtml(month)}</span></div>
          <div class="event-content">
            <span class="tag">${escapeHtml(item.category || "Eveniment")}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.excerpt || stripHtml(item.content).slice(0, 150))}</p>
            <div class="public-card-footer"><span>${escapeHtml(item.location || "Online")}</span><span>Vezi detalii -></span></div>
          </div>
        </a>
      `;
    }
    return `
      <a class="public-content-card" href="${link}">
        ${item.image ? `<img class="public-card-image" src="${escapeHtml(item.image)}" alt="">` : `<div class="public-card-visual"></div>`}
        <div class="public-card-body">
          <span class="tag">${escapeHtml(item.category || "Resursa")}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.excerpt || stripHtml(item.content).slice(0, 150))}</p>
          <div class="public-card-footer"><span>${escapeHtml(item.date || "")}</span><span>Citeste -></span></div>
        </div>
      </a>
    `;
  }

  function renderLatestContent() {
    const target = document.querySelector("[data-latest-content]");
    if (!target) return;
    const items = readItems()
      .filter((item) => item.status === "published" && (item.type === "article" || item.type === "event"))
      .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
      .slice(0, 6);
    target.innerHTML = items.map((item) => renderPublicCard(item)).join("");
  }

  function renderPreviewArticle() {
    const target = document.querySelector("[data-preview-article]");
    if (!target) return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const item = readItems().find((entry) => entry.id === id) || readItems()[0];
    if (!item) {
      target.innerHTML = `<section class="section"><div class="wrap"><h1>Nu există conținut pentru preview</h1><p>Întoarce-te în CMS și salvează un articol sau eveniment.</p></div></section>`;
      return;
    }
    const isEvent = item.type === "event";
    const heroImage = item.image || (isEvent ? "media/article-evenimente.jpg" : "media/article-resurse.jpg");
    const contentItems = getPublishedItems(item.type);
    const related = contentItems.filter((entry) => entry.id !== item.id).slice(0, 3);
    const categories = getCategories(contentItems);
    const dateLabel = formatDateLong(item.date);
    target.innerHTML = `
      <section class="detail-hero ${isEvent ? "event-detail-hero" : ""}" style="--preview-img:url('${escapeHtml(heroImage)}');">
        <div class="wrap detail-hero-inner">
          <span class="eyebrow">${escapeHtml(formatType(item.type))}</span>
          <h1>${escapeHtml(item.title || "Preview conținut")}</h1>
          <p>${escapeHtml(item.excerpt || "")}</p>
          <div class="detail-meta">
            <span>${escapeHtml(item.category || "Fără categorie")}</span>
            ${dateLabel ? `<span>${escapeHtml(dateLabel)}</span>` : ""}
            ${item.location ? `<span>${escapeHtml(item.location)}</span>` : ""}
          </div>
        </div>
      </section>
      <section class="section detail-section">
        <div class="wrap detail-layout ${isEvent ? "event-detail-layout" : ""}">
          <article class="detail-content">
            <div class="content-filters compact">
              <a class="filter-chip active" href="${isEvent ? "events.html" : "resources.html"}">Toate</a>
              ${categories.map((category) => `<a class="filter-chip" href="${isEvent ? "events.html" : "resources.html"}?category=${encodeURIComponent(category)}">${escapeHtml(category)}</a>`).join("")}
            </div>
            <div class="preview-content">${item.content || ""}</div>
          </article>
          ${isEvent ? `
          <aside class="event-info-card">
            <div class="event-info-date"><strong>${escapeHtml(item.date ? String(new Date(item.date + "T12:00:00").getDate()).padStart(2, "0") : "--")}</strong><span>${escapeHtml(item.date ? new Date(item.date + "T12:00:00").toLocaleDateString("ro-RO", { month: "short", year: "numeric" }) : "Data")}</span></div>
            <h2>Detalii eveniment</h2>
            <dl>
              <div><dt>Tip</dt><dd>${escapeHtml(item.category || "Eveniment")}</dd></div>
              <div><dt>Data</dt><dd>${escapeHtml(dateLabel || "Urmeaza")}</dd></div>
              <div><dt>Locație</dt><dd>${escapeHtml(item.location || "Online")}</dd></div>
            </dl>
            <a class="btn green" href="register.html">Mă înscriu în platformă</a>
          </aside>` : ""}
        </div>
      </section>
      ${related.length ? `
      <section class="section soft">
        <div class="wrap">
          <div class="section-head"><div><h2>${isEvent ? "Alte evenimente" : "Alte resurse"}</h2><p class="section-copy">Materiale din aceeași bibliotecă PracticPRO.</p></div></div>
          <div class="public-content-grid">${related.map((entry) => renderPublicCard(entry)).join("")}</div>
        </div>
      </section>` : ""}
    `;
  }

  function initContentFilters() {
    document.querySelectorAll("[data-content-filters]").forEach((filterTarget) => {
      const type = filterTarget.dataset.contentFilters;
      const items = getPublishedItems(type);
      if (!items.length) return;
      const categories = getCategories(items);
      if (!categories.length) return;
      filterTarget.innerHTML = [`<button class="filter-chip active" type="button" data-category="all">Toate</button>`]
        .concat(categories.map((category) => `<button class="filter-chip" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`))
        .join("");
    });
  }

  function initRegisterForm() {
    const accountType = document.querySelector("[data-account-type]");
    const roleFields = document.querySelectorAll("[data-role-fields]");
    if (!accountType || !roleFields.length) return;
    function updateRoleFields() {
      roleFields.forEach((group) => group.classList.toggle("is-hidden", group.dataset.roleFields !== accountType.value));
    }
    accountType.addEventListener("change", updateRoleFields);
    updateRoleFields();
  }

  function initLoginRoleSelector() {
    const options = document.querySelector("[data-login-role-options]");
    const submit = document.querySelector("[data-login-submit]");
    if (!options || !submit) return;
    options.addEventListener("click", (event) => {
      const button = event.target.closest("[data-login-target]");
      if (!button) return;
      options.querySelectorAll("[data-login-target]").forEach((item) => item.classList.toggle("active", item === button));
      submit.href = button.dataset.loginTarget;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initCmsAdmin();
    renderEditableText();
    renderPublicContent();
    renderLatestContent();
    renderPreviewArticle();
    initRegisterForm();
    initLoginRoleSelector();
  });
})();
