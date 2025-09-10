import data from "./data.mjs";

//4.- Nuestro grupo sólo dispone de 4 monedas de plata.

	//Mostrar cuántos donuts de cada tipo podemos comprar y las monedas sobrantes. (+ 50 exp)

	//Encontrar el donut más caro que aún podamos comprar con 4 monedas de plata (+ 50 exp)

	//Encontrar el donut más barato de la posada (+ 50 exp)

	//Ordenar los donuts por precio de menor a mayor (+ 50 exp)

	//Calcular cuántos donuts distintos podríamos comprar con 4 monedas en total (mezclando tipos) (+ 50 exp)

  export default function exercise4()
  {
    console.log("");
    console.log("EXERCISE 4");

    console.log("/////////////////////");

    showNumberOfEachDonutBoughtForQuantityOfCoins(4);

    showMostExpensiveDonutQuantityOfCoinsCanBuy(4);

    showCheapestDonut();

    sortDonutsFromCheapestToMostExpensive();

    showHowManyDifferentDonutsQuantityOfCoinsCanBuy(4);
  }

  function showHowManyDifferentDonutsQuantityOfCoinsCanBuy(coins)
  {
    const donuts = data.items.item;

    const donutPriceArray = [];

    for(let i=0; i<donuts.length; i++)
    {
      const price = donuts[i].ppu;

      if(i === 0)
      {
        donutPriceArray.push(price);
      }
      else
      {
        let elementInserted = false;

        for(let j=0; j<donutPriceArray.length; j++)
        {
          if(price < donutPriceArray[j] && !elementInserted)
          {
            let slicedArray = donutPriceArray.slice(j, donutPriceArray.length - 1);

            donutPriceArray.push(price);

            donutPriceArray.concat(slicedArray);

            elementInserted = true;
          }
        }

        if(!elementInserted)
        {
          donutPriceArray.push(price);
        }
      }
    }

    let coinsLeft = coins;

    let donutCount = 0;

    for(let i=0; i<donutPriceArray.length; i++)
    {
      const donutPrice = donutPriceArray[i];

      if(donutPrice <= coinsLeft)
      {
        coinsLeft -= donutPrice;
        donutCount++;
      }
      else
      {
        break;
      }
    }

    console.log(donutCount + " different donuts can be bought with " + coins + " coins.");
    console.log("////////////////////")
  }

  function sortDonutsFromCheapestToMostExpensive()
  {
    const donuts = data.items.item;

    const donutNameArray = [];

    const donutPriceArray = [];

    for(let i=0; i<donuts.length; i++)
    {
      const name = donuts[i].name;

      const price = donuts[i].ppu;

      if(i === 0)
      {
        donutNameArray.push(name);
        donutPriceArray.push(price);
      }
      else
      {
        let elementInserted = false;

        for(let j=0; j<donutPriceArray.length; j++)
        {
          if(price < donutPriceArray[j] && !elementInserted)
          {

            let slicedArray = [];

            for(let k=j; k<donutPriceArray.length; k++)
            {
                slicedArray.push(donutPriceArray[k]);
            }

            donutPriceArray[j] = price;

            for(let k=0; k<slicedArray.length; k++)
            {
                donutPriceArray[j+k+1] = slicedArray[k];
            }

            let slicedArrayNames = [];

            for(let k=j; k<donutNameArray.length; k++)
            {
                slicedArrayNames.push(donutNameArray[k]);
            }

            donutNameArray[j] = name;

            for(let k=0; k<slicedArrayNames.length; k++)
            {
                donutNameArray[j+k+1] = slicedArrayNames[k];
            }

            elementInserted = true;
          }
        }

        if(!elementInserted)
        {
          donutNameArray.push(name);
          donutPriceArray.push(price);
        }
      }
    }

    console.log("List of donuts from cheapest to most expensive: ");

    for(let i=0; i<donutNameArray.length; i++)
    {
      console.log(donutNameArray[i]);
    }

    console.log("/////////////////////");
  }

  function showCheapestDonut()
  {
    const donuts = data.items.item;

    let currentDonutPrice = 0;

    let currentDonutName = "";

    for(let i=0; i<donuts.length; i++)
    {
      const price = donuts[i].ppu;

      const name = donuts[i].name;

      if(i === 0 || currentDonutPrice >= price)
      {
        currentDonutPrice = price;
        currentDonutName = name;
      }
    }

    console.log("Cheapest donut: " + currentDonutName);
    console.log("/////////////////////");
  }

  function showMostExpensiveDonutQuantityOfCoinsCanBuy(coins)
  {
    const donuts = data.items.item;

    let currentDonutName = "";

    let currentDonutPrice = 0;

    for(let i=0; i<donuts.length; i++)
    {
      const price = donuts[i].ppu;

      const name = donuts[i].name;

      if(price >= currentDonutPrice && price <= coins)
      {
        currentDonutName = name;

        currentDonutPrice = price;
      }
    }

    console.log("Most expensive donut " + coins + " coins can buy: " + currentDonutName);
    console.log("/////////////////////");
  }

  function showNumberOfEachDonutBoughtForQuantityOfCoins(coins)
  {
    const donuts = data.items.item;

    console.log("Quantity of each donut " + coins + " coins can buy");

    for(let i=0; i<donuts.length; i++)
    {
      const price = donuts[i].ppu;

      const name = donuts[i].name;

      const quantityOfDonutsBought = Math.floor(coins / price);

      const coinsLeft = coins - (quantityOfDonutsBought * price);

      const coinsLeftRounded = Math.round(coinsLeft * 100) / 100;

      console.log(name + ": " + quantityOfDonutsBought + " donuts, " + coinsLeftRounded + " coins are left");
    }

    console.log("/////////////////////");
  }