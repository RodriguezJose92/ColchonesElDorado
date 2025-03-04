/* Petición SeverMudi */
async function serverData({
  token = undefined,
  sku = undefined
}) {

  // Errores
  if (token == null) { console.error('Error Mudi: Token Api Null'); return }
  if (sku == null) { console.error('Error Mudi: SKU Null'); return }

  // Respuesta positiva 
  let contentBody = { "skus": [`${sku}`] }

  const req = await fetch('https://mudiview.mudi.com.co:7443/product/getProductsUrl', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'tokenapi': token
    },
    body: JSON.stringify(contentBody)
  })

  const jsonResponse = await req.json();
  const finalResponse = jsonResponse.data[0];

  return finalResponse;

};

/** Creamos Los estilos remotos */
function createStyles() {

  if(document.body.querySelector('#stylesMudiGeneral')){ return };

  const link = document.createElement('LINK');
  link.setAttribute('rel', 'stylesheet');
  link.id = "stylesMudiGeneral";
  link.href = `https://cdn.jsdelivr.net/gh/RodriguezJose92/ColchonesElDorado@latest/index.css`; /* Pueden tomarlos de esta ruta */

  document.head.appendChild(link)
};

/** Cuando se obtiene una respuesta positiva del server se crean dos botones ( btn3D y btnAR ) */
function createBtns({ father, sku, idCompany, link3D, color, zBtns, zModal, ButtonsY }) {

  if( document.body.querySelector('#containerBtnsMudi')){
    document.body.querySelector('#containerBtnsMudi').remove();
  }

  // Creación del contenedor principal para los botones
  const containerPrincipalBtns = document.createElement('DIV');
  containerPrincipalBtns.classList.add('ContainerBtnsMudi');
  containerPrincipalBtns.id = "containerBtnsMudi";
  containerPrincipalBtns.setAttribute('style', `z-index:${zBtns}; ${ButtonsY}:0`)

  containerPrincipalBtns.innerHTML = `
    <div class="tooltip showTooltipInit">
      <p><b>¡Nuevo!</b> prueba nuestras experiencias de 3D y Realidad Aumentada</p>
    </div>
    <img src="https://cdn.jsdelivr.net/gh/RodriguezJose92/ColchonesElDorado@latest/assets/btn3D.webp" alt="Boton Mudi para activar 3D" class="btnMudi3D" id="btnMudi3D" sku=${sku} title="Haz click para tener una experiencia 3D">
    <img src="https://cdn.jsdelivr.net/gh/RodriguezJose92/ColchonesElDorado@latest/assets/btnAR.webp" alt="Boton Mudi para activar AR" class="btnMudiAR" id="btnMudiAR" sku=${sku} title="Haz click para tener una experiencia de realidad aumentada">`;

  containerPrincipalBtns.querySelector('.btnMudi3D').addEventListener('click', () => { createModal3D({ link3D: link3D, color: color, zModal: zModal }) }, false);
  containerPrincipalBtns.querySelector('.btnMudiAR').addEventListener('click', () => { createModalAR({ color: color, idCompany: idCompany, sku: sku, zModal: zModal }) }, false);

  const brother = document.querySelector('#show .thumbs');
  father.insertBefore(containerPrincipalBtns, brother)

  setTimeout(() => {
    const tool = document.querySelector('.showTooltipInit');
    tool.classList.remove('showTooltipInit')
    tool.classList.add('hideTooltip')
  }, 10000)

};

/** Creamos el modal 3D */
function createModal3D({ link3D, color, zModal }) {

  const div = document.createElement('DIV')
  div.classList.add('modalMudi')
  div.id = "modalMudi";
  div.setAttribute('style', `z-index:${zModal}`);
  div.innerHTML = `
    <div class="contentModal3D">
      <h1 class="closeModal" style="color:${color}; text-align:end">X</h1>
      <iframe class="iframeMudi3D" src="${link3D}"></iframe>
      <a href="https://mudi.com.co" target="_blank">
        <img class="powerByMudi3D" src="https://mudi.com.co/Assets/SVG/powerByMudi.webp" type="image/webp" alt="Power By Mudi">
      </a>
    </div>`;

  div.querySelector('.closeModal').addEventListener('click', () => {
    document.body.querySelector('.modalMudi').remove();
  })

  document.body.appendChild(div);
};

/** Creamos el Modal AR */
function createModalAR({ color, idCompany, sku, zModal }) {
  const div = document.createElement('DIV')
  div.classList.add('modalMudi')
  div.id = "modalMudi";
  div.setAttribute('style', `z-index:${zModal}`);
  div.innerHTML = `
      <div class="contentModalAR">
          <h1 class="closeModal" style="color:${color}; text-align:end;">X</h1>
          <h2 class="modalTitleMudi">Recomendaciones para ver el producto en Realidad Aumentada.</h2>
  
          <div class="principalContentModalAR">
  
              <div class="fristContentMudi">
  
                  <div class="containerMudiSteps">
                      <img class="imgStepMudi" src="https://cdn.jsdelivr.net/gh/RodriguezJose92/ColchonesElDorado@latest/assets/step1.webp">
                      <div class="containerStepsText">
                          <h3 class="stepTitleMudi">Apunta tu teléfono al piso para ver el producto.</h3>
                          <p class="stepParagrahpMudi">Prueba otro espacio si no puedes ver el producto.</p>
                      </div>
                  </div>
  
                  <div class="containerMudiSteps">
                      <img class="imgStepMudi" src="https://cdn.jsdelivr.net/gh/RodriguezJose92/ColchonesElDorado@latest/assets/step2.webp">
                      <div class="containerStepsText">
                          <h3 class="stepTitleMudi">Desplaza para visualizar.</h3>
                          <p class="stepParagrahpMudi">Mueve tu dedo en la pantalla para rotar la imagen.</p>
                      </div>
                  </div>
  
                  <div class="containerMudiSteps">
                      <img class="imgStepMudi" src="https://cdn.jsdelivr.net/gh/RodriguezJose92/ColchonesElDorado@latest/assets/step3.webp">
                      <div class="containerStepsText">
                          <h3 class="stepTitleMudi">Amplia y detalla el producto.</h3>
                          <p class="stepParagrahpMudi">Controla el zoom arrastrando dos dedos en la pantalla de adentro hacia afuera.</p>
                      </div>
                  </div>
  
                  <div class="containerMudiSteps">
                      <img class="imgStepMudi" src="https://cdn.jsdelivr.net/gh/RodriguezJose92/ColchonesElDorado@latest/assets/step4.webp">
                      <div class="containerStepsText">
                          <h3 class="stepTitleMudi">Toca dos veces para restablecer.</h3>
                          <p class="stepParagrahpMudi">Vuelve al tamaño original haciendo doble click sobre el producto.</p>
                      </div>
                  </div>
  
                  <button class="initARMudi" style="background-color:${color};">Iniciar AR</button>
  
              </div>
  
              <div class="secondContentMudi">
                  <h3 class="stepTitleMudi qrTitlePart"> Escanea el código QR para ver el producto en realidad aumentada.</h3>
                  <div class="containerQRMudi">
                    <img src="https://viewer.mudi.com.co/v1/qr/?id=${idCompany}&sku=${sku}" class="codeQRMudi">
                  </div>
                  <a class="hrefMudiAR" href="https://mudi.com.co" target="_blank">
                    <img class="powerByMudiAR" src="https://mudi.com.co/Assets/SVG/powerByMudi.webp" type="image/webp" alt="Power By Mudi">
                  </a>
              </div>
  
          </div>
  
      </div>`;

  div.querySelector('.closeModal').addEventListener('click', () => {
    document.body.querySelector('.modalMudi').remove();
  });

  div.querySelector('.initARMudi').addEventListener('click', () => {
    window.open(`https://viewer.mudi.com.co/v1/ar/?id=${idCompany}&sku=${sku}`)
  })

  document.body.appendChild(div);
};

/**Envío de data DataLayer */
function sendDataLayer({ sku }) {

  let OSdevice;

  if (navigator.userAgent.includes('Android')) OSdevice = 'Android';
  else if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) OSdevice = "IOS";
  else OSdevice = 'DESK';

  /** Evento de interación AR Mudi */
  document.getElementById('btnMudiAR').addEventListener('click', () => {
    dataLayer.push({
      event: 'Evento de interaccion AR Mudi',
      valorMudi: 1,
      sku: sku,
      sistemaOperativo: OSdevice
    })
  }, false);

  /** Evento de interación 3D Mudi */
  document.getElementById('btnMudi3D').addEventListener('click', () => {
    dataLayer.push({
      event: 'Evento de interaccion 3D Mudi',
      valorMudi: 1,
      sku: sku,
      sistemaOperativo: OSdevice
    })
  }, false);

  /** Evento de intención de compra */

  let 
  addTocar    = document.body.querySelectorAll('.vtex-add-to-cart-button-0-x-buttonText')[0].parentNode.parentNode.parentNode,
  endBuy      = document.body.querySelectorAll('.vtex-add-to-cart-button-0-x-buttonText')[1].parentNode.parentNode.parentNode;

  addTocar.addEventListener('click', () => {
    dataLayer.push({
      event: 'Evento de intencion de compra Mudi',
      valorMudi: 1,
      sku: sku,
      sistemaOperativo: OSdevice
    })
  }, false);

  endBuy.addEventListener('click', () => {
    dataLayer.push({
      event: 'Evento de ir al checkout Mudi',
      valorMudi: 1,
      sku: sku,
      sistemaOperativo: OSdevice
    })
  }, false);

};

function sendViewEvent({sku}){
  let OSdevice;

  if (navigator.userAgent.includes('Android')) OSdevice = 'Android';
  else if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) OSdevice = "IOS";
  else OSdevice = 'DESK';

  /** Evento de visualización */
  dataLayer.push({
    event: 'Evento de visualizacion Mudi',
    valorMudi: 1,
    sku: sku,
    sistemaOperativo: OSdevice
  });  
};

// Función Main Mudi --
async function MudiExperience({
  tokenApi,
  skuNumber,
  containerBtns,
  idCompanyMudi,
  color,

  zIndexBtns = 1,
  zIndexModal = 1,

  positionBtnsY = 'bottom',
}) {

  const server = await serverData({ token: tokenApi, sku: skuNumber });
  if (server == undefined) { return };

  /** Una vez tengamos la respuesta positiva creamos los estilos generales y los botones */
  createStyles({ idCompany: idCompanyMudi });
  createBtns({ father: containerBtns, sku: skuNumber, idCompany: idCompanyMudi, link3D: server.URL_WEB, color: color, zBtns: zIndexBtns, zModal: zIndexModal, ButtonsY: positionBtnsY });
  sendDataLayer({ sku: skuNumber });
  sendViewEvent({ sku: skuNumber });
  printBanner3D();
};

function printBanner3D(){

  /** Lista de paginas con 3D  y PDP */
  let pages3DAnimate = [

    {
      pdp:"https://www.colchoneseldorado.com/colchones-colchon-smart-vital-2322",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=13&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/smartVital/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchones-colchon-smart-comfort-2323",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=18&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/smartConfort/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchones-colchon-vital-sleep-2377",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=45&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/boston/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchon-boston-firm",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=2340&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/boston/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchon-boston-medium",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=2347&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/boston/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchon-supreme-nuevo/",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=2359&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/suprime/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchones-colchon-somma-1244",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=23&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/soma/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchon-balance-power",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=28&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/balance/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchones-colchon-coolmax-power-481-copy-136-/p",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=33&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/coolmax/video.mp4"
    }, {
      pdp:"https://www.colchoneseldorado.com/colchones-colchon-coolmax-power-481/p",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=876&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/coolmax/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchon-sealy-premium-et-medium",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=517&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/newyork/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchon-sealy-premium-et-firm",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=522&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/newyork/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchones-colchon-sealy-new-york-medium-2258",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=56&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/newyork/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchones-colchon-sealy-new-york-firm-2151",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=61&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/newyork/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchones-colchon-sealy-new-york-ultra-firm-2160",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=66&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/newyork/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchones-colchon-crown-jewel-firm-1458",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=48&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/jewel/video.mp4"
    },{
      pdp:"https://www.colchoneseldorado.com/colchones-colchon-crown-jewel-plush-496",
      anim:"https://mudi.com.co/Componentes/animatedExperiences/?sku=80&id=403&test=true",
      video:"https://mudi.com.co/Assets/bannersAnimadosColchonesDorado/gifs/jewel/video.mp4"
    }

  ];

  /** Vemos si hicimos match */
  const
  match = pages3DAnimate.find( page => window.location.href.includes(page.pdp));
  if(!match) return;
  
  /** Función para la caja del gif */
  function callBack(){ createModal3D({link3D:match.anim ,color:'#78bed5', zModal:10000000000}) };

  const fatherGifContainer = document.querySelector('.mudi-box');  

  /** Si no está creado, lo creamos */
  if (fatherGifContainer.children.length == 0){
      const 
      divGifContainer = document.createElement('DIV')
      divGifContainer.classList.add('gifContainer')
      divGifContainer.addEventListener('click', callBack)
      divGifContainer.innerHTML=`
      <video src="${match.video}" class="mudiGif" autoplay muted loop>`;
    
      fatherGifContainer.appendChild(divGifContainer);
  }

  /** Si ya esta creado */
  else{
    document.body.querySelector('.gifContainer').remove();
    const 
    divGifContainer = document.createElement('DIV')
    divGifContainer.classList.add('gifContainer')
    divGifContainer.addEventListener('click', callBack)
    divGifContainer.innerHTML=`
    <video src="${match.video}" class="mudiGif" autoplay muted loop>`;
  
    fatherGifContainer.appendChild(divGifContainer);
  }



};


/** Reconocimiento de cambio en el input */
function recognizeChangeInput(){

  /** verificación */
  let component = document.body.querySelector('[name="product-summary-sku-selector"]')
  component && document.body.querySelector('[name="product-summary-sku-selector"]').addEventListener('input',()=>{

    setTimeout(()=>{
      MudiExperience({
        tokenApi: 'YeUtus8tzSGikyhV9pok',
        skuNumber: new URLSearchParams(window.location.search).get('skuId'),
        idCompanyMudi: 403,
        color: '#78bed5',
        containerBtns: document.querySelector('.swiper-container'),
        zIndexModal: 10000000000,
      });       
    },200)
   
  });
  !component && requestAnimationFrame(recognizeChangeInput);
  
};

setTimeout(()=>{recognizeChangeInput()},2000)

function experienceOn(){

  let container =  document.querySelector('.swiper-container')
  
  container && MudiExperience({
    tokenApi: 'YeUtus8tzSGikyhV9pok',
    skuNumber: new URLSearchParams(window.location.search).get('skuId'),
    idCompanyMudi: 403,
    color: '#78bed5',
    containerBtns: document.querySelector('.swiper-container'),
    zIndexModal: 10000000000,
  }); 

  !container && requestAnimationFrame( experienceOn)

};

experienceOn();


function verifyURL(){

  let urlActual = localStorage.getItem('mudiHTTP');

  if ( !urlActual ){
    localStorage.setItem('mudiHTTP' , window.location.href )
  }

  if( urlActual == window.location.href ){
    requestAnimationFrame(verifyURL);
    return;
  }else{
    console.log('cambiando de URL')
    MudiExperience({
      tokenApi: 'YeUtus8tzSGikyhV9pok',
      skuNumber: new URLSearchParams(window.location.search).get('skuId'),
      idCompanyMudi: 403,
      color: '#78bed5',
      containerBtns: document.querySelector('.swiper-container'),
      zIndexModal: 10000000000,
    }); 
    localStorage.setItem('mudiHTTP' , window.location.href )
    requestAnimationFrame(verifyURL);
  }

}
verifyURL();



