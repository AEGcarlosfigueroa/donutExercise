import data from "./data.mjs";

//3.- El horno a la leña de esta posada es de alta calidad, debemos lanzar un hechizo para saber qué tipo de masa utilizan

	//Listar cada donut con sus posibles masas, batter (+ 50 exp)

	//Listar cada donut con sus posibles extras topping (+ 50 exp)

	//Mostrar el donut con más variedad de masas (batters) (+ 50 exp)

	//Mostrar el donut con más variedad de toppings (+ 50 exp)

	//Contar el número total de masas y toppings diferentes que existen en toda la posada (+ 50 exp)

  export default function exercise3()
  {
    console.log("");
    console.log("EXERCISE 3");

    console.log("/////////////////////");

    showDonutsWithBatters();

    showDonutsWithToppings();

    showDonutWithMostBatters();

    showDonutWithMostToppings();

    showNumberOfBattersAndToppings();
  }

  function showNumberOfBattersAndToppings()
  {
    const donuts = data.items.item;

    const batterNames = [];

    let batterNumber = 0;

    for(let i=0; i< donuts.length; i++)
    {
      const batters = donuts[i].batters.batter;

      for(let j=0; j<batters.length; j++)
      {
        const name = batters[j].type;

        let batterFound = false;

        for(let k=0; k<batterNames.length; k++)
        {
          if(batterNames[k] === name)
          {
            batterFound = true;
          }
        }

        if(!batterFound)
        {
          batterNames.push(name);
          batterNumber++;
        }
      }
    }

    console.log("Number of batters: " + batterNumber);

    const toppingNames = [];

    let toppingNumber = 0;

    for(let i=0; i< donuts.length; i++)
    {
      const toppings = donuts[i].topping;

      for(let j=0; j<toppings.length; j++)
      {
        const name = toppings[j].type;

        let toppingFound = false;

        for(let k=0; k<toppingNames.length; k++)
        {
          if(toppingNames[k] === name)
          {
            toppingFound = true;
          }
        }

        if(!toppingFound)
        {
          toppingNames.push(name);
          toppingNumber++;
        }
      }
    }

    console.log("Number of toppings: " + toppingNumber);

    console.log("/////////////////////");
  }

  function showDonutWithMostToppings()
  {
    const donuts = data.items.item;

    let currentName = "";

    let currentMaxToppings = 0;

    for(let i=0; i<donuts.length; i++)
    {

      const toppingQuantity = donuts[i].topping.length;

      if(toppingQuantity >= currentMaxToppings)
      {
        currentName = donuts[i].name;
        currentMaxToppings = toppingQuantity;
      }

    }

    console.log("Donut with most toppings: " + currentName);

    console.log("/////////////////////");
  }

  function showDonutWithMostBatters()
  {
    const donuts = data.items.item;

    let currentName = "";

    let currentMaxBatters = 0;

    for(let i=0; i<donuts.length; i++)
    {

      const batterQuantity = donuts[i].batters.batter.length;

      if(batterQuantity >= currentMaxBatters)
      {
        currentName = donuts[i].name;
        currentMaxBatters = batterQuantity;
      }

    }

    console.log("Donut with most batters: " + currentName);

    console.log("/////////////////////");
  }

  function showDonutsWithToppings()
  {
    const donuts = data.items.item;

    for(let i=0; i<donuts.length; i++)
    {
      console.log("//////////");

      const name = donuts[i].name;

      console.log(name + " toppings: ");

      const toppings = donuts[i].topping;

      for(let j=0; j<toppings.length; j++)
      {
        const batterName = toppings[j].type;
        console.log(batterName);
      }
    }

    console.log("/////////////////////");
  }

  function showDonutsWithBatters()
  {

    const donuts = data.items.item;

    for(let i=0; i<donuts.length; i++)
    {
      console.log("//////////");

      const name = donuts[i].name;

      console.log(name + " batters: ");

      const batters = donuts[i].batters.batter;

      for(let j=0; j<batters.length; j++)
      {
        const batterName = batters[j].type;
        console.log(batterName);
      }
    }

    console.log("/////////////////////");
  }