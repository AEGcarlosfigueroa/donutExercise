import convertStringToNumber from "./convertStringToNumber.mjs";
import data from "./data.mjs";

//2.- Necesitamos saber si la ingesta de calorías, grasas y carbohidratos puede mellar nuestra agilidad por lo que necesitamos:

	//Listar todos los donuts y sus calorías (+ 50 exp)

	//Listar todos los donuts y sus carbohidratos (+ 50 exp)

	//Mostrar la media de calorías de todos los donuts (+ 50 exp)

	//Mostrar la suma de las grasas saturadas de todos los donuts (+ 50 exp)

	//Mostrar el porcentaje medio de cada vitamina (+ 50 exp)

  export default function exercise2()
  {
    console.log("");
    console.log("EXERCISE 2");

    listDonutsWithCalories();

    listDonutsWithCarbohydrates();

    showAverageCaloriesOfAllDonuts();

    showSumOfSaturatedFatsInAllDonuts();

    showAveragePercentageOfVitaminsInAllDonuts();

    console.log("////////////////////");
  }

  //list all donuts with their respective calories
  function listDonutsWithCalories()
  {
    console.log("////////////////////");
    console.log("List of donuts with calorie amounts:");

    const donuts = data.items.item;

    for(let i=0; i<donuts.length;i++)
    {
      const name = donuts[i].name;

      const calories = donuts[i].nutrition_facts.nutrition.calories;

      console.log(name + ": " + calories + " calories");
    }
  }

  //list of all donus with their carbohydrate info
  function listDonutsWithCarbohydrates()
  {
    console.log("////////////////////");
    console.log("List of donuts with their carbohydrates:");

    const donuts = data.items.item;

    for(let i=0; i<donuts.length; i++)
    {
      console.log("//////////");
      const name = donuts[i].name;

      const carbohydrates = donuts[i].nutrition_facts.nutrition.carbohydrate;

      const carbohydrateDailyValue = carbohydrates.daily_value;

      const carbohydrateAmount = carbohydrates.carbs_detail.amount;

      const sugarAmount = carbohydrates.carbs_detail.type.sugars;

      const fiberAmount = carbohydrates.carbs_detail.type.fibre;

      console.log(name + " carbohydrate info: ");

      console.log("Daily Value: " + carbohydrateDailyValue);

      console.log("Carbohydrate Amount: " + carbohydrateAmount);

      console.log("Sugar Amount: " + sugarAmount);

      console.log("Fiber Amount: " + fiberAmount);
    }
  }

  //average calories of all donuts
  function showAverageCaloriesOfAllDonuts()
  {
    console.log("////////////////////");

    const donuts = data.items.item;

    let totalCalories = 0;

    for(let i=0; i<donuts.length;i++)
    {
      const calories = donuts[i].nutrition_facts.nutrition.calories;

      totalCalories += calories;
    }

    let averageCalories = totalCalories / donuts.length;

    console.log("Average Calories of all donuts: " + averageCalories);
  }

  //sum of saturated fats of all donuts
  function showSumOfSaturatedFatsInAllDonuts()
  {
    console.log("////////////////////");
    const donuts = data.items.item;

    let totalSaturatedFats = 0;

    for(let i=0; i<donuts.length; i++)
    {
      const saturatedFatsString = donuts[i].nutrition_facts.nutrition.fat.fat_type.saturated;

      const saturatedFats = convertStringToNumber(saturatedFatsString);

      totalSaturatedFats += saturatedFats;
    }

    console.log("Total saturated fats of all donuts: " + totalSaturatedFats);
  }

  //calculates and shows average percentage of all vitamins in all donuts
  function showAveragePercentageOfVitaminsInAllDonuts()
  {
    console.log("////////////////////");
    const donuts = data.items.item;

    let sumVitaminA = 0;

    let sumVitaminC = 0;

    let sumCalcium = 0;

    let sumIron = 0;

    for(let i=0; i<donuts.length; i++)
    {
      const vitamins = donuts[i].nutrition_facts.nutrition.vitamins;

      for(let j=0; j<vitamins.length; j++)
      {
        const type = vitamins[j].type;

        const vitaminPercent = convertStringToNumber(vitamins[j].percent);

        switch(type)
        {
          case "Vitamin A":
            sumVitaminA += vitaminPercent;
          break;
          case "Vitamin C":
            sumVitaminC += vitaminPercent;
          break;
          case "Calcium":
            sumCalcium += vitaminPercent;
          break;
          case "Iron":
            sumIron += vitaminPercent;
          break;      
        }
      }
    }

    const averageVitaminA = sumVitaminA / donuts.length;

    const averageVitaminC = sumVitaminC / donuts.length;

    const averageCalcium = sumCalcium / donuts.length;

    const averageIron = sumIron / donuts.length;

    console.log("Average of all vitamins in all donuts: ");

    console.log("Vitamin A: " + averageVitaminA + "%");

    console.log("Vitamin C: " + averageVitaminC + "%");

    console.log("Calcium: " + averageCalcium + "%");

    console.log("Iron: " + averageIron + "%");
  }