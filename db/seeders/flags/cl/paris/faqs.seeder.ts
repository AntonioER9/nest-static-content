import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Faq } from 'modules/content/faqs/entities/faq.entity';

export class FaqsParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Faq, {
      question: '¿En cuántos días veré reflejada la devolución del dinero?',
      answer:
        'En caso de anulación de la compra, una vez que el producto haya sido físicamente devuelto a Paris, se emitirá una nota de crédito para reembolsar tu dinero. Ten presente que el medio de pago que utilizaste es el que determina el plazo en que recibirás el reembolso de tu dinero. Si realizaste tu compra con **Tarjeta Cencosud, Tarjetas Scotiabank Cencosud, Tarjetas de Crédito o Giftcard** el dinero será reembolsado (reversa o abono) en 72 horas hábiles aproximadamente y puede variar dependiendo de la entidad bancaria. Dicho reembolso se verá reflejado en tu estado de cuenta siguiente o subsiguiente dependiendo de la fecha de facturación mensual de tu tarjeta.\n\nSi ocupaste Tarjeta de Débito, te contactaremos para solicitar los datos Bancarios y una vez que ya contemos con ellos, realizaremos una transferencia electrónica en un plazo de 15 días hábiles.',
      link: 'https://ayuda.paris.cl/ayuda/promesa-paris/medios-de-pago/preguntas-frecuentes/devolucion-del-dinero',
      helpContent: context.cambiosDevolucionesParis,
      order: 4,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cuáles son los datos de la identificación de la transferencia recibida?',
      answer: '- Pago Safetypay 0764117298\n- Pago Recibido PRV 076411729-8 Banco Estado\n- Pago Proveedores Safetypay',
      link: 'https://ayuda.paris.cl/ayuda/promesa-paris/medios-de-pago/preguntas-frecuentes/transferencia',
      helpContent: context.cambiosDevolucionesParis,
      order: 5,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cuánto tiempo puede demorar el despacho?',
      answer:
        'El tiempo de entrega puede variar según la comuna y región en que te encuentres; la disponibilidad del proveedor o la tienda encargada de tu producto.\n\nPara revisar el estado de tu producto, hazle seguimiento en [Mis compras,](<https://www.paris.cl/mi-cuenta/mis-compras>) ingresando al detalle del artículo.',
      link: '#',
      helpContent: context.horariosParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Qué debe hacer el transportista en la entrega?',
      answer:
        'La persona que lleve el producto a tu domicilio deberá guiarse por las siguientes condiciones:\n- Si vives en edificio y el artículo no se puede subir por ascensor, solo se le autoriza llegar hasta el quinto piso. \n- Cualquier armado o instalación **está prohibido**, ya que compromete la garantía. \n- Tampoco puede desarmar puertas o ventanas. \n- Hará tres intentos de entrega. Si es que no hay nadie en la dirección, te informaremos por correo sobre los pasos a seguir.\n- No puede recibir o pedir propinas.\n- Si el producto es muy grande y no se puede entregar, puedes devolverlo al transportista e iniciaremos el proceso de devolución.\n- Para respaldar el estado del artículo que se entregó, debe tomar fotos del producto, pero no de tu rostro o el de otra persona.',
      link: '#',
      helpContent: context.horariosParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Qué debo tener en cuenta al recibir un producto?',
      answer:
        'Cuando el transportista llegue a tu domicilio a entregar tu compra, considera los puntos que te mostramos a continuación:\n- Revisa que tu producto se encuentre en buen estado. Si presenta algún daño, le faltan partes, piezas o sellos adulterados, **no lo recibas**. Luego comunícate a través de nuestros canales de contacto para indicarnos si quieres el producto o reembolso. \n- Una persona **mayor de edad** tiene que recibir el producto. \n- Al momento de hacer la entrega te enviaremos la evidencia de entrega y nombre de la persona que recibió.\nSi tienes alguna duda o consulta, ingresa al [Formulario de contacto](/ayuda/contactanos) o comunícate con nosotros a través del [Whatsapp +56964963826](https://api.whatsapp.com/send/?phone=56964963826&text&app_absent=0).',
      link: '#',
      helpContent: context.horariosParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cómo puedo reagendar la fecha de despacho?',
      answer:
        'Si deseas cambiar la fecha de despacho de tu compra, te sugerimos generar una solicitud de “Cancelación de mi producto” en nuestro [Formulario de contacto](<URL_HELP_FORM>), antes de que el producto esté “En camino”. Esto facilitará el proceso para iniciar una nueva compra con una fecha distinta.',
      link: '#',
      helpContent: context.horariosParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cómo identifico los productos disponibles para retiro en tienda?',
      answer:
        'Al revisar la página de los productos, ubica el apartado **“Tipo de entrega disponible”** y revisa que aparezca “Retiro en tienda”. \n\nRecuerda que solo puedes seleccionar un tipo de entrega por compra.',
      link: 'https://ayuda.paris.cl/ayuda/retiro-en-tienda/compra-con-retiro/preguntas-frecuentes/identificar-producto',
      helpContent: context.compraRetiroTiendaParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Puedo seleccionar productos con distintos tipos de entrega en una misma compra?',
      answer:
        'No, ya que si quieres comprar productos con distintos tipos de entrega o con retiro en tiendas distintas, debes realizar la compra por separado.',
      link: 'https://ayuda.paris.cl/ayuda/retiro-en-tienda/compra-con-retiro/preguntas-frecuentes/distintos-tipos-entrega',
      helpContent: context.compraRetiroTiendaParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cómo puedo saber si mi producto es Marketplace?',
      answer:
        'Puedes identificar un producto Marketplace ya que en la página de los productos, al costado derecho, sobre la opción “Agregar a mi carro”, aparece **“Vendido por:”**, seguido del nombre del vendedor validado por Paris.',
      link: 'https://ayuda.paris.cl/ayuda/marketplace/preguntas-frecuentes/producto-es-marketplace',
      helpContent: context.marketplaceParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Qué pasa si mi producto Marketplace no cumple con las condiciones para la devolución?',
      answer:
        'El producto pasa por una revisión en donde se validan todas las condiciones requeridas por Paris Marketplace. De no ser aceptado, será devuelto al cliente.',
      link: 'https://ayuda.paris.cl/ayuda/marketplace/preguntas-frecuentes/producto-no-cumple',
      helpContent: context.marketplaceParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Se devuelve el costo de despacho en caso de una devolución de producto Marketplace?',
      answer:
        'El costo de despacho solo es devuelto cuando el motivo de la devolución es por un producto equivocado al enviarlo, está fallado, dañado y/o incompleto.',
      link: 'https://ayuda.paris.cl/ayuda/marketplace/preguntas-frecuentes/caso-devolucion',
      helpContent: context.marketplaceParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cuánto tiempo tarda el reembolso de mi dinero?',
      answer:
        'Si hiciste la compra con **tarjeta de crédito**, reembolsaremos tu dinero en un plazo máximo de **15 días hábiles**. Tu entidad emisora deberá reflejar el reembolso en el estado de cuenta en el período siguiente o subsiguiente, dependiendo de la fecha de facturación mensual.\n\nSi ocupaste una **tarjeta de débito** para pagar la compra, el reembolso se realizará mediante una transferencia electrónica a la cuenta corriente que indiques, en un plazo máximo de **15 días hábiles** contados desde que nos hayas proporcionado los datos de la cuenta.',
      link: 'https://ayuda.paris.cl/ayuda/marketplace/preguntas-frecuentes/tiempo-devolucion',
      helpContent: context.marketplaceParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Puede ir otra persona a la tienda para devolver mi producto Marketplace?',
      answer:
        'Por supuesto. En tienda asistiremos a cualquier persona que necesite hacer la devolución de un  producto Marketplace. Recuerda llevar el **N° de orden de compra** para agilizar la gestión.',
      link: 'https://ayuda.paris.cl/ayuda/marketplace/preguntas-frecuentes/otra-persona',
      helpContent: context.marketplaceParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cómo puedo devolver una orden completa que tiene productos Paris y Marketplace?',
      answer:
        'Si la Orden de compra solo contiene **productos de paquetería o fácil traslado**, debes dirigirte a cualquiera de nuestras [Tiendas Paris o puntos Cencosud habilitados](https://www.paris.cl/tiendas-paris.html)\n\nPara aquellos de **gran tamaño o difícil traslado**, para los **productos Marketplace**, debes seguir los pasos de autogestión mencionados en esta página, mientras que para los **productos Paris**, revisa las instrucciones de [Cambios y devoluciones](https://ayuda.paris.cl/ayuda/servicios-postventa/cambios-devoluciones). ',
      link: 'https://ayuda.paris.cl/ayuda/marketplace/preguntas-frecuentes/devolver-orden',
      helpContent: context.marketplaceParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿En cuántos días veré reflejada la devolución del dinero?',
      answer:
        'En caso de anulación de la compra, una vez que el producto haya sido físicamente devuelto a Paris, se emitirá una nota de crédito para reembolsar tu dinero. Ten presente que el medio de pago que utilizaste es el que determina el plazo en que recibirás el reembolso de tu dinero. Si realizaste tu compra con **Tarjeta Cencosud, Tarjetas Scotiabank Cencosud,Tarjetas de Crédito o Giftcard** el dinero será reembolsado (reversa o abono) en 10 días hábiles aproximadamente y puede variar dependiendo de la entidad bancaria. Dicho reembolso se verá reflejado en tu estado de cuenta siguiente o subsiguiente dependiendo de la fecha de facturación mensual de tu tarjeta.\n\nSi ocupaste una **Tarjeta de Débito** realizaremos una transferencia electrónica a la cuenta corriente que tú nos indiques, dentro de máximo 15 días hábiles desde que se emite la Nota de Crédito y que tenemos tus datos bancarios.',
      link: 'https://ayuda.paris.cl/ayuda/promesa-paris/medios-de-pago/preguntas-frecuentes/devolucion-del-dinero',
      helpContent: context.mediosPagoParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cuáles son los datos de la identificación de la transferencia recibida?',
      answer: '- Pago Safetypay 0764117298\n- Pago Recibido PRV 076411729-8 Banco Estado\n- Pago Proveedores Safetypay',
      link: 'https://ayuda.paris.cl/ayuda/promesa-paris/medios-de-pago/preguntas-frecuentes/transferencia',
      helpContent: context.mediosPagoParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Puedo cambiar datos en una boleta?',
      answer:
        'Sí, puedes cambiar los datos de tu boleta. Si necesitas modificar alguna información te recomendamos visitar una de las [Tiendas Paris más cercanas](https://www.paris.cl/tiendas-paris.html) a tu domicilio.',
      link: 'https://ayuda.paris.cl/ayuda/servicios-postventa/descarga-boleta-documentos',
      helpContent: context.descargaBoletaParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cómo recuperar una boleta perdida en Paris?',
      answer:
        'Recuerda que las boletas de tus compras estarán siempre disponibles al ingresar con tu usuario en Paris.cl. Inicia sesión y dirígete a Mis compras y en el detalle de cada producto podrás descargar la boleta correspondiente.',
      link: 'https://ayuda.paris.cl/ayuda/servicios-postventa/descarga-boleta-documentos',
      helpContent: context.descargaBoletaParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Puedo cambiar un producto si no tengo la boleta?',
      answer:
        'Sí, ya que para cambiar un producto necesitas algún documento que acredite la compra, por lo que **puedes solicitarlo si tienes el ticket de cambio**.',
      link: 'https://ayuda.paris.cl/ayuda/servicios-postventa/descarga-boleta-documentos',
      helpContent: context.descargaBoletaParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cuál es el número de folio en una boleta?',
      answer:
        'El número de folio de tu boleta se encuentra ubicado arriba y a la derecha del documento. Debes tener en cuenta, que el número de folio es diferente al número de orden de tu compra y ambos pueden estar presentes en el mismo documento.',
      link: 'https://ayuda.paris.cl/ayuda/servicios-postventa/descarga-boleta-documentos',
      helpContent: context.descargaBoletaParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cuánto cuesta el servicio de armado?',
      answer:
        'El valor dependerá del **nivel de dificultad** que implique el armado de tu producto:\n- Complejidad menor: $16.990\n- Complejidad mayor: $24.990\n- Complejidad pack:  $29.990',
      link: '#',
      helpContent: context.servicioArmadoParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cómo puedo agendar el servicio de armado?',
      answer:
        'En nuestras **Tiendas Paris**, puedes contratar el servicio **en cualquier caja o puntos de venta online** disponibles (también llamados “kioscos”).\n\nEn [Paris.cl](https://www.paris.cl/) **o app**, debes **añadir tu producto al carro de compras** y seleccionar la opción de contratar el servicio.',
      link: '#',
      helpContent: context.servicioArmadoParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cuántos días tengo para cambiar o retractarme y devolver un producto?',
      answer:
        'Tienes **30 días** a partir de la fecha de compra en Tiendas Paris. Si compraste en [Paris.cl](https://www.paris.cl/) **o app**, el plazo es de 30 días a contar desde la fecha en que recibiste o retiraste el producto.',
      link: '#',
      helpContent: context.cambiosDevolucionesParis,
      order: 0,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cuáles son los requisitos importantes para cambios o retractos y devoluciones?',
      answer:
        'El producto debe estar en **perfecto estado**, sin uso, con la etiqueta adherida al embalaje original, sellado y con sus accesorios. Además, deberás presentar un **documento que acredite la compra**.',
      link: '#',
      helpContent: context.cambiosDevolucionesParis,
      order: 3,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cuánto tiempo tarda el reembolso?',
      answer:
        'La devolución de tu dinero se verá reflejada en máximo **15 días hábiles** para tarjetas débito o crédito. Sin embargo, esta gestión dependerá de cada entidad bancaria y de que los datos que ingresaste sean correctos.',
      link: '#',
      helpContent: context.cambiosDevolucionesParis,
      order: 2,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Qué debo tener en cuenta al solicitar una devolución con retiro a domicilio?',
      answer:
        'Si vas a solicitar el servicio, asegúrate de conocer lo siguiente:\n- Si te retractaste de una compra y necesitas devolver un producto, entrégalo en su embalaje original. Si ya no lo tienes y quieres usar la garantía mínima legal, guárdalo en otro empaque y asegúrate de cerrarlo bien.\n- Nunca entregues tu producto si no solicitaste una devolución. Nosotros jamás te llamaremos para coordinar un retiro si tú no lo pediste. \n- Para facilitar la devolución, entrégale al transportista tu producto desarmado en el embalaje que llegó.\n- El transportista no puede abrir un producto sellado para revisarlo.\n- Quien recoja tu compra no tiene autorización para recibir propinas.\n- El transportista debe tomar una foto al producto y entregarte un documento que tienes que firmar para dejar constancia del retiro.',
      link: '#',
      helpContent: context.cambiosDevolucionesParis,
      order: 1,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Qué debo tener en cuenta al solicitar una devolución con retiro a domicilio?',
      answer:
        'Si vas a solicitar el servicio, asegúrate de conocer lo siguiente:\n- Si te retractaste de una compra y necesitas devolver un producto, entrégalo en su embalaje original. Si ya no lo tienes y quieres usar la garantía mínima legal, guárdalo en otro empaque y asegúrate de cerrarlo bien.\n- Nunca entregues tu producto si no solicitaste una devolución. Nosotros jamás te llamaremos para coordinar un retiro si tú no lo pediste. \n- Para facilitar la devolución, entrégale al transportista tu producto desarmado en el embalaje que llegó.\n- El transportista no puede abrir un producto sellado para revisarlo.\n- Quien recoja tu compra no tiene autorización para recibir propinas.\n- El transportista debe tomar una foto al producto y entregarte un documento que tienes que firmar para dejar constancia del retiro.',
      link: '#',
      helpContent: context.marketplaceParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Hasta cuándo puedo acceder al servicio técnico?',
      answer:
        'Siempre que tu producto **se encuentre dentro del plazo de la Garantía mínima legal o Convencional**, puedes solicitar el servicio técnico en caso de fallas. \n\nCuando no estás dentro de ese plazo, puedes llevarlo directamente al servicio técnico, pero con un costo adicional. \n\nParis no se hace responsable de los envíos de estos productos.',
      link: '#',
      helpContent: context.servicioTecnicoParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cuánto plazo tengo para cancelar una compra?',
      answer:
        'Puedes solicitar una cancelación desde [Mis compras](https://www.paris.cl/mi-cuenta/mis-compras), a través de [Paris.cl](https://www.paris.cl/) o app siempre y cuando el producto no se encuentre en el estado **“En camino”**.',
      link: '#',
      helpContent: context.cancelacionCompraParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿En cuánto tiempo se reembolsará mi dinero?',
      answer:
        'Si compraste con **crédito**, la reversa se reflejará en tu estado de cuenta del período siguiente o subsiguiente.\n\nSi pagaste con **débito**, el reembolso se hará a la tarjeta que indicaste en [Mi cuenta](https://www.paris.cl/mi-cuenta/informacion-personal) en máximo 15 días hábiles contados desde que ingresaste los datos.',
      link: '#',
      helpContent: context.reembolsoDineroParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cómo puedo recuperar una boleta, factura o ticket de cambio?',
      answer:
        'Ingresa con tu cuenta a [Mis compras](https://www.paris.cl/mi-cuenta/mis-compras), haz clic en el botón “Revisar detalle” del producto, y en la sección “Servicios en línea” **selecciona el documento que quieres descargar**.',
      link: '#',
      helpContent: context.descargaBoletaParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿De qué depende el costo de despacho?',
      answer:
        'El valor definitivo del envío de un producto dependerá de su tamaño, lugar de destino, cantidad de unidades por carro de compra, origen y el tipo de despacho que selecciones.',
      link: '#',
      helpContent: context.costoDespachoParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Qué hago si hay problemas con el despacho de mi compra?',
      answer:
        'Debes ingresar una solicitud en el [Formulario de contacto](/ayuda/contactanos) y nosotros gestionaremos tu caso.',
      link: '#',
      helpContent: context.problemasDespachoParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Qué es la Garantía mínima legal?',
      answer:
        'La Garantía mínima legal está protegida por la Ley del Consumidor 19.496. Con ella, **tienes 6 meses de cobertura** en caso de que el producto presente fallas, desperfectos de fabricación, le falten piezas o partes, o se encuentre en alguna de las otras situaciones detalladas en esta misma norma.',
      link: '#',
      helpContent: context.garantiaMinimaLegalParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Qué debo considerar para usar la Garantía mínima legal?',
      answer:
        'Si tu producto es de **paquetería o fácil traslado**, llévalo a la [tienda Paris](https://www.paris.cl/tiendas-paris.html) más cercana. Si es de **gran tamaño o difícil traslado** (con un peso mayor a 30 kilos o que alguno de sus lados sobrepase los 60 centímetros), agenda una visita del [Servicio técnico](/ayuda/servicios-postventa/servicio-tecnico). Ten en cuenta que tu compra no debe presentar deterioros atribuibles al consumidor.',
      link: '#',
      helpContent: context.garantiaMinimaLegalParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cómo puedo comprar una Garantía extendida?',
      answer:
        'En la página de los productos, ubica la sección **“Protege tu producto con”**, selecciona el tipo de garantía que quieras y agrégala al carro junto con el producto.',
      link: '#',
      helpContent: context.garantiaExtendidaParis,
      flag: context.paris,
    });

    em.create(Faq, {
      question: '¿Cómo hago efectiva mi Garantía extendida?',
      answer:
        'Puedes hacer efectiva tu Garantía extendida llamando al **600 422 1000**. Atenderemos tu caso y nos comunicaremos contigo.',
      link: '#',
      helpContent: context.garantiaExtendidaParis,
      flag: context.paris,
    });
  }
}
