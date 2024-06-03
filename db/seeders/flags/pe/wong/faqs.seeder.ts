import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Faq } from 'modules/content/faqs/entities/faq.entity';

export class FaqsWongSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Faq, {
      question: '¿Cómo me registro?',
      answer:
        'Para registrarse, el usuario deberá brindar un correo electrónico vigente, recibir un código de confirmación (clave token) en su bandeja de correo o generar una clave desde la plataforma. También podrá ingresar por medio de su cuenta de Facebook o Google.',
      link: '#',
      helpContent: context.sobreComoComprar,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿Puedo realizar una compra siendo menor de edad?',
      answer: 'El usuario o la persona responsable deberá ser mayor de edad.',
      link: '#',
      helpContent: context.sobreComoComprar,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿Puedo modificar mi mail?',
      answer:
        'No se puede modificar el mail, se debe mantener la misma dirección de correo. Si desea cambiar de correo tendría que crear un nuevo usuario.',
      link: '#',
      helpContent: context.sobreComoComprar,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿Si no me entregaron mis puntos bonus, dónde debo solicitar la asignación?',
      answer:
        'Para solicitar la asignación de puntos bonus, puedes presentar tu reclamo llamando al (01) 610-5252 o escribir al whatsapp 997 599 241, indicando tu número de tarjeta BONUS, nombres, apellidos y enviar los tickets de compra. También puede enviar su requerimiento al correo servcliente@bonusperu.com o acercarse a cualquiera de los módulos con tu(s) ticket(s) de compra (copias) para realizar el reclamo de puntos. Asimismo, para acumular puntos es necesario registrar su tarjeta antes de finalizar su proceso de compra.',
      link: '#',
      helpContent: context.sobreComoComprar,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿Cómo sé si mi pedido está listo para recoger en tienda?',
      answer:
        'Los pedidos cumplen con las fechas y rangos solicitados por el usuario. Asimismo, puede contactarse con nuestra central telefónica al 613-8888',
      link: '#',
      helpContent: context.sobreMiPedido,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿En cuánto tiempo puedo realizar mi solicitud de cambio y/o devolución?',
      answer:
        'El usuario o la persona responsable deberá gestionar el cambio o devolución llamando a nuestra central telefónica al 613-8888 de lunes a domingo 8:30 a 22:00 horas dentro de los 7 días calendario de haber recibido el pedido para los productos non food y dentro de las 12 horas de haber recibido el pedido para los productos food, donde recibirá la información necesaria para proceder con la devolución. Aplican excepciones que puede verificar en los términos y condiciones de la web.',
      link: '#',
      helpContent: context.sobreMiPedido,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿Si mi producto presenta fallas técnicas, dónde puedo comunicarme?',
      answer:
        'Se recomienda comunicarte directamente con el soporte técnico de la marca del producto. En caso no cuentes con esa información puedes llamar al 613-8888, para solicitar los datos de la marca.',
      link: '#',
      helpContent: context.sobreMiPedido,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿Si tengo un reclamo, dónde lo gestiono?',
      answer:
        'Nosotros valoramos la opinión de nuestros clientes. Por ello, se ha habilitado una sección para presentar toda queja o reclamo, relacionada con actos o contratos ejecutados o celebrados a través de la web, deberá ser presentada a Servicio al Cliente, llamando a nuestra central telefónica al 613-8888 o ingresando al Libro de Reclamaciones Virtual.',
      link: '#',
      helpContent: context.sobreMiPedido,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿Puedo solicitar la modificación de mi comprobante de pago?',
      answer: 'Sí, para ello, se recomienda llamar al 613-8888, 24 horas antes del día de despacho de su pedido.',
      link: '#',
      helpContent: context.sobreMisPagos,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿Qué medios de pago puedo utilizar para comprar online?',
      answer:
        'Puedes utilizar tarjetas de crédito y débito, pago contra entrega o a través del aplicativo "Pago efectivo".',
      link: '#',
      helpContent: context.sobreMisPagos,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿Si pago con tarjeta, mis datos se quedan grabados?',
      answer:
        'Los datos se quedan registrados en el dispositivo donde hayas realizado la compra (celular, PC, Laptop, etc), siempre y cuando elijas la opción de guardar información.',
      link: '#',
      helpContent: context.sobreMisPagos,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿Brindan servicio de instalación de los productos que venden?',
      answer:
        'Siempre velando por una excelente calidad de servicio, recomendamos que las mismas marcas que proveen los productos realicen sus instalaciones, por eso no brindamos el servicio y cada marca cuenta con su propia garantía de fabricante.',
      link: '#',
      helpContent: context.sobreMisPagos,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿Cómo realizan las devoluciones de los montos?',
      answer:
        'Para la devolución de los pedidos con pago en línea, WONG gestionará el extorno al mismo medio de pago utilizado por el usuario al realizar la compra, luego de entregado o recogido el/los producto/s a ser devuelto/s. El extorno del dinero se realizará bajo los plazos establecidos por su entidad financiera.',
      link: '#',
      helpContent: context.sobreMisPagos,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿En cuánto tiempo me devuelven el dinero de mi pedido anulado?',
      answer:
        'El extorno del dinero se realizará bajo los plazos establecidos por su entidad financiera. En caso de devolución de los pedidos con Pago Efectivo, el monto pagado será reembolsado mediante un cheque emitido por Cencosud Retail Perú a nombre del usuario luego de la fecha de entrega o recojo del/de los producto/s a ser devuelto/s.',
      link: '#',
      helpContent: context.sobreMisPagos,
      flag: context.wong,
    });

    em.create(Faq, {
      question: '¿Hasta qué piso pueden entregar las compras?',
      answer:
        'Nuestros repartidores solo están autorizados para subir hasta el 4to piso. Esto se cumplirá siempre y cuando las condiciones de seguridad y acceso lo permitan, y cuando no se presente un caso fortuito o por motivo de fuerza mayor.',
      link: '#',
      helpContent: context.sobreFormasEntrega,
      flag: context.wong,
    });
  }
}
