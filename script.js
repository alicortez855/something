document.getElementById("greeting").textContent = "Hi there!"; 
/*puts a header over coding the header in html */

document.getElementById("h1").textContent = "The Header";
/*puts a header over coding the header in html */

let items = document.getElementsByClassName("redclass");
/*idk*/


/*
for(let i = 0; i <items.length; i++)
{
    items[i].textContent = "Welcome";
}
   this function changes the headers to welcome kinda weird */


const header = document.querySelector("h1");
console.log(header);
/*connecting h1*/

const red = document.querySelectorAll(".redclass");
console.log(red);
/*changing the text color to red*/

document.getElementById("click").addEventListener("click",function()
/*creating a function for the click button*/
{
    alert("CLICKED BUTTON!");
    /*alret make a thing for after you click the button*/
});



/*
run this first: php -S localhost:3006 -t./
*/