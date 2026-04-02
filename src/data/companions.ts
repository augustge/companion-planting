import type { CompanionEdge } from "@/lib/types";

export const companions: CompanionEdge[] = [
  // ──────────────────────────────────────────────
  // TRE SOSTRE (Three Sisters)
  // ──────────────────────────────────────────────
  {
    plants: ["bonner", "mais"],
    compatibility: "companion",
    reason:
      "Bønner fikserer nitrogen i jorda som mais trenger mye av, mens mais gir et naturlig klatrestativ for bønnene.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["mais", "squash"],
    compatibility: "companion",
    reason:
      "Squashblader skygger bakken, undertrykker ugress og holder på fuktighet rundt mais.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["bonner", "squash"],
    compatibility: "companion",
    reason:
      "Squashens piggete stengler holder skadedyr unna bønnene, og bønner tilfører nitrogen som squash trenger.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["bonner", "sukkermais"],
    compatibility: "companion",
    reason:
      "Bønner fikserer nitrogen som sukkermais trenger, og maisens stengler fungerer som klatrestøtte.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["squash", "sukkermais"],
    compatibility: "companion",
    reason:
      "Squash skygger bakken rundt sukkermais og holder på fuktigheten.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // TOMAT-KOMPANJONGER
  // ──────────────────────────────────────────────
  {
    plants: ["basilikum", "tomat"],
    compatibility: "companion",
    reason:
      "Basilikum frastøter bladlus, mellus og mygg, og kan forbedre tomatsmaken gjennom flyktige oljer.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["ringblomst", "tomat"],
    compatibility: "companion",
    reason:
      "Ringblomstens røtter skiller ut alfa-tertienyl som dreper rotgallnematoder som skader tomatrøtter.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["gulrot", "tomat"],
    compatibility: "companion",
    reason:
      "Gulrøtter løsner jorda rundt tomatrøtter, og tomatens skygge holder gulrotjorda kjølig og fuktig.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["persille", "tomat"],
    compatibility: "companion",
    reason:
      "Persille tiltrekker blomsterfluer hvis larver spiser bladlus som angriper tomater.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["gresslok", "tomat"],
    compatibility: "companion",
    reason:
      "Gressløkens svovelforbindelser frastøter bladlus og kan redusere risikoen for soppsykdommer på tomater.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["agurkurt", "tomat"],
    compatibility: "helpful",
    reason:
      "Agurkurt tiltrekker pollinatorer og rovinsekter som gagner tomater, men størrelsen krever eget bed.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["blomkarse", "tomat"],
    compatibility: "companion",
    reason:
      "Blomkarse fungerer som fangstplante og lokker bladlus og mellus bort fra tomatplantene.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["selleri", "tomat"],
    compatibility: "companion",
    reason:
      "Selleri og tomat trives sammen; selleri gir skygge til jorda og holder den fuktig rundt tomatplantene.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["tomat", "zinnia"],
    compatibility: "companion",
    reason:
      "Zinniaer tiltrekker marihøner og snylteveps som spiser bladlus og tomatlarver.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["sitronmelisse", "tomat"],
    compatibility: "helpful",
    reason:
      "Sitronmelisse tiltrekker pollinatorer og dens sitronelladuft frastøter mellus, men den sprer seg og trenger eget bed.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["tagetes", "tomat"],
    compatibility: "companion",
    reason:
      "Tagetes frastøter nematoder og mellus som ofte angriper tomater.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },

  // ──────────────────────────────────────────────
  // TOMATVARIANTER (ripatomat, cherrytomat)
  // ──────────────────────────────────────────────
  {
    plants: ["basilikum", "ripatomat"],
    compatibility: "companion",
    reason:
      "Basilikum frastøter bladlus og mellus fra ripatomater og kan forbedre smaken.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["basilikum", "cherrytomat"],
    compatibility: "companion",
    reason:
      "Basilikum frastøter bladlus og mellus fra cherrytomater og kan forbedre smaken.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["gulrot", "ripatomat"],
    compatibility: "companion",
    reason:
      "Gulrøtter løsner jorda rundt ripatomatrøtter, og tomatens skygge holder gulrotjorda kjølig.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["cherrytomat", "ringblomst"],
    compatibility: "companion",
    reason:
      "Ringblomstens røtter dreper rotgallnematoder som kan skade cherrytomatrøtter.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["persille", "ripatomat"],
    compatibility: "companion",
    reason:
      "Persille tiltrekker blomsterfluer som spiser bladlus på ripatomater.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["cherrytomat", "gresslok"],
    compatibility: "companion",
    reason:
      "Gressløkens svovelforbindelser frastøter bladlus fra cherrytomater.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // PAPRIKA-KOMPANJONGER
  // ──────────────────────────────────────────────
  {
    plants: ["basilikum", "paprika"],
    compatibility: "companion",
    reason:
      "Basilikum frastøter trips, spinnmidd og bladlus som vanligvis angriper paprikaplanter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["gulrot", "paprika"],
    compatibility: "companion",
    reason:
      "Gulrøtter fungerer som levende jorddekke, skygger jorda og bevarer fuktighet rundt paprika.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lok", "paprika"],
    compatibility: "companion",
    reason:
      "Løk frastøter bladlus og andre skadedyr med sin sterke lukt, til fordel for paprika.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["paprika", "ringblomst"],
    compatibility: "companion",
    reason:
      "Ringblomster frastøter nematoder og mellus som ofte plager paprikaplanter.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["blomkarse", "paprika"],
    compatibility: "companion",
    reason:
      "Blomkarse lokker bladlus bort fra paprikaplantene som fangstplante.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  // (ringblomst + paprika covered above)

  // ──────────────────────────────────────────────
  // CHILIPEPPER (arver paprika-relasjoner)
  // ──────────────────────────────────────────────
  {
    plants: ["basilikum", "chilipepper"],
    compatibility: "companion",
    reason:
      "Basilikum frastøter bladlus og trips som angriper chiliplanter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["chilipepper", "lok"],
    compatibility: "companion",
    reason:
      "Løk frastøter bladlus med sin sterke lukt og beskytter chiliplanter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["chilipepper", "gulrot"],
    compatibility: "companion",
    reason:
      "Gulrøtter fungerer som levende jorddekke rundt chiliplanter og bevarer fuktighet.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["blomkarse", "chilipepper"],
    compatibility: "companion",
    reason:
      "Blomkarse lokker bladlus bort fra chiliplantene.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // AGURK-KOMPANJONGER
  // ──────────────────────────────────────────────
  {
    plants: ["agurk", "bonner"],
    compatibility: "companion",
    reason:
      "Bønner fikserer nitrogen som agurker trenger for bladutvikling, og begge trives i varme forhold.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["agurk", "dill"],
    compatibility: "companion",
    reason:
      "Dill tiltrekker rovveps og blomsterfluer som spiser bladlus og spinnmidd på agurker.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["agurk", "mais"],
    compatibility: "companion",
    reason:
      "Mais gir le og delvis skygge som hjelper agurkranker med å holde på fuktighet.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["agurk", "reddik"],
    compatibility: "companion",
    reason:
      "Reddik frastøter agurkbiller med sine skarpe forbindelser og modnes før agurkene trenger plassen.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["agurk", "solsikke"],
    compatibility: "helpful",
    reason:
      "Solsikker tiltrekker pollinatorer og gir klatrestøtte og lett skygge, men kan konkurrere om vann.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["agurk", "blomkarse"],
    compatibility: "companion",
    reason:
      "Blomkarse fungerer som fangstplante for bladlus som ellers ville angrepet agurker.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["agurk", "salat"],
    compatibility: "companion",
    reason:
      "Salat fungerer som levende jorddekke under agurkranker, holder jorda kjølig og undertrykker ugress.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["agurk", "zinnia"],
    compatibility: "companion",
    reason:
      "Zinniaer tiltrekker pollinatorer og marihøner som hjelper med å kontrollere agurkskadedyr.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // GULROT & LØK-FAMILIEN
  // ──────────────────────────────────────────────
  {
    plants: ["gulrot", "lok"],
    compatibility: "companion",
    reason:
      "Løkens lukt maskerer gulrot for gulrotflua, mens gulrot frastøter løkflua — klassisk gjensidig skadedyrbeskyttelse.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["gulrot", "rosmarin"],
    compatibility: "companion",
    reason:
      "Rosmarins sterke aroma forvirrer og frastøter gulrotflue fra å finne gulrøtter ved lukt.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["gulrot", "salvie"],
    compatibility: "companion",
    reason:
      "Salviens skarpe oljer maskerer gulrotens duft og reduserer gulrotflueangrep.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["gresslok", "gulrot"],
    compatibility: "companion",
    reason:
      "Gressløkens løkduft frastøter gulrotflue, noe som gjør den til en effektiv kantplante for gulrøtter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["gulrot", "purre"],
    compatibility: "companion",
    reason:
      "Purre frastøter gulrotflue med sin løkduft, og gulrot frastøter purremøll — klassisk kompanjongplanting.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["gulrot", "sjalottlok"],
    compatibility: "companion",
    reason:
      "Sjalottløk frastøter gulrotflue på samme måte som annen løk — duften maskerer gulrotens aroma.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },

  // ──────────────────────────────────────────────
  // SALAT & BLADGRØNNSAKER
  // ──────────────────────────────────────────────
  {
    plants: ["gresslok", "salat"],
    compatibility: "companion",
    reason:
      "Gressløk frastøter bladlus som ofte angriper salat, og den smale formen tar lite plass.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["reddik", "salat"],
    compatibility: "companion",
    reason:
      "Reddik modnes raskt og løsner jorda før salaten trenger plassen, effektiv bruk av bedet.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lok", "salat"],
    compatibility: "companion",
    reason:
      "Løk frastøter snegler og bladlus som angriper salatblader.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["ringblomst", "salat"],
    compatibility: "companion",
    reason:
      "Ringblomster frastøter snegler og bladlus, to av salatens vanligste skadedyr.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["salat", "spinat"],
    compatibility: "companion",
    reason:
      "Begge har like behov for vann og skygge, og de grunne røttene konkurrerer ikke i ulike jorddybder.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["alyssum", "salat"],
    compatibility: "companion",
    reason:
      "Alyssum tiltrekker løpebiller og blomsterfluer som spiser bladlus på salat.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["ruccola", "salat"],
    compatibility: "companion",
    reason:
      "Ruccola og salat har lignende vekstforhold og kan såes sammen for variert høsting.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["hvitlok", "spinat"],
    compatibility: "companion",
    reason:
      "Hvitløkens svovelforbindelser frastøter bladlus og minerfluer som angriper spinat.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["gronnkal", "lok"],
    compatibility: "companion",
    reason:
      "Løk frastøter jordlopper og bladlus som ofte skader grønnkålblader.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["gronnkal", "hvitlok"],
    compatibility: "companion",
    reason:
      "Hvitløk frastøter bladlus som er et vedvarende problem på grønnkål.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["gronnkal", "sitronmelisse"],
    compatibility: "helpful",
    reason:
      "Sitronmelisse tiltrekker pollinatorer og frastøter bladlus nær grønnkål, men sprer seg og bør stå i eget bed.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["mangold", "salat"],
    compatibility: "companion",
    reason:
      "Mangold og salat trives i lignende forhold og utfyller hverandre med ulike rotdybder.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },

  // ──────────────────────────────────────────────
  // KÅLFAMILIEN (Brassica) + URTER
  // ──────────────────────────────────────────────
  {
    plants: ["kal", "timian"],
    compatibility: "companion",
    reason:
      "Timian frastøter kålmøll og kålsommerfugllarver med sine aromatiske oljer.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["kal", "salvie"],
    compatibility: "companion",
    reason:
      "Salviens sterke duft frastøter kålmøll fra å legge egg på kålblader.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["kal", "rosmarin"],
    compatibility: "companion",
    reason:
      "Rosmarin frastøter kålmøll og andre kålskadedyr med sin gjennomtrengende aroma.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["brokkoli", "timian"],
    compatibility: "companion",
    reason:
      "Timian frastøter kålmark og bladlus som angriper brokkolihoder.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["brokkoli", "salvie"],
    compatibility: "companion",
    reason:
      "Salvie frastøter kålmøll hvis larver spiser brokkoliblomstene.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["brokkoli", "rosmarin"],
    compatibility: "companion",
    reason:
      "Rosmarins flyktige oljer maskerer kålduften og forvirrer kålmøllens voksne individer.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["kal", "kamille"],
    compatibility: "helpful",
    reason:
      "Kamille tiltrekker nytteveps som parasitterer kållarver, best plantet i nærheten snarere enn i samme bed.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["brokkoli", "kamille"],
    compatibility: "helpful",
    reason:
      "Kamille forbedrer brokkoliveksten og tiltrekker skadedyrkontrollerende insekter når den plantes i nærheten.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["blomkarse", "kal"],
    compatibility: "companion",
    reason:
      "Blomkarse lokker bladlus og larver bort fra kålen som en offerplante.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["kal", "lok"],
    compatibility: "companion",
    reason:
      "Løk frastøter kålfluelarver og jordlopper med sine skarpe svovelforbindelser.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["brokkoli", "lok"],
    compatibility: "companion",
    reason:
      "Løk maskerer kålduften og reduserer skadedyrpress fra kålfluer.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["dill", "kal"],
    compatibility: "companion",
    reason:
      "Dill tiltrekker snylteveps som kontrollerer kålmark og kålsommerfugler.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["alyssum", "brokkoli"],
    compatibility: "companion",
    reason:
      "Alyssums blomster tiltrekker snylteveps som kontrollerer kålbladlus på brokkoli.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["alyssum", "kal"],
    compatibility: "companion",
    reason:
      "Alyssum gir habitat for snylteveps som angriper kållarver.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["kal", "lavendel"],
    compatibility: "helpful",
    reason:
      "Lavendels duft frastøter kålmøll og tiltrekker pollinatorer, men trenger tørrere jord enn kål.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["brokkoli", "lavendel"],
    compatibility: "helpful",
    reason:
      "Lavendel frastøter kålmøll fra nærliggende brokkoli og tiltrekker pollinatorer.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["kal", "ringblomst"],
    compatibility: "companion",
    reason:
      "Ringblomst lokker bladlus bort fra kålen som fangstplante og tiltrekker gulløyer som spiser dem.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["blomkarse", "brokkoli"],
    compatibility: "companion",
    reason:
      "Blomkarse trekker kålbladlus bort fra brokkoli og beskytter avlingen.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // Blomkål, rosenkål, nepe — deler kålfamiliens kompanjonger
  {
    plants: ["blomkal", "timian"],
    compatibility: "companion",
    reason:
      "Timian frastøter kålmøll og larver som angriper blomkål med sine aromatiske oljer.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["blomkal", "salvie"],
    compatibility: "companion",
    reason:
      "Salviens sterke duft frastøter kålmøll fra blomkål.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["blomkal", "lok"],
    compatibility: "companion",
    reason:
      "Løk maskerer blomkålens duft og frastøter kålflue og jordlopper.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["rosenkal", "timian"],
    compatibility: "companion",
    reason:
      "Timian frastøter kålmøll som legger egg på rosenkålplanter.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["rosenkal", "salvie"],
    compatibility: "companion",
    reason:
      "Salvie frastøter kålmøll og kålsommerfugler fra rosenkål.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["lok", "rosenkal"],
    compatibility: "companion",
    reason:
      "Løk frastøter kålfluer og jordlopper som plager rosenkål.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["nepe", "timian"],
    compatibility: "companion",
    reason:
      "Timian frastøter kålskadedyr fra nepe, som tilhører kålfamilien.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["lok", "nepe"],
    compatibility: "companion",
    reason:
      "Løk frastøter jordlopper som ofte angriper nepeblader.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },

  // Selleri + kålfamilien
  {
    plants: ["brokkoli", "selleri"],
    compatibility: "companion",
    reason:
      "Selleri frastøter kålsommerfugler med sin sterke duft og trives i lignende jordfuktighet som brokkoli.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["kal", "selleri"],
    compatibility: "companion",
    reason:
      "Selleri frastøter kålsommerfugler og de har like krav til vanning.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["blomkal", "selleri"],
    compatibility: "companion",
    reason:
      "Selleri og blomkål trives i fuktig jord, og selleri frastøter kålmøll.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // ERTER & BØNNER (belgvekster)
  // ──────────────────────────────────────────────
  {
    plants: ["erter", "gulrot"],
    compatibility: "companion",
    reason:
      "Erter fikserer nitrogen som gulrøtter bruker, mens gulrøttenes dype røtter ikke konkurrerer med ertenes grunne.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["erter", "mais"],
    compatibility: "companion",
    reason:
      "Erter fikserer nitrogen som storfôrende mais tømmer, og mais gir et espalier for erteranker.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["erter", "salat"],
    compatibility: "companion",
    reason:
      "Erter gir lett skygge som kjølighetselskende salat setter pris på i varmere måneder.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["bonner", "ringblomst"],
    compatibility: "companion",
    reason:
      "Ringblomster frastøter bønnebiller og mellus som angriper bønneplanter.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["bonner", "reddik"],
    compatibility: "companion",
    reason:
      "Reddik modnes raskt mellom bønneradene, og dens skarpe forbindelser frastøter bønnebiller.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["agurkurt", "bonner"],
    compatibility: "helpful",
    reason:
      "Agurkurt tiltrekker pollinatorer som forbedrer bønnesettingen når den plantes i nærheten.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["bonner", "mangold"],
    compatibility: "companion",
    reason:
      "Bønner fikserer nitrogen som mangold bruker for bladutvikling, og de konkurrerer ikke om plass.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["erter", "pastinakk"],
    compatibility: "companion",
    reason:
      "Erter fikserer nitrogen i jorda som pastinakk benytter for rotvekst.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["erter", "karve"],
    compatibility: "companion",
    reason:
      "Karve og erter er en tradisjonell norsk kombination; karve tiltrekker nytteinsekter som gagner erter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },

  // Sukkererter arver erter-relasjoner
  {
    plants: ["gulrot", "sukkererter"],
    compatibility: "companion",
    reason:
      "Sukkererter fikserer nitrogen som gulrøtter bruker, og røttene konkurrerer ikke.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["salat", "sukkererter"],
    compatibility: "companion",
    reason:
      "Sukkererter gir lett skygge som salat trives i.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["karve", "sukkererter"],
    compatibility: "companion",
    reason:
      "Karve tiltrekker nytteinsekter som gagner sukkererter, en tradisjonell norsk kombinasjon.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },

  // ──────────────────────────────────────────────
  // RINGBLOMST/TAGETES-KOMPANJONGER (universell skadedyrbekjempelse)
  // ──────────────────────────────────────────────
  {
    plants: ["aubergine", "ringblomst"],
    compatibility: "companion",
    reason:
      "Ringblomster frastøter jordlopper og nematoder, to av auberginens største skadedyr.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["ringblomst", "squash"],
    compatibility: "companion",
    reason:
      "Ringblomster frastøter squashbiller og tiltrekker blomsterfluer som spiser bladlus.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["potet", "ringblomst"],
    compatibility: "companion",
    reason:
      "Ringblomster frastøter Coloradobiller og dreper rotgallnematoder i jorda.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["gresskar", "tagetes"],
    compatibility: "companion",
    reason:
      "Tagetes tiltrekker pollinatorer som gresskar trenger og frastøter squashborere.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["agurk", "tagetes"],
    compatibility: "companion",
    reason:
      "Tagetes frastøter bladlus og nematoder nær agurker.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },

  // ──────────────────────────────────────────────
  // AUBERGINE
  // ──────────────────────────────────────────────
  {
    plants: ["aubergine", "basilikum"],
    compatibility: "companion",
    reason:
      "Basilikum frastøter bladlus og spinnmidd, og tiltrekker pollinatorer som gagner auberginens fruktsetting.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["aubergine", "bonner"],
    compatibility: "companion",
    reason:
      "Bønner tilfører nitrogen til jorda som storfôrende aubergine gjerne bruker.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["aubergine", "timian"],
    compatibility: "companion",
    reason:
      "Timian frastøter jordlopper, et stort skadedyr på aubergine, med sine aromatiske oljer.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["aubergine", "estragon"],
    compatibility: "companion",
    reason:
      "Estragon frastøter skadedyr med sin sterke aroma og trives i samme varme vekstforhold som aubergine.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // SQUASH, GRESSKAR & MAIS
  // ──────────────────────────────────────────────
  {
    plants: ["blomkarse", "squash"],
    compatibility: "companion",
    reason:
      "Blomkarse frastøter squashbiller og bladlus, og fungerer som fangstplante rundt squash.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["agurkurt", "squash"],
    compatibility: "helpful",
    reason:
      "Agurkurt tiltrekker pollinatorer som er essensielle for squashens fruktsetting, men bør ha eget bed pga. størrelsen.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["oregano", "squash"],
    compatibility: "companion",
    reason:
      "Oregano frastøter squashbiller og bladlus med sitt aromatiske løvverk.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["squash", "zinnia"],
    compatibility: "companion",
    reason:
      "Zinniaer tiltrekker pollinatorer som squash er avhengig av for fruktsetting.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["solsikke", "squash"],
    compatibility: "helpful",
    reason:
      "Solsikker tiltrekker pollinatorer som squash trenger og gir le, men bør stå i nabobedet.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["bonner", "gresskar"],
    compatibility: "companion",
    reason:
      "Bønner fikserer nitrogen som storfôrende gresskar trenger for god vekst.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["gresskar", "mais"],
    compatibility: "companion",
    reason:
      "Gresskarets store blader skygger bakken og holder på fuktigheten rundt mais.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["mais", "solsikke"],
    compatibility: "helpful",
    reason:
      "Solsikker tiltrekker pollinatorer og marihøner som gagner mais, men konkurrerer om næring ved tett planting.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // POTET
  // ──────────────────────────────────────────────
  {
    plants: ["bonner", "potet"],
    compatibility: "companion",
    reason:
      "Bønner fikserer nitrogen og frastøter Coloradobiller, mens poteter frastøter bønnebiller.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["hvitlok", "potet"],
    compatibility: "companion",
    reason:
      "Hvitløk frastøter bladlus og kan redusere risikoen for tørråte i poteter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["pepperrot", "potet"],
    compatibility: "companion",
    reason:
      "Pepperrot frastøter Coloradobiller og andre skadedyr fra poteter med sin skarpe lukt.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },

  // ──────────────────────────────────────────────
  // RØDBETE & REDDIK
  // ──────────────────────────────────────────────
  {
    plants: ["hvitlok", "rodbete"],
    compatibility: "companion",
    reason:
      "Hvitløkens svovelforbindelser frastøter skadedyr og kan forbedre rødbetens vekst og smak.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["rodbete", "salat"],
    compatibility: "companion",
    reason:
      "Salat fungerer som et grunt jorddekke som ikke konkurrerer med rødbetens dype røtter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lok", "reddik"],
    compatibility: "companion",
    reason:
      "Reddik løsner jordskorpen for løkfrøplanter og modnes før løk trenger plassen.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lok", "rodbete"],
    compatibility: "companion",
    reason:
      "Løk og rødbeter er gode naboer som ikke konkurrerer om næring og bruker ulike jorddybder.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },

  // ──────────────────────────────────────────────
  // PURRE
  // ──────────────────────────────────────────────
  {
    plants: ["purre", "selleri"],
    compatibility: "companion",
    reason:
      "Purre og selleri trives i fuktig jord og purres løkduft frastøter selleribladlus.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["purre", "tomat"],
    compatibility: "companion",
    reason:
      "Purre frastøter bladlus med sin løkduft og trives i tomatens lette skygge.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // URTE-URTE-KOMPANJONGER
  // ──────────────────────────────────────────────
  {
    plants: ["oregano", "timian"],
    compatibility: "companion",
    reason:
      "Begge er middelhavske urter med identiske behov for sol og drenering, trives i tørr, mager jord.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["rosmarin", "salvie"],
    compatibility: "companion",
    reason:
      "Begge foretrekker tørr, veldrenert jord og full sol; de aromatiske oljene virker sammen mot skadedyr.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["gresslok", "persille"],
    compatibility: "companion",
    reason:
      "Begge tåler litt skygge og fuktighet, og gressløk frastøter bladlus som kan angripe persille.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["dill", "koriander"],
    compatibility: "companion",
    reason:
      "Begge tiltrekker nytteinsekter som gulløyer og blomsterfluer, og deler lignende vekstforhold.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lavendel", "rosmarin"],
    compatibility: "companion",
    reason:
      "Begge er tørketålende middelhavske planter med identiske behov for jord, sol og vann.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lavendel", "timian"],
    compatibility: "companion",
    reason:
      "Lavendel og timian er middelhavske planter som trives sammen i tørr, veldrenert jord.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["lavendel", "salvie"],
    compatibility: "companion",
    reason:
      "Lavendel og salvie har like krav til sol, jord og drenering og trives side om side.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },

  // ──────────────────────────────────────────────
  // BLOMSTER-KOMPANJONGER
  // ──────────────────────────────────────────────
  {
    plants: ["kamille", "lok"],
    compatibility: "helpful",
    reason:
      "Kamille forbedrer løkens smak og vekst når den plantes i nærheten.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["kornblomst", "salat"],
    compatibility: "helpful",
    reason:
      "Kornblomst tiltrekker nytteinsekter som marihøner og gulløyer som spiser bladlus på salat.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["gulrot", "kornblomst"],
    compatibility: "helpful",
    reason:
      "Kornblomst tiltrekker snylteveps og blomsterfluer som gagner gulrotveksten.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["erter", "kornblomst"],
    compatibility: "helpful",
    reason:
      "Kornblomst tiltrekker pollinatorer og nytteinsekter som gagner ertebelgene.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["kosmea", "tomat"],
    compatibility: "helpful",
    reason:
      "Kosmea tiltrekker pollinatorer og nytteinsekter som spiser tomatskadedyr.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["kosmea", "squash"],
    compatibility: "helpful",
    reason:
      "Kosmea tiltrekker pollinatorer som squash trenger for fruktsetting.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["bonner", "kosmea"],
    compatibility: "helpful",
    reason:
      "Kosmea tiltrekker pollinatorer som forbedrer bønnesettingen.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["agurk", "kosmea"],
    compatibility: "helpful",
    reason:
      "Kosmea tiltrekker pollinatorer som agurk trenger for god fruktutvikling.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["solhatt", "tomat"],
    compatibility: "helpful",
    reason:
      "Solhatt tiltrekker pollinatorer og rovinsekter som spiser tomatbladlus.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["paprika", "solhatt"],
    compatibility: "helpful",
    reason:
      "Solhatt tiltrekker pollinatorer og nytteinsekter i nærheten av paprikaplanter.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["aubergine", "solhatt"],
    compatibility: "helpful",
    reason:
      "Solhatt tiltrekker pollinatorer som forbedrer auberginens fruktsetting.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["sommeraster", "tomat"],
    compatibility: "helpful",
    reason:
      "Sommeraster tiltrekker pollinatorer og snylteveps som kontrollerer tomatskadedyr.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // LUPINER (nitrogenfikserer)
  // ──────────────────────────────────────────────
  {
    plants: ["lupiner", "mais"],
    compatibility: "helpful",
    reason:
      "Lupiner fikserer nitrogen i jorda som storfôrende mais kan utnytte.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["lupiner", "potet"],
    compatibility: "helpful",
    reason:
      "Lupiner fikserer nitrogen som forbedrer jordkvaliteten for poteter.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["gresskar", "lupiner"],
    compatibility: "helpful",
    reason:
      "Lupiner fikserer nitrogen som storfôrende gresskar trenger for stor bladmasse.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["lupiner", "squash"],
    compatibility: "helpful",
    reason:
      "Lupiner tilfører nitrogen til jorda som squash drar nytte av.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["gulrot", "lupiner"],
    compatibility: "helpful",
    reason:
      "Lupiner forbedrer jordstrukturen og tilfører nitrogen som gulrøtter kan utnytte.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["kal", "lupiner"],
    compatibility: "helpful",
    reason:
      "Lupiner fikserer nitrogen som storfôrende kål trenger.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },

  // ──────────────────────────────────────────────
  // LØPSTIKKE (hjelpsom for mange grønnsaker)
  // ──────────────────────────────────────────────
  {
    plants: ["lopstikke", "tomat"],
    compatibility: "helpful",
    reason:
      "Løpstikke forbedrer veksten til nærliggende tomater og tiltrekker nytteinsekter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["lopstikke", "paprika"],
    compatibility: "helpful",
    reason:
      "Løpstikke tiltrekker nytteinsekter og forbedrer veksten til nærliggende paprikaplanter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["bonner", "lopstikke"],
    compatibility: "helpful",
    reason:
      "Løpstikke forbedrer veksten til nærliggende bønner og tiltrekker pollinatorer.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["lopstikke", "salat"],
    compatibility: "helpful",
    reason:
      "Løpstikke tiltrekker nytteinsekter som beskytter salat mot bladlus.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["gulrot", "lopstikke"],
    compatibility: "helpful",
    reason:
      "Løpstikke forbedrer vekstforholdene for gulrøtter og tiltrekker snylteveps som kontrollerer skadedyr.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // DIVERSE KOMPANJONGER
  // ──────────────────────────────────────────────
  {
    plants: ["ruccola", "tomat"],
    compatibility: "companion",
    reason:
      "Ruccola fungerer som levende jorddekke under tomater og holdes kjølig av tomatens skygge.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["agurk", "ruccola"],
    compatibility: "companion",
    reason:
      "Ruccola fungerer som jorddekke under agurkranker og har kort veksttid som passer godt.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["erter", "spinat"],
    compatibility: "companion",
    reason:
      "Erter gir lett skygge som spinat setter pris på, og fikserer nitrogen spinat bruker.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["koriander", "spinat"],
    compatibility: "companion",
    reason:
      "Koriander tiltrekker nytteinsekter og begge trives i kjøligere vekstforhold.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  // (agurk + mais covered above)
  {
    plants: ["dill", "salat"],
    compatibility: "companion",
    reason:
      "Dill tiltrekker nytteinsekter som spiser bladlus på salat, og begge trives i kjølig vær.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["hvitlok", "tomat"],
    compatibility: "companion",
    reason:
      "Hvitløk frastøter spinnmidd og bladlus fra tomater med sine svovelforbindelser.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["hvitlok", "paprika"],
    compatibility: "companion",
    reason:
      "Hvitløk frastøter bladlus som angriper paprikaplanter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["koriander", "tomat"],
    compatibility: "companion",
    reason:
      "Koriander tiltrekker nytteinsekter som spiser bladlus og mellus på tomater.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lok", "pastinakk"],
    compatibility: "companion",
    reason:
      "Løk frastøter skadedyr fra pastinakk med sin sterke duft, lik samplanting med gulrot.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["pastinakk", "rosmarin"],
    compatibility: "companion",
    reason:
      "Rosmarins sterke aroma frastøter skadedyr fra pastinakk, lignende effekt som med gulrot.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["erter", "nepe"],
    compatibility: "companion",
    reason:
      "Erter fikserer nitrogen i jorda som nepe bruker for rotvekst.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["brokkoli", "rodbete"],
    compatibility: "companion",
    reason:
      "Rødbete og brokkoli bruker ulike jorddybder og konkurrerer ikke om næring.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lok", "mangold"],
    compatibility: "companion",
    reason:
      "Løk frastøter bladlus og jordlopper som kan angripe mangold.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  // (erter + mais covered above)
  // (aubergine + bonner covered above)
  {
    plants: ["potet", "timian"],
    compatibility: "companion",
    reason:
      "Timian frastøter Coloradobiller fra poteter med sine aromatiske oljer.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["oregano", "tomat"],
    compatibility: "companion",
    reason:
      "Oregano frastøter bladlus og andre insekter fra tomater med sin sterke duft.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["estragon", "paprika"],
    compatibility: "companion",
    reason:
      "Estragon frastøter skadedyr med sin sterke aroma og trives i samme varme vekstforhold som paprika.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["erter", "selleri"],
    compatibility: "companion",
    reason:
      "Erter fikserer nitrogen som selleri bruker, og begge trives i fuktig jord.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lok", "selleri"],
    compatibility: "companion",
    reason:
      "Løk frastøter selleribladlus med sin sterke duft.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["jordskokk", "mais"],
    compatibility: "helpful",
    reason:
      "Jordskokk og mais kan dyrkes i nærheten da begge er store, kraftige planter som tåler hverandres konkurranse.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["solsikke", "tomat"],
    compatibility: "helpful",
    reason:
      "Solsikker tiltrekker pollinatorer og nytteinsekter som gagner tomater, men kan skygge for mye.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lavendel", "tomat"],
    compatibility: "helpful",
    reason:
      "Lavendels sterke duft frastøter bladlus og mellus fra tomater, men trenger tørrere jord.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["gresskar", "oregano"],
    compatibility: "companion",
    reason:
      "Oregano frastøter squashbiller og bladlus som angriper gresskar.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["agurk", "erter"],
    compatibility: "companion",
    reason:
      "Erter fikserer nitrogen som agurker trenger, og begge trives som klatreplanter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["hvitlok", "salat"],
    compatibility: "companion",
    reason:
      "Hvitløk frastøter bladlus og snegler som ofte angriper salat.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["dill", "gronnkal"],
    compatibility: "companion",
    reason:
      "Dill tiltrekker snylteveps som kontrollerer kållarver på grønnkål.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["blomkarse", "gronnkal"],
    compatibility: "companion",
    reason:
      "Blomkarse fungerer som fangstplante og lokker bladlus bort fra grønnkål.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["dill", "rodbete"],
    compatibility: "companion",
    reason:
      "Dill tiltrekker nytteinsekter og begge trives i lignende vekstforhold.",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  // (bonner + gresskar covered above)

  // ──────────────────────────────────────────────
  // ANTAGONISTER — Sykdomsdeling
  // ──────────────────────────────────────────────
  {
    plants: ["potet", "tomat"],
    compatibility: "antagonist",
    reason:
      "Begge er søtvierfamilien og deler tørråte (Phytophthora infestans), som sprer seg raskt mellom dem.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["kal", "tomat"],
    compatibility: "antagonist",
    reason:
      "Tomater hemmer kålvekst gjennom allelopatiske rotutskillelser.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["agurk", "potet"],
    compatibility: "antagonist",
    reason:
      "Poteter øker agurkens mottakelighet for sykdom, og agurker fremmer tørråte hos poteter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["aubergine", "potet"],
    compatibility: "antagonist",
    reason:
      "Begge er søtvierfamilien og deler Coloradobiller og tidligråtesykdommer.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["potet", "ripatomat"],
    compatibility: "antagonist",
    reason:
      "Ripatomater og poteter deler tørråte som sprer seg raskt mellom dem.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["cherrytomat", "potet"],
    compatibility: "antagonist",
    reason:
      "Cherrytomater og poteter deler tørråte og bør ikke plantes sammen.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTER — Løkplanter hemmer belgvekster
  // ──────────────────────────────────────────────
  {
    plants: ["bonner", "lok"],
    compatibility: "antagonist",
    reason:
      "Løk skiller ut forbindelser som hemmer nitrogenfikserende bakterier på bønnerøtter og bremser veksten.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["bonner", "hvitlok"],
    compatibility: "antagonist",
    reason:
      "Hvitløkens svovelforbindelser undertrykker Rhizobium-bakteriene som bønner trenger for å fiksere nitrogen.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["erter", "hvitlok"],
    compatibility: "antagonist",
    reason:
      "Hvitløk hemmer ertevekst ved å undertrykke nitrogenfikserende bakterier i ertenes rotknoller.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["erter", "lok"],
    compatibility: "antagonist",
    reason:
      "Løk bremser ertevekst ved å forstyrre nitrogenfiskering i rotsonen.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["bonner", "sjalottlok"],
    compatibility: "antagonist",
    reason:
      "Sjalottløk hemmer bønners nitrogenfiksering på samme måte som annen løk.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["erter", "sjalottlok"],
    compatibility: "antagonist",
    reason:
      "Sjalottløk hemmer ertenes nitrogenfikserende bakterier.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["hvitlok", "sukkererter"],
    compatibility: "antagonist",
    reason:
      "Hvitløk hemmer sukkererters nitrogenfiksering og bremser veksten.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lok", "sukkererter"],
    compatibility: "antagonist",
    reason:
      "Løk hemmer sukkererters vekst ved å forstyrre nitrogenfikseringen.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTER — Krysspollinering / Konkurranse
  // ──────────────────────────────────────────────
  {
    plants: ["dill", "gulrot"],
    compatibility: "antagonist",
    reason:
      "Begge er skjermplanter som kan krysspollinere, noe som gir bitre frø og hemmer gulrotveksten.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["brokkoli", "kal"],
    compatibility: "antagonist",
    reason:
      "Begge er storfôrende kålplanter som konkurrerer om samme næringsstoffer og tiltrekker samme skadedyr.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["gronnkal", "kal"],
    compatibility: "antagonist",
    reason:
      "Kålplanter i samme familie konkurrerer om næring og forsterker felles skadedyr- og sykdomsproblemer.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["brokkoli", "gronnkal"],
    compatibility: "antagonist",
    reason:
      "Planting av kålplanter sammen konsentrerer skadedyrpress og forårsaker næringskonkurranse.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["blomkal", "brokkoli"],
    compatibility: "antagonist",
    reason:
      "Blomkål og brokkoli konkurrerer om næring og forsterker hverandres skadedyrproblemer.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["blomkal", "kal"],
    compatibility: "antagonist",
    reason:
      "Blomkål og kål er nære slektninger som tiltrekker samme skadedyr og konkurrerer om næring.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["kal", "rosenkal"],
    compatibility: "antagonist",
    reason:
      "Rosenkål og kål er kålplanter som forsterker hverandres skadedyrproblemer ved samplanting.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTER — Mynte (invasive røtter)
  // ──────────────────────────────────────────────
  {
    plants: ["mynte", "persille"],
    compatibility: "antagonist",
    reason:
      "Myntens aggressive jordstengler fortrengerr persille og konkurrerer om vann og næring.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["basilikum", "mynte"],
    compatibility: "antagonist",
    reason:
      "Mynte sprer seg aggressivt og overvelder basilikum med sitt invasive rotsystem.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["koriander", "mynte"],
    compatibility: "antagonist",
    reason:
      "Myntens kraftige utløpere overtar korianderen, som ikke kan konkurrere om rotplass.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["mynte", "salat"],
    compatibility: "antagonist",
    reason:
      "Myntens invasive røtter overtar raskt grunne salatplanter i delte bed.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["gulrot", "mynte"],
    compatibility: "antagonist",
    reason:
      "Myntens tette rotnettverk kveler gulrotrøtter og reduserer avlingen kraftig.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTER — Andre kjente dårlige par
  // ──────────────────────────────────────────────
  {
    plants: ["dill", "tomat"],
    compatibility: "antagonist",
    reason:
      "Moden dill produserer forbindelser som hemmer tomatvekst; bare ung dill er trygg nær tomater.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["potet", "solsikke"],
    compatibility: "antagonist",
    reason:
      "Solsikker frigjør allelopatiske forbindelser som hemmer potetknollveksten.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["agurk", "salvie"],
    compatibility: "antagonist",
    reason:
      "Salviens aromatiske oljer kan hemme agurkvekst; de foretrekker også svært ulike jordfuktigheter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTER — Fennikel (antagonist med nesten alt)
  // ──────────────────────────────────────────────
  {
    plants: ["fennikel", "tomat"],
    compatibility: "antagonist",
    reason:
      "Fennikel skiller ut stoffer som hemmer tomatvekst; den er allelopatisk mot de fleste grønnsaker.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["bonner", "fennikel"],
    compatibility: "antagonist",
    reason:
      "Fennikels allelopatiske rotutskillelser hemmer bønnevekst.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["erter", "fennikel"],
    compatibility: "antagonist",
    reason:
      "Fennikel hemmer ertevekst med sine allelopatiske forbindelser.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "paprika"],
    compatibility: "antagonist",
    reason:
      "Fennikels rotutskillelser hemmer paprikavekst.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "gulrot"],
    compatibility: "antagonist",
    reason:
      "Fennikel og gulrot er begge skjermplanter som kan krysspollinere, og fennikel hemmer gulrotveksten.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "kal"],
    compatibility: "antagonist",
    reason:
      "Fennikels allelopatiske egenskaper hemmer kålvekst.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["agurk", "fennikel"],
    compatibility: "antagonist",
    reason:
      "Fennikel hemmer agurkvekst med sine allelopatiske rotutskillelser.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "salat"],
    compatibility: "antagonist",
    reason:
      "Fennikel hemmer salatvekst; den bør dyrkes isolert fra de fleste grønnsaker.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "spinat"],
    compatibility: "antagonist",
    reason:
      "Fennikels allelopatiske forbindelser hemmer spinatvekst.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "squash"],
    compatibility: "antagonist",
    reason:
      "Fennikel hemmer squashvekst med sine rotutskillelser.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["dill", "fennikel"],
    compatibility: "antagonist",
    reason:
      "Dill og fennikel er nære slektninger som krysspollinerer og produserer dårlige frø.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "koriander"],
    compatibility: "antagonist",
    reason:
      "Fennikel og koriander er skjermplanter som krysspollinerer og fennikel hemmer korianderens vekst.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTER — Jordskokk (svært kraftigvoksende)
  // ──────────────────────────────────────────────
  {
    plants: ["jordskokk", "tomat"],
    compatibility: "antagonist",
    reason:
      "Jordskokk er svært kraftigvoksende og skygger ut tomater, den tar også all næring.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["jordskokk", "potet"],
    compatibility: "antagonist",
    reason:
      "Jordskokk og potet konkurrerer hardt om plass og næring, og jordskokk er vanskelig å fjerne.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["agurk", "jordskokk"],
    compatibility: "antagonist",
    reason:
      "Jordskokks kraftige vekst skygger ut agurker og tar all tilgjengelig næring.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["jordskokk", "salat"],
    compatibility: "antagonist",
    reason:
      "Jordskokk er for kraftigvoksende og skygger ut salat fullstendig.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["jordskokk", "paprika"],
    compatibility: "antagonist",
    reason:
      "Jordskokk overtar bedet med sin aggressive vekst og skygger ut paprikaplanter.",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTER — Diverse
  // ──────────────────────────────────────────────
  {
    plants: ["brokkoli", "tomat"],
    compatibility: "antagonist",
    reason:
      "Tomater hemmer brokkolivekst gjennom allelopatiske rotutskillelser.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["gronnkal", "tomat"],
    compatibility: "antagonist",
    reason:
      "Tomater hemmer grønnkålvekst med allelopatiske forbindelser, som med andre kålplanter.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "lok"],
    compatibility: "antagonist",
    reason:
      "Fennikel hemmer løkvekst med allelopatiske forbindelser.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "potet"],
    compatibility: "antagonist",
    reason:
      "Fennikels allelopatiske rotutskillelser hemmer potetknollvekst.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["aubergine", "fennikel"],
    compatibility: "antagonist",
    reason:
      "Fennikel hemmer auberginevekst med sine allelopatiske egenskaper.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "rodbete"],
    compatibility: "antagonist",
    reason:
      "Fennikels allelopatiske forbindelser hemmer rødbetevekst.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "mais"],
    compatibility: "antagonist",
    reason:
      "Fennikel hemmer maisvekst; den bør dyrkes isolert i hagen.",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
];
