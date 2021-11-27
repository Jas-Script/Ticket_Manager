let addbtn=document.querySelector('.add');
let modalcont=document.querySelector('.modal');
let addflag=false;
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