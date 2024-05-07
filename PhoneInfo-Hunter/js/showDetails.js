
const showdetails=async(id)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data=await res.json();

    const details = data.data;
    // console.log(details);
    showPhoneDetails(details);
}

const showPhoneDetails=(details)=>{
    console.log(details);
    const showDetailsContainer=document.getElementById('show_details_container');

    showDetailsContainer.innerHTML=`<figure ><img src="${details.image}" class="ml-10 p-4 bg-sky-200" alt="Shoes" /></figure>
                                    <div class="card-body my-2">
                                        <h2 class="text-lg font-medium"><span class="font-bold">Name :</span> ${details.name}</h2>
                                        <p class="text-lg font-medium"><span class="font-bold">Brand :</span> ${details.brand}</p>
                                        <p class="text-lg font-medium"><span class="font-bold">Chipset :</span> ${details.mainFeatures.chipSet}</p>
                                        <p class="text-lg font-medium"><span class="font-bold">DisplaySize: </span> ${details.mainFeatures.displaySize}</p>
                                        <p class="text-lg font-medium"><span class="font-bold">Memory : </span>${details.mainFeatures.memory}</p>
                                        <p class="text-lg font-medium"><span class="font-bold">Storage : </span>${details.mainFeatures.storage}</p>
                                    </div>`;

    show_phone_modal.showModal()
  }
