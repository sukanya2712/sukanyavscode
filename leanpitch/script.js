const tring=document.querySelector('#training');
const tringModal=document.querySelector('.tra');
const col=document.querySelector('#ing');

const openModal=()=>{
    tringModal.style.display="block";
    // tring.style.width='25vw';
    // tring.style.backgroundColor='yellow';
    //    tring.style.color='black';
    //    col.style.width='18.5vw';
    //    col.style.backgroundColor='yellow';
      col.classList.add("imp");
}

const closeThemeModal = (e)=>{
    if(e.target.classList.contains('tra')){
       tringModal.style.display='none';
       col.classList.remove("imp");
     
    }
}

tring.addEventListener('click',openModal);
tringModal.addEventListener('click', closeThemeModal);

const meetups=document.querySelector('#meetups');
const meetModal=document.querySelector('.meet');
const up=document.querySelector('#up');

const openmeetModal=()=>{
    meetModal.style.display="block";
    // tring.style.width='25vw';
    // tring.style.backgroundColor='yellow';
       up.classList.add('imp');
}

const closemeetModal = (e)=>{
    if(e.target.classList.contains('meet')){
       meetModal.style.display='none';
       up.classList.remove("imp");
    }
}

meetups.addEventListener('click',openmeetModal);
meetModal.addEventListener('click', closemeetModal);


const webinars=document.querySelector('#webinars');
const webinaModal=document.querySelector('.webina');
const web=document.querySelector('#web');

const openwebModal=()=>{
    webinaModal.style.display="block";
    // tring.style.width='25vw';
    // tring.style.backgroundColor='yellow';
       web.classList.add('imp');
}

const closewebModal = (e)=>{
    if(e.target.classList.contains('webina')){
       webinaModal.style.display='none';
       web.classList.remove("imp");
    }
}

webinars.addEventListener('click',openwebModal);
webinaModal.addEventListener('click', closewebModal);



const conference=document.querySelector('#conference');
const confeModal=document.querySelector('.confe');
const conf=document.querySelector('#conf');

const openconfModal=()=>{
    confeModal.style.display="block";
    // tring.style.width='25vw';
    // tring.style.backgroundColor='yellow';
       conf.classList.add('imp');
       conf.style.color='black';
}

const closeconfModal = (e)=>{
    if(e.target.classList.contains('confe')){
       confeModal.style.display='none';
       conf.classList.remove("imp");
    }
}

conference.addEventListener('click',openconfModal);
confeModal.addEventListener('click', closeconfModal);



const videoa=document.querySelector('#video');
const vidiModal=document.querySelector('.vidi');
const videa=document.querySelector('#vide');

const openvideModal=()=>{
    vidiModal.style.display="block";
    // tring.style.width='25vw';
    // tring.style.backgroundColor='yellow';
       videa.classList.add('imp');
       videa.style.color='black';
}

const closevideModal = (e)=>{
    if(e.target.classList.contains('vidi')){
       vidiModal.style.display='none';
       videa.classList.remove("imp");
    }
}

videoa.addEventListener('click',openvideModal);
vidiModal.addEventListener('click', closevideModal);



const speakseri=document.querySelector('#speakseri');
const speakModal=document.querySelector('.speakseriess');
const speak=document.querySelector('#speak');

const openspeakModal=()=>{
    speakModal.style.display="block";
    // tring.style.width='25vw';
    // tring.style.backgroundColor='yellow';
       speak.classList.add('imp');
}

const closespeakModal = (e)=>{
    if(e.target.classList.contains('speakseriess')){
       speakModal.style.display='none';
       speak.classList.remove("imp");
    }
}

speakseri.addEventListener('click',openspeakModal);
speakModal.addEventListener('click', closespeakModal);


const xyza=document.querySelector('#xyz');
const blogaModal=document.querySelector('.blogss');
const zefa=document.querySelector('#zef');

const openblogModal=()=>{
    blogaModal.style.display="block";
    // tring.style.width='25vw';
    // tring.style.backgroundColor='yellow';
    //    tring.style.color='black';
    //    col.style.width='18.5vw';
    //    col.style.backgroundColor='yellow';
      zefa.classList.add("imp");
}

const closeblogModal = (e)=>{
    if(e.target.classList.contains('blogss')){
       blogaModal.style.display='none';
       zefa.classList.remove("imp");
     
    }
}

xyza.addEventListener('click',openblogModal);
blogaModal.addEventListener('click', closeblogModal);



const efga=document.querySelector('#efg');
const podModal=document.querySelector('.podcastss');
const mnoa=document.querySelector('#mno');

const openpodModal=()=>{
    podModal.style.display="block";
    // tring.style.width='25vw';
    // tring.style.backgroundColor='yellow';
    //    tring.style.color='black';
    //    col.style.width='18.5vw';
    //    col.style.backgroundColor='yellow';
      mnoa.classList.add("imp");
}

const closepodModal = (e)=>{
    if(e.target.classList.contains('podcastss')){
       podModal.style.display='none';
       mnoa.classList.remove("imp");
     
    }
}

efga.addEventListener('click',openpodModal);
podModal.addEventListener('click', closepodModal);