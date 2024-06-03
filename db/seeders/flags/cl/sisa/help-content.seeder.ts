import { EntityManager, Dictionary } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { HelpContent } from 'modules/content/help-category/entities/help-content.entity';

export class HelpContentSisaSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    //============ COMPRAR EN SISA ============//
    context.crearCuentaSisa = em.create(HelpContent, {
      label: 'Crear Cuenta',
      reference: '/crear-cuenta',
      content:
        '# ¿Cómo crear una cuenta en [SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)?\n' +
        '\n' +
        'Si quieres crear una cuenta en **[SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)**, sigue estos simples pasos:\n' +
        '- Tienes que dirigirte a la opción “Regístrate”, ubicada en la parte superior derecha de la página, para ingresar tu nombre, apellido y mail. Luego debes crear una clave con las siguientes condiciones: mínimo 8 caracteres, alfanumérica, 1 minúscula y 1 mayúscula.\n' +
        '- Para finalizar el registro, recibirás un mail seguro con un código de verificación que deberás ingresar en el formulario. Si no te llega el mail, recuerda revisar en tu bandeja de entrada, correos no deseados o spam.\n' +
        '\n' +
        'Cuando ingreses por primera vez, debes elegir el local de retiro o crear una dirección de despacho:\n' +
        '- Escribe tu calle y número: verás desplegarse un listado donde aparecen diferentes alternativas con distintas comunas. Elige la que corresponda a tu dirección. Luego, si aplica, completa el número de departamento (o casa) e ingresa referencias adicionales si fuese necesario.\n' +
        '- Te mostraremos una imagen del mapa donde se ubica tu dirección para que confirmes. Si no tuviéramos la dirección referenciada, entonces te pediremos mover el pin rojo hasta la zona correcta.\n' +
        '- Si no tenemos cobertura en la dirección que deseas agregar, el sistema te entregará una alerta para que intentes con otra ubicación.\n' +
        '\n' +
        '**Si se cae el sitio web o tu lista de compra**\n' +
        'Cuando comiences a comprar, si el sitio de **[SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)** se cae o se borra tu lista, te recomendamos cambiar de navegador, probar en modo incógnito o intentar 30 minutos más tarde.\n' +
        '\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=c342c6c786f0961ef5d5d8fc04ac5150c68fb780da0e6776d9e02c12e67fed23", "invitedReference": "/ayuda/contactanos?data=c342c6c786f0961ef5d5d8fc04ac5150c68fb780da0e6776d9e02c12e67fed23" }\n' +
        '```\n' +
        '',
      order: 10,
      helpCategory: context.comprarSisa,
      icon: '/icons/cards/user.svg',
      description: 'Infórmate sobre cómo registrarte y comenzar a comprar en Santaisabel.cl y Santa Isabel app.',
    });

    context.comoHacerPedidoSisa = em.create(HelpContent, {
      label: 'Cómo hacer un pedido',
      reference: '/como-hacer-pedido',
      content:
        '# ¿Cómo hacer un pedido?\n' +
        '\n' +
        'Para realizar una compra debes registrarte en **[SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)** o ingresar a tu cuenta.\n' +
        '\n' +
        'Luego, al agregar el primer producto al carro, deberás indicar una dirección de despacho o un local de retiro. Una vez que hayas seleccionado todos los productos que necesitas, debes pinchar el botón “Hacer pedido” ubicado en el carro (esquina superior derecha).\n' +
        '\n' +
        'A continuación, si todavía no completas tus datos personales, te pediremos RUT y teléfono para luego seleccionar una fecha y horario de entrega.\n' +
        '\n' +
        'En seguida, agrega un medio de pago:\n' +
        '- **Tarjeta Cencosud Scotiabank** (ingresando los primeros 6 números)\n' +
        '- **Tarjeta de crédito emitida en Chile** (con el número de tarjeta, fecha de vencimiento y el código de seguridad que está al reverso)\n' +
        '- **Tarjeta de débito emitida en Chile** (con el número de tarjeta, fecha de vencimiento y el código de seguridad que está al reverso, también debes agregar la cuenta bancaria en donde quieres que se te reintegre el dinero en caso de devoluciones)\n' +
        '\n' +
        'Completa todos los datos solicitados y ya estaremos procesando tu pedido.\n' +
        '\n' +
        '## Horarios disponibles\n' +
        '\n' +
        'Cuando comiences a armar tu pedido y elijas un modo de entrega, tu dirección de despacho o local para retiro, te mostraremos un mensaje bajo el logotipo de **[SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)** con la disponibilidad de entrega más próxima (con fecha y hora). Recuerda que esa información es solo una referencia y podría cambiar al momento de hacer tu pedido.\n' +
        '\n' +
        'Al llegar al checkout te confirmaremos los horarios disponibles y el costo de la entrega.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=55c09bb1aa7b5749dd728b112a05962153ae7d9951440dc08c5f67c7a49d6bd4", "invitedReference": "/ayuda/contactanos?data=55c09bb1aa7b5749dd728b112a05962153ae7d9951440dc08c5f67c7a49d6bd4" }\n' +
        '```\n' +
        '\n' +
        '## Compras anteriores\n' +
        '\n' +
        'Para revisar luego tus compras, tienes que ingresar a tu sesión, con mail o RUT y clave. Luego se te desplegarán todas las secciones de tu cuenta, entre ellas **Mis compras**, donde podrás ver el detalle de tus pedidos e, incluso, repetir esa misma compra de forma fácil y rápida.\n' +
        '',
      order: 20,
      helpCategory: context.comprarSisa,
      icon: '/icons/cards/help.svg',
      description: 'Aprende a agregar productos en tu carro de compras.',
    });

    context.buscarProductosSisa = em.create(HelpContent, {
      label: 'Buscar productos y stock',
      reference: '/buscar-productos',
      content:
        '# ¿Cómo buscar productos?\n' +
        '\n' +
        'Existen tres formas para encontrar productos en **[SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)**\n' +
        '- **Búsqueda por ofertas:** además de las promociones destacadas en la página de inicio, podrás ver todos los productos rebajados pinchando en la categoría “Ofertas”. Una vez dentro, podrás filtrarlos por categoría o marca.\n' +
        '\n' +
        '    ![oferta-img/90px](https://d31w2ybspxswhh.cloudfront.net/SM/sisa/SISA_CCMR-32167_1.png)\n' +
        '\n' +
        '- **Búsqueda por categorías:** navega por las categorías agrupadas en Supermercado o ingresa rápidamente a las categorías más visitadas en el menú principal (Lácteos, Despensa, Frutas y Verduras, Limpieza, Carnes Rojas, Botillería y Mascotas)\n' +
        '\n' +
        '    ![categoria-img/720px](https://d31w2ybspxswhh.cloudfront.net/SM/sisa/SISA_CCMR-32167_2.png)\n' +
        '\n' +
        '- **Búsqueda por palabras claves:** el buscador superior del sitio te ayudará a encontrar por palabras clave un producto específico (ejemplo: leche). Como resultado, te mostraremos una lista de productos correspondientes a la palabra ingresada.\n' +
        '\n' +
        '    ![busqueda-img/480px](https://d31w2ybspxswhh.cloudfront.net/SM/sisa/SISA_CCMR-32167_3.png)\n' +
        '\n' +
        'No olvides que también puedes navegar por todo el sitio de SantaIsabel.cl para revisar ofertas, promociones y productos destacados.\n' +
        '\n' +
        '## Stock de productos en [SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)\n' +
        '\n' +
        'Cuando ingresas a tu sesión, seleccionas un modo de entrega y dirección de despacho o local de retiro, te mostraremos los productos disponibles en el **local Santa Isabel** donde se hará la recolección de tu pedido (asignado según cercanía y capacidad). Sin embargo, ya que tu pedido se prepara en otro momento, es posible que algunos productos ya no estén disponibles.\n' +
        '\n' +
        'En ese caso nos contactaremos contigo para ofrecerte alternativas o sustitutos. Si no pudiéramos comunicarnos contigo o no tener sustitutos adecuados para ofrecerte, los productos que no se envíen serán descontados de la boleta.\n' +
        '\n' +
        '> **Nota**: como tu pedido se prepara en un momento distinto a tu compra, algunos productos podrían no estar disponibles. No te preocupes, te llamaremos para ofrecerte alternativas.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=9454da1cb383ec81851cffaf5bef81a35da1f87c0e36a908bc10531f98572153", "invitedReference": "/ayuda/contactanos?data=9454da1cb383ec81851cffaf5bef81a35da1f87c0e36a908bc10531f98572153" }\n' +
        '```\n' +
        '',
      order: 30,
      helpCategory: context.comprarSisa,
      icon: '/icons/cards/bag.svg',
      description: 'Conoce cómo elegir tus productos y su disponibilidad.',
    });

    context.carroComprasSisa = em.create(HelpContent, {
      label: 'Carro de compras',
      reference: '/carro-de-compras',
      content:
        '# ¿Cómo funciona el carro de compras?\n' +
        '\n' +
        'En la esquina superior derecha, al lado de tu sesión, encontrarás tu carro de compras. Allí aparecerán todos los productos que agregaste en tu pedido.\n' +
        '\n' +
        'Para aumentar la cantidad de productos, deberás hacerlo presionando las flechas que se encuentran al lado de cada producto.\n' +
        'Si quieres eliminar algún producto de tu carro, deberás presionar “eliminar”.\n' +
        'Para ver el detalle de cada producto, debes hacer clic en la imagen de este.\n' +
        '\n' +
        'Si decides salir del sitio y volver más tarde, al reingresar a **[SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)** podrás rescatar ese carro y continuar con tu compra. También podrás guardarlo como una lista, vaciarlo o finalizar tu compra al pinchar “Hacer pedido”.',
      order: 40,
      helpCategory: context.comprarSisa,
      icon: '/icons/cards/shoppingCart.svg',
      description: 'Descubre cómo ver qué productos agregaste en tu pedido.',
    });

    context.agregarDireccionSisa = em.create(HelpContent, {
      label: 'Agregar nueva dirección',
      reference: '/agregar-nueva-direccion',
      content:
        '# ¿Cómo agrego una nueva dirección de despacho?\n' +
        '\n' +
        'Para agregar una nueva dirección en las comunas donde tenemos cobertura, debes seguir los siguientes pasos:\n' +
        '\n' +
        '- Ingresa a tu cuenta en **[Santa Isabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)**, sección “Mis datos” y luego “Mis direcciones” donde debes pinchar el botón “Agregar nueva dirección”\n' +
        '- En seguida, escribe tu calle y número; verás desplegarse un listado donde aparecen alternativas con distintas comunas. Elige la que corresponde a tu dirección y luego completa el número de departamento (o casa) e ingresa referencias adicionales si fuese necesario.\n' +
        '- Te mostraremos una imagen del mapa donde se ubica tu dirección para que confirmes. Si no tuviéramos la dirección referenciada, entonces te pediremos mover el pin rojo hasta la zona adecuada.\n' +
        '- Si no tenemos cobertura en la dirección que deseas agregar, te entregaremos una alerta para que intentes con otra ubicación. Puedes revisar la cobertura [aquí](https://www.santaisabel.cl/oferta/retiro-en-tienda?nombre_promo=boton-despachos-18112020).\n' +
        '\n' +
        'Por tu seguridad, cada vez que agregues una nueva dirección, te notificaremos a tu mail registrado en tu cuenta.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=c342c6c786f0961ef5d5d8fc04ac5150c68fb780da0e6776d9e02c12e67fed23", "invitedReference": "/ayuda/contactanos?data=c342c6c786f0961ef5d5d8fc04ac5150c68fb780da0e6776d9e02c12e67fed23" }\n' +
        '```\n' +
        '',
      order: 50,
      helpCategory: context.comprarSisa,
      icon: '/icons/cards/location.svg',
      description: 'Conoce cómo agregar nuevas direcciones para el despacho de tu compra.',
    });
    //============ PROBLEMAS CON PEDIDO SISA ============//
    context.inconvenientesProductosSisa = em.create(HelpContent, {
      label: 'Inconvenientes con tus productos',
      reference: '/inconvenientes-productos',
      content:
        '# Producto en mal estado, o cobrado y no enviado\n' +
        '\n' +
        'Si en tu pedido de **[SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)** recibes un producto vencido, en mal estado (es decir, con indicios de contaminación o descomposición) o descongelado, al igual que si un producto fue cobrado y no te llegó, puedes ir al local a solicitar la reposición del producto, o pedir la devolución del dinero enviando tu solicitud mediante el siguiente enlace a nuestra sección de contacto:\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=c0d43b5c9cfe80c754fe46948ded513305033baabff886bc330446d82fdcb5ce", "invitedReference": "/ayuda/contactanos?data=c0d43b5c9cfe80c754fe46948ded513305033baabff886bc330446d82fdcb5ce" }\n' +
        '```\n' +
        '\n' +
        '### Productos no disponibles\n' +
        'Cuando ingresas a tu cuenta y seleccionas un modo de entrega y dirección de despacho o local de retiro, el sitio web te mostrará los productos disponibles en el local donde se hará la recolección de tu pedido (asignado según cercanía y capacidad). Sin embargo, ya que **tu pedido se prepara en otro momento**, es posible que algunos de ellos ya no estén disponibles al momento de prepararlo.\n' +
        '\n' +
        'En ese caso te llamaremos para ofrecerte alternativas o sustitutos. Si no pudiéramos contactarnos contigo o no tuviéramos sustitutos para ofrecerte, el valor de los productos que no se envíen será restituido en tu tarjeta de crédito al momento de emitir la boleta.\n' +
        '',
      order: 20,
      helpCategory: context.problemasPedidoSisa,
      icon: '/icons/cards/cancellation.svg',
      description: 'Revisa qué puedes hacer si no estás conforme con alguno de los productos comprados.',
    });

    context.problemasSustitucionProductosSisa = em.create(HelpContent, {
      label: 'Problemas con sustitución de productos',
      reference: '/problemas-sustitucion-productos',
      content:
        '# Problemas con sustitución de productos\n' +
        '\n' +
        'Nuestros shoppers preparan tu pedido directamente en nuestros locales. Si al momento de recolectar tus productos no encontramos suficientes unidades para abastecer tu solicitud, nos contactaremos contigo para ofrecerte sustitutos.\n' +
        'Si esta información no ha resuelto tus dudas, enviar solicitud mediante el siguiente enlace a nuestra sección de contacto:\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=9454da1cb383ec81851cffaf5bef81a35da1f87c0e36a908bc10531f98572153", "invitedReference": "/ayuda/contactanos?data=9454da1cb383ec81851cffaf5bef81a35da1f87c0e36a908bc10531f98572153" }\n' +
        '```\n' +
        '\n' +
        '### Productos no disponibles\n' +
        'Cuando ingresas a tu cuenta y seleccionas un modo de entrega y dirección de despacho o local de retiro, el sitio web te mostrará los productos disponibles en el local donde se hará la recolección de tu pedido (asignado según cercanía y capacidad). Sin embargo, ya que **tu pedido se prepara en otro momento**, es posible que algunos de ellos ya no estén disponibles al momento de prepararlo.\n' +
        '\n' +
        'En ese caso te llamaremos para ofrecerte alternativas o sustitutos. Si no pudiéramos contactarnos contigo o no tuviéramos sustitutos para ofrecerte, el valor de los productos que no se envíen será restituido en tu tarjeta de crédito al momento de emitir la boleta.\n' +
        '',
      order: 30,
      helpCategory: context.problemasPedidoSisa,
      icon: '/icons/cards/bagReturn.svg',
      description:
        'Infórmate sobre cómo puedes solicitar ayuda si tienes problemas con los productos que te sustituyeron.',
    });

    context.atrasoEntregaPedidoSisa = em.create(HelpContent, {
      label: 'Atraso en entrega del pedido',
      reference: '/atraso-en-entrega-pedido',
      content:
        '# ¿Cómo seguir mi pedido?\n' +
        'Primero, te recomendamos revisar el **estado de tu pedido** en la sección del mismo nombre en **[SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)**.\n' +
        'La encuentras en la esquina superior derecha, al lado del buscador, cuando ya ingresaste a tu sesión.\n' +
        '\n' +
        '![Atraso en entrega/550px](https://d31w2ybspxswhh.cloudfront.net/SM/sisa/boton-seguimiento-ubicacion_circle.png)\n' +
        '\n' +
        'Cuando tu pedido ya está en ruta, te enviaremos un mensaje de texto al celular registrado en tu cuenta.\n' +
        'Si hay algún atraso en la entrega, te enviaremos un mail con una nueva fecha programada.\n' +
        '\n' +
        'Ahora bien, si tu pedido no llegó en el horario confirmado y no recibiste aviso de reprogramación, envía tu solicitud mediante el siguiente enlace a nuestra sección de contacto:\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=bf5545ab5a8e41d5abc57bbdc86cb72e8347d757d7c69ec837e669d5d8436bf0", "invitedReference": "/ayuda/contactanos?data=bf5545ab5a8e41d5abc57bbdc86cb72e8347d757d7c69ec837e669d5d8436bf0" }\n' +
        '```\n' +
        '',
      order: 40,
      helpCategory: context.problemasPedidoSisa,
      icon: '/icons/cards/delivery24.svg',
      description: 'Descubre qué hacer si tu compra no llegó en el horario avisado.',
    });

    context.ofertaNoAplicadaSisa = em.create(HelpContent, {
      label: 'Oferta no aplicada',
      reference: '/oferta-no-aplicada',
      content:
        '# Oferta no aplicada\n' +
        'Recuerda revisar la confirmación de tu pedido, donde las ofertas deben estar aplicadas en el valor final de la compra.\n' +
        'La boleta de compra en SantaIsabel.cl a diferencia de la boleta de una compra presencial en los locales Santa Isabel no registra el descuento aplicado en cada producto.\n' +
        '\n' +
        'Puedes ver todos los descuentos aplicados en “Mis compras” en tu cuenta de [SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMI19yu_JuI7gIVCAmRCh1IJQPoEAAYASAAEgJVePD_BwE).\n' +
        'Si esta información no ha resuelto tus dudas, envía tu solicitud mediante el siguiente enlace a nuestra sección de contacto:\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=1a4f0f35ee1d5f22f6929f09576443de95cef957cfaedd717b4495586694a8e9", "invitedReference": "/ayuda/contactanos?data=1a4f0f35ee1d5f22f6929f09576443de95cef957cfaedd717b4495586694a8e9" }\n' +
        '```\n' +
        '',
      order: 4,
      helpCategory: context.problemasPedidoSisa,
      icon: '/icons/cards/transactionCancel.svg',
      description: '',
    });

    context.comoIngresarSolicitudSisa = em.create(HelpContent, {
      label: '¿Cómo ingresar una solicitud?',
      reference: '/como-ingresar-solicitud',
      content:
        '### ¿Cómo ingresar una solicitud?  \n' +
        '\n' +
        'Para crear una solicitud o reclamo por tu caso en el  [Formulario de contacto](<URL_HELP_FORM>) , primero debes ingresar con tu cuenta o ingresar con tu correo electrónico.\n' +
        '\n' +
        '![login](https://d31w2ybspxswhh.cloudfront.net/TxD/sisa/login-solicitud.svg)\n' +
        '\n' +
        '### Completa el Formulario de contacto\n' +
        '\n' +
        'Cuando estés en el Formulario para ingresar tu solicitud o reclamo, asegúrate de llenarlo siguiendo los pasos que te mostramos a continuación:\n' +
        '\n' +
        '``````IconTable\n' +
        '{"textPosition":"bottom", "renderImages":"true", "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/SM/sisa/step1.png", "text": "Elige un tipo de solicitud y motivo.", "weight": "normal", "height": "272", "width": "240"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/SM/sisa/step2.png", "text": "Selecciona la Orden de compra.", "weight": "normal", "height": "272", "width": "240"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/SM/sisa/step3.png", "text": "Completa los datos y envía la solicitud.", "weight": "normal", "height": "272", "width": "240"}]}\n' +
        '``````\n' +
        '',
      order: 10,
      helpCategory: context.problemasPedidoSisa,
      icon: '/icons/cards/information.svg',
      description: 'Revisa como ingresar una solicitud o reclamo por tu caso en el Formulario de contacto.',
    });
    //============ MEDIOS DE PAGO SISA ============//
    context.problemasCobroTarjetaDebitoSisa = em.create(HelpContent, {
      label: 'Problemas con cobro en tarjeta de débito',
      reference: '/problemas-cobro-tarjeta-debito',
      content:
        '# Tuve un problema con el cobro en mi tarjeta de débito\n' +
        '\n' +
        'Te recordamos que cuando compras en  [SantaIsabel.cl](https://www.santaisabel.cl)  en la cuenta asociada a tu tarjeta de débito verás una transacción correspondiente al monto del pedido ingresado.\n' +
        '\n' +
        'Si existieran diferencias entre el monto del pedido original y el recolectado, recibirás una notificación por email indicando que tienes un saldo a favor, derivado de la diferencia antes mencionada.\n' +
        '\n' +
        'En caso de haber problemas en el cobro, contáctanos en nuestra sección de ayuda:\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=9e5659bb8c878a409033ccf05b3b4dbefca969bb8c63263eff41ebe146f243d5", "invitedReference": "/ayuda/contactanos?data=9e5659bb8c878a409033ccf05b3b4dbefca969bb8c63263eff41ebe146f243d5" }\n' +
        '```\n' +
        '\n' +
        '> **Nueva forma de cobro:** Para mejorar tu experiencia de compra hemos creado un nuevo sistema de cobro en las tarjetas de crédito y débito. Infórmate [aquí](/ayuda/medios-de-pago/cobro-tarjeta).\n' +
        '',
      order: 40,
      helpCategory: context.mediosPagoSisa,
      icon: '/icons/cards/creditCard.svg',
      description: 'Conoce qué hacer si tienes problemas con el cobro en tu tarjeta de débito.',
    });

    context.problemasCobroTarjetaCreditoSisa = em.create(HelpContent, {
      label: 'Problemas con cobro en tarjeta de crédito',
      reference: '/problemas-cobro-tarjeta-de-credito',
      content:
        '# Se realizó un cobro indebido en mi tarjeta de crédito\n' +
        '\n' +
        'Cuando ingresas un pedido en  [SantaIsabel.cl](https://www.santaisabel.cl)  en tu tarjeta de crédito verás una primera transacción correspondiente al cobro por el monto del pedido ingresado.\n' +
        '\n' +
        'Una vez que tu pedido está listo y solo si se hubieran producido diferencias en el total cobrado debido a sustitutos o productos no enviados, verás una segunda transacción en tu tarjeta, esta vez por las devoluciones o cobros de dichos montos.\n' +
        '\n' +
        'Si no hubiera diferencias entre tu pedido original y el pedido recolectado, solo verás la primera transacción en los movimientos de tu tarjeta de crédito.\n' +
        '\n' +
        'En caso de haber problemas en el cobro, contáctanos en nuestra sección de ayuda:\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=9e5659bb8c878a409033ccf05b3b4dbefca969bb8c63263eff41ebe146f243d5", "invitedReference": "/ayuda/contactanos?data=9e5659bb8c878a409033ccf05b3b4dbefca969bb8c63263eff41ebe146f243d5" }\n' +
        '```\n' +
        '\n' +
        '> **Nueva forma de cobro:** Para mejorar tu experiencia de compra hemos creado un nuevo sistema de cobro en las tarjetas de crédito y débito. Infórmate [aquí](/ayuda/medios-de-pago/cobro-tarjeta).\n' +
        '',
      order: 50,
      helpCategory: context.mediosPagoSisa,
      icon: '/icons/cards/creditCard.svg',
      description: 'Infórmate qué hacer si presentas problemas con tu tarjeta de crédito.',
    });

    context.mediosDePagoSisa = em.create(HelpContent, {
      label: 'Medios de pago disponibles',
      reference: '/medios-de-pago',
      content:
        '# ¿Cuáles son los medios de pago disponibles?\n' +
        'Puedes pagar con **Tarjeta Cencosud Scotiabank o tarjetas bancarias de crédito o débito emitidas en Chile**: Visa, MasterCard, American Express o Diners.\n' +
        '\n' +
        'Las tarjetas de crédito emitidas en el extranjero no están habilitadas para comprar en [SantaIsabel.cl](https://www.santaisabel.cl/).\n' +
        '\n' +
        '> **Nota**: de momento no se pueden utilizar Gift Cards o Puntos Cencosud como medio de pago.\n' +
        '\n' +
        '## Dudas con Tarjeta Cencosud Scotiabank\n' +
        'Las dudas o requerimientos con Tarjeta Cencosud Scotiabank funcionan de manera independiente de Santa Isabel.\n' +
        '\n' +
        'Tienes que comunicarte al 600 450 5000 o visitar su sitio web: [Tarjetas Cencosud](https://www.tarjetacencosud.cl/TarjetaMasWEB/home.html)',
      order: 20,
      helpCategory: context.mediosPagoSisa,
      icon: '/icons/cards/wallet.svg',
      description:
        'Conoce cuáles son los medios de pago disponibles para comprar en Santaisabel.cl y Santa Isabel app.',
    });

    context.cobroTarjetaSisa = em.create(HelpContent, {
      label: '¿Cómo se realiza el cobro de la tarjeta?',
      reference: '/cobro-tarjeta',
      content:
        '## ¿Cómo se realiza el cobro en mi tarjeta?\n' +
        '\n' +
        'Para comprar en [SantaIsabel.cl](https://www.santaisabel.cl), puedes usar tu tarjeta de crédito o débito.\n' +
        '\n' +
        'Al momento de realizar tu pedido, se realizará una primera transacción en la tarjeta de crédito o débito que seleccionaste de pago, que corresponde al 90% del total de tu compra.  \n' +
        'Una vez que tus productos hayan sido recolectados y pasados por caja, se emitirá un segundo cobro correspondiente a las diferencias del monto, si es que hubieran, por los productos que serán efectivamente entregados.\n' +
        '\n' +
        'De esta forma, no se facturarán los artículos faltantes, pero sí se agregarán al cobro, en caso de haberlos, aquellos productos que sumaste al pedido durante el llamado telefónico con el picker. Debes tener en consideración que los valores a cobrar corresponderán al precio exhibido en la sala de ventas, los cuales podrían tener una diferencia con el valor publicado en la web.\n' +
        '\n' +
        'Para los productos a granel, se cobrará la cantidad real correspondiente al peso del producto entregado.\n' +
        '\n' +
        'En caso de que no estuviesen todos los productos que solicitaste y hubiese una diferencia a favor, se te realizará una devolución a tu tarjeta de crédito, o cuenta corriente registrada en tu cuenta de  [SantaIsabel.cl](https://www.santaisabel.cl/) en caso de haber pagado con débito.\n' +
        '\n' +
        'Estos datos bancarios solo pueden ser modificados por el mismo cliente en su cuenta Santa Isabel, sección ‘Mi cuenta bancaria’, y es responsabilidad del cliente mantenerla actualizada, pues a modo de resguardo y protección, ningún colaborador de Santa Isabel puede crear, editar o borrar dichos datos.\n' +
        '\n' +
        'Si existiera diferencia entre lo cobrado y lo facturado a favor del cliente, si pagó con tarjeta de crédito, esta se verá reflejada en los movimientos por facturar en un plazo máximo de 5 días hábiles.\n' +
        '\n' +
        'En el caso de débito, la devolución será en la cuenta bancaria en un plazo máximo de 5 días hábiles, siempre y cuando se haya ingresado correctamente todos los datos de la cuenta. La cuenta puede ser del titular o de un tercero.\n' +
        '\n' +
        'En el caso de errores en esos datos o con problemas como el bloqueo de la tarjeta u otro motivo, se efectúa la devolución en un máximo de 14 días corridos, porque se realiza de manera administrativa.\n' +
        '\n' +
        'Si esta información no ha resuelto tus dudas, envía tu solicitud mediante el siguiente enlace a nuestra sección de contacto:\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=c0be81790cee59fba612c25c7df4177fea26f08bfe1fc007361a26a2d5f91f18", "invitedReference": "/ayuda/contactanos?data=c0be81790cee59fba612c25c7df4177fea26f08bfe1fc007361a26a2d5f91f18" }\n' +
        '```\n' +
        '',
      order: 10,
      helpCategory: context.mediosPagoSisa,
      icon: '/icons/cards/help.svg',
      description: 'Infórmate cómo realizamos el cobro de tu compra en tu tarjeta.',
    });

    context.agregarEliminarTarjetaSisa = em.create(HelpContent, {
      label: 'Agregar o eliminar tarjeta',
      reference: '/agregar-eliminar-tarjeta',
      content:
        '# ¿Cómo puedo agregar o eliminar una tarjeta?\n' +
        'Tienes que estar registrado e ingresar a tu cuenta. Al momento de hacer tu pedido y pasar al checkout, en el paso 3 te encontrarás con las formas de pago donde podrás ingresar o agregar una **tarjeta de crédito**, **tarjeta de débito** o **Tarjeta Cencosud Scotiabank**.\n' +
        '\n' +
        'Para eliminar una tarjeta guardada debes ingresar en tu cuenta a la sección **Mis tarjetas** o al hacer un pedido al llegar al checkout.\n' +
        '\n' +
        '> **Nota**: para eliminar una tarjeta no deben existir pedidos en curso asociados a la tarjeta, ya que se necesita mantenerla habilitada en el caso de devoluciones por productos faltantes o diferencias de precio por sustitutos.',
      order: 30,
      helpCategory: context.mediosPagoSisa,
      icon: '/icons/cards/creditCard.svg',
      description: 'Aprende cómo cambiar la información de la tarjeta con la que pagas tu compra.',
    });

    context.devolucionesTarjetaDebitoSisa = em.create(HelpContent, {
      label: 'Devoluciones con tarjeta de débito',
      reference: '/devoluciones-tarjeta-debito',
      content:
        '# Devoluciones con tarjeta de débito\n' +
        '\n' +
        '### ¿Cómo se harán las devoluciones de las diferencias de dinero en mis pedidos pagados con tarjeta de débito?\n' +
        '\n' +
        'Cuando existan diferencias de dinero en el total de tu pedido ingresado v/s tu pedido facturado con tarjeta de débito, la diferencia a tu favor será devuelta en la cuenta bancaria (vista o corriente) registrada en la sección “Mi cuenta bancaria”. Esta cuenta podrás registrarla al momento de inscribir tu tarjeta de débito o cuando estimes conveniente ingresando directamente a esta sección. Las devoluciones a tu cuenta bancaria se harán en un máximo de 48 hrs. hábiles una vez facturado tu pedido.\n' +
        '\n' +
        '### ¿Cómo inscribo mi cuenta bancaria para recibir las devoluciones de dinero?\n' +
        '\n' +
        'Podrás registrar tu cuenta bancaria al momento de inscribir tu tarjeta de débito al hacer el pago de tu pedido o cuando estimes conveniente ingresando directamente la sección “Mi cuenta bancaria” en Santaisabel.cl.\n' +
        '\n' +
        '### ¿Cómo modifico mi cuenta bancaria?\n' +
        '\n' +
        'Ingresa a tu cuenta en Santaisabel.cl en la sección “Mi cuenta bancaria”. Solo podrás ingresar cuentas bancarias donde el titular sea el mismo que el titular de la cuenta de Santaisabel.cl.\n' +
        '\n' +
        '### ¿Puedo recibir devoluciones de dinero por pago con tarjeta de débito a una cuenta bancaria donde no soy el titular?\n' +
        '\n' +
        'No, por tu seguridad, solo se harán devoluciones a cuentas bancarias donde el titular sea el mismo que el titular de la cuenta de Santaisabel.cl\n' +
        '\n' +
        '### ¿Cuánto demora la devolución de las diferencias de dinero en mis compras pagadas con tarjeta de débito?\n' +
        '\n' +
        'Las devoluciones a tu cuenta bancaria se harán en un máximo de 48 hrs. hábiles una vez facturado tu pedido, siempre y cuando hayas registrado tu cuenta bancaria en Santaisabel.cl. Para registrarla ingresa a tu cuenta en Santaisabel.cl en la sección “Mi cuenta bancaria”.\n' +
        '\n' +
        '### ¿Qué hago si no he recibido mi devolución?\n' +
        '\n' +
        'Las diferencias de dinero a tu favor por pago con tarjeta de débito se devuelven en un máximo de 48 hrs. hábiles. Si tienes una devolución pendiente fuera de este plazo puede deberse a diversos factores:\n' +
        '\n' +
        '- Aún no has registrado tu cuenta bancaria\n' +
        '- Existe un error en los datos de la cuenta bancaria ingresada\n' +
        '- El RUT del titular de la cuenta bancaria registrada no coincide con el titular de la cuenta Santaisabel.cl con la que se hizo el pedido\n' +
        '- La cuenta posee algún bloqueo o está cerrada\n' +
        '\n' +
        '### ¿Se pueden hacer devoluciones a cuentas bancarias donde no soy el titular?\n' +
        '\n' +
        'No, por tu seguridad, solo se harán devoluciones a cuentas bancarias donde el titular sea el mismo que el titular de la cuenta de Santaisabel.cl\n' +
        '\n' +
        '### ¿Cuánto demora la devolución de las diferencias de dinero en mis compras pagadas con tarjeta de débito?\n' +
        '\n' +
        'Las devoluciones a tu cuenta bancaria se harán en un máximo de 48 hrs. hábiles una vez facturado tu pedido, siempre y cuando hayas registrado tu cuenta bancaria en Santaisabel.cl Para registrarla ingresa a tu cuenta en Santaisabel.cl en la sección “Mi cuenta bancaria”.\n' +
        '\n' +
        '### ¿Qué hago si no he recibido mi devolución?\n' +
        '\n' +
        'Las diferencias de dinero a tu favor por pago con tarjeta de débito se devuelven en un máximo de 48 hrs. hábiles. Si tienes una devolución pendiente fuera de este plazo puede deberse a diversos factores:\n' +
        '- Aún no has registrado tu cuenta bancaria\n' +
        '- Existe un error en los datos de la cuenta bancaria ingresada\n' +
        '- El RUT del titular de la cuenta bancaria registrada no coincide con el titular de la cuenta Santaisabel.cl con la que se hizo el pedido\n' +
        '- La cuenta posee algún bloqueo o está cerrada\n' +
        '\n' +
        'En caso de que no recibas a tiempo tu devolución, por diferencia a favor, te llegará un correo solicitando corregir la información de la cuenta, una vez corregido, se realizará el reintento de la transferencia.',
      order: 10,
      helpCategory: context.mediosPagoSisa,
      icon: '/icons/cards/transactionCard.svg',
      description: '',
    });
    //============ DESPACHO RETIRO SISA ============//
    context.ModosEntregaSisa = em.create(HelpContent, {
      label: 'Modos de Entrega',
      reference: '/modos-entrega-despacho-retiro',
      content:
        '# ¿Cuáles son los modos de entrega?\n' +
        '\n' +
        'Según prefieras, puedes elegir entre los siguientes modos de entrega de tu pedido:\n' +
        '\n' +
        '**Despacho**: Elige este servicio para **comprar online** y recibir tu pedido en una de las direcciones registradas en tu cuenta. Programa su entrega según la fecha y horario disponible al terminar tu compra. Recuerda que al comenzar tu pedido podrás tener una referencia del próximo horario disponible, el cual está siempre sujeto a confirmación al llegar al checkout.\n' +
        '\n' +
        '**Retiro**: Compra a través de **[SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)** y recoge tu pedido en cualquiera de los locales Santa Isabel habilitados con el servicio de retiro a lo largo del país. Los datos de la persona que retira quedan grabados y, por lo tanto, después no se pueden modificar.\n' +
        '\n' +
        'Puedes retirar en auto o en tienda en la fecha y hora que elijas. Nosotros te enviaremos un mensaje de texto el día de retiro para recordarte que debes ir por tu compra. Sigue la señalética para encontrar el punto de retiro y no olvides **llevar una bolsa para recoger tu pedido**.\n' +
        '\n' +
        'En caso de no retirarlo en la fecha y horario elegido, será anulado y se cobrarán los productos frescos y/o perecibles.\n' +
        '\n' +
        '> **Nota**: Es importante que sepas que los modos de entrega disponibles al momento de tu compra podrían variar según contingencias o situación de los locales Santa Isabel. Lo más seguro es revisarlos al momento de tu compra.',
      order: 10,
      helpCategory: context.despachoRetiroSisa,
      icon: '/icons/cards/delivery.svg',
      description: 'Elige cómo quieres que te entreguen tu compra.',
    });

    context.zonasCoberturaHorariosSisa = em.create(HelpContent, {
      label: 'Zonas de cobertura, horarios y costos',
      reference: '/zonas-cobertura-y-horarios',
      content:
        '# ¿Cuáles son las zonas de cobertura, horarios y costos del servicio?\n' +
        '\n' +
        'En SantaIsabel.cl puedes elegir entre **Despacho a domicilio y Retiro al auto**.\n' +
        '\n' +
        'El servicio de Retiro al auto es gratuito y la disponibilidad horaria dependerá del local que elijas. Al seleccionar este servicio cuando comiences tu pedido, aparecerá una referencia del horario más próximo, como en este ejemplo:\n' +
        '\n' +
        '![Zonas de Coberturas/550px](https://d31w2ybspxswhh.cloudfront.net/SM/sisa/boton-seguimiento-ubicacion.png)\n' +
        '\n' +
        '\n' +
        'Día a día estamos sumando nuevas zonas de cobertura para despacho y más locales Santa Isabel para retiro, por eso **te recomendamos revisar la información detallada [aquí](https://www.santaisabel.cl/locales)**.\n' +
        '\n' +
        'El despacho tiene un costo variable de acuerdo a la localidad, y será informado al cliente antes de pagar para su aceptación.\n' +
        '\n' +
        'El servicio de **retiro** cuesta $1 peso y la disponibilidad horaria dependerá del local que elijas. Al seleccionar este servicio, cuando comiences tu pedido, aparecerá una referencia del horario más próximo.\n' +
        '\n' +
        '**Horario de funcionamiento de modos de entrega**\n' +
        '\n' +
        '  - **Para despacho:** 10:00 a 18:30 horas\n' +
        '  - **Para retiro:** 10:30 a 17:30 horas\n' +
        '\n' +
        '>**Nota**: los horarios y las ventanas de despacho podrían variar según la contingencia. Para el retiro del pedido es importante que pases antes de las 17:30 horas.',
      order: 20,
      helpCategory: context.despachoRetiroSisa,
      icon: '/icons/cards/delivery24.svg',
      description: 'Busca cuáles son las zonas donde Jumbo llega a domicilio, en qué horarios y su costo.',
    });

    context.empaqueProductosSisa = em.create(HelpContent, {
      label: 'Empaque de productos',
      reference: '/empaque-productos',
      content:
        '# ¿Cómo empacan los productos del pedido?\n' +
        '\n' +
        'Tenemos un cuidado especial por cada producto y queremos compartir contigo nuestras buenas prácticas:\n' +
        '\n' +
        '- Nos preocupamos del peso y fragilidad de los productos, además de su forma, para que se muevan lo menos posible durante el traslado\n' +
        '- Redoblamos nuestra atención con plátanos, yoghurt, pan, huevos y botellas o envases de vidrio\n' +
        '- Empacamos los productos según su categoría: no comestibles (limpieza, aseo personal o librería) congelados, frutas y verduras, frescos y comestibles (abarrotes, pan o galletas)\n' +
        '- Al embalar productos frescos o congelados, usamos gel refrigerante o bolsas de hielo para mantener la cadena de frío\n' +
        '- No sobrecargamos las cajas, no arrojamos los productos y evitamos la contaminación cruzada: nunca mezclamos alimentos con productos de limpieza, ferretería o que contengan químicos. De hecho, carnicería y pescadería se empacan de manera independiente\n' +
        '- Productos voluminosos, como papel higiénico o comida para perro, van sin embalaje\n' +
        '> **Nota**: al seleccionar tu pedido con retiro, no olvides llevar tu bolsa para recoger tus productos.\n' +
        '\n' +
        'Finalmente, pero no menos importante: nuestro equipo utiliza implementos de higiene como guantes, mascarilla y cofia para el cabello. Además, tiene la instrucción de lavar sus manos cada vez que preparan un pedido.\n' +
        '\n' +
        '> **Nota**: para los casos de retiro del pedido, te ofreceremos sanitizar con amonio cuaternario el exterior de las bolsas o cajas que utilices para recoger tu compra.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=92b057a7363d82e61cd32a9020594305db46f9998f13e0ecc59ae42e181e6920", "invitedReference": "/ayuda/contactanos?data=92b057a7363d82e61cd32a9020594305db46f9998f13e0ecc59ae42e181e6920" }\n' +
        '```\n' +
        '',
      order: 30,
      helpCategory: context.despachoRetiroSisa,
      icon: '/icons/cards/bag.svg',
      description: 'Conoce cómo empacamos tus pedidos.',
    });
    //============ PUNTOS CENCOSUD SISA ============//
    context.informacionPuntosCencosudSisa = em.create(HelpContent, {
      label: 'Información sobre este programa',
      reference: '/informacion-puntos-cencosud',
      content:
        '# ¿Qué son los Puntos Cencosud?\n' +
        '\n' +
        'Es el programa de fidelidad de Cencosud, que le permite a los clientes acumular puntos en todas las compras que realicen en sus marcas para canjearlos por premios. Revisa más detalles:\n' +
        'https://www.puntoscencosud.cl/puntos/',
      order: 10,
      helpCategory: context.puntosCencosudSisa,
      icon: '/icons/cards/information.svg',
      description: 'Descubre el programa de fidelidad que entrega puntos en las compras.',
    });

    context.consultarPuntosCencosudSisa = em.create(HelpContent, {
      label: 'Consultar Puntos Cencosud',
      reference: '/consultar-puntos-cencosud',
      content:
        '# ¿Cómo puedo consultar los puntos Cencosud?\n' +
        '\n' +
        'Debes ingresar en el siguiente link:\n' +
        '[Consultar Puntos Cencosud](https://www.puntoscencosud.cl/puntos/ingresar)',
      order: 20,
      helpCategory: context.puntosCencosudSisa,
      icon: '/icons/cards/payCurrency.svg',
      description: 'Conoce cuántos puntos llevas reunidos por tus compras.',
    });

    context.comprarPuntosCencosudSisa = em.create(HelpContent, {
      label: '¿Se puede comprar con puntos en SantaIsabel.cl?',
      reference: '/comprar-con-puntos-cencosud',
      content:
        '# ¿Se puede comprar con puntos en [SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMI19yu_JuI7gIVCAmRCh1IJQPoEAAYASAAEgJVePD_BwE)?\n' +
        'Lamentablemente por ahora **solo es posible pagar con Puntos Cencosud en locales Santa Isabel**.\n' +
        '\n' +
        'En [SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMI19yu_JuI7gIVCAmRCh1IJQPoEAAYASAAEgJVePD_BwE) puedes pagar con Tarjeta Cencosud Scotiabank, tarjeta de crédito o débito bancarias emitidas en Chile: Visa, MasterCard, American Express o Diners.\n' +
        '\n' +
        'También podrás pagar con tarjetas de débito emitidas en Chile, a través de MercadoPago, quién gestionará las devoluciones de dinero por diferencias en tu pedido.\n' +
        '\n' +
        'Las tarjetas de crédito emitidas en el extranjero, no están habilitadas para comprar en [SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMIq9jtxZiI7gIVl4KRCh2UbA_1EAAYASAAEgKJaPD_BwE)',
      order: 30,
      helpCategory: context.puntosCencosudSisa,
      icon: '/icons/cards/help.svg',
      description: 'Conoce dónde puedes comprar con tus Puntos Cencosud.',
    });
    //============ MODIFICAR DATOS SISA ============//
    context.actualizarDatosClaveSisa = em.create(HelpContent, {
      label: 'Actualizar clave o datos',
      reference: '/actualizar-datos-clave',
      content:
        '# ¿Cómo modificar mis datos?\n' +
        'Luego de registrarte e ingresar a **[SantaIsabel.cl](https://www.santaisabel.cl/?gclid=EAIaIQobChMI19yu_JuI7gIVCAmRCh1IJQPoEAAYASAAEgJVePD_BwE)**, tendrás tu sesión privada donde puedes encontrar:\n' +
        '\n' +
        '- **Mis datos**: (nombre, apellido, fecha de vencimiento, sexo y teléfono) y administración de notificaciones y mails de promociones\n' +
        '- **Mis direcciones**: podrás agregar o eliminar direcciones\n' +
        '- **Mis compras**: donde podrás ver, filtrar, repetir tus pedidos y anular las compras que aún no hayan sido preparadas\n' +
        '- **Mis listas**: donde podrás crear tus listas de compras y guardarlas\n' +
        '\n' +
        '## Cambio de clave\n' +
        '\n' +
        '**Si recuerdas tu clave**: Debes iniciar sesión donde dice “Ingresa”, sección ubicada en la parte superior derecha de la página y luego donde dice “Hola, nombre del cliente”, seleccionando allí “Mis datos”. En la sección de datos personales, elige la opción “Editar clave” para ingresar una nueva clave con las condiciones indicadas.\n' +
        '\n' +
        '**Si no recuerdas tu clave**: En la sección “Ingresa” digita el mail o RUT y aprieta el botón “Actualizar clave” para crear una nueva clave nueva con las condiciones indicadas. Posteriormente, recibirás un mail seguro con el código de verificación que deberás agregar para completar el cambio.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=c342c6c786f0961ef5d5d8fc04ac5150c68fb780da0e6776d9e02c12e67fed23", "invitedReference": "/ayuda/contactanos?data=c342c6c786f0961ef5d5d8fc04ac5150c68fb780da0e6776d9e02c12e67fed23" }\n' +
        '```\n' +
        '',
      order: 10,
      helpCategory: context.modificarDatosSisa,
      icon: '/icons/cards/user.svg',
      description: 'Descubre cómo modificar tu información personal y contraseña.',
    });

    context.agregarNuevaDireccionSisa = em.create(HelpContent, {
      label: 'Agregar nueva dirección',
      reference: '/agregar-nueva-direccion',
      content:
        '# ¿Cómo agrego una nueva dirección de despacho?\n' +
        'Para agregar una nueva dirección en las comunas donde tenemos cobertura, debes seguir los siguientes pasos:\n' +
        '\n' +
        '- Ingresa a tu cuenta en **SantaIsabel.cl**, sección “Mis datos” y luego “Mis direcciones” donde debes pinchar el botón “Agregar nueva dirección”.\n' +
        '- En seguida, escribe tu calle y número; verás desplegarse un listado donde aparecen alternativas con distintas comunas. Elige la que corresponde a tu dirección y luego completa el número de departamento (o casa) e ingresa referencias adicionales si fuese necesario.\n' +
        '- Te mostraremos una imagen del mapa donde se ubica tu dirección para que confirmes. Si no tuviéramos la dirección referenciada, entonces te pediremos mover el pin rojo hasta la zona adecuada.\n' +
        '- Si no tenemos cobertura en la dirección que deseas agregar, te entregaremos una alerta para que intentes con otra ubicación. Puedes revisar la cobertura [aquí](https://www.santaisabel.cl/oferta/retiro-en-tienda?nombre_promo=boton-despachos-18112020).\n' +
        '\n' +
        'Por tu seguridad, cada vez que agregues una nueva dirección, te notificaremos a tu mail registrado en tu cuenta.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 10, "reference": "/ayuda/contactanos?data=c342c6c786f0961ef5d5d8fc04ac5150c68fb780da0e6776d9e02c12e67fed23", "invitedReference": "/ayuda/contactanos?data=c342c6c786f0961ef5d5d8fc04ac5150c68fb780da0e6776d9e02c12e67fed23" }\n' +
        '```\n' +
        '',
      order: 20,
      helpCategory: context.modificarDatosSisa,
      icon: '/icons/cards/location.svg',
      description: 'Conoce cómo agregar nuevas direcciones para el despacho de tu compra.',
    });

    context.eliminarTarjetaSisa = em.create(HelpContent, {
      label: 'Eliminar tarjeta guardada',
      reference: '/eliminar-tarjeta',
      content:
        '# ¿Cómo elimino una tarjeta guardada en mi cuenta?\n' +
        'Para eliminar una tarjeta guardada debes ingresar en tu cuenta a la sección “Mis tarjetas” o al hacer un pedido al llegar al checkout.\n' +
        '\n' +
        'Debes considerar que para eliminar una tarjeta, no deben existir pedidos en curso asociados a la tarjeta, ya que se necesita mantenerla habilitada en el caso de devoluciones por productos faltantes o diferencias de precio por sustitutos.',
      order: 30,
      helpCategory: context.modificarDatosSisa,
      icon: '/icons/cards/creditCard.svg',
      description: 'Conoce cómo eliminar los datos de tus medios de pago.',
    });
    //============ SERVICIO CLIENTE SISA ============//
    context.informacionContactoSisa = em.create(HelpContent, {
      label: 'Información de Contacto',
      reference: '/informacion-de-contacto',
      content:
        '# Información de contacto y locales\n' +
        '\n' +
        '## Santaisabel.cl y Santa Isabel app \n' +
        '\n' +
        'Si necesitas realizar una consulta o reclamo, tenemos los siguientes canales de contacto:\n' +
        '\n' +
        '```CardStaticContent\n' +
        '{"id":1,"icon":"/icons/cards/contacto.svg","label":"","label_mobile":"**Formulario de contacto:** Puedes ingresar reclamos o solicitudes escribiéndonos en nuestro formulario.","reference":"/ayuda/contactanos","actionLabel":"Ir a Formulario","iconWidth":"4rem","iconHeight":"4rem","iconFlagRelative":false,"cardType":"horizontalCard","enabledButton":true,"filledButton":true,"invitedReference":"/ayuda/contactanos"}\n' +
        '```\n' +
        '```CardStaticContent\n' +
        '{"id":2,"icon":"/icons/cards/callcenter.svg","label":"","label_mobile":"**Call Center:** Puedes resolver tus dudas llamándonos a nuestro teléfono de contacto 600 400 2000","reference":"tel:6004002000","actionLabel":"Llamar al Call Center","iconWidth":"4rem","iconHeight":"4rem","iconFlagRelative":false,"cardType":"horizontalCard","enabledButton":true,"filledButton":true,"invitedReference":"tel:6004002000"}\n' +
        '```',
      order: 10,
      helpCategory: context.servicioClienteSisa,
      icon: '/icons/cards/openMail.svg',
      description: 'Conoce cómo te puedes poner en contacto con nosotros.',
    });
    //============ LOCALES SISA ============//
    context.localesSisa = em.create(HelpContent, {
      label: 'Locales Santa Isabel',
      reference: '/locales-santa-isabel',
      content:
        '# Encuentra tu local Santa Isabel\n' +
        'En el siguiente link podrás ingresar la región, comuna y local Santa Isabel que quieres consultar. Revisa su dirección exacta, horarios de funcionamiento y servicios disponibles:  [https://www.santaisabel.cl/locales](https://www.santaisabel.cl/locales)\n' +
        '\n' +
        '## Preguntas Frecuentes\n' +
        '### ¿Cómo puedo conocer el stock de un producto en un local?\n' +
        'Tienes que llamar a **Servicio al Cliente**, al 600 400 2000, donde los ejecutivos cuentan con información en línea de algunos productos, no de todos. Quedan excluidos productos como el pan fresco, tortas o pastas.\n' +
        '\n' +
        'Recuerda que independiente de la información de stock, las unidades de cada producto no se pueden asegurar, ya que el stock puede agotarse en el transcurso que un cliente se acerca a un local.\n' +
        '\n' +
        '### ¿Qué hago si perdí un objeto de valor en un local?\n' +
        'Para recuperar un objeto olvidado en un local Santa Isabel debes contactarte a **Servicio al Cliente** (600 400 2000) para que los ejecutivos ingresen una solicitud al local específico. Te solicitarán hora aproximada, fecha, local Santa Isabel, pasillo o caja (según sea el caso), características detalladas del objeto, teléfono celular y mail.\n' +
        '\n' +
        'El personal del local Santa Isabel se contactará con el cliente en un plazo de 48 horas para informar si encontró el objeto perdido.',
      order: 1,
      helpCategory: context.localesSisa,
      icon: '/icons/cards/shop.svg',
      description: '',
    });
  }
}
