// DYNAMIC DOM!
let h1= document.querySelector("h1");
h1.innerText= "hello hello, sab badhiya? ";
console.log("h1");

let h2= document.createElement("h2");
h2.textContent= "Append hai to last me body ke andar! (h2)";
document.body.append(h2);

let h3= document.createElement("h3");
h3.textContent= "Prepend hai to body ke top pe hoga!";
document.body.prepend(h3);

/*h1= document.querySelector("h1");
h1.remove();*/

let h4= document.createElement("h4");
h4.textContent= "Ye h4 hai, h2 ke baad insert hua hai!";
let h2Element= document.querySelector("h2");
h2Element.insertAdjacentElement("afterend", h4);

//STYLE UPDATE!
h1.style.color= "brown";
h1.style.backgroundColor= "beige";
h1.style.border= "2px solid purple";
h1.classList.add("big-font");

// ATTRIBUTE UPDATE!
h1.setAttribute("title", "This is a heading tag");
console.log(h1.getAttribute("title"));

// LIST ITEMS UPDATE!
let ul= document.querySelector("ul");
let li= document.createElement("li");
li.textContent= "JavaScript DOM Manipulation";
ul.prepend(li);


div.setAttribute("id", "my-div");
div.setAttribute("class", "container");


