
const loadphone = async (searchText) =>{

    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data= await res.json();

    const phones =data.data;

    displayPhone(phones);
}



displayPhone = phones =>{
    phonecontainer=document.getElementById('phone-container');
    phonecontainer.innerHTML='';

    const showAllContainer=document.getElementById('showAll-container');
    if(phones.length>12)
        {
            showAllContainer.classList.remove('hidden');
        }

    else{
         showAllContainer.classList.add('hidden');
    }

    phones=phones.slice(0,12);

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
}

loadphone('iphone');

// handle search

const Handlersearch=()=>{
    const SearchInputField=document.getElementById('search-input');
    const phonename = SearchInputField.value;
    SearchInputField.value='';
   
    loadphone(phonename);

    console.log(phonename);
}