// 3) get the element node (html element, html entity) of the element with the id of 
// "navbar" assign it to the variable navbar

let navbar = document.getElementById("navbar");
console.log(navbar);

// 4) get the element node (html element, html entity) of the element with the id of 
// "showcase" assign it to the variable showcase

let showcase = document.getElementById("showcase");
console.log(showcase);

// 5) get the element node (html element, html entity) of the element with the id of 
// "footer" assign it to the variable footer

let footer = document.getElementById("footer");
console.log(footer);

// 6) get the node list of the footer variable, assign it to the variable footerNodes. 
// Notice how you get back three text nodes around, one comment node, and one element node specifically a paragraph



// 7) get an HTML collection of the footer variable, assign it to the variable footerChildren. 
// Notice how we only get back the paragraph (element node) back and not the comments or text nodes 
//like we got with the node list

// 8) get all elements with the class of "nav-link" and store them in a variable named navLinks

// 9) Get the ul and store it in a variable named ul HINT: you'll want to use querySelector() 
//|| getElementsByTagName. querySelector will be easier to use in this instance

// 10) Using the ul variable chain together method and properties of the ul object to get the 
//"About" <li>, store it in the variable aboutLi. TIP: You need to make the children of <ul> an array 
// like structure from there try to get the specific index you desire NOTE: Depending on if you use .childNodes || 
//.children your index number may be different

// 11) Open a pull request to merge "practice" into "main"