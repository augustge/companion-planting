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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // CHILIPEPPER (arver paprika-relasjoner)
  // ──────────────────────────────────────────────
  {
    plants: ["basilikum", "chilipepper"],
    compatibility: "companion",
    reason:
      "Basilikum frastøter bladlus og trips som angriper chiliplanter.",
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["ruccola", "salat"],
    compatibility: "companion",
    reason:
      "Ruccola og salat har lignende vekstforhold og kan såes sammen for variert høsting.",
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },

  // ──────────────────────────────────────────────
  // KÅLFAMILIEN (Brassica) + URTER
  // ──────────────────────────────────────────────
  {
    plants: ["hodekaal", "timian"],
    compatibility: "companion",
    reason:
      "Timian frastøter kålmøll og kålsommerfugllarver med sine aromatiske oljer.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["hodekaal", "salvie"],
    compatibility: "companion",
    reason:
      "Salviens sterke duft frastøter kålmøll fra å legge egg på kålblader.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["hodekaal", "rosmarin"],
    compatibility: "companion",
    reason:
      "Rosmarin frastøter kålmøll og andre kålskadedyr med sin gjennomtrengende aroma.",
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["hodekaal", "kamille"],
    compatibility: "helpful",
    reason:
      "Kamille tiltrekker nytteveps som parasitterer kållarver, best plantet i nærheten snarere enn i samme bed.",
    evidence: "moderate",
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
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["blomkarse", "hodekaal"],
    compatibility: "companion",
    reason:
      "Blomkarse lokker bladlus og larver bort fra kålen som en offerplante.",
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["hodekaal", "lok"],
    compatibility: "companion",
    reason:
      "Løk frastøter kålfluelarver og jordlopper med sine skarpe svovelforbindelser.",
    evidence: "moderate",
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
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["dill", "hodekaal"],
    compatibility: "companion",
    reason:
      "Dill tiltrekker snylteveps som kontrollerer kålmark og kålsommerfugler.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["hodekaal", "lavendel"],
    compatibility: "helpful",
    reason:
      "Lavendels duft frastøter kålmøll og tiltrekker pollinatorer, men trenger tørrere jord enn kål.",
    evidence: "moderate",
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
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["hodekaal", "ringblomst"],
    compatibility: "companion",
    reason:
      "Ringblomst lokker bladlus bort fra kålen som fangstplante og tiltrekker gulløyer som spiser dem.",
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["hodekaal", "selleri"],
    compatibility: "companion",
    reason:
      "Selleri frastøter kålsommerfugler og de har like krav til vanning.",
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["hodekaal", "lupiner"],
    compatibility: "helpful",
    reason:
      "Lupiner fikserer nitrogen som storfôrende kål trenger.",
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["dill", "salat"],
    compatibility: "companion",
    reason:
      "Dill tiltrekker nytteinsekter som spiser bladlus på salat, og begge trives i kjølig vær.",
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["potet", "timian"],
    compatibility: "companion",
    reason:
      "Timian frastøter Coloradobiller fra poteter med sine aromatiske oljer.",
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTER — Sykdomsdeling
  // ──────────────────────────────────────────────
  {
    plants: ["potet", "tomat"],
    compatibility: "antagonist",
    reason:
      "Begge er søtvierfamilien og deler tørråte (Phytophthora infestans), som sprer seg raskt mellom dem.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["hodekaal", "tomat"],
    compatibility: "antagonist",
    reason:
      "Tomater hemmer kålvekst gjennom allelopatiske rotutskillelser.",
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["brokkoli", "hodekaal"],
    compatibility: "antagonist",
    reason:
      "Begge er storfôrende kålplanter som konkurrerer om samme næringsstoffer og tiltrekker samme skadedyr.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["gronnkal", "hodekaal"],
    compatibility: "antagonist",
    reason:
      "Kålplanter i samme familie konkurrerer om næring og forsterker felles skadedyr- og sykdomsproblemer.",
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["blomkal", "hodekaal"],
    compatibility: "antagonist",
    reason:
      "Blomkål og hodekål er nære slektninger som tiltrekker samme skadedyr og konkurrerer om næring.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["hodekaal", "rosenkal"],
    compatibility: "antagonist",
    reason:
      "Rosenkål og hodekål er kålplanter som forsterker hverandres skadedyrproblemer ved samplanting.",
    evidence: "moderate",
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
      "Myntens aggressive jordstengler fortrenger persille og konkurrerer om vann og næring.",
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "hodekaal"],
    compatibility: "antagonist",
    reason:
      "Fennikels allelopatiske egenskaper hemmer kålvekst.",
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "moderate",
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
    evidence: "high",
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
    evidence: "high",
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
    evidence: "moderate",
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
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ══════════════════════════════════════════════
  // NEW EDGES — Fabaceae family (bondebonne, buskbonne, stangbonne)
  // ══════════════════════════════════════════════
  {
    plants: ["bondebonne", "mais"],
    compatibility: "companion",
    reason:
      "Bondebønner fikserer nitrogen som mais trenger, i tråd med tradisjonell belgvekstsamplanting.",
    evidence: "high",
    citations: [
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["buskbonne", "mais"],
    compatibility: "companion",
    reason:
      "Buskbønner fikserer nitrogen som mais drar nytte av, en klassisk tre-søstre-variant.",
    evidence: "high",
    citations: [
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["mais", "stangbonne"],
    compatibility: "companion",
    reason:
      "Stangbønner klatrer på maisstengelen og fikserer nitrogen — den originale tre-søstre-modellen.",
    evidence: "high",
    citations: [
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["bondebonne", "squash"],
    compatibility: "companion",
    reason:
      "Bondebønner fikserer nitrogen som squash trenger, mens squash skygger bakken.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["buskbonne", "squash"],
    compatibility: "companion",
    reason:
      "Buskbønner tilfører nitrogen som squash utnytter til kraftig bladutvikling.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["squash", "stangbonne"],
    compatibility: "companion",
    reason:
      "Stangbønner fikserer nitrogen, og squash fungerer som jorddekke — tre-søstre-prinsippet.",
    evidence: "high",
    citations: [
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["bondebonne", "potet"],
    compatibility: "companion",
    reason:
      "Bondebønner fikserer nitrogen og frastøter Coloradobiller, en fordel for poteter.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["bondebonne", "lok"],
    compatibility: "antagonist",
    reason:
      "Løk hemmer nitrogenfikserende bakterier hos bondebønner, som hos andre belgvekster.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["buskbonne", "lok"],
    compatibility: "antagonist",
    reason:
      "Løk skiller ut forbindelser som hemmer buskbønners nitrogenfiksering.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lok", "stangbonne"],
    compatibility: "antagonist",
    reason:
      "Løk hemmer stangbønners nitrogenfiksering og bremser veksten.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["bondebonne", "fennikel"],
    compatibility: "antagonist",
    reason:
      "Fennikels allelopatiske egenskaper hemmer bondebønnevekst.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ══════════════════════════════════════════════
  // NEW EDGES — Cucurbitaceae (sylteagurk, butternutgresskar, sommergresskar, patisson, vannmelon, melon)
  // ══════════════════════════════════════════════
  {
    plants: ["bonner", "sylteagurk"],
    compatibility: "companion",
    reason:
      "Bønner fikserer nitrogen som sylteagurker trenger, lik agurk-samplanting.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
    ],
  },
  {
    plants: ["dill", "sylteagurk"],
    compatibility: "companion",
    reason:
      "Dill tiltrekker rovveps som spiser bladlus på sylteagurker, og de to er klassiske kjøkkenpartnere.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["butternutgresskar", "mais"],
    compatibility: "companion",
    reason:
      "Butternut skygger bakken rundt mais og holder på fuktighet, tre-søstre-prinsippet.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
    ],
  },
  {
    plants: ["bonner", "butternutgresskar"],
    compatibility: "companion",
    reason:
      "Bønner fikserer nitrogen som butternut trenger for kraftig fruktsetting.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Oregon State Extension", url: "https://extension.oregonstate.edu/gardening" },
    ],
  },
  {
    plants: ["mais", "sommergresskar"],
    compatibility: "companion",
    reason:
      "Sommergresskarbladene skygger bakken rundt mais og reduserer ugresspress.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["blomkarse", "sommergresskar"],
    compatibility: "companion",
    reason:
      "Blomkarse lokker bladlus bort fra sommergresskar som fangstplante.",
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["mais", "vannmelon"],
    compatibility: "companion",
    reason:
      "Vannmelon fungerer som jorddekke rundt mais og holder på fuktigheten.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
    ],
  },
  {
    plants: ["mais", "melon"],
    compatibility: "companion",
    reason:
      "Melon skygger bakken rundt mais og holder jorda fuktig.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["fennikel", "vannmelon"],
    compatibility: "antagonist",
    reason:
      "Fennikels allelopatiske rotutskillelser hemmer vannmelonvekst.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["oregano", "patisson"],
    compatibility: "companion",
    reason:
      "Oregano frastøter squashbiller som angriper patisson med sine aromatiske oljer.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },

  // ══════════════════════════════════════════════
  // NEW EDGES — Additional Brassica (kinakaal, kai-lan, palmekaal, savoykaal, knutekaal, sennepsblad, mizuna, pak-choi, tatsoi, sibirsk-bladkaal, daikon, majnepe)
  // ══════════════════════════════════════════════
  {
    plants: ["kinakaal", "timian"],
    compatibility: "companion",
    reason:
      "Timian frastøter kålmøll fra kinakål, som er sårbar for de samme kålskadedyrene.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["kinakaal", "lok"],
    compatibility: "companion",
    reason:
      "Løk frastøter jordlopper og kålfluer som angriper kinakål.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["lok", "pak-choi"],
    compatibility: "companion",
    reason:
      "Løk frastøter jordlopper og kålfluer som er vanlige skadedyr på pak choi.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["palmekaal", "timian"],
    compatibility: "companion",
    reason:
      "Timian frastøter kålmøll fra palmekål med sine aromatiske oljer.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["lok", "savoykaal"],
    compatibility: "companion",
    reason:
      "Løk maskerer savoykålens duft og frastøter kålflue og jordlopper.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["salvie", "savoykaal"],
    compatibility: "companion",
    reason:
      "Salviens sterke duft frastøter kålmøll fra savoykål.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
    ],
  },
  {
    plants: ["knutekaal", "timian"],
    compatibility: "companion",
    reason:
      "Timian frastøter kålskadedyr fra knutekål som en del av kålfamilien.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["daikon", "salat"],
    compatibility: "companion",
    reason:
      "Daikon løsner jorda og modnes på ulik tid, noe som gir salat god plass etterpå.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["lok", "mizuna"],
    compatibility: "companion",
    reason:
      "Løk frastøter jordlopper som angriper mizuna, en asiatisk bladgrønnsak i kålfamilien.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["lok", "tatsoi"],
    compatibility: "companion",
    reason:
      "Løk frastøter jordlopper og kålfluer som angriper tatsoi.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["lok", "sennepsblad"],
    compatibility: "companion",
    reason:
      "Løk frastøter jordlopper fra sennepsblad, som tilhører kålfamilien.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },

  // ══════════════════════════════════════════════
  // NEW EDGES — Additional Solanaceae (ananaskirsebaer, sotpotet)
  // ══════════════════════════════════════════════
  {
    plants: ["ananaskirsebaer", "basilikum"],
    compatibility: "companion",
    reason:
      "Basilikum frastøter bladlus og mellus fra ananaskirsebær, som har lignende behov som tomater.",
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["ananaskirsebaer", "ringblomst"],
    compatibility: "companion",
    reason:
      "Ringblomst frastøter nematoder som angriper ananaskirsebærets røtter.",
    evidence: "high",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["bonner", "sotpotet"],
    compatibility: "companion",
    reason:
      "Bønner fikserer nitrogen som storfôrende søtpotet benytter til knollvekst.",
    evidence: "moderate",
    citations: [
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["hvitlok", "sotpotet"],
    compatibility: "companion",
    reason:
      "Hvitløk frastøter bladlus og jordboende skadedyr fra søtpotetknollene.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
    ],
  },

  // ══════════════════════════════════════════════
  // NEW EDGES — Additional herbs & greens (bladpersille, bonneurt, kinagresslok, kjorvel, feldsalat, endisvie, stangselleri, rabarbra, asparges, varlok)
  // ══════════════════════════════════════════════
  {
    plants: ["bladpersille", "tomat"],
    compatibility: "companion",
    reason:
      "Bladpersille tiltrekker blomsterfluer som spiser bladlus på tomater, lik vanlig persille.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["bonner", "bonneurt"],
    compatibility: "companion",
    reason:
      "Bonneurt (sarriette) er et klassisk urtetilskudd til bønner som sies å forbedre smaken og frastøte bønnebiller.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["bonneurt", "buskbonne"],
    compatibility: "companion",
    reason:
      "Bonneurt frastøter bønnebiller og forbedrer smaken til buskbønner.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["bonneurt", "stangbonne"],
    compatibility: "companion",
    reason:
      "Bonneurt er den tradisjonelle urtekompanjongen til stangbønner — frastøter bønnebiller.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["gulrot", "kinagresslok"],
    compatibility: "companion",
    reason:
      "Kinagressløkens løkduft frastøter gulrotflue, lik vanlig gressløk.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["kjorvel", "salat"],
    compatibility: "companion",
    reason:
      "Kjørvel frastøter bladlus fra salat og begge trives i halvskygge.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["kjorvel", "reddik"],
    compatibility: "companion",
    reason:
      "Kjørvel forbedrer reddikens smak og frastøter bladlus.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["endisvie", "salat"],
    compatibility: "companion",
    reason:
      "Endivie og salat har lignende vekstforhold og kan dyrkes som naboer for variert høsting.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["feldsalat", "lok"],
    compatibility: "companion",
    reason:
      "Løk frastøter bladlus og snegler fra feldsalat som har grunne, sårbare røtter.",
    evidence: "moderate",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["asparges", "persille"],
    compatibility: "companion",
    reason:
      "Persille frastøter aspargesbiller med sin duft.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["asparges", "tomat"],
    compatibility: "companion",
    reason:
      "Tomater frastøter aspargesbiller og asparges frastøter nematoder fra tomater.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
    ],
  },
  {
    plants: ["gresslok", "rabarbra"],
    compatibility: "companion",
    reason:
      "Gressløk frastøter bladlus fra rabarbra og begge er flerårige som kan stå sammen.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },
  {
    plants: ["gulrot", "varlok"],
    compatibility: "companion",
    reason:
      "Vårløk frastøter gulrotflue med sin løkduft, lik vanlig løk.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Royal Horticultural Society", url: "https://www.rhs.org.uk/vegetables" },
    ],
  },
  {
    plants: ["stangselleri", "tomat"],
    compatibility: "companion",
    reason:
      "Stangselleri gir skygge til jorda og holder den fuktig rundt tomatplantene.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
    ],
  },

  // ══════════════════════════════════════════════
  // NEW EDGES — Additional flowers (hagereseda, strandkarse, kappertblomst)
  // ══════════════════════════════════════════════
  {
    plants: ["hagereseda", "tomat"],
    compatibility: "helpful",
    reason:
      "Hagereseda tiltrekker snylteveps og blomsterfluer som kontrollerer tomatbladlus.",
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["kappertblomst", "tomat"],
    compatibility: "helpful",
    reason:
      "Kappertblomst tiltrekker pollinatorer og nytteinsekter i nærheten av tomatplanter.",
    evidence: "low",
    citations: [
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["lok", "strandkarse"],
    compatibility: "companion",
    reason:
      "Strandkarse fungerer som fangstplante for bladlus i nærheten av løk.",
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },

  // ══════════════════════════════════════════════
  // BERRIES
  // ══════════════════════════════════════════════
  {
    plants: ["gresslok", "jordbaer"],
    compatibility: "companion",
    reason:
      "Gressløk frastøter bladlus og gråskimmel fra jordbær med sine svovelforbindelser.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
    ],
  },
  {
    plants: ["hvitlok", "jordbaer"],
    compatibility: "companion",
    reason:
      "Hvitløkens svovelforbindelser frastøter spinnmidd og soppsykdommer som gråskimmel på jordbær.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
    ],
  },
  {
    plants: ["agurkurt", "jordbaer"],
    compatibility: "helpful",
    reason:
      "Agurkurt tiltrekker pollinatorer som er essensielle for jordbærsettingen.",
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["jordbaer", "salat"],
    compatibility: "companion",
    reason:
      "Salat fungerer som jorddekke mellom jordbærplantene og holder jorda fuktig.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["jordbaer", "spinat"],
    compatibility: "companion",
    reason:
      "Spinat fungerer som jorddekke under jordbærplanter og drar nytte av deres lette skygge.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["bringebaer", "fennikel"],
    compatibility: "antagonist",
    reason:
      "Fennikels allelopatiske rotutskillelser hemmer bringebærvekst.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["bringebaer", "hvitlok"],
    compatibility: "companion",
    reason:
      "Hvitløk frastøter bladlus og bringebærbiller med sine svovelforbindelser.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "RHS – Companion Planting", url: "https://www.rhs.org.uk/advice/grow-your-own/features/companion-planting" },
    ],
  },
  {
    plants: ["bringebaer", "tagetes"],
    compatibility: "companion",
    reason:
      "Tagetes frastøter nematoder og bladlus nær bringebærplanter.",
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["blaabaer", "gresslok"],
    compatibility: "helpful",
    reason:
      "Gressløk kan frastøte bladlus nær blåbær, men blåbær trenger surere jord enn de fleste naboer.",
    evidence: "low",
    citations: [
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
    ],
  },

  // ══════════════════════════════════════════════
  // HOUSEPLANTS — Aroid group (companion with each other)
  // Monstera, gullranke, hjertefilodendron, syngonium, flamingoblomst, fredslilje, aglaonema, klatrefilodendron, monstera-adansonii
  // ══════════════════════════════════════════════
  {
    plants: ["gullranke", "monstera"],
    compatibility: "companion",
    reason:
      "Lignende vann- og lysbehov gjør dem til gode pottenaboer i indirekte lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["hjertefilodendron", "monstera"],
    compatibility: "companion",
    reason:
      "Begge er araceaer som trives med jevn fuktighet og indirekte lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["monstera", "syngonium"],
    compatibility: "companion",
    reason:
      "Lignende vann- og lysbehov gjør dem til gode pottenaboer.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["flamingoblomst", "monstera"],
    compatibility: "companion",
    reason:
      "Begge er tropiske araceaer med like krav til fuktighet og indirekte lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["fredslilje", "monstera"],
    compatibility: "companion",
    reason:
      "Begge trives i indirekte lys med jevn fuktighet — gode naboer i pottesamlinger.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["aglaonema", "monstera"],
    compatibility: "companion",
    reason:
      "Lignende vann- og lysbehov gjør dem til gode pottenaboer.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["klatrefilodendron", "monstera"],
    compatibility: "companion",
    reason:
      "Begge er klatrende araceaer med like fuktighets- og lysbehov.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["monstera", "monstera-adansonii"],
    compatibility: "companion",
    reason:
      "Samme slekt med identiske lysbehov og vanningsbehov — perfekte naboer.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["gullranke", "hjertefilodendron"],
    compatibility: "companion",
    reason:
      "Begge er klatrende araceaer som trives med jevn fuktighet og indirekte lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["gullranke", "syngonium"],
    compatibility: "companion",
    reason:
      "Lignende krav til lys, vann og jordfuktighet — trives godt sammen i potte.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["aglaonema", "fredslilje"],
    compatibility: "companion",
    reason:
      "Begge trives i halvskygge med jevn fuktighet — utfyller hverandre visuelt i pottearrangementer.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["flamingoblomst", "hjertefilodendron"],
    compatibility: "companion",
    reason:
      "Tropiske araceaer med identiske behov for fuktighet og indirekte lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["aglaonema", "syngonium"],
    compatibility: "companion",
    reason:
      "Begge er lavtlyskrevende araceaer som trives med jevn jordfuktighet.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["fredslilje", "syngonium"],
    compatibility: "companion",
    reason:
      "Like fuktighets- og lysbehov gjør dem til gode pottevenner.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["klatrefilodendron", "monstera-adansonii"],
    compatibility: "companion",
    reason:
      "Begge er klatrende araceaer med identiske krav til lys og vann.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },

  // ══════════════════════════════════════════════
  // HOUSEPLANTS — Succulent/dry group (companion with each other)
  // svigermors-tunge, aloe-vera, pengetre, haworthia, echeveria, zz-plante
  // ══════════════════════════════════════════════
  {
    plants: ["aloe-vera", "svigermors-tunge"],
    compatibility: "companion",
    reason:
      "Begge er tørketålende og trives med sjelden vanning og godt lys — ideelle naboer.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["pengetre", "svigermors-tunge"],
    compatibility: "companion",
    reason:
      "Begge tåler tørre forhold og trenger sjelden vanning — godt matchede pottenaboer.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["haworthia", "svigermors-tunge"],
    compatibility: "companion",
    reason:
      "Begge er sukkulenter som trives med minimal vanning og godt drenert jord.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["echeveria", "svigermors-tunge"],
    compatibility: "companion",
    reason:
      "Sukkulenter som deler identisk behov for sjelden vanning og godt drenert jord.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["svigermors-tunge", "zz-plante"],
    compatibility: "companion",
    reason:
      "Begge tåler tørke og lite lys — robuste planter som trives med minimal stell.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["aloe-vera", "haworthia"],
    compatibility: "companion",
    reason:
      "Begge er sukkulenter med identisk behov for sjelden vanning og direkte lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["aloe-vera", "echeveria"],
    compatibility: "companion",
    reason:
      "Sukkulenter som deler behov for tørt, godt drenert substrat og sterkt lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["echeveria", "haworthia"],
    compatibility: "companion",
    reason:
      "Kompakte sukkulenter som trives med sjelden vanning i delte potter.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["aloe-vera", "pengetre"],
    compatibility: "companion",
    reason:
      "Begge er tørketålende med identiske behov for godt drenert jord og sterkt lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["pengetre", "zz-plante"],
    compatibility: "companion",
    reason:
      "Begge er svært tørketålende og trenger sjelden vanning — uproblematisk å dele hylle.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },

  // ══════════════════════════════════════════════
  // HOUSEPLANTS — Fern/humid group (companion with each other)
  // bostonbregne, fugleredebregne, bonneplante, calathea-orbifolia, fredslilje
  // ══════════════════════════════════════════════
  {
    plants: ["bostonbregne", "fugleredebregne"],
    compatibility: "companion",
    reason:
      "Begge er bregner som trives med høy fuktighet og indirekte lys — perfekte naboer.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["bonneplante", "bostonbregne"],
    compatibility: "companion",
    reason:
      "Begge trives i fuktig luft og indirekte lys — gode naboer i et fuktig hjørne.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["bostonbregne", "calathea-orbifolia"],
    compatibility: "companion",
    reason:
      "Begge krever høy luftfuktighet og indirekte lys — ideelle fuktighetsnaboer.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["bostonbregne", "fredslilje"],
    compatibility: "companion",
    reason:
      "Begge trives i fuktig, indirekte lys og har lignende vanningsbehov.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["calathea-orbifolia", "fugleredebregne"],
    compatibility: "companion",
    reason:
      "Begge trenger høy luftfuktighet og indirekte lys — trives sammen i samme rom.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["bonneplante", "calathea-orbifolia"],
    compatibility: "companion",
    reason:
      "Lignende krav til fuktighet, temperatur og indirekte lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["calathea-orbifolia", "fredslilje"],
    compatibility: "companion",
    reason:
      "Begge trives i fuktig luft med indirekte lys og jevn jordfuktighet.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },

  // ══════════════════════════════════════════════
  // HOUSEPLANTS — Palm group (companion with each other)
  // gullpalme, kentiapalme, stuepalme
  // ══════════════════════════════════════════════
  {
    plants: ["gullpalme", "kentiapalme"],
    compatibility: "companion",
    reason:
      "Begge er tropiske palmer med lignende behov for fuktighet og indirekte lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["gullpalme", "stuepalme"],
    compatibility: "companion",
    reason:
      "Tropiske palmer med like krav til fuktighet, temperatur og lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["kentiapalme", "stuepalme"],
    compatibility: "companion",
    reason:
      "Begge er stueplanter som trives med jevn fuktighet og indirekte til halvskygge.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },

  // ══════════════════════════════════════════════
  // HOUSEPLANTS — Dry group ANTAGONIST with humid group
  // ══════════════════════════════════════════════
  {
    plants: ["calathea-orbifolia", "svigermors-tunge"],
    compatibility: "antagonist",
    reason:
      "Svært ulikt vannbehov — unngå å dele potte. Calathea trenger jevn fuktighet, svigermors tunge tåler tørke.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["aloe-vera", "calathea-orbifolia"],
    compatibility: "antagonist",
    reason:
      "Svært ulikt vannbehov — aloe vera trenger tørr jord, calathea krever jevn fuktighet.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["bostonbregne", "svigermors-tunge"],
    compatibility: "antagonist",
    reason:
      "Svært ulikt vannbehov — bregner trenger jevn fuktighet, svigermors tunge foretrekker tørr jord.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["aloe-vera", "bostonbregne"],
    compatibility: "antagonist",
    reason:
      "Svært ulikt vannbehov — aloe vera råtner i fuktig jord som bregner trenger.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["echeveria", "fugleredebregne"],
    compatibility: "antagonist",
    reason:
      "Svært ulikt vannbehov — echeveria trenger tørr jord, fugleredebregne krever jevn fuktighet.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["calathea-orbifolia", "pengetre"],
    compatibility: "antagonist",
    reason:
      "Svært ulikt vannbehov — pengetre trenger tørr jord, calathea krever jevn fuktighet.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["calathea-orbifolia", "zz-plante"],
    compatibility: "antagonist",
    reason:
      "Svært ulikt vannbehov — ZZ-planten trenger sjelden vanning, calathea krever jevn fuktighet.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["bonneplante", "zz-plante"],
    compatibility: "antagonist",
    reason:
      "Svært ulikt vannbehov — bonneplanten trenger jevn fuktighet, ZZ-planten tåler lengre tørkeperioder.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["bostonbregne", "pengetre"],
    compatibility: "antagonist",
    reason:
      "Svært ulikt vannbehov — bregner råtner ut pengetre eller pengetre tørker ut bregner i delt potte.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["fugleredebregne", "haworthia"],
    compatibility: "antagonist",
    reason:
      "Svært ulikt vannbehov — haworthia trenger sjelden vanning, fugleredebregne krever fuktighet.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },

  // ══════════════════════════════════════════════
  // HOUSEPLANTS — Additional practical edges
  // ══════════════════════════════════════════════
  {
    plants: ["draketre", "gullranke"],
    compatibility: "companion",
    reason:
      "Begge trives med indirekte lys og moderat vanning — uproblematiske naboer.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["elefantore", "monstera"],
    compatibility: "companion",
    reason:
      "Begge er tropiske planter med like krav til fuktighet og indirekte lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["fiolinfiken", "gummifiken"],
    compatibility: "companion",
    reason:
      "Begge er Ficus-arter med like behov for lys, vanning og temperatur.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["mollorkide", "peperomia"],
    compatibility: "companion",
    reason:
      "Begge trives med moderat vanning og indirekte lys — kompakte naboer i vinduet.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["paraplytre", "stuepalme"],
    compatibility: "companion",
    reason:
      "Begge trives med jevn fuktighet og indirekte lys — gode stuevenner.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["gummifiken", "monstera"],
    compatibility: "companion",
    reason:
      "Begge er store tropiske planter med like krav til lys og vanning.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["peperomia", "syngonium"],
    compatibility: "companion",
    reason:
      "Begge er kompakte planter som trives med indirekte lys og moderat vanning.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["bostonbregne", "echeveria"],
    compatibility: "antagonist",
    reason:
      "Svært ulikt vannbehov — echeveria vil råtne i den fuktige jorda bregner trenger.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["aloe-vera", "bonneplante"],
    compatibility: "antagonist",
    reason:
      "Svært ulikt vannbehov — aloe vera trenger tørr jord, bonneplante krever jevn fuktighet.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },
  {
    plants: ["peperomia", "voksblomst"],
    compatibility: "companion",
    reason:
      "Begge er kompakte planter som trives med sjelden vanning og indirekte lys.",
    evidence: "low",
    citations: [
      { label: "Clemson HGIC – Container Gardening", url: "https://hgic.clemson.edu/factsheet/container-vegetable-gardening/" },
    ],
  },

  // ══════════════════════════════════════════════
  // Additional outdoor edges to reach 350+
  // ══════════════════════════════════════════════
  {
    plants: ["buskbonne", "ringblomst"],
    compatibility: "companion",
    reason:
      "Ringblomster frastøter bønnebiller og mellus fra buskbønner.",
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["ringblomst", "stangbonne"],
    compatibility: "companion",
    reason:
      "Ringblomster frastøter bønnebiller og nematoder nær stangbønner.",
    evidence: "moderate",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    plants: ["fennikel", "stangbonne"],
    compatibility: "antagonist",
    reason:
      "Fennikels allelopatiske rotutskillelser hemmer stangbønnevekst.",
    evidence: "high",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["jordbaer", "tagetes"],
    compatibility: "companion",
    reason:
      "Tagetes frastøter nematoder og bladlus nær jordbærplanter.",
    evidence: "high",
    citations: [
      { label: "Cunningham, Great Garden Companions, 2000", url: null },
      { label: "UMN Extension – Companion Planting", url: "https://extension.umn.edu/planting-and-growing-guides/companion-planting-home-gardens" },
    ],
  },
  {
    plants: ["fennikel", "jordbaer"],
    compatibility: "antagonist",
    reason:
      "Fennikels allelopatiske rotutskillelser hemmer jordbærvekst.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "Pleasant, The Complete Guide to Companion Planting, 2012", url: null },
    ],
  },
  {
    plants: ["agurk", "hvitlok"],
    compatibility: "companion",
    reason:
      "Hvitløk frastøter bladlus og spinnmidd fra agurker med sine svovelforbindelser.",
    evidence: "moderate",
    citations: [
      { label: "Riotte, Carrots Love Tomatoes, 1998", url: null },
      { label: "WSU Extension – Companion Plants", url: "https://rex.libraries.wsu.edu/esploro/outputs/report/Gardening-with-companion-plants/99901076631401842" },
    ],
  },
];
