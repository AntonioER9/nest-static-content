import { EntityManager, Dictionary } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { HelpContent } from 'modules/content/help-category/entities/help-content.entity';

export class HelpContentEasySeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    //============ COMPRAR EASY ============//
    context.politicaSeguridadEasy = em.create(HelpContent, {
      label: 'Cómo evitar fraudes',
      reference: '/politica-seguridad',
      content:
        '# Políticas de Seguridad\n' +
        '\n' +
        '## Queremos recomendarte estos consejos para evitar ser víctima de fraudes\n' +
        '\n' +
        '### Protege tu cuenta\n' +
        'Nunca vamos a pedirte tu usuario y contraseña para poder ayudarte con alguna compra o problema que hayas tenido.  \n' +
        '  No necesitamos tus claves para resolver consultas que tengas.\n' +
        '\n' +
        '### Crea una clave de forma segura\n' +
        'Crea una clave de acceso robusta que en lo posible contenga mayúsculas y minúsculas, números y caracteres especiales.\n' +
        '\n' +
        '### Guarda la página web en favoritos\n' +
        'Siempre que quieras acceder a nuestro sitio, hazlo tipeando  *Easy.cl* directamente en el navegador y no lo hagas a través de ningún link que te llegue. Guarda la dirección en tus favoritos para futuros accesos y que no la tengan que tipear nuevamente.\n' +
        '\n' +
        '### Redes Sociales\n' +
        'Nuestras cuentas y canales oficiales son:\n' +
        '-   **Facebook:**  facebook.com/EasyChile/\n' +
        '-   **Instagram:**  @easytienda\n' +
        '-   **Twitter:**  @easytienda\n' +
        '\n' +
        'Siempre verifica que tenga el tilde azul junto al nombre.\n' +
        '\n' +
        '### Verifica la dirección de correo electrónico\n' +
        'Presta atención a la dirección de correo electrónico del remitente.\n' +
        '\n' +
        '## Phishing\n' +
        '¡No te dejes engañar! Desde  **Easy.cl**  nunca te enviaremos un correo solicitando que ingreses el número de tu tarjeta de crédito, email de registro o clave secreta. Si tienes dudas, contáctate con nosotros por los canales oficiales.\n' +
        '\n' +
        '### Nuestra página oficial\n' +
        'Nuestro sitio oficial es  *Easy.cl*.\n' +
        '\n' +
        '### Evita correos extraños\n' +
        'No respondas correos que requieran información personal.\n' +
        '\n' +
        '### Reporta casos sospechosos\n' +
        'Si recibes algún contacto por otro lado, por favor te pedimos que lo reportes a nuestro número telefónico 600 600 3010.\n' +
        '\n' +
        '### Contacta por canales oficiales\n' +
        'Ante cualquier duda llámanos para verificar el origen o contáctanos por los canales oficiales.',
      order: 3,
      helpCategory: context.comprarEasy,
      icon: '/icons/cards/text.svg',
      description: 'Revisa los consejos que ofrecemos para evitar ser víctima de fraudes.',
    });

    context.comoComprarEasy = em.create(HelpContent, {
      label: 'Cómo comprar',
      reference: '/como-comprar',
      content:
        '# Cómo comprar en Easy.cl\n' +
        '\n' +
        'Ingresa a [Easy.cl](https://www.easy.cl/) y busca los productos que necesitas. Puedes hacerlo a través del menú o bien mediante el buscador. Una vez que los encuentres sigue los siguientes pasos:\n' +
        '\n' +
        '- Agrega al carro de compras los artículos que deseas.\n' +
        '- Para seguir con el proceso de compra, tienes 3 opciones: registrarte, ingresar a tu cuenta o comprar sin registrarte.\n' +
        '- Una vez listo tu pedido, selecciona entre Despacho a domicilio o Retiro en tienda.\n' +
        '- Selecciona la forma de pago: tarjeta Cencosud, tarjeta de crédito bancaria o tarjeta de débito.\n' +
        '- Escoge boleta o factura, según tus necesidades.\n' +
        '- Finalmente recibirás en tu correo registrado en [Easy.cl](https://www.easy.cl/) un resumen de la transacción que podrás imprimir para consultar por tu pedido.\n' +
        '\n' +
        '## ¿Cuáles son los pasos para comprar en Easy.cl?\n' +
        'Agrega tus productos al carro y presiona **Ir al carro de compras**.\n' +
        '```IconTable\n' +
        '{"textPosition":"bottom", "columns":1, "columnsDesktop":2, "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/flujocompra-1.png", "text": "", "weight": "", "size": "", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/flujocompra-2.png", "text": "", "weight": "", "size": "", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/flujocompra-3.png", "text": "", "weight": "", "size": "", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/flujocompra-4.png", "text": "", "weight": "", "size": "", "reference": ""}]}\n' +
        '```\n' +
        '\n' +
        '- Otra alternativa para realizar una compra es mediante Fonocompras. Debes llamar al [600 600 3279](tel:6006003279) y un ejecutivo te asesorará.\n' +
        '\n' +
        '## Medios de pago\n' +
        '\n' +
        'En [Easy.cl](https://www.easy.cl/) puedes pagar tus compras con los siguientes medios de pago:\n' +
        '\n' +
        '- Tarjeta de crédito: Son aceptadas las tarjetas de crédito de bancos y casa comerciales nacionales (Solo de Chile). Recuerda seleccionar el número de cuotas.\n' +
        '- Tarjeta de débito / Redcompra: Puedes pagar con cualquier tarjeta de débito o red compra de los diferentes bancos.\n' +
        '- Tarjeta Cencosud y Tarjeta Scotiabank Cencosud: Son aceptadas las Tarjetas Cencosud y las tarjetas de crédito Scotiabank Cencosud Visa o Mastercard. Al escoger este medio de pago podrás acceder a descuentos y promociones exclusivas.\n' +
        '\n' +
        'En [easy.cl](https://www.easy.cl/) no se permite pagar con cheques, gift card, transferencias electrónicas ni pagos en efectivo.\n' +
        '\n' +
        '## ¿Cuáles son los medios de pago?\n' +
        'En [Easy.cl](https://www.easy.cl/) puedes comprar con los siguientes medios de pago:\n' +
        '\n' +
        '```IconTable\n' +
        '{"textPosition":"bottom", "columns":1, "columnsDesktop":3, "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/mediodepago-1.png", "text": "", "weight": "", "size": "", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/mediodepago-2.png", "text": "", "weight": "", "size": "", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/mediodepago-3.png", "text": "", "weight": "", "size": "", "reference": ""}]}\n' +
        '```\n' +
        '\n' +
        '## ¿Cómo puedo aplicar un código de descuento para comprar en Easy.cl?\n' +
        '\n' +
        'Para aplicar un cupón de descuento, primero debes agregar los productos al carro de compra, una vez seleccionado lo que quieres comprar haz click en el carro de compra ubicado en la parte superior derecha y presiona el botón "Ir al carro de compra". Luego, avanza al 2do paso presionando el botón "Ir a entrega y medios de pago".\n' +
        '\n' +
        'En este paso busca debajo del total de tu compra, Código de descuento. Pega el código y presiona aplicar.\n' +
        '\n' +
        '## ¿Cómo puedo comprar con factura?\n' +
        '\n' +
        'En tu proceso de compra, después de elegir el método de entrega y seleccionar el medio de pago.\n' +
        '\n' +
        'Ubica "Tipo de documento" y selecciona la opción "Factura". Finalmente recibirás en tu correo registrado en [Easy.cl](https://www.easy.cl/)  un resumen de la transacción que podrás imprimir para consultar por tu pedido.\n' +
        '\n' +
        '```IconTable\n' +
        '{"textPosition":"bottom", "columns":1, "columnsDesktop":3, "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/factura-1.png", "text": "", "weight": "", "size": "", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/factura-2.png", "text": "", "weight": "", "size": "", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/factura-3.png", "text": "", "weight": "", "size": "", "reference": ""}]}\n' +
        '```\n' +
        '## ¿Puedo cambiar boleta por factura?\n' +
        '\n' +
        'No es posible cambiar una boleta por una factura, porque según lo dispuesto en el artículo 53 de la Ley sobre Impuesto a las Ventas y Servicios los contribuyentes del Impuesto al Valor Agregado (IVA) deben emitir facturas a otros vendedores o prestadores de servicios y boletas en los demás casos.',
      order: 1,
      helpCategory: context.comprarEasy,
      icon: '/icons/cards/wallet.svg',
      description: 'Entérate de lo que necesitas saber para conseguir ese producto que estás buscando. ',
    });

    context.recomendacionesSeguridadEasy = em.create(HelpContent, {
      label: 'Recomendaciones de Seguridad',
      reference: '/recomendaciones-seguridad',
      content:
        '# Recomendaciones y Seguridad\n' +
        '\n' +
        '- Recuerda solo acceder a nuestro sitio oficial que es Easy.cl.\n' +
        '\n' +
        '- Intenta no repetir tus claves para diferentes plataformas y actualiza periódicamente. Una clave segura debería contener una mayúscula y minúsculas, números y caracteres especiales cuando te lo permita.\n' +
        '\n' +
        '- Para acceder a nuestro sitio te recomendamos hacerlo exclusivamente tipeando la dirección Easy.cl directamente en el navegador. Evita acceder a nosotros mediante links que te inviten a un “acceso”. Para eficientar el proceso, te recomendamos guardar nuestra dirección en tus favoritos.\n' +
        '\n' +
        '- Nuestra cuentas y canales digitales oficiales son:\n' +
        '\n' +
        '```IconTable\n' +
        '{"textPosition":"bottom", "columns":2, "columnsDesktop":5, "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/SeguridadIcon-01.svg", "text": "contacto@easy.cl", "weight": "bold", "size": "5em", "reference": "mailto:contacto@easy.cl"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/SeguridadIcon-02.svg", "text": "Venta teléfonica 600 600 3279", "weight": "bold", "size": "5em", "reference": "tel:6006003279"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/SeguridadIcon-03.svg", "text": "Fono ayuda 600 600 3010", "weight": "bold", "size": "5em", "reference": "tel:6006003010"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/SeguridadIcon-04.svg", "text": "Instagram @easytienda", "weight": "bold", "size": "5em", "reference": "https://www.instagram.com/easytienda/"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/SeguridadIcon-05.svg", "text": "Facebook Easy", "weight": "bold", "size": "5em", "reference": "https://web.facebook.com/easychile"}]}\n' +
        '```\n' +
        '\n' +
        '- No aceptes invitaciones a sitios donde tengas que usar tu usuario y contraseña.\n' +
        '- Nunca te enviaremos un correo donde solicitemos información personal y/o confidencial. Te recomendamos nunca enviar tu información personal mediante correo electrónico.\n' +
        '- Nunca contestes un correo si dudas del remitente, siempre debes revisar atentamente el correo desde el cual te están escribiendo. Recuerda que el nuestro siempre será contacto@easy.cl\n' +
        '- Si recibes algún contacto, invitación o información por algún medio que no haya sido descrito anteriormente, te solicitamos nos lo reportes a contacto@easy.cl\n' +
        '- Ante cualquier duda del origen del mensaje llámanos a nuestra línea directa 600 600 3010 o contáctanos por nuestros canales oficiales contacto@easy.cl',
      order: 2,
      helpCategory: context.comprarEasy,
      icon: '/icons/cards/padlock.svg',
      description: 'Sigue nuestras indicaciones para navegar y comprar con seguridad en Easy.cl. ',
    });

    context.terminosCondicionesEasy = em.create(HelpContent, {
      label: 'Términos y condiciones',
      reference: 'https://www.easy.cl/terminos-y-condiciones',
      content:
        '# Términos y condiciones\n' +
        '\n' +
        'El acceso y uso de este sitio web se rige por los Términos y Condiciones descritos a continuación, así como por la legislación que se aplique en la República de Chile.\n' +
        '\n' +
        'En consecuencia, todas las visitas y todos los contratos y transacciones que realice el cliente de Easy.cl en este sitio, en adelante, el usuario, como asimismo sus efectos jurídicos, quedarán regidos por estas reglas y sometidas a esa legislación.\n' +
        '\n' +
        'El uso de la información que se recolecta del usuario tendrá como principal objetivo procurar brindarle una óptima experiencia en materia de comercio electrónico, ello a través del debido conocimiento de sus preferencias, gustos, requerimientos o necesidades. Esto permitirá, entre otras cosas, generar mejores y más completas ofertas de productos y servicios de Easy.cl y sus comercios asociados, así como entregarle una amplia gama de información y ofertas conforme a tus intereses y gustos.\n' +
        '\n' +
        'El usuario declara que los antecedentes o datos de carácter personal que se proporcionan a Easy.cl son y serán sustancialmente correctos y corresponden a la realidad, siendo su responsabilidad comunicar cualquier modificación de los mismos. En caso de consultas, contactarse con nuestro Servicio al Cliente al 600 600 3010 o vía e-mail [contacto@easy.cl](mailto:contacto@easy.cl)\n' +
        '\n' +
        'Te recomendamos revisar esta sección periódicamente a fin de que puedas mantenerte informado de los eventuales ajustes que los Términos y Condiciones pudiesen experimentar.\n' +
        '\n' +
        '**1. Uso del Sitio Web**\n' +
        '\n' +
        '**1.1 Registro del usuario**\n' +
        '\n' +
        'Será requisito necesario para la adquisición de productos y servicios ofrecidos en este sitio, el registro del Usuario y su aceptación a las presentes condiciones. El registro de cada usuario se verificará completando y suscribiendo el formulario que al efecto se contiene en el sitio y su posterior envío, el cual se realiza automáticamente. Al momento del registro el Usuario deberá definir una clave de acceso. El registro en Easy.cl es gratuito.\n' +
        '\n' +
        '**1.2 Clave Secreta**\n' +
        '\n' +
        'El usuario dispondrá, una vez registrado, de una contraseña o clave definitiva que le permitirá el acceso personalizado, confidencial y seguro. El usuario tendrá la posibilidad de cambiar la clave de acceso, para lo cual deberá sujetarse al procedimiento establecido en este sitio. El usuario asume totalmente la responsabilidad por el mantenimiento de la confidencialidad de su clave secreta registrada en este sitio web, la cual le permite efectuar compras, solicitar servicios y obtener información. Dicha clave es de uso personal y su entrega a terceros, no involucra responsabilidad de Easy.cl.\n' +
        '\n' +
        '**1.3 Capacidad legal para contratar**\n' +
        '\n' +
        'Los servicios de Easy.cl están disponibles solo para aquellos individuos que tengan capacidad legal para contratar, según lo dispuesto por la legislación vigente. Si una persona no tiene capacidad legal para contratar, debe abstenerse de utilizar los servicios ofrecidos en el sitio. Easy.cl podrá en cualquier momento, en forma temporal o definitiva, suspender la participación de usuarios que se compruebe que carecen de capacidad legal para usar de los servicios ofrecidos en el sitio o cuando al registrarse y/o comprar proporcionen información falsa, inexacta o fraudulenta.\n' +
        '\n' +
        '**1.4 Medios de pago que se podrán utilizar en este sitio**\n' +
        '\n' +
        'Los productos y servicios ofrecidos en Easy.cl, salvo que se señale una forma diferente para casos particulares u ofertas de determinados bienes o servicios, solo pueden ser pagados con Tarjeta de crédito bancaria y/o No Bancarias emitidas en Chile: Visa, Mastercard, American Express o Diners Club.\n' +
        '\n' +
        'No están habilitados los siguientes medios de pago: Gift Card Cencosud y Puntos Cencosud.\n' +
        '\n' +
        '**1.5 Despacho de los productos**\n' +
        '\n' +
        'Los productos adquiridos a través del sitio se sujetarán a las condiciones de despacho y entrega elegidas por el usuario y disponibles en Easy.cl. La información del lugar de envío es de exclusiva responsabilidad del usuario.\n' +
        '\n' +
        'Al comprar más de un producto, es posible que puedan ser despachados en camiones y fechas diferentes generando pagos diferenciados debido al origen de entrega de cada producto. Por los productos almacenados en lugares diferentes se emitirán órdenes de despacho separadas. Los montos asignados a cada despacho son informados antes y durante el proceso de compra. Una vez aceptados son incluidos dentro de la misma orden o solicitud de compra.\n' +
        '\n' +
        '**2. Almacenamiento, Finalidad, Custodia Y Tratamiento De Los Datos**\n' +
        '\n' +
        '**2.1**. El Usuario gozará de todos los derechos que le reconoce la legislación vigente en el territorio de Chile, además de los que se le otorgan en estos Términos y Condiciones. La sola visita a esta plataforma, no le impone al Usuario obligación alguna, a menos que haya aceptado en forma inequívoca las condiciones ofrecidas por la empresa, en la forma indicada en estos Términos y Condiciones.\n' +
        '\n' +
        'Esta plataforma permite otorgar a los Usuarios diversos beneficios, sobre la base de la información que estos proporcionan al momento de registrarse.\n' +
        '\n' +
        '**2.2.** Esta plataforma en base al conocimiento de la información personal de los Usuarios puede, entre otros beneficios, enviar detalles de ofertas, promociones y actualizaciones y/o novedades de productos y/o servicios, a los mismos, permitiendo que esta plataforma pueda ofrecer mejoras a la experiencia de los Usuarios, procurando responder a las necesidades de estos.\n' +
        '\n' +
        'Por ello es importante que el Usuario tenga presente que cuando acepta su incorporación a la plataforma, declara que los antecedentes o datos de carácter personal que proporciona, en adelante la “Información”, son sustancialmente correctos y corresponden a la realidad, debiendo comunicar cualquier modificación o cambio en estos, tan pronto como se produjeren. Para esta plataforma, la anterior declaración es un elemento determinante para permitir la incorporación del Usuario, siendo el Usuario personalmente responsable de las consecuencias que pudiere ocasionar su incumplimiento.\n' +
        '\n' +
        '**2.3**. En consideración a lo anterior, el Usuario consiente expresamente que, como efecto de su incorporación a esta plataforma, la Información que se acumule, recolecte, reciba o recoja de los Usuarios, podrá ser objeto de: (i) almacenamiento, entendiendo por tal el archivo de la información en lugares especialmente destinados al efecto; (ii) procesamiento, entendiendo por tal los mecanismos y procesos que permitan brindar al Usuario los servicios ofrecidos; (iii) tratamiento, entendiendo por tal cualquier operación o complejo de operaciones o procedimientos técnicos, de carácter automatizado o no, que permitan recolectar, almacenar, grabar, organizar, elaborar, agrupar, seleccionar, extraer, confrontar, interconectar, disociar o cancelar la información; y/o (iv) disposición, entendiendo por tal comunicar, ceder, transferir, transmitir o cancelar datos de carácter personal o utilizarlos en cualquier forma autorizada. Lo anterior salvo que el Usuario, respecto del tratamiento y disposición, expresamente instruya lo contrario mediante comunicación escrita enviada al correo contacto@easy.cl o llamando al teléfono 600 600 30 10.\n' +
        '\n' +
        '**2.4**.- La Información almacenada podrá ser usada para los fines que, a continuación, se expresan:\n' +
        '\n' +
        '(i) la confección y/o mejora de los productos y/o servicios que la plataforma, le prestan a los Usuarios, así como el diseño de nuevos productos y/o servicios para estos; (ii) el envío por cualquier vía de todo tipo de información, incluyendo, pero no limitada a, antecedentes técnicos, publicidad, ofertas y promoción de productos y/o servicios, ya sean de esta plataforma, o de cualquier otra empresa que forme parte, o llegaran a formar parte del Grupo Cencosud; y (iii) la realización de estudios individuales y/o colectivos de cualquier tipo como, por ejemplo, estudios en materia demográfica, histórica, comportamiento de los Usuarios e investigaciones de mercado; cuidando siempre de la reserva y confidencialidad de los datos personales de la manera exigida por la ley.\n' +
        '\n' +
        '**2.5.-** La plataforma podrá disponer y comunicar al resto de las empresas que forman parte, o llegaran a formar parte del Grupo Cencosud; todo o parte de la Información proporcionada por el Usuario, caso en el cual su destinatario deberá cumplir con alguno de los siguientes requisitos:\n' +
        '\n' +
        '(i) ser una persona relacionada a la propiedad o gestión de empresas que forman parte, o llegaran a formar parte del Grupo Cencosud; y/o\n' +
        '\n' +
        '(ii) ser una filial o controladora de la misma, o una persona jurídica que esté bajo el control común de empresas que forman parte, o llegaran a formar parte, del Grupo Cencosud; y/o de las sociedades con que estas establezcan acuerdos comerciales para el desarrollo de estrategias vinculadas con su giro.\n' +
        '\n' +
        'La plataforma procurará que el destinatario de la referida información garantice que esta será tratada bajo adecuados parámetros de reserva y que, en el evento que el Usuario se oponga al uso de esta, será eliminada de los registros respectivos. Por último, esta plataforma como los citados destinatarios solo podrán usar la Información con los propósitos informados precedentemente, caso este último en que las condiciones de esta política aplicables a la Plataforma deberán ser cumplidas por dichos destinatarios.\n' +
        '\n' +
        '**2.6.** El Usuario puede revocar la autorización que entrega para tratar sus datos personales en cualquier momento, en cuyo caso es posible que no pueda utilizar alguno o todos los servicios que ofrece la plataforma. Es su derecho pedirnos información sobre los datos personales suyos que hayamos recolectado y ejercer sus derechos de rectificación, cancelación, oposición. y todos los demás derechos que confiere la Ley N° 19.628 sobre Protección de la Vida Privada. Para ejercer estos derechos solo deberás enviar un correo electrónico a contacto@easy.cl. Del mismo modo, siempre puedes solicitar la suspensión de comunicaciones promocionales o publicitarias, de conformidad a lo dispuesto en el artículo 28 B de la Ley N°19.496 sobre Protección de los Derechos de los Consumidores.\n' +
        '\n' +
        '**3. Ofertas y Promociones**\n' +
        '\n' +
        'A través de este sitio web Easy.cl podrá realizar ofertas que podrán ser aceptadas por vía electrónica o telefónica, utilizando los mecanismos que el sitio web disponga como necesarios.\n' +
        '\n' +
        '**4. Proceso de Compra**\n' +
        '\n' +
        'Al ser aceptada una o más de dichas ofertas realizadas en el sitio web, estas quedarán sujetas a que se valide la transacción. En consecuencia, para la formación del consentimiento en toda transacción que se efectúe en este sitio será requisito la confirmación, validación y verificación por parte de Easy.cl o de otras empresas ofertantes en el sitio web. Para validar la transacción se verificará lo siguiente:\n' +
        '\n' +
        '(i) Stock disponible de los productos o servicios ofrecidos al momento en que se acepta la oferta;\n' +
        '\n' +
        '(ii) Validación del medio de pago elegido por el usuario;\n' +
        '\n' +
        '(iii) Validación de los datos registrados por el usuario. Estos deberán coincidir con los ingresados por él en el sitio web al momento de registrarse o al momento de haber aceptado la oferta. Una vez validada la transacción se contactará al usuario vía correo electrónico, a la dirección de e-mail ingresada por este al momento de registrar sus datos personales en el sitio web.\n' +
        '\n' +
        '**5. Consentimiento**\n' +
        '\n' +
        'El consentimiento se entenderá formado desde el momento en que se envía la confirmación escrita al usuario y en el lugar en que fue expedida, que será siempre Av. Kennedy 9001 5° piso, comuna de Las Condes, Santiago de Chile.\n' +
        '\n' +
        '**6. Validez de ofertas y promociones**\n' +
        '\n' +
        'Los precios, ofertas y promociones que se ofrezcan en este sitio solo aplican a las compras realizadas a través [www.easy.cl](https://easy.cl/).\n' +
        '\n' +
        '**7. Retiro en Tienda**\n' +
        '\n' +
        'La opción de retiro en tienda tiene un costo asociado de $1, el que será cobrado conjuntamente con el precio del producto.\n' +
        '\n' +
        'Si al enviar su solicitud de compra escogió la opción de retiro en tienda, tenga en consideración que una de las condiciones de la compra es que el producto comprado debe ser retirado en máximo en 10 días desde la confirmación de la disponibilidad del producto en la tienda para su retiro que se enviará al correo electrónico informado por Ud.\n' +
        '\n' +
        'Si el producto no es retirado en ese plazo, la compra se dejará sin efecto y se le devolverá el total de lo pagado según el medio de pago utilizado, de acuerdo a los plazos establecidos.\n' +
        '\n' +
        '**8. Despacho de productos en promoción**\n' +
        '\n' +
        'Para el caso de las promociones o rebajas de un producto por la compra de otro, el despacho del bien que se entregue a precio rebajado o en forma promocional se hará en el mismo lugar al cual se despacha el producto principal comprado, siendo el producto principal aquel por el que se paga el mayor valor, salvo que el usuario solicite, al momento de aceptar la oferta, que los productos se entreguen a direcciones distintas, en cuyo caso deberá pagar el valor del despacho de ambos productos.\n' +
        '\n' +
        '**9. Garantías Easy**\n' +
        '  \n' +
        '**9.1 Garantía Legal**\n' +
        '\n' +
        'Si dentro de los primeros 3 meses desde el retiro en tienda o de su recepción en la dirección de despacho, el producto presenta un defecto o falla de fabricación, le faltan piezas o partes, o se encuentra en alguna de las otras situaciones que conforme a la ley del consumidor dan derecho a garantía legal, será derivado al Servicio Técnico para la verificación y certificación de la causa u origen dentro de un plazo de 15 días hábiles, si la naturaleza del defecto o falla lo amerita.\n' +
        '\n' +
        'Si por la naturaleza del defecto o falla y/o como consecuencia de la evaluación del producto, resulta evidente que la causa del reclamo no es atribuible a una mala manipulación o uso por parte del consumidor, este puede elegir entre devolución, cambio o reparación del producto. En estos casos, el costo del traslado no se cobrará.\n' +
        '\n' +
        'Puedes llevar tu producto directamente a cualquiera de nuestras tiendas, o comunicarte al 600 600 3010 para solicitar información del Servicio Técnico, o bien puedes llevarlo directamente al Servicio Técnico autorizado para coordinar la evaluación del producto en el caso de aplicar la garantía.\n' +
        '\n' +
        'Para hacer efectiva la garantía, debes disponer de la boleta, factura o Guía de Despacho que acredite la compra. Si no tienes alguno de estos documentos, puedes pedir un duplicado en la tienda solo utilizando tu número de RUT.\n' +
        '\n' +
        'Los productos refaccionados; o de segunda mano (con detalles), no tienen garantía legal conforme al artículo 14 de la ley 19.496 Sobre Protección de los Derechos de los Consumidores.\n' +
        '\n' +
        '**9.2 Garantía de Satisfacción**\n' +
        '\n' +
        'En caso de comprar un producto nuevo, y sin haberlo abierto ni usado te arrepientes o no estás conforme, puedes solicitar el cambio o la devolución dentro de los primeros 60 días desde el retiro del producto en tienda o de recibido en la dirección de despacho. En caso de solicitar devolución, se devolverá el monto pagado al mismo medio de pago utilizado para la compra. En caso de compras con despacho a domicilio, no se devolverá el costo del despacho, es decir, solo se reembolsará el valor pagado por el producto.\n' +
        '\n' +
        'Puedes llevar tu producto directamente a cualquiera de nuestras tiendas, en caso de que sea de gran tamaño y de difícil traslado, puedes coordinar el retiro desde la misma dirección de entrega original a través de Call Center llamando al teléfono 600 600 3010.\n' +
        '\n' +
        'Para hacer efectiva esta garantía, el Cliente debe cumplir con las siguientes condiciones:\n' +
        '\n' +
        '**a.** Disponer de la boleta, factura o Guía de Despacho que acredite la compra. Si no tienes alguno de estos documentos, puedes pedir un duplicado en la tienda solo utilizando tu número de RUT.\n' +
        '\n' +
        '**b.** El producto debe estar en perfecto estado (limpio, sin rayas, sin abolladuras, sin manchas, etc.), sin uso y con su embalaje original.\n' +
        '\n' +
        '**c.** El producto debe contar con sus etiquetas, manuales, pólizas de garantía, accesorios y/o complementos.\n' +
        '\n' +
        '**Excepciones a la Garantía de Satisfacción:**\n' +
        '\n' +
        '**a.** Productos refaccionados, descontinuados o de segunda mano (con detalles).\n' +
        '\n' +
        '**b.** Productos a pedido (fabricados según medidas proporcionadas por los clientes, o bien en colores especiales o en productos de encargo especial).\n' +
        '\n' +
        '**c.** Productos instalados, dimensionados, o para venta volumen.\n' +
        '\n' +
        '**d.** Colchones cuyo empaque haya sido abierto.\n' +
        '\n' +
        '**e.** Con respecto a los Duendes Mágicos, tienen un plazo de devolución de 10 días desde su retiro en Tienda o recepción en la dirección de despacho.\n' +
        '\n' +
        '**10. Reembolsos medios de pago**\n' +
        '\n' +
        'En caso de anulación de la compra, una vez que el producto haya sido físicamente devuelto a Easy, se emitirá una nota de crédito para reembolsar el pago. Tenga presente que el medio de pago que utilizó es el que determina el plazo en que recibirá el reembolso. Si realizó la compra con tarjeta de crédito el cargo será anulado en máximo 10 días hábiles. Luego, la reversa o abono deberá ser informada y reflejada en el estado de cuenta por el emisor de la tarjeta, en el período siguiente o subsiguiente dependiendo de la fecha de facturación mensual que el Usuario haya convenido con dicho emisor.\n' +
        '\n' +
        'Si ocupó una Tarjeta de Débito, realizaremos una transferencia electrónica a la cuenta corriente que el Usuario nos indique, en un plazo máximo de 15 días hábiles desde que se emite la Nota de Crédito y que nos haya proporcionado sus datos bancarios.\n' +
        '\n' +
        '**11. Cookies en Easy.cl**\n' +
        '\n' +
        'Easy.cl utiliza Cookies en la navegación en el sitio. Las cookies son pequeños archivos de datos creados por el sitio web que pueden quedar almacenados en el navegador o dispositivo utilizado por el usuario, con el fin de mantener los registros y que permiten que los distintos sitios web que visita, reconozcan su computador, dispositivo móvil, tableta u otro dispositivo mientras navega. Las cookies pueden facilitar el uso de un sitio web, al crear un perfil de búsqueda y / o historial de navegación para cada visitante y ofrecer así una mejor experiencia de navegación, por ejemplo, identificando al usuario, recordando sus preferencias personalizadas y/o ayudándolo a completar tareas sin tener que volver a ingresar información cuando navega de una página a otra o cuando visita el sitio más adelante. Las cookies también se pueden usar para publicidad de comportamiento en línea y para mostrar anuncios relevantes a algo que el usuario buscó en el pasado.\n' +
        '\n' +
        'Las “cookies” se pueden deshabilitar. En todo momento, podrás elegir no recibir un archivo de cookies dando a tu navegador web la instrucción para que las rechace cookies o le informe antes de aceptarlas no pudiendo Easy evitar de manera alguna dicha acción (para conocer más sobre cookies, su uso, forma de habilitarlas o deshabilitarlas puedes consultar en www.aboutcookies.org).\n' +
        '\n' +
        'El usuario tiene el derecho a eliminar y/o bloquear las Cookies libremente y cuando lo desee. Para esto, el usuario deberá revisar la sección Ayuda (Help) del navegador.\n' +
        '\n' +
        '**12. Representante de la Compañía**\n' +
        '\n' +
        'Para facilitar el envío de cualquier presentación, consulta o reclamo sobre el uso de este sitio web o las transacciones que en él se realicen, y sin perjuicio de las facultades de sus demás gerentes y apoderados, Easy S.A. designa como representante especial a don Ricardo González Novoa, Rut 14.292.860-4, disponible en el correo contacto@easy.cl y en Av. Kennedy 9001, Piso 5, comuna de Las Condes.\n' +
        '\n' +
        '**13. Jurisdicción**\n' +
        '\n' +
        'Las controversias que surjan en relación con lo establecido en estos Términos y Condiciones podrán interponerse, a elección del consumidor, ante el juzgado de policía local correspondiente a su domicilio o al domicilio del proveedor. Sin perjuicio de la competencia de los tribunales ordinarios de justicia para otro tipo de materias. Todo lo anterior, según el artículo 50 A de la ley 19.496.\n' +
        '\n' +
        '**14. No se puede cambiar Boleta por factura:**\n' +
        '\n' +
        'No es posible cambiar una boleta por una factura, porque según lo dispuesto en el artículo 53 de la Ley sobre Impuesto a las Ventas y Servicios los contribuyentes del Impuesto al Valor Agregado (IVA) deben emitir facturas a otros vendedores o prestadores de servicios y boletas en los demás casos.',
      order: 5,
      helpCategory: context.comprarEasy,
      display: false,
      icon: '',
      description: '',
    });

    context.politicaPrivacidadEasy = em.create(HelpContent, {
      label: 'Política de privacidad y tratamiento de datos',
      reference: '/politica-privacidad-y-tratamiento-datos',
      content:
        '## Política de privacidad y tratamiento de datos personales EASY Retail S.A. \n' +
        '\n' +
        'Última actualización, 28 de julio de 2022 \n' +
        '\n' +
        '## I. CONDICIONES GENERALES\n' +
        '\n' +
        '**1. DECLARACIÓN**\n' +
        '\n' +
        'Easy Retail S.A., RUT 76.568.660-1, domiciliada para estos efectos en Av. Kennedy 9001, piso 4°, Comuna de Las Condes, Región Metropolitana, ha elaborado esta Política De Privacidad Y Tratamiento De Datos Personales con el propósito que los Usuarios, registrados y no registrados, tengan conocimiento sobre la información personal que la plataforma reúne respecto de los mismos, así como la manera como aquella se utiliza y el propósito de su tratamiento.\n' +
        '\n' +
        'Se deja constancia que cualquier modificación que se realice a esta política será informada oportunamente en el sitio web, sin perjuicio de la aceptación por parte del “Usuario” al momento de realizar la siguiente compra. Un texto actualizado de la presente política se mantendrá publicada en esta plataforma.\n' +
        '\n' +
        '**2. ALMACENAMIENTO, FINALIDAD, CUSTODIA Y TRATAMIENTO DE LOS DATOS**\n' +
        '\n' +
        'El “Usuario” podrá visitar esta plataforma como “Usuario” registrado y como “Usuario” no registrado.\n' +
        '\n' +
        'Para tener la calidad de “Usuario” registrado (en adelante el “Usuario” o los “Usuarios”), deberá crear una cuenta en la plataforma, ingresando los datos que pide el formulario, tales como su nombre, apellidos, número de Cédula de Identidad, fecha de nacimiento, correo electrónico y número de contacto en el formulario que aparece en pantalla. Deberá, finalmente, crear una clave de acceso, la que será secreta e intransferible. Será responsabilidad exclusiva del “Usuario” el uso de la clave secreta.\n' +
        '\n' +
        'Sin perjuicio de lo anterior, el Usuario para ingresar a su cuenta, podrá escoger entre recibir la clave de acceso por correo electrónico, ingresar con Facebook, ingresar con Google.\n' +
        '\n' +
        'Al momento de realizar una compra, el “Usuario” deberá indicar si desea retiro en tienda o despacho a domicilio. En este último punto, el “Usuario” deberá registrar la dirección donde desea el despacho. Por último, el “Usuario” deberá registrar el medio de pago con que realizará la compra.\n' +
        '\n' +
        'La sola visita a esta “plataforma” no impone al “Usuario” obligación alguna, a menos que haya aceptado en forma inequívoca la presente Política de Privacidad y Tratamiento de Datos.\n' +
        '\n' +
        'Es importante que el “Usuario” tenga presente que cuando acepta su incorporación a la plataforma, declara que los antecedentes o datos de carácter personal que proporciona, en adelante la “Información”, son sustancialmente correctos y corresponden a la realidad, debiendo comunicar cualquier modificación o cambio en estos, tan pronto como se produjeren, siendo el “Usuario” personalmente responsable de las consecuencias que pudiere ocasionar su incumplimiento.\n' +
        '\n' +
        'En consideración a lo anterior, el “Usuario” consiente expresamente que, como efecto de su incorporación a esta plataforma, la Información que se acumule, recolecte, reciba o recoja de los “Usuarios”, podrá ser objeto de:\n' +
        '\n' +
        '1. **Almacenamiento**: Entendiendo por tal el archivo de información en lugares especialmente destinados al efecto;\n' +
        '2. **Procesamiento**: Entendiendo por tal los mecanismos y procesos que permitan brindar al “Usuario” los servicios ofrecidos;\n' +
        '3. **Tratamiento**: Entendiendo por tal cualquier operación o complejo de operaciones o procesamientos técnicos, de carácter automatizado o no, que permitan recolectar, almacenar, grabar, organizar, elaborar, agrupar, seleccionar, extraer, confrontar, interconectar, disociar o cancelar la información;\n' +
        '4. **Disposición**: Entendiendo por tal comunicar, ceder, transferir o cancelar datos de carácter personal o utilizarlos en cualquier forma autorizada.\n' +
        '\n' +
        'La Información almacenada podrá ser usada para los fines que, a continuación, se expresan:\n' +
        '1. Validar información de la compra, informar el estado de la compra, informar el estado de un eventual reclamo asociado a una compra y para realizar cambios de productos, reparación de productos o devolución de dinero asociado a una compra.\n' +
        '2. La confección y/o mejora de los productos y/o servicios que la plataforma, le prestan a los “Usuario”(s), así como el diseño de nuevos productos y/o servicios para éstos;\n' +
        '3. Enviar todo tipo de información, tales como antecedentes técnicos, publicidad, ofertas y promoción de productos y/o servicios, ya sean de esta plataforma, o de cualquier otra empresa que forme parte, o llegaran a formar parte del Grupo Cencosud; y\n' +
        '4. Realizar estudios individuales y/o colectivos de cualquier tipo como, por ejemplo, estudios en materia demográfica, histórica, comportamiento de los “Usuarios” e investigaciones de mercado; cuidando siempre de la reserva y confidencialidad de los datos personales de la manera exigida por la ley.\n' +
        '\n' +
        'La plataforma podrá disponer y comunicar al resto de las empresas que forman parte, o llegaran a formar parte del Grupo Cencosud; todo o parte de la Información proporcionada por el “Usuario”, caso en el cual su destinatario deberá cumplir con alguno de los siguientes requisitos:\n' +
        '\n' +
        '1. Ser una persona relacionada a la propiedad o gestión de empresas que forman parte, o llegaran a formar parte del Grupo Cencosud; y/o\n' +
        '2. Ser una filial o controladora de la misma, o una persona jurídica que esté bajo el control común de empresas que forman parte, o llegaran a formar parte, del Grupo Cencosud; y/o de las sociedades con que estas establezcan acuerdos comerciales para el desarrollo de estrategias vinculadas con su giro.\n' +
        '\n' +
        'La plataforma procurará que el destinatario de la referida información garantice que ésta será tratada bajo adecuados parámetros de reserva y que, en el evento que el “Usuario” se oponga al uso de esta, será eliminada de los registros respectivos. Por último, tanto esta plataforma como los citados destinatarios sólo podrán usar la Información con los propósitos informados precedentemente. La “plataforma” procurará que el destinatario de la referida información garantice que ésta será tratada bajo adecuados parámetros de reserva y que, en el evento que el “Usuario” se oponga al uso de esta, será oportunamente eliminada de los registros respectivos.\n' +
        '\n' +
        '**3. PLAZO DE CONSERVACION DE LOS DATOS**\n' +
        '\n' +
        'Easy Retail S.A. conservará los datos del Usuario mientras se requieran para el cumplimiento de una o más de las finalidades singularizadas en el Punto N° 2 de esta Política De Privacidad Y Tratamiento De Datos Personales; lo anterior, sin perjuicio de los derechos del “Usuario”.\n' +
        '\n' +
        '**4. DERECHOS DEL “USUARIO”**\n' +
        '\n' +
        'El “Usuario” tendrá los derechos de acceso a los datos personales recolectados, así como los derechos de cancelación, rectificación y oposición. Los datos personales de los “Usuarios” deberán ser modificados cuando sean erróneos, inexactos, equívocos o incompletos, o deberán ser eliminados cuando su almacenamiento carezca de fundamento legal o hayan caducado, y todos los demás derechos que confiere la Ley N° 19.628 sobre Protección de la Vida Privada, y la Constitución Política de la República.\n' +
        '\n' +
        'Asimismo, el “Usuario”, tendrá derecho a revocar la autorización de tratamiento, caso en el cual la revocación producirá sus efectos hacia el futuro. Tendrá derecho, además, a solicitar que no se le envíen comunicaciones publicitarias. Para lo anterior, el Usuario deberá enviar una comunicación escrita al correo electrónico mencionado en el Punto 5 de la presente Política de Privacidad y Tratamiento de Datos.\n' +
        '\n' +
        '**5. EJERCICIO DE LOS DERECHOS DEL USUARIO.**\n' +
        '\n' +
        'Los “Usuarios”, sin perjuicio de lo señalado en el punto N° 6 siguiente, podrán ejercer sus derechos, enviando sus solicitudes, reclamos y/o consultas al correo electrónico: datospersonales@cencosud.cl\n' +
        '\n' +
        '**6. JURISDICCION - COMPETENCIA**\n' +
        '\n' +
        'Las controversias que surjan en relación con lo establecido en esta Política De Privacidad Y Tratamiento De Datos Personales de EASY RETAIL S.A., podrán ser sometidas al conocimiento del Juzgado de Policía Local correspondiente al domicilio del consumidor o al domicilio del proveedor, a elección del consumidor; sin perjuicio de la competencia de los tribunales ordinarios de justicia para otro tipo de materias, según lo establecido en la ley 19.496 Sobre Protección de los Derechos de los Consumidores y la ley N° 19.628 Sobre Protección de la Vida Privada.\n' +
        '\n' +
        '**7. REPRESENTANTE LEGAL**\n' +
        'La calidad de representante legal corresponde a don Ricardo González Novoa, con dirección para estos efectos en Av. Kennedy 9001, piso 4, Las Condes.\n' +
        '\n' +
        '## II. CONDICIONES PARTICULARES DE LA PLATAFORMA: EASY.CL\n' +
        '\n' +
        '**1. MEDIDAS DE SEGURIDAD Y PRIVACIDAD EN LA COMPRA.** \n' +
        '\n' +
        'Para cumplir los objetivos de seguridad, Easy.cl cuenta con la tecnología que asegura la confidencialidad del mensaje y evita que sean interceptados para usos fraudulentos. Así, toda la información personal, como nombre, e-mail, dirección, y número de tarjeta de crédito, no podrá ser leída ni capturada por terceros mientras viaja por la red, sin importar el lugar geográfico donde se encuentre.\n' +
        '\n' +
        'Para reconocer cuando una transacción está protegida por un servidor seguro, el Usuario deberá revisar si en su navegador aparece una llave o un candado cerrado en la parte superior en la barra de direcciones, dependiendo del explorador que utilice.\n' +
        '\n' +
        '**2. CERTIFICACIONES** \n' +
        '\n' +
        'Easy.cl cuenta con los Certificados PCI SSC (Security Standards Council y PCI DSS (Payment Card Industry Data Security Standard) que protegen los datos personales de los Usuarios, incluyendo: domicilio, contraseñas, tarjetas bancarias, información de su identidad e historial de compras. Esta tecnología también impide el acceso a la información por parte de terceros.\n' +
        '\n' +
        '**3. COOKIES**\n' +
        '\n' +
        'Una cookie (o galleta informática) es información almacenada en el navegador del Usuario, que le permite realizar el proceso de compra y, a su vez, permite a Easy.cl conocer la actividad de este en la plataforma. Sólo se utilizarán para entregar una experiencia de compra personalizada, ayudar al Usuario a navegar de forma más eficiente y entregar información publicitaria relacionada con los intereses del Usuario.\n' +
        '\n' +
        'El Usuario podrá bloquear o eliminar las cookies que utiliza Easy.cl en la barra de herramientas de su navegador. Sin embargo, debe tener presente que esto afectará la continuidad en su proceso de compra, ya que al borrar las cookies se pierde el carro de productos y no podrá terminar la compra.\n' +
        '\n' +
        'Respecto de Usuarios no registrados, Easy.cl no captura información referente a actividades específicas. Sin embargo, se generan reportes que nos permiten ver la actividad consolidada anónima.\n' +
        '\n' +
        '**4. GOOGLE ANALYTICS EN EASY.CL** \n' +
        '\n' +
        'Google Analytics es una herramienta para el análisis de datos que, mediante la utilización de cookies desarrolladas por Google, permite obtener información estadística (no personalizada) relacionada a los Usuarios que visiten la plataforma Easy.cl. \n' +
        '\n' +
        'Adicionalmente, se utiliza para mostrar anuncios publicitarios en otros sitios web asociados a la red de contenido de Google, basándose en las visitas previas del Usuario a la plataforma de \n' +
        'Easy.cl. \n' +
        '\n' +
        'Los Usuarios tendrán siempre derecho a deshabilitar las cookies de que se da cuenta en los párrafos anteriores, no pudiendo Easy.cl evitar de manera alguna dicha acción.\n' +
        '\n' +
        '**5. ADVERTENCIA IMPORTANTE**\n' +
        '\n' +
        'Easy.cl no efectúa llamados de parte de los Gerentes de Locales o personal Easy solicitando tus datos personales para confirmar premios. En tal caso, se solicita al Usuario terminar la conversación y contactar mediante correo electrónico indicado en la presente Política de Privacidad y Tratamiento de Datos.\n' +
        '',
      order: 4,
      helpCategory: context.comprarEasy,
      icon: '/icons/cards/check.svg',
      description: 'Conoce nuestras políticas y tratamientos de los datos que se usan en Easy.cl',
    });
    //============ MI CUENTA EASY ============//
    context.registrateEasy = em.create(HelpContent, {
      label: 'Regístrate',
      reference: 'https://www.easy.cl/UserRegistrationForm?new=Y&catalogId=10051&myAcctMain=1&langId=-5&storeId=10151',
      content: '',
      order: 1,
      helpCategory: context.miCuentaEasy,
      display: false,
      icon: '',
      description: '',
    });

    context.recuperarContrasenaEasy = em.create(HelpContent, {
      label: 'Recuperar contraseña',
      reference:
        'https://www.easy.cl/ResetPasswordGuestErrorView?state=forgetpassword&catalogId=10051&langId=-5&storeId=10151',
      content: '',
      order: 2,
      helpCategory: context.miCuentaEasy,
      display: false,
      icon: '',
      description: '',
    });

    context.modificarDatosEasy = em.create(HelpContent, {
      label: 'Modifica tus datos personales',
      reference:
        'https://www.easy.cl/UserRegistrationForm?editRegistration=Y&catalogId=10051&langId=-5&storeId=10151&userRegistrationStyle=strong',
      content: '',
      order: 3,
      helpCategory: context.miCuentaEasy,
      display: false,
      icon: '',
      description: '',
    });
    //============ DESPACHO Y RETIRO EASY ============//
    context.coberturaHorariosEasy = em.create(HelpContent, {
      label: 'Cobertura y horarios de despacho',
      reference: '/cobertura-y-horarios-despacho',
      content:
        '# Cobertura y horarios de despacho\n' +
        '\n' +
        '## Cobertura\n' +
        'El servicio de despacho realiza entregas en cualquier lugar de Chile continental.\n' +
        '\n' +
        '### ¿Puedo realizarle seguimiento a mi despacho en Easy.cl?\n' +
        'Sí, para compras realizadas a través de nuestra página solo debes ingresar a Easy.cl, en “Seguimiento de tu compra” con tu número de pedido que encuentras en el mail de confirmación de tu compra.\n' +
        '\n' +
        '### ¿Puedo cambiar la dirección de mi despacho?\n' +
        'No es posible cambiar la dirección de tu despacho una vez confirmada la compra. Sin embargo, si necesitas editar tu domicilio o agregar otra dirección puedes hacerlo desde tu cuenta, en "Mis Direcciones".\n' +
        '\n' +
        '### ¿Cuánto tiempo tarda en llegar mi despacho si me encuentro en regiones?\n' +
        'El producto puede ser recibido, desde las 48 horas después de confirmada tu compra.\n' +
        '\n' +
        '## Horarios de entrega\n' +
        'Los horarios de entrega para Despacho a domicilio van desde las 9:00 y 21:00 horas. Las entregas se realizan de lunes a sábado de acuerdo a las condiciones estipuladas al momento de tu compra.\n' +
        '\n' +
        '### ¿Puedo cambiar la hora de entrega de mi despacho?\n' +
        'No, el servicio de despacho es de 09:00 a 21:00 pm.',
      order: 2,
      helpCategory: context.despachoRetiroEasy,
      icon: '/icons/cards/delivery24.svg',
      description: 'Entérate sobre las zonas de cobertura, horarios, seguimiento de compra y más.',
    });

    context.costosCondicionesEasy = em.create(HelpContent, {
      label: 'Costos y condiciones de despacho',
      reference: '/costos-y-condiciones-despacho',
      content:
        '# Costos y condiciones del despacho\n' +
        '\n' +
        '## ¿Cómo se calcula el costo de  despacho?\n' +
        'El costo del despacho se calcula, tomando en cuenta diferentes variables: Región, localidad de destino y tamaño del producto (pequeño, mediano, grande, especial) de acuerdo a lo estipulado en tu compra.\n' +
        '\n' +
        '### ¿Por qué me cobran más de un despacho en una misma orden?\n' +
        'Cada producto tiene un costo de despacho asociado a su tamaño, la región y el centro de distribución dónde se encuentra. Por esta razón si en una orden, hay 2 o más productos se cobrará un despacho por cada producto.\n' +
        '\n' +
        '## Tipos de Despacho a domicilio:\n' +
        '- Despacho normal, la entrega se realiza según la disponibilidad de órdenes (se excluyen los domingos y festivos). Válido para todo Chile.\n' +
        '- Despacho programado: la fecha de entrega es elegida por el cliente, para ello se presenta un calendario donde el cliente selecciona el día. Exclusivo para Región Metropolitana.\n' +
        '- Venta a pedido: este despacho se aplica a productos que se venden a pedido y se traen directamente desde el proveedor.\n' +
        '\n' +
        '## Condiciones de Despacho\n' +
        'El servicio de despacho no considera el armado o la instalación de los productos.  Estos servicios se deben pagar de forma independiente.\n' +
        '\n' +
        'En caso de que el producto no quepa en el ascensor o no haya ascensor en el edificio:\n' +
        '\n' +
        '- El transportista solo está autorizado para subir hasta el cuarto piso por la escalera productos por unidad o bultos con un peso máximo de 25 kg por peoneta o donde la suma de los bultos no sobrepase los 50 kg.\n' +
        '- Los productos con un peso mayor a 50 kg se entregarán solo en el primer piso.\n' +
        '- El personal de despacho no está autorizado para realizar ingreso al domicilio más allá de dos a tres metros, desde la puerta de entrada. Si el ingreso más allá de dos a tres metros es por autorización del cliente y bajo su propia responsabilidad.\n' +
        '\n' +
        '### ¿Alguien más puede recibir el producto por mí?\n' +
        'Cualquier persona mayor de edad autorizada por usted, podrá recibir el producto; ya que, deberá firmar y declarar su nombre y rut en la guía de despacho para certificar la entrega conforme de los productos.',
      order: 1,
      helpCategory: context.despachoRetiroEasy,
      icon: '/icons/cards/delivery.svg',
      description: 'Revisa nuestros tipos de despacho, valores y condiciones para la entrega.',
    });

    context.problemasDespachoEasy = em.create(HelpContent, {
      label: 'Problemas con mi despacho',
      reference: '/problemas-con-despacho',
      content:
        '# Problemas con mi Despacho\n' +
        '\n' +
        '## Retraso en el despacho\n' +
        '\n' +
        'Las razones del retraso del despacho son variadas, puedes hacerle seguimiento o llamando al call center de Easy al número 600 600 3010 para mayor detalle.\n' +
        '\n' +
        '## Producto dañado\n' +
        '\n' +
        'Se debe rechazar la entrega e informar en la guía de despacho el motivo por el cuál no está conforme. Se recomienda llamar al call center de Servicio al Cliente de Easy al 600 600 3010 para levantar un requerimiento.\n' +
        '\n' +
        '### Disconformidad con el producto despachado\n' +
        '\n' +
        'Si no estás conforme con el producto entregado, se debe rechazar e informar en la guía de despacho el motivo por el cual no estás conforme.\n' +
        '\n' +
        '## Producto o entrega incompleta\n' +
        '\n' +
        'Se debe rechazar la entrega e informar en la guía de despacho el motivo por el cuál no está conforme. Se recomienda llamar al call center de Servicio al Cliente de Easy al 600 600 3010 para levantar un requerimiento.\n' +
        '\n' +
        'Sin embargo, también existe la posibilidad de que los recibas tu compra en despachos y fechas diferentes. Si tienes más dudas llámanos al Servicio al Cliente de Easy al 600 600 3010.\n' +
        '\n' +
        '### Misma compra con diferentes despachos\n' +
        '\n' +
        'Porque se despacha de bodegas diferentes, o por transportistas diferentes, lo que hace que se envíen en dos o más camiones distintos.\n' +
        '\n' +
        '## Condiciones de devolución de productos\n' +
        '\n' +
        'Para devolver o cambiar un producto cuentas con 15 días hábiles. El producto debe encontrarse en óptimas condiciones, nuevo y con todos sus embalajes. Si compraste con despacho a domicilio debes llamar al 600 600 3010, donde se creará un requerimiento para coordinar tu cambio o devolución, el cual no tiene costo asociado.\n' +
        '\n' +
        '### Despacho de producto equivocado\n' +
        '\n' +
        'Si recibe un pedido equivocado, se recomienda que rechace el despacho y se comunique con el call center de Servicio al cliente de Easy al número 600 600 3010, en caso de tener alguna duda o para conocer con mayor detalle el procedimiento a seguir. Le recordamos que el producto debe encontrarse en óptimas condiciones, nuevo y con todos sus embalajes.\n' +
        '\n' +
        '### ¿Por qué si anulé la compra, me llegó el pedido?\n' +
        '\n' +
        'Si recibiste una orden o producto que anteriormente habías anulado, por favor llama al call center de Easy al número 600 600 3010 para que le indiquen los pasos a seguir.',
      order: 3,
      helpCategory: context.despachoRetiroEasy,
      icon: '/icons/cards/delivery.svg',
      description: 'Infórmate sobre qué hacer cuando el envío de tu compra presenta alguna dificultad.',
    });

    context.informacionesRetiroTiendaEasy = em.create(HelpContent, {
      label: 'Retiro en tienda',
      reference: '/informaciones-retiro-en-tienda',
      content:
        '# Información de Retiro en tienda\n' +
        '\n' +
        '## ¿Cómo puedo retirar en Tienda un producto que comprado en la web?\n' +
        '\n' +
        '- Antes de ir a la tienda para retirar tu compra, debes recibir el correo que confirma que tu compra ya está en tienda y está lista para ser retirada.\n' +
        '- Realiza el seguimiento de tu compra y verifica que el estado sea "Listo para retiro"; esto quiere decir que ya puedes acercarte a la tienda que seleccionaste para retirar tu producto.\n' +
        '- Al estar en la tienda Easy, acércate al centro de servicios de la tienda seleccionada con tu cédula. Un colaborador te entregará tu compra y el proceso estará finalizado.\n' +
        '- Si retira otra persona te recordamos que debes autorizarla en el proceso de compra o llamando al Servicio al Cliente Easy 600 600 3010.\n' +
        '\n' +
        '## ¿Cuándo puedo retirar mi compra en la tienda?\n' +
        '**Antes de ir a la tienda para retirar tu compra**, debes recibir un correo informándote que está lista para ser retirada.\n' +
        '```IconTable\n' +
        '{"textPosition":"bottom", "columns":1, "columnsDesktop":2, "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/retirotienda-1.png", "text": "", "weight": "", "size": "", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/retirotienda-2.png", "text": "", "weight": "", "size": "", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/retirotienda-3.png", "text": "", "weight": "", "size": "", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/retirotienda-4.png", "text": "", "weight": "", "size": "", "reference": ""}]}\n' +
        '```\n' +
        '\n' +
        '### ¿Tiene algún costo asociado?\n' +
        '\n' +
        'La opción de retiro en tienda tiene un costo asociado de $1, el que será cobrado conjuntamente con el precio del producto.\n' +
        '\n' +
        '## ¿Hay algún plazo para retirar mi producto en tienda?\n' +
        '\n' +
        'Si al enviar su solicitud de compra escogió la opción de retiro en tienda, tenga en consideración que una de las condiciones de la compra es que el producto comprado debe ser retirado en máximo 10 días desde la confirmación de la disponibilidad del producto en la tienda para su retiro que se enviará al correo electrónico informado por Ud.\n' +
        '\n' +
        'Si el producto no es retirado en ese plazo, la compra se dejará sin efecto y se le devolverá el total de lo pagado al medio de pago correspondiente, en un plazo de 10 días hábiles.\n' +
        '\n' +
        '## ¿Puedo cambiar o devolver mi producto?\n' +
        '\n' +
        'Los productos que compres con Retiro en Tienda tienen la misma garantía que todos los productos comprados en Easy.cl. Puedes revisar todas las condiciones en Cambios y Devoluciones. Es importante que consideres que al no haber un servicio de despacho de por medio, no se realizan retiros de productos en domicilios, por tanto, debes llevarlo a una tienda Easy junto con tu boleta.\n' +
        '\n' +
        '## ¿Todos los productos del sitio pueden ser retirados en tienda?\n' +
        '\n' +
        'Solo los productos que tengan el ícono pueden ser retirados en tienda.\n' +
        '\n' +
        '## ¿Puedo cambiar la tienda que seleccioné para retirar mi producto?\n' +
        '\n' +
        'No. Una vez seleccionada la tienda de retiro no es posible realizar cambios.',
      order: 4,
      helpCategory: context.despachoRetiroEasy,
      icon: '/icons/cards/shop.svg',
      description: 'Revisa los detalles que debes tener en cuenta para retirar tu compra.',
    });
    //============ SERVICIOS POSVENTA EASY ============//
    context.servicioTecnicoEsClEasy = em.create(HelpContent, {
      label: 'Servicio técnico',
      reference: 'https://www.easy.cl/es/cl/easy-chile/servicio-tecnico',
      content: '',
      order: 0,
      helpCategory: context.serviciosPosventaEasy,
      display: false,
      icon: '',
      description: '',
    });

    context.garantiasEasy = em.create(HelpContent, {
      label: 'Garantías',
      reference: '/garantias',
      content:
        '# Política de Devoluciones\n' +
        '\n' +
        'Ley sobre Protección de los Derechos de los Consumidores\n' +
        '\n' +
        '### 1. Garantía Mínima Legal\n' +
        '\n' +
        'Si el producto presenta un defecto o falla de fabricación, le faltan piezas o partes, o se encuentra en alguna de las otras situaciones que conforme a la ley del consumidor dan derecho a garantía legal, si lo amerita, será derivado al Servicio Técnico para la verificación y certificación de la causa u origen dentro de un plazo de 15 días hábiles.\n' +
        '\n' +
        'De acuerdo con la última actualización de la Ley sobre Protección de los Derechos de los Consumidores, el plazo para ejercer la Garantía Mínima Legal es la siguiente:\n' +
        '\n' +
        'a) Las compras que se realicen **hasta el día 23 de marzo de 2022** tendrán un plazo de **3 (tres) meses** de garantía mínima legal, desde la recepción del producto; y\n' +
        '\n' +
        'b) Las compras que se realicen **a partir del día 24 de marzo de 2022**, tendrán un plazo de **6 (seis) meses** de garantía mínima legal, desde la recepción del producto.\n' +
        '\n' +
        'Si por la naturaleza del defecto o falla y/o como consecuencia de la evaluación del producto, se determina que la causa del reclamo no es atribuible a una mala manipulación o uso por parte del consumidor, este puede elegir entre devolución, cambio o reparación del producto. En estos casos, el costo del traslado no se cobrará.\n' +
        '\n' +
        'En caso de que elijas la reparación de tu producto por el Servicio Técnico, y posterior a ello, se mantiene la misma falla técnica, podrás elegir entre la devolución o cambio de tu producto.\n' +
        '\n' +
        'Puedes llevar tu producto directamente a cualquiera de nuestras tiendas, o comunicarte al 600 600 3010 para solicitar información del Servicio Técnico, o bien puedes llevarlo directamente al Servicio Técnico autorizado para coordinar la evaluación del producto en el caso de aplicar la garantía.\n' +
        '\n' +
        'Para hacer efectiva la garantía, puedes presentar cualquier documento que acredite la compra como voucher, boleta o factura. Si no tienes alguno de estos documentos, puedes pedir un duplicado de la boleta o la factura en la tienda solo utilizando tu número de RUT.\n' +
        '\n' +
        'Los productos refaccionados; o de segunda mano (con detalles), no tienen garantía legal conforme al artículo 14 de la ley 19.496 Sobre Protección de los Derechos de los Consumidores.\n' +
        '\n' +
        '### 2. Retracto compras on line (Easy.cl)\n' +
        '\n' +
        'Si compras un producto a través de la web (Easy.cl) y luego te arrepientes, tienes un plazo de **10 días** desde que recibes el producto para ejercer tu derecho a retracto.\n' +
        '\n' +
        'En caso de ejercer el retracto, el Usuario deberá devolver el producto sin uso y con todos los elementos originales del embalaje, como etiquetas, certificados de garantía, manuales de uso, cajas y/o elemento de protección.\n' +
        '\n' +
        'De acuerdo con las normas de la ley 19.496 Sobre Protección de los Derechos de los Consumidores, las excepciones al derecho de retracto en las compras realizadas en la “plataforma” son:\n' +
        '\n' +
        '- Productos que por su naturaleza no pueden ser devueltos, o pueden deteriorarse o caducar, tales como, comida para mascotas, plantas.\n' +
        '- Bienes de uso personal, tales como, antiparras, protectores auditivos que hayan sido abiertos, zapatos de seguridad, guantes, cascos.\n' +
        '- Bienes confeccionados según indicaciones del Cliente, tales como, cadenas a medida, alfombras a medida.\n' +
        '\n' +
        'Para acreditar la compra puedes presentar voucher, boleta o factura. Si no tienes alguno de estos documentos, puedes pedir un duplicado de la boleta o la factura en la tienda solo utilizando tu número de RUT.\n' +
        '\n' +
        'Para ejercer tu derecho a retracto, solo debes llamar al Call Center teléfono 600 600 3010.\n' +
        '\n' +
        'La devolución de lo pagado se realizará al mismo medio de pago utilizado para la compra, con posterioridad a que hayas devuelto el producto. En caso de compras con despacho a domicilio, no se devolverá el costo del despacho, es decir, sólo se reembolsará el valor pagado por el producto.\n' +
        '\n' +
        'Puedes llevar tu producto directamente a cualquiera de nuestras tiendas, en caso de que sea de gran tamaño y de difícil traslado, puedes coordinar el retiro desde la misma dirección de entrega original a través de Call Center llamando al teléfono 600 600 3010.\n' +
        '\n' +
        '### 3. Retracto compras en tienda\n' +
        '\n' +
        'En caso de comprar un producto de forma presencial en tienda, pero que no tuviste acceso directo a él antes de la compra, es decir, lo escogiste desde un catálogo, viste solo una muestra o fue un producto a pedido, tienes un plazo de **10 días** desde que recibiste el producto para ejercer tu derecho a retracto.\n' +
        '\n' +
        'Ten presente que, para ejercer el derecho a retracto en compras presenciales, además de lo señalado precedentemente, el producto no debe haberse deteriorado por razones imputables al Usuario o Cliente, y deberá devolver el producto sin uso y con todos los elementos originales del embalaje, como etiquetas, certificados de garantía, manuales de uso, cajas y/o elemento de protección.\n' +
        '\n' +
        'Para acreditar la compra puedes presentar voucher, boleta o factura. Si no tienes alguno de estos documentos, puedes pedir un duplicado de la boleta o la factura en la tienda solo utilizando tu número de RUT.\n' +
        '\n' +
        'Para ejercer tu derecho a retracto, solo debes llamar al Call Center teléfono 600 600 3010.\n' +
        '\n' +
        'La devolución de lo pagado se realizará al mismo medio de pago utilizado para la compra, con posterioridad a que hayas devuelto el producto. En caso de compras con despacho a domicilio, no se devolverá el costo del despacho, es decir, sólo se reembolsará el valor pagado por el producto.\n' +
        '\n' +
        '### Garantía de Satisfacción\n' +
        '\n' +
        'En caso de comprar un producto nuevo, sin haberlo usado y no estás conforme, puedes solicitar el cambio o la devolución dentro de los primeros **60 días** corridos desde el retiro del producto en tienda o de recibido en la dirección de despacho. En caso de solicitar devolución, se devolverá el monto pagado al mismo medio de pago utilizado para la compra. En caso de compras con despacho a domicilio, no se devolverá el costo del despacho, es decir, sólo se reembolsará el valor pagado por el producto.\n' +
        '\n' +
        'Puedes llevar tu producto directamente a cualquiera de nuestras tiendas, en caso de que sea de gran tamaño y de difícil traslado, puedes coordinar el retiro desde la misma dirección de entrega original a través de Call Center llamando al teléfono 600 600 3010.\n' +
        '\n' +
        'Para hacer efectiva esta garantía, el Cliente debe cumplir con las siguientes condiciones:\n' +
        '\n' +
        '- Disponer de la boleta o factura, que acredite la compra. Si no tienes alguno de estos documentos, puedes pedir un duplicado en la tienda solo utilizando tu número de RUT.\n' +
        '- El producto debe estar en perfecto estado (limpio, sin rayas, sin abolladuras, sin manchas, etc.), sin uso y con su embalaje original.\n' +
        '- El producto debe contar con sus etiquetas, manuales, pólizas de garantía, accesorios y/o complementos.\n' +
        '\n' +
        'Excepciones a la Garantía de Satisfacción:\n' +
        '\n' +
        '- Productos refaccionados, descontinuados o de segunda mano (con detalles).\n' +
        '- Productos a pedido (fabricados según medidas proporcionadas por los clientes, o bien en colores especiales o en productos de encargo especial).\n' +
        '- Productos instalados, dimensionados, o para venta volumen.\n' +
        '- Colchones cuyo empaque haya sido abierto.\n' +
        '- Con respecto a los Duendes Mágicos, tienen un plazo de devolución de 10 días desde su retiro en Tienda o recepción en la dirección de despacho.\n' +
        '',
      order: 3,
      helpCategory: context.serviciosPosventaEasy,
      icon: '/icons/cards/warranty.svg',
      description: 'Accede a la garantía de tu producto si estás en alguna de las situaciones detalladas en la ley.',
    });

    context.cambiosDevolucionesEasy = em.create(HelpContent, {
      label: 'Cambios y devoluciones',
      reference: '/cambios-y-devoluciones',
      content:
        '# Política de Devoluciones\n' +
        '\n' +
        'Ley sobre Protección de los Derechos de los Consumidores\n' +
        '\n' +
        '## 1. Garantía Mínima Legal\n' +
        '\n' +
        'Si el producto presenta un defecto o falla de fabricación, le faltan piezas o partes, o se encuentra en alguna de las otras situaciones que conforme a la ley del consumidor dan derecho a garantía legal, si lo amerita, será derivado al Servicio Técnico para la verificación y certificación de la causa u origen dentro de un plazo de 15 días hábiles.\n' +
        '\n' +
        'De acuerdo con la última actualización de la Ley sobre Protección de los Derechos de los Consumidores, el plazo para ejercer la Garantía Mínima Legal es la siguiente:\n' +
        '\n' +
        'a) Las compras que se realicen **hasta el día 23 de marzo de 2022** tendrán un plazo de **3 (tres) meses** de garantía mínima legal, desde la recepción del producto; y\n' +
        '\n' +
        'b) Las compras que se realicen **a partir del día 24 de marzo de 2022**, tendrán un plazo de **6 (seis) meses** de garantía mínima legal, desde la recepción del producto.\n' +
        '\n' +
        'Si por la naturaleza del defecto o falla y/o como consecuencia de la evaluación del producto, se determina que la causa del reclamo no es atribuible a una mala manipulación o uso por parte del consumidor, este puede elegir entre devolución, cambio o reparación del producto. En estos casos, el costo del traslado no se cobrará.\n' +
        '\n' +
        'En caso de que elijas la reparación de tu producto por el Servicio Técnico, y posterior a ello, se mantiene la misma falla técnica, podrás elegir entre la devolución o cambio de tu producto.\n' +
        '\n' +
        'Puedes llevar tu producto directamente a cualquiera de nuestras tiendas, o comunicarte al 600 600 3010 para solicitar información del Servicio Técnico, o bien puedes llevarlo directamente al Servicio Técnico autorizado para coordinar la evaluación del producto en el caso de aplicar la garantía.\n' +
        '\n' +
        'Para hacer efectiva la garantía, puedes presentar cualquier documento que acredite la compra como voucher, boleta o factura. Si no tienes alguno de estos documentos, puedes pedir un duplicado de la boleta o la factura en la tienda solo utilizando tu número de RUT.\n' +
        '\n' +
        'Los productos refaccionados; o de segunda mano (con detalles), no tienen garantía legal conforme al artículo 14 de la ley 19.496 Sobre Protección de los Derechos de los Consumidores.\n' +
        '\n' +
        '## 2. Retracto compras on line (Easy.cl)\n' +
        '\n' +
        'Si compras un producto a través de la web (Easy.cl) y luego te arrepientes, tienes un plazo de **10 días** desde que recibes el producto para ejercer tu derecho a retracto.\n' +
        '\n' +
        'En caso de ejercer el retracto, el Usuario deberá devolver el producto sin uso y con todos los elementos originales del embalaje, como etiquetas, certificados de garantía, manuales de uso, cajas y/o elemento de protección.\n' +
        '\n' +
        'De acuerdo con las normas de la ley 19.496 Sobre Protección de los Derechos de los Consumidores, las excepciones al derecho de retracto en las compras realizadas en la “plataforma” son:\n' +
        '\n' +
        '- Productos que por su naturaleza no pueden ser devueltos, o pueden deteriorarse o caducar, tales como, comida para mascotas, plantas.\n' +
        '- Bienes de uso personal, tales como, antiparras, protectores auditivos que hayan sido abiertos, zapatos de seguridad, guantes, cascos.\n' +
        '- Bienes confeccionados según indicaciones del Cliente, tales como, cadenas a medida, alfombras a medida.\n' +
        '\n' +
        'Para acreditar la compra puedes presentar voucher, boleta o factura. Si no tienes alguno de estos documentos, puedes pedir un duplicado de la boleta o la factura en la tienda solo utilizando tu número de RUT.\n' +
        '\n' +
        'Para ejercer tu derecho a retracto, solo debes llamar al Call Center teléfono 600 600 3010.\n' +
        '\n' +
        'La devolución de lo pagado se realizará al mismo medio de pago utilizado para la compra, con posterioridad a que hayas devuelto el producto. En caso de compras con despacho a domicilio, no se devolverá el costo del despacho, es decir, sólo se reembolsará el valor pagado por el producto.\n' +
        '\n' +
        'Puedes llevar tu producto directamente a cualquiera de nuestras tiendas, en caso de que sea de gran tamaño y de difícil traslado, puedes coordinar el retiro desde la misma dirección de entrega original a través de Call Center llamando al teléfono 600 600 3010.\n' +
        '\n' +
        '## 3. Retracto compras en tienda\n' +
        '\n' +
        'En caso de comprar un producto de forma presencial en tienda, pero que no tuviste acceso directo a él antes de la compra, es decir, lo escogiste desde un catálogo, viste solo una muestra o fue un producto a pedido, tienes un plazo de **10 días** desde que recibiste el producto para ejercer tu derecho a retracto.\n' +
        '\n' +
        'Ten presente que, para ejercer el derecho a retracto en compras presenciales, además de lo señalado precedentemente, el producto no debe haberse deteriorado por razones imputables al Usuario o Cliente, y deberá devolver el producto sin uso y con todos los elementos originales del embalaje, como etiquetas, certificados de garantía, manuales de uso, cajas y/o elemento de protección.\n' +
        '\n' +
        'Para acreditar la compra puedes presentar voucher, boleta o factura. Si no tienes alguno de estos documentos, puedes pedir un duplicado de la boleta o la factura en la tienda solo utilizando tu número de RUT.\n' +
        '\n' +
        'Para ejercer tu derecho a retracto, solo debes llamar al Call Center teléfono 600 600 3010.\n' +
        '\n' +
        'La devolución de lo pagado se realizará al mismo medio de pago utilizado para la compra, con posterioridad a que hayas devuelto el producto. En caso de compras con despacho a domicilio, no se devolverá el costo del despacho, es decir, sólo se reembolsará el valor pagado por el producto.\n' +
        '\n' +
        '## Garantía de Satisfacción\n' +
        '\n' +
        'En caso de comprar un producto nuevo, sin haberlo usado y no estás conforme, puedes solicitar el cambio o la devolución dentro de los primeros **60 días** corridos desde el retiro del producto en tienda o de recibido en la dirección de despacho. En caso de solicitar devolución, se devolverá el monto pagado al mismo medio de pago utilizado para la compra. En caso de compras con despacho a domicilio, no se devolverá el costo del despacho, es decir, sólo se reembolsará el valor pagado por el producto.\n' +
        '\n' +
        'Puedes llevar tu producto directamente a cualquiera de nuestras tiendas, en caso de que sea de gran tamaño y de difícil traslado, puedes coordinar el retiro desde la misma dirección de entrega original a través de Call Center llamando al teléfono 600 600 3010.\n' +
        '\n' +
        'Para hacer efectiva esta garantía, el Cliente debe cumplir con las siguientes condiciones:\n' +
        '\n' +
        '- Disponer de la boleta o factura, que acredite la compra. Si no tienes alguno de estos documentos, puedes pedir un duplicado en la tienda solo utilizando tu número de RUT.\n' +
        '- El producto debe estar en perfecto estado (limpio, sin rayas, sin abolladuras, sin manchas, etc.), sin uso y con su embalaje original.\n' +
        '- El producto debe contar con sus etiquetas, manuales, pólizas de garantía, accesorios y/o complementos.\n' +
        '\n' +
        'Excepciones a la Garantía de Satisfacción:\n' +
        '\n' +
        '- Productos refaccionados, descontinuados o de segunda mano (con detalles).\n' +
        '- Productos a pedido (fabricados según medidas proporcionadas por los clientes, o bien en colores especiales o en productos de encargo especial).\n' +
        '- Productos instalados, dimensionados, o para venta volumen.\n' +
        '- Colchones cuyo empaque haya sido abierto.\n' +
        '- Con respecto a los Duendes Mágicos, tienen un plazo de devolución de 10 días desde su retiro en Tienda o recepción en la dirección de despacho.\n' +
        '',
      order: 2,
      helpCategory: context.serviciosPosventaEasy,
      icon: '/icons/cards/return.svg',
      description: 'Revisa lo que debes saber para cambiar o retractarte y devolver un producto. ',
    });

    context.servicioInstalacionArmadoEasy = em.create(HelpContent, {
      label: 'Servicios de intalación y armado',
      reference: 'https://www.easy.cl/tienda/categoria/servicios?cur_page=1&cur_view=grid',
      content: '',
      order: 0,
      helpCategory: context.serviciosPosventaEasy,
      display: false,
      icon: '',
      description: '',
    });

    context.factibilidadTecnicaEasy = em.create(HelpContent, {
      label: 'Visita de factibilidad técnica',
      reference: 'https://www.easy.cl/tienda/categoria/visita-presupuesto',
      content: '',
      order: 0,
      helpCategory: context.serviciosPosventaEasy,
      display: false,
      icon: '',
      description: '',
    });

    context.serviciosTiendaEasy = em.create(HelpContent, {
      label: 'Servicios en tiendas',
      reference: '/servicios-en-tienda',
      content:
        '# Servicios en tiendas\n' +
        '\n' +
        '## Preparación de pinturas\n' +
        'En todos nuestros locales podrás encontrar el Centro de Color Easy, en donde tenemos disponible la pintura que estás buscando para tu proyecto. Escoge el color que deseas de nuestras paletas o tráenos una muestra del tono que quieres, y lo igualamos con el espectrofotómetro. Tu pintura la preparamos al instante y le asignamos un código para que solicites nuevamente el mismo color si lo requieres.\n' +
        '\n' +
        '## Cortes de Tableros\n' +
        'Tenemos a tu disposición el servicio de corte de tableros que mediante un software nos permite entregarte el mayor ahorro y el mejor patrón para tu tablero. Puedes optar por ¼, ½, 1 o más planchas.\n' +
        '\n' +
        '*Este servicio no está en los locales de Costanera Center y Alto Las Condes.\n' +
        '\n' +
        '### Dimensionado de Perfiles\n' +
        'Porque queremos facilitar la realización de tus proyectos, al comprar tus perfiles en nuestras tiendas, puedes solicitar que los dimensionen al tamaño que necesitas.\n' +
        '\n' +
        '*Este servicio no está disponible en Easy San Bernardo.\n' +
        '\n' +
        '### Venta a pedido\n' +
        'En todos nuestros locales puedes solicitar productos que no necesariamente están en exhibición, o bien productos de medidas especiales. Para conocer los que tenemos disponibles, acércate a un vendedor que te asesorará adecuadamente sobre el artículo que buscas. Debes consultar sobre las condiciones y tiempos de entrega.\n' +
        '\n' +
        '*Este servicio no está disponible en los locales de Costanera Center, Alto Las Condes y El Llano.\n' +
        '\n' +
        '## Despacho a domicilio\n' +
        'En todos nuestros locales encontrará diferentes servicios de despacho a domicilio. La tarifa dependerá del tamaño y peso del producto, además de la distancia de la entrega.\n' +
        '\n' +
        '### Circuito de Compras\n' +
        'En nuestros patios de construcción podrás hacer tus compras de manera rápida y segura. Entra con tu vehículo, compra, carga tus productos y ¡listo!\n' +
        '\n' +
        '*Este servicio no está disponible en los locales de Costanera Center, Alto Las Condes, Puente Alto, Ochagavía, El Llano y San Bernardo.\n' +
        '\n' +
        '### Venta Mayorista\n' +
        'Porque los grandes proyectos merecen un servicio y atención especializados, ofrecemos un servicio de Venta Mayorista a empresas y contratistas. Nuestros locales cuentan con un espacio exclusivo para brindarles la asesoría que requieren a través de cotizaciones, vendedores en terreno y despachos directos a obras. Además, en nuestras tiendas de El Belloto, La Florida y Rancagua, hemos implementado el despacho 24 hrs., que permite a aquellos clientes que compren antes de las 15:00 hrs., recibir su carga durante el día siguiente.\n' +
        '\n' +
        '*Este servicio no está disponible en los locales de Alto Las Condes, y El Llano.',
      order: 5,
      helpCategory: context.serviciosPosventaEasy,
      icon: '/icons/cards/shop.svg',
      description: 'Descubre nuestros servicios pensados para hacer tu proyecto más fácil.',
    });

    context.servicioTecnicoEasy = em.create(HelpContent, {
      label: 'Servicio Técnico',
      reference: 'https://www.easy.cl/servicio-tecnico',
      content: '',
      order: 4,
      helpCategory: context.serviciosPosventaEasy,
      icon: '/icons/cards/technician.svg',
      description: 'Solicita atención técnica para usar la garantía de tu producto.',
    });

    context.comoIngresarSolicitudEasy = em.create(HelpContent, {
      label: '¿Cómo ingresar una solicitud?',
      reference: '/como-ingresar-solicitud',
      content:
        '### ¿Cómo ingresar una solicitud?  \n' +
        '\n' +
        'Para crear una solicitud o reclamo por tu caso en el  [Formulario de contacto](<URL_HELP_FORM>) , primero debes ingresar con tu cuenta o ingresar con tu correo electrónico.\n' +
        '\n' +
        '```IconTable\n' +
        '{"textPosition":"bottom", "columns":1, "columnsDesktop":2, "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/login-solicitud-1.png", "text": "", "weight": "", "size": "", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/easy/login-solicitud-2.png", "text": "", "weight": "", "size": "", "reference": ""}]}\n' +
        '```\n' +
        '### Completa el Formulario de contacto\n' +
        '\n' +
        'Cuando estés en el Formulario para ingresar tu solicitud o reclamo, asegúrate de llenarlo siguiendo los pasos que te mostramos a continuación:\n' +
        '\n' +
        '``````IconTable\n' +
        '{"textPosition":"bottom", "renderImages":"true", "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/easy/step1.png", "text": "Elige un tipo de solicitud y motivo.", "weight": "normal", "height": "272", "width": "240"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/easy/step2.png", "text": "Selecciona la Orden de compra.", "weight": "normal", "height": "272", "width": "240"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/easy/step3.png", "text": "Completa los datos y envía la solicitud.", "weight": "normal", "height": "272", "width": "240"}]}\n' +
        '``````\n' +
        '',
      order: 1,
      helpCategory: context.serviciosPosventaEasy,
      icon: '/icons/cards/information.svg',
      description: 'Revisa como ingresar una solicitud o reclamo por tu caso en el Formulario de contacto.',
    });

    context.cancelacionCompraEasy = em.create(HelpContent, {
      label: 'Cancelación de compra',
      reference: '/cancelacion-de-compra',
      content:
        '\n' +
        '# Cancelación de compra\n' +
        '\n' +
        'Si te equivocaste al ingresar algún dato sobre la información de despacho o ya no quieres recibir un producto, ¡no te preocupes!  **Puedes solicitar una cancelación en Easy.cl**.\n' +
        '\n' +
        'En caso de que tu compra ya esté en proceso de envío,  **debes rechazar el producto cuando llegue a tu domicilio**  o iniciar el proceso de devolución una vez que lo tengas.\n' +
        '\n' +
        '## ¿Cómo cancelar una compra en Easy?\n' +
        '\n' +
        '**Paso 1: Ingresa al Formulario de contacto**\n' +
        'Para proceder de forma ágil e inmediata, debes  **ir a nuestro**  [Formulario de contacto](https://ayuda.easy.cl/ayuda/contactanos)  , ingresar con tu cuenta, registrarte o crear una solicitud con tu correo.\n' +
        '\n' +
        'Ten presente que  **la solicitud debe hacerse desde la misma cuenta con la que se hizo la compra**  que quieres cancelar.\n' +
        '\n' +
        '\n' +
        '**Paso 2:**\n' +
        'A continuación, deberás  **completar la información**  que te pedimos en el formulario y  **seleccionar aquellos productos por los que quieres solicitar una cancelación**.\n' +
        '\n' +
        '\n' +
        '**Paso 3: Valida o agrega tu información**\n' +
        '**comprueba que tus datos bancarios y de contacto estén correctos**. Si entraste con tu cuenta, aparecerán agregados de manera automática. De lo contrario, te pediremos completar los campos requeridos.\n' +
        '\n' +
        'Para terminar,  **ingresa la solicitud en el formulario**. Te enviaremos un correo en el que te avisaremos que vamos a empezar a trabajar en tu caso.\n' +
        '\n' +
        '## Consideraciones importantes\n' +
        '\n' +
        '-  Si compraste con tarjeta de crédito, devolveremos tu dinero al mismo medio de pago.\n' +
        '-   El reembolso se verá reflejado en máximo  **10 días hábiles** contados desde la devolución del producto en caso de tarjeta de crédito o  **15 días hábiles**  si se trata de tarjetas de débito desde que proporcionó sus datos bancarios y se haya emitido la Nota de Crédito. Sin embargo, esta gestión dependerá de cada entidad bancaria y de que los datos que ingresaste sean correctos.\n' +
        '',
      order: 8,
      helpCategory: context.serviciosPosventaEasy,
      icon: '/icons/cards/transactionCancel.svg',
      description: 'Infórmate como realizar la cancelación de una compra.',
    });

    //============ ACERCA DE EASY ============//
    context.tiendasHorariosEasy = em.create(HelpContent, {
      label: 'Tiendas y horarios',
      reference: 'https://www.easy.cl/es/cl/easy-chile/tiendas',
      content:
        '# Información de  horarios y  estado de tienda\n' +
        '\n' +
        '## Región Metropolitana\n' +
        '|  |  |\n' +
        '|--|--|\n' +
        '|Alto las Condes|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs > [Ver ubicación](https://www.google.com/maps?ll=-33.390732,-70.545112&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=3142777249974127379)\n' +
        '|Cerrillos|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs > [Ver ubicación](https://www.google.com/maps?ll=-33.515846,-70.738013&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=17585483974340622278)\n' +
        '|Chicureo|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.285979,-70.700035&z=16&t=m&hl=es-ES&gl=CL&mapclient=embed&q=Av.+Chicureo+130+Chicureo,+Colina+Regi%C3%B3n+Metropolitana)\n' +
        '|Costanera Center|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.417898,-70.60675&z=16&t=m&hl=es-419&gl=CL&mapclient=embed&cid=2692808450541921465)\n' +
        '|El Llano |Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.485596,-70.651537&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=14940920451828395221)\n' +
        '|La Dehesa|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.35711,-70.515829&z=14&t=m&hl=es-ES&gl=US&mapclient=embed&cid=12567252232491298491)\n' +
        '|La Florida|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs > [Ver ubicación](https://www.google.com/maps?ll=-33.51076,-70.605892&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=11458916517627282059)\n' +
        '|La Reina|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.428247,-70.540775&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=18183160440973313409)\n' +
        '|Maipú|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.479974,-70.753787&z=16&t=m&hl=es-ES&gl=CL&mapclient=embed&cid=9553392919923288258)\n' +
        '|Ochagavía|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.501479,-70.66818&z=16&t=m&hl=es-ES&gl=CL&mapclient=embed&cid=16141448201911211847)\n' +
        '|Puente Alto|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps/place/Easy+Puente+Alto/@-33.5715424,-70.5875043,17z/data=!3m1!4b1!4m5!3m4!1s0x9662d72e23274f0b:0x6ad8adc5129af759!8m2!3d-33.5715469!4d-70.5853103?hl=es-ES)\n' +
        '|Quilicura|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.357897,-70.728276&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=4083095755274466516)\n' +
        '|Quilín|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.48937,-70.576877&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=4766352222792124923)\n' +
        '|San Bernardo|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.633659,-70.708954&z=16&t=m&hl=es-ES&gl=CL&mapclient=embed&cid=8186265491779087420)\n' +
        '\n' +
        '## Zona Norte\n' +
        '\n' +
        '|  |  |\n' +
        '|--|--|\n' +
        '|Arica|Lunes a Sábado de 08:00 a 20:00 hrs / Domingos y Festivos de 09:00 a 20:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-18.469143,-70.307095&z=17&t=m&hl=es-419&gl=CL&mapclient=embed&cid=17239397728545751205)\n' +
        '|Antofagasta|Lunes a Sábado de 08:00 a 20:00 hrs / Domingos y Festivos de 09:00 a 20:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-23.667576,-70.404875&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=8880392667194875280)\n' +
        '|Calama|Lunes a Sábado de 08:00 a 20:00 hrs / Domingos y Festivos de 09:00 a 20:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-22.454842,-68.924187&z=16&t=m&hl=es-419&gl=CL&mapclient=embed&cid=7515104051759210376)\n' +
        '|Copiapó|Lunes a Sábado de 08:00 a 20:00 hrs / Domingos y Festivos de 09:00 a 20:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-27.383461,-70.315271&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=15096703216936212622)\n' +
        '|La Serena|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-29.916655,-71.259674&z=16&t=m&hl=es-ES&gl=CL&mapclient=embed&cid=3856404112652445523)\n' +
        '\n' +
        '## Zona Centro\n' +
        '\n' +
        '|  |  |\n' +
        '|--|--|\n' +
        '|Curicó|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-34.989707,-71.245259&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=13981953587036030631)\n' +
        '|El Belloto|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.045718,-71.420054&z=16&t=m&hl=es-ES&gl=CL&mapclient=embed&cid=3382312053222944223)\n' +
        '|Los Andes|Lunes a Sábado de 08:00 a 20:00 hrs / Domingos y Festivos de 09:00 a 20:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-32.822321,-70.616024&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=16869347183231267305)\n' +
        '|Quillota|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-32.875928,-71.235003&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=18019100439814554935)\n' +
        '|Rancagua|Lunes a Sábado de 08:00 a 20:00 hrs / Domingos y Festivos de 09:00 a 20:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-34.186661,-70.725141&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=14670441888038366309)\n' +
        '|Talca|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-35.430195,-71.670157&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=13624170169678399027)\n' +
        '|Valparaíso|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.044212,-71.604273&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=11117639791072827498)\n' +
        '|Viña del Mar|Lunes a Sábado de 08:00 a 19:00 hrs / Domingos y Festivos de 09:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-33.035808,-71.523577&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=8226017238266382306)\n' +
        '\n' +
        '## Zona Sur\n' +
        '\n' +
        '|  |  |\n' +
        '|--|--|\n' +
        '|Chiguayante|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-36.930514,-73.021421&z=16&t=m&hl=es-ES&gl=ES&mapclient=embed&cid=8235196730537010393)\n' +
        '|Chillán|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs > [Ver ubicación](https://www.google.com/maps?ll=-36.592788,-72.104389&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=15548690341541197148)\n' +
        '|Concepción|09:00 a 18:00 horas >  [Ver ubicación](https://www.google.com/maps?ll=-36.807853,-73.089124&z=16&t=m&hl=es-ES&gl=CL&mapclient=embed&cid=5975592843989366276)\n' +
        '|Coronel|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-36.998138,-73.161344&z=16&t=m&hl=es-ES&gl=CL&mapclient=embed&cid=11999514128851797615)\n' +
        '|Linares|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-35.838213,-71.58704&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=18434557145566108667)\n' +
        '|Los Ángeles|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-37.482004,-72.359464&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=17001163767299873719)\n' +
        '|Osorno|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-40.580552,-73.116217&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=13614233658691021166)\n' +
        '|Puerto Montt|08:00 a 20:00 horas >  [Ver ubicación](https://www.google.com/maps?ll=-41.468621,-72.930377&z=16&t=m&hl=es-419&gl=CL&mapclient=embed&cid=3716212130419447516)\n' +
        '|Temuco|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs >  [Ver ubicación](https://www.google.com/maps?ll=-38.746621,-72.607355&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&cid=8410477439341127054)\n' +
        '|Portal Temuco|Lunes a Sábado de 10:00 a 19:00 hrs / Domingos y Festivos de 10:00 a 19:00 hrs >  [Ver ubicación](https://www.google.com/maps/place/Portal+Temuco/@-38.7335666,-72.6128504,17z/data=!3m1!4b1!4m5!3m4!1s0x96623f0f6ecffc81:0xa0819486bef36f8d!8m2!3d-38.7335708!4d-72.6106617)\n' +
        '|Bio Bio|Lunes a Sábado de 09:00 a 18:00 hrs / Domingos y Festivos de 09:00 a 18:00 hrs > [Ver ubicación](https://www.google.cl/maps/place/Easy+Concepci%C3%B3n/@-36.8078531,-73.0891241,15z/data=!4m5!3m4!1s0x0:0x52ed9208145a3604!8m2!3d-36.8078531!4d-73.0891241)',
      order: 1,
      helpCategory: context.acercaEasy,
      display: false,
      icon: '',
      description: '',
    });

    context.quienesSomosEasy = em.create(HelpContent, {
      label: 'Quiénes somos',
      reference: '/quienes-somos',
      content:
        '# Quiénes somos\n' +
        '\n' +
        'Somos Cencosud Easy es una de las empresas del grupo Cencosud, un holding internacional con más de 50 años de historia y con presencia en América Latina que opera una estrategia multiformato, a través de supermercados, tiendas de mejoramiento para el hogar, centros comerciales, tiendas por departamento y retail financiero. Estas operaciones las complementa con actividades de corretaje de seguros y centros de entretención familiar.\n' +
        '\n' +
        'Actualmente, el holding cuenta con una presencia significativa en Argentina, Brasil, Chile, Perú y Colombia, operaciones coordinadas desde su casa matriz en Chile, y posee una dotación cercana a los 120.000 colaboradores.\n' +
        '\n' +
        'Cencosud es una Sociedad Anónima abierta y, como tal, se encuentra sujeta a las disposiciones de la Ley Nº 18.046 sobre Sociedades Anónimas, de la Ley Nº 18.045 sobre Mercado de Valores y la normativa de la Superintendencia de Valores y Seguros, entre otras. Además, como entidad que transa valores en los Estados Unidos de Norteamérica, Cencosud S.A. está inscrita en la SEC (Securities and Exchange Commission) y cumple con las disposiciones de la Ley Sarbanes Oxley de 2002, entre otras.\n' +
        '\n' +
        'Easy comenzó su historia en Argentina en 1993 y al año siguiente abrió sus puertas en Chile. Somos especialistas en la comercialización de productos y servicios orientados a la construcción, remodelación y equipamiento del hogar, y entregamos soluciones integrales para que cada persona pueda llevar a cabo sus propios proyectos. Nos dedicamos a la venta al detalle y mayorista de productos para el mejoramiento del hogar tanto de casa y jardín, como de construcción. Nuestras tiendas atraen a más de 20 millones de visitas al año, generando una importante actividad económica. Nuestros productos, nacionales e importados, se distinguen por su gran calidad, variedad y excelentes precios.\n' +
        '\n' +
        'La casa matriz se encuentra ubicada en el Mall Alto Las Condes (Avenida Kennedy 9001, piso 5, Las Condes, Santiago) y contamos con locales distribuidos desde Calama hasta Puerto Montt. A junio de 2015, operamos en tres países de América Latina: Argentina, donde contamos con 42 tiendas; Colombia, con 10 y Chile, con 35, lo que suma 87 locales en total.\n' +
        '\n' +
        'Nuestros servicios y líneas de productos se configuran para 3 grupos de destinatarios objetivos: Mundo Hogar, Mundo Profesional y Mundo Empresas. Además, en Easy las personas hacen la diferencia, por eso le damos mucha importancia a los procesos de selección y capacitación de nuestros colaboradores. Aspectos como la cordialidad y la capacidad de ponerse en el lugar del cliente son fundamentales en nuestro trabajo. Casi 5.000 personas trabajan con nosotros, entre colaboradores de tiendas, de la administración central y del centro de distribución.\n' +
        '\n' +
        'Conoce también nuestros programas de Responsabilidad Social Empresarial (RSE),  [Ver Sitio](https://nuevo.easy.cl/proposito-institucional/nuestro-easy)',
      order: 2,
      helpCategory: context.acercaEasy,
      icon: '/icons/cards/buyInEasy.svg',
      description: '',
    });

    context.basesLegalesEasy = em.create(HelpContent, {
      label: 'Bases legales',
      reference: '/bases-legales',
      content:
        '# Bases legales Easy.cl\n' +
        '\n' +
        '### Revisa las bases legales del 2023\n' +
        '\n' +
        '[Concurso Experiencia de compra >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/2023-encuesta-experiencia-de-compra.pdf)\n' +
        '\n' +
        '[Concurso Experiencia Centro de clientes >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/2023-encuesta-experiencia-centro-de-clientes.pdf)\n' +
        '\n' +
        '[Concurso semana CIC >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/2023-bases-promocion-concurso-semana-cic.pdf)\n' +
        '\n' +
        '[Concurso Festival de Viña >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/2023-concurso-festival-vina.pdf)\n' +
        '\n' +
        '[Concurso Lollapalooza >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/2023-concurso-lollapalooza.pdf)\n' +
        '\n' +
        '### Revisa las bases legales del 2022\n' +
        '\n' +
        '[Concurso Experiencia de Compra >](https://d31w2ybspxswhh.cloudfront.net/hogar/PROTOCOLIZACON_BASES_CONCURSO_ENCUESTA_EXPERIENCIA_DE_COMPRAS_DE_EASY.pdf)\n' +
        '\n' +
        '### Revisa las bases legales del 2021\n' +
        '\n' +
        '[Concurso Experiencia de Compra >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/2020-Bases-Concurso-Experiencia-de-Compra.pdf)\n' +
        '\n' +
        '### Revisa las bases legales del 2020\n' +
        '\n' +
        '[Concurso Experiencia de Compra >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/Bases+Concurso+Experiencia+de+Compra+2020.pdf)\n' +
        '\n' +
        '[Concurso Imperdibles Easy >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/2020-Bases-concurso-imperdibles.pdf)\n' +
        '\n' +
        '### Revisa las bases legales del 2019\n' +
        '\n' +
        '[Bases legales BOSCH >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/bases-legales-bosch.pdf)\n' +
        '\n' +
        '[Sorteo Experiencia de Compra >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/bases-sorte-compra-2019.pdf)\n' +
        '\n' +
        '[Concurso Diseño Verde >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/bases-concurso-diseno-verde.pdf)\n' +
        '\n' +
        '[Ganadores Sorteo Gift Card Easy.cl >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/ganadores_promocion_gc.pdf)\n' +
        '\n' +
        '[Concurso Hermanos a la Obra >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/Bases-hermanos-a-la-obra.pdf)\n' +
        '\n' +
        '[Re cambia parrillas >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/Bases-Legales-Re-Cambia-Parrillas-2019.pdf)\n' +
        '\n' +
        '[Pool Party: Bestway >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/bases-legales-Bestway.pdf)\n' +
        '\n' +
        '### Revisa las bases legales del 2018\n' +
        '\n' +
        '[Mundo Experto >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/base-legales-mundo-experto-2018.pdf)\n' +
        '\n' +
        '[Recambia parrillas >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/bases-legales-re-cambia-parrilla-2018.pdf)\n' +
        '\n' +
        '[Encuesta experiencia de compra >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/protocolizacion-2018.pdf)\n' +
        '\n' +
        '[Recambia estufas >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/bases-legales-re-cambia-estufa-2018.pdf)\n' +
        '\n' +
        '### Revisa las bases legales del 2017\n' +
        '\n' +
        '[Re cambia parrillas >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/bases-legales-recambia-parrillas-2017-V3.pdf)\n' +
        '\n' +
        '[Re cambia baterías >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/bases-legales-recambia-2017.pdf)\n' +
        '\n' +
        '[Sorteo Mundo Experto día del padre clientes inscritos >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/BasesMEdiadelpadre.pdf)\n' +
        '\n' +
        '[Sorteo Mundo Experto día del padre clientes no inscritos >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/BasesMEdiadelpadreClientesNuevos.pdf)\n' +
        '\n' +
        '[Concurso Meguiar’s >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/bases-legales-meguiars.pdf)\n' +
        '\n' +
        '[Concurso Vacaciones 2017 >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/vacaciones-2017.pdf)\n' +
        '\n' +
        '### Revisa las bases legales del 2016\n' +
        '\n' +
        '[Promoción Navilike >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/Bases-legales-Navilike-2016.pdf)\n' +
        '\n' +
        '[Concursos #CyberMondayEasy >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/Bases-legales-Concurs-CyberMondayEasy.pdf)\n' +
        '\n' +
        '[Terraza Instagram >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/terraza-Instagram.pdf)\n' +
        '\n' +
        '[Renueva tu estufa >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/renueva-tu-estufa.pdf)\n' +
        '\n' +
        '[El amor ilumina >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/BaseslegalesConcursoElamoriluminayoamomicasa.pdf)\n' +
        '\n' +
        '[Concurso final >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/Bases-legales-concurso-final.pdf)\n' +
        '\n' +
        '[Día del Padre instagram >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/Bases-legales-dia-del-padre-Instagram.pdf)\n' +
        '\n' +
        '[Campaña registro Junio / Julio >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/bases-legales-campana-registro-junio%202016.pdf)\n' +
        '\n' +
        '[Modificación bases promoción Re cambia >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/modificacion-cambia-pisos-baterias.pdf)\n' +
        '\n' +
        '[Concurso la llamita >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/conrurso-la-llamita.pdf)\n' +
        '\n' +
        '[Concurso flash Mayo >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/concurso-flash-mayo.pdf)\n' +
        '\n' +
        '[Actualización contraseña Mayo >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/actualizacion-contrasena-mayo.pdf)\n' +
        '\n' +
        '[Cambia batería y pilas >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/cambia-baterias-pilas.pdf)\n' +
        '\n' +
        '[Pisoteca >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/pisoteca.pdf)\n' +
        '\n' +
        '[Campaña de regsitro y actualización de contraseña de usuario Easy.cl >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/campana-registro-actualizacion-datos.pdf)\n' +
        '\n' +
        '[Organización Facebook >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/bases-legales-organizacion-facebook.pdf)\n' +
        '\n' +
        '[MasDeco instagram >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/mas-deco-instagram.pdf)\n' +
        '\n' +
        '[Cambio de color MasDeco >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/cambio-colo-mas-deco.pdf)\n' +
        '\n' +
        '[Evaluacion Experiencia de Compra >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/evaluacion-experiencia-compra.pdf)\n' +
        '\n' +
        '[Día de la madre 2016 >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/dia-mama.pdf)\n' +
        '\n' +
        '[Mes del Experto 2016 >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/mes-experto.pdf)\n' +
        '\n' +
        '[Mes del Experto venta empresa >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/mes-experto-venta-empresa.pdf)\n' +
        '\n' +
        '[El concurso de los concursos >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/el-concurso-de-los-concursos.pdf)\n' +
        '\n' +
        '[Extensión el Concurso de los Concursos >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/extencion-el-concurso-de-los-concursos.pdf)\n' +
        '\n' +
        '[Yo amo mi casa Instagram >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/yoamomicasa.pdf)\n' +
        '\n' +
        '[La ruta del Camping >](https://d31w2ybspxswhh.cloudfront.net/TxD/easy/basesLegales/la-ruta-del-camping.pdf)',
      order: 3,
      helpCategory: context.acercaEasy,
      icon: '/icons/cards/text.svg',
      description: '',
    });
    //============ ACERCA DE EASY ============//
    context.tarjetaCencosudEasy = em.create(HelpContent, {
      label: 'Tarjeta Cencosud',
      reference: 'https://www.tarjetacencosud.cl/TarjetaMasWEB/home.html',
      content: '',
      order: 1,
      helpCategory: context.cencosudEasy,
      icon: '',
      description: '',
    });

    context.puntosCencosudEasy = em.create(HelpContent, {
      label: 'Puntos Cencosud',
      reference: 'https://www.puntoscencosud.cl/puntos/',
      content: '',
      order: 2,
      helpCategory: context.cencosudEasy,
      icon: '',
      description: '',
    });

    context.segurosCencosudEasy = em.create(HelpContent, {
      label: 'Seguros Cencosud',
      reference: 'https://www.seguroscencosud.cl/',
      content: '',
      order: 3,
      helpCategory: context.cencosudEasy,
      icon: '',
      description: '',
    });

    context.trabajaConNosotrosEasy = em.create(HelpContent, {
      label: 'Trabaja con nosotros',
      reference: 'https://cencosud.trabajando.com/',
      content: '',
      order: 4,
      helpCategory: context.cencosudEasy,
      icon: '',
      description: '',
    });
  }
}
