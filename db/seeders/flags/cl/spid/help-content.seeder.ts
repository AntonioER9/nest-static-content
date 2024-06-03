import { EntityManager, Dictionary } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { HelpContent } from 'modules/content/help-category/entities/help-content.entity';

export class HelpContentSpidSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    //============ PEDIR SPID ============//
    context.comoHagoUnPedidoSpid = em.create(HelpContent, {
      label: '¿Cómo hago un pedido?',
      reference: '/como-hago-un-pedido',
      content:
        '# ¿Cómo hago un pedido?\n' +
        '\n' +
        'Para realizar una compra en Spid debes descargar la App y crearte una cuenta. Si ya tienes cuenta en Jumbo o Santa Isabel, utiliza las \n' +
        'mismas credenciales. \n' +
        '\n' +
        '- Al ingresar, deberás indicar una dirección de despacho.  \n' +
        '- Selecciona los productos que necesitas, pincha el botón de tu carro ubicado en la esquina superior derecha. \n' +
        '- Si alguno de los productos de tu carro no estuviera disponible al preparar tu pedido, te llamaremos para que nos indiques cómo te gustaría sustituirlo. \n' +
        '- Revisa tu carro y pincha el botón “Ir a pagar” para finalizar la compra. \n' +
        '- Revisa tus datos de entrega y agrega o modifica un medio de pago.\n' +
        '- Finalmente pincha en “Pagar” para que preparemos y enviemos tu pedido.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 9, "reference": "/ayuda/contactanos?data=e646913a4bc5c235d91f2bde6188c40aae6c4266c7ab7b389d93c263ddcfe453", "invitedReference": "/ayuda/contactanos?data=e646913a4bc5c235d91f2bde6188c40aae6c4266c7ab7b389d93c263ddcfe453" }\n' +
        '```\n' +
        '',
      order: 1,
      helpCategory: context.pedirSpid,
      icon: '',
      description: '',
    });

    context.stockProductosSpid = em.create(HelpContent, {
      label: 'Sobre el stock de productos',
      reference: '/stock-de-productos',
      content:
        '# Stock de productos\n' +
        '\n' +
        'Cuando ingreses a Spid encontrarás todos los productos disponibles en el local donde se hará la recolección de tu pedido, el cual ha sido asignado según cercanía y capacidad. Sin embargo, es posible que algunos productos ya no estén disponibles al momento de preparar tu pedido.\n' +
        '\n' +
        'En ese caso, nos contactaremos contigo a través de la App para ofrecerte alternativas o sustitutos. Si no pudiéramos comunicarnos contigo o no tener sustitutos adecuados para ofrecerte, los productos que no se envíen serán descontados de la boleta.',
      order: 2,
      helpCategory: context.pedirSpid,
      icon: '',
      description: '',
    });

    context.comoBuscoProductosSpid = em.create(HelpContent, {
      label: '¿Cómo busco productos?',
      reference: '/como-busco-productos',
      content:
        '# ¿Cómo busco productos?\n' +
        '\n' +
        'Estas son las formas en las que podrás encontrar los productos que buscas en Spid:\n' +
        '\n' +
        '- **Búsqueda por categorías claves**: navega por las categorías agrupadas en “Pasillos” o ingresa rápidamente a las categorías más visitadas en el menú principal (Happy  Hour, Bebidas, Snacks, Chicles, Galletas y chocolates, Cervezas, entre otras).\n' +
        '- **Búsqueda por palabras claves**: el buscador superior de la App te ayudará a encontrar por palabras clave un producto específico (ejemplo: leche). Como resultado, te mostraremos una lista de productos correspondientes a la palabra ingresada.\n' +
        '\n' +
        'No olvides que también puedes navegar por toda la App para revisar ofertas, promociones y productos destacados.',
      order: 3,
      helpCategory: context.pedirSpid,
      icon: '',
      description: '',
    });
    //============ CAMBIAR DATOS SPID ============//
    context.quieroCambiarDatosSpid = em.create(HelpContent, {
      label: 'Quiero cambiar mis datos ',
      reference: '/quiero-cambiar-mis-datos',
      content:
        '# Quiero cambiar mis datos\n' +
        '\n' +
        'En la App Spid, ingresa a la sección “Cuenta” y "Mis datos", para poder editar tu nombre y teléfono. Tu correo electrónico y tu RUT no son campos editables. Para editar, agregar o eliminar una dirección, lo puedes hacer en "Mis direcciones" de la sección Cuenta.\n' +
        '\n' +
        '',
      order: 1,
      helpCategory: context.cambiarDatosSpid,
      icon: '',
      description: '',
    });

    context.quieroCambiarClaveSpid = em.create(HelpContent, {
      label: 'Quiero cambiar mi clave ',
      reference: '/quiero-cambiar-mi-clave',
      content:
        '# Quiero cambiar mi clave\n' +
        '\n' +
        'Una vez dentro de la App Spid, cierra sesión desde “Cuenta”. Luego en la pantalla de inicio, pincha en "¿Olvidaste tu clave?" para que te enviemos un código a tu correo y así puedas cambiarla de forma segura.',
      order: 2,
      helpCategory: context.cambiarDatosSpid,
      icon: '',
      description: '',
    });

    context.agregarDireccionDespachoSpid = em.create(HelpContent, {
      label: 'Agregar una nueva dirección de despacho',
      reference: '/agregar-nueva-direccion-de-despacho',
      content:
        '# Agregar una nueva dirección de despacho\n' +
        '\n' +
        'Para agregar una nueva dirección en las comunas donde Spid está disponible, debes seguir los siguientes pasos:\n' +
        '\n' +
        '- Ingresa a Cuenta en la App Spid y, en la sección “Mis direcciones”, pincha el botón “Agregar nueva dirección”.\n' +
        '- Escribe tu calle y número. Acá verás desplegarse un listado con las distintas comunas. Elige la que corresponde a tu dirección y luego completa el número de casa o departamento e ingresa referencias adicionales si lo consideras necesario.\n' +
        '- Te mostraremos una imagen del mapa donde se ubica tu dirección para que la confirmes. Si no encontramos la dirección que indicaste, te pediremos mover el pin rojo hasta la zona correspondiente.\n' +
        '- En el caso de no contar con Spidders y locales cerca de la dirección que deseas agregar, te avisaremos para que intentes con otra ubicación. Puedes revisar la cobertura de Spid.\n' +
        '\n' +
        'Ten en cuenta que por tu seguridad, cada vez que agregues una nueva dirección, te notificaremos al correo registrado en tu cuenta.\n' +
        '\n' +
        '',
      order: 3,
      helpCategory: context.cambiarDatosSpid,
      icon: '',
      description: '',
    });

    context.quieroCambiarCuentaBancariaSpid = em.create(HelpContent, {
      label: 'Quiero cambiar mi cuenta bancaria',
      reference: '/quiero-cambiar-mi-cuenta-bancaria',
      content:
        '# Quiero cambiar mi cuenta bancaria\n' +
        '\n' +
        'Ingresa a “Cuenta” y en “Mi cuenta bancaria” podrás ingresar los datos de tu cuenta para las devoluciones que pudieran generarse en tus pedidos. Solo podrás utilizar cuentas bancarias donde el titular sea el mismo que el titular de la cuenta de Spid.',
      order: 4,
      helpCategory: context.cambiarDatosSpid,
      icon: '',
      description: '',
    });
    //============ PROBLEMAS PEDIDO SPID ============//
    context.productoCobradoNoEnviadoSpid = em.create(HelpContent, {
      label: 'Me cobraron y no me enviaron un producto',
      reference: '/producto-cobrado-y-no-enviado',
      content:
        '# Producto cobrado y no enviado\n' +
        '\n' +
        'Si no llegaron todos los productos de tu pedido y estos no fueron cobrados, te pedimos disculpas, ya que si al momento de preparar tu compra no tuviésemos los productos que elegiste, te llamaremos para ofrecerte sustitutos.\n' +
        '\n' +
        'Si no aceptas las alternativas ofrecidas por alguno de nuestros Spidders, estos productos quedarán como faltantes; es decir, no se cobrarán ni se enviarán a tu domicilio.\n' +
        '\n' +
        'Si el producto aparece cobrado en tu boleta, pero no llegó en tu pedido, te devolveremos el dinero al medio de pago que utilizaste.\n' +
        '\n' +
        'Completa el siguiente formulario [aquí](<URL_HELP_FORM>?data=0d3e2ea5907e3a675c93d108e8470c07cdb536e2f66c70fe1c1c8aa95a318f0a) y selecciona el producto que no te llegó. Tu solicitud será procesada de forma automática y en un plazo de 10 días se reflejará la diferencia en tu tarjeta.',
      order: 1,
      helpCategory: context.problemasPedidoSpid,
      icon: '',
      description: '',
    });

    context.problemasSustitucionProductosSpid = em.create(HelpContent, {
      label: 'Tuve problemas con el reemplazo de un producto',
      reference: '/problemas-con-la-sustitucion-productos',
      content:
        '# Problemas con la sustitución de productos\n' +
        '\n' +
        'Nuestros Spidders preparan tu pedido directamente en nuestros locales. Si al momento de recolectar tus productos no encontramos suficientes unidades para responder a tu solicitud, nos contactaremos contigo para ofrecerte sustitutos.\n' +
        '\n' +
        'Si el producto que aparece cobrado en tu boleta, no fue seleccionado por ti, te devolveremos el dinero al medio de pago que utilizaste.\n' +
        '\n' +
        'Completa el siguiente formulario y selecciona el producto que no te llegó. Tu solicitud será procesada de forma automática y en un plazo de 10 días se reflejará la diferencia en tu tarjeta.\n' +
        '\n' +
        '',
      order: 2,
      helpCategory: context.problemasPedidoSpid,
      icon: '',
      description: '',
    });

    context.miPedidoNoLlegoSpid = em.create(HelpContent, {
      label: 'Mi pedido no llegó en 35 minutos',
      reference: '/mi-pedido-no-llego-en-35-minutos',
      content:
        '# Mi pedido no llegó en 35 minutos\n' +
        '\n' +
        'Nuestra promesa de entrega parte en 35 minutos, y dependerá de la cantidad de productos que lleves en tu carro. Los tiempos de entrega siempre serán informados antes de que realices el pago de tu pedido, para que decidas si te acomoda o no antes de confirmar tu compra.',
      order: 3,
      helpCategory: context.problemasPedidoSpid,
      icon: '',
      description: '',
    });

    context.miProductoLlegoMalSpid = em.create(HelpContent, {
      label: 'Mi producto llegó en mal estado',
      reference: '/producto-en-mal-estado-danado-vencido-o-descongelado',
      content:
        '# Producto en mal estado, dañado, vencido o descongelado\n' +
        '\n' +
        'Si en tu pedido recibes un producto vencido o en malas condiciones, te devolveremos el dinero al medio de pago que utilizaste.\n' +
        '\n' +
        'Completa [aquí](<URL_HELP_FORM>?data=60a7f310f5b5b8dd964d5d9c9459d174438ab7446a4aaa1cedc9f96c0d1e3551) el siguiente formulario y selecciona el producto con el que tuviste problemas. Tu solicitud será procesada de forma automática y en un plazo de 10 días se reflejará la diferencia en tu tarjeta.',
      order: 4,
      helpCategory: context.problemasPedidoSpid,
      icon: '',
      description: '',
    });

    context.ofertaNoAplicadaSpid = em.create(HelpContent, {
      label: 'No se aplicó una oferta',
      reference: '/oferta-no-aplicada',
      content:
        '# Oferta no aplicada\n' +
        '\n' +
        'Recuerda revisar la confirmación de tu pedido, donde las ofertas deben estar aplicadas en el valor final de la compra.\n' +
        '\n' +
        'Si esta información no ha resuelto tus dudas, podemos derivarte con uno de nuestros Ejecutivos, quien analizará la situación y te ayudará a resolverla. Completa el siguiente formulario y selecciona el producto con el que tuviste problemas. Tu solicitud será procesada de forma automática y en un plazo de 10 días ya tendrás la reversa en tu medio de pago.\n' +
        '\n' +
        '',
      order: 5,
      helpCategory: context.problemasPedidoSpid,
      icon: '',
      description: '',
    });
    //============ MEDIOS PAGO SPID ============//
    context.cualesSonLosMediosPagoSpid = em.create(HelpContent, {
      label: '¿Cómo puedo pagar?',
      reference: '/cuales-son-los-medios-de-pago-disponibles',
      content:
        '# ¿Cuáles son los medios de pago disponibles?\n' +
        '\n' +
        'Puedes pagar con Tarjeta Cencosud Scotiabank o tarjetas bancarias de crédito o débito emitidas en Chile: Visa, MasterCard, American Express o Diners.',
      order: 1,
      helpCategory: context.mediosPagoSpid,
      icon: '',
      description: '',
    });

    context.agregarEliminarTarjetaSpid = em.create(HelpContent, {
      label: 'Quiero agregar o eliminar una tarjeta',
      reference: '/agregar-o-eliminar-una-tarjeta',
      content:
        '# Agregar o eliminar una tarjeta\n' +
        '\n' +
        'Tienes que registrarte e ingresar a tu cuenta. Al momento de hacer tu pedido y pasar al checkout, en el paso 3 te encontrarás con las formas de pago donde podrás ingresar o agregar una tarjeta de crédito, tarjeta de débito o Tarjeta Cencosud Scotiabank.',
      order: 2,
      helpCategory: context.mediosPagoSpid,
      icon: '',
      description: '',
    });

    context.comoRealizanCobroTarjetaSpid = em.create(HelpContent, {
      label: '¿Cómo hacen el cobro en mi tarjeta?',
      reference: '/como-se-realiza-el-cobro-en-mi-tarjeta',
      content:
        '# ¿Cómo se realiza el cobro en mi tarjeta?\n' +
        '\n' +
        'Para comprar en [Spid](https://spidchile.cl/), puedes usar tu tarjeta de crédito o débito.\n' +
        '\n' +
        '**Si deseas utilizar tu tarjeta de débito, te solicitaremos completar tus datos bancarios para poder devolverte futuras diferencias o saldos a favor**, las que serán entregadas a través de transferencias bancarias o algún otro método similar.\n' +
        '\n' +
        'Estos datos bancarios solo pueden ser modificados por ti en tu cuenta Spid en la sección ‘Mi cuenta bancaria’. Recuerda que es importante mantenerla actualizada, pues a modo de resguardo y protección, ningún colaborador de Cencosud puede crear, editar o borrar dichos datos.\n' +
        '\n' +
        'Al momento de realizar tu pedido, se realizará una primera transacción en la tarjeta de crédito o débito que seleccionaste de pago, que corresponde al 90% del total de tu compra.  \n' +
        'Una vez que tus productos hayan sido recolectados y pasados por caja, se emitirá un segundo cobro correspondiente a las diferencias del monto, si es que hubieran, por los productos que serán efectivamente entregados.\n' +
        '\n' +
        'De esta forma, no se facturarán los artículos faltantes, pero sí se agregarán al cobro, en caso de haberlos, aquellos productos que sumaste al pedido durante el llamado telefónico con el picker. Debes tener en consideración que los valores a cobrar corresponderán al precio exhibido en la sala de ventas, los cuales podrían tener una diferencia con el valor publicado en la web.\n' +
        '\n' +
        'Para los productos a granel, se cobrará la cantidad real correspondiente al peso del producto entregado.\n' +
        '\n' +
        'En caso de que no estuviesen todos los productos que solicitaste y hubiese una diferencia a favor, se te realizará una devolución a tu tarjeta de crédito, o cuenta corriente registrada en tu cuenta de haber pagado con débito.\n' +
        '\n' +
        '## Devoluciones:\n' +
        '\n' +
        'Si existiera diferencia entre lo cobrado y lo facturado a tu favor, en el caso de haber pagado con tarjeta de crédito, esta se verá reflejada en los movimientos por facturar en un plazo máximo de 5 días hábiles.\n' +
        '\n' +
        'En el caso de haber utilizado una tarjeta de débito, se realizará una transferencia bancaria en un plazo máximo de 5 días hábiles. Si no existieran diferencias entre el pedido original y el recolectado, solo verás la primera transacción en los movimientos de tu tarjeta de crédito y débito.\n' +
        '\n' +
        'Las devoluciones al medio de pago, en tanto, se realizan de manera automática. Dependiendo del banco, podrás verla reflejada inmediatamente o en un máximo de 3 días hábiles, pero en caso de algún problema, como el bloqueo de tu tarjeta u otro motivo, se efectúa la devolución en un máximo de 14 días corridos, ya que se realiza de manera administrativa.\n' +
        '\n' +
        '',
      order: 3,
      helpCategory: context.mediosPagoSpid,
      icon: '',
      description: '',
    });

    context.cobroIndebidoTarjetaCreditoSpid = em.create(HelpContent, {
      label: 'Tuve problemas con el cobro en mi tarjeta de crédito',
      reference: '/cobro-indebido-en-mi-tarjeta-de-credito',
      content:
        '# Cobro indebido en mi tarjeta de crédito\n' +
        '\n' +
        'Cuando ingresas un pedido en Spid en tu tarjeta de crédito verás una primera transacción correspondiente al cobro por el monto del pedido ingresado.\n' +
        '\n' +
        'Una vez que tu pedido está listo y solo si se hubieran producido diferencias en el total cobrado debido a sustitutos o productos no enviados, verás una segunda transacción en tu tarjeta, esta vez por las devoluciones o cobros de dichos montos. Si no hubiera diferencias entre tu pedido original y el pedido recolectado, solo verás la primera transacción en los movimientos de tu tarjeta de crédito.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{ "id": 7, "reference": "/ayuda/contactanos?data=ab103c9367fe18cf82b5bd7e566bf904f6b3c159d8a69bf926443fa18c2d60f8", "invitedReference": "/ayuda/contactanos?data=ab103c9367fe18cf82b5bd7e566bf904f6b3c159d8a69bf926443fa18c2d60f8" }\n' +
        '```\n' +
        '',
      order: 4,
      helpCategory: context.mediosPagoSpid,
      icon: '',
      description: '',
    });

    context.problemasCobroTarjetaDebitoSpid = em.create(HelpContent, {
      label: 'Tuve problemas con el cobro en mi tarjeta de débito',
      reference: '/problemas-con-el-cobro-en-mi-tarjeta-de-debito',
      content:
        '# Problemas con el cobro en mi tarjeta de débito\n' +
        '\n' +
        'Si compraste con tu tarjeta de débito, ante cualquier problema te transferimos la diferencia que pudiera existir entre el monto inicial del pedido ingresado y el monto final del pedido recolectado, a la cuenta que hayas ingresado en la App.\n' +
        '\n' +
        'Para agregar una cuenta bancaria, debes ir a la sección “Cuenta” y luego a “Mi cuenta bancaria”. Si surge un problema con los datos que registraste al realizar esta transferencia, te notificaremos por mail. Si ya corregiste tus datos y el problema persiste, por favor ingresa al formulario para que podamos ayudarte.\n' +
        '\n' +
        '',
      order: 5,
      helpCategory: context.mediosPagoSpid,
      icon: '',
      description: '',
    });

    context.noHeRecibidoDevolucionDineroSpid = em.create(HelpContent, {
      label: 'No me han devuelto mi dinero',
      reference: '/no-he-recibido-la-devolucion-de-mi-dinero',
      content:
        '# No he recibido la devolución de mi dinero\n' +
        '\n' +
        'Cuando realizas una compra, en la cuenta asociada a tu tarjeta verás una transacción correspondiente al monto del pedido ingresado. Luego, si existieran diferencias entre el monto del pedido original y el recolectado, puedes revisar las diferencias en la notificación que te enviamos por correo cuando tu compra está lista para ser enviada.\n' +
        '\n' +
        '**Si el pago fue realizado con tarjeta de débito, la devolución se realizará a la cuenta registrada en la App en “Mi cuenta bancaria” de la sección “Mi cuenta”**. Los datos allí registrados deben estar correctamente digitados, y el titular de la cuenta debe ser la misma persona registrada en Spid.\n' +
        '\n' +
        'Si tus datos no se encuentran completos, recibirás una notificación por email indicando que tienes que actualizarlos. Te pedimos que por favor lo hagas para que puedas recibir tu devolución sin retrasos.\n' +
        '\n' +
        'Si aún necesitas ayuda, por favor completa el [formulario](<URL_HELP_FORM>).',
      order: 6,
      helpCategory: context.mediosPagoSpid,
      icon: '',
      description: '',
    });

    context.inscribirCuentaBancariaDevolucionesSpid = em.create(HelpContent, {
      label: '¿Cómo inscribo una cuenta bancaria para devoluciones?',
      reference: '/inscribir-cuenta-bancaria-para-devoluciones',
      content:
        '# Inscribir  cuenta bancaria para devoluciones\n' +
        '\n' +
        'Podrás registrar tu cuenta bancaria al momento de inscribir tu tarjeta de débito, al hacer el pago de tu pedido o cuando estimes conveniente ingresando directamente la sección “Mi cuenta bancaria” en la App Spid.',
      order: 7,
      helpCategory: context.mediosPagoSpid,
      icon: '',
      description: '',
    });

    context.devolucionesTarjetaDebitoSpid = em.create(HelpContent, {
      label: 'Devoluciones a tarjeta de débito',
      reference: '/devoluciones-a-tarjeta-de-debito',
      content:
        '# Devoluciones a tarjeta de débito\n' +
        '\n' +
        'Cuando existan diferencias de dinero en el total de tu pedido ingresado v/s tu pedido facturado con tarjeta de débito, la diferencia a tu favor será devuelta en la cuenta bancaria (vista o corriente) registrada en la sección “Mi cuenta bancaria” de la App.\n' +
        '\n' +
        'Esta cuenta podrás registrarla al momento de inscribir tu tarjeta de débito o cuando estimes conveniente ingresando directamente a esta sección. **Las devoluciones a tu cuenta bancaria se harán en un máximo de 48 hrs. hábiles una vez facturado tu pedido**.\n' +
        '\n' +
        '### Importante:\n' +
        '\n' +
        'Por tu seguridad, solo se harán devoluciones a cuentas bancarias donde el titular sea el mismo que el titular de la cuenta de Spid.',
      order: 8,
      helpCategory: context.mediosPagoSpid,
      icon: '',
      description: '',
    });

    context.plazoDevolucionesTarjetaDebitoSpid = em.create(HelpContent, {
      label: 'Plazo de devolución a tarjetas de débito',
      reference: '/plazo-de-devolucion-a-tarjetas-de-debito',
      content:
        '# Plazo  de devolución a tarjetas de débito\n' +
        '\n' +
        'Las devoluciones a tu cuenta bancaria se harán en un máximo de 48 hrs. hábiles una vez facturado tu pedido, siempre y cuando hayas registrado tu cuenta bancaria en la App. Para registrarla, ingresa a tu cuenta en Spid en la sección “Mi cuenta bancaria” de “Mi cuenta”.',
      order: 9,
      helpCategory: context.mediosPagoSpid,
      icon: '',
      description: '',
    });
    //============ SERVICIO CLIENTE SPID ============//
    context.servicioAlClienteSpid = em.create(HelpContent, {
      label: 'Quiero contactarme por chat',
      reference: '/servicio-al-cliente',
      content:
        '# Servicio al cliente\n' +
        '\n' +
        'Para hacernos llegar tus consultas o solicitudes de contacto, puedes contactarnos al chat que está en la App Spid en la sección “Mi Cuenta” y pinchar en Servicio al cliente, o bien ingresar al [formulario](<URL_HELP_FORM>) que encuentras en este Centro de ayuda.',
      order: 1,
      helpCategory: context.servicioClienteSpid,
      icon: '',
      description: '',
    });

    context.terminosCondicionesSpid = em.create(HelpContent, {
      label: 'Términos y Condiciones',
      reference: '/terminos-y-condiciones',
      content:
        '# Términos y Condiciones\n' +
        '\n' +
        'Este documento contiene información legal que le recomendamos leer completamente en conjunto con la Política de Privacidad inserta al final de este mismo documento. Por medio de la aprobación de los presentes Términos y Condiciones, se entiende que el Usuario los ha leído y aceptado, en todas sus partes, y entiende que estos le son legalmente vinculantes y obligatorios.\n' +
        '\n' +
        'El acceso y uso de este sitio se rige por los Términos y Condiciones descritos a continuación, así como por la legislación que se aplique en la República de Chile. En consecuencia, todas las visitas y todos los contratos y transacciones que realice un cliente o usuario de SPID en esta aplicación, como asimismo sus efectos jurídicos, quedarán regidos por estas reglas y sometidas a esa legislación.\n' +
        '\n' +
        'A continuación se exponen dichas condiciones:\n' +
        '\n' +
        '### Definiciones:\n' +
        '\n' +
        'Usuario(s) o Cliente(s): significa toda persona natural que utilice o que se encuentra registrado como tal en el Sitio.\n' +
        '\n' +
        'Comprador(es): significa el personal, contratado por Cencosud o un tercero externo, que efectúa la compra de los productos.\n' +
        '\n' +
        '### 1.  Registro del usuario o cliente en SPID\n' +
        '\n' +
        'Para poder comprar en SPID el cliente, debe aceptar estos Términos y Condiciones y crearse un registro con una clave de acceso. Una vez que el usuario, haya realizado su registro, se entenderá que ha aceptados estos Términos y Condiciones. Cada vez que se realice una actualización de este documento, el usuario deberá expresar su aceptación nuevamente. El registro de cada usuario se hará completando y suscribiendo el formulario que contiene la aplicación y su posterior envío.\n' +
        '\n' +
        'El registro en SPID es gratuito.\n' +
        '\n' +
        'La Aplicación de SPID comparte la misma plataforma tecnológica que la aplicación de [Jumbo.cl](https://jumbo.cl/), por lo que las claves de acceso e información que el cliente ingrese para completar su compra, son de utilidad en ambos sitios. Esto quiere decir que, al contar con un registro previo en Jumbo.cl, este también le dará la posibilidad de acceder a la aplicación de SPID.\n' +
        '\n' +
        'Será requisito necesario para ser Consumidor registrado que usted cuente con un smartphone con sistema operativo iOS o Android.\n' +
        '\n' +
        '### 2.  Clave secreta\n' +
        '\n' +
        'Una vez registrado, el usuario tendrá un RUT o correo y clave definitiva para acceder a la aplicación de manera personalizada, confidencial y segura. El usuario podrá cambiar la clave de acceso mediante el procedimiento establecido en la aplicación. Además, asumirá totalmente la responsabilidad de mantener la confidencialidad de su clave secreta, la cual le permite efectuar compras, solicitar servicios y obtener información. Dicha clave es de uso personal y su entrega a terceros no involucra la responsabilidad de Cencosud S.A., Cencosud Retail S.A. o sus empresas relacionadas, en caso de mala utilización.\n' +
        '\n' +
        '### 3.  Derechos del usuario\n' +
        '\n' +
        'El usuario gozará de todos los derechos que le reconoce la legislación sobre protección al consumidor vigente en el territorio de Chile, además de los que se le otorgan en estos términos y condiciones. El usuario dispondrá en todo momento de los derechos de información, rectificación y cancelación de los datos personales conforme a la Ley Nº 19.628 sobre protección de datos de carácter personal. La sola visita a este sitio no impone al consumidor obligación alguna, a menos que haya aceptado en forma inequívoca las condiciones ofrecidas por la empresa, en la forma indicada en estos Términos y Condiciones.\n' +
        '\n' +
        '### 4.  Procedimiento para hacer uso de la aplicación de SPID\n' +
        '\n' +
        'En los contratos ofrecidos en este sitio, la empresa oferente informará, de manera inequívoca y fácilmente accesible, los pasos que deben seguirse para celebrarlos, e informará vía mail cuando fuera recibida la solicitud del contrato. Esta solicitud pasará por un proceso de validación de datos del cliente, recolección de productos del pedido en base al stock disponible en la sala asignada al cliente según su domicilio y, luego, se cerrará el contrato emitiéndose la boleta correspondiente, la cual será enviada al cliente junto con el despacho de su pedido.\n' +
        '\n' +
        'El solo hecho de seguir los pasos, que para tales efectos se indican en esta aplicación para efectuar una compra, equivale a aceptar que, efectivamente, la empresa oferente ha dado cumplimiento a las condiciones contenidas en este número. Indicará, además, su dirección de correo postal o electrónico y los medios técnicos a disposición del consumidor para identificar y corregir errores en el envío o en sus datos.\n' +
        '\n' +
        '### 5.  Medios de pago que se podrán utilizar\n' +
        '\n' +
        'Los productos y servicios ofrecidos en esta aplicación, salvo que se señale una forma diferente para casos particulares u ofertas de determinados bienes o servicios, pueden ser pagados con: Tarjetas de débito, o Tarjetas de crédito bancarias habilitadas, emitidas en Chile, con la sola exclusión de las tarjetas de crédito de prepago.\n' +
        '\n' +
        'El uso de las tarjetas singularizadas precedentemente se sujetará a lo establecido en estos Términos y Condiciones y en relación con su emisor y a lo pactado en los respectivos Contratos de Apertura y Reglamento de Uso.\n' +
        '\n' +
        'Otros medios de pago que eventualmente puedan ser aceptados en el futuro, de lo cual se informará oportunamente en este sitio.\n' +
        '\n' +
        '### Cargos en Tarjeta de crédito o débito\n' +
        '\n' +
        '### Registro de Medio de Pago\n' +
        '\n' +
        'Para registrar la tarjeta de débito o crédito en la aplicación de SPID, se deriva al cliente al sistema Webpay donde se efectúa un cobro de $50 (cincuenta pesos) para autenticar al usuario y validar su tarjeta contra el banco emisor del mismo. Este monto es devuelto en 24 horas y sirve solo a modo de validación. A su vez, el registro de los datos de tarjetas son almacenadas por Transbank en un ambiente seguro, por lo que SPID no posee acceso a ellas directamente.\n' +
        '\n' +
        'Asimismo, aquellos clientes que deseen utilizar su tarjeta de débito, se les solicitará completar sus datos bancarios para devolver futuras diferencias o saldos a favor del cliente, las que serán realizadas a través de transferencias bancarias o algún otro método similar. Estos datos bancarios solo pueden ser modificados por el mismo cliente en su cuenta SPID, sección ‘Mi cuenta bancaria’, y es responsabilidad del cliente mantenerla actualizada, pues a modo de resguardo y protección, ningún colaborador de SPID puede crear, editar o borrar dichos datos.\n' +
        '\n' +
        '### Cobro\n' +
        '\n' +
        'Cuando el cliente ingresa un pedido en SPID, en su tarjeta verá una primera transacción, correspondiente al cobro por el monto del pedido ingresado. Al finalizar la preparación del pedido, el cliente será contactado, vía telefónica o a través de un chat en la misma aplicación, por la persona encargada de prepararlo, para revisar la sustitución de los productos que no estuvieran disponibles y le consultará si requiere agregar productos a su orden de compra. Luego se comunicarán los precios asociados a los reemplazos y los productos adicionados, ya que los valores a cobrar corresponderán al precio exhibido en la sala de ventas, los cuales podrían tener una diferencia con el valor publicado en SPID. Una vez que el cliente haya aceptado el producto sustituto o adicionado y el precio informado, mediante la manifestación de su conformidad en este llamado o contacto vía chat, se procederá a la incorporación de los productos al pedido y se generará un nuevo cargo en su tarjeta, correspondiente esta vez al cobro de las diferencias si procediere.\n' +
        '\n' +
        'Ahora bien, en el caso de que la persona encargada de preparar el pedido no logre contacto telefónico o por chat para ofrecer sustitutos, estos productos quedaran faltantes en la compra por no contar con el consentimiento del cliente para efectos de la sustitución.\n' +
        '\n' +
        '### Devoluciones\n' +
        '\n' +
        'Si existiera diferencia entre lo cobrado y lo facturado a favor del cliente, en el caso de haber pagado con tarjeta de crédito, la devolución se verá reflejada en los movimientos por facturar en un plazo máximo de 72 horas hábiles.\n' +
        '\n' +
        'En el caso de haber utilizado un medio de pago débito, la diferencia a favor del cliente será devuelta en la cuenta bancaria (vista o corriente) registrada en la sección “Mi cuenta bancaria”. La cuenta podrá ser registrada por el cliente al momento de inscribir su tarjeta de débito o cuando estime conveniente ingresando directamente a la sección señalada. La cuenta debe estar asociada al mismo titular de la cuenta SPID. La devolución se realizará a través de una transferencia bancaria en un plazo máximo de 5 días hábiles.\n' +
        '\n' +
        'Si no existieran diferencias entre el pedido original y el recolectado, solo verá la primera transacción en los movimientos de su tarjeta de crédito y débito.\n' +
        '\n' +
        '### 6.  Formación del consentimiento en los contratos celebrados\n' +
        '\n' +
        'A través de esta aplicación, las empresas realizarán ofertas de bienes y servicios, las que podrán ser aceptadas a través de la aceptación, por vía electrónica o telefónica, y utilizando los mecanismos que la misma aplicación ofrece para ello. Toda aceptación de oferta quedará sujeta a la condición suspensiva de que la empresa oferente valide la transacción. En consecuencia, para toda operación que se efectúe en esta aplicación, la confirmación y/o validación o verificación por parte de la empresa oferente será requisito para la formación del consentimiento. Para validar la transacción, la empresa oferente verificará:\n' +
        '\n' +
        'a) Que dispone, en el momento de la aceptación de oferta, de las especies en stock o de sustitutos.\n' +
        '\n' +
        'b) Que valida y acepta el medio de pago ofrecido por el usuario.\n' +
        '\n' +
        'c) Que los datos registrados por el cliente en la aplicación coinciden con los proporcionados al efectuar su aceptación de oferta. Será de exclusiva responsabilidad del cliente que los datos proporcionados al solicitar su pedido, como nombre, dirección, comuna, ciudad, teléfonos de contacto y mail, estén correctos. En caso contrario, de no ser posible la autentificación de todos los datos indicados, a través de los medios que el proveedor considere pertinentes y siempre antes de que se inicie la jornada de despacho del pedido requerida por el cliente, la solicitud de pedido se dejará nula.\n' +
        '\n' +
        'd) En el caso de venta de bebidas alcohólicas y tabaquería, esta solo se realizará a usuarios mayores de 18 años.\n' +
        '\n' +
        'e) Los despachos que incluyan bebidas alcohólicas están sujetos a las restricciones horarias de venta y entrega contenidas en la legislación vigente\n' +
        '\n' +
        'f) La entrega de la compra solo se realizará a mayores de 18 años.\n' +
        '\n' +
        'h) Según lo estipulado en el artículo 53 de la Ley sobre Impuesto a las Ventas y Servicios los contribuyentes del Impuesto al Valor Agregado (IVA) no es posible cambiar boleta por factura después de emitido el documento.\n' +
        '\n' +
        'Para informar al usuario acerca de esta validación, una vez generada la boleta respectiva, la empresa oferente enviará una confirmación escrita al mail que haya registrado el usuario aceptante de la oferta, o por cualquier medio de comunicación que garantice el debido y oportuno conocimiento del consumidor, el que se le indicará previamente en el mismo sitio. El consentimiento se entenderá firmado desde el momento en que se envía esta confirmación escrita al usuario y en el lugar en que fue expedida.\n' +
        '\n' +
        '### 7.  Compra mínima\n' +
        '\n' +
        'La plataforma considera una compra mínima de $3.000.\n' +
        '\n' +
        '### 8.  El stock y el límite de compra\n' +
        '\n' +
        'Todos los productos están sujetos a disponibilidad de stock al momento de hacer la recolección del pedido.\n' +
        '\n' +
        'La venta de los productos en SPID es exclusivamente para consumo familiar. Por RUT, este límite corresponde a un máximo de 8 unidades de cada producto para todas las categorías mencionadas en nuestra aplicación, excepto:\n' +
        '\n' +
        '|Categoría  |   Límite de Compra |\n' +
        '|:--|:--|\n' +
        '|Vinos, Cervezas y Licores |12 Unidades, o 2 Cajas de 6 Unidades o 1 Caja de 12 Unidades|\n' +
        '|Lácteos |12 Unidades, o 2 Cajas de 6 Unidades o 1 Caja de 12 Unidades|\n' +
        '|Chocolates y Mazapán|6 Unidades|\n' +
        '|Electro Hogar|2 Unidades|\n' +
        '|Tecnología|2 Unidades|\n' +
        '|Juguetería y Deportes|3 Unidades| \n' +
        '|Hogar|6 Unidades|\n' +
        '\n' +
        '### 9.  Despacho y entrega de los productos\n' +
        '\n' +
        'Los productos adquiridos a través de este sitio se sujetan a despacho a domicilio disponible en la aplicación. La información del lugar de envío, el registro de la misma y la corroboración en el proceso de validación de la compra son de exclusiva responsabilidad del usuario.\n' +
        '\n' +
        'El despacho a domicilio corresponde a la entrega del pedido en el domicilio ingresado por el cliente, y aceptado de acuerdo con nuestras zonas de despacho disponibles.\n' +
        '\n' +
        'Si el cliente no se encuentra en su domicilio al momento de la llegada del pedido, trataremos de contactarle para avisar y esperar un máximo de 10 minutos. En caso que quede menos de 10 minutos para completar la entrega en el plazo de compromiso, esperaremos el tiempo restante hasta cumplir el límite.\n' +
        '\n' +
        'No se realizarán devoluciones de pagos por productos perecibles si la causa de la no entrega es que el cliente no se encontraba en su domicilio durante el tiempo de compromiso de envío. En consecuencia, el pedido será anulado, total o parcialmente, según corresponda.\n' +
        '\n' +
        'El cliente podrá elegir su despacho desde una entrega en 35 minutos dependiendo de la cantidad de productos que lleve en su compra, como se muestra en el cuadro a continuación:\n' +
        '\n' +
        '| SKUs/Uni        | Promesa           |\n' +
        '|:--|:--|\n' +
        '| 1 – 12          | 35 min            |\n' +
        '| 13 – 24         | 70 min            |\n' +
        '| 24 o más        | 105 min           |\n' +
        '\n' +
        '### 9.1. El costo del servicio.\n' +
        '\n' +
        'El servicio será gratis por compras superiores a $25.000; cualquier monto inferior tendrá un cargo en el servicio de $3.990\n' +
        '\n' +
        '### 9.2. Cobertura del servicio\n' +
        '\n' +
        'SPID se reserva el derecho de tener operativo el Servicio en las zonas de su cobertura que estime conveniente las que serán debidamente informadas a los consumidores.\n' +
        '\n' +
        'Sin perjuicio de lo anterior SPID considera la siguiente cobertura. Presiona [aquí](https://www.google.com/maps/d/viewer?mid=1RiMQjPIZ6HraOGUOdIogg7mrxU6MHHAe&usp=sharing) para visualizar.\n' +
        '\n' +
        '### 10. Adicionar productos\n' +
        '\n' +
        'El usuario podrá adicionar productos a su compra cuando el shopper se contacte con el cliente en la preparación de su pedido. En este llamado o conversación por chat, el shopper informará los precios de los productos solicitados, ya que los valores a cobrar corresponderán al precio exhibido en la sala de ventas, los cuales podrían tener una diferencia con el valor publicado en SPID. El cambio en el pedido original generará modificación en los plazos de entrega, lo que será informado al Cliente.\n' +
        '\n' +
        '### 11. Derecho de retracto\n' +
        '\n' +
        'El usuario no podrá retractarse de los contratos celebrados en la aplicación, a menos que en una determinada oferta se contemple expresamente esta posibilidad, conforme a lo expuesto en el artículo 3 Bis, letra B de la Ley sobre Protección de Derechos del Consumidor.\n' +
        '\n' +
        '### 12. Procedimiento de cambios y devoluciones\n' +
        '\n' +
        'Sin perjuicio de lo indicado en el número anterior, los usuarios o clientes podrán solicitar devoluciones, dentro del territorio de Chile continental, conforme a lo establecido en la Ley 19.496 sobre Protección de Derechos de los Consumidores. Si el cliente requiere devolver un producto, solicitando la restitución del monto pagado, esta siempre se realizará al medio de pago utilizado por el cliente en un plazo de 10 días hábiles contactándose a través de nuestro WhatsApp (+56 9 6848 2124) disponible para la atención de clientes.\n' +
        '\n' +
        '### 13. Uso de los datos personales registrados\n' +
        '\n' +
        'Los datos proporcionados en este sitio tanto en el registro como en el proceso de compra podrán ser utilizados para validar información de la compra, Informar el estado de la compra, informar el estado de un eventual reclamo asociado a una compra y para realizar cambios de productos asociados a una compra. Este contacto podrá ser telefónico, mensaje de texto, correo electrónico o WhatsApp. Estos datos solo podrán ser entregados a las empresas filiales o relacionadas con Cencosud S.A., en ningún caso serán traspasados a terceros. Dicha entrega será revocable por el usuario.\n' +
        '\n' +
        '### 14. Validez y mecánica de las ofertas y promociones\n' +
        '\n' +
        'Los precios de los productos y servicios disponibles en este sitio, mientras aparezcan en él, solo tendrán vigencia y aplicación en este y no serán aplicables a otros canales de venta utilizados por SPID, tales como tiendas físicas, catálogos u otros sitios web habilitados por SPID, para venta online, en localidades específicas. La empresa podrá modificar cualquier información contenida en este sitio, incluyendo las relacionadas con mercaderías, servicios, precios, existencias y condiciones, en cualquier momento y sin previo aviso, respetando las compras que han sido aceptadas hasta dicho momento, siempre sujeto a las condiciones de validación que se indican en el punto 6 de estos Términos y Condiciones.\n' +
        '\n' +
        'Las ofertas y promociones no son acumulables con otras ofertas vigentes. Solo se aplicará la mejor oferta vigente.\n' +
        '\n' +
        '### 15. Suscripción a ofertas y promociones\n' +
        '\n' +
        'La aplicación de SPID en sus distintas visitas, ya sea en una visita de un usuario no registrado o de uno que lo está, ofrece la posibilidad a los clientes de recibir información de ofertas y promociones vinculadas a los productos comercializados por SPID. Al suscribirse por medio del botón de aceptación expreso, requiriendo el correo electrónico y el RUT del solicitante, esta información será utilizada con el solo fin de enviar las ofertas y promociones descritas y en ningún caso se utilizarán para fines diferentes o no informados. Para dejar de recibir esta información, el cliente solo debe dejar sin efecto la aceptación.\n' +
        '\n' +
        '### 16. Otros sitios o aplicaciones\n' +
        '\n' +
        'Los servicios de SPID están disponibles solo para aquellos individuos que tengan capacidad legal para contratar, según lo dispuesto por la legislación vigente. Si una persona no tiene capacidad legal para contratar, debe abstenerse de utilizar los servicios ofrecidos en SPID y el oferente podrá, en cualquier momento, en forma temporal o definitiva, suspender la participación de usuarios que se compruebe carecen de capacidad legal para usar de los servicios ofrecidos en el sitio o cuando al registrarse brinden información que sea falsa, inexacta o fraudulenta.\n' +
        '\n' +
        '### 17. Representantes\n' +
        '\n' +
        'Toda presentación o reclamo relacionado con actos o contratos ejecutados o celebrados a través de esta aplicación, debe ser presentada al Servicio al Cliente de SPID a través de su WhatsApp habilitado.\n' +
        '\n' +
        'Dirección: Av. Kennedy 9001, piso 4, Las Condes\n' +
        '\n' +
        'Nombre Representante Legal: Ricardo González Novoa\n' +
        '\n' +
        '### 18. Delimitación de responsabilidad\n' +
        '\n' +
        'SPID no se responsabiliza frente a los usuarios o terceros por los daños y perjuicios que sean consecuencia directa o indirecta de la interrupción, suspensión o finalización de los servicios ofrecidos por el sitio, cuando estos obedezcan a casos fortuitos o de fuerza mayor.\n' +
        '\n' +
        '### 19. Jurisdicción\n' +
        '\n' +
        'Las controversias que surjan en relación con lo establecido en estos Términos y Condiciones podrán interponerse, a elección del consumidor, ante el juzgado de policía local correspondiente a su domicilio o al domicilio del proveedor. Lo anterior no obsta a la competencia de los tribunales ordinarios de justicia para, entre otros casos, acciones de interés colectivo o difuso.\n' +
        '\n' +
        '### Política de Privacidad\n' +
        '\n' +
        '### 1.  Seguridad y privacidad en la compra\n' +
        '\n' +
        'Todas las transacciones realizadas en SPID viajan a través de Internet en forma encriptada vía SSL (Secure Socket Layer) que asegura la confidencialidad del mensaje y evita que sean interceptadas para usos fraudulentos. Este es el estándar mundial usado por las principales compañías internacionales para realizar transacciones electrónicas seguras.\n' +
        '\n' +
        'Así te aseguramos que toda tu información personal, como nombre, e-mail, dirección, y número de tarjeta de crédito, no podrá ser leída ni capturada por terceros mientras viaja por la red.\n' +
        '\n' +
        'Queremos recalcar que SPID no traspasará, bajo ninguna modalidad y a ninguna empresa que no pertenezca al grupo de empresas Cencosud, datos personales de los clientes registrados en su sitio web y te asegura que estos serán manejados en forma absolutamente confidencial y conforme lo dispone la legislación vigente.\n' +
        '\n' +
        '### 2.  Compromiso con la Seguridad\n' +
        '\n' +
        'SPID 35 declara que su aplicación es segura, de manera de entregar a los clientes un servicio de alto nivel, con los controles internos apropiados que les garanticen a nuestros clientes un correcto uso de la información.\n' +
        '\n' +
        '### 3.  Información entregada por los usuarios. Confidencialidad\n' +
        '\n' +
        'La información solicitada en nuestro formulario de registro pide a los usuarios información como nombre, dirección electrónica, dirección física y número telefónico. Esta información es usada para el despacho de los pedidos y para responder las consultas acerca de nuestros productos y servicios.\n' +
        '\n' +
        'Toda la información que entregues será almacenada con la mayor confidencialidad. Solo es compartida con empresas relacionadas con:\n' +
        '\n' +
        'a) El Grupo Cencosud;\n' +
        '\n' +
        'b) Transbank, al momento de pagar, garantizando que el uso de los datos estará restringido a la ejecución correcta de la transacción, y no serán utilizados con ningún otro fin adicional a este.\n' +
        '\n' +
        '### 4.  Captura de información de usuarios\n' +
        '\n' +
        'Spid no captura información referente a actividades específicas de un usuario particular. Sin embargo, se generan reportes que nos permiten ver la actividad consolidada anónima.\n' +
        '\n' +
        'Usamos Analytics para asegurarnos que no vea repetidamente el mismo mensaje publicitario. También usamos Analytics para mostrarle en la App información específica referida a sus intereses.\n' +
        '\n' +
        '### 5.  Links con otros sitios\n' +
        '\n' +
        'Nuestra aplicación puede contener “links” a otros sitios. Las prácticas de seguridad y/o privacidad de estos, quedan comprendidas en el marco de responsabilidad de sus operadores, y no de Spid.\n' +
        '\n' +
        '### 6.  Protección de Datos\n' +
        '\n' +
        'El usuario dispondrá siempre de los derechos de información, rectificación y cancelación de los datos personales conforme a la Ley Nº 19.268 sobre protección de datos de carácter personal. Asimismo, si deseas modificar tu información personal, lo puedes hacer directamente en nuestra plataforma.\n' +
        '\n' +
        '### 7.  Prevención en la entrega de información por teléfono\n' +
        '\n' +
        'Spid NO solicita datos personales a sus clientes por teléfono ni WhatsApp porque ya los conocemos.\n' +
        '\n' +
        'Solo en el caso de comprar por primera vez en nuestra aplicación se validarán los datos entregados en el formulario de registro.',
      order: 2,
      helpCategory: context.servicioClienteSpid,
      icon: '',
      description: '',
    });
  }
}
