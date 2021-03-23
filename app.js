
const allsections = document.querySelectorAll("section");
let theplaceofsections = document.querySelector("#s");
let fragment = document.createDocumentFragment();

for(const section of allsections){

  const sectionnum=section.getAttribute('data-nav');
 const linknum= document.createElement('a');
 const link=document.createElement('li');
 const text=document.createTextNode(sectionnum);
 link.addEventListener('click',function(){
   section.scrollIntoView({behavior:"smooth"});
  })
linknum.appendChild(text);
link.appendChild(linknum);
fragment.appendChild(link);
}
theplaceofsections.appendChild(fragment);
window.addEventListener('scroll',function(){
  for(elem of allsections){
    let r = elem.getBoundingClientRect();
   if(r.top>=-100 && r.top<=200){
  allsections.forEach((element )=> {
    element.style.background="white";
  });
elem.style.background="red";
const alloflinks=document.querySelectorAll('a');
for(const link2 of alloflinks){
 let textofsec=elem.getAttribute('data-nav');
let textoflink=link2.textContent;
if(textofsec==textoflink){
  alloflinks.forEach((element2)=> {
    element2.style.background="white";
  });
  link2.style.background="red";
}

}
   }

  }
})