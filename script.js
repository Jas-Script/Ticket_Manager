let addbtn=document.querySelector('.add');
let modalcont=document.querySelector('.modal');
let addflag=false;
let main=document.querySelector('.main');
let text= document.querySelector('.textmodal');
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
modalcont.addEventListener('keydown',function(e){
    let key=e.key;
    if(key==="Shift"){
        create_ticket();
        modalcont.style.display='none';
        addflag=false;
        text.value="";
    }
});
function create_ticket(){
    let ticketcon=document.createElement('div');
    ticketcon.setAttribute('class','ticket');
    ticketcon.innerHTML=`<div class="ticket_color"></div>
    <div class="ticket_id">#id2021</div>
    <div class="ticket_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, ea obcaecati? Veniam, consequuntur. A aliquam tempore quod? Eum molestias quisquam commodi quos quae laborum quaerat.</div>
        `;
        main.appendChild(ticketcon);
}