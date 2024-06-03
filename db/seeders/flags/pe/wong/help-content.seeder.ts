import { EntityManager, Dictionary } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { HelpContent } from 'modules/content/help-category/entities/help-content.entity';

export class HelpContentWongSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.puntosCencosudWong = em.create(HelpContent, {
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
      order: 0,
      helpCategory: context.puntosCencosudWong,
      display: false,
      icon: '',
      description: '',
    });
    //============ AYUDA WONG ============//
    context.sobreComoComprar = em.create(HelpContent, {
      label: 'Sobre como comprar',
      reference: '/sobre-como-comprar',
      content: '# Sobre como comprar ',
      order: 60,
      helpCategory: context.institucionalWong,
      icon: '',
      description: '',
    });

    context.sobreMiPedido = em.create(HelpContent, {
      label: 'Sobre mi pedido y producto que adquirí',
      reference: '/sobre-mi-pedido',
      content: '# Sobre mi pedido y producto que adquirí',
      order: 70,
      helpCategory: context.institucionalWong,
      icon: '',
      description: '',
    });

    context.sobreMisPagos = em.create(HelpContent, {
      label: 'Sobre mis pagos',
      reference: '/sobre-mis-pagos',
      content: '# Sobre mis pagos',
      order: 80,
      helpCategory: context.institucionalWong,
      icon: '',
      description: '',
    });

    context.sobreFormasEntrega = em.create(HelpContent, {
      label: 'Sobre las formas de entrega',
      reference: '/sobre-formas-entrega',
      content: '# Sobre las formas de entrega',
      order: 90,
      helpCategory: context.institucionalWong,
      icon: '',
      description: '',
    });

    context.crearCuentaWong = em.create(HelpContent, {
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
      helpCategory: context.ayudaWong,
      icon: '/icons/cards/user.svg',
      description: 'Infórmate sobre cómo registrarte y comenzar a comprar en Santaisabel.cl y Santa Isabel app.',
    });

    context.comoHacerPedidoWong = em.create(HelpContent, {
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
      helpCategory: context.ayudaWong,
      icon: '/icons/cards/help.svg',
      description: 'Aprende a agregar productos en tu carro de compras.',
    });

    context.buscarProductosWong = em.create(HelpContent, {
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
      helpCategory: context.ayudaWong,
      icon: '/icons/cards/bag.svg',
      description: 'Conoce cómo elegir tus productos y su disponibilidad.',
    });

    context.carroComprasWong = em.create(HelpContent, {
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
      helpCategory: context.ayudaWong,
      icon: '/icons/cards/shoppingCart.svg',
      description: 'Descubre cómo ver qué productos agregaste en tu pedido.',
    });

    context.agregarDireccionWong = em.create(HelpContent, {
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
      helpCategory: context.ayudaWong,
      icon: '/icons/cards/location.svg',
      description: 'Conoce cómo agregar nuevas direcciones para el despacho de tu compra.',
    });

    //============ INSTITUCIONAL WONG ============//
    context.institucionalPoliticasWong = em.create(HelpContent, {
      label: 'Políticas de privacidad',
      reference: '/politicas-de-privacidad',
      content:
        '#  Políticas de Privacidad\n' +
        '### 1. INTRODUCCIÓN.\n' +
        'En CENCOSUD RETAIL PERÚ S.A. (en adelante “Wong”), aseguramos la máxima reserva y protección sobre aquellos datos personales de los clientes/usuarios que sean ingresados en el sitio en Internet de su propiedad:  [http://www.wong.pe](http://www.wong.pe/)\n' +
        'En este documento describimos la “Política de Privacidad” (en adelante, también denominado  **“Política”**  ) que regula el tratamiento de los datos personales que los clientes/usuarios registran en el sitio web.\n' +
        '### 2. OBJETIVO.\n' +
        'En Wong estamos especialmente interesados en ofrecer a nuestros clientes/usuarios el más alto nivel de seguridad y proteger la confidencialidad de los datos que nos aporta. Por ello, las relaciones comerciales se realizan en un entorno de servidor seguro bajo protocolo SSL (Secure Socket Layer), actualmente empleado por las empresas más importantes del mundo para realizar transacciones electrónicas seguras.\n' +
        'Nuestro sitio web ha sido creado y diseñado para facilitar todo tipo de información que creemos puede ser de interés y crear así un espacio de comunicación para los clientes/usuarios.\n' +
        '### 3. DESTINATARIOS DE LOS DATOS PERSONALES.\n' +
        'El destinatario de la información personal de los usuarios/clientes que se recopile mediante los formularios y/o documentos análogos es Wong. Asimismo, pueden existir terceros destinatarios para realizar funciones en nombre y representación de Wong, los cuales tienen acceso a la información personal necesaria para realizar sus funciones, pero no pueden usarla para fines diferentes a los señalados en la presente Política.\n' +
        'En este sentido, usted podrá acceder a la lista completa de los terceros proveedores de servicios mediante el siguiente enlace:  [aquí](https://www.wong.pe/Legales/privacidad-datos-proveedores)\n' +
        'Es necesario precisar que los mencionados terceros tratarán la información personal de acuerdo con la presente Política y según lo permitido por la legislación de Protección de Datos Personales.\n' +
        'La dirección de Wong, en condición de Titular del banco de datos personales al que puede dirigirse para revocar el consentimiento o ejercer sus derechos como titular de los datos personales, se encuentra identificado en el numeral 13 de la presente Política.\n' +
        '### 4. LEGISLACIÓN.\n' +
        'Esta política está regulada por la legislación peruana y en particular por:\n' +
        '-   Ley N° 29733 – Ley de Protección de Datos Personales (en adelante, denominado  **“LPDP”**  ).\n' +
        '-   Reglamento de la Ley N° 29733, aprobado por el Decreto Supremo N° 003-2013-JUS (en adelante, denominado  **“RLPDP”**  ).\n' +
        '-   Directiva de Seguridad de la Información, aprobada por la Resolución Directoral N° 019-2013-JUS/DGPDP (en adelante, denominado  **“Directiva”**  ).\n' +
        'De acuerdo con la LPDP y el RLPDP, se entiende por datos personales toda información numérica, alfabética, gráfica, fotográfica, acústica, sobre hábitos personales, o de cualquier otro tipo concerniente a una persona natural que la identifica o la hace identificable a través de medios que pueden ser razonablemente utilizados.\n' +
        'Asimismo, se entiende por tratamiento de datos personales a cualquier operación o procedimiento técnico, automatizado o no, que permite la recopilación, registro, organización, almacenamiento, conservación, elaboración, modificación, extracción, consulta, utilización, bloqueo, supresión, comunicación por transferencia o por difusión o cualquier otra forma de procesamiento que facilite el acceso, correlación o interconexión de los datos personales.\n' +
        '### 5. CALIDAD DE LOS DATOS PERSONALES.\n' +
        'Los datos personales solicitados a nuestros clientes/usuarios, son datos básicos de contacto y son adecuados, pertinentes y no excesivos en relación con la finalidad para los que se recogen.\n' +
        'Los datos personales a los que en Wong tendremos acceso, serán aquellos que los clientes/usuarios faciliten voluntariamente rellenando los formularios puestos a tal efecto.\n' +
        'En Wong les proporcionamos a nuestros clientes/usuarios los recursos técnicos adecuados para que tomen conocimiento de la presente Política y de cualquier otra información que pueda ser relevante.\n' +
        'Los datos personales facilitados por nuestros clientes/usuarios tienen que ser exactos y correctos de forma que respondan con veracidad a su situación actual. En caso contrario estos datos serán cancelados.\n' +
        'Los datos personales serán cancelados cuando hayan dejado de ser necesarios para las finalidades para las cuales han sido recopilados. Sin embargo, se conservarán durante el tiempo en que en Wong nos puedan exigir algún tipo de responsabilidad derivada de esta relación con nuestros clientes/usuarios.\n' +
        '### 6. TIEMPO DE CONSERVACIÓN DE SUS DATOS PERSONALES.\n' +
        'Los datos personales del cliente/usuario serán conservados en los términos establecidos en la LPDP y el RLPDP, en el tiempo que sea necesario para cumplir las finalidades identificadas en el punto número 8 de la presente Política.\n' +
        'Wong, en condición de Titular del banco de datos, se abstendrá de conservar los datos personales del Consumidor/titular en los siguientes eventos:\n' +
        '-   Cuando tenga conocimiento de su carácter inexacto o incompleto, sin perjuicio de los derechos del cliente/usuario al respecto\n' +
        '-   - Cuando los datos personales objeto de tratamiento hayan dejado de ser necesarios o pertinentes para el cumplimiento de las finalidades previstas en la presente Política, salvo medie procedimiento de anonimización o disociación.\n' +
        'La supresión no procede cuando los datos personales deban ser conservados en virtud de un mandato legal o en virtud de las relaciones contractuales entre Wong, en condición de responsable del tratamiento y el Titular de los datos personales, que justifiquen el tratamiento de estos, con fundamento en el Artículo 69 del RLPDP.\n' +
        '### 7. INFORMACIÓN QUE RECOLECTAMOS.\n' +
        'Wong, como responsable del tratamiento, a través de los formularios subidos en nuestra página web y en documentos análogos, así como a través de proveedores de servicios, redes sociales, registros públicos y fuentes accesibles al público, puede recopilar los siguientes datos:\n' +
        '-   Nombres\n' +
        '-   Dirección\n' +
        '-   Teléfono\n' +
        '-   Correo electrónico\n' +
        '-   Número de documento de identidad\n' +
        'Adicionalmente, en el futuro y para actividades comerciales específicas Wong podrá recopilar otros datos personales a fin de darles tratamiento en el marco de dichas campañas. En estos casos, Wong informará oportunamente al cliente -en momento previo a la obtención del consentimiento- sobre la finalidad y tratamientos que brindará a dicha información y, adicionalmente, actualizará esta sección de la presente Política de Privacidad describiendo dichos datos adicionales a fin que sean conocidos por nuestros clientes.\n' +
        '### 8. FINALIDAD DE LOS TRATAMIENTOS DE LA INFORMACIÓN PERSONAL.\n' +
        'Las finalidades de tratamiento de los datos personales que nuestros clientes/usuario introducen en los diferentes formularios del sitio web se orientan a gestionar las transacciones de compra de nuestros productos, contestación de sus consultas, peticiones y la atención de cualquier otro tipo de información que nos requieran a través de éstos.\n' +
        'Los datos personales facilitados por nuestros clientes/usuarios se almacenarán en los bancos de datos que forman parte del sistema de información de Wong y serán tratados para poder llevar a cabo las finalidades expuestas anteriormente.\n' +
        'Los bancos de datos que están registrados actualmente ante la Autoridad de Protección de Datos Personales son los siguientes:\n' +
        '-   CLIENTES con código RNPDP-PJP N° 1680.\n' +
        '-   COLABORADORES con código RNPDP-PJP N° 1681.\n' +
        '-   CONTRO DE ACCESOS con código RNPDP-PJP N° 1682.\n' +
        '-   PROVEEDORES con código RNPDP-PJP N° 1683.\n' +
        '-   RECLUTAMIENTO DE COLABORADORES con código RNPDP-PJP N° 1684.\n' +
        '-   SEGURIDAD Y SALUD EN EL TRABAJO con código RNPDP-PJP N° 1685.\n' +
        '-   VIDEOVIGILANCIA con código RNPDP-PJP N° 1686.\n' +
        'Cabe destacar que este apartado se actualizará conforme se hagan modificaciones en los bancos de datos.\n' +
        'La dirección del titular del banco de datos es la siguiente: Calle Augusto Angulo N° 130. Urbanización San Antonio, distrito de Miraflores, provincia y departamento de Lima.\n' +
        'La información que se recaba a través de los formularios y/o documentos análogos alojados en el sitio web de Wong se almacenarán en el banco de datos denominado CLIENTES, inscrito ante la Autoridad de Protección de Datos Personales con el código RNPDP-PJP N° 1680.\n' +
        'En ese sentido, los bancos de datos que contienen datos personales han sido inscritos en el Registro de Protección de Datos de la Autoridad de Protección de Datos Personales. Los datos personales que faciliten nuestros clientes/usuarios sólo podrán ser conocidos y manejados por el personal de Wong que necesite conocer dicha información para poder enviar información o contestar las solicitudes de nuestros clientes/usuarios. Estos datos personales serán tratados de forma leal y lícita y no serán utilizados para otras finalidades incompatibles con las especificadas\n' +
        '### 9. COMUNICACIÓN POR TRANSFERENCIA DE DATOS PERSONALES Y TRATAMIENTOS POR ENCARGO.\n' +
        'En Wong respetamos la privacidad de nuestros clientes/usuarios, no transferimos su información a terceros si usted no desea expresamente que lo hagamos.\n' +
        'Asimismo, es conveniente que nuestros clientes/usuarios sepan que sus datos personales podrán ser comunicados por transferencia a las entidades administrativas, autoridades judiciales y/o policiales, siempre y cuando esté establecido por Ley.\n' +
        'Sin perjuicio de lo expresado, comunicamos a nuestros clientes/usuarios que a fin de gestionar de modo más eficiente las transacciones y operaciones comerciales en nuestra plataforma digital, y cumplir con sus expectativas de compra, Wong podrá valerse de proveedores de servicios (los cuales fueron detallados en el punto 3 de la presente Política) a fin de llevar adelante ciertas actividades propias de la actividad comercial. En consecuencia, respecto a los datos personales de nuestros clientes/usuarios estos proveedores tendrán la condición de encargados de tratamiento de acuerdo a las disposiciones de la LPDP y el RLPDP.\n' +
        '### 10. FLUJO TRANSFRONTERIZO DE DATOS PERSONALES\n' +
        'La información personal que se recopila mediante los formularios, cupones de descuentos y/o documentos análogos alojados en el sitio web de Wong se almacena en nuestros servidores, los cuales están alojados en Estados Unidos de América.\n' +
        'En ese sentido, con la finalidad de ejecutar las prestaciones que corresponden y que están relacionadas con el servicio, y previa declaración de la autoridad competente, transfiere a los siguientes Terceros los datos personales cuyo acceso ha sido brindado por usted en condición de titular de la Información:\n' +
        '**Datos recopilados mediante formularios:**-   VTEX (Software as a Service) y Amazon - EEUU (Ubicación Física: EEUU. Este - Norte de Virginia us-east-1).\n' +
        '**Cupones de descuento:**-   IBM EEUU (Ubicación física: WDC01 4030 Lafayette Center Circle, Chantilly, VA 20151 / WDC04 44060 Digital Loudoun Plaza (Bldg K) Ashburn, VA 20147.\n' +
        'La inscripción de la comunicación del flujo transfronterizo se hace a través del formulario N° 66974. Es importante resaltar que la única finalidad de dicha transferencia fuera de territorio peruano es el almacenamiento, conservación y mantenimiento de los datos personales, y en ningún caso su circulación o uso fuera de territorio peruano.\n' +
        '### 11. CONFIDENCIALIDAD DE LOS DATOS PERSONALES.\n' +
        'Los datos personales facilitados por los clientes/usuarios serán tratados con total confidencialidad. Wong se compromete a guardar secreto profesional indefinidamente respecto de los mismos y garantiza el deber de guardarlos adoptando todas las medidas de seguridad necesarias.\n' +
        '### 12. SEGURIDAD DE LOS DATOS PERSONALES.\n' +
        'En cumplimiento de la normativa vigente, en Wong hemos adoptado las medidas técnicas de seguridad apropiadas a la categoría de los datos personales necesarias para mantener el nivel de seguridad requerido, con el objetivo de evitar la alteración, pérdida o el tratamiento o accesos no autorizados que puedan afectar a la integridad, confidencialidad y disponibilidad de la información.\n' +
        'En Wong tenemos implementadas todas las medidas de índole legal, técnica y organizativa necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida y tratamiento y/o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos, ya sea que provengan de la acción humana, del medio físico o natural, tal y como establece la legislación peruana vigente de protección de datos personales.\n' +
        'En Wong también tenemos implementadas medidas de seguridad adicionales para reforzar la confidencialidad e integridad de la información y continuamente mantenemos la supervisión, control y evaluación de los procesos para asegurar la privacidad de los datos personales. Sin embargo, la transmisión de información mediante las redes de comunicación y de Internet no es totalmente segura; por eso, y a pesar de que en Wong realizamos los mejores esfuerzos para proteger los datos personales, no podemos garantizar la seguridad de los mismos durante el tránsito hasta el sitio web.\n' +
        'En tal sentido, toda la información nuestros los clientes/usuarios proporcionen, se enviará por su cuenta y riesgo. Es por ello que en Wong recomendamos la máxima diligencia a nuestros clientes/usuarios cuando trasladen a terceros o publiquen información personal para evitar poner en riesgo sus datos personales, eludiendo, Wong, de toda responsabilidad en caso de sustracciones, modificaciones o pérdidas de datos ilícitas.\n' +
        '### 13. EJERCICIO DE DERECHOS.\n' +
        'Los clientes/usuarios que nos hayan facilitado sus datos personales, pueden dirigirse a Wong, con el fin de poder ejercer sus derechos de información, acceso, rectificación, cancelación y oposición en los términos recogidos en la legislación peruana vigente.\n' +
        'Los clientes/usuarios podrán ejercer sus derechos presentando una solicitud escrita en nuestra oficina principal, ubicada en Calle Augusto Angulo Nº 130 Urb. San Antonio Miraflores - Lima, conforme al  [**“Formato Modelo para el Ejercicio de Derechos ARCO”**](https://www.wong.pe/institucional/politicas-privacidad-seguridad#tabs-3)  en el horario establecido para la atención al público o mediante el envío del formato debidamente llenado al correo electrónico:  [servicioalclienteonline@cencosud.com.pe](mailto:servicioalclienteonline@cencosud.com.pe)  .\n' +
        '### 14. MENORES DE EDAD.\n' +
        'En Wong entendemos la importancia de proteger la privacidad de los niños, especialmente en un entorno online. Por este motivo, nuestro sitio web no está diseñado ni dirigido a menores de 14 años. Wong no llevará a cabo voluntariamente el tratamiento de datos personales relativos a menores de edad. En el supuesto que tengamos conocimiento que los datos personales recogidos corresponden a un menor de edad sin autorización, adoptaremos las medidas oportunas para eliminar estos datos tan pronto como sea posible.\n' +
        '### 15. SELECCIÓN DE PERSONAL.\n' +
        'Es preciso indicar que los datos personales e información que faciliten los clientes/usuarios en el ícono denominado “Trabaja con nosotros” de la Web serán tratados por la empresa Bumeran.com Perú S.A.C., en adelante Bumeran, con la que Wong tiene establecido un contrato de servicios para que le facilite la gestión de contratación de empleados para cubrir los puestos de trabajo vacantes. La gestión y tratamiento de esta información y de los datos personales facilitados se regirán por la Política de Privacidad establecida en esta web, cuya dirección electrónica es:  [http://cencosud.bumeran.com.pe/login.bum](http://cencosud.bumeran.com.pe/login.bum)  .\n' +
        'Cabe destacar que los datos de los usuarios recogidos a través Bumeran se almacenarán en el banco de datos denominado “RECLUTAMIENTO DE COLABORADORES” con código de inscripción: RNPDP-PJP N° 1684.\n' +
        '### 16. CONSENTIMIENTO.\n' +
        'Al aceptar esta Política de Privacidad, nuestros clientes/usuarios están de acuerdo con todos los aspectos expuestos en este documento y nos autorizan a tratar sus datos de carácter personal para las finalidades expuestas anteriormente.\n' +
        'El usurario/cliente titular de la información, autoriza expresamente a Wong, a realizar el tratamiento de sus datos personales identificados en la presente Política, ejecutando actividades tales como recopilar, registrar, organizar, almacenar, conservar, elaborar, modificar, extraer, consultar, utilizar, bloquear, suprimir, comunicar por transferencia, difundir, o cualquier otra forma de procesamiento que facilite el acceso, correlación o interconexión de los datos personales de forma parcial o total, en los términos expresados en la presente Política.\n' +
        '### 17. LAS CONSECUENCIAS DE PROPORCIONAR SUS DATOS PERSONALES Y SU NEGATIVA A HACERLO.\n' +
        'El suministro de los datos personales identificados en la presente Política y la obtención expresa e inequívoca del consentimiento contenido en la misma, conducirá al tratamiento de los datos personales suministrados por el titular de datos personales, según las finalidades determinadas.\n' +
        'Usted en condición de titular de los datos personales puede negarse a proporcionar sus datos personales a Wong. Por lo que este último se abstendrá de realizar el tratamiento de sus datos personales, en caso de negarse a aceptar la presente Política que contiene el consentimiento para tratamiento de datos personales. En este sentido, como consecuencia de dicha acción, usted no podrá acceder al servicio proporcionado por Wong toda vez que para el desarrollo del servicio resulta imprescindible contar con los datos personales del titular.\n' +
        '### 18. VIGENCIA Y MODIFICACIÓN DE LA PRESENTE POLÍTICA DE PRIVACIDAD\n' +
        'La Política de Privacidad web de Wong ha sido actualizada el mes de enero del 2020.\n' +
        'Wong se reserva el derecho a modificar su Política de Privacidad web en el supuesto de que exista un cambio en la legislación vigente, doctrinal, jurisprudencial o por criterios propios empresariales. Si se introdujera algún cambio en esta Política, el nuevo texto se publicará en este mismo web. Se recomienda a nuestros clientes/usuarios que accedan periódicamente a esta Política de privacidad que encontraran en este mismo sitio web.\n' +
        '### 19. TRATAMIENTO PARA FINES ADICIONALES.\n' +
        'Informamos que en caso nuestros clientes/usuarios nos autoricen el tratamiento para “Finalidades Adicionales” o secundarias mediante el marcado voluntario de las casillas correspondientes incorporadas en el sitio Web procederemos a tratar dichos datos para:\n' +
        'Envío de publicidad: Enviar al cliente información comercial, promocional y/o publicitaria con relación a los diversos productos y/o servicios brindados por las unidades de negocio operadas por Cencosud Retail Perú S.A. en el territorio nacional, es decir, Wong, Metro y Spid, mediante el envío de correos electrónicos, llamadas al teléfono fijo y/o teléfono celular, envío de sms; Elaboración de perfiles: Registrar y analizar historiales de compra, elaborar perfiles de compra, ejecutar acciones de prospección comercial, almacenar y tratar la información con fines estadísticos o históricos; Recibir beneficios: Brindar beneficios (personalizados o generales), obsequios e invitaciones a diversos eventos organizados por Wong los que serán asignados conforme a los criterios que oportunamente definirá Cencosud Retail Perú S.A.\n' +
        'Asimismo, informamos que en caso nuestros clientes/usuarios, no acepten el (los) tratamiento (s) adicional (es) de sus datos personales, esto no afectará la prestación del servicio contratado.”\n' +
        '### 20. OTROS.\n' +
        'Para realizar cualquier tipo de consulta respecto a esta política puede dirigirse a la siguiente dirección de correo electrónico:  [servicioalclienteonline@cencosud.com.pe](mailto:servicioalclienteonline@cencosud.com.pe)  .',
      order: 10,
      helpCategory: context.institucionalWong,
      icon: '/icons/cards/text.svg',
      description: 'Revisar las políticas que tenemos para resguardar la privacidad.',
    });

    context.institucionalTerminosWong = em.create(HelpContent, {
      label: 'Términos y condiciones',
      reference: '/terminos-y-condiciones',
      content:
        '# Términos y Condiciones\n' +
        '## ÚLTIMA ACTUALIZACIÓN: 04/11/2022.\n' +
        'El acceso y uso de este sitio web se rige por los términos y condiciones descritos a continuación, así como por la legislación que se aplique en la República del Perú.  \n' +
        'En consecuencia, todas las visitas, todos los contratos y transacciones que realice un cliente (en adelante “el cliente”), en este sitio, así como sus efectos jurídicos, quedarán regidos por estas reglas y sometidas a esa legislación.  \n' +
        'Los términos y condiciones contenidos en este instrumento formarán parte de todos los actos y contratos que se ejecuten o celebren mediante los sistemas de oferta y comercialización comprendidos en este sitio Web, entre los clientes y usuarios de este sitio y Cencosud Retail Perú S.A., a quien se le denominará en adelante "CENCOSUD", según convenga al sentido del texto.\n' +
        '### A continuación se exponen dichas condiciones:\n' +
        '### 1.- Registro del cliente o usuario.\n' +
        'Será requisito necesario para realizar transacciones en este sitio web o app, la aceptación de estos Términos y Condiciones, así como el registro por parte del cliente o usuario (referidos en adelante de manera indistinta como la parte contratante). El cliente declara tener capacidad legal para contratar conforme a la legislación peruana y ser una persona física. CENCOSUD se reserva el derecho de anular las cuentas de usuario, pedidos y órdenes de compra que no superen el proceso de validación de identidad y/o que puedan ser utilizadas para obtener ofertas y promociones de manera indebida (por ejemplo, más de una oferta por cliente, usuario o persona).\n' +
        'Se entenderán como conocidos y aceptados estos Términos y Condiciones por el sólo hecho del registro, en el que se incluirá una manifestación expresa del cliente sobre el conocimiento de las presentes condiciones de uso. Asimismo, para el caso del registro telefónico, se entiende como aceptación de las presentes condiciones el proporcionar los datos necesarios para el registro.\n' +
        'El registro en Wong.pe y/o Metro.pe o sus aplicativos móviles es gratuito.\n' +
        'Para registrarse, el cliente deberá brindar un correo electrónico vigente, recibir un código de confirmación (clave token) en su bandeja de correo o generar una clave desde la plataforma. También podrá ingresar por medio de su cuenta de Facebook o Google. El cliente es responsable, en caso de compartir el dispositivo de acceso, de proteger sus claves y accesos frente al uso de terceros.\n' +
        '### 2.- Capacidad legal para contratar.\n' +
        'La oferta de productos y servicios ofrecidos a través de los sitios Wong.pe, Metro.pe y/o sus aplicativos móviles están disponibles sólo para aquellas personas mayores de edad con capacidad legal para contratar, según lo dispuesto por la legislación peruana vigente. Si un usuario o cliente no tiene capacidad legal para contratar, debe abstenerse de utilizar los servicios ofrecidos en el sitio. CENCOSUD podrá suspender la participación de clientes y cuentas cuando compruebe carecen de capacidad legal para usar los servicios ofrecidos en el sitio y/o app, en cualquier momento, en forma temporal o definitiva, y/o cuando al registrarse brinden información que sea falsa, inexacta o fraudulenta y/o cuando se verifique múltiples cuentas para un mismo usuario.\n' +
        '### 3.- Clave Secreta.\n' +
        'El cliente asume totalmente la responsabilidad por el mantenimiento de la confidencialidad de su clave secreta registrada en este sitio web y/o App y/o la clave token enviada, así como el acceso mediante su usuario de Facebook o Google, los cuales le permiten efectuar pedidos (órdenes de compras), solicitar servicios y obtener información. Dichas claves y accesos son de uso personal y su entrega a terceros no involucra responsabilidad de CENCOSUD o de sus relacionadas en caso de mala utilización.\n' +
        '### 4.- Derechos del cliente de este sitio.\n' +
        'El cliente gozará de todos los derechos que le reconoce la legislación sobre protección al consumidor vigente en el territorio del Perú, además de los que se le otorgan en estos términos y condiciones. El cliente dispondrá en todo momento de los derechos de información y rectificación de los datos personales. La sola visita de este sitio en el cual se ofrecen bienes y servicios, no impone al consumidor obligación alguna, a menos que haya aceptado las condiciones ofrecidas por la empresa, en la forma indicada en estos términos y condiciones.\n' +
        '### 5.- Procedimiento para hacer uso de este sitio internet.\n' +
        'Para los productos ofrecidos por medio de este sitio, CENCOSUD informará, de manera inequívoca y fácilmente accesible, los pasos que deben seguirse para realizar su pedido, e informará vía email cuando sea recibida la solicitud del pedido. Esta solicitud pasará por un proceso de validación de datos del cliente, medio de pago, la recolección de productos del pedido en base al stock disponible al día del despacho y luego se cerrará el pedido, emitiéndose el comprobante de pago, el cual será enviado al cliente junto con el costo del despacho de su pedido el cual será previamente informado, y/o le llegará por correo electrónico luego de facturado el pedido. CENCOSUD indicará, además, su dirección de correo postal o electrónico y los medios técnicos a disposición del consumidor para identificar y corregir errores en el envío o en sus datos.\n' +
        '### 6.- Validez de las ofertas contenidas en este sitio.\n' +
        'Los precios de los productos y servicios disponibles en este sitio, mientras aparezcan en él, solo tendrán vigencia y aplicación en este y no serán necesariamente aplicables a otros canales de venta utilizados por CENCOSUD, salvo que se indique expresamente. Asimismo, CENCOSUD podrá modificar cualquier información contenida en este sitio, incluyendo las relacionadas con mercaderías, servicios, precios, existencias y condiciones en cualquier momento y sin previo aviso, respetando los pedidos que han sido aceptadas hasta dicho momento, siempre sujeto a las condiciones de validación que se indican en el numeral 10.\n' +
        '### 7.- Cantidad máxima de unidades.\n' +
        'Wong.pe y Metro.pe y/o sus aplicativos móviles son canales dedicados al giro de supermercados de carácter minorista, por lo que comercializa productos exclusivamente a clientes finales o consumidores finales, para ser destinados directamente a satisfacer las necesidades personales y familiares. Por el motivo expresado, el cliente podrá adquirir una cantidad máxima determinada de productos de acuerdo a las restricciones indicadas y publicadas en estos términos y condiciones y legales de ofertas y promociones, las cuales son vinculantes para la realización de su orden de compra. En ese sentido, CENCOSUD se reserva el derecho de rechazar algún pedido cuando verifique que uno o mas pedidos u órdenes de compra, ya sea con el mismo cliente o dirección de entrega, excede del número total de unidades anunciadas en la oferta o promoción.\n' +
        '### 8.- Promociones.\n' +
        'Las ofertas y promociones que se ofrezcan en este sitio web no son necesariamente las mismas que ofrezcan otros canales de venta utilizados por CENCOSUD, tales como locales físicos, a menos que se señale expresamente en este sitio o en la publicidad que realice CENCOSUD para cada promoción.\n' +
        '### 9.- Medios de pago que se podrán utilizar en este sitio.\n' +
        'Las invitaciones al público a ofrecer la adquisición de bienes y servicios en este sitio, salvo que se señale una forma diferente para casos particulares o pedidos de determinados bienes o servicios, sólo podrán ser pagados bajo 3 modalidades:\n' +
        'a) Pagos en línea:  Los montos aprobados serán retenidos o cobrados a la tarjeta utilizada al momento en que el cliente presente ofertas para la adquisición de bienes y servicios.\n' +
        'En caso de que CENCOSUD no disponga de la totalidad de los productos solicitados por el cliente en stock y realice una contraoferta al cliente (considerando únicamente los productos en stock), según lo referido en la cláusula 10 siguiente, y esta contraoferta sea aceptada por el cliente, se dará inicio al proceso de extorno por el monto diferencial, al medio de pago utilizado en el pedido, bajo los plazos establecidos por su entidad financiera.\n' +
        'En caso de anulación del pedido a solicitud del cliente, o en caso de que CENCOSUD no acepte el pedido conforme a lo señalado en la cláusula 10 siguiente, se dará inicio al proceso de devolución por el monto total del pedido al medio de pago utilizado en el pedido y bajo los plazos establecidos por su entidad financiera.\n' +
        'b) Pagos contra entrega:  Junto con el pedido se enviará el POS para procesar el pago.\n' +
        '-   Crédito*: Tarjetas Visa, MasterCard, American Express, Diners\n' +
        '-   Débito: Tarjetas Visa y MasterCard\n' +
        '-   Efectivo: Solo disponible para pedidos de abarrotes y perecibles.\n' +
        'Si el cliente elige como forma de pago la tarjeta de crédito, deberá presentar la tarjeta y documento de identidad al momento de la entrega para la verificación de identidad, firmas y cobro respectivo.\n' +
        '*Para Categorías de Tecnología, Electrodomésticos, Hogar, Deportes y Outdoor, Niños y Bebes y Mascotas los montos de los pedidos no deberán ser menores de S/ 50.00 (cincuenta soles) ni deberán exceder S/ 4,000.00 (cuatro mil soles).\n' +
        'c) “Pago Efectivo”: No disponible para categorías de abarrotes y perecibles:  El cliente hace la reserva de su pedido y se le genera un cupón de pago, con el cual deberá acercarse a alguno los establecimientos afiliados o plataformas de banca por internet y realizar el pago antes de la fecha de vencimiento indicada en el cupón (vigencia máxima 24 horas, desde la generación del cupón), caso contrario el cupón expira y el pedido se anula automáticamente.\n' +
        '### 10.- Formación del consentimiento en los pedidos realizado a través de este sitio.\n' +
        'A través de este sitio web, CENCOSUD realizará invitaciones al público a ofrecer la adquisición de bienes y servicios, pudiendo los clientes presentar ofertas para la adquisición de dichos bienes y servicios, realizando pedidos por vía electrónica o telefónica, utilizando los mecanismos que el sitio ofrece para ello. Toda oferta realizada por el cliente podrá ser aceptada por CENCOSUD, siempre que CENCOSUD verifique el cumplimiento de los criterios establecidos en los literales siguientes. En consecuencia, para toda operación que se efectúe en este sitio, la aceptación por parte de CENCOSUD será requisito indispensable para la formación del consentimiento.\n' +
        'Para aceptar el pedido, una vez recibido este, CENCOSUD verificará, hasta el plazo máximo del día programado para despacho del pedido (en caso CENCOSUD no emita un pronunciamiento respecto a la aceptación o rechazo de la oferta realizada por el cliente en el plazo antes referido, se entenderá que la oferta ha sido aceptada), lo siguiente:\n' +
        'a)  Que dispone de los productos solicitados en stock.\n' +
        'b)  Que, en caso de no disponer parcial o totalmente con los productos solicitados, CENCOSUD se pondrá en contacto con el cliente para ofrecerle alternativas o sustitutos. Si no se pudiera contactar con el cliente o no se tuvieran sustitos para ofrecer, se devolverá el valor de dichos productos al medio de pago utilizado en el pedido dentro los plazos establecidos por la entidad financiera.\n' +
        'c)  Que el medio de pago ofrecido por el cliente es válido.\n' +
        'd)  Que en caso el pedido incluya bebidas alcohólicas, CENCOSUD enviará una confirmación escrita a la misma dirección electrónica que haya registrado el cliente aceptante de la oferta, de modo que se garantice el debido y oportuno conocimiento del consumidor.\n' +
        'e)  Que valida los datos registrados por el cliente al momento de haber aceptado la oferta o pedido.\n' +
        'f)  Que el pedido cumple con las cantidades máximas detalladas a continuación: 1 unidades por producto u oferta, y/o respete las condiciones detalladas en los legales (términos y condiciones de las ofertas y promociones) de campañas u ofertas especiales.\n' +
        'En atención a lo señalado en los párrafos anteriores, y como una medida de protección a la seguridad de las transacciones, CENCOSUD rechazará los pedidos cuando verifique que no se cumple uno o más de los criterios establecidos en los literales precedentes. En estos casos, y como medida de seguridad para el cliente, CENCOSUD rechazará el pedido, procediendo a comunicar este hecho al cliente y a la entidad financiera emisora de la tarjeta utilizada por el cliente en su pedido, de ser el caso.  \n' +
        'En caso de que CENCOSUD no disponga de la totalidad de los productos solicitados por el cliente en stock, podrá realizar una contraoferta al cliente, considerando únicamente los productos en stock. En caso de que el cliente rechace la contraoferta, CENCOSUD procederá a comunicar este hecho a la entidad financiera emisora de la tarjeta utilizada por el cliente en su pedido, de ser el caso. Dicha entidad, de ser el caso, será la única responsable de proceder con la liberación del importe de acuerdo con sus procedimientos, así como de dar inicio al proceso de extorno por el monto diferencial en caso de que la contraoferta haya sido aceptada por el cliente, asumiendo en cualquier caso el cliente cualesquiera gastos bancarios necesarios para proceder con la referida liberación.\n' +
        '### 11.- Redondeo en el monto a pagar.\n' +
        'Solo cuando una transacción comercial sea pagada en efectivo, las denominaciones monetarias en céntimos del monto final a pagar, desde S/ 0.01 hasta S/ 0.09, serán redondeadas a S/ 0.00.\n' +
        'Las transacciones comerciales realizadas con tarjetas de crédito, débito, cheques o similares se mantendrán sin redondeo.\n' +
        '### 12.- Despacho y Retiro de productos\n' +
        'Los productos adquiridos a través CENCOSUD estarán sujetos a las condiciones de entrega elegidas por el cliente y disponibles en el sitio web. La información del lugar de entrega es de exclusiva responsabilidad del cliente. Los pedidos serán atendidos mediante rangos horarios diarios definidos y de acuerdo con la disponibilidad publicada en el sitio web. Es responsabilidad del cliente estar presente en la dirección de entrega, o designar al responsable para su recepción (en adelante “la persona responsable”).\n' +
        'Los servicios de despacho y entrega disponibles son los siguientes:\n' +
        'Retiro en local/tienda:  Este servicio considera productos que cumplan con las dimensiones para poder ser atendido en nuestros locales/tiendas, El cliente deberá recoger su pedido en la fecha y hora programada para el recojo de su pedido en la tienda seleccionada para tal fin. Si al cierre del horario de atención el cliente no realiza el retiro del pedido, se procederá a la anulación de este y se iniciará el proceso de devolución de dinero según el medio de pago utilizado en la compra, bajo los plazos establecidos por su entidad financiera en caso de tarjetas de crédito o débito. El cliente acepta expresamente esta anulación y autoriza a CENCOSUD desde ya a anular la compra en estos términos.  \n' +
        'Este servicio de retiro en local/tienda es gratuito. No se atiende en esta modalidad los productos de línea blanca (cocinas, refrigeradoras y lavadoras), muebles, colchones y deportes.\n' +
        'Despacho a domicilio:  Este servicio considera la entrega del pedido en el domicilio ingresado por el cliente al momento de hacer el pedido, y aceptado de acuerdo con nuestras zonas de despacho disponibles. Los plazos elegidos para el despacho y entrega se cuentan desde que CENCOSUD haya validado el pedido. Este plazo se cumplirá siempre y cuando las condiciones de seguridad y acceso lo permitan, y cuando no se presente un caso fortuito o por motivo de fuerza mayor.\n' +
        'Es requisito para la entrega:\n' +
        'a)  Que quien recibe el pedido, sea el cliente o la persona responsable, sea mayor de edad y presente su DNI vigente.  \n' +
        'b)  Durante el despacho se sugiere revisar el pedido, al término se solicita su firma para dar conformidad de la atención y estado de sus productos; luego se le hace entrega del comprobante de pago o guía de remisión.  \n' +
        'c)  La falta de rechazo implica la aceptación del producto en las condiciones entregadas, presumiéndose su aceptación y conformidad.\n' +
        'Durante la entrega CENCOSUD esperará un máximo de 15 minutos luego de haberse notificado al cliente. La llegada del repartidor a su domicilio. Vencido dicho plazo, CENCOSUD gestionará con el cliente la reprogramación de la entrega de su pedido en la misma dirección. Esta reprogramación genera un costo adicional de flete por la nueva entrega, equivalente al mismo monto del flete cargado inicialmente, el cual será cargado en el documento de pago. En caso no pudiera hacerse la entrega (por ejemplo, por falta de accesibilidad, seguridad o ejecutada la segunda oportunidad de despacho) se procederá con la anulación automática del pedido.\n' +
        '#### 12.1 Categorías de Tecnología, Electrodomésticos, Hogar, Deportes y Outdoor, Niños y Bebes y Mascotas (en adelante “non-food”)\n' +
        'En el caso de productos “non food”, para evitar daños en el producto, el transportista sólo está autorizado a entregar el pedido hasta en un 4to piso, salvo tenga acceso a ascensores o montacargas que permitan el ingreso del producto y el peso del mismo.  \n' +
        'El servicio de envío no considera desarmar puertas o ventanas, ni la utilización de cuerdas u otro elemento para levantar los productos a pisos superiores, tampoco el armado o instalación de productos. Es indispensable que antes de comprar, el cliente revise las dimensiones del producto y del lugar donde lo instalará, así evitarás problemas y se podrá efectuar la entrega de forma satisfactoria.\n' +
        '#### 12.2 Reprogramar entrega\n' +
        'Si el cliente tiene problemas para recibir o recoger su pedido en el horario definido o necesita cambiar los datos de la “persona responsable” dirección de entrega, teléfono de contacto, etc, debe solicitarlo con 24 horas de anticipación llamando a nuestra central telefónica 613-8888 de lunes a domingo 8:30 a 22:00. En caso la fecha de entrega sea el mismo día de la compra, el cliente debe comunicarse máximo 1 hora antes del inicio del rango de entrega seleccionado. De ser necesario estos cambios pueden aplicar costos adicionales como el cobro de flete adicional o cambios en el plazo de entrega, y será informado al cliente por medio de nuestro call center.  \n' +
        'Durante campañas específicas y temporadas de alta demanda como Cybers, Día de la Madre, Navidad (del 18 al 31 de diciembre) y/o situaciones imprevisibles, caso fortuito o de fuerza mayor, CENCOSUD realizará las entregas sin turno específico y podrá reprogramar los envíos. Los días 01 de mayo, 25 de diciembre y 01 de enero no contaremos con servicio de despacho.\n' +
        '### 13.- Cobro del servicio de despacho a domicilio (flete)\n' +
        '#### 13.1 Categorías abarrotes y perecibles\n' +
        'El cálculo del flete a cobrar se realiza en función a la distancia entre la dirección de entrega registrada y la tienda asignada para el despacho del pedido.\n' +
        '#### 13.2 Categorías de non-food\n' +
        'El cálculo del flete a cobrar se realiza en función a la distancia entre la dirección entrega registrada, el lugar de despacho del producto, la cantidad, tamaño y peso de los productos del pedido. El costo final de envío se informará al cliente tomando en cuenta las variables señaladas, una vez recibido el pedido y durante el procedimiento de validación.\n' +
        '### 14.- Servicio de Click and Collect\n' +
        'El cliente titular de la compra deberá acercarse al punto de recojo Click and Collect, que podrá estar ubicado en Mall Plaza Comas o Mall Plaza Bellavista, según elección del cliente. El horario de recojo es de lunes a domingo de 9:30 hrs. a 20:30 hrs.\n' +
        'El cliente recibirá un correo con la confirmación que el pedido está disponible para recojo, donde se brindará un código QR. El cliente se hace responsable de la conservación del QR.\n' +
        'Cliente debe presentar el DNI físico o carné de extranjería, al momento de la entrega, caso contrario no se entregará el producto. Si la persona que fuera a recoger o recibir el pedido NO es el titular de la compra, el cliente debe indicar quién lo hará, llenando el campo “¿Quién recibirá el pedido?” (ubicado en la sección donde se muestran las ventanas horarias). De lo contrario, no se entregará el pedido salvaguardando así los intereses de nuestros clientes.\n' +
        'Durante la entrega se debe revisar el pedido, al término se solicita su firma para dar conformidad del estado de los productos entregados y de la atención, al cliente se le entregará la guía de remisión en el módulo de Click and collect.\n' +
        'El comprobante de pago llegará por correo electrónico luego de efectuarse la entrega.\n' +
        'El plazo máximo para el recojo es de 5 días. Este inicia desde la fecha programada de recojo. Transcurrido dicho plazo, el pedido se anulará automáticamente y el extorno se realizará según nuestras políticas de cambios y devoluciones.\n' +
        '#### 14.1 Modificación de datos (Persona que recoge o fecha de recojo)\n' +
        'Podrás autorizar a otra persona para recoger tu pedido llamando y registrando sus datos en nuestro Centro de Servicio al Cliente. Recuerda que esta persona debe ser mayor de edad. (511) 613 8888 (opción 2).\n' +
        '#### 14.2 Rechazo\n' +
        'El cliente podrá rechazar la entrega de cualquier producto al momento del recojo, en tanto se manifieste inconformidad o desista de compra. El extorno se realizará según nuestras políticas de cambios y devoluciones. El proceso de devolución del dinero de la compra iniciará una vez que el producto haya sido entregado a CENCOSUD.\n' +
        '### 15.- Derecho de Anulación\n' +
        'CENCOSUD acepta la anulación de pedidos. Para este fin, el cliente debe solicitar la anulación llamando a nuestra central telefónica al 613-8888 de lunes a viernes 8:30 a 21:00 horas.\n' +
        '-   La anulación para pedidos de abarrotes y perecibles se podrá realizar siempre que el pedido no se encuentre en estado facturado, lo cual será confirmado por nuestro call center.\n' +
        '-   La anulación para pedidos non food (Categorías de Tecnología, Electrodomésticos, Hogar, Deportes y Outdoor, Niños ,Bebes y Mascotas) se podrá realizar dentro de las 24 horas antes de la fecha de entrega del pedido.\n' +
        'Las anulaciones deberán solicitarse llamando a nuestra central telefónica al 613-8888 de lunes a domingo 8:30 a 22:00 horas.\n' +
        'En caso el cliente realizará el pago de su pedido mediante pago en línea, se dará inicio al proceso de devolución por el monto total de la compra al mismo medio de pago utilizado en la transacción, bajo los plazos establecidos por su entidad financiera. En caso de que el cliente realizara el pago de su pedido a través de la plataforma de Pagoefectivo, el monto pagado podrá ser retirado en efectivo en cualquiera de nuestras tiendas físicas previamente, solicitado a nuestro call center.\n' +
        '### 16.- Política de cambios y devoluciones\n' +
        'CENCOSUD acepta cambios y devoluciones de sus productos por motivo de desistimiento, a excepción de:\n' +
        '-   Productos perecibles y/o que requieran refrigeración.\n' +
        '-   Productos que se encuentran en precios de liquidación.\n' +
        '-   Productos que hayan sido abiertos, muestren señales de uso o manipulación y que no cuenten con empaques y/o embalajes originales.\n' +
        'Para realizar cualquier cambio y/o devolución dentro de estos parámetros, el cliente deberá cumplir con las siguientes condiciones y seguir los pasos indicados a continuación:\n' +
        '#### 16.1 Categoría abarrotes\n' +
        'El cliente o la persona responsable, deberá acercarse a una tienda WONG dentro de las 24 horas de haber recibido el pedido, con el/los producto/s a devolver y el comprobante de pago original. WONG realizará el cambio de la mercadería por otra o emitirá una nota de crédito por el monto total de la devolución.\n' +
        '#### 16.2 Categorías non-food\n' +
        'El cliente o la persona responsable deberá gestionar el cambio o devolución llamando a nuestra central telefónica al 613-8888 de lunes a domingo 8:30 a 22:00 horas dentro de los siete (7) días calendario después de haber recibido el pedido, donde recibirá la información necesaria para proceder con la devolución.\n' +
        'Los productos deben estar sin señales de uso, en buen estado y con accesorios completos y empaques originales. Estos productos no serán recibidos en nuestras tiendas y en caso sea necesario pasarán por una revisión técnica, la duración de dicha revisión será estipulada por la marca representante del producto. Para el cambio o devolución por fallas o averías de origen sobre productos sujetos a garantía, se aplicarán las condiciones establecidas en la misma.\n' +
        'Una vez aprobado el cambio o devolución, programaremos el recojo del producto en tu domicilio. Aplicarán costos logísticos.\n' +
        'En el caso de devolución de productos en promoción, se requiere la entrega de todos los productos incluidos en la promoción correspondiente. El cliente deberá gestionar su solicitud a través de Servicio al Cliente llamando a nuestra central 613-8888 de lunes a domingo 8:30hrs a 22:00hrs.\n' +
        'Para la devolución de los pedidos con pago en línea, CENCOSUD gestionará el extorno al mismo medio de pago utilizado por el cliente al realizar el pedido, luego de entregado o recogido el/los producto/s a ser devuelto/s. El extorno del dinero se realizará bajo los plazos establecidos por su entidad financiera.\n' +
        'En caso de devolución de los pedidos con Pagoefectivo, el monto pagado podrá ser retirado en efectivo en cualquiera de nuestras tiendas físicas, luego de la fecha de entrega o recojo del/de los producto/s a ser devuelto/s. y previamente coordinado con nuestro call center.\n' +
        '#### 16.3 Condiciones adicionales\n' +
        'Si el motivo del cambio o devolución es por Cambio de parecer ten en cuenta lo siguiente:\n' +
        '-   No se devolverá el costo de envío original.\n' +
        '-   Se deberá asumir el costo de embalaje y retiro.\n' +
        '-   En caso sea necesario, se deberá asumir el costo de maniobra.\n' +
        '-   En caso se elija un producto sustituto, deberá pagar la diferencia entre el producto original y el nuevo.\n' +
        '-   Se deberá pagar el costo de envío del producto sustituto.\n' +
        '### 17.- Uso de los datos personales registrados en el sitio.\n' +
        'Los datos referidos en estos términos y condiciones tendrán como finalidad validar los pedidos y mejorar la labor de información y comercialización de los productos y servicios prestados por CENCOSUD. Solo podrán ser entregados a las empresas filiales o relacionadas con Cencosud Perú S.A. y proveedores designados para la prestación del servicio de despacho a domicilio. En ningún caso serán traspasados a terceros. Asimismo, sugerimos a los clientes revisar la “Política de Privacidad” de este sitio web para mayor información.\n' +
        '### 18.- Otros sitios web.\n' +
        'CENCOSUD no garantiza, avala ni respalda de ninguna forma el acceso a información o contenido de cualquier otro sitio web o portal.\n' +
        '### 19.- Consultas, Sugerencias y Reclamos.\n' +
        'WONG valora la opinión de sus clientes. Por ello, se ha habilitado una sección de  [Consultas y Sugerencias](https://www.wong.pe/consultas-y-sugerencias), que facilitará la comunicación de dudas o comentarios que los usuarios pudieran tener.\n' +
        'Los clientes podrán comunicarse a nuestra central telefónica al 613-8888 contactándose al área de Servicio al Cliente.\n' +
        'Toda queja o reclamo, relacionada con actos o contratos ejecutados o celebrados a través de esta web, deberá ingresarse en el  [Libro de Reclamaciones Virtual](http://librorec.wong.pe/frmLRRegistro.aspx?str=3BKtK2xvWYWSxvdof6l8RIr7pMdFoEtjONBoYoTABIU%3d&_ga=2.220317272.1349788004.1593362622-1253214257.1593198251).\n' +
        '### 20.- Delimitación de responsabilidad.\n' +
        'CENCOSUD no se responsabiliza frente a los clientes o terceros por los daños y perjuicios que sean consecuencia directa o indirecta de la interrupción, suspensión o finalización de los servicios ofrecidos por el sitio web.\n' +
        '### 21.- Contenido fotográfico como referencia.\n' +
        'Las fotos de productos que aparecen en el sitio son referenciales; pueden existir variantes entre la foto mostrada en  [Wong.pe](https://www.wong.pe/),  [Metro.pe](https://www.metro.pe/)  o sus aplicativos móviles y el producto recibido. Para un mejor detalle, en la ficha o contenido de los productos se podrá encontrar las características de los mismos. Ante la falta de correspondencia entre la fotografía y el producto, primará la información de las características informadas del producto.\n' +
        '### 22.- Pedido de compra de Colchones, Box Tarimas, Camas.\n' +
        'Solo aplican cambios o devoluciones por garantía de fábrica, previa validación por el servicio técnico de la marca y dentro de los alcances de la cobertura indicada en la cartilla de garantía.\n' +
        'Si el pedido incluye más de un producto, estos podrían llegar por separado. En casas o departamentos donde el/los producto/s no se pueda/n subir por ascensor o montacargas, el repartidor solo está autorizado para subir por las escaleras hasta el 4to piso.\n' +
        '### 23.- Pedido de compra de Muebles.\n' +
        'Solo aplican cambios o devoluciones en aplicación de la garantía de fábrica, previa validación por el servicio técnico de la marca y dentro de los alcances de la cobertura indicada en la cartilla de garantía. La garantía de fábrica solo será válida si el producto es abierto, manipulado y armado por el servicio técnico del proveedor.\n' +
        'Si el pedido incluye más de un producto, estos podrían llegar por separado. En casas o departamentos donde el/los productos/s no se pueda/n subir por ascensor o montacargas, el repartidor sólo está autorizado para subir por las escaleras hasta el 4to piso.\n' +
        '### 24.- Solución de conflictos: Arbitraje de Consumo.\n' +
        'Sin perjuicio del derecho al uso del Libro de Reclamaciones, las partes acuerdan que toda controversia, reclamo o inconveniente, relacionada o derivada de este contrato o del producto/servicio que CENCOSUD ofrece en el mercado -incluida cualquier cuestión sobre su validez, cumplimiento o terminación, entre otros-, en el marco de una relación de consumo, serán resueltas de forma definitiva mediante el Arbitraje de Consumo, que es un proceso rápido y gratuito. El Cliente deberá presentar su solicitud de arbitraje ante la Junta Arbitral de Consumo del Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual – INDECOPI o enviarla al correo  [arbitrajedeconsumo@indecopi.gob.pe](mailto:arbitrajedeconsumo@indecopi.gob.pe).\n' +
        'El arbitraje será resuelto por un Tribunal Arbitral, a través de un laudo, de conformidad con el reglamento y las normas aplicables a la materia. El laudo es inapelable y definitivo.\n' +
        '### 25.- Vida útil de productos perecibles y refrigerados:\n' +
        'Cencosud cumple con estrictos procesos de control de calidad para garantizar la inocuidad de sus productos. Por favor, tenga presente los rangos de vida útil que exponemos a continuación para cada categoría de productos perecibles y refrigerados, contados a partir de la fecha de despacho a domicilio o recojo en tienda:\n' +
        '-   Panes granel, artesanales y especiales: Consumir dentro de las 24 horas.\n' +
        '-   Productos de Pastelería y Confitería: Consumir dentro de las 48 horas. Mantener refrigerado.\n' +
        '-   Comidas preparadas, salad bar, salsas y cremas a granel (empacados en tienda): Consumir dentro de las 24 horas. Mantener refrigerado.\n' +
        '-   Delicatesen a granel (Aceitunas, encurtidos, manjar blanco, fudge, mermeladas): Consumir dentro de los 5 días. Mantener refrigerado.\n' +
        '-   Huevos: Consumir dentro de los 7 días\n' +
        '-   Productos cárnicos y aves refrigerado: Mantener refrigerado y consumir dentro de las 48 horas. En caso contrario, congelar inmediatamente y consumir dentro de los 15 días\n' +
        '-   Productos cárnicos y aves congelados: Mantener congelado y consumir dentro de los 30 días.\n' +
        '-   Pescados refrigerados: Consumir dentro de las 24 horas.\n' +
        '-   Pescados congelados: Mantener congelado. Consumir dentro de los 30 días\n' +
        '-   Quesos y embutidos fraccionados: Mantener refrigerado. Consumir dentro de los 3 días.\n' +
        '-   Leches, crema de leche, mezclas lácteas, bebidas lácteas pasteurizadas: Mantener refrigerado. Consumir dentro de los 5 días.\n' +
        '-   Leches, crema de leche, mezclas lácteas, bebidas lácteas: Mantener refrigerado. Consumir dentro de los 15 días\n' +
        '-   Yogures: Mantener refrigerado. Consumir dentro de los 15 días\n' +
        '-   Mantequillas, margarinas: Mantener refrigerado. Consumir dentro de los 15 días.\n' +
        '-   Pulpa y concentrados de fruta refrigerados: Mantener refrigerado. Consumir dentro de los 3 días.\n' +
        '-   Frutas y verduras preparadas: Mantener refrigerado. Consumir dentro de las 48 horas.\n' +
        '-   Frutas y verduras congeladas: Mantener congelado. Consumir dentro de los 30 días.\n' +
        '-   Bebidas a base de frutas pasteurizadas: Mantener refrigerado. Consumir dentro de los 3 días.\n' +
        '-   Jugos pasteurizados: Mantener refrigerado. Consumir dentro de los 7 días\n' +
        '-   Masas refrigeradas, pre pizza: Mantener refrigerado. Consumir dentro de los 7 días\n' +
        '-   Masa wantán, fideos chinos: Mantener refrigerado. Consumir dentro de los 5 días.\n' +
        '-   Chancaca: Mantener a temperatura ambiente no mayor a 25°C. Consumir dentro de los 15 días.\n' +
        '-   Frutos secos y snacks artesanales: Mantener a temperatura ambiente no mayor a 25° y consumir dentro de los 15 días.\n' +
        '-   Frutas y Verduras en estado natural: Los periodos de maduración varían en función a la temperatura ambiental y temporada. No exponer a temperaturas mayores a 20°C”',
      order: 20,
      helpCategory: context.institucionalWong,
      icon: '/icons/cards/textConfig.svg',
      description: 'Conoce las reglas y condiciones que rigen la relación entre Wong y sus clientes.',
    });

    context.institucionalPrimerWong = em.create(HelpContent, {
      label: 'Wong Primer',
      reference: '/terminos-y-condiciones-wong-prime',
      content:
        '# TÉRMINOS Y CONDICIONES DEL PROGRAMA WONG PRIME\n' +
        'Estos términos y condiciones generales (los "Términos y Condiciones” o “TyC”, indistintamente) informan y regulan las condiciones de uso del Programa Wong Prime a los Usuarios suscritos a mismo (los “Usuarios”). Cualquier persona que desee acceder y/o usar los servicios del Programa Wong Prime podrá hacerlo respetando estos Términos y Condiciones, junto con todas las demás políticas y condiciones aplicables.\n' +
        'Estos TyC son de carácter general. Los Términos y Condiciones aplicables a los beneficios otorgados en cada solicitud de compra o realización de compra en lo específico son los informados al “Usuario”, quien deberá revisar y leer detenidamente las condiciones indicadas en cada beneficio antes de generar su solicitud de compra.\n' +
        'Estos Términos y Condiciones generales tienen carácter obligatorio y vinculante.\n' +
        '### DEFINICIONES\n' +
        'A. “Programa Wong Prime”:  Wong Prime es un Programa de beneficios exclusivos. El objetivo del programa es que nuestros usuarios inscritos obtengan una mejor experiencia de compra y beneficios adicionales tanto en el sitio web como en el aplicativo de supermercados Wong. Esto se materializa mediante la entrega de diferentes beneficios, además de la comunicación de oportunidades y ofertas, según lo informe Wong Prime. El Programa estará disponible en el sitio web  [www.wong.pe](http://www.wong.pe/)  y en la App Wong para que los clientes interesados puedan adquirir la suscripción.\n' +
        'B. “Usuarios”:  Aquellas personas naturales que se suscribieron al Programa Wong Prime y que fueron previamente aprobadas según establecen estos Términos y Condiciones.\n' +
        'C. “Web Wong”:  Se refiere a  [www.wong.pe](http://www.wong.pe/)\n' +
        'D. “App Wong”:  Aplicativo disponible para dispositivos móviles de la marca Wong\n' +
        '### 1. CONDICIONES GENERALES DEL PROGRAMA WONG PRIME\n' +
        'Wong Prime es un programa de beneficios para el Usuario, organizado por Cencosud Retail Perú S.A. (en adelante, Cencosud), RUC 20109072177, domiciliado para estos efectos en Calle Augusto Angulo 130, distrito de Miraflores, provincia y departamento de Lima, a través del cual se ofrece un servicio que otorga beneficios complementarios a aquellos aplicados para las compras de productos en las plataformas digitales Web Wong y App Wong. La entrega de los beneficios está sujeta a restricciones que serán debidamente informadas.\n' +
        'El servicio del Programa Wong Prime se encuentra referido a: i) el otorgamiento de beneficios en las compras realizadas por los Usuarios en la App Wong y la Web Wong, ii) brindar información sobre los alcances de estos beneficios del Programa Wong Prime en la Web Wong o en la página del Programa Wong Prime, y, iii) el registro de usuarios. El costo de la suscripción se encuentra publicado en el sitio web:  [www.wongprime.pe](http://www.wongprime.pe/). El precio puede variar, pero se respetará durante el periodo de vigencia de cada suscripción. La variación del precio será informada oportunamente y antes de la finalización del periodo de vigencia de la suscripción, a fin de que el Usuario puede optar por renovar la suscripción o por la cancelación del servicio si así lo considerase pertinente.\n' +
        'En el caso de los beneficios indicados en el Programa Wong Prime que no se encuentren referidos a productos o servicios de Cencosud, sino de otros socios comerciales, el cumplimiento de estos beneficios será ejecutado por los referidos socios comerciales respetando las disposiciones del Código de Protección y Defensa del Consumidor y bajo los términos indicados en la página del Programa Wong Prime.\n' +
        'La lista enunciativa, mas no limitativa, de los beneficios del Programa Wong Prime se encuentra establecida en el Anexo A de los TyC. La modificación de los beneficios como consecuencia de la modificación de los TyC se realiza conforme a lo indicado en la cláusula 12.\n' +
        '### 2. USUARIOS DEL PROGRAMA\n' +
        'Podrán participar del programa todos aquellos que cumplan con los siguientes requisitos:\n' +
        'A.  Ser persona natural, mayor de 18 años, debidamente identificada. El Programa sólo está disponible para personas con capacidad legal para contratar. No podrán utilizarlo las personas menores de 18 años de edad, ni los Usuarios cuyas Cuentas de usuario hayan sido suspendidas temporalmente o inhabilitados deﬁnitivamente conforme a los supuestos recogidos a lo largo de los TyC.\n' +
        'B.  Haber cumplido con el proceso de inscripción del programa. El Usuario debe ingresar a la página web:  [www.wongprime.pe](http://www.wongprime.pe/)  y suscribirse al programa.\n' +
        'C.  Una vez completado el formulario de inscripción, los usuarios deberán registrar una tarjeta de crédito válida y realizar los protocolos de autentificación. Cencosud se reserva el derecho de aceptar o rechazar la solicitud de suscripción atendiendo a las situaciones indicadas en los TyC, lo cual será informado vía correo electrónico en un plazo máximo de 24 horas desde la fecha de solicitud de suscripción. En el supuesto que se rechace la solicitud de suscripción se remitirán las razones por las cuales se ha adoptado esta decisión. En el supuesto en el que la solicitud sea aceptada, el cliente quedará activo en la plataforma de forma gratuita en el marco de una promoción de lanzamiento que se denomina “Periodo gratuito”. Cabe indicar que los protocolos de autentificación de las tarjetas de crédito efectuados por las instituciones bancarias suelen requerir de una retención mínima de aproximadamente S/1, la cual puede variar según cada tarjeta y/o institución bancaria. En tal sentido, los usuarios declaran conocer y aceptar este procedimiento bancario.\n' +
        '### 3. CONDICIONES DE LA SUSCRIPCIÓN\n' +
        'El Periodo gratuito se extiende por un plazo de 15 días calendario desde la fecha de suscripción, contabilizada desde el día posterior en el que realizó y aceptó la suscripción por parte de Cencosud. Luego de esa fecha, Cencosud realizará un cobro por el periodo de seis meses de membresía, de acuerdo con los valores vigentes estipulados en el sitio web  [www.wongprime.pe](http://www.wongprime.pe/). Si el cliente no desea realizar el pago, deberá cancelar su suscripción en cualquier momento hasta antes de terminar el plazo señalado para el “Periodo gratuito”, hasta las 23:59 horas. Este periodo gratuito únicamente podrá ser utilizado en una sola oportunidad por el usuario, independientemente del número de días que hizo uso de él, o del número de oportunidades en que se inscribió en el Programa.\n' +
        'Para utilizar los beneficios ofrecidos en el Programa Wong Prime, el Usuario debe estar inscrito en los registros de la Web Wong, App Wong y las plataformas de los otros socios comerciales que otorguen beneficios, y el correo electrónico y datos de identificación del Usuario deben coincidir con aquellos registrados en sus respectivos sitios web. El Usuario deberá revisar el correcto registro de sus datos de usuario en la Web Wong, App Wong y las plataformas de los otros socios comerciales que otorguen beneficios, a fin de poder hacer efectivos los beneficios del Programa Wong Prime.\n' +
        'Mediante la aceptación de estos Términos y Condiciones, el Usuario acepta y autoriza en forma expresa que la membresía del Programa Wong Prime se renovará automáticamente una vez finalizado el “período gratuito”, por períodos de 6 meses, efectuándose cada cargo respectivo en la tarjeta registrada, en un plazo de 15 días a contar desde el término del “período de prueba gratuito” o, posteriormente a ello, desde el término de cada período de 6 meses de suscripción. En caso de que no se pueda realizar el cobro en la tarjeta registrada por el Usuario, se procederá a solicitar el reemplazo de ésta, vía correo electrónico y mediante mensajes en su portal de usuario Prime. Desde el momento que se envía el correo de aviso, los beneficios del usuario serán bloqueados temporalmente hasta la reactivación. Para la reactivación se debe reemplazar la tarjeta por un medio de pago válido, mediante el inicio de sesión a la cuenta Usuario. El cobro se hará en las próximas 24 horas, desde el reemplazo.\n' +
        'En caso de que el cliente no realice un reemplazo de la tarjeta en un plazo de 24 horas a partir de la fecha y hora del envío del correo electrónico respectivo, la membresía no se renovará.\n' +
        'Cencosud enviará al Usuario un correo electrónico al email registrado en el programa 7 días antes del término del “período de prueba gratuito” y de cada período de suscripción, informando 1) la fecha de término del “período de prueba gratuito” o del respectivo período de suscripción, 2) la renovación automática de la suscripción, 3) los mecanismos para cancelar la suscripción y, por ende, la renovación automática, 4) la fecha en que se efectuará el cargo en la tarjeta registrada, correspondiente al siguiente período de suscripción si el Usuario no hubiera cancelado la suscripción a más tardar el día de término del “período de prueba gratuito” o el período de suscripción vigente, y, 5) en caso exista un incremento en el monto de la suscripción este será debidamente informado.\n' +
        'El usuario puede cancelar la suscripción al Programa Wong Prime en cualquier momento comunicándose a través del Call Center +511 6138888 o por el sitio web:  [www.wongprime.pe](http://www.wongprime.pe/). En un plazo máximo de 48 horas se habrá generado la cancelación de la suscripción.\n' +
        'Luego del proceso de suscripción y aprobación del usuario, Cencosud se reserva un plazo de hasta 24 horas para activar los beneficios, los cuales no serán contabilizados dentro del “Periodo Gratuito”. Para lo anterior, el Usuario deberá proporcionar datos válidos, exactos, precisos y verdaderos al completar el formulario de registro. La información personal que el Usuario pone a disposición debe mantenerse actualizada. Cencosud podrá corroborar Datos Personales y suspender, temporal o deﬁnitivamente, a aquellos Usuarios cuyos datos no hayan podido ser conﬁrmados y/o que resulten no ser verdaderos. El Usuario accederá a su cuenta personal ("Cuenta") mediante el ingreso de un correo electrónico asociado al Programa, y de una clave de seguridad personal que debe elegir y definir ("Clave de Seguridad"), a través de la Web Wong o del App Wong.\n' +
        'El Usuario se obliga a mantener la conﬁdencialidad de su Clave de Seguridad. La Cuenta es personal, única e intransferible. El Usuario será responsable por todas las operaciones efectuadas en su Cuenta. El Usuario se compromete a notiﬁcar a Cencosud en forma inmediata a través de los canales de contacto o comunicación que se mantendrán informados en  [www.wong.pe](http://www.wong.pe/), sobre cualquier uso no autorizado de su Cuenta, así como el ingreso por terceros no autorizados a la misma. Se aclara que está prohibida la venta, cesión o transferencia de la Cuenta bajo ningún título.\n' +
        '### 4. COMPRA DE PRODUCTOS, BIENES, SERVICIOS, OFERTAS Y/O PROMOCIONES\n' +
        'Cencosud y sus socios comerciales son responsables de respetar las garantías legales establecidas por la Ley 29571, Código de Protección y Defensa del Consumidor por la compra de productos, bienes, servicios y/u ofertas promocionales, en los ámbitos de responsabilidad que alcanzan a cada uno de ellos, en sus diferentes calidades de plataforma y proveedores, respectivamente.\n' +
        'Se recomienda que el Usuario mantenga sus datos actualizados para que la experiencia de compra sea óptima y segura. Si tiene alguna inquietud puede contactarse a nuestro Call Center al: +511 6138888 o consultar a través del formulario de preguntas y reclamos en el portal de cliente del Programa Wong Prime del sitio web:  [www.wongprime.pe](http://www.wongprime.pe/).\n' +
        '### 5. VIGENCIA DEL PROGRAMA WONG PRIME Y TERMINACIÓN ANTICIPADA\n' +
        'La vigencia del Programa Wong Prime será indefinida. Cencosud se reserva el derecho a terminar anticipadamente el Programa, lo que será informado oportuna y debidamente a los Usuarios. Si Cencosud cancela la suscripción por término anticipado del programa, automáticamente se procesará una devolución a favor del Usuario por el monto de dinero equivalente al proporcional que falte para el término del período de suscripción.\n' +
        'En el caso que Cencosud cancele la suscripción por el uso indebido del programa, o por entrega por parte del Cliente de información errada o no efectiva, o por incumplimiento de cualquiera de los deberes que se establecen en estos Términos y Condiciones, y/o por cualquier acción u omisión que implique algún tipo de fraude en contra de Cencosud, su matriz y/o sus filiales o relacionadas, tales como falsificación, suplantación de personas o identidad, adulteración de información, etc., entonces se gestionará la devolución por el monto de dinero equivalente al proporcional que falte para el término del período de suscripción y quedará impedido de reinscribirse en la plataforma.\n' +
        '### 6. RENUNCIA AL PROGRAMA\n' +
        'En cualquier momento el Usuario podrá renunciar al Programa Wong Prime, lo cual informará expresamente a Cencosud, llamando al Call Center +511 6138888 o a través del portal de usuario Wong Prime, sección “Mi Cuenta”.\n' +
        'Si la renuncia al Programa Wong Prime es realizada durante los primeros 10 días desde el pago o renovación de la suscripción, y el usuario no utilizó alguno de los beneficios ofrecidos por el programa durante dicho período de 10 días, entonces se devolverá el 100% del costo de la membresía. La renuncia en cualquier otro momento durante la vigencia de la membresía o habiendo utilizado alguno de los beneficios de la membresía no dará derecho a devolución o restitución del dinero; sin embargo, los beneficios seguirán vigentes hasta el término del período de suscripción respectivo.\n' +
        'En el caso de un usuario que haya cancelado su suscripción o renunciado al Programa Wong Prime y luego desee reingresar, no tendrá “periodo gratuito”, conforme a lo señalado en el punto 2 de estos TyC, y el cobro a la tarjeta se realizará en el momento del reingreso.\n' +
        '### 7. DATOS PERSONALES DE LOS USUARIOS\n' +
        'Para efectuar solicitudes de compra u otras actividades en Wong Prime, los Usuarios deberán informar y/o proporcionar los datos de carácter personal necesarios para que se pueda verificar, confirmar o rechazar su solicitud, despachar y entregar los productos, en caso de proceder. Por lo anterior, hacemos hincapié e informamos que cuando el Usuario envía una solicitud de compra o de pedido, presta su consentimiento inequívoco para que Wong Prime pueda compartir los Datos Personales relevantes para la gestión de las solicitudes.\n' +
        'La información personal se procesa y almacena en servidores o medios magnéticos que mantienen altos estándares de seguridad y protección tanto física como tecnológica. Para mayor información sobre la privacidad de los Datos Personales y los casos en los que será revelada la información personal, se pueden consultar nuestras Políticas de Privacidad y Uso de Datos Personales aplicables al Programa Wong Prime en  [https://www.wong.pe/institucional/politicas-privacidad-seguridad](https://www.wong.pe/institucional/politicas-privacidad-seguridad).\n' +
        '### 8. OBLIGACIONES DE LOS USUARIOS\n' +
        'Antes de solicitar la compra o canje de un producto o beneficio, el Usuario debe leer y revisar cuidadosa, detallada y responsablemente la información publicada sobre la identificación del bien o producto, los instructivos de uso, los términos de las garantías, su precio, condiciones de contratación y otras características relevantes. El Usuario debe tener muy presente que, una vez enviada la solicitud de compra, él y la Marca Participante quedarán obligados por las condiciones de venta incluidas en la descripción del artículo.\n' +
        '### 9. DERECHOS DE LOS USUARIOS EN WONG PRIME\n' +
        'Cencosud y/o sus socios comerciales son responsables de gestionar las peticiones de los Usuarios derivadas de las solicitudes de beneficios del Programa Wong Prime.\n' +
        '### 10. SANCIONES. SUSPENSIÓN DE OPERACIONES\n' +
        'Sin perjuicio de otras medidas, Wong Prime podrá advertir, suspender en forma temporal o inhabilitar deﬁnitivamente la Cuenta de un Usuario si el titular de aquella incurriera en conductas contrarias a la ley, la moral, el orden público y/o las buenas costumbres; así como conductas contrarias a los términos y condiciones y políticas de Web Wong, App Wong y de nuestros socios comerciales.\n' +
        'Términos y condiciones de la Web Wong:…………………………  \n' +
        'Términos y condiciones de la App Wong:………………………….\n' +
        '### 11. PROPIEDAD INTELECTUAL.\n' +
        'Todo contenido relativo a los servicios de Wong Prime como así también los programas, bases de datos, redes, archivos, entre otros, que permiten al Usuario acceder y usar su Cuenta, son de propiedad de Cencosud y están protegidas por las leyes y los tratados internacionales de propiedad intelectual, en particular en materia de marcas, derechos de autor y secretos empresariales e industriales. El uso indebido y la reproducción total o parcial de dichos contenidos quedan prohibidos, salvo autorización expresa y por escrito de Cencosud.\n' +
        '### 12. MODIFICACIONES DE LOS TÉRMINOS Y CONDICIONES\n' +
        'Wong Prime podrá modiﬁcar los Términos y Condiciones en cualquier momento informando en el sitio web:  [www.wongprime.pe](http://www.wongprime.pe/)  los términos modiﬁcados, los que, en todo caso, no afectarán las condiciones del Programa del Usuario durante su vigencia. Los términos y Condiciones, y sus modificaciones serán comunicados en la página web y vía correo electrónico a lo menos 10 (diez) días antes de su entrada en vigencia.\n' +
        'En caso de que el Usuario de Wong Prime no desee continuar con el Programa deberá realizarlo de acuerdo al procedimiento establecido en el numeral 6 ”Renuncia al programa“.\n' +
        '### 13. TÉRMINOS Y CONDICIONES DEL PAGO\n' +
        'Los productos y servicios ofrecidos en la Web Wong o el App Wong, salvo que se señale una forma diferente para casos particulares u ofertas de determinados bienes o servicios, sólo pueden ser pagados de acuerdo con los medios de pago aceptados en estas plataformas.\n' +
        'Los productos y servicios ofrecidos mencionados en el párrafo anterior, salvo que se señale una forma diferente para casos particulares u ofertas de determinados bienes o servicios, sólo pueden ser pagados con Tarjetas de Débito o Crédito habilitadas.\n' +
        'Cargos en Tarjeta de Débito o Crédito: Una vez registrada una tarjeta se habilitará el periodo gratuito para el Usuario, el cual tendrá vigencia de 15 días corridos posterior a la suscripción. Si el Usuario no cancela su suscripción al Programa antes de esa fecha, se generará un movimiento o cargo en su tarjeta, correspondiente al primer período o, luego de ello, al periodo de renovación, por el monto informado en la página web  [www.wongprime.pe](http://www.wongprime.pe/).\n' +
        '### 14. PROMOCIONES\n' +
        'El programa Wong Prime, a través de Cencosud y/o sus socios comerciales, podrán ofrecer a sus Usuarios ofertas, promociones, beneficios, concursos por medio de cupones promocionales u otros medios, para los cuales el Usuario deberá aceptar adicionalmente las bases de promoción o similar del oferente de la promoción respectiva.\n' +
        'Todas las bases promocionales de concurso, o similares, estarán debidamente publicadas en la Web Wong y/o el App Wong y por el oferente de la Promoción.\n' +
        '### 15. DOMICILIO PARA RECIBIR NOTIFICACIONES.\n' +
        'Cencosud Retail Perú S.A. R.U.C: 20109072177. Domicilio: Calle Augusto Angulo 130, Miraflores – Lima.\n' +
        'El Usuario autoriza el correo electrónico registrado en la plataforma Wong Prime como medio de comunicación válido a efectos de remitir toda la información y avisos correspondientes a los presentes Términos y Condiciones y el Programa Wong Prime.\n' +
        '#### Anexo A\n' +
        'Los beneficios que serán otorgados a los Usuarios por Cencosud y/o sus socios comerciales en el Programa Wong Prime son los siguientes:\n' +
        'A.  Despacho a costo S/ 0 en compras de supermercado desde S/ 79,90: El beneficio de despachos a costo S/ 0 será otorgado por Cencosud y podrá ser aplicado en las compras realizadas en Wong.pe y App Wong de productos de supermercado (abarrotes y perecibles), excluyéndose productos de electrodomésticos, tecnología, colchones, productos para bebés, juguetería, vestuarios, y muebles. Para utilizar este beneficio se considerará como monto mínimo en las compras el valor de S/ 79,90. Las zonas y áreas de despacho serán las consideradas y disponibles según lo indicado en la Web Wong y el App Wong.\n' +
        'B.  Despacho a costo S/ 0 en productos de electrodomésticos, tecnología, colchones y muebles: El beneficio de despacho a costo S/ 0 será otorgado por Cencosud y podrá ser aplicado en las compras realizadas por Wong.pe y App Wong en productos de electrodomésticos, tecnología, colchones y muebles como máximo hasta dos veces por mes. Para acceder a este beneficio se considerará como monto mínimo S/ 299,00 en las categorías mencionadas. Las zonas y áreas de despacho serán las consideradas y disponibles según lo indicado en la Web Wong y el App Wong.\n' +
        'C.  Ofertas exclusivas a Usuarios de Wong Prime: Sin perjuicio de lo anterior, Wong Prime podrá realizar ofertas, promociones y/o beneficios, cuyas condiciones serán informadas oportunamente por la vía que Wong Prime estime conveniente.\n' +
        'D.  Doble Puntos Bonus en sitio web y Aplicativo móvil: El beneficio será otorgado por el socio comercial Loyalty Perú S.A.C. y consiste en duplicar el bono de puntos por cada compra que el cliente suscrito a Wong Prime realice en Web Wong o App Wong. Se tomará como referencia para la aplicación de este beneficio lo establecido en los Términos y Condiciones del programa Puntos Bonus.\n' +
        'E.  Descuento Primax: El beneficio será otorgado por el socio Coesti S.A. con la intervención de Corporación Primax S.A. El usuario podrá acceder descuentos en los Grifos Primax seleccionados, el cual aplicará dependiendo del tipo de combustible y la región del país. El Usuario podrá suscribirse a este beneficio después de 24 horas de realizada su suscripción en el Programa Wong Prime en  [https://primax.com.pe/convenios/](https://primax.com.pe/convenios/). La acreditación, la vigencia y uso del beneficio se rige bajo los términos y condiciones del programa, disponibles en  [https://primax.com.pe/wp-content/uploads/2022/09/Convenios-TyC-Beneficios-vf.pdf](https://primax.com.pe/wp-content/uploads/2022/09/Convenios-TyC-Beneficios-vf.pdf)\n' +
        'F.  Portal Prime: Canal de atención exclusiva otorgado por Cencosud para usuarios prime en donde se contará con una casilla de correo exclusiva para la atención de sus operaciones.',
      order: 30,
      helpCategory: context.institucionalWong,
      icon: '/icons/cards/bag.svg',
      description: 'Conoce los términos y condiciones del uso de beneficios, enviós y descuentos exclusivos.',
    });

    context.institucionalGestionWong = em.create(HelpContent, {
      label: 'Gestión de Residuos de Aparatos Eléctricos y Electrónicos (RAEE)',
      reference: '/raee',
      content:
        '# Gestión de Residuos de Aparatos Eléctricos y Electrónicos (RAEE)\n' +
        '## Programa de reciclaje en Wong Metro\n' +
        'Con el propósito de continuar contribuyendo con el cuidado del medio ambiente y la promoción del consumo responsable en nuestros clientes y operaciones, Cencosud Perú promueve activamente el reciclaje de RAEE a través de campañas de sensibilización y educación al consumidor. Asimismo, ha puesto a disposición 26 puntos de acopio de reciclaje de RAEE en sus tiendas Wong y Metro, abiertos para todo el público.\n' +
        '## Alianza con Reverse Logistics Group\n' +
        'Para garantizar la correcta disposición de esta clase de residuos generados en la operación y en los puntos de acopio de Wong y Metro, nos asociamos con Reverse Logistics Group (RLG), una organización líder en la recuperación, reciclaje y destrucción de los RAEE. Quienes se encargan de recoger los residuos de nuestras tiendas y darles el tratamiento adecuado evitando contaminar el medio ambiente en el proceso.\n' +
        '## ¿Qué RAEE podemos reciclar?\n' +
        'Puedes colocar dentro de nuestros contenedores de reciclaje de RAEE:\n' +
        '-   Pequeños electrodomésticos:  freidoras, cafeteras, hervidores, cuchillos eléctricos, licuadoras, sangucheras, batidoras, procesadores de alimentos, ollas de cocción, aparatos utilizados para cocinar, extractores de jugo, planchas, vaporizadores, aspiradoras, lustradoras y otros aparatos de limpieza y mantenimiento doméstico. Aparatos para cortar el cabello, para secar el cabello, para cepillarse los dientes, máquinas de afeitar, aparatos de masajes y otros cuidados corporales. Aparatos utilizados para coser, hacer punto, tejer y para otros procesos de tratamiento de textiles, relojes y aparatos destinados a medir, indicar o registrar el tiempo, balanzas.\n' +
        '-   Equipos de informática y telecomunicaciones:  grandes computadoras, mini computadoras, computadoras personales (incluye CPU, mouse, monitor y teclado) computadoras portátiles (notebook, notepad, laptop), tabletas, disco duro externo, dispositivo electrónico para lectura de libros digitales, agendas digitales, calculadoras de mesa o de bolsillo. Otros aparatos para el almacenamiento, procesamiento, presentación o comunicación de información de manera electrónica. Impresora, fotocopiadora, escáneres, multifuncional, máquina de escribir eléctrica o electrónica, plotter, incluidos sus consumibles (cartuchos de impresión, tóner, entre otros). Sistemas y terminales de usuario, terminales de fax, terminales detelex, teléfonos fijos (alámbricos e inalámbricos), teléfonos móviles (celulares), smart watch, contestadores automáticos, modem, routers, aparatos de navegación satelital móviles, aparatos eléctricos y electrónicos de los radares, antenas o equipos para transmisión de información, incluidos accesorios y periféricos, otros aparatos eléctricos y electrónicos de transmisión de sonido, imágenes u otra información por telecomunicación).\n' +
        '-   Aparatos electrónicos de consumo:  radios, televisores, cámaras fotográficas, videocámaras, blu ray, proyector, vídeos, cadenas de alta fidelidad, amplificadores de sonido, instrumentos musicales, otros productos o aparatos utilizados para registrar o reproducir sonido o imágenes, incluidas las señales y tecnologías de distribución del sonido e imagen distintas de la telecomunicación, incluidos accesorios y periféricos.\n' +
        '-   Juguetes o equipos deportivos y de tiempo libre:  trenes eléctricos o coches en pista eléctrica, consolas de videojuegos, otros juguetes eléctricos o electrónicos. Máquinas tragamonedas, máquinas de juego en general, ordenadores para realizar ciclismo, submarinismo, correr, remar, otros similares; artículos deportivos con componentes eléctricos o electrónicos, vehículos eléctricos de dos o tres ruedas (bicicletas eléctricas, scooter), dispositivos personales de monitoreo de ejercicio y/o seguimiento de actividad física, otros equipos deportivos y de tiempo libre.\n' +
        '## Puntos de acopio\n' +
        'Contamos con 26 puntos de acopio para RAEE. Encuentra el más cercano a ti.\n' +
        '-   Wong:\n' +
        '    -   Wong Las Retamas\n' +
        '    -   Wong Camacho\n' +
        '    -   Wong La Planicie\n' +
        '    -   Wong Marsano\n' +
        '    -   Wong Aldabas\n' +
        '    -   Wong Ate\n' +
        '    -   Wong Aurora\n' +
        '    -   Wong Benavides\n' +
        '-   Metro:\n' +
        '    -   Metro Venezuela (Breña)\n' +
        '    -   Metro Limatambo (San Borja)\n' +
        '    -   Metro La Marina (San Miguel)\n' +
        '    -   Metro Uni (Rimac)\n' +
        '    -   Metro Canadá (La Victoria)\n' +
        '    -   Metro Colonial (Callao)\n' +
        '    -   Metro Bellavista (Callao)\n' +
        '    -   Metro Pascana (Comas)\n' +
        '    -   Metro Independencia\n' +
        '    -   Metro Faucett (San Miguel)\n' +
        '    -   Metro Schell (Miraflores)\n' +
        '    -   Metro El Retablo (Comas)\n' +
        '    -   Metro Próceres de la Independecia Esq. Calle las Flores\n' +
        '    -   Metro San Juan de Lurigancho\n' +
        '    -   Metro Puruchuco (Ate)\n' +
        '    -   Metro Huaylas\n' +
        '    -   Metro Grau Barranco\n' +
        '    -   Metro Chorrillos\n' +
        'Cencosud Perú no se hace responsable de la información que quede en los RAEE entregados para su reciclaje.',
      order: 40,
      helpCategory: context.institucionalWong,
      icon: '/icons/cards/pc.svg',
      description: 'Conoce  la responsabilidad ambiental de la empresa y cómo puedes participar.',
    });

    context.institucionalCencosudWong = em.create(HelpContent, {
      label: '¿Qué es Cencosud?',
      reference: '/cencosud',
      content:
        '#  ¿Qué es Cencosud?\n' +
        'Somos uno de los más grandes y prestigiosos conglomedaros de retail en América Latina. Contamos con operaciones activas en Argentina, Brasíl, Chile, Perú y Colombia, donde día a día desarrollamos una exitosa estrategía multiformato que hoy da trabajo a más de 140 mil colaboradores.\n' +
        '## Nuestra Misión\n' +
        '“Nuestra misión consiste en trabajar, día a día, para llegar a ser el retailer más rentable y prestigioso de América Latina, en base a la excelencia en nuestra calidad del servicio, el respeto a las comunidades con las que convivimos y el compromiso de nuestro equipo de colaboradores”.\n' +
        '## Operaciones\n' +
        'Nuestras operaciones se extienden a través de diferentes líneas de negocios, tales como supermercados, mejoramiento del hogar, tiendas por departamento, centros comerciales y servicios financieros. Esto nos ha convertido en la compañía de capitales latinoamericanos más diversificada del Cono Sur y con la mayor oferta de metros cuadrados. Adicionalmente, desarrollamos otras líneas de negocio que complementan nuestra operación central, como es el corretaje de seguros y centros de entretención familiar.  \n' +
        'Desde el 2008 iniciamos nuestras operaciones en Perú y hoy consolidamos nuestro portafolio con más de 100 establecimientos en nuestras cuatro unidades de negocio: supermercados, tiendas por departamento, centros comerciales y servicios financieros.  \n' +
        'Todos ellos cuentan con un gran reconocimiento y prestigio entre los consumidores, con marcas que destacan por su calidad, excelente nivel de servicio y satisfacción al cliente.',
      order: 50,
      helpCategory: context.institucionalWong,
      icon: '/icons/cards/help.svg',
      description: 'Conoce sobre la empresa matriz de Wong y otras marcas en América Latina.',
    });
  }
}
