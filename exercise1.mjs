import convertStringToNumber from "./convertStringToNumber.mjs";
import data from "./data.mjs";

//1.- Nuestro grupo se encuentra totalmente debilitado. Necesitamos tomar azúcares, hierro, proteínas y poca fibra. Para ello debemos preparar un conjuro que nos muestre:

	//donut con más azúcar (+ 50 exp)

	//donut con más hierro (+ 50 exp)

	//donut con más proteína (+ 50 exp)

	//donut con menos fibra (+ 50 exp)

	//donut con más calorías (+ 50 exp)   

export default function exercise1()
{

  console.log("");
  console.log("EXERCISE 1");
  console.log("////////////////////");

    //find donut with most sugar
    const donutWithMostSugar = findDonutMostSugar();

    console.log("Donut with most sugar: " + donutWithMostSugar.name);

    //find donut with most proteins
    const donutWithMostProtein = findDonutMostProtein();

    console.log("Donut with most protein: " + donutWithMostProtein.name);

    //find donut with least fiber
    const donutWithLeastFiber = findDonutLeastFiber();

    console.log("Donut with least fibre: " + donutWithLeastFiber.name);

    //find donut with most calories
    const donutWithMostCalories = findDonutMostCalories();

    console.log("Donut with most calories: " + donutWithMostCalories.name);

    //find donut with most iron
    const donutWithMostIron = findDonutMostIron();

    console.log("Donut with most iron: " + donutWithMostIron.name);

    console.log("////////////////////");
}

function findDonutMostIron()
{

    let currentIronValue = 0;

    let currentDonut = {};

    const array = data.items.item;

    for(let i=0; i<array.length; i++)
    {
        const vitamins = array[i].nutrition_facts.nutrition.vitamins;

        let valueToCheck = 0;

        for(let i=0; i<vitamins.length; i++)
        {
          const entry = vitamins[i];

          if(entry.type === "Iron")
          {
            valueToCheck = entry.percent;
          }
        }

        const valueToCompare = convertStringToNumber(valueToCheck);

        if(valueToCompare >= currentIronValue)
        {
            currentIronValue = valueToCompare;
            currentDonut = array[i];
        }
    }

    return currentDonut;
}

function findDonutMostCalories()
{
  let currentCalorieValue = 0;

  let currentDonut = {};

  const array = data.items.item;

  for(let i=0; i<array.length; i++)
  {
      const valueToCompare = array[i].nutrition_facts.nutrition.calories;

      if(valueToCompare >= currentCalorieValue)
      {
        currentCalorieValue = valueToCompare;
        currentDonut = array[i];
      }
  }

  return currentDonut;
}

function findDonutLeastFiber()
{
  let currentFiberValue = 0;

  let currentDonut = {};

  const array = data.items.item;

  for(let i=0; i<array.length; i++)
  {
      const valueToCheck = array[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre;

      const valueToCompare = convertStringToNumber(valueToCheck);

      if(i === 0)
      {
        currentFiberValue = valueToCompare;
        currentDonut = array[i];
      }
      else if(valueToCompare <= currentFiberValue)
      {
        currentFiberValue = valueToCompare;
        currentDonut = array[i];
      }
  }

  return currentDonut;
}

function findDonutMostProtein()
{
  let currentProteinValue = 0;

  let currentDonut = {};

  const array = data.items.item;

  for(let i=0; i<array.length; i++)
  {
      const valueToCheck = array[i].nutrition_facts.nutrition.protein;

      const valueToCompare = convertStringToNumber(valueToCheck);

      if(valueToCompare >= currentProteinValue)
      {
          currentProteinValue = valueToCompare;
          currentDonut = array[i];
      }
  }

    return currentDonut;
}

function findDonutMostSugar()
{

    let currentSugarValue = 0;

    let currentDonut = {};

    const array = data.items.item;

    for(let i=0; i<array.length; i++)
    {
        const valueToCheck = array[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;

        const valueToCompare = convertStringToNumber(valueToCheck);

        if(valueToCompare >= currentSugarValue)
        {
            currentSugarValue = valueToCompare;
            currentDonut = array[i];
        }
    }

    return currentDonut;
}