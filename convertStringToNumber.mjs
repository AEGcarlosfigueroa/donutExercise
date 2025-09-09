export default function convertStringToNumber(string)
{
    string = string.replace("g", "");

    string = string.replace("m", "");

    string = string.replace("%", "");

    let number = 0;

    if(string.includes('.'))
    {
      number = parseFloat(string);
    }
    else
    {
      number = parseInt(string);
    }

    return number;
}