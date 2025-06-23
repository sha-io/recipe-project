export const recipes = [
  {
    slug: "spaghetti-aglio-e-olio",
    title: "Spaghetti Aglio e Olio",
    author: "Maria Rosé",
    description: `Spaghetti Aglio e Olio is a classic Italian pasta dish made with just a
        few ingredients: garlic, olive oil, and red pepper flakes. It's simple
        to prepare yet packed with rich, bold flavors and a subtle kick of heat.`,
    allergens: {
      contains: [],
      freeOf: ["nuts", "dairy", "eggs"],
      notes: "May contain gluten depending on pasta choice",
    },
    nutrition: {
      fat: {
        label: "Total Fat",
        amount: "22g",
        percent: 28,
        subtypes: [
          { label: "Saturated Fat", amount: "3g", percent: 15 },
          { label: "Trans Fat", amount: "0g", percent: 0 },
        ],
      },
      cholesterol: {
        label: "Cholesterol",
        amount: "0mg",
        percent: 0,
        subtypes: [],
      },
      sodium: {
        label: "Sodium",
        amount: "100mg",
        percent: 4,
        subtypes: [],
      },
      carbohydrates: {
        label: "Total Carbohydrates",
        amount: "62g",
        percent: 22,
        subtypes: [
          { label: "Dietary Fiber", amount: "3g", percent: 11 },
          { label: "Polyalcohols", amount: "15g", percent: 22 },
        ],
      },
      iron: {
        label: "Iron",
        amount: "2.2mg",
        percent: 12,
        subtypes: [],
      },
      protein: {
        label: "Protein",
        amount: "9g",
        percent: 18,
        subtypes: [],
      },
    },
    ingredients: {
      quantified: [
        {
          amount: 14,
          unit: "oz",
          item: "spaghetti",
        },
        {
          amount: 6,
          unit: "cloves",
          item: "garlic, thinly sliced",
        },
        {
          amount: "½",
          unit: "cup",
          item: "extra virgin olive oil",
        },
        {
          amount: "½",
          unit: "tsp",
          item: "red pepper flakes (adjust to taste)",
        },
      ],
      unquantified: [
        "Salt (for pasta water)",
        "Fresh parsley, chopped (for garnish)",
        "Freshly ground black pepper (optional)",
        "Grated Parmesan (optional, though not traditional)",
      ],
    },
    steps: [
      "Bring a large pot of water to a rolling boil. Once boiling, add a generous amount of salt—about 1 to 2 tablespoons. This is essential for seasoning the pasta as it cooks. Add the spaghetti and cook according to the package instructions until it is al dente, meaning cooked through but still firm to the bite. While the pasta cooks, prepare the rest of the ingredients.",
      "While the pasta is boiling, heat the extra virgin olive oil in a large skillet over medium heat. Once the oil is warm, add the thinly sliced garlic. Sauté the garlic slowly, stirring frequently, until it becomes golden and fragrant. This should take about 2 to 3 minutes. Be very careful not to let the garlic burn, as it will turn bitter and ruin the dish.",
      "Once the garlic is golden, stir in the red pepper flakes. Let them cook for about 30 seconds to release their flavor into the oil. You can adjust the amount of pepper flakes depending on how spicy you want the dish to be.",
      "Before draining the pasta, carefully scoop out about ½ cup of the pasta water using a heatproof measuring cup or ladle. This starchy water will help bind the sauce to the pasta later. Drain the spaghetti thoroughly.",
      "Add the drained spaghetti directly into the skillet with the garlic and chili oil. Toss everything together gently but thoroughly so the pasta is evenly coated with the flavored oil. If the mixture seems a bit dry or sticky, add a small splash of the reserved pasta water to loosen it up and help the oil coat the noodles more evenly.",
      "Season the pasta with a little extra salt if needed and a few grinds of freshly cracked black pepper, to taste. Toss in the chopped fresh parsley and mix it through for a touch of color and freshness.",
      "Serve the Spaghetti Aglio e Olio immediately, while it’s still hot. You can optionally sprinkle a little grated Parmesan cheese on top, although this is not traditional. For an extra touch, finish with a drizzle of high-quality olive oil just before serving.",
    ],
  },
];

export default recipes;
