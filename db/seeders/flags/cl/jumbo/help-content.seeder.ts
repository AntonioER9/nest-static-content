import { EntityManager, Dictionary } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { HelpContent } from 'modules/content/help-category/entities/help-content.entity';

export class HelpContentJumboSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    //============ COMPRAR JUMBO ============//
    context.crearCuentaJumbo = em.create(HelpContent, {
      label: 'Crear cuenta',
      reference: '/crear-cuenta',
      content:
        '# Crear cuenta\n' +
        '## ¿Cómo crear una cuenta en Jumbo.cl?\n' +
        'Si quieres crear una cuenta en Jumbo.cl, sigue estos simples pasos:\n' +
        '-   Tienes que dirigirte a la opción “Regístrate”, ubicada en la parte superior derecha de la página, para ingresar tu nombre, apellido y mail. Luego debes crear una clave con las siguientes condiciones: mínimo 8 caracteres, alfanumérica, 1 minúscula y 1 mayúscula.\n' +
        '-   Para finalizar el registro, recibirás un mail seguro con un código de verificación que deberás ingresar en el formulario. Si no te llega el mail, recuerda revisar en tu bandeja de entrada, correos no deseados o spam.\n' +
        '\n' +
        'Cuando ingreses por primera vez, debes elegir el local de retiro o crear una dirección de despacho:\n' +
        '-   Escribe tu calle y número: verás desplegarse un listado donde aparecen diferentes alternativas con distintas comunas. Elige la que corresponda a tu dirección. Luego, si aplica, completa el número de departamento (o casa) e ingresa referencias adicionales si fuese necesario.\n' +
        '-   Te mostraremos una imagen del mapa donde se ubica tu dirección para que confirmes. Si no tuviéramos la dirección referenciada, entonces te pediremos mover el pin rojo hasta la zona correcta.\n' +
        '-   Si no tenemos cobertura en la dirección que deseas agregar, el sistema te entregará una alerta para que intentes con otra ubicación.\n' +
        '\n' +
        '## Si se cae el sitio web o tu lista de compra\n' +
        'Cuando comiences a comprar, si el sitio de Jumbo.cl se cae o se borra tu lista, te recomendamos cambiar de navegador, probar en modo incógnito o intentar 30 minutos más tarde.\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 1,
      helpCategory: context.comprarJumbo,
      icon: '/icons/cards/user.svg',
      description: 'Infórmate sobre cómo registrarte y comenzar a comprar en Jumbo.cl y Jumbo app.',
    });

    context.comoHacerPedidoJumbo = em.create(HelpContent, {
      label: 'Cómo hacer un pedido',
      reference: '/como-hacer-pedido',
      content:
        '# ¿Cómo hacer un pedido?\n' +
        '## Realizar pedido\n' +
        'Para realizar una compra debes registrarte en [Jumbo.cl](https://www.jumbo.cl/) o ingresar a tu cuenta.\n' +
        '\n' +
        'Luego, al agregar el primer producto al carro, deberás indicar una dirección de despacho o un local de retiro. Una vez que hayas seleccionado todos los productos que necesitas, debes pinchar el botón “Hacer pedido” ubicado en el carro (esquina superior derecha).\n' +
        '\n' +
        'A continuación, si todavía no completas tus datos personales, te pediremos RUT y teléfono para luego seleccionar una fecha y horario de entrega.\n' +
        '\n' +
        'En seguida, agrega un medio de pago:\n' +
        '-   **Tarjeta Cencosud Scotiabank** (ingresando los primeros 6 números).\n' +
        '-   **Tarjeta de crédito emitida en Chile** (con el número de tarjeta, fecha de vencimiento y el código de seguridad que está al reverso).\n' +
        '-   **Tarjeta de débito emitida en Chile** (con el número de tarjeta, fecha de vencimiento y el código de seguridad que está al reverso, también debes agregar la cuenta bancaria en donde quieres que se te reintegre el dinero en caso de devoluciones).\n' +
        '\n' +
        'Completa todos los datos solicitados y ya estaremos procesando tu pedido.\n' +
        '\n' +
        '## Horarios disponibles\n' +
        'Cuando comiences a armar tu pedido y elijas un modo de entrega, tu dirección de despacho o local para retiro, te mostraremos un mensaje bajo el logotipo de [Jumbo.cl](https://www.jumbo.cl/) con la disponibilidad de entrega más próxima (con fecha y hora). Recuerda que esa información es solo una referencia y podría cambiar al momento de hacer tu pedido.\n' +
        '\n' +
        'Al llegar al checkout te confirmaremos los horarios disponibles y el costo de la entrega.\n' +
        '\n' +
        '### Compras anteriores\n' +
        '\n' +
        'Para revisar posteriomente tus compras, tienes que ingresar a tu sesión, con mail o RUT y clave. Luego se te desplegarán todas las secciones de tu cuenta, entre ellas Mis compras, donde podrás ver el detalle de tus pedidos e, incluso, repetir esa misma compra de forma fácil y rápida.\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 2,
      helpCategory: context.comprarJumbo,
      icon: '/icons/cards/help.svg',
      description: 'Aprende a agregar productos en tu carro de compras.',
    });

    context.buscarProductosJumbo = em.create(HelpContent, {
      label: 'Buscar productos y stock',
      reference: '/buscar-productos',
      content:
        '# Buscar productos y stock\n' +
        '## ¿Cómo buscar productos?\n' +
        'Existen tres formas para que puedas encontrar productos en [Jumbo.cl](https://www.jumbo.cl)\n' +
        '-   **Búsqueda por ofertas:** además de las promociones destacadas en la página de inicio, podrás ver todos los productos rebajados pinchando en la categoría “Ofertas”. Una vez dentro, podrás filtrarlos por categoría o marca.\n' +
        '\n' +
        '    ![oferta-img/90px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/JUMBO_CCMR-32167_1.png)\n' +
        '\n' +
        '-   **Búsqueda por categorías:** navega por las categorías agrupadas en Supermercado o ingresa rápidamente a las categorías más visitadas en el menú principal (Lácteos, Despensa, Frutas y Verduras, Limpieza, Carnes Rojas, Botillería y Mascotas)\n' +
        '\n' +
        '    ![categoria-img/720px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/JUMBO_CCMR-32167_2.png)\n' +
        '\n' +
        '-   **Búsqueda por palabras claves:** el buscador superior del sitio te ayudará a encontrar por palabras clave un producto específico (ejemplo: leche). Como resultado, te mostraremos una lista de productos correspondientes a la palabra ingresada.\n' +
        '\n' +
        '    ![busqueda-img/480px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/JUMBO_CCMR-32167_3.png)\n' +
        '\n' +
        'No olvides que también puedes navegar por todo el sitio de Jumbo.cl para revisar ofertas, promociones y productos destacados.\n' +
        '\n' +
        '## Stock de productos en Jumbo.cl\n' +
        'Cuando ingresas a tu sesión, seleccionas un modo de entrega y dirección de despacho o local de retiro, te mostraremos los productos disponibles en el **local Jumbo** donde se hará la recolección de tu pedido (asignado según cercanía y capacidad). Sin embargo, ya que tu pedido se prepara en otro momento, es posible que algunos productos ya no estén disponibles.\n' +
        '\n' +
        'En ese caso nos contactaremos contigo para ofrecerte alternativas o sustitutos. Si no pudiéramos comunicarnos contigo o no tener sustitutos adecuados para ofrecerte, los productos que no se envíen serán descontados de la boleta.\n' +
        '\n' +
        '> **Nota**: como tu pedido se prepara en un momento distinto a tu compra, algunos productos podrían no estar disponibles. Te llamaremos para ofrecerte alternativas.\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 3,
      helpCategory: context.comprarJumbo,
      icon: '/icons/cards/bag.svg',
      description: 'Conoce cómo elegir tus productos y su disponibilidad.',
    });

    context.carroCompraJumbo = em.create(HelpContent, {
      label: 'Carro de compras',
      reference: '/carro-compra',
      content:
        '# Carro de compras\n' +
        '## ¿Cómo funciona el carro de compras?\n' +
        'En la esquina superior derecha, al lado de tu sesión, encontrarás tu carro de compras. Allí aparecerán todos los productos que agregaste en tu pedido.\n' +
        '-   Para aumentar la cantidad de productos, deberás hacerlo presionando las flechas que se encuentran al lado de cada producto.\n' +
        '-   Si quieres eliminar algún producto de tu carro, deberás presionar “eliminar”.\n' +
        '-   Para ver el detalle de cada producto, debes hacer clic en la imagen de este.\n' +
        '\n' +
        'Si decides salir del sitio y volver más tarde, al reingresar a **Jumbo.cl** podrás rescatar ese carro y continuar con tu compra. También podrás guardarlo como una lista, vaciarlo o finalizar tu compra al pinchar “Hacer pedido”.\n' +
        '\n' +
        'Debes considerar que el carro de Jumbo App es independiente del carro de Jumbo.cl, por lo tanto el carro que armes en el sitio web Jumbo.cl -desde tu computador o celular- no se verá reflejado en la App.' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 4,
      helpCategory: context.comprarJumbo,
      icon: '/icons/cards/shoppingCart.svg',
      description: '',
    });

    context.nuevaDireccionJumbo = em.create(HelpContent, {
      label: 'Agregar nueva dirección',
      reference: '/nueva-direccion',
      content:
        '# Agregar nueva dirección\n' +
        '## ¿Cómo agrego una nueva dirección de despacho?\n' +
        'Para agregar una nueva dirección en las comunas donde tenemos cobertura, debes seguir los siguientes pasos:\n' +
        '-   Ingresa a tu cuenta en **Jumbo.cl**, sección “Mis datos” y luego “Mis direcciones” donde debes pinchar el botón “Agregar nueva dirección”\n' +
        '-   En seguida, escribe tu calle y número; verás desplegarse un listado donde aparecen alternativas con distintas comunas. Elige la que corresponde a tu dirección y luego completa el número de departamento (o casa) e ingresa referencias adicionales si fuese necesario.\n' +
        '-   Te mostraremos una imagen del mapa donde se ubica tu dirección para que confirmes. Si no tuviéramos la dirección referenciada, entonces te pediremos mover el pin rojo hasta la zona adecuada.\n' +
        '-   Si no tenemos cobertura en la dirección que deseas agregar, el sistema te entregará una alerta para que intentes con otra ubicación.\n' +
        '\n' +
        'Por tu seguridad, cada vez que agregues una nueva dirección, te notificaremos a tu mail registrado en tu cuenta.\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 5,
      helpCategory: context.comprarJumbo,
      icon: '/icons/cards/location.svg',
      description: 'Conoce cómo agregar nuevas direcciones para el despacho de tu compra.',
    });

    context.politicasSeguridadJumbo = em.create(HelpContent, {
      label: 'Políticas de Seguridad',
      reference: '/politicas-seguridad',
      content:
        '# Políticas de Seguridad\n' +
        '\n' +
        'En Jumbo.cl y Jumbo app te queremos cuidar. Evita ser víctima de fraudes siguiendo estos consejos:\n' +
        '\n' +
        '## Protege tu cuenta\n' +
        '\n' +
        ' Nunca te pediremos tu usuario y/o contraseña para ayudarte con alguna compra o problema que tengas. **No necesitamos tus claves** para resolver tus consultas.\n' +
        '\n' +
        '## Crea una clave segura\n' +
        'Crea una clave de acceso que sea difícil que se pueda adivinar. En lo posible que contenga mayúsculas y minúsculas, números y caracteres especiales.\n' +
        '\n' +
        '``````Accordion\n' +
        '{ "message": "Phishing o robo de datos", "content": "-- Desde [Jumbo.cl](http://www.jumbo.cl) nunca te enviaremos correos, mensajes al teléfono (SMS) o whatsapp solicitando que ingreses el número de alguna de tus tarjetas de crédito o débito. Así como tampoco te pediremos correos electrónicos o claves secretas. En [Jumbo.cl](http://www.jumbo.cl) solicitamos los datos de la cuenta bancaria para realizar reembolsos y estos se preguntan solo una vez. Si tienes dudas, contáctate con nosotros a través de Facebook, Twitter o Instagram y te orientaremos." }\n' +
        '``````\n' +
        '\n' +
        '## Página web y redes sociales\n' +
        '\n' +
        '```AccordionList\n' +
        '{ "list": [{ "message": "Redes sociales", "content": "Facebook: facebook.com/JumboChile/-- -- Instagram: @jumbochile-- -- Twitter: @JumboChile-- -- YouTube: youtube.com/user/SupermercadoJumbo-- -- Whatsapp: (Solo clientes Prime) +56 9 4154 0961--" },\n' +
        '{ "message": "Nuestra página oficial y correos electrónicos", "content": "Nuestro único sitio oficial es [www.jumbo.cl](http://www.jumbo.cl) y en aplicaciones para el celular, Jumbo app. Además, cuando te llegue un correo de [Jumbo.cl](http://www.jumbo.cl), observa bien cuál es el correo del remitente y que corresponda a los nuestros: noreply@jumbo.cl" }\n' +
        ']}\n' +
        '```\n' +
        '\n' +
        '##  Consejos\n' +
        'Te invitamos a [conocer más consejos](https://www.tarjetacencosud.cl/publico/comun/landing/no-mas-fraude) para evitar caer en fraudes.' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 6,
      helpCategory: context.comprarJumbo,
      icon: '/icons/cards/text.svg',
      description: '',
    });

    context.agregarProductosJumbo = em.create(HelpContent, {
      label: 'Agregar productos al pedido',
      reference: '/agregar-productos',
      content:
        '# Agregar productos al pedido\n' +
        '## ¿Cómo agregar productos si ya hice el pedido?\n' +
        '\n' +
        '  \n' +
        '\n' +
        'Si olvidaste añadir productos en tu pedido y quieres agregarlos a tu carro, tenemos 3 formas para que lo puedas realizar:\n' +
        '\n' +
        '  \n' +
        '\n' +
        '## 1. Desde Mis compras\n' +
        '\n' +
        '\n' +
        '```IconTable\n' +
        '{"textPosition":"bottom", "columns":1, "columnsDesktop":4, "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso1-1-agregar-productos.svg", "text": "Ingresa a Mis Compras y haz clic en Agregar productos.", "weight": "normal", "size": "5em"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso1-2-agregar-productos.svg", "text": "Escribe en el buscador qué es lo que necesitas.", "weight": "normal", "size": "5em"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso1-3-agregar-productos.svg", "text": "Agrega el producto que necesitas, la cantidad y haz clic en Aceptar.", "weight": "normal", "size": "5em"},{"src": "https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso1-4-agregar-productos.svg", "text": "¡Listo! Tus productos fueron agregados.", "weight": "normal", "size": "5em"}]}\n' +
        '```\n' +
        '\n' +
        '\n' +
        '## 2. Chat con shopper\n' +
        'Si el shopper ya comenzó a preparar tu compra, puedes solicitarle productos mediante el chat que está disponible en Mis compras.\n' +
        '\n' +
        '\n' +
        '```IconTable\n' +
        '{"textPosition":"bottom", "columns":1, "columnsDesktop":2, "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso2-1-agregar-productos.svg", "text": "Ingresa a Mis compras, elige el pedido en preparación y haz clic en Chat con tu shopper.", "weight": "normal", "size": "5em"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso2-2-agregar-productos.svg", "text": "Escribe qué es lo que necesitas agregar en tu pedido.", "weight": "normal", "size": "5em"}]}\n' +
        '```\n' +
        '\n' +
        '\n' +
        '\n' +
        '## 3. Llamado del shopper\n' +
        '\n' +
        'También puedes esperar el llamado telefónico del shopper, donde además te informará la disponibilidad de los productos que solicitaste.' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 8,
      helpCategory: context.comprarJumbo,
      icon: '/icons/cards/addProducts.svg',
      description: 'Conoce cómo puedes agregar más productos después de hacer tu pedido.',
    });

    context.pedidoProgramadoJumbo = em.create(HelpContent, {
      label: 'Pedido programado',
      reference: '/pedido-programado',
      content:
        '# Pedido programado\n' +
        '## ¿Cómo programar un pedido?\n' +
        '\n' +
        'Puedes dejar programada una lista con productos y elegir con anticipación con qué frecuencia y cómo prefieres que te la entreguemos.\n' +
        '\n' +
        'En el momento en que nuestros shoppers comiencen a preparar tu pedido, te llamarán o te llegará una notificación para que puedas responderles en caso de que haya que cambiar productos, hacer reemplazos o si quieres agregar algo más.\n' +
        '\n' +
        '&nbsp;\n' +
        '\n' +
        '**Su cobro es igual a los demás pedidos:** una parte se carga a la tarjeta cuando la compra es ingresada y el cobro final cuando nuestros shoppers finalizan el pedido.\n' +
        '\n' +
        '&nbsp;\n' +
        '\n' +
        'Comienza a realizar tus **pedidos programados**.\n' +
        '\n' +
        '&nbsp;\n' +
        '\n' +
        '![pedido-programado](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/pedido-programado.svg) ![pedido-programado-2](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/pedido-programado-2.svg)\n' +
        '\n' +
        '&nbsp;\n' +
        '\n' +
        '```AccordionList\n' +
        '{ "list": [{ "message": "**Dónde se puede crear**", "content": "Ingresando a tu cuenta en Jumbo.cl o Jumbo app, en la sección Mis listas.-- -- Además puedes elegir con qué frecuencia se quiere recibir la compra (semanal, quincenal, mensual, etc.) de qué forma quieres recibirla (retiro al auto o despacho a domicilio)." }, { "message": "**Cómo te informaremos sobre tu pedido**", "content": " - Al suscribir la lista programada, recibirás un correo con los detalles de la inscripción.-- -  Dos días antes de la fecha de entrega de tu compra, te enviaremos un correo con los precios de los productos de tu lista y te avisaremos si hay alguno sin stock." }, { "message": "**Reprogramar, pausar o cancelar la lista**", "content": "Si quieres reprogramar tu lista, pausarla o cancelar el servicio, puedes hacerlo ingresando a tu cuenta en jumbo.cl o Jumbo app, desde la sección [Mis compras](https://ayuda.jumbo.cl/ayuda/login?servicio=mis-compras) con un máximo de 48 horas antes de que comencemos a armar tu compra." }]}\n' +
        '```\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 7,
      helpCategory: context.comprarJumbo,
      icon: '/icons/cards/scheduledOrder.svg',
      description: 'Descubre cómo ver qué productos agregaste en tu pedido.',
    });
    //============ PROBLEMAS PEDIDO JUMBO ============//
    context.productoCobradoNoEnviadoJumbo = em.create(HelpContent, {
      label: 'Producto cobrado y no enviado',
      reference: '/producto-cobrado-no-enviado',
      content:
        '# Producto cobrado y no enviado\n' +
        'Si el producto aparece cobrado en tu boleta, pero no llegó en el pedido, ingresa en [nuestro formulario](<URL_HELP_FORM>?data=a2f774ea94b63f88c2614055391d9cecb0633df9c69c11dff5109cfb456dd665) para gestionar la devolución de tu dinero al medio de pago utilizado. Si tienes alguna observación, puedes indicarla en “detalles de la solicitud” ubicado al final del formulario.\n' +
        '\n' +
        '## No llegaron todos los productos\n' +
        'Recuerda que nuestros shoppers preparan tu pedido directamente en nuestros locales. Si al momento de preparar tu compra en el local Jumbo no tuviéramos los productos que elegiste, te llamaremos para ofrecerte sustitutos. Si no aceptas las alternativas ofrecidas por el shopper, esos productos quedarán como faltantes; es decir, no se cobrarán ni se enviarán a tu domicilio.\n' +
        '\n' +
        'Si tu caso corresponde a un producto que fue cobrado pero no lo recibiste, completa el formulario para que podamos ayudarte.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{"id":6,"reference":"/ayuda/contactanos?data=a2f774ea94b63f88c2614055391d9cecb0633df9c69c11dff5109cfb456dd665","invitedReference":"/ayuda/contactanos?data=a2f774ea94b63f88c2614055391d9cecb0633df9c69c11dff5109cfb456dd665"}\n' +
        '```\n' +
        '\n' +
        '## Productos no disponibles\n' +
        'Cuando ingresas a tu cuenta y seleccionas un modo de entrega y dirección de despacho o local de retiro, el sitio te mostrará los productos disponibles en el local donde se hará la recolección de tu pedido (asignado según cercanía y capacidad). Sin embargo, ya que tu pedido se prepara en otro momento, es posible que algunos de ellos ya no estén disponibles al momento de prepararlo.\n' +
        '\n' +
        'En ese caso te llamaremos para ofrecerte alternativas o sustitutos. Si no pudiéramos contactarnos contigo o no tuviéramos sustitutos para ofrecerte, el valor de los productos que no se envíen será restituido en tu tarjeta de crédito al momento de emitir la boleta.' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 1,
      helpCategory: context.problemasPedidoJumbo,
      icon: '/icons/cards/cancellation.svg',
      description:
        'Conoce cómo solicitar el reembolso de un producto que no llegó en tu pedido pero que aparece en la boleta.',
    });

    context.problemasSustitucionProductosJumbo = em.create(HelpContent, {
      label: 'Problemas con sustitución de productos',
      reference: '/problemas-sustitucion-productos',
      content:
        '# Problemas con sustitución de productos\n' +
        'Nuestros shoppers preparan tu pedido directamente en nuestros locales. Si al momento de recolectar tus productos no encontramos suficientes unidades para abastecer tu solicitud, nos contactaremos contigo para ofrecerte sustitutos.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{"id":6,"reference":"/ayuda/contactanos?data=6d7568872f58f51661f46c3b55f777a4f3e52547b8809f08461139d4fbc9c248","invitedReference":"/ayuda/contactanos?data=6d7568872f58f51661f46c3b55f777a4f3e52547b8809f08461139d4fbc9c248"}\n' +
        '```\n' +
        '\n' +
        '## Productos no disponibles\n' +
        'Cuando ingresas a tu cuenta y seleccionas un modo de entrega y dirección de despacho o local de retiro, el sitio te mostrará los productos disponibles en el local donde se hará la recolección de tu pedido (asignado según cercanía y capacidad). Sin embargo, ya que tu pedido se prepara en otro momento, es posible que algunos de ellos ya no estén disponibles al momento de prepararlo.\n' +
        '\n' +
        'En ese caso te llamaremos para ofrecerte alternativas o sustitutos. Si no pudiéramos contactarnos contigo o no tuviéramos sustitutos para ofrecerte, el valor de los productos que no se envíen será restituido en tu tarjeta de crédito al momento de emitir la boleta.' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 2,
      helpCategory: context.problemasPedidoJumbo,
      icon: '/icons/cards/bagReturn.svg',
      description:
        'Infórmate sobre cómo puedes solicitar ayuda si tienes problemas con los productos que te sustituyeron.',
    });

    context.atrasoEntregaPedidoJumbo = em.create(HelpContent, {
      label: 'Atraso en entrega del pedido',
      reference: '/atraso-entrega-pedido',
      content:
        '# Atraso en entrega del pedido \n' +
        '## ¿Cómo seguir mi pedido? \n' +
        'Primero, te recomendamos revisar el estado de tu pedido en la sección del mismo nombre en **Jumbo.cl.** Esta se despliega en la esquina superior derecha cuando ya ingresaste a tu sesión:\n' +
        '\n &nbsp; \n' +
        '\n &nbsp; \n' +
        '![Img/720px](https://assets.jumbo.cl/uploads/2020/08/ubicacio%CC%81n_estado_del_pedido.jpg)\n' +
        '\n' +
        'Cuando tu pedido ya está en ruta, te enviaremos un mensaje de texto al celular registrado en tu cuenta. Si hay algún atraso en la entrega, te enviaremos un mail con una nueva fecha programada.\n' +
        'Ahora bien, si tu pedido no llegó en el horario confirmado y no recibiste aviso de reprogramación, ingresa los datos a continuación y te contactaremos a la brevedad.\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 3,
      helpCategory: context.problemasPedidoJumbo,
      icon: '/icons/cards/delivery24.svg',
      description: 'Descubre qué hacer si tu compra no llegó en el horario avisado.',
    });

    context.productoMalEstadoJumbo = em.create(HelpContent, {
      label: 'Producto en mal estado o descongelado',
      reference: '/producto-mal-estado',
      content:
        '# Producto en mal estado o descongelado\n' +
        '## Producto en mal estado\n' +
        '\n' +
        'Si en tu pedido de jumbo.cl o Jumbo app recibes un producto en mal estado, comunícate con nosotros mediante los canales de contacto para que resolvamos el problema.\n' +
        '\n' +
        '## Producto dañado, incompleto o que le faltan piezas\n' +
        '\n' +
        'Si en tu pedido de jumbo.cl o Jumbo app recibes un producto que está dañado, debes contactarnos en un plazo máximo de 24 horas desde que lo recibiste a través del   [formulario de contacto.](https://ayuda.jumbo.cl/ayuda/contactanos)\n' +
        '\n' +
        '&nbsp; \n' +
        '\n' +
        'Si el producto está incompleto o le faltan piezas, **coordinaremos contigo su retiro y cambio**, previa consulta acerca de las condiciones en las que llegó a tus manos.\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 4,
      helpCategory: context.problemasPedidoJumbo,
      icon: '/icons/cards/cancellation.svg',
      description: 'Conoce qué hacer si te llega un producto que no cumple con nuestra calidad de siempre.',
    });

    context.productoDanadoJumbo = em.create(HelpContent, {
      label: 'Producto dañado o incompleto',
      reference: '/producto-danado',
      content:
        '# Producto dañado, incompleto o faltan piezas\n' +
        'Si recibes un producto dañado en tu pedido de Jumbo.cl, deberás notificarlo en un plazo de 24 horas luego de recibido el pedido.\n' +
        '\n' +
        'Situación similar con los productos incompletos o donde falten piezas, aquí te preguntaremos por las condiciones de recepción del producto (caja abierta, sin sello u otros) y se programará su retiro y cambio del producto en las ventanas de despacho disponibles. Si la notificación llega fuera de plazo, se derivará el caso al área correspondiente para su evaluación.\n' +
        '\n' +
        'Te agradecemos que completes los siguientes datos para resolver este inconveniente:\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 5,
      helpCategory: context.problemasPedidoJumbo,
      display: false,
      icon: '/icons/cards/cancellation.svg',
      description: 'Infórmate qué hacer si te llega un producto al que le falten piezas o dañado.',
    });

    context.productoNoSolicitadoJumbo = em.create(HelpContent, {
      label: 'Producto no solicitado y cobrado',
      reference: '/producto-no-solicitado',
      content:
        '# Producto no solicitado y cobrado\n' +
        'En este caso verificaremos que el producto no esté registrado en la solicitud del pedido y esté cobrado en la boleta. Para gestionarlo, por favor ingresa los siguientes datos.\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 6,
      helpCategory: context.problemasPedidoJumbo,
      icon: '/icons/cards/cancellation.svg',
      description: 'Conoce qué hacer si te llega un producto que no solicitaste y fue cobrado.',
    });

    context.ofertaNoAplicadaJumbo = em.create(HelpContent, {
      label: 'Oferta no aplicada',
      reference: '/oferta-no-aplicada',
      content:
        '# Oferta no aplicada\n' +
        'Recuerda revisar la confirmación de tu pedido, donde las ofertas deben estar aplicadas en el valor final de la compra.\n' +
        '\n' +
        'La boleta de compra en **Jumbo.cl**, a diferencia de la boleta de una compra presencial en los locales Jumbo, no registra el descuento aplicado en cada producto.\n' +
        '\n' +
        'Puedes ver todos los descuentos aplicados en “Mis compras” en tu cuenta de **Jumbo.cl** y **Jumbo App**.\n' +
        '\n' +
        'Si esta información no ha resuelto tus dudas, cuéntanos sobre tu problema a continuación:\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 7,
      helpCategory: context.problemasPedidoJumbo,
      icon: '/icons/cards/bag.svg',
      description: 'Conoce cómo ver si fueron aplicadas las ofertas en tu compra.',
    });

    context.meLlegoOtroPedidoJumbo = em.create(HelpContent, {
      label: 'Me llegó otro pedido',
      reference: '/me-llego-otro-pedido',
      content:
        '# Me llegó otro pedido\n' +
        'Si has recibido bolsas que no te corresponden, que aparecen con el dato de otro cliente, o recibes productos que no solicitaste (sin considerar los productos reemplazados), contáctate con nosotros rellenando [nuestro formulario](/ayuda/contactanos?data=b9d15f63087409edebcd63620b7fc0735da3b650364fb78e1bb8e8492d793a9b).' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 8,
      helpCategory: context.problemasPedidoJumbo,
      icon: '/icons/cards/cancellation.svg',
      description: 'Infórmate sobre qué hacer si te llega la compra de otra persona.',
    });

    context.comoIngresarSolicitudJumbo = em.create(HelpContent, {
      label: '¿Cómo ingresar una solicitud?',
      reference: '/como-ingresar-solicitud',
      content:
        '# ¿Cómo ingresar una solicitud?  \n' +
        '## Accede con tu cuenta  \n' +
        '\n' +
        'Para crear una solicitud o reclamo por tu caso en el  [Formulario de contacto](<URL_HELP_FORM>) , primero debes ingresar con tu cuenta o ingresar con tu correo electrónico.\n' +
        '\n' +
        '![login](https://d31w2ybspxswhh.cloudfront.net/TxD/jumbo/login-solicitud.svg)\n' +
        '\n' +
        '## Completa el Formulario de contacto\n' +
        '\n' +
        'Cuando estés en el Formulario para ingresar tu solicitud o reclamo, asegúrate de llenarlo siguiendo los pasos que te mostramos a continuación:\n' +
        '\n &nbsp; \n' +
        '``````IconTable\n' +
        '{"textPosition":"bottom", "renderImages":"true", "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/step1.png", "text": "Elige un tipo de solicitud y motivo.", "weight": "normal", "height": "272", "width": "240"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/step2.png", "text": "Selecciona la Orden de compra.", "weight": "normal", "height": "272", "width": "240"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/step3.png", "text": "Completa los datos y envía la solicitud.", "weight": "normal", "height": "272", "width": "240"}]}\n' +
        '``````\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 0,
      helpCategory: context.problemasPedidoJumbo,
      icon: '/icons/cards/information.svg',
      description: 'Revisa como ingresar una solicitud o reclamo  por tu caso en el Formulario de contacto',
    });
    //============ MEDIOS PAGO JUMBO ============//
    context.problemasCobroDebitoJumbo = em.create(HelpContent, {
      label: 'Problemas con cobro en tarjeta de débito',
      reference: '/problemas-cobro-debito',
      content:
        '# Problemas con cobro en tarjeta de débito\n' +
        '## Tuve un problema con el cobro en mi tarjeta de débito\n' +
        'Te recordamos que cuando compras en [Jumbo.cl](https://www.jumbo.cl/) en la cuenta asociada a tu tarjeta de débito verás una transacción correspondiente al monto del pedido ingresado.\n' +
        '\n' +
        'Si existieran diferencias entre el monto del pedido original y el recolectado, recibirás una notificación por email indicando que tienes un saldo a favor, derivado de la diferencia antes mencionada.\n' +
        '\n' +
        '> **Nueva forma de cobro:** Para mejorar tu experiencia de compra hemos creado un nuevo sistema de cobro en las tarjetas de crédito y débito. Infórmate [aquí](/ayuda/medios-pago/cobro-tarjeta).' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 1,
      helpCategory: context.mediosPagoJumbo,
      icon: '/icons/cards/creditCard.svg',
      description: 'Conoce qué hacer si tienes problemas con el cobro en tu tarjeta de débito.',
    });

    context.problemasCobroCreditoJumbo = em.create(HelpContent, {
      label: 'Problemas con cobro en tarjeta de crédito',
      reference: '/problemas-cobro-credito',
      content:
        '# Problemas con cobro en tarjeta de crédito\n' +
        '## Tengo problemas para pagar con mi tarjeta de crédito\n' +
        'Si estás utilizando una tarjeta de crédito emitida en Chile y no puedes avanzar en el pago, tienes que verificar el mensaje en pantalla:\n' +
        '\n' +
        '-   Si el mensaje que se despliega indica que los datos de la tarjeta se encuentran incorrectos, debes volver a ingresar los dígitos del frente de la tarjeta y el código de verificación (CVV)\n' +
        '-   Antes de pagar tu primer pedido, recuerda siempre marcar el recuadro para aceptar Términos y Condiciones\n' +
        '-   Si persiste la imposibilidad para pagar, la recomendación es contactar a la entidad bancaria o emisora de tarjeta para chequear si está habilitada para compras por internet\n' +
        '-   Si el problema es de comunicación con Transbank, entonces hay que esperar unos 30 minutos antes de intentar nuevamente\n' +
        '\n' +
        '> **Nueva forma de cobro:** Para mejorar tu experiencia de compra hemos creado un nuevo sistema de cobro en las tarjetas de crédito y débito. Infórmate [aquí](/ayuda/medios-pago/cobro-tarjeta).\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 2,
      helpCategory: context.mediosPagoJumbo,
      icon: '/icons/cards/creditCard.svg',
      description: 'Infórmate qué hacer si presentas problemas con tu tarjeta de crédito.',
    });

    context.mediosPagoDisponiblesJumbo = em.create(HelpContent, {
      label: 'Medios de pago disponibles',
      reference: '/medios-pago',
      content:
        '# Medios de pago disponibles\n' +
        '## Medios de pago\n' +
        '\n' +
        '\n' +
        'Las formas de pago para compras online en jumbo.cl y Jumbo app son:\n' +
        '\n' +
        ' - Tarjetas de crédito bancarias habilitadas **emitidas en Chile**.\n' +
        ' - Tarjetas de débito.\n' +
        ' - Tarjetas de prepago que funcionen como débito, **emitidas en Chile**.\n' +
        ' -  Gift card Cencosud\n' +
        '\n' +
        'Cuando registres una tarjeta en tu cuenta de jumbo.cl, Jumbo app, se hará un cobro inicial de $50 para validar tu medio de pago. Este monto será devuelto en un máximo de 24 horas. Revisa cuáles son los [términos legales.](https://www.jumbo.cl/informaciones-legales/terminos-y-condiciones#topic-11)\n' +
        'Te recomendamos revisar antes de realizar el pago de tu pedido si tu tarjeta está autorizada para esta transacción.\n' +
        '\n' +
        '\n' +
        '> **Nota:** De momento no se pueden utilizar Puntos Cencosud como medio de pago.' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 3,
      helpCategory: context.mediosPagoJumbo,
      icon: '/icons/cards/wallet.svg',
      description: 'Conoce cuáles son los medios de pago disponibles para comprar en Jumbo.cl y Jumbo app.',
    });

    context.cobroTarjetaJumbo = em.create(HelpContent, {
      label: '¿Cómo se realiza el cobro en la tarjeta?',
      reference: '/cobro-tarjeta',
      content:
        '# ¿Cómo se realiza el cobro en mi tarjeta?\n' +
        '## ¿Cómo se realiza el cobro en mi tarjeta?\n' +
        '\n' +
        'Para comprar en [Jumbo.cl](https://www.jumbo.cl/) o en la Jumbo App, puedes usar tu tarjeta de crédito o débito.\n' +
        '\n' +
        'Al momento de realizar tu pedido, se realizará una primera transacción en la tarjeta de crédito o débito que seleccionaste de pago, que corresponde al 90% del total de tu compra.  \n' +
        'Una vez que tus productos hayan sido recolectados y pasados por caja, se emitirá un segundo cobro correspondiente a las diferencias del monto, si es que hubieran, por los productos que serán efectivamente entregados.\n' +
        '\n' +
        'De esta forma, no se facturarán los artículos faltantes, pero sí se agregarán al cobro, en caso de haberlos, aquellos productos que sumaste al pedido durante el llamado telefónico con el picker. Debes tener en consideración que los valores a cobrar corresponderán al precio exhibido en la sala de ventas, los cuales podrían tener una diferencia con el valor publicado en la web.\n' +
        '\n' +
        'Para los productos a granel, se cobrará la cantidad real correspondiente al peso del producto entregado.\n' +
        '\n' +
        'En caso de que no estuviesen todos los productos que solicitaste y hubiese una diferencia a favor, se te realizará una devolución a tu tarjeta de crédito, o cuenta corriente registrada en tu cuenta de  [Jumbo.cl](https://www.jumbo.cl/) en caso de haber pagado con débito.\n' +
        '\n' +
        'Estos datos bancarios solo pueden ser modificados por el mismo cliente en su cuenta Jumbo, sección ‘Mi cuenta bancaria’, y es responsabilidad del cliente mantenerla actualizada, pues a modo de resguardo y protección, ningún colaborador de Jumbo puede crear, editar o borrar dichos datos.\n' +
        '\n' +
        'Si existiera diferencia entre lo cobrado y lo facturado a favor del cliente, si pagó con tarjeta de crédito, esta se verá reflejada en los movimientos por facturar en un plazo máximo de 5 días hábiles.\n' +
        '\n' +
        'En el caso de débito, la devolución será en la cuenta bancaria en un plazo máximo de 5 días hábiles, siempre y cuando se haya ingresado correctamente todos los datos de la cuenta. La cuenta puede ser del titular o de un tercero.\n' +
        '\n' +
        'En el caso de errores en esos datos o con problemas como el bloqueo de la tarjeta u otro motivo, se efectúa la devolución en un máximo de 14 días corridos, porque se realiza de manera administrativa.\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 5,
      helpCategory: context.mediosPagoJumbo,
      icon: '/icons/cards/help.svg',
      description: 'Infórmate cómo realizamos el cobro de tu compra en tu tarjeta.',
    });

    context.agregarEliminarTarjetaJumbo = em.create(HelpContent, {
      label: 'Agregar o eliminar tarjeta',
      reference: '/agregar-eliminar-tarjeta',
      content:
        '# Agregar o eliminar tarjeta\n' +
        '## ¿Cómo puedo agregar o eliminar una tarjeta?\n' +
        'Tienes que estar registrado e ingresar a tu cuenta. Al momento de hacer tu pedido y pasar al checkout, en el paso 3 te encontrarás con las formas de pago donde podrás ingresar o agregar una tarjeta de crédito o Tarjeta Cencosud Scotiabank.\n' +
        '\n' +
        'Para eliminar una tarjeta guardada debes ingresar en tu cuenta a la sección Mis tarjetas o al hacer un pedido al llegar al checkout.\n' +
        '\n' +
        '> **Nota**: Para eliminar una tarjeta no deben existir pedidos en curso asociados a la tarjeta, ya que se necesita mantenerla habilitada en el caso de devoluciones por productos faltantes o diferencias de precio por sustitutos.' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 6,
      helpCategory: context.mediosPagoJumbo,
      icon: '/icons/cards/creditCard.svg',
      description: 'Aprende cómo cambiar la información de la tarjeta con la que pagas tu compra.',
    });

    context.comprarGiftCardJumbo = em.create(HelpContent, {
      label: 'Comprar con gift card',
      reference: '/comprar-gift-card',
      content:
        '# ¿Cómo comprar con una gift card Cencosud?\n' +
        '\n' +
        'Para pagar tu pedido con una gift card Cencosud, debes agregar los productos que deseas comprar en tu pedido y, al momento de pagar, elegir como medio de pago la gift card. Ingresa el número de esta tarjeta y la clave.\n' +
        '\n' +
        '&nbsp;\n' +
        '\n' +
        '```AccordionList\n' +
        '{ "list": [{ "message": "¿Cómo se realiza el cobro de mi gift card Cencosud?", "content": " - Una vez que tu pedido haya sido ingresado, se realizará una reserva por el total de los productos que tengas en tu carro. Una vez que el shopper pase por caja se revisará si es necesario realizar algún ajuste en el total. -- - En caso de que le solicites al shopper agregar algún producto a tu pedido, se cobrará el precio que tenga este artículo en la sala de ventas y puede no ser el mismo que esté publicado en jumbo.cl o Jumbo app. -- - Para los productos a granel se cobrará la cantidad correspondiente al peso del producto entregado. -- - El monto total de la compra no puede exceder al que estaba reservado en el pedido original. -- - La tarjeta utilizada no quedará registrada como medio de pago para futuras compras. -- - Si existieran diferencias entre el monto del pedido original y el recolectado, recibirás una notificación indicando que tienes un saldo a favor, derivado por esta diferencia. Ese monto será devuelto a la misma gift card utilizada. " },\n' +
        '{ "message": "Tuve un problema para pagar con gift card Cencosud", "content": " En caso de que al momento de ingresar los datos de la gift card, existan problemas como cupo insuficiente, tarjeta vencida o inactiva, sigue las indicaciones que aparecerán en el mensaje de la pantalla. -- -- Para revisar si tu gift card Cencosud presenta algún tipo de restricción, puedes consultar directamente en [giftcard.cl](https://www.giftcard.cl/) o en la app “Mi Gift Card Cencosud”. -- -- Si por algún motivo aún no puedes pagar tu pedido, contáctate directamente con giftcard@cencosud.cl." }\n' +
        ']}\n' +
        '```' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 4,
      helpCategory: context.mediosPagoJumbo,
      display: false,
      icon: '/icons/cards/giftcard.svg',
      description: 'Infórmate cómo realizar compras con gift card en jumbo.cl y Jumbo App.',
    });
    //============ LOCALES JUMBO ============//
    context.localesJumbo = em.create(HelpContent, {
      label: 'Locales Jumbo',
      reference: '/locales-jumbo',
      content:
        '# Encuentra tu local Jumbo\n' +
        'En el siguiente link podrás ingresar la región o comuna para consultar por un local Jumbo. Revisa su dirección exacta, horarios de funcionamiento y servicios disponibles:\n' +
        '[https://www.jumbo.cl/locales](https://www.jumbo.cl/locales)\n' +
        '\n' +
        '## ¿Cómo puedo conocer el stock de un producto en un local?\n' +
        '\n' +
        'Tienes que llamar a **Servicio al Cliente**, al 600 400 3000, donde los ejecutivos cuentan con información en línea de algunos productos, no de todos. Quedan excluidos.\n' +
        '\n' +
        'Recuerda que independiente de la información de stock, las unidades de cada producto no se pueden asegurar, ya que el stock puede agotarse en el transcurso que un cliente se acerca a un local.\n' +
        '\n' +
        '# ¿Qué hago si perdí un objeto de valor en un local?\n' +
        '\n' +
        'Para recuperar un objeto olvidado en un local Jumbo debes contactarte a **Servicio al Cliente** (600 400 3000) para que los ejecutivos ingresen una solicitud al local específico. Te solicitarán hora aproximada, fecha, local Jumbo, pasillo o caja (según sea el caso), características detalladas del objeto, teléfono celular y mail.\n' +
        '\n' +
        'El personal del local Jumbo se contactará con el cliente en un plazo de 48 horas para informar si encontró el objeto perdido.' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 1,
      helpCategory: context.localesJumbo,
      icon: '/icons/cards/shop.svg',
      description: '',
    });
    //============ DESPACHO RETIRO JUMBO ============//
    context.modosEntregaJumbo = em.create(HelpContent, {
      label: 'Modos de entrega',
      reference: '/modos-entrega',
      content:
        '# Modos de entrega\n' +
        '## ¿Cuáles son los modos de entrega?\n' +
        'Según te acomode, puedes elegir entre los siguientes modos de entrega:\n' +
        '\n' +
        '-   **Despacho**: Elige este servicio para comprar online y recibir tu pedido en una de las direcciones registradas en tu cuenta. Programa su entrega según la fecha y horario disponible al terminar tu compra. Recuerda que al comenzar tu pedido podrás tener una referencia del próximo horario disponible, el cual está siempre sujeto a confirmación al llegar al checkout.\n' +
        '\n' +
        '-   **Retiro**: Compra a través de Jumbo.cl o Jumbo App y recoge tu pedido en cualquiera de los locales Jumbo habilitados con el servicio de retiro a lo largo del país. **Si quieres puedes autorizar a otra persona para que retire el pedido, indicándolo al terminar la compra.** Puedes retirar en auto o a pie en la fecha y hora que elijas. Nosotros te enviaremos un mensaje de texto el día de retiro para recordarte que debes ir por tu compra. En caso de no recogerla en la fecha y horario elegido, esta será anulada y se cobrarán los productos frescos y/o perecibles.\n' +
        '\n' +
        '> **Nota**: Es importante que sepas que los modos de entrega disponibles al momento de tu compra podrían variar según contingencias o situación de los locales Jumbo. Lo más seguro es revisarlos al momento de tu compra.\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 1,
      helpCategory: context.despachoRetiroJumbo,
      icon: '/icons/cards/delivery.svg',
      description: 'Elige cómo quieres que te entreguen tu compra.',
    });

    context.zonasCoberturaJumbo = em.create(HelpContent, {
      label: 'Zonas de cobertura, horarios y costos',
      reference: '/zonas-cobertura',
      content:
        '# Zonas de cobertura, horarios y costos\n' +
        '## ¿Cuáles son las zonas de cobertura, horarios y costos del servicio?\n' +
        'En Jumbo.cl puedes elegir entre Despacho a domicilio y Retiro al auto.\n' +
        '\n' +
        'El servicio de Retiro al auto es gratuito y la disponibilidad horaria dependerá del local que elijas.  \n' +
        'Al seleccionar este servicio cuando comiences tu pedido, aparecerá una referencia del horario más próximo, como en este ejemplo:\n' +
        '\n' +
        '![img/720px](https://assets.jumbo.cl/uploads/2020/08/ejemplo_referencia_horario_retiro.jpg)\n' +
        '\n' +
        'Revisa aquí los locales donde está disponible y otras informaciones  [https://www.jumbo.cl/oferta/retiro-auto.](https://www.jumbo.cl/oferta/retiro-auto.)\n' +
        '\n' +
        'Si prefieres recibir el pedido en tu domicilio, el costo dependerá según zona. Revisa aquí las zonas de cobertura, horarios de tu sector y costos del despacho:\n' +
        '\n' +
        '```\n' +
        'CostoDespacho\n' +
        '```\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 2,
      helpCategory: context.despachoRetiroJumbo,
      icon: '/icons/cards/delivery24.svg',
      description: 'Busca cuáles son las zonas donde Jumbo llega a domicilio, en qué horarios y su costo.',
    });

    context.zonasCoberturaJumbo = em.create(HelpContent, {
      label: 'Empaque de productos',
      reference: '/empaque-productos',
      content:
        '# Empaque de productos\n' +
        '## ¿Cómo empacan los productos del pedido?\n' +
        'Tenemos un cuidado especial por cada producto y queremos compartir contigo nuestras buenas prácticas:\n' +
        '-   Nos preocupamos del peso y fragilidad de los productos, además de su forma, para que se muevan lo menos posible durante el traslado\n' +
        '-   Redoblamos nuestra atención con plátanos, yoghurt, pan, huevos y botellas o envases de vidrio\n' +
        '-   Empacamos los productos según su categoría: no comestibles (_limpieza, aseo personal o librería_) congelados, frutas y verduras, frescos y comestibles (_abarrotes, pan o galletas_)\n' +
        '-   Al embalar productos frescos o congelados, usamos gel refrigerante o bolsas de hielo para mantener la cadena de frío\n' +
        '-   No sobrecargamos las cajas, no arrojamos los productos y evitamos la contaminación cruzada: nunca mezclamos alimentos con productos de limpieza, ferretería o que contengan químicos. De hecho, carnicería y pescadería se empacan de manera independiente\n' +
        '-   Productos voluminosos, como papel higiénico o comida para perro, van sin embalaje\n' +
        '\n' +
        'Finalmente, pero no menos importante: nuestro equipo utiliza implementos de higiene como guantes, mascarilla y cofia para el cabello. Además, tiene la instrucción de lavar sus manos cada vez que preparan un pedido.\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 3,
      helpCategory: context.despachoRetiroJumbo,
      icon: '/icons/cards/bag.svg',
      description: 'Conoce cómo empacamos tus pedidos.',
    });
    //============ PUNTOS CENCOSUD JUMBO ============//
    context.informacionPuntosCencosudJumbo = em.create(HelpContent, {
      label: 'Información sobre este programa',
      reference: '/informacion-puntos-cencosud',
      content:
        '# Información sobre este programa\n' +
        '## ¿Qué son los Puntos Cencosud?\n' +
        'Es el programa de fidelidad de Cencosud, que le permite a los clientes acumular puntos en todas las compras que realicen en sus marcas para canjearlos por premios. Revisa más detalles: [Puntos Cencosud](https://www.puntoscencosud.cl/puntos/)',
      order: 1,
      helpCategory: context.puntosCencosudJumbo,
      icon: '/icons/cards/information.svg',
      description: 'Descubre el programa de fidelidad que entrega puntos en las compras.',
    });

    context.consultarPuntosJumbo = em.create(HelpContent, {
      label: 'Consultar Puntos Cencosud',
      reference: '/consultar-puntos',
      content:
        '# Consultar Puntos Cencosud\n' +
        '## ¿Cómo puedo consultar los puntos Cencosud?\n' +
        'Tienes que ingresar tu RUT en el siguiente formulario: [Consulta Puntos Cencosud](https://www.puntoscencosud.cl/puntos/cuantos-puntos-tengo?utm_source=Banner_UDN&utm_medium=Banner&utm_campaign=Jumbo&_afrLoop=945351832790671&_afrWindowMode=0&_afrWindowId=littleWindow#!%40%40%3Futm_medium%3DBanner%26_afrWindowId%3DlittleWindow%26utm_source%3DBanner_UDN%26utm_campaign%3DJumbo%26_afrLoop%3D945351832790671%26_afrWindowMode%3D0%26_adf.ctrl-state%3Dz9trlxowo_14)',
      order: 2,
      helpCategory: context.puntosCencosudJumbo,
      icon: '/icons/cards/payCurrency.svg',
      description: 'Conoce cuántos puntos llevas reunidos por tus compras.',
    });

    context.comprarConPuntosJumbo = em.create(HelpContent, {
      label: '¿Se puede comprar con puntos en Jumbo.cl?',
      reference: '/comprar-con-puntos',
      content:
        '# ¿Se puede comprar con puntos en Jumbo.cl?\n' +
        '## Comprar con puntos\n' +
        '\n' +
        'Lamentablemente por ahora solo es posible pagar con Puntos Cencosud en Locales Jumbo.\n' +
        '\n' +
        'En [Jumbo.cl](https://www.jumbo.cl/) puedes pagar con Tarjeta Cencosud Scotiabank o tarjeta de crédito bancarias emitidas en Chile: Visa, MasterCard, American Express o Diners.\n' +
        '\n' +
        'También podrás pagar con tarjetas de débito emitidas en Chile, a través de MercadoPago, quién gestionará las devoluciones de dinero por diferencias en tu pedido.\n' +
        '\n' +
        'Las tarjetas de crédito emitidas en el extranjero, no están habilitadas para comprar en [Jumbo.cl](https://www.jumbo.cl/)' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 3,
      helpCategory: context.puntosCencosudJumbo,
      icon: '/icons/cards/help.svg',
      description: 'Conoce dónde puedes comprar con tus Puntos Cencosud.',
    });
    //============ MODIFICAR DATOS JUMBO ============//
    context.actualizarDatosJumbo = em.create(HelpContent, {
      label: 'Actualizar datos o clave',
      reference: '/actualizar-datos',
      content:
        '# Actualizar datos o clave\n' +
        '## ¿Cómo modificar mis datos?\n' +
        'Luego de registrarte e ingresar a Jumbo.cl, tendrás tu sesión privada donde puedes encontrar:\n' +
        '-   Mis datos (nombre, apellido, fecha de vencimiento, sexo y teléfono) y administración de notificaciones y mails de promociones\n' +
        '-   Mis direcciones: podrás agregar o eliminar direcciones\n' +
        '-   Mis compras: donde podrás ver, filtrar, repetir tus pedidos y anular las compras que aún no hayan sido preparadas\n' +
        '-   Mis listas: donde podrás crear tus listas de compras y guardarlas\n' +
        '\n' +
        '## Cambio de clave\n' +
        '-   Si recuerdas tu clave: Debes iniciar sesión donde dice “Ingresa”, sección ubicada en la parte superior derecha de la página y luego donde dice “Hola, nombre del cliente”, seleccionando allí “Mis datos”. En la sección de datos personales, elige la opción “Editar clave” para ingresar una nueva clave con las condiciones indicadas.\n' +
        '\n' +
        '-   Si no recuerdas tu clave: En la sección “Ingresa” digita el mail o RUT y aprieta el botón “Actualizar clave” para crear una nueva clave nueva con las condiciones indicadas. Posteriormente, recibirás un mail seguro con el código de verificación que deberás agregar para completar el cambio.\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 1,
      helpCategory: context.modificarDatosJumbo,
      icon: '/icons/cards/user.svg',
      description: 'Descubre cómo modificar tu información personal y contraseña.',
    });

    context.actualizarDatosJumbo = em.create(HelpContent, {
      label: 'Agregar nueva dirección',
      reference: '/agregar-direccion',
      content:
        '# Agregar nueva dirección\n' +
        '## ¿Cómo agrego una nueva dirección de despacho?\n' +
        'Para agregar una nueva dirección en las comunas donde tenemos cobertura, debes seguir los siguientes pasos:\n' +
        '-   Ingresa a tu cuenta en **Jumbo.cl**, sección “Mis datos” y luego “Mis direcciones” donde debes pinchar el botón “Agregar nueva dirección”\n' +
        '-   En seguida, escribe tu calle y número; verás desplegarse un listado donde aparecen alternativas con distintas comunas. Elige la que corresponde a tu dirección y luego completa el número de departamento (o casa) e ingresa referencias adicionales si fuese necesario.\n' +
        '-   Te mostraremos una imagen del mapa donde se ubica tu dirección para que confirmes. Si no tuviéramos la dirección referenciada, entonces te pediremos mover el pin rojo hasta la zona adecuada.\n' +
        '-   Si no tenemos cobertura en la dirección que deseas agregar, el sistema te entregará una alerta para que intentes con otra ubicación.\n' +
        '\n' +
        'Por tu seguridad, cada vez que agregues una nueva dirección, te notificaremos a tu mail registrado en tu cuenta.\n' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 2,
      helpCategory: context.modificarDatosJumbo,
      icon: '/icons/cards/location.svg',
      description: 'Conoce cómo agregar nuevas direcciones para el despacho de tu compra.',
    });

    context.eliminarTarjetaJumbo = em.create(HelpContent, {
      label: 'Eliminar tarjeta guardada',
      reference: '/eliminar-tarjeta',
      content:
        '# Eliminar tarjeta guardada\n' +
        '## ¿Cómo elimino una tarjeta guardada en mi cuenta?\n' +
        'Para eliminar una tarjeta guardada debes ingresar en tu cuenta a la sección “Mis tarjetas” o al hacer un pedido al llegar al checkout.\n' +
        '\n' +
        'Debes considerar que para eliminar una tarjeta, no deben existir pedidos en curso asociados a la tarjeta, ya que se necesita mantenerla habilitada en el caso de devoluciones por productos faltantes o diferencias de precio por sustitutos.' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 3,
      helpCategory: context.modificarDatosJumbo,
      icon: '/icons/cards/creditCard.svg',
      description: 'Conoce cómo eliminar los datos de tus medios de pago.',
    });
    //============ INFORMACION CONTACTO JUMBO ============//
    context.informacionContactoJumbo = em.create(HelpContent, {
      label: 'Información de contacto',
      reference: '/informacion-contacto',
      content:
        '# Información de contacto y locales \n' +
        '\n' +
        '## Jumbo.cl y Jumbo app\n' +
        '\n' +
        'Si necesitas realizar una consulta o reclamo, tenemos los siguientes canales de contacto:\n' +
        '\n' +
        '\n' +
        '```CardStaticContent\n' +
        '\n' +
        '{"id":1,"icon":"/icons/cards/contacto.svg","label":"","label_mobile":"**Formulario de contacto:** Puedes ingresar reclamos o solicitudes escribiéndonos en nuestro formulario","reference":"/ayuda/contactanos","actionLabel":"Ir a Formulario","iconWidth":"4rem","iconHeight":"4rem","iconFlagRelative":false,"cardType":"horizontalCard","enabledButton":true,"filledButton":true,"invitedReference":"/ayuda/contactanos"}\n' +
        '\n' +
        '```\n' +
        '```CardStaticContent\n' +
        '\n' +
        '{"id":3,"icon":"/icons/cards/whatsapp.svg","label":"","label_mobile":"**Whatsapp Clientes Prime:** Si eres cliente Prime, escríbenos al +56941540961 para que respondamos tus consultas o reclamos.","reference":"https://www.jumbo.cl/_secure/compras","actionLabel":"Ir a Whatsapp","iconWidth":"4rem","iconHeight":"4rem","iconFlagRelative":false,"cardType":"horizontalCard","enabledButton":true,"filledButton":true,"invitedReference":""}\n' +
        '\n' +
        '```\n' +
        '```CardStaticContent\n' +
        '\n' +
        '{"id":4,"icon":"/icons/cards/callcenter.svg","label":"","label_mobile":"**Call Center:** Puedes resolver tus dudas llamándonos a nuestro teléfono de contacto 600 400 3000","reference":"tel:6004003000","actionLabel":"Llamar al Call Center","iconWidth":"4rem","iconHeight":"4rem","iconFlagRelative":false,"cardType":"horizontalCard","enabledButton":true,"filledButton":true,"invitedReference":"tel:6004003000"}\n' +
        '\n' +
        '```' +
        '\n' +
        '&nbsp;\n' +
        '\n' +
        '## Locales Jumbo \n' +
        '\n' +
        'También puedes realizar consultas y reclamos en cualquiera de nuestros locales. Encuentra tu [Jumbo más cercano.](https://www.jumbo.cl/locales?page=1)',
      order: 1,
      helpCategory: context.servicioClienteJumbo,
      icon: '/icons/cards/openMail.svg',
      description: 'Conoce cómo te puedes poner en contacto con nosotros.',
    });
    //============ JUMBO PRIME ============//
    context.queEsJumboPrime = em.create(HelpContent, {
      label: '¿Que es Jumbo Prime?',
      reference: '/que-es-jumbo-prime',
      content:
        '# ¿Qué es Jumbo Prime?\n' +
        '\n' +
        'Es un programa de membresía donde las personas suscritas disfrutarán de una nueva experiencia de compra en Jumbo gracias a múltiples beneficios en sus pedidos online. Tendrán despachos gratis ilimitados, ofertas personalizadas, entre otros muchos beneficios.\n' +
        '\n' +
        'Si quieres registrarte como cliente Prime o necesitas información más detallada, te invitamos a revisar nuestro sitio de Jumbo Prime.\n' +
        '\n' +
        '## Beneficios para clientes Prime\n' +
        '\n' +
        '![table-jumbo-prime-desk/787px/304px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/table-jumbo-prime-desk.svg)\n' +
        '![table-jumbo-prime-mob/100%/304px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/table-jumbo-prime-mob.svg)\n' +
        '\n' +
        '## ¿Cómo funciona Jumbo Prime?\n' +
        'Es muy simple, solo tienes que seguir los siguientes pasos:\n' +
        '\n' +
        '[![paso1-jumbo-prime-desk/100%/140px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso1-jumbo-prime-desk.svg)](https://www.jumboprime.cl/)\n' +
        '[![paso1-jumbo-prime-mob/100%/112px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso1-jumbo-prime-mob.svg)](https://www.jumboprime.cl/)\n' +
        '![paso2-jumbo-prime-desk/100%/140px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso2-jumbo-prime-desk.svg)\n' +
        '![paso2-jumbo-prime-mob/100%/180px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso2-jumbo-prime-mob.svg)\n' +
        '![paso3-jumbo-prime-desk/100%/140px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso3-jumbo-prime-desk.svg)\n' +
        '![paso3-jumbo-prime-mob/100%/112px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso3-jumbo-prime-mob.svg)\n' +
        '![paso4-jumbo-prime-desk/100%/140px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso4-jumbo-prime-desk.svg)\n' +
        '![paso4-jumbo-prime-mob/100%/112px](https://d31w2ybspxswhh.cloudfront.net/SM/jumbo/paso4-jumbo-prime-mob.svg)\n' +
        '\n' +
        '## Portal de usuario Prime\n' +
        'En esta sección puedes encontrar toda la información relacionada al programa Jumbo Prime. Además de ayuda con tus compras Prime y beneficios.\n' +
        '\n' +
        '## Zonas de cobertura para los envíos\n' +
        'Los despachos gratis aplican solo para las zonas urbanas de las siguientes ciudades: Iquique, Antofagasta, Calama, Copiapó, La Serena, Coquimbo, Viña del Mar, Valparaíso, Quilpué, Concón, Los Andes, San Felipe, Santiago (RM), Rancagua, Talca, Curicó, Chillán, Concepción, Talcahuano, Temuco, Valdivia y Puerto Montt.\n' +
        '\n' +
        '## Valor y duración de la membresía\n' +
        'La suscripción a Jumbo Prime tiene un valor de $30.000 que da acceso a 6 meses de beneficios. Inscríbete hoy y prueba gratis Jumbo Prime por 15 días.\n' +
        '\n' +
        '**Sin compromisos**, cancela cuando quieras desde tu portal de www.jumboprime.cl\n' +
        '\n' +
        '## Requisitos para usar beneficios\n' +
        '- Para disfrutar de tus beneficios de despachos gratis y doble acumulación de Puntos Cencosud, debes iniciar sesión en el sitio web de Jumbo o Jumbo app con el mismo RUT que tienes registrado en Jumbo Prime.\n' +
        '- Los despachos gratis aplican en compras con un monto superior o igual a $15.000 (después de las ofertas y descuentos) y con dirección de despacho dentro del territorio nacional y sujeto a la zona de cobertura.\n' +
        '- En caso de no estar inscrito en Jumbo.cl con el mismo RUT registrado en Jumbo Prime, los beneficios de despachos y doble acumulación no podrán ser aplicados.' +
        '\n' +
        '``` ContactChannels\n' +
        '```\n' +
        '',
      order: 1,
      helpCategory: context.jumboPrime,
      icon: '/icons/cards/outLine.svg',
      description: 'Descubre el programa de membresía donde obtienes múltiples beneficios en tus pedidos online.',
    });
  }
}
