README - Mudi 3D & AR Commerce
Este es un README para el código proporcionado, que corresponde a la integración de la experiencia Mudi 3D & AR Commerce en un sitio web. A continuación, se proporciona una descripción general del código y cómo se puede utilizar.

Descripción
El código proporcionado implementa la funcionalidad necesaria para agregar botones interactivos de Mudi 3D & AR Commerce a un sitio web. Estos botones permiten a los usuarios experimentar productos en 3D y Realidad Aumentada (AR) directamente desde el sitio web.

Funciones Principales
serverData: Esta función realiza una solicitud al servidor de Mudi para obtener la URL del modelo 3D del producto correspondiente al SKU proporcionado.

createStyles: Crea y añade estilos CSS remotos necesarios para los botones y la visualización del modelo 3D y AR.

createBtns: Crea botones interactivos para activar las experiencias 3D y AR. Se insertan en el contenedor especificado en el sitio web.

createModal3D: Crea un modal para la visualización del modelo 3D del producto.

createModalAR: Crea un modal para la visualización del producto en AR.

sendDataLayer: Envía datos de seguimiento a Google Tag Manager (GTM) para eventos de visualización y interacción con las experiencias 3D y AR.

MudiExperience: Función principal que integra todas las funciones anteriores para proporcionar la experiencia completa de Mudi 3D & AR Commerce en el sitio web.

Uso
Para integrar la experiencia de Mudi 3D & AR Commerce en un sitio web, sigue estos pasos:

Incluye el código proporcionado en el archivo JavaScript de tu sitio web.

Llama a la función MudiExperience con los parámetros necesarios, como el token de la API, el SKU del producto, el ID de la empresa Mudi, el color de los botones, el contenedor para los botones y las z-index para los botones y los modales.

Ejemplo de Uso
javascript
Copy code
MudiExperience({
  tokenApi: 'TuTokenDeAPI',
  skuNumber: 'TuSKUDeProducto',
  idCompanyMudi: 'IDDeTuEmpresaMudi',
  color: '#78bed5',
  containerBtns: document.querySelector('.swiper-container'),
  zIndexModal: 10000000000,
});
Notas
Asegúrate de proporcionar el token de la API correcto, el SKU del producto y el ID de la empresa Mudi para una integración exitosa. Además, ajusta los parámetros según sea necesario para adaptar la experiencia a tu sitio web.

¡Disfruta de la integración de Mudi 3D & AR Commerce en tu sitio web!


----------------------------------------------------------------------------------

README - Mudi 3D & AR Commerce
This is a README for the provided code, which corresponds to the integration of the Mudi 3D & AR Commerce experience into a website. Below is an overview of the code and how it can be used.

Description
The provided code implements the functionality required to add interactive Mudi 3D & AR Commerce buttons to a website. These buttons allow users to experience products in 3D and Augmented Reality (AR) directly from the website.

Key Functions
serverData: This function makes a request to the Mudi server to fetch the URL of the product's 3D model corresponding to the provided SKU.

createStyles: Creates and adds remote CSS styles necessary for the buttons and the display of the 3D and AR models.

createBtns: Creates interactive buttons to trigger the 3D and AR experiences. They are inserted into the specified container on the website.

createModal3D: Creates a modal for displaying the product's 3D model.

createModalAR: Creates a modal for displaying the product in AR.

sendDataLayer: Sends tracking data to Google Tag Manager (GTM) for viewing and interacting with the 3D and AR experiences.

MudiExperience: Main function that integrates all the above functions to provide the complete Mudi 3D & AR Commerce experience on the website.

Usage
To integrate the Mudi 3D & AR Commerce experience into a website, follow these steps:

Include the provided code in your website's JavaScript file.

Call the MudiExperience function with the necessary parameters, such as the API token, product SKU, Mudi company ID, button color, container for the buttons, and z-index for the buttons and modals.

Example Usage
javascript
Copy code
MudiExperience({
  tokenApi: 'YourAPIToken',
  skuNumber: 'YourProductSKU',
  idCompanyMudi: 'YourMudiCompanyID',
  color: '#78bed5',
  containerBtns: document.querySelector('.swiper-container'),
  zIndexModal: 10000000000,
});
Notes
Make sure to provide the correct API token, product SKU, and Mudi company ID for successful integration. Additionally, adjust the parameters as needed to tailor the experience to your website.

Enjoy integrating Mudi 3D & AR Commerce into your website!