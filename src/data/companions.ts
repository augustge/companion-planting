import type { CompanionEdge } from "@/lib/types";

export const companions: CompanionEdge[] = [
  // ──────────────────────────────────────────────
  // THREE SISTERS
  // ──────────────────────────────────────────────
  {
    plants: ["beans", "corn"],
    compatibility: "companion",
    reason:
      "Beans fix nitrogen in the soil that corn feeds on heavily, while corn provides a natural trellis for beans to climb.",
  },
  {
    plants: ["corn", "squash"],
    compatibility: "companion",
    reason:
      "Squash leaves shade the ground, suppressing weeds and retaining moisture around corn.",
  },
  {
    plants: ["beans", "squash"],
    compatibility: "companion",
    reason:
      "Squash's prickly stems deter raccoons from the bean patch, and beans add nitrogen squash needs.",
  },

  // ──────────────────────────────────────────────
  // TOMATO COMPANIONS
  // ──────────────────────────────────────────────
  {
    plants: ["basil", "tomato"],
    compatibility: "companion",
    reason:
      "Basil repels aphids, whiteflies, and mosquitoes while improving tomato flavor through volatile oils.",
  },
  {
    plants: ["marigold", "tomato"],
    compatibility: "companion",
    reason:
      "Marigold roots exude alpha-terthienyl, which kills root-knot nematodes that damage tomato roots.",
  },
  {
    plants: ["carrot", "tomato"],
    compatibility: "companion",
    reason:
      "Carrots loosen soil around tomato roots, and tomato shade keeps carrot soil cool and moist.",
  },
  {
    plants: ["parsley", "tomato"],
    compatibility: "companion",
    reason:
      "Parsley attracts hoverflies whose larvae prey on tomato-attacking aphids.",
  },
  {
    plants: ["chives", "tomato"],
    compatibility: "companion",
    reason:
      "Chives' sulfur compounds deter aphids and may reduce the risk of fungal diseases on tomatoes.",
  },
  {
    plants: ["borage", "tomato"],
    compatibility: "helpful",
    reason:
      "Borage attracts pollinators and predatory insects that benefit tomatoes, but its size warrants separate beds.",
  },
  {
    plants: ["nasturtium", "tomato"],
    compatibility: "companion",
    reason:
      "Nasturtiums serve as a trap crop, luring aphids and whiteflies away from tomato plants.",
  },

  // ──────────────────────────────────────────────
  // PEPPER COMPANIONS
  // ──────────────────────────────────────────────
  {
    plants: ["basil", "pepper"],
    compatibility: "companion",
    reason:
      "Basil repels thrips, spider mites, and aphids that commonly attack pepper plants.",
  },
  {
    plants: ["carrot", "pepper"],
    compatibility: "companion",
    reason:
      "Carrots act as a living mulch, shading the soil and conserving moisture around peppers.",
  },
  {
    plants: ["onion", "pepper"],
    compatibility: "companion",
    reason:
      "Onions deter aphids and other pests with their strong scent, benefiting neighboring peppers.",
  },
  {
    plants: ["marigold", "pepper"],
    compatibility: "companion",
    reason:
      "Marigolds repel nematodes and whiteflies that commonly affect pepper plants.",
  },

  // ──────────────────────────────────────────────
  // CUCUMBER COMPANIONS
  // ──────────────────────────────────────────────
  {
    plants: ["beans", "cucumber"],
    compatibility: "companion",
    reason:
      "Beans fix nitrogen that cucumbers need for leafy growth, and both thrive in similar warm conditions.",
  },
  {
    plants: ["cucumber", "dill"],
    compatibility: "companion",
    reason:
      "Dill attracts predatory wasps and hoverflies that eat cucumber pests like aphids and spider mites.",
  },
  {
    plants: ["corn", "cucumber"],
    compatibility: "companion",
    reason:
      "Corn provides a windbreak and partial shade that helps cucumber vines retain moisture.",
  },
  {
    plants: ["cucumber", "radish"],
    compatibility: "companion",
    reason:
      "Radishes repel cucumber beetles with their pungent compounds and mature before cucumbers need the space.",
  },
  {
    plants: ["cucumber", "sunflower"],
    compatibility: "helpful",
    reason:
      "Sunflowers attract pollinators and provide a trellis and light shade, but can compete for water if too close.",
  },
  {
    plants: ["cucumber", "nasturtium"],
    compatibility: "companion",
    reason:
      "Nasturtiums act as a trap crop for aphids that would otherwise attack cucumbers.",
  },
  {
    plants: ["cucumber", "lettuce"],
    compatibility: "companion",
    reason:
      "Lettuce acts as a living mulch under cucumber vines, keeping soil cool and suppressing weeds.",
  },

  // ──────────────────────────────────────────────
  // CARROT & ONION FAMILY
  // ──────────────────────────────────────────────
  {
    plants: ["carrot", "onion"],
    compatibility: "companion",
    reason:
      "Onion scent masks carrots from carrot fly, while carrots repel onion fly — classic mutual pest deterrence.",
  },
  {
    plants: ["carrot", "rosemary"],
    compatibility: "companion",
    reason:
      "Rosemary's strong aroma confuses and deters carrot fly from locating carrots by scent.",
  },
  {
    plants: ["carrot", "sage"],
    compatibility: "companion",
    reason:
      "Sage's pungent oils mask carrot scent, reducing carrot fly infestation.",
  },
  {
    plants: ["carrot", "chives"],
    compatibility: "companion",
    reason:
      "Chives' allium scent deters carrot rust fly, making them an effective border plant for carrots.",
  },

  // ──────────────────────────────────────────────
  // LETTUCE & LEAFY GREENS
  // ──────────────────────────────────────────────
  {
    plants: ["chives", "lettuce"],
    compatibility: "companion",
    reason:
      "Chives repel aphids that frequently attack lettuce, and their narrow form doesn't compete for space.",
  },
  {
    plants: ["lettuce", "radish"],
    compatibility: "companion",
    reason:
      "Radishes mature fast and break up soil before lettuce needs the space, making efficient use of the bed.",
  },
  {
    plants: ["lettuce", "onion"],
    compatibility: "companion",
    reason:
      "Onions deter slugs and aphids that prey on lettuce leaves.",
  },
  {
    plants: ["lettuce", "marigold"],
    compatibility: "companion",
    reason:
      "Marigolds repel slugs and aphids, two of lettuce's most common pests.",
  },
  {
    plants: ["lettuce", "spinach"],
    compatibility: "companion",
    reason:
      "Both share similar water and shade needs, and their shallow roots don't compete at different soil depths.",
  },
  {
    plants: ["garlic", "spinach"],
    compatibility: "companion",
    reason:
      "Garlic's sulfur compounds deter aphids and leaf miners that attack spinach.",
  },
  {
    plants: ["kale", "onion"],
    compatibility: "companion",
    reason:
      "Onions repel flea beetles and aphids that commonly damage kale leaves.",
  },
  {
    plants: ["garlic", "kale"],
    compatibility: "companion",
    reason:
      "Garlic deters aphids that are a persistent problem on kale.",
  },

  // ──────────────────────────────────────────────
  // BRASSICAS (CABBAGE FAMILY) + HERBS
  // ──────────────────────────────────────────────
  {
    plants: ["cabbage", "thyme"],
    compatibility: "companion",
    reason:
      "Thyme repels cabbage moths and cabbage loopers with its aromatic oils.",
  },
  {
    plants: ["cabbage", "sage"],
    compatibility: "companion",
    reason:
      "Sage's strong scent deters cabbage moths from laying eggs on cabbage leaves.",
  },
  {
    plants: ["cabbage", "rosemary"],
    compatibility: "companion",
    reason:
      "Rosemary repels cabbage moths and other brassica pests with its pungent aroma.",
  },
  {
    plants: ["broccoli", "thyme"],
    compatibility: "companion",
    reason:
      "Thyme deters cabbage worms and aphids that attack broccoli heads.",
  },
  {
    plants: ["broccoli", "sage"],
    compatibility: "companion",
    reason:
      "Sage repels cabbage moths whose larvae feed on broccoli florets.",
  },
  {
    plants: ["broccoli", "rosemary"],
    compatibility: "companion",
    reason:
      "Rosemary's volatile oils mask brassica scent, confusing cabbage moth adults.",
  },
  {
    plants: ["cabbage", "chamomile"],
    compatibility: "helpful",
    reason:
      "Chamomile attracts beneficial wasps that parasitize cabbage worms, best planted nearby rather than in the same bed.",
  },
  {
    plants: ["broccoli", "chamomile"],
    compatibility: "helpful",
    reason:
      "Chamomile improves broccoli vigor and attracts pest-controlling insects when planted nearby.",
  },
  {
    plants: ["cabbage", "nasturtium"],
    compatibility: "companion",
    reason:
      "Nasturtiums lure aphids and caterpillars away from cabbage as a sacrificial trap crop.",
  },
  {
    plants: ["cabbage", "onion"],
    compatibility: "companion",
    reason:
      "Onions repel cabbage maggots and flea beetles with their pungent sulfur compounds.",
  },
  {
    plants: ["broccoli", "onion"],
    compatibility: "companion",
    reason:
      "Onions mask brassica scent, reducing pest pressure from cabbage flies.",
  },
  {
    plants: ["cabbage", "dill"],
    compatibility: "companion",
    reason:
      "Dill attracts parasitic wasps that control cabbage worms and loopers.",
  },

  // ──────────────────────────────────────────────
  // PEAS & BEANS (LEGUMES)
  // ──────────────────────────────────────────────
  {
    plants: ["carrot", "peas"],
    compatibility: "companion",
    reason:
      "Peas fix nitrogen that carrots use, while carrots' deep roots don't compete with peas' shallow ones.",
  },
  {
    plants: ["corn", "peas"],
    compatibility: "companion",
    reason:
      "Peas fix nitrogen that heavy-feeding corn depletes, and corn provides a trellis for pea vines.",
  },
  {
    plants: ["lettuce", "peas"],
    compatibility: "companion",
    reason:
      "Peas provide dappled shade that cool-weather lettuce appreciates in warmer months.",
  },
  {
    plants: ["beans", "marigold"],
    compatibility: "companion",
    reason:
      "Marigolds deter Mexican bean beetles and whiteflies that attack bean plants.",
  },
  {
    plants: ["beans", "radish"],
    compatibility: "companion",
    reason:
      "Radishes mature quickly between bean rows and their pungent compounds deter bean beetles.",
  },

  // ──────────────────────────────────────────────
  // MARIGOLD COMPANIONS (universal pest deterrence)
  // ──────────────────────────────────────────────
  {
    plants: ["eggplant", "marigold"],
    compatibility: "companion",
    reason:
      "Marigolds deter flea beetles and nematodes, two major eggplant pests.",
  },
  {
    plants: ["marigold", "squash"],
    compatibility: "companion",
    reason:
      "Marigolds deter squash bugs and attract hoverflies whose larvae eat squash-attacking aphids.",
  },
  {
    plants: ["marigold", "potato"],
    compatibility: "companion",
    reason:
      "Marigolds repel Colorado potato beetles and kill root-knot nematodes in the soil.",
  },
  {
    plants: ["marigold", "zucchini"],
    compatibility: "companion",
    reason:
      "Marigolds attract pollinators zucchini needs and repel squash vine borers.",
  },

  // ──────────────────────────────────────────────
  // EGGPLANT
  // ──────────────────────────────────────────────
  {
    plants: ["basil", "eggplant"],
    compatibility: "companion",
    reason:
      "Basil repels aphids and spider mites while attracting pollinators that benefit eggplant fruit set.",
  },
  {
    plants: ["beans", "eggplant"],
    compatibility: "companion",
    reason:
      "Beans add nitrogen to the soil that heavy-feeding eggplant readily uses.",
  },
  {
    plants: ["eggplant", "thyme"],
    compatibility: "companion",
    reason:
      "Thyme repels flea beetles, a major pest of eggplant, with its aromatic oils.",
  },

  // ──────────────────────────────────────────────
  // ZUCCHINI & SQUASH
  // ──────────────────────────────────────────────
  {
    plants: ["nasturtium", "zucchini"],
    compatibility: "companion",
    reason:
      "Nasturtiums repel squash bugs and aphids while serving as a trap crop around zucchini.",
  },
  {
    plants: ["borage", "squash"],
    compatibility: "helpful",
    reason:
      "Borage attracts pollinators essential for squash fruit set, but should have its own space due to size.",
  },
  {
    plants: ["oregano", "squash"],
    compatibility: "companion",
    reason:
      "Oregano repels squash bugs and aphids with its aromatic foliage.",
  },

  // ──────────────────────────────────────────────
  // POTATO
  // ──────────────────────────────────────────────
  {
    plants: ["beans", "potato"],
    compatibility: "companion",
    reason:
      "Beans fix nitrogen and deter Colorado potato beetles, while potatoes repel Mexican bean beetles.",
  },
  {
    plants: ["garlic", "potato"],
    compatibility: "companion",
    reason:
      "Garlic repels aphids and may reduce late blight susceptibility in potatoes.",
  },

  // ──────────────────────────────────────────────
  // BEET & RADISH
  // ──────────────────────────────────────────────
  {
    plants: ["beet", "garlic"],
    compatibility: "companion",
    reason:
      "Garlic's sulfur compounds repel pests and may improve beet growth and flavor.",
  },
  {
    plants: ["beet", "lettuce"],
    compatibility: "companion",
    reason:
      "Lettuce serves as a shallow-rooted living mulch that doesn't compete with deep-rooted beets.",
  },
  {
    plants: ["onion", "radish"],
    compatibility: "companion",
    reason:
      "Radishes break up soil crust for onion seedlings and mature before onions need the space.",
  },

  // ──────────────────────────────────────────────
  // HERB-HERB COMPANIONS
  // ──────────────────────────────────────────────
  {
    plants: ["oregano", "thyme"],
    compatibility: "companion",
    reason:
      "Both Mediterranean herbs share identical sun and drainage needs, thriving in dry, poor soil.",
  },
  {
    plants: ["rosemary", "sage"],
    compatibility: "companion",
    reason:
      "Both prefer dry, well-drained soil and full sun; their aromatic oils work together to repel pests.",
  },
  {
    plants: ["chives", "parsley"],
    compatibility: "companion",
    reason:
      "Both tolerate some shade and moisture, and chives repel aphids that may target parsley.",
  },
  {
    plants: ["cilantro", "dill"],
    compatibility: "companion",
    reason:
      "Both attract beneficial insects like lacewings and hoverflies, and share similar growing conditions.",
  },

  // ──────────────────────────────────────────────
  // FLOWER COMPANIONS
  // ──────────────────────────────────────────────
  {
    plants: ["calendula", "tomato"],
    compatibility: "companion",
    reason:
      "Calendula attracts hoverflies that eat aphids and deters tomato hornworms with its sticky foliage.",
  },
  {
    plants: ["broccoli", "sweet-alyssum"],
    compatibility: "companion",
    reason:
      "Sweet alyssum's flowers attract parasitic wasps that control cabbage aphids on broccoli.",
  },
  {
    plants: ["lettuce", "sweet-alyssum"],
    compatibility: "companion",
    reason:
      "Sweet alyssum attracts ground beetles and hoverflies that prey on lettuce aphids.",
  },
  {
    plants: ["cabbage", "sweet-alyssum"],
    compatibility: "companion",
    reason:
      "Sweet alyssum provides habitat for parasitic wasps that attack cabbage caterpillars.",
  },
  {
    plants: ["corn", "sunflower"],
    compatibility: "helpful",
    reason:
      "Sunflowers attract pollinators and ladybugs that benefit corn, but compete for nutrients if planted too close.",
  },
  {
    plants: ["squash", "sunflower"],
    compatibility: "helpful",
    reason:
      "Sunflowers attract pollinators essential for squash and provide windbreak, but should be in an adjacent bed.",
  },
  {
    plants: ["cabbage", "lavender"],
    compatibility: "helpful",
    reason:
      "Lavender's scent deters cabbage moths and attracts pollinators, but needs drier soil than cabbage.",
  },
  {
    plants: ["broccoli", "lavender"],
    compatibility: "helpful",
    reason:
      "Lavender repels cabbage moths from nearby broccoli and draws in pollinators.",
  },
  {
    plants: ["lavender", "rosemary"],
    compatibility: "companion",
    reason:
      "Both are drought-tolerant Mediterranean plants with identical soil, sun, and water needs.",
  },
  {
    plants: ["tomato", "zinnia"],
    compatibility: "companion",
    reason:
      "Zinnias attract ladybugs and parasitic wasps that eat aphids and hornworms on tomatoes.",
  },
  {
    plants: ["squash", "zinnia"],
    compatibility: "companion",
    reason:
      "Zinnias attract pollinators that squash depends on for fruit set.",
  },
  {
    plants: ["cucumber", "zinnia"],
    compatibility: "companion",
    reason:
      "Zinnias attract pollinators and ladybugs that help control cucumber pests.",
  },
  {
    plants: ["beans", "borage"],
    compatibility: "helpful",
    reason:
      "Borage attracts pollinators that improve bean pod set when planted nearby.",
  },
  {
    plants: ["cabbage", "calendula"],
    compatibility: "companion",
    reason:
      "Calendula lures aphids away from cabbage as a trap crop and attracts lacewings that eat them.",
  },
  {
    plants: ["calendula", "pepper"],
    compatibility: "companion",
    reason:
      "Calendula attracts beneficial insects and its sticky leaves trap whiteflies near peppers.",
  },

  // ──────────────────────────────────────────────
  // LEMON BALM & CHAMOMILE
  // ──────────────────────────────────────────────
  {
    plants: ["kale", "lemon-balm"],
    compatibility: "helpful",
    reason:
      "Lemon balm attracts pollinators and repels aphids near kale, but spreads and should stay in its own bed.",
  },
  {
    plants: ["lemon-balm", "tomato"],
    compatibility: "helpful",
    reason:
      "Lemon balm attracts pollinators and its citronella-like scent repels whiteflies, but its spreading habit requires a separate bed.",
  },
  {
    plants: ["chamomile", "onion"],
    compatibility: "helpful",
    reason:
      "Chamomile improves onion flavor and growth vigor when planted nearby.",
  },

  // ──────────────────────────────────────────────
  // NASTURTIUM TRAP CROPPING
  // ──────────────────────────────────────────────
  {
    plants: ["nasturtium", "pepper"],
    compatibility: "companion",
    reason:
      "Nasturtiums lure aphids away from pepper plants as a sacrificial trap crop.",
  },
  {
    plants: ["nasturtium", "squash"],
    compatibility: "companion",
    reason:
      "Nasturtiums repel squash vine borers and serve as a trap crop for aphids.",
  },
  {
    plants: ["broccoli", "nasturtium"],
    compatibility: "companion",
    reason:
      "Nasturtiums draw cabbage aphids away from broccoli, protecting the harvest.",
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTS — Blight / Disease Sharing
  // ──────────────────────────────────────────────
  {
    plants: ["potato", "tomato"],
    compatibility: "antagonist",
    reason:
      "Both are solanaceae and share late blight (Phytophthora infestans), which spreads rapidly between them.",
  },
  {
    plants: ["cabbage", "tomato"],
    compatibility: "antagonist",
    reason:
      "Tomatoes inhibit cabbage growth through allelopathic root exudates.",
  },
  {
    plants: ["cucumber", "potato"],
    compatibility: "antagonist",
    reason:
      "Potatoes increase cucumber susceptibility to blight, and cucumbers promote potato late blight.",
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTS — Alliums Stunt Legumes
  // ──────────────────────────────────────────────
  {
    plants: ["beans", "onion"],
    compatibility: "antagonist",
    reason:
      "Onions exude compounds that inhibit nitrogen-fixing bacteria on bean roots, stunting growth.",
  },
  {
    plants: ["beans", "garlic"],
    compatibility: "antagonist",
    reason:
      "Garlic's sulfur compounds suppress the Rhizobium bacteria that beans need to fix nitrogen.",
  },
  {
    plants: ["garlic", "peas"],
    compatibility: "antagonist",
    reason:
      "Garlic inhibits pea growth by suppressing the nitrogen-fixing bacteria in pea root nodules.",
  },
  {
    plants: ["onion", "peas"],
    compatibility: "antagonist",
    reason:
      "Onions stunt pea growth by disrupting nitrogen fixation in the root zone.",
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTS — Cross-Pollination / Competition
  // ──────────────────────────────────────────────
  {
    plants: ["carrot", "dill"],
    compatibility: "antagonist",
    reason:
      "Both are umbellifers that cross-pollinate, producing bitter off-type seeds and stunting carrot root growth.",
  },
  {
    plants: ["broccoli", "cabbage"],
    compatibility: "antagonist",
    reason:
      "Both are heavy-feeding brassicas that compete for the same nutrients and attract the same pests.",
  },
  {
    plants: ["cabbage", "kale"],
    compatibility: "antagonist",
    reason:
      "Same-family brassicas compete for nutrients and amplify shared pest and disease problems.",
  },
  {
    plants: ["broccoli", "kale"],
    compatibility: "antagonist",
    reason:
      "Planting brassicas together concentrates pest pressure and causes nutrient competition.",
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTS — Mint (invasive roots)
  // ──────────────────────────────────────────────
  {
    plants: ["mint", "parsley"],
    compatibility: "antagonist",
    reason:
      "Mint's aggressive rhizomes crowd out parsley, competing for water and nutrients.",
  },
  {
    plants: ["basil", "mint"],
    compatibility: "antagonist",
    reason:
      "Mint spreads aggressively and overwhelms basil with its invasive root system.",
  },
  {
    plants: ["cilantro", "mint"],
    compatibility: "antagonist",
    reason:
      "Mint's vigorous stolons overtake cilantro, which cannot compete for root space.",
  },
  {
    plants: ["lettuce", "mint"],
    compatibility: "antagonist",
    reason:
      "Mint's invasive roots rapidly overtake shallow-rooted lettuce in shared beds.",
  },
  {
    plants: ["carrot", "mint"],
    compatibility: "antagonist",
    reason:
      "Mint's dense root network chokes out carrot roots, severely reducing yields.",
  },

  // ──────────────────────────────────────────────
  // ANTAGONISTS — Other Known Bad Pairs
  // ──────────────────────────────────────────────
  {
    plants: ["dill", "tomato"],
    compatibility: "antagonist",
    reason:
      "Mature dill produces compounds that inhibit tomato growth; only young dill is safe near tomatoes.",
  },
  {
    plants: ["potato", "sunflower"],
    compatibility: "antagonist",
    reason:
      "Sunflowers release allelopathic compounds that inhibit potato tuber growth.",
  },
  {
    plants: ["cucumber", "sage"],
    compatibility: "antagonist",
    reason:
      "Sage's aromatic oils can stunt cucumber growth; they also prefer very different soil moisture levels.",
  },
  {
    plants: ["eggplant", "potato"],
    compatibility: "antagonist",
    reason:
      "Both are solanaceae and share Colorado potato beetles and early blight pathogens.",
  },
];
