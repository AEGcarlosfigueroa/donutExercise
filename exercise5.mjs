import convertStringToNumber from "./convertStringToNumber.mjs";
import data from "./data.mjs";

//5.- Para nuestro horror y preocupación hemos detectado grandes errores sintácticos en el conjuro original, es momento de poner nuestros conocimientos arcanos al servicio de toda la posada.

//Los donuts con el colesterol > 12 modificar las grasas trans a 3,2 gr (+ 50 exp)

//Donuts con azúcar > 50  modificar el amount de los detalles de carbohidratos a 42gr (+ 50 exp)

//Añadir una vitamina llamada "Nitacina" al donut con el nombre "Magic Fusion" (+ 50 exp)

//El daily value de los carbohidratos de todos los donuts va a ser de 53% (+ 50 exp)

//Crearle un nuevo atributo "Alergen" al donut llamado "Relaxing Alchemy" y que dentro de el ponga "Gluten Free" (+ 50 exp)

export default function exercise5()
{
  console.log("");
  console.log("EXERCISE 5");
  console.log("////////////////////");
  console.log("Donuts data modified according to exercise 5 instructions: ");

  console.log("////////////////////");

  changeDonutsWithMoreThan12Choresterol();

  changeDonutsWithMoreThan50Sugar();

  addNitacineToMagicFusion();

  changeCarbohydrateDailyValueTo52PercentOnAllDonuts();

  addGlutenFreeAlergenToRelaxingAlchemyDonut();

}

function addGlutenFreeAlergenToRelaxingAlchemyDonut()
{
  console.log("Add gluten-free alergen to relaxing alchemy donut");

  const donuts = data.items.item;

  for(let i=0; i<donuts.length; i++)
  {
    const name = donuts[i].name;

    if(name.includes("Relaxing Alchemy"))
    {
      donuts[i].alergen = "Gluten-Free";

      console.log(name + " donut alergen: " + donuts[i].alergen);
    }
  }

  console.log("////////////////////");
}

function changeCarbohydrateDailyValueTo52PercentOnAllDonuts()
{
  console.log("Change carbohydrate daily value on all donuts to 52%");

  const donuts = data.items.item;

  for(let i=0; i<donuts.length; i++)
  {
    donuts[i].nutrition_facts.nutrition.carbohydrate.daily_value = "52%";

    console.log("Donut " + (i+1) +  " carbohydrate daily value: " +  donuts[i].nutrition_facts.nutrition.carbohydrate.daily_value);
  }

  console.log("////////////////////");
}

function addNitacineToMagicFusion()
{
  console.log("Add nitacine vitamin to magic fusion donut");

  const nitacineObject =
  { 
    "type": "Nitacine", "percent": "8%" 
  }

  const donuts = data.items.item;

  for(let i=0; i<donuts.length; i++)
  {
    if(donuts[i].name.includes("Magic Fusion"))
    {
      const vitamins = donuts[i].nutrition_facts.nutrition.vitamins;

      vitamins.push(nitacineObject);

      console.log(donuts[i].name + " donut vitamins:")

      for(let j=0; j<vitamins.length; j++)
      {
        console.log(vitamins[j].type);
      }
    }
  }

  console.log("////////////////////");
}

function changeDonutsWithMoreThan50Sugar()
{
  console.log("Set donuts with more than 50 sugar to 42g of carbohydrates");

  const donuts = data.items.item;

  for(let i=0; i<donuts.length; i++)
  {
    const sugarString = donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;

    const sugar = convertStringToNumber(sugarString);

    if(sugar > 50)
    {
      donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount = "42g";
    }

    console.log("Donut " + (i+1));
    console.log("Sugar: " + sugarString);
    console.log("Carbohydrates: " + donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount);
  }

  console.log("////////////////////");
}

function changeDonutsWithMoreThan12Choresterol()
{
  console.log("Set donuts with more than 12mg choresterol to 3.2g of trans fat");

  const donuts = data.items.item;

  for(let i=0; i<donuts.length; i++)
  {
    const choresterolString = donuts[i].nutrition_facts.nutrition.cholesterol.amount;

    const cholesterol = convertStringToNumber(choresterolString);

    if(cholesterol > 12)
    {
      donuts[i].nutrition_facts.nutrition.fat.fat_type.trans = "3.2g";
    }

    console.log("Donut " + (i+1));
    console.log(choresterolString + " choresterol");
    console.log(donuts[i].nutrition_facts.nutrition.fat.fat_type.trans + " trans fat");
  }

  console.log("////////////////////");
}