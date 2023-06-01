const firstParagraph = document.querySelector("p");
console.log(firstParagraph);

const firstParagraphID = document.getElementById("paragraph-1");
const secondParagraphID = document.getElementById("paragraph-2");
const thirdParagraphID = document.getElementById("paragraph-3");

console.log(firstParagraphID);

console.log(secondParagraphID);

console.log(thirdParagraphID);

const allParagraph = document.querySelectorAll("p");
console.log(allParagraph);

for (let i=0; i< allParagraph.length;i++){
    console.log(allParagraph[i].textContent);
}

for(let i=0; i < allParagraph.length;i++){
    if(i===3){
        allParagraph[i].textContent= "fourthParagraph";
        console.log(allParagraph[i].textContent);
    }
}

for(let i=0; i<allParagraph.length;i++){
    allParagraph[0].setAttribute("class","first-Paragraph");
    allParagraph[0].setAttribute("id",  "firstPara");
    allParagraph[1].className ="second-paragraph";
    allParagraph[1].id="secondPara";
    allParagraph[2].className ="third-Paragraph";
    allParagraph[2].id ="thirdPara";
    allParagraph[3].className="fourth-Paragraph";
    allParagraph[3].id ="fourthPara";
    console.log(allParagraph[i]);
}

for(let i=0; i<allParagraph.length; i++){
    allParagraph[0].style.color ="red";
    allParagraph[0].style.background="blue";
    allParagraph[0].style.border="solid";
    allParagraph[0].style.fontFamily="Arial";
    allParagraph[0].style.fontSize ="36px";
    allParagraph[1].style.color ="gray";
    allParagraph[1].style.background="black";
    allParagraph[1].style.border="dashed";
    allParagraph[1].style.fontFamily="Verdana";
    allParagraph[1].style.fontSize ="36px";
    allParagraph[2].style.color ="green";
    allParagraph[2].style.background="yellow";
    allParagraph[2].style.border="solid";
    allParagraph[2].style.fontFamily="Poppins";
    allParagraph[2].style.fontSize ="36px";
    allParagraph[3].style.color ="orange";
    allParagraph[3].style.background="green";
    allParagraph[3].style.border="solid";
    allParagraph[3].style.fontFamily="Arial";
    allParagraph[3].style.fontSize ="36px";
}

for(let i=0; i<allParagraph.length;i++){
    allParagraph[0].setAttribute.className="First-Pg";
    allParagraph[0].setAttribute.id ="firstP";
    allParagraph[0].textContent="Paragraph akoko leleyi";
    allParagraph[1].setAttribute.className="Second-Pg";
    allParagraph[1].setAttribute.id ="SecondP";
    allParagraph[1].textContent="Paragraph ekeji";
    allParagraph[2].setAttribute.className="third-Pg";
    allParagraph[2].setAttribute.id ="thirdP";
    allParagraph[2].textContent="Paragraph eketa leleyi";
    allParagraph[3].setAttribute.className="Fourth-Pg";
    allParagraph[3].setAttribute.id ="fourthP";
    allParagraph[3].textContent="Paragraph ekerin leleyi";
    console.log(allParagraph[i]);
   
   
   
}




