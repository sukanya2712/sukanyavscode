const menuItems=document.querySelectorAll('.menu-item');

const messagesNotification =document.querySelectorAll('#messages-notification');
const messsages=document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch=document.querySelector('#message-search');

const theme=document.querySelector('#theme');
const themeModal=document.querySelector('.customize-theme');
const fontSizes=document.querySelectorAll('.choose-size');
var root=document.querySelector(':root');
const colorPalette=document.querySelectorAll('.choose-color span');

const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');

const changeActiveItem=()=>{
     menuItems.forEach(item=>{
        item.classList.remove('active');
     })
}

menuItems.forEach(item=>{
      item.addEventListener('click',()=>{
        changeActiveItem();
         item.classList.add('active');
         if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display='none';
         }else{
            document.querySelector('.notification-popup').style.display='block';
            document.querySelector('#notifications.notification-count').style.display='none';
        }
      })
})

const searchMessage=()=>{
    const val=messageSearch.ariaValueMax.toLowerCase();
    console.log(val);
    message.forEach(chat=>{
        let name = chat.querySelector('h5').textcontent.toLocalelowerCase();
        if(name.indexof(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display ='none';
        }
    })
}

 messageSearch.addEventListener('keyup', searchMessage);

 messagesNotification.addEventListener('click',()=>{
    messagesNotification.style.boxshadow='0 0 1rem var(--color-primary)';
    setTimeout(()=>{
        messagesNotification.style.boxShadow='none';
    

    }, 2000);
 })

//  theme custo

const openThemeModal=()=>{
    themeModal.style.display='grid';
}

const closeThemeModal = (e)=>{
     if(e.target.contains('customize-theme')){
        themeModal.style.display='none';
     }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click',openThemeModal);

const removesizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}

// fonts

fontSizes.forEach(size=>{
    size.addEventListener('click',()=>{
        removesizeSelector();
        let fontSize;
        size.classList.toggle('active');
    
    if(size.classList.contains('font-size-1')){
        fontSize='10px';
        root.style.setProperty('---sticky-top-left','5.4rem');
        root.style.setProperty('---sticky-top-right','5.4rem');
    }else if(size.classList.contains('font-size-2')){
        fontSize='13px';
        root.style.setProperty('---sticky-top-left','5.4rem');
        root.style.setProperty('---sticky-top-right','-7rem');
    }else if(size.classList.contains('font-size-3')){
        fontSize='16px';
        root.style.setProperty('---sticky-top-left','-2rem');
        root.style.setProperty('---sticky-top-right','-17rem');
    }else if(size.classList.contains('font-size-4')){
        fontSize='19px';
        root.style.setProperty('---sticky-top-left','-5rem');
        root.style.setProperty('---sticky-top-right','-25rem');
    }else if(size.classList.contains('font-size-5')){
        fontSize='22px';
        root.style.setProperty('---sticky-top-left','-12rem');
        root.style.setProperty('---sticky-top-right','-35rem');
    }

    document.querySelector('html').style.fontSize=fontSize;
})
})

const changeActiveColorClass=()=>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryHue;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue=252;

        }else  if(color.classList.contains('color-2')){
            primaryHue=52;
        }else  if(color.classList.contains('color-3')){
            primaryHue=352;
        }else  if(color.classList.contains('color-4')){
            primaryHue=152;
        }else  if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue' , primaryHue);
    })
})

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG=()=>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click',()=>{
    Bg1.classList.add('active');
    Bg2.classList.add('active');
    Bg3.classList.add('active');

    window.location.reload();
});

Bg2.addEventListener('click', ()=>{
 lightColorLightness = '15%';
 whiteColorLightness = '20%';
 darkColorLightness = '95%';

 Bg2.classList.add('active');
 Bg1.classList.add('active');
 Bg3.classList.add('active');
 changeBG();
});

Bg3.addEventListener('click', ()=>{
    lightColorLightness = '95%';
    whiteColorLightness = '10%';
    darkColorLightness = '0%';
   
    Bg3.classList.add('active');
    Bg1.classList.add('active');
    Bg2.classList.add('active');
    changeBG();
   });






