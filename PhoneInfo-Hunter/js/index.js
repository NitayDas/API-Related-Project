
const loadphone = async (searchText,isshowall) =>{

    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data= await res.json();

    const phones =data.data;

    displayPhone(phones,isshowall);
}



displayPhone = (phones,isshowall) =>{
    phonecontainer=document.getElementById('phone-container');
    phonecontainer.innerHTML='';

    const showAllContainer=document.getElementById('showAll-container');
    if(phones.length>12 && !isshowall)
        {
            showAllContainer.classList.remove('hidden');
        }

    else{
         showAllContainer.classList.add('hidden');
    }

    if(!isshowall){
        phones=phones.slice(0,12);
    }

    phones.forEach(phone => {

        const phoneCard=document.createElement('div');
        phoneCard.classList=`card p-4 bg-base-100 shadow-xl`;

       phoneCard.innerHTML=`<figure><img src="${phone.image}" alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">${phone.phone_name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>`;
                                 
        // appendcild
        phonecontainer.appendChild(phoneCard);

    });

    Loadspinner(false);
}

loadphone('iphone');

// handle search

const Handlersearch=(isshowall)=>{
    const SearchInputField=document.getElementById('search-input');
    const phonename = SearchInputField.value;
    
    Loadspinner(true);
   
    loadphone(phonename,isshowall);

    console.log(phonename);
}

const Loadspinner =(isTrue)=>{

    const loadSpinner = document.getElementById("load-spinner");
    if(isTrue)
        {
            loadSpinner.classList.remove('hidden');  
        }

    else 
    {
        loadSpinner.classList.add('hidden');
    }
}

const showAll=()=>{
    const showAllContainer=document.getElementById('showAll-container');
    Handlersearch(true);
}