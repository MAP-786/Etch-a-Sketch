let counter = 0;
let squares = 4;

function CreateGrid(squares)
{

    for (let i = 0; i < squares; i++)
    {
        let row = document.createElement("div");
        row.className = "row"
        for(let j = 0; j< squares; j++)
        {
            let box = document.createElement("div");
            
            box.className = "box";
            row.appendChild(box);
        }
        document.getElementById("container").appendChild(row);
    }
        const box = document.querySelectorAll('.box');

        // we use the .forEach method to iterate through each button
        box.forEach((box) => {

        // and for each one we add a 'click' listener
        box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "red";
        });
        });
}



function DeleteGrid(squares)
{
    for(let a = 0; a < squares; a++)
    {
        const rowdel = document.querySelector(".row")
        rowdel.classList.remove("row")
        
        for(let b = 0 ; b < squares; b++)
        {
            const boxdel = document.querySelector(".box")
            boxdel.classList.remove("box")
        }
    }

}


CreateGrid(squares)



function GenerateRandomColour()
{
    

    const box = document.querySelectorAll('.box');

        // we use the .forEach method to iterate through each button
        box.forEach((box) => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
        // and for each one we add a 'click' listener
        box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "#" + randomColor;
        });
        });
}



function GenerateShades()
{
    

    const box = document.querySelectorAll('.box');
 
        box.forEach((box) => 
        {
            box.addEventListener('mouseover', () => {
           
            box.style.backgroundColor =  "hsl(0,0%,20%)"
        });
        });
        
}



const buttonclear = document.querySelector("#clear")
    counter += 1;

    buttonclear.addEventListener('click', () => {

        DeleteGrid(squares)
        squares = window.prompt("Enter the number of squares per side for new grid")
        if (squares > 100)
        {
            squares = 100;
        }

        CreateGrid(squares)

    });
 




const rainbow = document.querySelector("#Rainbow")
    counter += 1;

    rainbow.addEventListener('click', () => {

        DeleteGrid(squares)
        squares = window.prompt("Enter the number of squares per side for new grid")
        CreateGrid(squares)
        GenerateRandomColour()

    });

    
    
const shades = document.querySelector("#Shades")
    counter += 1;

    shades.addEventListener('click', () => {

        DeleteGrid(squares)
        squares = window.prompt("Enter the number of squares per side for new grid")
        CreateGrid(squares)
        GenerateShades()

    });







/*
    Removed from the html code because it was taking you too long to figure out. 
    <button id = "Shades">
        Shades of Black
    </button>
*/