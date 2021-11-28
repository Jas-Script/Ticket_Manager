let addbtn=document.querySelector('.add');
let modalcont=document.querySelector('.modal');
let addflag=false;
let main=document.querySelector('.main');
let text= document.querySelector('.textmodal');
let allprioritycolors=document.querySelectorAll('.color');
let colors=["red","green","blue","yellow"];
let modalprioritycolor=colors[colors.length-1];
addbtn.addEventListener('click',function(){
    addflag=!addflag;
    console.log(addflag);
    if(addflag){
        modalcont.style.display='flex';
    }
    else{
        modalcont.style.display='none';
    }

});
allprioritycolors.forEach((colorElem, idx) => {
    colorElem.addEventListener("click", (e) => {
        allprioritycolors.forEach((priorityColorElem, idx) => {
            priorityColorElem.classList.remove("border");
        })
        colorElem.classList.add("border");

        modalprioritycolor = colorElem.classList[0];
    })
})

modalcont.addEventListener('keydown',function(e){
    let key=e.key;
    if(key==="Shift"){
        create_ticket(modalprioritycolor,shortid(),text.value);
        modalcont.style.display='none';
        addflag=false;
        text.value="";
    }
});
function create_ticket(ticketcolor,ticketid,tickettext){
    let ticketcon=document.createElement('div');
    ticketcon.setAttribute('class','ticket');
    ticketcon.innerHTML=`<div class="ticket_color ${ticketcolor}"></div>
    <div class="ticket_id">#${ticketid}</div>
    <div class="ticket_text">${tickettext}</div>
        `;
        main.appendChild(ticketcon);
}