import { EntityManager, Dictionary } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { HelpContent } from 'modules/content/help-category/entities/help-content.entity';

export class HelpContentParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    //============ SERVICIO POST VENTA PARIS ============//
    context.servicioArmadoParis = em.create(HelpContent, {
      label: 'Servicio de armado',
      reference: '/servicio-armado',
      content:
        '# Servicio de Armado\n' +
        '### ¿Por qué contratar el servicio de armado?\n' +
        '- Ahorras tiempo\n' +
        '- Menos esfuerzo\n' +
        '- Mantienes la garantía\n' +
        'Te recomendamos contratar el servicio para aquellos productos que no cuenten con el servicio de armado gratuito o directo con el proveedor, para mantener la garantía mínima legal.**\n' +
        '### Categorías que incluyen el servicio de armado\n' +
        'El servicio de armado incluye todo tipo de muebles comercializados en Paris: veladores, kit de cocina, home racks, closet, juegos de comedor, sofás, etc.\n' +
        'Recuerda que debes leer detalladamente la ficha de cada producto, ya que hay proveedores que ofrecen el servicio de armado de manera gratuita.\n' +
        '### ¿Cómo contratar un servicio de armado?\n' +
        '- **En nuestras tiendas paris:** Al momento de comprar el producto, puedes contratar el servicio en cualquiera de nuestras cajas o puntos de venta online (kioskos).\n' +
        '- **En nuestra página [Paris.cl](https://www.paris.cl/):** Al momento de añadir tu producto al carro de compras, debes seleccionar la opción para contratar el servicio.\n' +
        '## Valores del servicio de armado\n' +
        '|                 |                   |\n' +
        '| --------------- | ----------------- |\n' +
        '| Complejidad Menor| $16.990          |\n' +
        '| Complejidad Mayor| $24.990          |\n' +
        '| Complejidad Pack | $29.990          |\n' +
        '\n' +
        '\n' +
        '### ¿Cómo agendar el servicio de armado?\n' +
        '1. Ingresa con tu cuenta a [Mis compras](https://www.paris.cl/mis-compras)\n' +
        '2. Busca el servicio a domicilio en el listado de tus compras ([Seguimiento de compras](https://www.paris.cl/mis-compras ))\n' +
        "3. Selecciona el botón 'Agendar día de servicio'\n" +
        '4. Acepta términos y condiciones\n' +
        '5. Selecciona dia y horario que más te acomode, de acuerdo a tu disponibilidad\n' +
        '### Términos y condiciones\n' +
        '1. El producto debe estar tal como lo recibiste para revisión por parte del técnico.\n' +
        '2.  El producto debe estar ubicado en el lugar de armado y debe existir el espacio necesario para su correcto armado.\n' +
        '3. Durante el armado, se debe evitar que niños estén o circulen en el entorno en donde se realizará el armado.\n' +
        '4.  No se realizará el servicio de armado, si se presenta alguna de las siguientes condiciones:\n' +
        '  - Producto no se encuentra en el lugar de armado\n' +
        '  - Producto es distinto al adquirido, presenta falla, daño o falta de piezas\n' +
        '  - No hay espacio o luminosidad suficiente en el lugar de armado\n' +
        '5.  El servicio de armado, no considera adicionales que requiera el producto, por ejemplo:\n' +
        '-  Anclaje, trabajos de electricidad, gasfiteria, movimiento de muebles, retiro de escombros.\n' +
        '6.  Los técnicos no están autorizados para recibir propinas; ellos reciben una comisión especial por cada servicio que realizan.\n' +
        '### Horario\n' +
        '|                 |                   |\n' +
        '| --------------- | ----------------- |\n' +
        '| Lunes a viernes | 09:00 a 19:00 hrs |\n' +
        '| Sábado          | 09:00 a 14:00 hrs |\n' +
        '| Domingo         | Cerrado           |\n' +
        '\n' +
        '### Cobertura\n' +
        '\n' +
        '```ComunasDisponibles\n' +
        '- Antofagasta *\n' +
        'Antofagasta, Calama. \n' +
        '- Araucanía *\n' +
        'Angol, Padre de las casas,\n' +
        'Pucon, Temuco, Victoria,\n' +
        'Villarrica.\n' +
        '- Arica *\n' +
        'Arica.\n' +
        '- Atacama *\n' +
        'Copiapó.\n' +
        '- Aysen *\n' +
        'Coyhaique. \n' +
        '- Bío Bío *\n' +
        'Chiguayante, Concepción,\n' +
        'Hualpén, Hualqui,\n' +
        'Los Angeles, Penco,\n' +
        'San Pedro de la Paz,\n' +
        'Talcahuano, Tomé.\n' +
        '- Coquimbo *\n' +
        'Coquimbo, La Serena,\n' +
        'Illapel.\n' +
        '- El Maule *\n' +
        'Curico, Linares, Maule,\n' +
        'Molina, Pencahue, Rauco,  \n' +
        'Romeral, Sagrada Familia,\n' +
        'San Clemente, San Javier,\n' +
        'Talca, Teno, Villa Alegre.\n' +
        '- Los Lagos *\n' +
        'Alerce Historico,\n' +
        'Alerce Norte, Alerce Sur,\n' +
        'Alto Bonito, Alto Tepual,\n' +
        'Ancud, Castro, Chinquihue,\n' +
        'Chonchi, Llanquihue,\n' +
        'Osorno,Puerto Montt,\n' +
        'Puerto Varas, Quellon,\n' +
        'Quemchi.\n' +
        '- Magallanes *\n' +
        'Punta Arenas.\n' +
        '- Ñuble *\n' +
        'Chillán, Chillán Viejo,\n' +
        'Coelemu.\n' +
        '- O´Higgins *\n' +
        'Codegua, Graneros,\n' +
        'Machali, Mostazal,\n' +
        'Rancagua, Rengo,\n' +
        'Doñihue, Palmilla,\n' +
        'Placilla, Requinoa,\n' +
        'San Fernando, Santa Cruz.\n' +
        '- Metropolitana *\n' +
        'Cerrillos, Cerro Navia,\n' +
        'Colina, Conchalí,\n' +
        'El Bosque,Estación Central,\n' +
        'Huechuraba,\n' +
        'Independencia, La Cisterna,\n' +
        'La Florida, La Granja,\n' +
        'La Pintana, La Reina,\n' +
        'Las Condes, Lo Barnechea,\n' +
        'Lo Espejo, Lo Prado, Macul,\n' +
        'Maipú,Ñuñoa,\n' +
        'Pedro Aguirre Cerda,\n' +
        'Peñalolén, Providencia,\n' +
        'Pudahuel, Puente Alto,\n' +
        'Quilicura, Quinta Normal,\n' +
        'Recoleta, Renca,\n' +
        'San Bernardo, San Joaquín,\n' +
        'San Miguel, San Ramón,\n' +
        'Santiago, Vitacura, Buin,\n' +
        'Calera de Tango, El Monte,\n' +
        'Isla de Maipo, Lampa,\n' +
        'Melipilla, Padre Hurtado,\n' +
        'Paine, Peñaflor, Talagante,\n' +
        'Tiltil.\n' +
        '- Tarapacá *\n' +
        'Alto Hospicio, Iquique.\n' +
        '- Valparaiso *\n' +
        'Concón, Quillota, Quilpué,\n' +
        'Valparaíso, Villa Alemana,\n' +
        'Viña del Mar, Cartagena,\n' +
        'El Quisco, El Tabo, Limache,\n' +
        'Olmué, San Antonio,\n' +
        'Santo Domingo, Los Andes,\n' +
        'Putaendo, San Felipe.\n' +
        '```\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{"id":2,"reference":"/ayuda/contactanos?data=1ccf09af15fefd82958094c4a15ee8d83cfdd8c80e31413e8119c97d9cc41ba4","invitedReference":"/ayuda/contactanos?data=1ccf09af15fefd82958094c4a15ee8d83cfdd8c80e31413e8119c97d9cc41ba4"}\n' +
        '```',
      order: 7,
      helpCategory: context.serviciosPosventaParis,
      icon: '/icons/cards/transactionTools.svg',
      description: 'Contrata, agenda el día que te acomode y armaremos tu producto.',
    });

    context.cambiosDevolucionesParis = em.create(HelpContent, {
      label: 'Cambios y devoluciones',
      reference: '/cambios-devoluciones',
      content:
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '# Cambios y devoluciones\n' +
        '\n' +
        '## ¿Qué necesito para realizar un cambio de producto?\n' +
        '\n' +
        'El plazo para hacer un cambio es durante los primeros **30 días corridos** a partir de la fecha de compra en Tiendas Paris, desde que recibiste el producto si compraste en Paris.cl con despacho a domicilio, o a contar de la fecha de Retiro en Tienda. \n' +
        '\n' +
        'Si tu producto es de **paquetería o fácil traslado**, y no corresponde a la talla, modelo o alguna característica que hayas escogido, puedes cambiarlo en tienda por otro. \n' +
        '\n' +
        '```GenericMessage\n' +
        '{"message":"**Importante:** \\n- La opción de cambio no está disponible para productos **Marketplace.**\\n- Los productos reacondicionados, open box o segunda mano tienen un plazo de 10 días para devolución.\\n- Las compras de vestuario de segunda mano realizadas en tiendas solo pueden ser devueltas dentro de un **plazo de 24 horas.**", "type":"warning", "isHighlight":true}\n' +
        '```\n' +
        '\n' +
        '### Categorías de productos de paquetería o fácil traslado\n' +
        '\n' +
        '```IconTable\n' +
        '{"textPosition":"bottom", "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/Cosmeticos.svg", "text": "Belleza", "weight": "bold", "size": "5em"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/Vestimenta.svg", "text": "Vestuario", "weight": "bold", "size": "5em"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/Juguetes.svg", "text": "Juguetería", "weight": "bold", "size": "5em"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/Belleza.svg", "text": "Perfumes", "weight": "bold", "size": "5em"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/Zapatos.svg", "text": "Zapatos", "weight": "bold", "size": "5em"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/Electro.svg", "text": "Electrodomésticos", "weight": "bold", "size": "5em"}]}\n' +
        '```\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '### ¿Cuáles son los requisitos importantes para los cambios?\n' +
        '1.  **Producto en perfecto estado:** no debe tener uso alguno, mantener la etiqueta adherida a su embalaje original, estar sellado y con sus accesorios correspondientes.\n' +
        '\n' +
        '2.  **Documento que acredite la compra:** puedes descargar y mostrar uno de los siguientes documentos que acrediten tu compra: Orden de compra, boleta, factura o ticket de cambio.\n' +
        '\n' +
        '\n' +
        '## ¿Cómo puedo retractarme y devolver un producto?\n' +
        '\n' +
        'Si ya no quieres un producto y deseas que se reembolse tu dinero, puedes retractarte y devolverlo siempre que no tenga **ningún tipo de uso**. Eso aplica para los artículos comprados en Paris.cl que no estén en las excepciones legales (informadas en los [Términos y Condiciones](https://ayuda2.paris.cl/ayuda/cencosud/terminos-condiciones)), y para las compras presenciales en Tiendas Paris.\n' +
        '\n' +
        'Si compraste en **Tiendas Paris**, a partir de la **fecha de compra**, tienes 30 días para hacer la devolución.\n' +
        '\n' +
        'Para el caso de las compras en **Paris.cl**, a partir de la fecha en que **recibiste o retiraste** un producto, tienes 30 días para devolverlo.\n' +
        '\n' +
        'Ten en cuenta que, de acuerdo a la ley, no puedes **retractarte y devolver los siguientes productos:**\n' +
        '1.  **Ropa interior o de uso inferior** (calzones y calzoncillos) por motivos de higiene y salud.\n' +
        '\n' +
        '2.  Productos **hechos a medida** no se pueden devolver ya que han sido fabricados exclusivamente para el cliente y no pueden ser vendidos a otra persona.\n' +
        '\n' +
        '3.  **Plantas, Alimentos, bebidas, medicamentos, suplementos alimenticios y vitaminas**, no se pueden devolver por razones de seguridad y salud, ya que existe el riesgo de contaminación, deterioro o manipulación.\n' +
        '\n' +
        '4.  Productos **de bienestar sexual** no se pueden devolver por razones de higiene y salud.\n' +
        '\n' +
        '5.  Los **productos intangibles**, como licencias de sistemas, videojuegos u otros, no se pueden devolver, ya que no hay manera de saber si fueron usados o no.\n' +
        '\n' +
        '\n' +
        '### Consideraciones para retractos y devoluciones\n' +
        '- El producto debe estar en **perfecto estado**, con la etiqueta adherida, en su **embalaje original sellado** y con sus accesorios correspondientes. De no ser así, no podremos recibirlo ni retirarlo.\n' +
        '- Si perdiste la boleta, inicia sesión en Paris.cl, ubica tu compra y selecciona “**Descargar boleta o factura**”. Si el producto es **Marketplace**, puedes devolver solo con el RUT de quien hizo la compra o el Número de  orden.\n' +
        '- Si la compra es devuelta por motivos diferentes al de una falla, se reembolsará, al mismo medio de pago con que compraste, solo el monto del producto, pero **no el costo de despacho**. Si pagaste con tarjeta de débito, podrás cambiar la [cuenta bancaria](https://www.paris.cl/mi-cuenta/datos-bancarios) para recibir la transferencia.\n' +
        '\n' +
        '### ¿Dónde debo devolver el producto que compré?\n' +
        '\n' +
        '- **Artículos de paquetería o fácil traslado:** Llévalo a nuestras [Tiendas Paris o puntos Cencosud](https://www.paris.cl/tiendas-paris.html) habilitados. Si el servicio está disponible para tu producto y comuna, agenda gratis el retiro a domicilio en [Mis compras](https://www.paris.cl/mis-compras), selecciona lo que quieras devolver y haz clic en Iniciar devolución. En el caso de Marketplace, solo está disponible para artículos de vestuario.\n' +
        '\n' +
        'Revisa el listado de las comunas disponibles en la **Región Metropolitana** para el agendamiento de devoluciones en caso de productos de **fácil traslado o paquetería**, y los **productos** válidos para este servicio:\n' +
        '\n' +
        '```ComunasDisponibles\n' +
        '- Quinta Normal\n' +
        '- Independencia\n' +
        '- La Cisterna\n' +
        '- El Bosque\n' +
        '- La Pintana\n' +
        '- Conchalí\n' +
        '- La Granja\n' +
        '- Cerro Navia\n' +
        '- Pedro Aguirre Cerda\n' +
        '- Cerrillos\n' +
        '- Estación Central\n' +
        '- Lo Espejo\n' +
        '- Lo Prado\n' +
        '- San Ramón\n' +
        '- Puente Alto\n' +
        '- Maipú\n' +
        '- La Florida\n' +
        '- San Miguel\n' +
        '- San Bernardo\n' +
        '- Macul\n' +
        '- Peñalolén\n' +
        '- San Joaquín\n' +
        '- Pudahuel\n' +
        '- Quilicura\n' +
        '- Huechuraba\n' +
        '- Renca\n' +
        '- Recoleta\n' +
        '- Colina\n' +
        '- Lampa\n' +
        '- Buin\n' +
        '- Vitacura\n' +
        '- Providencia\n' +
        '- Lo Barnechea\n' +
        '- Las Condes\n' +
        '- Santiago\n' +
        '- Ñuñoa\n' +
        '- La Reina\n' +
        '- Calera de Tango\n' +
        '- Peñaflor\n' +
        '- Padre Hurtado\n' +
        '```\n' +
        '\n' +
        '```ModalStatic\n' +
        '{"id": "modal-static", "title": "Secciones de paquetería", "content": "### Vestuario\\n Juvenil Mujer\\n \\nJeans Mujer\\n \\nCasual\\n \\nContemporáneo\\n \\nVestir Formal\\n \\nCorsetería\\n \\nMedias y calcetines\\n \\nCarteras\\n \\nAccesorios Mujer\\n \\nPerfumería selectiva\\n \\nPerfumería semiselectiva\\n \\nRecién nacido\\n \\nNiñas\\n \\nNiños\\n \\nEscolar\\n \\nJunior Mujer\\n \\nJunior Hombre\\n \\nJuvenil Hombre\\n \\nJeans Hombres\\n \\nSport Hombres\\n \\nVestuario deportivo\\n \\nFormal Hombres\\n \\nZapatillas deportivas\\n \\nZapatos Niños\\n \\nZapatos escolares\\n \\nZapatos Mujer\\n \\nZapatos Hombre\\n \\n### Blanco Hogar"}\n' +
        '```\n' +
        '\n' +
        '```CardStaticContent\n' +
        '{"id":"1000", "icon":"modalStaticParcel", "icon_url":"/icons/icon-contacto.svg", "label":"Secciones de paquetería", "label_mobile":"Conoce los departamentos de Paris con productos de paquetería válidos para este servicio.", "actionLabel":"Revisar listado de secciones","actionBtn":"BtnModal"}\n' +
        '```\n' +
        '\n' +
        '- **Productos de gran tamaño o difícil traslado** (aquellos con un peso mayor a 30 kilos o que alguno de sus lados sobrepase los 60 centímetros): Ingresa a Mis compras, busca el producto que deseas devolver, haz clic en “**Iniciar devolución**” y luego completa el [Formulario de contacto](https://ayuda.paris.cl/ayuda/contactanos) para agendar el retiro\n' +
        '\n' +
        '[![irAMisCompras](https://d31w2ybspxswhh.cloudfront.net/TxD/paris/ir_mis_compras.svg "Ir a Mis compras")](<URL_MIS_COMPRAS>)\n' +
        '\n' +
        '**Recuerda:** En caso de que tu producto presente algún tipo de falla, puedes hacer uso de la [Garantía mínima legal](https://ayuda2.paris.cl/ayuda/garantia-de-producto/garantia-minima-legal).',
      order: 2,
      helpCategory: context.serviciosPosventaParis,
      icon: '/icons/cards/transactionPackageChange.svg',
      description: 'Revisa lo que debes saber para cambiar o retractarte y devolver un producto.',
    });

    context.servicioTecnicoParis = em.create(HelpContent, {
      label: 'Servicio Técnico',
      reference: '/servicio-tecnico',
      content:
        '\n' +
        '# Servicio técnico\n' +
        '\n' +
        '### Contactos por marca\n' +
        '\n' +
        'Puedes conocer los detalles y forma de contacto para el servicio técnico de cada marca en el siguiente buscador:\n' +
        '\n' +
        '```\n' +
        'ServiciosTecnicos\n' +
        '```\n' +
        '\n' +
        'Puedes acceder al servicio técnico para solicitar la garantía cuando tus **productos tengan fallas en su funcionalidad**, debido a la fabricación y no a la manipulación. Recuerda que **el tiempo y la reparación de los productos se ajustan a las políticas de cada marca** en particular. Al final de esta página puedes revisar el buscador por marcas y canales de contacto.\n' +
        '\n' +
        '```GenericMessage\n' +
        '{"message":"**Nota:** todos los **productos comprados desde el 24 de marzo del 2022** en adelante, tendrán una **garantía mínima legal de 6 meses.**", "type":"warning", "isHighlight":true}\n' +
        '```\n' +
        '\n' +
        '### Consideraciones para el servicio técnico\n' +
        '\n' +
        '- En el caso de los productos de **paquetería o de fácil traslado**, puedes llevar el producto al servicio técnico autorizado por la marca o llevarlo a cualquiera de nuestras [Tienda Paris](https://www.paris.cl/tiendas-paris.html) para canalizar la garantía.\n' +
        '\n' +
        '- Cuando se trata de **productos de difícil traslado** (llamados big ticket), en algunos casos **es necesaria una evaluación remota o una asistencia telefónica** para verificar la falla. De no funcionar, es posible que se coordine una visita, ya sea de nuestro equipo o del proveedor del producto, para confirmar la falla.\n' +
        '\n' +
        '- Siempre que quieras generar una solicitud es importante que ubiques el **número de Orden de compra o el número de la boleta**, así como describir detalladamente la falla que presenta el producto.\n' +
        '\n' +
        '- Si envías un producto electrónico al servicio técnico este puede perder su información, por eso te recomendamos **respaldar antes de acceder a la reparación**. Se considerará falla siempre que el problema sea en el hardware y no en el software. Te sugerimos no enviar accesorios del producto con la falla como, por ejemplo, carcasas, mica, mandos, memorias u otros. \n' +
        '\n' +
        '### Categorías disponibles para servicio técnico\n' +
        '\n' +
        '![Tecno](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iMTA2IiB2aWV3Qm94PSIwIDAgOTggMTA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzAuOTQ3NyA5MS4xOTkySDI5LjU3OVY4MC42NDQxSDI1Ljg1MTNWNzkuNDI4M0gzNC42NzU0VjgwLjY0NDFIMzAuOTQ3N1Y5MS4xOTkyWk0zOS45ODEyIDkxLjM2MDJDMzguNjc2OSA5MS4zNjAyIDM3LjY0NjMgOTAuOTYzIDM2Ljg4OTUgOTAuMTY4N0MzNi4xMzgxIDg5LjM3NDMgMzUuNzYyMyA4OC4yNzEzIDM1Ljc2MjMgODYuODU5NkMzNS43NjIzIDg1LjQzNzIgMzYuMTExMiA4NC4zMDc0IDM2LjgwOSA4My40NzAxQzM3LjUxMjEgODIuNjMyNyAzOC40NTQxIDgyLjIxNDEgMzkuNjM1IDgyLjIxNDFDNDAuNzQwNyA4Mi4yMTQxIDQxLjYxNTYgODIuNTc5MSA0Mi4yNTk3IDgzLjMwOUM0Mi45MDM4IDg0LjAzMzYgNDMuMjI1OCA4NC45OTE3IDQzLjIyNTggODYuMTgzM1Y4Ny4wMjg3SDM3LjE0NzJDMzcuMTc0IDg4LjA2NDYgMzcuNDM0MyA4OC44NTA5IDM3LjkyODEgODkuMzg3N0MzOC40MjczIDg5LjkyNDQgMzkuMTI3OCA5MC4xOTI4IDQwLjAyOTUgOTAuMTkyOEM0MC45Nzk1IDkwLjE5MjggNDEuOTE4OCA4OS45OTQyIDQyLjg0NzQgODkuNTk3VjkwLjc4ODZDNDIuMzc1MSA5MC45OTI2IDQxLjkyNjkgOTEuMTM3NSA0MS41MDI5IDkxLjIyMzRDNDEuMDg0MiA5MS4zMTQ2IDQwLjU3NyA5MS4zNjAyIDM5Ljk4MTIgOTEuMzYwMlpNMzkuNjE4OSA4My4zMzMyQzM4LjkxMDQgODMuMzMzMiAzOC4zNDQxIDgzLjU2NCAzNy45MjAxIDg0LjAyNTZDMzcuNTAxNCA4NC40ODcyIDM3LjI1NDUgODUuMTI1OSAzNy4xNzk0IDg1Ljk0MThINDEuNzkyN0M0MS43OTI3IDg1LjA5OTEgNDEuNjA0OCA4NC40NTUgNDEuMjI5MSA4NC4wMDk1QzQwLjg1MzQgODMuNTU4NiA0MC4zMTY2IDgzLjMzMzIgMzkuNjE4OSA4My4zMzMyWk00OS4wMzg4IDkxLjM2MDJDNDcuNzYxMyA5MS4zNjAyIDQ2Ljc3MSA5MC45Njg0IDQ2LjA2NzkgOTAuMTg0OEM0NS4zNzAxIDg5LjM5NTcgNDUuMDIxMiA4OC4yODIgNDUuMDIxMiA4Ni44NDM1QzQ1LjAyMTIgODUuMzY3NSA0NS4zNzU1IDg0LjIyNjkgNDYuMDg0IDgzLjQyMTdDNDYuNzk3OSA4Mi42MTY2IDQ3LjgxMjMgODIuMjE0MSA0OS4xMjc0IDgyLjIxNDFDNDkuNTUxNCA4Mi4yMTQxIDQ5Ljk3NTQgODIuMjU5NyA1MC4zOTk1IDgyLjM1MDlDNTAuODIzNSA4Mi40NDIyIDUxLjE1NjMgODIuNTQ5NSA1MS4zOTc4IDgyLjY3M0w1MC45ODcyIDgzLjgwODJDNTAuNjkyIDgzLjY5MDEgNTAuMzY5OSA4My41OTM1IDUwLjAyMSA4My41MTg0QzQ5LjY3MjIgODMuNDM3OCA0OS4zNjM1IDgzLjM5NzYgNDkuMDk1MiA4My4zOTc2QzQ3LjMwMjQgODMuMzk3NiA0Ni40MDYxIDg0LjU0MDkgNDYuNDA2MSA4Ni44Mjc0QzQ2LjQwNjEgODcuOTExNiA0Ni42MjM0IDg4Ljc0MzYgNDcuMDU4MiA4OS4zMjMzQzQ3LjQ5ODMgODkuOTAzIDQ4LjE0NzggOTAuMTkyOCA0OS4wMDY2IDkwLjE5MjhDNDkuNzQxOSA5MC4xOTI4IDUwLjQ5NjEgOTAuMDM0NSA1MS4yNjkgODkuNzE3OFY5MC45MDEzQzUwLjY3ODYgOTEuMjA3MyA0OS45MzUyIDkxLjM2MDIgNDkuMDM4OCA5MS4zNjAyWk01OS40MDg4IDkxLjE5OTJWODUuNDkwOUM1OS40MDg4IDg0Ljc3MTcgNTkuMjQ1MSA4NC4yMzQ5IDU4LjkxNzYgODMuODgwN0M1OC41OTAyIDgzLjUyNjQgNTguMDc3NiA4My4zNDkzIDU3LjM3OTkgODMuMzQ5M0M1Ni40NTY3IDgzLjM0OTMgNTUuNzgwMyA4My41OTg5IDU1LjM1MSA4NC4wOThDNTQuOTIxNiA4NC41OTcyIDU0LjcwNjkgODUuNDIxMSA1NC43MDY5IDg2LjU2OThWOTEuMTk5Mkg1My4zNzA0VjgyLjM3NTFINTQuNDU3M0w1NC42NzQ2IDgzLjU4MjhINTQuNzM5MUM1NS4wMTI4IDgzLjE0OCA1NS4zOTY2IDgyLjgxMjUgNTUuODkwNCA4Mi41NzY0QzU2LjM4NDIgODIuMzM0OCA1Ni45MzQ0IDgyLjIxNDEgNTcuNTQwOSA4Mi4yMTQxQzU4LjYwMzYgODIuMjE0MSA1OS40MDM0IDgyLjQ3MTcgNTkuOTQwMSA4Mi45ODdDNjAuNDc2OSA4My40OTY5IDYwLjc0NTMgODQuMzE1NCA2MC43NDUzIDg1LjQ0MjZWOTEuMTk5Mkg1OS40MDg4Wk03MS4xMTUyIDg2Ljc3OTFDNzEuMTE1MiA4OC4yMTc2IDcwLjc1MjkgODkuMzQyMSA3MC4wMjgzIDkwLjE1MjZDNjkuMzAzNyA5MC45NTc3IDY4LjMwMjcgOTEuMzYwMiA2Ny4wMjUyIDkxLjM2MDJDNjYuMjM2MiA5MS4zNjAyIDY1LjUzNTcgOTEuMTc1MSA2NC45MjM5IDkwLjgwNDdDNjQuMzEyIDkwLjQzNDQgNjMuODM5NiA4OS45MDMgNjMuNTA2OCA4OS4yMTA2QzYzLjE3NDEgODguNTE4MiA2My4wMDc3IDg3LjcwNzcgNjMuMDA3NyA4Ni43NzkxQzYzLjAwNzcgODUuMzQwNiA2My4zNjczIDg0LjIyMTUgNjQuMDg2NSA4My40MjE3QzY0LjgwNTggODIuNjE2NiA2NS44MDQxIDgyLjIxNDEgNjcuMDgxNiA4Mi4yMTQxQzY4LjMxNjEgODIuMjE0MSA2OS4yOTU3IDgyLjYyNDcgNzAuMDIwMyA4My40NDU5QzcwLjc1MDIgODQuMjY3MSA3MS4xMTUyIDg1LjM3ODIgNzEuMTE1MiA4Ni43NzkxWk02NC4zOTI1IDg2Ljc3OTFDNjQuMzkyNSA4Ny45MDYzIDY0LjYxNzkgODguNzY1MSA2NS4wNjg4IDg5LjM1NTVDNjUuNTE5NiA4OS45NDU5IDY2LjE4MjUgOTAuMjQxMSA2Ny4wNTc0IDkwLjI0MTFDNjcuOTMyMyA5MC4yNDExIDY4LjU5NTIgODkuOTQ4NiA2OS4wNDYxIDg5LjM2MzVDNjkuNTAyMyA4OC43NzMxIDY5LjczMDQgODcuOTExNiA2OS43MzA0IDg2Ljc3OTFDNjkuNzMwNCA4NS42NTczIDY5LjUwMjMgODQuODA2NiA2OS4wNDYxIDg0LjIyNjlDNjguNTk1MiA4My42NDE4IDY3LjkyNyA4My4zNDkzIDY3LjA0MTMgODMuMzQ5M0M2Ni4xNjY0IDgzLjM0OTMgNjUuNTA2MiA4My42MzY0IDY1LjA2MDcgODQuMjEwOEM2NC42MTUyIDg0Ljc4NTEgNjQuMzkyNSA4NS42NDEyIDY0LjM5MjUgODYuNzc5MVoiIGZpbGw9IiMxQTFBMUEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03NC42MDc5IDQ5LjY4ODhDNzUuNzcyMiA0OS45NTM1IDc2LjY0MTUgNTEuMDAxOSA3Ni42NDE1IDUyLjI1MzdDNzYuNjQxNSA1My43MDc2IDc1LjQ3MjggNTQuODgzMiA3NC4wMzA2IDU0Ljg4MzJIMjMuNjYwNEMyMi4yMjA0IDU0Ljg4MzIgMjEuMDUxOCA1My43MDc2IDIxLjA1MTggNTIuMjUzN0MyMS4wNTE4IDUxLjAwMjIgMjEuOTIwNiA0OS45NTQgMjMuMDgzIDQ5LjY4OVYyMC4wMTY2QzIzLjA4MyAxNy45MTMzIDI0LjgyMzEgMTYuMjMyNCAyNi45MzkgMTYuMjMyNEg3MC43NTE4QzcyLjg2NzggMTYuMjMyNCA3NC42MDc5IDE3LjkxMzMgNzQuNjA3OSAyMC4wMTY2VjQ5LjY4ODhaTTI2LjU2MTEgNDkuNjI0M1YyMC4wMTY2QzI2LjU2MTEgMTkuODYxNyAyNi43MTc1IDE5LjcxMDUgMjYuOTM5IDE5LjcxMDVINzAuNzUxOEM3MC45NzMzIDE5LjcxMDUgNzEuMTI5OCAxOS44NjE3IDcxLjEyOTggMjAuMDE2NlY0OS42MjQzSDI2LjU2MTFaTTQzLjUyODEgNTMuMjc5OEg1NC4wMjI4QzU0LjY2NzQgNTMuMjc5OCA1NS4xOTE0IDUyLjc1MTIgNTUuMTkxNCA1Mi4xMDE5QzU1LjE5MTQgNTEuNDUyNyA1NC42Njc0IDUwLjkyNCA1NC4wMjI4IDUwLjkyNEg0My41MjgxQzQyLjg4MTIgNTAuOTI0IDQyLjM1OTUgNTEuNDUyNyA0Mi4zNTk1IDUyLjEwMTlDNDIuMzU5NSA1Mi43NTEyIDQyLjg4MTIgNTMuMjc5OCA0My41MjgxIDUzLjI3OThaIiBmaWxsPSIjMUExQTFBIi8%2BCjwvc3ZnPg%3D%3D)\n' +
        '![Electro](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTkiIGhlaWdodD0iMTA2IiB2aWV3Qm94PSIwIDAgOTkgMTA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzEuNTM4OCA5MS4xOTkySDI0Ljk3NzFWNzkuNDI4M0gzMS41Mzg4VjgwLjY0NDFIMjYuMzQ1OFY4NC40MzYySDMxLjIyNDhWODUuNjQzOUgyNi4zNDU4Vjg5Ljk3NTRIMzEuNTM4OFY5MS4xOTkyWk0zNS4yOTA3IDkxLjE5OTJIMzMuOTU0MlY3OC42NzE1SDM1LjI5MDdWOTEuMTk5MlpNNDEuODUyNCA5MS4zNjAyQzQwLjU0ODEgOTEuMzYwMiAzOS41MTc2IDkwLjk2MyAzOC43NjA3IDkwLjE2ODdDMzguMDA5MyA4OS4zNzQzIDM3LjYzMzYgODguMjcxMyAzNy42MzM2IDg2Ljg1OTZDMzcuNjMzNiA4NS40MzcyIDM3Ljk4MjUgODQuMzA3NCAzOC42ODAyIDgzLjQ3MDFDMzkuMzgzNCA4Mi42MzI3IDQwLjMyNTQgODIuMjE0MSA0MS41MDYyIDgyLjIxNDFDNDIuNjExOSA4Mi4yMTQxIDQzLjQ4NjggODIuNTc5MSA0NC4xMzA5IDgzLjMwOUM0NC43NzUgODQuMDMzNiA0NS4wOTcgODQuOTkxNyA0NS4wOTcgODYuMTgzM1Y4Ny4wMjg3SDM5LjAxODRDMzkuMDQ1MiA4OC4wNjQ2IDM5LjMwNTUgODguODUwOSAzOS43OTk0IDg5LjM4NzdDNDAuMjk4NSA4OS45MjQ0IDQwLjk5OSA5MC4xOTI4IDQxLjkwMDcgOTAuMTkyOEM0Mi44NTA4IDkwLjE5MjggNDMuNzkwMSA4OS45OTQyIDQ0LjcxODYgODkuNTk3VjkwLjc4ODZDNDQuMjQ2MyA5MC45OTI2IDQzLjc5ODEgOTEuMTM3NSA0My4zNzQxIDkxLjIyMzRDNDIuOTU1NCA5MS4zMTQ2IDQyLjQ0ODIgOTEuMzYwMiA0MS44NTI0IDkxLjM2MDJaTTQxLjQ5MDEgODMuMzMzMkM0MC43ODE2IDgzLjMzMzIgNDAuMjE1MyA4My41NjQgMzkuNzkxMyA4NC4wMjU2QzM5LjM3MjYgODQuNDg3MiAzOS4xMjU3IDg1LjEyNTkgMzkuMDUwNiA4NS45NDE4SDQzLjY2MzlDNDMuNjYzOSA4NS4wOTkxIDQzLjQ3NjEgODQuNDU1IDQzLjEwMDMgODQuMDA5NUM0Mi43MjQ2IDgzLjU1ODYgNDIuMTg3OSA4My4zMzMyIDQxLjQ5MDEgODMuMzMzMlpNNTAuOTEgOTEuMzYwMkM0OS42MzI2IDkxLjM2MDIgNDguNjQyMyA5MC45Njg0IDQ3LjkzOTEgOTAuMTg0OEM0Ny4yNDE0IDg5LjM5NTcgNDYuODkyNSA4OC4yODIgNDYuODkyNSA4Ni44NDM1QzQ2Ljg5MjUgODUuMzY3NSA0Ny4yNDY3IDg0LjIyNjkgNDcuOTU1MiA4My40MjE3QzQ4LjY2OTEgODIuNjE2NiA0OS42ODM2IDgyLjIxNDEgNTAuOTk4NiA4Mi4yMTQxQzUxLjQyMjYgODIuMjE0MSA1MS44NDY2IDgyLjI1OTcgNTIuMjcwNyA4Mi4zNTA5QzUyLjY5NDcgODIuNDQyMiA1My4wMjc1IDgyLjU0OTUgNTMuMjY5IDgyLjY3M0w1Mi44NTg0IDgzLjgwODJDNTIuNTYzMiA4My42OTAxIDUyLjI0MTIgODMuNTkzNSA1MS44OTIzIDgzLjUxODRDNTEuNTQzNCA4My40Mzc4IDUxLjIzNDggODMuMzk3NiA1MC45NjY0IDgzLjM5NzZDNDkuMTczNiA4My4zOTc2IDQ4LjI3NzMgODQuNTQwOSA0OC4yNzczIDg2LjgyNzRDNDguMjc3MyA4Ny45MTE2IDQ4LjQ5NDcgODguNzQzNiA0OC45Mjk0IDg5LjMyMzNDNDkuMzY5NiA4OS45MDMgNTAuMDE5IDkwLjE5MjggNTAuODc3OCA5MC4xOTI4QzUxLjYxMzIgOTAuMTkyOCA1Mi4zNjczIDkwLjAzNDUgNTMuMTQwMiA4OS43MTc4VjkwLjkwMTNDNTIuNTQ5OCA5MS4yMDczIDUxLjgwNjQgOTEuMzYwMiA1MC45MSA5MS4zNjAyWk01OC4wOTE3IDkwLjI1NzJDNTguMzI3OSA5MC4yNTcyIDU4LjU1NiA5MC4yNDExIDU4Ljc3NjEgOTAuMjA4OUM1OC45OTYxIDkwLjE3MTMgNTkuMTcwNiA5MC4xMzM4IDU5LjI5OTQgOTAuMDk2MlY5MS4xMTg3QzU5LjE1NDUgOTEuMTg4NSA1OC45Mzk4IDkxLjI0NDggNTguNjU1MyA5MS4yODc4QzU4LjM3NjIgOTEuMzM2MSA1OC4xMjM5IDkxLjM2MDIgNTcuODk4NSA5MS4zNjAyQzU2LjE5MTYgOTEuMzYwMiA1NS4zMzgyIDkwLjQ2MTIgNTUuMzM4MiA4OC42NjMxVjgzLjQxMzdINTQuMDc0MlY4Mi43Njk2TDU1LjMzODIgODIuMjE0MUw1NS45MDE4IDgwLjMzMDFINTYuNjc0N1Y4Mi4zNzUxSDU5LjIzNVY4My40MTM3SDU2LjY3NDdWODguNjA2N0M1Ni42NzQ3IDg5LjEzODEgNTYuODAwOCA4OS41NDYgNTcuMDUzMSA4OS44MzA1QzU3LjMwNTQgOTAuMTE1IDU3LjY1MTYgOTAuMjU3MiA1OC4wOTE3IDkwLjI1NzJaTTY1LjA5NjMgODIuMjE0MUM2NS40ODgxIDgyLjIxNDEgNjUuODM5NyA4Mi4yNDYzIDY2LjE1MSA4Mi4zMTA3TDY1Ljk2NTggODMuNTUwNkM2NS42MDA4IDgzLjQ3MDEgNjUuMjc4OCA4My40Mjk4IDY0Ljk5OTcgODMuNDI5OEM2NC4yODU4IDgzLjQyOTggNjMuNjczOSA4My43MTk2IDYzLjE2NCA4NC4yOTkzQzYyLjY1OTQgODQuODc5IDYyLjQwNzIgODUuNjAwOSA2Mi40MDcyIDg2LjQ2NTFWOTEuMTk5Mkg2MS4wNzA3VjgyLjM3NTFINjIuMTczN0w2Mi4zMjY2IDg0LjAwOTVINjIuMzkxMUM2Mi43MTg1IDgzLjQzNTIgNjMuMTEzIDgyLjk5MjMgNjMuNTc0NiA4Mi42ODFDNjQuMDM2MiA4Mi4zNjk3IDY0LjU0MzQgODIuMjE0MSA2NS4wOTYzIDgyLjIxNDFaTTc1LjQxNzkgODYuNzc5MUM3NS40MTc5IDg4LjIxNzYgNzUuMDU1NiA4OS4zNDIxIDc0LjMzMSA5MC4xNTI2QzczLjYwNjQgOTAuOTU3NyA3Mi42MDU0IDkxLjM2MDIgNzEuMzI3OSA5MS4zNjAyQzcwLjUzODkgOTEuMzYwMiA2OS44Mzg0IDkxLjE3NTEgNjkuMjI2NSA5MC44MDQ3QzY4LjYxNDYgOTAuNDM0NCA2OC4xNDIzIDg5LjkwMyA2Ny44MDk1IDg5LjIxMDZDNjcuNDc2NyA4OC41MTgyIDY3LjMxMDQgODcuNzA3NyA2Ny4zMTA0IDg2Ljc3OTFDNjcuMzEwNCA4NS4zNDA2IDY3LjY3IDg0LjIyMTUgNjguMzg5MiA4My40MjE3QzY5LjEwODUgODIuNjE2NiA3MC4xMDY4IDgyLjIxNDEgNzEuMzg0MyA4Mi4yMTQxQzcyLjYxODggODIuMjE0MSA3My41OTgzIDgyLjYyNDcgNzQuMzIzIDgzLjQ0NTlDNzUuMDUyOSA4NC4yNjcxIDc1LjQxNzkgODUuMzc4MiA3NS40MTc5IDg2Ljc3OTFaTTY4LjY5NTIgODYuNzc5MUM2OC42OTUyIDg3LjkwNjMgNjguOTIwNiA4OC43NjUxIDY5LjM3MTUgODkuMzU1NUM2OS44MjIzIDg5Ljk0NTkgNzAuNDg1MiA5MC4yNDExIDcxLjM2MDEgOTAuMjQxMUM3Mi4yMzUgOTAuMjQxMSA3Mi44OTc5IDg5Ljk0ODYgNzMuMzQ4OCA4OS4zNjM1QzczLjgwNSA4OC43NzMxIDc0LjAzMzEgODcuOTExNiA3NC4wMzMxIDg2Ljc3OTFDNzQuMDMzMSA4NS42NTczIDczLjgwNSA4NC44MDY2IDczLjM0ODggODQuMjI2OUM3Mi44OTc5IDgzLjY0MTggNzIuMjI5NiA4My4zNDkzIDcxLjM0NCA4My4zNDkzQzcwLjQ2OTEgODMuMzQ5MyA2OS44MDg5IDgzLjYzNjQgNjkuMzYzNCA4NC4yMTA4QzY4LjkxNzkgODQuNzg1MSA2OC42OTUyIDg1LjY0MTIgNjguNjk1MiA4Ni43NzkxWiIgZmlsbD0iIzFBMUExQSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTczLjg3NDggMjIuMDE2NkwyNS43NDkyIDIyLjAyODJDMjUuNjg2NiAyMi4wMjgyIDI1LjUwOCAyMi4yMDIxIDI1LjUwOCAyMi40NzM0VjQ5LjM0NzdDMjUuNTA4IDQ5LjYxOSAyNS42ODY2IDQ5Ljc5NTIgMjUuNzQ5MiA0OS43OTUySDc0LjA3MTlDNzQuMTM0NSA0OS43OTUyIDc0LjMxNTQgNDkuNjE5IDc0LjMxNTQgNDkuMzQ3N1YyMi40NzM0Qzc0LjMxNTQgMjIuMTkyOCA3NC4wOTUxIDIyLjA0MjEgNzMuODc0OCAyMi4wMTY2Wk01My45NjM1IDUzLjI3NDFINDUuODU5N0M0My45MDgyIDU0LjE4MjcgNDEuOTU1NCA1NS4zNDA5IDM5Ljg5NCA1Ni44MDlDMzkuNTg1NiA1Ny4wMjcgMzkuMjMzMiA1Ny4xMzE0IDM4Ljg4NTQgNTcuMTMxNEMzOC4zNDI4IDU3LjEzMTQgMzcuODA0OCA1Ni44Nzg2IDM3LjQ2NjMgNTYuNDAzM0MzNi45MDc1IDU1LjYxOTUgMzcuMDkzIDU0LjUzNDMgMzcuODcyMSA1My45NzU1QzM4LjIxMTIgNTMuNzM0MiAzOC41NDggNTMuNTAwNCAzOC44ODI3IDUzLjI3NDFIMjUuNzQ5NUMyMy42OTc1IDUzLjI3NDEgMjIuMDMwMyA1MS41MTQxIDIyLjAzMDMgNDkuMzQ4NFYyMi40NzQxQzIyLjAzMDMgMjAuMzEwNyAyMy42OTc1IDE4LjU1MDggMjUuNzQ5NSAxOC41NTA4SDc0LjA3MjNDNzYuMjc3NCAxOC43ODk2IDc3Ljc5MzkgMjAuNDczIDc3Ljc5MzkgMjIuNDc0MVY0OS4zNDg0Qzc3Ljc5MzkgNTEuNTE0MSA3Ni4xMjY3IDUzLjI3NDEgNzQuMDcyMyA1My4yNzQxSDYwLjkzNzRDNjEuMjcyOCA1My41MDEzIDYxLjYxMDEgNTMuNzM1OSA2MS45NDk2IDUzLjk3ODFDNjIuNzI4NyA1NC41MzQ2IDYyLjkxNDIgNTUuNjIyMSA2Mi4zNTMxIDU2LjQwMzZDNjIuMDE0NSA1Ni44Nzg5IDYxLjQ3ODkgNTcuMTMxNiA2MC45MzYzIDU3LjEzMTZDNjAuNTg4NSA1Ny4xMzE2IDYwLjIzMzcgNTcuMDI3MyA1OS45Mjc3IDU2LjgwN0M1Ny44NzUxIDU1LjM0MzIgNTUuOTE5OCA1NC4xODcxIDUzLjk2MzUgNTMuMjc0MVpNMjguNjQxNCAzMS4xOTQ4QzI4LjIwNzggMzEuMTk0OCAyNy43NzE4IDMxLjAzNDkgMjcuNDMzMyAzMC43MDc5QzI2Ljc0NDYgMzAuMDQyNCAyNi43MjM4IDI4LjkzODcgMjcuMzg5MiAyOC4yNDc3TDMwLjg5NzUgMjQuNjA5NkMzMS41Njc2IDIzLjkxODYgMzIuNjY2NyAyMy44OTc3IDMzLjM1NTQgMjQuNTY1NUMzNC4wNDY0IDI1LjIzMSAzNC4wNjcyIDI2LjMzMjQgMzMuNDAxOCAyNy4wMjM0TDI5Ljg5MzUgMzAuNjYzOUMyOS41NTI2IDMxLjAxNjMgMjkuMDk1OCAzMS4xOTQ4IDI4LjY0MTQgMzEuMTk0OFpNMjguNjQxMyAzOC41MDg5QzI4LjIxIDM4LjUwODkgMjcuNzc4NyAzOC4zNTEzIDI3LjQ0MDIgMzguMDI4OUMyNi43NDY5IDM3LjM2NTggMjYuNzE5MSAzNi4yNjQ0IDI3LjM4MjIgMzUuNTY4OEwzNy42MjQxIDI0LjgyMTNDMzguMjg1IDI0LjEyOCAzOS4zODY0IDI0LjA5MzMgNDAuMDg0MyAyNC43NjExQzQwLjc3NzYgMjUuNDI0MiA0MC44MDU1IDI2LjUyNTYgNDAuMTQyMyAyNy4yMjEzTDI5LjkwMDQgMzcuOTcxQzI5LjU1OTUgMzguMzI4MSAyOS4xMDA0IDM4LjUwODkgMjguNjQxMyAzOC41MDg5WiIgZmlsbD0iIzFBMUExQSIvPgo8L3N2Zz4%3D)\n' +
        '![Linea Blanca](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTkiIGhlaWdodD0iMTA2IiB2aWV3Qm94PSIwIDAgOTkgMTA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMy4zNDUxNCA5MS4xOTkyVjc5LjQyODNINC43MTM4NVY4OS45NTkzSDkuOTA2ODhWOTEuMTk5MkgzLjM0NTE0Wk0xMy4wNDY5IDkxLjE5OTJIMTEuNzEwNFY4Mi4zNzUxSDEzLjA0NjlWOTEuMTk5MlpNMTEuNjU0IDgxLjAwNjRDMTEuOTExNiA4MC42NzM2IDEyLjE4ODEgODAuMjcxIDEyLjQ4MzMgNzkuNzk4N0MxMi43ODM4IDc5LjMyNjQgMTMuMDIgNzguOTE1NyAxMy4xOTE4IDc4LjU2NjlIMTQuODE4MVY3OC43MzU5QzE0LjU4MiA3OS4wODQ4IDE0LjIzMDQgNzkuNTE0MiAxMy43NjM0IDgwLjAyNDFDMTMuMjk2NCA4MC41MzQgMTIuODkxMiA4MC45Mjg2IDEyLjU0NzcgODEuMjA3N0gxMS42NTRWODEuMDA2NFpNMjEuOTE5MyA5MS4xOTkyVjg1LjQ5MDlDMjEuOTE5MyA4NC43NzE3IDIxLjc1NTYgODQuMjM0OSAyMS40MjgyIDgzLjg4MDdDMjEuMTAwOCA4My41MjY0IDIwLjU4ODIgODMuMzQ5MyAxOS44OTA0IDgzLjM0OTNDMTguOTY3MiA4My4zNDkzIDE4LjI5MDkgODMuNTk4OSAxNy44NjE1IDg0LjA5OEMxNy40MzIxIDg0LjU5NzIgMTcuMjE3NCA4NS40MjExIDE3LjIxNzQgODYuNTY5OFY5MS4xOTkySDE1Ljg4MDlWODIuMzc1MUgxNi45Njc4TDE3LjE4NTIgODMuNTgyOEgxNy4yNDk2QzE3LjUyMzMgODMuMTQ4IDE3LjkwNzEgODIuODEyNSAxOC40MDA5IDgyLjU3NjRDMTguODk0NyA4Mi4zMzQ4IDE5LjQ0NDkgODIuMjE0MSAyMC4wNTE0IDgyLjIxNDFDMjEuMTE0MiA4Mi4yMTQxIDIxLjkxMzkgODIuNDcxNyAyMi40NTA3IDgyLjk4N0MyMi45ODc0IDgzLjQ5NjkgMjMuMjU1OCA4NC4zMTU0IDIzLjI1NTggODUuNDQyNlY5MS4xOTkySDIxLjkxOTNaTTI5LjczNyA5MS4zNjAyQzI4LjQzMjcgOTEuMzYwMiAyNy40MDIyIDkwLjk2MyAyNi42NDU0IDkwLjE2ODdDMjUuODkzOSA4OS4zNzQzIDI1LjUxODIgODguMjcxMyAyNS41MTgyIDg2Ljg1OTZDMjUuNTE4MiA4NS40MzcyIDI1Ljg2NzEgODQuMzA3NCAyNi41NjQ4IDgzLjQ3MDFDMjcuMjY4IDgyLjYzMjcgMjguMjEgODIuMjE0MSAyOS4zOTA4IDgyLjIxNDFDMzAuNDk2NSA4Mi4yMTQxIDMxLjM3MTQgODIuNTc5MSAzMi4wMTU1IDgzLjMwOUMzMi42NTk2IDg0LjAzMzYgMzIuOTgxNyA4NC45OTE3IDMyLjk4MTcgODYuMTgzM1Y4Ny4wMjg3SDI2LjkwM0MyNi45Mjk4IDg4LjA2NDYgMjcuMTkwMiA4OC44NTA5IDI3LjY4NCA4OS4zODc3QzI4LjE4MzEgODkuOTI0NCAyOC44ODM2IDkwLjE5MjggMjkuNzg1MyA5MC4xOTI4QzMwLjczNTQgOTAuMTkyOCAzMS42NzQ3IDg5Ljk5NDIgMzIuNjAzMyA4OS41OTdWOTAuNzg4NkMzMi4xMzA5IDkwLjk5MjYgMzEuNjgyNyA5MS4xMzc1IDMxLjI1ODcgOTEuMjIzNEMzMC44NCA5MS4zMTQ2IDMwLjMzMjggOTEuMzYwMiAyOS43MzcgOTEuMzYwMlpNMjkuMzc0NyA4My4zMzMyQzI4LjY2NjIgODMuMzMzMiAyOC4wOTk5IDgzLjU2NCAyNy42NzU5IDg0LjAyNTZDMjcuMjU3MyA4NC40ODcyIDI3LjAxMDMgODUuMTI1OSAyNi45MzUyIDg1Ljk0MThIMzEuNTQ4NUMzMS41NDg1IDg1LjA5OTEgMzEuMzYwNyA4NC40NTUgMzAuOTg1IDg0LjAwOTVDMzAuNjA5MiA4My41NTg2IDMwLjA3MjUgODMuMzMzMiAyOS4zNzQ3IDgzLjMzMzJaTTQwLjY5NDcgOTEuMTk5Mkw0MC40MjkgODkuOTQzMkg0MC4zNjQ2QzM5LjkyNDUgOTAuNDk2MSAzOS40ODQ0IDkwLjg3MTggMzkuMDQ0MiA5MS4wNzA0QzM4LjYwOTUgOTEuMjYzNiAzOC4wNjQ3IDkxLjM2MDIgMzcuNDA5OCA5MS4zNjAyQzM2LjUzNDkgOTEuMzYwMiAzNS44NDc5IDkxLjEzNDggMzUuMzQ4NyA5MC42ODM5QzM0Ljg1NDkgOTAuMjMzMSAzNC42MDggODkuNTkxNyAzNC42MDggODguNzU5N0MzNC42MDggODYuOTc3NyAzNi4wMzMxIDg2LjA0MzggMzguODgzMiA4NS45NTc5TDQwLjM4MDcgODUuOTA5NlY4NS4zNjIxQzQwLjM4MDcgODQuNjY5NyA0MC4yMzA0IDg0LjE1OTggMzkuOTI5OSA4My44MzI0QzM5LjYzNDcgODMuNDk5NiAzOS4xNTk2IDgzLjMzMzIgMzguNTA0OCA4My4zMzMyQzM3Ljc2OTUgODMuMzMzMiAzNi45Mzc1IDgzLjU1ODYgMzYuMDA4OSA4NC4wMDk1TDM1LjU5ODMgODIuOTg3QzM2LjAzMzEgODIuNzUwOCAzNi41MDgxIDgyLjU2NTYgMzcuMDIzNCA4Mi40MzE0QzM3LjU0NCA4Mi4yOTczIDM4LjA2NDcgODIuMjMwMiAzOC41ODUzIDgyLjIzMDJDMzkuNjM3MyA4Mi4yMzAyIDQwLjQxNTYgODIuNDYzNyA0MC45MjAyIDgyLjkzMDZDNDEuNDMwMSA4My4zOTc2IDQxLjY4NSA4NC4xNDY0IDQxLjY4NSA4NS4xNzY5VjkxLjE5OTJINDAuNjk0N1pNMzcuNjc1NSA5MC4yNTcyQzM4LjUwNzUgOTAuMjU3MiAzOS4xNTk2IDkwLjAyOTEgMzkuNjMyIDg5LjU3MjlDNDAuMTA5NyA4OS4xMTY2IDQwLjM0ODUgODguNDc3OSA0MC4zNDg1IDg3LjY1NjdWODYuODU5NkwzOS4wMTIgODYuOTE2QzM3Ljk0OTMgODYuOTUzNSAzNy4xODE3IDg3LjExOTkgMzYuNzA5NCA4Ny40MTUxQzM2LjI0MjQgODcuNzA1IDM2LjAwODkgODguMTU4NSAzNi4wMDg5IDg4Ljc3NThDMzYuMDA4OSA4OS4yNTg5IDM2LjE1MzggODkuNjI2NSAzNi40NDM3IDg5Ljg3ODhDMzYuNzM4OSA5MC4xMzExIDM3LjE0OTUgOTAuMjU3MiAzNy42NzU1IDkwLjI1NzJaTTUyLjgzNiA4Mi4yMzAyQzUzLjk5NTMgODIuMjMwMiA1NC44OTQ0IDgyLjYyNzQgNTUuNTMzMSA4My40MjE3QzU2LjE3NzIgODQuMjEwOCA1Ni40OTkzIDg1LjMyOTkgNTYuNDk5MyA4Ni43NzkxQzU2LjQ5OTMgODguMjI4MyA1Ni4xNzQ1IDg5LjM1NTUgNTUuNTI1MSA5MC4xNjA2QzU0Ljg4MSA5MC45NjA0IDUzLjk4NDYgOTEuMzYwMiA1Mi44MzYgOTEuMzYwMkM1Mi4yNjE2IDkxLjM2MDIgNTEuNzM1NiA5MS4yNTU2IDUxLjI1NzkgOTEuMDQ2MkM1MC43ODU2IDkwLjgzMTUgNTAuMzg4NCA5MC41MDQxIDUwLjA2NjMgOTAuMDY0SDQ5Ljk2OTdMNDkuNjg3OSA5MS4xOTkySDQ4LjcyOThWNzguNjcxNUg1MC4wNjYzVjgxLjcxNDlDNTAuMDY2MyA4Mi4zOTY2IDUwLjA0NDkgODMuMDA4NCA1MC4wMDE5IDgzLjU1MDZINTAuMDY2M0M1MC42ODkgODIuNjcwMyA1MS42MTIyIDgyLjIzMDIgNTIuODM2IDgyLjIzMDJaTTUyLjY0MjcgODMuMzQ5M0M1MS43MzAzIDgzLjM0OTMgNTEuMDcyNyA4My42MTIzIDUwLjY3MDIgODQuMTM4M0M1MC4yNjc2IDg0LjY1ODkgNTAuMDY2MyA4NS41MzkyIDUwLjA2NjMgODYuNzc5MUM1MC4wNjYzIDg4LjAxOSA1MC4yNzMgODguOTA3MyA1MC42ODYzIDg5LjQ0NDFDNTEuMDk5NiA4OS45NzU0IDUxLjc2MjUgOTAuMjQxMSA1Mi42NzQ5IDkwLjI0MTFDNTMuNDk2MiA5MC4yNDExIDU0LjEwOCA4OS45NDMyIDU0LjUxMDYgODkuMzQ3NEM1NC45MTMyIDg4Ljc0NjMgNTUuMTE0NSA4Ny44ODQ4IDU1LjExNDUgODYuNzYzQzU1LjExNDUgODUuNjE0NCA1NC45MTMyIDg0Ljc1ODIgNTQuNTEwNiA4NC4xOTQ3QzU0LjEwOCA4My42MzExIDUzLjQ4NTQgODMuMzQ5MyA1Mi42NDI3IDgzLjM0OTNaTTYwLjE3ODcgOTEuMTk5Mkg1OC44NDIyVjc4LjY3MTVINjAuMTc4N1Y5MS4xOTkyWk02OC40MzkyIDkxLjE5OTJMNjguMTczNSA4OS45NDMySDY4LjEwOTFDNjcuNjY5IDkwLjQ5NjEgNjcuMjI4OCA5MC44NzE4IDY2Ljc4ODcgOTEuMDcwNEM2Ni4zNTM5IDkxLjI2MzYgNjUuODA5MSA5MS4zNjAyIDY1LjE1NDMgOTEuMzYwMkM2NC4yNzk0IDkxLjM2MDIgNjMuNTkyNCA5MS4xMzQ4IDYzLjA5MzIgOTAuNjgzOUM2Mi41OTk0IDkwLjIzMzEgNjIuMzUyNSA4OS41OTE3IDYyLjM1MjUgODguNzU5N0M2Mi4zNTI1IDg2Ljk3NzcgNjMuNzc3NiA4Ni4wNDM4IDY2LjYyNzcgODUuOTU3OUw2OC4xMjUyIDg1LjkwOTZWODUuMzYyMUM2OC4xMjUyIDg0LjY2OTcgNjcuOTc0OSA4NC4xNTk4IDY3LjY3NDMgODMuODMyNEM2Ny4zNzkxIDgzLjQ5OTYgNjYuOTA0MSA4My4zMzMyIDY2LjI0OTMgODMuMzMzMkM2NS41MTM5IDgzLjMzMzIgNjQuNjgyIDgzLjU1ODYgNjMuNzUzNCA4NC4wMDk1TDYzLjM0MjggODIuOTg3QzYzLjc3NzYgODIuNzUwOCA2NC4yNTI2IDgyLjU2NTYgNjQuNzY3OSA4Mi40MzE0QzY1LjI4ODUgODIuMjk3MyA2NS44MDkxIDgyLjIzMDIgNjYuMzI5OCA4Mi4yMzAyQzY3LjM4MTggODIuMjMwMiA2OC4xNjAxIDgyLjQ2MzcgNjguNjY0NiA4Mi45MzA2QzY5LjE3NDYgODMuMzk3NiA2OS40Mjk1IDg0LjE0NjQgNjkuNDI5NSA4NS4xNzY5VjkxLjE5OTJINjguNDM5MlpNNjUuNDIgOTAuMjU3MkM2Ni4yNTIgOTAuMjU3MiA2Ni45MDQxIDkwLjAyOTEgNjcuMzc2NSA4OS41NzI5QzY3Ljg1NDIgODkuMTE2NiA2OC4wOTMgODguNDc3OSA2OC4wOTMgODcuNjU2N1Y4Ni44NTk2TDY2Ljc1NjUgODYuOTE2QzY1LjY5MzcgODYuOTUzNSA2NC45MjYyIDg3LjExOTkgNjQuNDUzOSA4Ny40MTUxQzYzLjk4NjkgODcuNzA1IDYzLjc1MzQgODguMTU4NSA2My43NTM0IDg4Ljc3NThDNjMuNzUzNCA4OS4yNTg5IDYzLjg5ODMgODkuNjI2NSA2NC4xODgyIDg5Ljg3ODhDNjQuNDgzNCA5MC4xMzExIDY0Ljg5NCA5MC4yNTcyIDY1LjQyIDkwLjI1NzJaTTc4LjIyOTUgOTEuMTk5MlY4NS40OTA5Qzc4LjIyOTUgODQuNzcxNyA3OC4wNjU4IDg0LjIzNDkgNzcuNzM4NCA4My44ODA3Qzc3LjQxMDkgODMuNTI2NCA3Ni44OTg0IDgzLjM0OTMgNzYuMjAwNiA4My4zNDkzQzc1LjI3NzQgODMuMzQ5MyA3NC42MDExIDgzLjU5ODkgNzQuMTcxNyA4NC4wOThDNzMuNzQyMyA4NC41OTcyIDczLjUyNzYgODUuNDIxMSA3My41Mjc2IDg2LjU2OThWOTEuMTk5Mkg3Mi4xOTExVjgyLjM3NTFINzMuMjc4TDczLjQ5NTQgODMuNTgyOEg3My41NTk4QzczLjgzMzUgODMuMTQ4IDc0LjIxNzMgODIuODEyNSA3NC43MTExIDgyLjU3NjRDNzUuMjA0OSA4Mi4zMzQ4IDc1Ljc1NTEgODIuMjE0MSA3Ni4zNjE2IDgyLjIxNDFDNzcuNDI0NCA4Mi4yMTQxIDc4LjIyNDEgODIuNDcxNyA3OC43NjA5IDgyLjk4N0M3OS4yOTc2IDgzLjQ5NjkgNzkuNTY2IDg0LjMxNTQgNzkuNTY2IDg1LjQ0MjZWOTEuMTk5Mkg3OC4yMjk1Wk04NS44NDU5IDkxLjM2MDJDODQuNTY4NSA5MS4zNjAyIDgzLjU3ODIgOTAuOTY4NCA4Mi44NzUgOTAuMTg0OEM4Mi4xNzczIDg5LjM5NTcgODEuODI4NCA4OC4yODIgODEuODI4NCA4Ni44NDM1QzgxLjgyODQgODUuMzY3NSA4Mi4xODI2IDg0LjIyNjkgODIuODkxMSA4My40MjE3QzgzLjYwNSA4Mi42MTY2IDg0LjYxOTUgODIuMjE0MSA4NS45MzQ1IDgyLjIxNDFDODYuMzU4NSA4Mi4yMTQxIDg2Ljc4MjYgODIuMjU5NyA4Ny4yMDY2IDgyLjM1MDlDODcuNjMwNiA4Mi40NDIyIDg3Ljk2MzQgODIuNTQ5NSA4OC4yMDQ5IDgyLjY3M0w4Ny43OTQzIDgzLjgwODJDODcuNDk5MSA4My42OTAxIDg3LjE3NzEgODMuNTkzNSA4Ni44MjgyIDgzLjUxODRDODYuNDc5MyA4My40Mzc4IDg2LjE3MDcgODMuMzk3NiA4NS45MDIzIDgzLjM5NzZDODQuMTA5NiA4My4zOTc2IDgzLjIxMzIgODQuNTQwOSA4My4yMTMyIDg2LjgyNzRDODMuMjEzMiA4Ny45MTE2IDgzLjQzMDYgODguNzQzNiA4My44NjUzIDg5LjMyMzNDODQuMzA1NSA4OS45MDMgODQuOTU0OSA5MC4xOTI4IDg1LjgxMzcgOTAuMTkyOEM4Ni41NDkxIDkwLjE5MjggODcuMzAzMiA5MC4wMzQ1IDg4LjA3NjEgODkuNzE3OFY5MC45MDEzQzg3LjQ4NTcgOTEuMjA3MyA4Ni43NDIzIDkxLjM2MDIgODUuODQ1OSA5MS4zNjAyWk05NS42MDQgOTEuMTk5Mkw5NS4zMzgzIDg5Ljk0MzJIOTUuMjczOUM5NC44MzM4IDkwLjQ5NjEgOTQuMzkzNiA5MC44NzE4IDkzLjk1MzUgOTEuMDcwNEM5My41MTg4IDkxLjI2MzYgOTIuOTc0IDkxLjM2MDIgOTIuMzE5MSA5MS4zNjAyQzkxLjQ0NDIgOTEuMzYwMiA5MC43NTcyIDkxLjEzNDggOTAuMjU4IDkwLjY4MzlDODkuNzY0MiA5MC4yMzMxIDg5LjUxNzMgODkuNTkxNyA4OS41MTczIDg4Ljc1OTdDODkuNTE3MyA4Ni45Nzc3IDkwLjk0MjQgODYuMDQzOCA5My43OTI1IDg1Ljk1NzlMOTUuMjkgODUuOTA5NlY4NS4zNjIxQzk1LjI5IDg0LjY2OTcgOTUuMTM5NyA4NC4xNTk4IDk0LjgzOTEgODMuODMyNEM5NC41NDM5IDgzLjQ5OTYgOTQuMDY4OSA4My4zMzMyIDkzLjQxNDEgODMuMzMzMkM5Mi42Nzg3IDgzLjMzMzIgOTEuODQ2OCA4My41NTg2IDkwLjkxODIgODQuMDA5NUw5MC41MDc2IDgyLjk4N0M5MC45NDI0IDgyLjc1MDggOTEuNDE3NCA4Mi41NjU2IDkxLjkzMjcgODIuNDMxNEM5Mi40NTMzIDgyLjI5NzMgOTIuOTc0IDgyLjIzMDIgOTMuNDk0NiA4Mi4yMzAyQzk0LjU0NjYgODIuMjMwMiA5NS4zMjQ5IDgyLjQ2MzcgOTUuODI5NCA4Mi45MzA2Qzk2LjMzOTQgODMuMzk3NiA5Ni41OTQzIDg0LjE0NjQgOTYuNTk0MyA4NS4xNzY5VjkxLjE5OTJIOTUuNjA0Wk05Mi41ODQ4IDkwLjI1NzJDOTMuNDE2OCA5MC4yNTcyIDk0LjA2ODkgOTAuMDI5MSA5NC41NDEzIDg5LjU3MjlDOTUuMDE5IDg5LjExNjYgOTUuMjU3OCA4OC40Nzc5IDk1LjI1NzggODcuNjU2N1Y4Ni44NTk2TDkzLjkyMTMgODYuOTE2QzkyLjg1ODYgODYuOTUzNSA5Mi4wOTEgODcuMTE5OSA5MS42MTg3IDg3LjQxNTFDOTEuMTUxNyA4Ny43MDUgOTAuOTE4MiA4OC4xNTg1IDkwLjkxODIgODguNzc1OEM5MC45MTgyIDg5LjI1ODkgOTEuMDYzMSA4OS42MjY1IDkxLjM1MyA4OS44Nzg4QzkxLjY0ODIgOTAuMTMxMSA5Mi4wNTg4IDkwLjI1NzIgOTIuNTg0OCA5MC4yNTcyWiIgZmlsbD0iIzFBMUExQSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY5LjYyNzYgOS4yNzUzOUgyOC44NTdDMjYuMzU1MSA5LjI3NTM5IDI0LjMyNjIgMTEuMzE1OSAyNC4zMjYyIDEzLjgzMTdWNTkuMzkyOUMyNC4zMjYyIDYxLjkwODcgMjYuMzU1MSA2My45NDkyIDI4Ljg1NyA2My45NDkySDY5LjYyNzZDNzIuMTI5NSA2My45NDkyIDc0LjE1ODQgNjEuOTA4NyA3NC4xNTg0IDU5LjM5MjlWMTMuODMxN0M3NC4xNTg0IDExLjMxNTkgNzIuMTI5NSA5LjI3NTM5IDY5LjYyNzYgOS4yNzUzOVpNNzAuNDM0OSA2MC4yMjc2SDI4LjA0ODFWMjcuMTIyMkg3MC40MzQ5VjYwLjIyNzZaTTcwLjQzNDkgMjMuMjE5N0gyOC4wNDgxVjEyLjk5NDdINzAuNDM0OVYyMy4yMTk3Wk02MC41MTgzIDIwLjU0ODdDNTkuMjY4NSAyMC41NDg3IDU4LjI1MjggMTkuNjQ5IDU4LjI1MjggMTguNTM4M0M1OC4yNTI4IDE3LjQyNzcgNTkuMjY4NSAxNi41MzAzIDYwLjUxODMgMTYuNTMwM0g2NS4xNjc0QzY2LjQxNzIgMTYuNTMwMyA2Ny40MzA1IDE3LjQyNzcgNjcuNDMwNSAxOC41MzgzQzY3LjQzMDUgMTkuNjQ5IDY2LjQxNzIgMjAuNTQ4NyA2NS4xNjc0IDIwLjU0ODdINjAuNTE4M1pNNTMuNzE2MSAyMC41NDg3QzUyLjYyODYgMjAuNTQ4NyA1MS43NDk4IDE5LjY0OSA1MS43NDk4IDE4LjUzODNDNTEuNzQ5OCAxNy40Mjc3IDUyLjYyODYgMTYuNTMwMyA1My43MTYxIDE2LjUzMDNDNTQuODAxMiAxNi41MzAzIDU1LjY4MjQgMTcuNDI3NyA1NS42ODI0IDE4LjUzODNDNTUuNjgyNCAxOS42NDkgNTQuODAxMiAyMC41NDg3IDUzLjcxNjEgMjAuNTQ4N1pNNDcuMDI2NyAyMC41NDg3QzQ1LjkzOTIgMjAuNTQ4NyA0NS4wNjA0IDE5LjY0OSA0NS4wNjA0IDE4LjUzODNDNDUuMDYwNCAxNy40Mjc3IDQ1LjkzOTIgMTYuNTMwMyA0Ny4wMjY3IDE2LjUzMDNDNDguMTExOCAxNi41MzAzIDQ4Ljk5MyAxNy40Mjc3IDQ4Ljk5MyAxOC41MzgzQzQ4Ljk5MyAxOS42NDkgNDguMTExOCAyMC41NDg3IDQ3LjAyNjcgMjAuNTQ4N1pNNDIuODc3NiA1MS44Mjk1QzQ3LjA5NzcgNTUuMjY1OSA1My4zNjc2IDU0LjU1NCA1Ni44ODUxIDUwLjIzODhDNjAuNDAwNCA0NS45MjM3IDU5LjgyNzYgMzkuNjM3NSA1NS42MDUyIDM2LjIwMTFDNTEuMzg1MSAzMi43NjI0IDQ1LjExNTIgMzMuNDc2NiA0MS41OTk5IDM3Ljc4OTVDMzguMDg3IDQyLjEwNyAzOC42NTc0IDQ4LjM5MzEgNDIuODc3NiA1MS44Mjk1Wk00MC40NjY5IDU0Ljc4OTJDMzQuNjQ2OCA1MC4wNDk3IDMzLjg1ODQgNDEuMzg0NSAzOC43MDQ2IDM1LjQzNDZDNDMuNTUwOCAyOS40ODI0IDUyLjE5OTggMjguNTAxNSA1OC4wMTc1IDMzLjI0MTFDNjMuODM3NiAzNy45ODA2IDY0LjYyODMgNDYuNjQ4MSA1OS43Nzk4IDUyLjU5OEM1NC45MzM2IDU4LjU0NzkgNDYuMjg5MyA1OS41Mjg3IDQwLjQ2NjkgNTQuNzg5MlpNNDguNDM3NiAzNy4wNjc4QzQ5LjU0MTQgMzcuMDY3OCA1MC40MzQxIDM3Ljk4MTQgNTAuNDM0MSAzOS4xMDgzQzUwLjQzNDEgNDAuMjM1MiA0OS41NDE0IDQxLjE1MTEgNDguNDM3NiA0MS4xNTExQzQ3LjMzMzkgNDEuMTUxMSA0Ni40NDEyIDQyLjA2NDcgNDYuNDQxMiA0My4xOTM5QzQ2LjQ0MTIgNDQuMzIwOCA0NS41NDg1IDQ1LjIzMjEgNDQuNDQ0OCA0NS4yMzIxQzQzLjM0MzMgNDUuMjMyMSA0Mi40NDgzIDQ0LjMyMDggNDIuNDQ4MyA0My4xOTM5QzQyLjQ0ODMgMzkuODEwOSA0NS4xMjg4IDM3LjA2NzggNDguNDM3NiAzNy4wNjc4WiIgZmlsbD0iIzFBMUExQSIvPgo8L3N2Zz4%3D)\n' +
        '![Muebles](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTkiIGhlaWdodD0iMTA2IiB2aWV3Qm94PSIwIDAgOTkgMTA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjMuNzg5OCA5MS4xOTkyTDE5Ljc5NjQgODAuNzY0OEgxOS43MzJDMTkuODA3MiA4MS41OTE0IDE5Ljg0NDcgODIuNTczNyAxOS44NDQ3IDgzLjcxMTZWOTEuMTk5MkgxOC41ODA3Vjc5LjQyODNIMjAuNjQxOEwyNC4zNjk1IDg5LjEzODFIMjQuNDMzOUwyOC4xOTM5IDc5LjQyODNIMzAuMjM4OVY5MS4xOTkySDI4Ljg3MDJWODMuNjE1QzI4Ljg3MDIgODIuNzQ1NCAyOC45MDc3IDgxLjgwMDggMjguOTgyOSA4MC43ODA5SDI4LjkxODVMMjQuODkyOSA5MS4xOTkySDIzLjc4OThaTTM0LjUzMDIgODIuMzc1MVY4OC4wOTk1QzM0LjUzMDIgODguODE4NyAzNC42OTM5IDg5LjM1NTUgMzUuMDIxMyA4OS43MDk3QzM1LjM0ODcgOTAuMDY0IDM1Ljg2MTMgOTAuMjQxMSAzNi41NTkxIDkwLjI0MTFDMzcuNDgyMyA5MC4yNDExIDM4LjE1NTkgODkuOTg4OSAzOC41Nzk5IDg5LjQ4NDNDMzkuMDA5MyA4OC45Nzk4IDM5LjIyNCA4OC4xNTU5IDM5LjIyNCA4Ny4wMTI2VjgyLjM3NTFINDAuNTYwNVY5MS4xOTkySDM5LjQ1NzVMMzkuMjY0MyA5MC4wMTU3SDM5LjE5MThDMzguOTE4MSA5MC40NTA1IDM4LjUzNyA5MC43ODMyIDM4LjA0ODUgOTEuMDE0QzM3LjU2NTUgOTEuMjQ0OCAzNy4wMTI2IDkxLjM2MDIgMzYuMzkgOTEuMzYwMkMzNS4zMTY1IDkxLjM2MDIgMzQuNTExNCA5MS4xMDUzIDMzLjk3NDYgOTAuNTk1NEMzMy40NDMzIDkwLjA4NTUgMzMuMTc3NiA4OS4yNjk2IDMzLjE3NzYgODguMTQ3OFY4Mi4zNzUxSDM0LjUzMDJaTTQ3LjEzMDMgOTEuMzYwMkM0NS44MjYgOTEuMzYwMiA0NC43OTU1IDkwLjk2MyA0NC4wMzg2IDkwLjE2ODdDNDMuMjg3MiA4OS4zNzQzIDQyLjkxMTUgODguMjcxMyA0Mi45MTE1IDg2Ljg1OTZDNDIuOTExNSA4NS40MzcyIDQzLjI2MDQgODQuMzA3NCA0My45NTgxIDgzLjQ3MDFDNDQuNjYxMyA4Mi42MzI3IDQ1LjYwMzMgODIuMjE0MSA0Ni43ODQxIDgyLjIxNDFDNDcuODg5OCA4Mi4yMTQxIDQ4Ljc2NDcgODIuNTc5MSA0OS40MDg4IDgzLjMwOUM1MC4wNTI5IDg0LjAzMzYgNTAuMzc1IDg0Ljk5MTcgNTAuMzc1IDg2LjE4MzNWODcuMDI4N0g0NC4yOTYzQzQ0LjMyMzEgODguMDY0NiA0NC41ODM0IDg4Ljg1MDkgNDUuMDc3MyA4OS4zODc3QzQ1LjU3NjQgODkuOTI0NCA0Ni4yNzY5IDkwLjE5MjggNDcuMTc4NiA5MC4xOTI4QzQ4LjEyODcgOTAuMTkyOCA0OS4wNjggODkuOTk0MiA0OS45OTY1IDg5LjU5N1Y5MC43ODg2QzQ5LjUyNDIgOTAuOTkyNiA0OS4wNzYgOTEuMTM3NSA0OC42NTIgOTEuMjIzNEM0OC4yMzMzIDkxLjMxNDYgNDcuNzI2MSA5MS4zNjAyIDQ3LjEzMDMgOTEuMzYwMlpNNDYuNzY4IDgzLjMzMzJDNDYuMDU5NSA4My4zMzMyIDQ1LjQ5MzIgODMuNTY0IDQ1LjA2OTIgODQuMDI1NkM0NC42NTA1IDg0LjQ4NzIgNDQuNDAzNiA4NS4xMjU5IDQ0LjMyODUgODUuOTQxOEg0OC45NDE4QzQ4Ljk0MTggODUuMDk5MSA0OC43NTQgODQuNDU1IDQ4LjM3ODMgODQuMDA5NUM0OC4wMDI1IDgzLjU1ODYgNDcuNDY1OCA4My4zMzMyIDQ2Ljc2OCA4My4zMzMyWk01Ni43Njc2IDgyLjIzMDJDNTcuOTI3IDgyLjIzMDIgNTguODI2IDgyLjYyNzQgNTkuNDY0OCA4My40MjE3QzYwLjEwODkgODQuMjEwOCA2MC40MzA5IDg1LjMyOTkgNjAuNDMwOSA4Ni43NzkxQzYwLjQzMDkgODguMjI4MyA2MC4xMDYyIDg5LjM1NTUgNTkuNDU2NyA5MC4xNjA2QzU4LjgxMjYgOTAuOTYwNCA1Ny45MTYzIDkxLjM2MDIgNTYuNzY3NiA5MS4zNjAyQzU2LjE5MzMgOTEuMzYwMiA1NS42NjczIDkxLjI1NTYgNTUuMTg5NiA5MS4wNDYyQzU0LjcxNzIgOTAuODMxNSA1NC4zMjAxIDkwLjUwNDEgNTMuOTk4IDkwLjA2NEg1My45MDE0TDUzLjYxOTYgOTEuMTk5Mkg1Mi42NjE1Vjc4LjY3MTVINTMuOTk4VjgxLjcxNDlDNTMuOTk4IDgyLjM5NjYgNTMuOTc2NSA4My4wMDg0IDUzLjkzMzYgODMuNTUwNkg1My45OThDNTQuNjIwNiA4Mi42NzAzIDU1LjU0MzggODIuMjMwMiA1Ni43Njc2IDgyLjIzMDJaTTU2LjU3NDQgODMuMzQ5M0M1NS42NjE5IDgzLjM0OTMgNTUuMDA0NCA4My42MTIzIDU0LjYwMTggODQuMTM4M0M1NC4xOTkzIDg0LjY1ODkgNTMuOTk4IDg1LjUzOTIgNTMuOTk4IDg2Ljc3OTFDNTMuOTk4IDg4LjAxOSA1NC4yMDQ3IDg4LjkwNzMgNTQuNjE3OSA4OS40NDQxQzU1LjAzMTIgODkuOTc1NCA1NS42OTQxIDkwLjI0MTEgNTYuNjA2NiA5MC4yNDExQzU3LjQyNzggOTAuMjQxMSA1OC4wMzk3IDg5Ljk0MzIgNTguNDQyMyA4OS4zNDc0QzU4Ljg0NDggODguNzQ2MyA1OS4wNDYxIDg3Ljg4NDggNTkuMDQ2MSA4Ni43NjNDNTkuMDQ2MSA4NS42MTQ0IDU4Ljg0NDggODQuNzU4MiA1OC40NDIzIDg0LjE5NDdDNTguMDM5NyA4My42MzExIDU3LjQxNzEgODMuMzQ5MyA1Ni41NzQ0IDgzLjM0OTNaTTY0LjExMDMgOTEuMTk5Mkg2Mi43NzM4Vjc4LjY3MTVINjQuMTEwM1Y5MS4xOTkyWk03MC42NzIxIDkxLjM2MDJDNjkuMzY3OCA5MS4zNjAyIDY4LjMzNzIgOTAuOTYzIDY3LjU4MDQgOTAuMTY4N0M2Ni44MjkgODkuMzc0MyA2Ni40NTMyIDg4LjI3MTMgNjYuNDUzMiA4Ni44NTk2QzY2LjQ1MzIgODUuNDM3MiA2Ni44MDIxIDg0LjMwNzQgNjcuNDk5OSA4My40NzAxQzY4LjIwMyA4Mi42MzI3IDY5LjE0NSA4Mi4yMTQxIDcwLjMyNTkgODIuMjE0MUM3MS40MzE2IDgyLjIxNDEgNzIuMzA2NSA4Mi41NzkxIDcyLjk1MDYgODMuMzA5QzczLjU5NDcgODQuMDMzNiA3My45MTY3IDg0Ljk5MTcgNzMuOTE2NyA4Ni4xODMzVjg3LjAyODdINjcuODM4QzY3Ljg2NDkgODguMDY0NiA2OC4xMjUyIDg4Ljg1MDkgNjguNjE5IDg5LjM4NzdDNjkuMTE4MiA4OS45MjQ0IDY5LjgxODYgOTAuMTkyOCA3MC43MjA0IDkwLjE5MjhDNzEuNjcwNCA5MC4xOTI4IDcyLjYwOTcgODkuOTk0MiA3My41MzgzIDg5LjU5N1Y5MC43ODg2QzczLjA2NiA5MC45OTI2IDcyLjYxNzggOTEuMTM3NSA3Mi4xOTM3IDkxLjIyMzRDNzEuNzc1MSA5MS4zMTQ2IDcxLjI2NzkgOTEuMzYwMiA3MC42NzIxIDkxLjM2MDJaTTcwLjMwOTggODMuMzMzMkM2OS42MDEzIDgzLjMzMzIgNjkuMDM1IDgzLjU2NCA2OC42MTEgODQuMDI1NkM2OC4xOTIzIDg0LjQ4NzIgNjcuOTQ1NCA4NS4xMjU5IDY3Ljg3MDIgODUuOTQxOEg3Mi40ODM2QzcyLjQ4MzYgODUuMDk5MSA3Mi4yOTU3IDg0LjQ1NSA3MS45MiA4NC4wMDk1QzcxLjU0NDMgODMuNTU4NiA3MS4wMDc1IDgzLjMzMzIgNzAuMzA5OCA4My4zMzMyWk04MS44OTU1IDg4Ljc5MTlDODEuODk1NSA4OS42MTMxIDgxLjU4OTUgOTAuMjQ2NSA4MC45Nzc2IDkwLjY5MkM4MC4zNjU3IDkxLjEzNzUgNzkuNTA2OSA5MS4zNjAyIDc4LjQwMTIgOTEuMzYwMkM3Ny4yMzExIDkxLjM2MDIgNzYuMzE4NyA5MS4xNzUxIDc1LjY2MzggOTAuODA0N1Y4OS41NjQ4Qzc2LjA4NzkgODkuNzc5NSA3Ni41NDE0IDg5Ljk0ODYgNzcuMDI0NSA5MC4wNzJDNzcuNTEyOSA5MC4xOTU1IDc3Ljk4MjYgOTAuMjU3MiA3OC40MzM0IDkwLjI1NzJDNzkuMTMxMiA5MC4yNTcyIDc5LjY2OCA5MC4xNDcyIDgwLjA0MzcgODkuOTI3MUM4MC40MTk0IDg5LjcwMTcgODAuNjA3MyA4OS4zNjA5IDgwLjYwNzMgODguOTA0NkM4MC42MDczIDg4LjU2MTEgODAuNDU3IDg4LjI2ODYgODAuMTU2NCA4OC4wMjdDNzkuODYxMiA4Ny43ODAxIDc5LjI4MTUgODcuNDkwMyA3OC40MTczIDg3LjE1NzVDNzcuNTk2MSA4Ni44NTE2IDc3LjAxMTEgODYuNTg1OSA3Ni42NjIyIDg2LjM2MDRDNzYuMzE4NyA4Ni4xMjk2IDc2LjA2MSA4NS44NjkzIDc1Ljg4OTMgODUuNTc5NUM3NS43MjI5IDg1LjI4OTYgNzUuNjM5NyA4NC45NDM0IDc1LjYzOTcgODQuNTQwOUM3NS42Mzk3IDgzLjgyMTYgNzUuOTMyMiA4My4yNTU0IDc2LjUxNzMgODIuODQyMUM3Ny4xMDIzIDgyLjQyMzQgNzcuOTA0NyA4Mi4yMTQxIDc4LjkyNDYgODIuMjE0MUM3OS44NzQ2IDgyLjIxNDEgODAuODAzMiA4Mi40MDczIDgxLjcxMDMgODIuNzkzOEw4MS4yMzUzIDgzLjg4MDdDODAuMzQ5NiA4My41MTU3IDc5LjU0NzIgODMuMzMzMiA3OC44Mjc5IDgzLjMzMzJDNzguMTk0NiA4My4zMzMyIDc3LjcxNjkgODMuNDMyNSA3Ny4zOTQ4IDgzLjYzMTFDNzcuMDcyOCA4My44Mjk3IDc2LjkxMTggODQuMTAzNCA3Ni45MTE4IDg0LjQ1MjNDNzYuOTExOCA4NC42ODg1IDc2Ljk3MDggODQuODg5OCA3Ny4wODg5IDg1LjA1NjFDNzcuMjEyMyA4NS4yMjI1IDc3LjQwODMgODUuMzgwOSA3Ny42NzY2IDg1LjUzMTJDNzcuOTQ1IDg1LjY4MTUgNzguNDYwMyA4NS44OTg4IDc5LjIyMjUgODYuMTgzM0M4MC4yNjkxIDg2LjU2NDQgODAuOTc0OSA4Ni45NDgyIDgxLjMzOTkgODcuMzM0NkM4MS43MTAzIDg3LjcyMTEgODEuODk1NSA4OC4yMDY5IDgxLjg5NTUgODguNzkxOVoiIGZpbGw9IiMxQTFBMUEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS40MDg4IDkuMjc1MzlIMjguMTA3MkMyNC43NjQ0IDkuMjc1MzkgMjEuOTg1NyAxMi4xMjEzIDIxLjk4NTcgMTUuNTUyMlYzMS44NDU2QzIxLjk4NTUgMzEuODU4IDIxLjk4NTQgMzEuODcwNCAyMS45ODU0IDMxLjg4MjhDMjEuOTg1NCAzMS44OTUzIDIxLjk4NTUgMzEuOTA3NyAyMS45ODU3IDMxLjkyVjQ4LjA5MTNDMjEuOTg1NyA1MC42MjEzIDIzLjUyMTggNTIuODE3MiAyNS43NDQ5IDUzLjc0MzhDMjUuNzQxMyA1My43ODkyIDI1LjczOTUgNTMuODM1MSAyNS43Mzk1IDUzLjg4MTRWNjEuMzg5NUMyNS43Mzk1IDYzLjI5MDUgMjcuMTQ1NyA2NC42OTM3IDI5LjA0MzcgNjQuNjkzN0gzMC40NTEyQzMyLjI4MTkgNjQuNjkzNyAzMy42NTI0IDYzLjM5MTQgMzMuNzQ5OSA2MS41OTU1TDM1LjI4NCA1NC4yMzYzQzM1LjI4NTYgNTQuMjI4NCAzNS4yODcyIDU0LjIyMDYgMzUuMjg4NyA1NC4yMTI4SDYyLjA2NzhDNjIuMDY5MyA1NC4yMjA2IDYyLjA3MDkgNTQuMjI4NCA2Mi4wNzI1IDU0LjIzNjNMNjMuNjA2NiA2MS41OTU0QzYzLjcwMzkgNjMuMzkxNyA2NS4wNzI3IDY0LjY5MzcgNjYuOTA1MyA2NC42OTM3SDY4LjMxMjhDNzAuMjEwOCA2NC42OTM3IDcxLjYxNyA2My4yOTA1IDcxLjYxNyA2MS4zODk1VjUzLjg4MTRDNzEuNjE3IDUzLjg1NTIgNzEuNjE2NCA1My44MjkyIDcxLjYxNTIgNTMuODAzNEM3My44OTM3IDUyLjkyNDIgNzUuNTI4IDUwLjcyMDQgNzUuNTI4IDQ4LjA5MTNWMTUuMzk2OUM3NS41MjggMTIuMDQyNCA3Mi44MyA5LjI3NTM5IDY5LjQwODggOS4yNzUzOVpNNjguMTM4OCA1NC4yMTI4SDY1LjYyMDVMNjcuMDQyNiA2MS4wMzQ2TDY3LjA2MTIgNjEuMjE1Nkg2OC4xMzg4VjU0LjIxMjhaTTMxLjczNiA1NC4yMTI4SDI5LjIxNzZWNjEuMjE1NkgzMC4yOTUyTDMwLjMxMzkgNjEuMDM0NkwzMS43MzYgNTQuMjEyOFpNMjUuNDYzNSA0OC4wOTA5VjMzLjYyMTlINzIuMDQ5NVY0OC4wOTA5QzcyLjA0OTUgNDkuNTcxNyA3MC44NTg1IDUwLjczNDIgNjkuNDA4NCA1MC43MzQySDI4LjEwNjlDMjYuNjI1OCA1MC43MzQyIDI1LjQ2MzUgNDkuNTQzMSAyNS40NjM1IDQ4LjA5MDlaTTI1LjQ2MzUgMzAuMTQzN0g3Mi4wNDk1VjE1LjM5NjVDNzIuMDQ5NSAxMy45NDM1IDcwLjg4ODggMTIuNzUzMSA2OS40MDg0IDEyLjc1MzFIMjguMTA2OUMyNi43MDM4IDEyLjc1MzEgMjUuNDYzNSAxNC4wMjM1IDI1LjQ2MzUgMTUuNTUxOVYzMC4xNDM3Wk00MS4wODk3IDE5Ljk0ODZINTYuNTc5QzU3LjUzOTQgMTkuOTQ4NiA1OC4zMTggMTkuMTcgNTguMzE4IDE4LjIwOTVDNTguMzE4IDE3LjI0OTEgNTcuNTM5NCAxNi40NzA1IDU2LjU3OSAxNi40NzA1SDQxLjA4OTdDNDAuMTI5MyAxNi40NzA1IDM5LjM1MDcgMTcuMjQ5MSAzOS4zNTA3IDE4LjIwOTVDMzkuMzUwNyAxOS4xNyA0MC4xMjkzIDE5Ljk0ODYgNDEuMDg5NyAxOS45NDg2Wk01Ni41NzkgNDAuNjAxMUg0MS4wODk3QzQwLjEyOTMgNDAuNjAxMSAzOS4zNTA3IDM5LjgyMjUgMzkuMzUwNyAzOC44NjIxQzM5LjM1MDcgMzcuOTAxNiA0MC4xMjkzIDM3LjEyMyA0MS4wODk3IDM3LjEyM0g1Ni41NzlDNTcuNTM5NCAzNy4xMjMgNTguMzE4IDM3LjkwMTYgNTguMzE4IDM4Ljg2MjFDNTguMzE4IDM5LjgyMjUgNTcuNTM5NCA0MC42MDExIDU2LjU3OSA0MC42MDExWiIgZmlsbD0iIzFBMUExQSIvPgo8L3N2Zz4%3D)\n' +
        '\n' +
        '> ## Plazos a tener en cuenta\n' +
        '>\n' +
        '> ### ¿Hasta cuándo puedo acceder al servicio técnico?\n' +
        '>\n' +
        '> Siempre que tu producto se encuentre dentro del plazo de la garantía mínima legal o convencional, puedes solicitar el servicio técnico en caso de fallas. Cuando no estás dentro de ese plazo, puedes llevarlo directamente al servicio técnico, pero con un costo adicional. No nos hacemos responsables de los envíos de estos productos.\n' +
        '>\n' +
        '> ### ¿Cuánto tiempo permanece el producto en el servicio técnico?\n' +
        '>\n' +
        '> En el caso de productos de difícil traslado (big ticket) y con asistencia a domicilio, pueden transcurrir 10 días hábiles para coordinar la evaluación técnica del producto. Si dejas tu producto en alguna de las Tiendas Paris, el plazo puede ser de 15 días hábiles aproximadamente, para productos de fácil traslado.\n' +
        '\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{"id":2,"reference":"/ayuda/contactanos?data=24d2b86ee519ddc6fcff0872d4197dc173c24f082246837e3577567b043574eb","invitedReference":"/ayuda/contactanos?data=24d2b86ee519ddc6fcff0872d4197dc173c24f082246837e3577567b043574eb"}\n' +
        '',
      order: 6,
      helpCategory: context.serviciosPosventaParis,
      icon: '/icons/cards/indicatorWarranty.svg',
      description: 'Accede a atención técnica para solicitar la garantía de tus productos.',
    });

    context.reembolsoDineroParis = em.create(HelpContent, {
      label: 'Reembolso del dinero',
      reference: '/reembolso-dinero',
      content:
        '\n' +
        '## Reembolso de dinero\n' +
        '\n' +
        '### ¿Cuándo puedo recibir un reembolso?\n' +
        '```IconTable\n' +
        '{"textPosition":"left","textPositionDesktop":"buttom", "columns":1, "columnsDesktop":3, "icons": [' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/box-cancel.svg", "text": "Tras una cancelación de compra", "weight": "bold", "size": "5em", "reference": ""},' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/return-box.svg", "text": "Después de devolver un producto", "weight": "bold", "size": "5em", "reference": ""},' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/store-time.svg", "text": "Caducó el plazo de retirar en Tienda", "weight": "bold", "size": "5em", "reference": ""}]}\n' +
        '```\n' +
        '\n' +
        '\n' +
        '## Proceso de reembolso Paris\n' +
        '\n' +
        '### 1- Confirmar el inconveniente de la compra\n' +
        '\n' +
        'Una vez que comprobemos que, efectivamente, ocurrió un problema, se canceló una compra, se devolvió un producto o pasó la fecha de retiro en tienda, consideraremos tu inconveniente como aplicable para un reembolso de dinero.\n' +
        '\n' +
        '### 2- Validación de datos bancarios\n' +
        '\n' +
        'Si en tu cuenta de Paris.cl tienes registrada una cuenta bancaria, el proceso de validación será más rápido. En caso de no tenerlos o presentar algún error, nos contactaremos contigo a la brevedad posible para que completes estos datos de forma segura. Puedes agregar tus datos bancarios en [este enlace](https://www.paris.cl/mi-cuenta/datos-bancarios) de Mi cuenta.\n' +
        '\n' +
        '### 3- Reembolso aprobado\n' +
        '\n' +
        'Cuando culmina el proceso de verificación, aprobamos el reembolso para **regresarte el monto** que pagaste por tu compra. Si cancelas tu compra o hubo un inconveniente antes de que estuviera en estado de “En camino”, te devolveremos el dinero que pagaste por el envío. Pero si el producto fue entregado en tu domicilio y quieres devolverlo, no se reembolsará el dinero del despacho.\n' +
        '\n' +
        '## ¿En cuánto tiempo recibo mi dinero de vuelta?\n' +
        '\n' +
        'Después de aprobar tu reembolso, el reintegro del dinero dependerá de la entidad bancaria y del medio de pago con el que efectuaste la compra.\n' +
        '\n' +
        '### Débito\n' +
        '\n' +
        'El reembolso con tarjetas de débito se demora aproximadamente 15 días hábiles. Debes esperar a que se refleje la transferencia, según tu entidad bancaria. Puedes identificarlo en la cartola con el nombre de **Devolución Paris.cl** o, en el caso de productos Marketplace,  como  **Devolución MKP Paris.cl**.\n' +
        '\n' +
        '### Crédito\n' +
        '\n' +
        'El reembolso con tarjetas de crédito es más ágil porque los datos se encuentran de forma automática en el usuario que hizo la compra. En este caso, el dinero se demora aproximadamente **15 días** en aparecer en movimientos por facturar, según cada entidad bancaria.\n' +
        '\n' +
        '```GenericMessage\n' +
        '{"message":"**Nota:** Si realizaste tu compra con una gift card también recibirás el reembolso en caso de exista algún inconveniente.", "type":"warning", "isHighlight":true}\n' +
        '```\n' +
        '\n' +
        '## Consideraciones para hacer un reembolso\n' +
        '\n' +
        '-   Los reembolsos de dinero se reflejan en la misma cuenta con la que hiciste la compra. Solo es posible cambiar de cuenta bancaria si la compra se hizo con una tarjeta de débito. Por eso, te aconsejamos mantener tus datos actualizados en **Mi cuenta**, sección Datos bancarios.\n' +
        '\n' +
        '-   Si no existe una **cuenta bancaria registrada** en tu usuario, te enviaremos un correo electrónico para que ingreses los datos de una cuenta bancaria para realizar el reembolso.\n' +
        '\n' +
        '-   Si llegase a demorar tu reembolso con tarjetas de crédito, puedes consultar desde tu cuenta bancaria el estado de la transacción. Utiliza el **código de verificación** que encontrarás en la notificación del reembolso realizado.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{"id":2,"reference":"/ayuda/contactanos?data=ccf98eb8248bae88e0d1f572f95f05df6841f853862091b260814b7753d14d1b","invitedReference":"/ayuda/contactanos?data=ccf98eb8248bae88e0d1f572f95f05df6841f853862091b260814b7753d14d1b"}\n' +
        '```\n' +
        '\n' +
        '',
      order: 4,
      helpCategory: context.serviciosPosventaParis,
      icon: '/icons/cards/transactionCard.svg',
      description: 'Entérate sobre el proceso para recibir tu dinero de vuelta, plazos y consideraciones.',
    });

    context.cancelacionCompraParis = em.create(HelpContent, {
      label: 'Cancelación de compra',
      reference: '/cancelacion-de-compra',
      content:
        '# Cancelación de compra\n' +
        '\n' +
        'Si te equivocaste al ingresar algún dato sobre la información de despacho o ya no quieres recibir un producto, ¡no te preocupes! **Puedes solicitar una cancelación en Paris.cl**.\n' +
        '\n' +
        'En caso de que tu compra ya esté en proceso de envío, **debes rechazar el producto cuando llegue a tu domicilio** o iniciar el proceso de devolución una vez que lo tengas.\n' +
        '\n' +
        '## ¿Cómo cancelar una compra en Paris?\n' +
        '\n' +
        '**Paso 1: Ingresa al Formulario de contacto**\n' +
        '\n' +
        'Para proceder de forma ágil e inmediata, debes **ir a nuestro** [Formulario de contacto](<URL_HELP_FORM>) , ingresar con tu cuenta, registrarte o crear una solicitud con tu correo.\n' +
        '\n' +
        'Ten presente que **la solicitud debe hacerse desde la misma cuenta con la que se hizo la compra** que quieres cancelar.\n' +
        '\n' +
        '&nbsp;\n' +
        '\n' +
        '**Paso 2: Completa la información**\n' +
        '\n' +
        'A continuación, deberás **completar la información** que te pedimos en el formulario y **seleccionar aquellos productos por los que quieres solicitar una cancelación**.\n' +
        '\n' +
        '&nbsp;\n' +
        '\n' +
        '**Paso 3: Valida o agrega tu información**\n' +
        '\n' +
        '**Comprueba que tus datos bancarios y de contacto estén correctos**. Si entraste con tu cuenta, aparecerán agregados de manera automática. De lo contrario, te pediremos completar los campos requeridos.\n' +
        '\n' +
        'Para terminar, **ingresa la solicitud en el formulario**. Te enviaremos un correo en el que te avisaremos que vamos a empezar a trabajar en tu caso.\n' +
        '\n' +
        '## Consideraciones importantes\n' +
        '-   Las compras hechas en Tiendas Paris, y no en Paris.cl, con despacho a domicilio, no se pueden cancelar.\n' +
        '-   Si compraste con tarjeta de crédito, devolveremos tu dinero al mismo medio de pago.\n' +
        '-   El reembolso se verá reflejado en máximo **15 días hábiles** para tarjetas débito o crédito. Sin embargo, esta gestión dependerá de cada entidad bancaria y de que los datos que ingresaste sean correctos.\n' +
        '',
      order: 3,
      helpCategory: context.serviciosPosventaParis,
      icon: '/icons/cards/transactionBag.svg',
      description: 'Si te arrepentiste de una compra, revisa cómo cancelarla antes que esté en camino.',
    });

    context.descargaBoletaParis = em.create(HelpContent, {
      label: 'Descarga de boleta o documentos',
      reference: '/descarga-boleta-documentos',
      content:
        '\n' +
        '# Descarga de boleta o documentos\n' +
        '\n' +
        'Cada vez que compras en Paris.cl o en Tiendas París, recibes una **boleta o factura** de compra y un **ticket de cambio** por producto. De la misma manera, si es que tu compra fuera cancelada o devuelves un producto, recibes una **nota de crédito** para que luego proceda el **reembolso del dinero**.\n' +
        '\n' +
        'Ahora te mostraremos cómo descargar cada uno de estos documentos de compra y la importancia que tienen.\n' +
        '\n' +
        '## Recuperar boleta Paris\n' +
        '\n' +
        'La boleta o factura se genera una vez que finalizas tu compra, ya sea en nuestro sitio web o en las tiendas. Si deseas recuperarla sigue estos pasos:\n' +
        '\n' +
        '**1-**  Ingresa con tu usuario y contraseña a [Mis compras,](<URL_MIS_COMPRAS>) desde Paris.cl.\n' +
        '\n' +
        '**2-**  Selecciona **"Compras online"** o "**Compras en tienda**", según el canal en el que hayas adquirido tu producto.\n' +
        '\n' +
        '**3-**  Ubica **los detalles del producto** del que deseas descargar la boleta o factura.\n' +
        '\n' +
        '**4-**  Selecciona "Descargar boleta o factura".\n' +
        '\n' +
        '**5-**  Revisa tu carpeta de descargas ¡y listo, ya está!\n' +
        '\n' +
        '```GenericMessage\n' +
        '{"message":"**Nota:** En nuestro sitio también puedes comprar productos Marketplace, es decir, vendidos por sellers distintos a Paris.cl. En ese caso, las boletas las entregan directamente los vendedores de tu producto junto al despacho o a través de un correo electrónico.", "type":"warning", "isHighlight":true}\n' +
        '```\n' +
        '\n' +
        '### ¿Cuándo puedo necesitar una boleta?\n' +
        '\n' +
        '```IconTable\n' +
        '{"icons": [{"src": "/icons/store-time.svg", "text": "Retiro en tienda", "weight": "bold", "size": "5em"}, {"src": "/icons/garantia.svg", "text": "Garantía normal y extendida", "weight": "bold", "size": "5em"}, {"src": "/icons/return-box.svg", "text": "Cambios y devoluciones", "weight": "bold", "size": "5em"}]}\n' +
        '```\n' +
        '\n' +
        '## ¿Cuándo recibo un ticket de cambio?\n' +
        '\n' +
        'El **ticket de cambio** está disponible solo después de recibir tu producto, retirar o comprar en tiendas. Puedes descargarlo desde [Mis compras,](<URL_MIS_COMPRAS>) en el detalle de cada producto. Si deseas conocer los requisitos para hacer un cambio puedes [revisar en el siguiente enlace.](https://ayuda.paris.cl/ayuda/servicios-postventa/cambios-devoluciones)\n' +
        '\n' +
        '## Casos en los que recibo una nota de crédito\n' +
        '\n' +
        'Cuando emitimos una **nota de crédito**, normalmente la enviamos a través de un correo electrónico. Sin embargo, también puedes descargarlas desde [Mis compras,](<URL_MIS_COMPRAS>) en Paris.cl, pero si prefieres puedes solicitarla en cualquiera de nuestras Tiendas Paris.\n' +
        '\n' +
        '-  Una vez devuelto el producto a Paris, ya sea a través de un agendamiento para que busquemos el producto o entregado en Tiendas.\n' +
        '\n' +
        '-  Después de la cancelación de una compra.\n' +
        '\n' +
        '-  Si no retiraste un producto en tienda en el plazo señalado.\n' +
        '\n' +
        '```GenericMessage\n' +
        '{"message":"**Nota:** Recuerda que con la nota de crédito procede tu reembolso de dinero y este se demora según tu medio de pago y la entidad bancaria en cuestión. Revisa todos los detalles del reembolso en este enlace.", "type":"warning", "isHighlight":true}\n' +
        '```\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{"id":2,"reference":"/ayuda/contactanos?data=a288e180e94a3ca4425ba2ce3180a7963b983d2e8d2157a6d74c74fd55ffa407","invitedReference":"/ayuda/contactanos?data=a288e180e94a3ca4425ba2ce3180a7963b983d2e8d2157a6d74c74fd55ffa407"}\n' +
        '```\n' +
        '\n' +
        '',
      order: 5,
      helpCategory: context.serviciosPosventaParis,
      icon: '/icons/cards/transactionRefund.svg',
      description: 'Infórmate sobre cómo acceder y recuperar tus documentos de compra.',
    });

    context.ingresarSolicitudParis = em.create(HelpContent, {
      label: '¿Cómo ingresar una solicitud o reclamo?',
      reference: '/como-ingresar-solicitud',
      content:
        '### ¿Cómo ingresar una solicitud?  \n' +
        '\n' +
        'Para crear una solicitud o reclamo por tu caso en el  [Formulario de contacto](<URL_HELP_FORM>) , primero debes ingresar con tu cuenta o ingresar con tu correo electrónico.\n' +
        '\n' +
        '![login](https://d31w2ybspxswhh.cloudfront.net/TxD/paris/login-solicitud.svg)\n' +
        '![request](https://d31w2ybspxswhh.cloudfront.net/TxD/paris/solicitud-correo.svg)\n' +
        '\n' +
        '### Completa el Formulario de contacto\n' +
        '\n' +
        'Cuando estés en el Formulario para ingresar tu solicitud o reclamo, asegúrate de llenarlo siguiendo los pasos que te mostramos a continuación:\n' +
        '\n' +
        '``````IconTable\n' +
        '{"textPosition":"bottom", "renderImages":"true", "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/paris/step1.png", "text": "Elige un tipo de solicitud y motivo.", "weight": "normal", "height": "272", "width": "240"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/paris/step2.png", "text": "Selecciona la Orden de compra.", "weight": "normal", "height": "272", "width": "240"}, {"src": "https://d31w2ybspxswhh.cloudfront.net/paris/step3.png", "text": "Completa los datos y envía la solicitud.", "weight": "normal", "height": "272", "width": "240"}]}\n' +
        '``````\n' +
        '',
      order: 1,
      helpCategory: context.serviciosPosventaParis,
      icon: '/icons/cards/newRequest.svg',
      description: 'Revisa como ingresar una solicitud o reclamo por tu caso en el Formulario de contacto.',
    });
    //============ DESPACHO DOMICILIO PARIS ============//
    context.horariosParis = em.create(HelpContent, {
      label: 'Horarios y tipos de despacho',
      reference: '/horario-tipos-de-despacho',
      content:
        '# Horarios y tipos de despacho\n' +
        '\n' +
        'Actualmente, tenemos **tres tipos de despacho** disponibles. Revísalos a continuación para que elijas el que más te acomode.\n' +
        '\n' +
        '-   **Despacho programado:**\n' +
        '	- Puedes seleccionar la fecha disponible que más te acomode.\n' +
        '	- El precio varía según la dirección, tipo de producto y cantidad que tengas en el carro.\n' +
        '	- El horario de entrega es de lunes a domingo (excluye festivos) desde las 09:00 hasta las 21:00 horas.\n' +
        '    \n' +
        '-   **Despacho con rango de fechas:**\n' +
        '	- Tu producto llegará directamente desde el proveedor a tu domicilio dentro de un rango de fechas ya establecido.\n' +
        '    \n' +
        '-   **Despacho el mismo día:**\n' +
        '	- Disponible de lunes a viernes, desde las 00:00 hasta las 13:00 horas, solo para algunas comunas y regiones.\n' +
        '	- El precio varía según la dirección, tipo de producto y cantidad que tengas en el carro.\n' +
        '	- El horario de entrega es de lunes a viernes (excluye festivos) desde las 09:00 hasta las 21:00 horas.\n' +
        '    \n' +
        '**Importante:**\n' +
        '\n' +
        '-   En la **Región Metropolitana**, los precios varían dependiendo del tamaño del producto (artículos pequeños y medianos, $4.990 y grandes $15.990). Sujeto a disponibilidad y capacidad por comuna.\n' +
        '    \n' +
        '-   La entrega en tu domicilio se realizará siempre que las condiciones lo permitan y aseguren la integridad de nuestro personal.\n' +
        '    \n' +
        '-   Si tu producto no llegó en la fecha que correspondía, ingresa a [Mis compras,](<URL_MIS_COMPRAS>) y revisa el detalle de las fechas de despacho por artículo.\n' +
        '    \n' +
        '\n' +
        'Es posible que si compraste más de un artículo, estos puedan ser despachados en camiones y fechas diferentes. Hazle [seguimiento a tu Orden de compra](<URL_MIS_COMPRAS>) en el detalle de los productos.\n' +
        '\n' +
        '``` ServiceCard  \n' +
        '{"id":3,"icon":"ayuda-form","label":"Contáctanos","label_mobile":"Contáctanos","reference":"/ayuda/contactanos","actionLabel":"Ir a Sitio","bussinesApp":"paris","order":3,"display":true,"invitedReference":"/ayuda/contactanos"}  \n' +
        '```\n' +
        '',
      order: 1,
      helpCategory: context.despachoDomicilioParis,
      icon: '/icons/cards/transactionPackageChange.svg',
      description: 'Revisa nuestros tipos de despacho, horas de entrega y cuánto pueden tardar.',
    });

    context.costoDespachoParis = em.create(HelpContent, {
      label: 'Costo de despacho',
      reference: '/costo-despacho',
      content:
        '\n' +
        '# Costo del Despacho  \n' +
        '  \n' +
        'El costo definitivo del envío dependerá de lo siguiente:  \n' +
        '    \n' +
        '**Tamaño del producto**  \n' +
        'Consideramos tres categorías dentro de los tamaños de productos. Estos son: pequeño, mediano y grande (big ticket). Una compra con varios productos pequeños (hasta 10 unidades) tendrá el mismo costo de envío, mientras que para los tamaños mediano y grande el costo de despacho se otorgará individualmente.\n' +
        '  \n' +
        '**Lugar del destino**  \n' +
        'El costo del despacho será calculado según el destino que indiques en tu compra.\n' +
        '  \n' +
        '**Cantidad de unidades por carro de compra**  \n' +
        'La tarifa total también puede variar según la cantidad de productos o unidades de productos dentro de tu compra.\n' +
        '  \n' +
        '**Origen**  \n' +
        'Tu producto puede ser despachado desde un centro de distribución, desde alguna de las tiendas Paris o desde las bodegas del fabricante del producto según corresponda.\n' +
        '  \n' +
        '**Tipo de despacho que selecciones**  \n' +
        'El tipo de despacho puede variar en el monto final. Entre los despachos a domicilio que puedes seleccionar se encuentran: Recibe hoy, Recibe mañana, Elige día de despacho y Recibe entre fechas.  \n' +
        '\n' +
        '```GenericMessage\n' +
        '{"message":"**Nota:** Recuerda que los productos de una misma compra pueden ser despachados en transportes y fechas distintas, según el origen del producto.", "type":"warning", "isHighlight":true}\n' +
        '\n' +
        '```\n' +
        '\n' +
        '### Consulta tu despacho según región y comuna ###  \n' +
        'Si deseas revisar el costo aproximado de tu despacho antes de finalizar tu compra, puedes utilizar la siguiente herramienta y seleccionar la región y comuna de destino.\n' +
        '\n' +
        '```\n' +
        'CostoDespacho\n' +
        '```\n' +
        '\n' +
        '**Retiro en tienda**  \n' +
        'Otra opción para disfrutar de tu compra es el Retiro en tienda. Esta alternativa estará disponible siempre que se indique en la información detallada de cada producto publicado en Paris.cl. La **compra con retiro en tienda** no tiene costo.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{"id":2,"reference":"/ayuda/contactanos?data=3b5ae8d58c10d14f1ec520c9617606e1369afc444fcb3a5f7c6a1a04cccf25df","invitedReference":"/ayuda/contactanos?data=3b5ae8d58c10d14f1ec520c9617606e1369afc444fcb3a5f7c6a1a04cccf25df"}\n' +
        '```\n' +
        '\n' +
        '',
      order: 2,
      helpCategory: context.despachoDomicilioParis,
      icon: '/icons/cards/transactionCancel.svg',
      description: 'Infórmate sobre los valores de envío y consulta el monto aproximado para tu dirección.',
    });

    context.problemasDespachoParis = em.create(HelpContent, {
      label: 'Problemas con el despacho',
      reference: '/problemas-con-el-despacho',
      content:
        '\n' +
        '# Problemas con el despacho\n' +
        '\n' +
        'Si tu producto aún no llega y necesitas ingresar una solicitud en el [Formulario de contacto](<URL_HELP_FORM>), primero ten en cuenta la siguiente información:\n' +
        '\n' +
        '**1. Seguimiento de tu compra**\n' +
        '\n' +
        'Si tu producto aún no llega, ingresa con tu cuenta a [Mis compras,](<URL_MIS_COMPRAS>) y revisa el estado del despacho **seleccionando el producto y revisando el detalle de la fecha de entrega**.\n' +
        '\n' +
        '**2. Retraso de la compra**\n' +
        '\n' +
        'Si tu producto no llegó el mismo día programado, la entrega puede ocurrir dentro de las próximas **48 horas**. Recibirás un correo electrónico con la información del atraso.\n' +
        '\n' +
        '**3. Quién recibe tu compra**\n' +
        '\n' +
        'Asegúrate de quién es la persona encargada de recibir tu compra. En el caso de que no esté en el domicilio a la hora de la entrega del producto, **nuestro equipo puede realizar un nuevo intento**.\n' +
        '\n' +
        '**4. Orden de compra**\n' +
        '\n' +
        'Sin importar cuál sea el problema con el despacho, siempre debes tener el **número de Orden de compra** para ingresar una solicitud a través del formulario.\n' +
        '\n' +
        '\n' +
        '## ¿Qué hacer en casos de problemas con el despacho?\n' +
        '\n' +
        'Te explicamos los pasos a seguir para ingresar una solicitud en el formulario según tu caso. Ten en cuenta que mientras más información nos entregues en el formulario, más ágil será el procedimiento:\n' +
        '\n' +
        '### Atraso fecha de compromiso\n' +
        ' \n' +
        'Solo puedes dejar una solicitud de este tipo cuando tu compra está atrasada en **más de 48 horas** de la fecha que se te informó. Una vez ingresada, un ejecutivo te contactará para hacer la gestión correspondiente. \n' +
        '\n' +
        '### Desconozco a quién se le entregó mi compra\n' +
        '\n' +
        'Si en el seguimiento de tu compra se te informa que la entrega fue exitosa, pero aún no recibes tu producto, te recomendamos consultar con familiares o conserjes antes de ingresar una solicitud.\n' +
        '\n' +
        'Si tu producto no llegó, debes ingresar al formulario e indicar si quieres **cancelar la compra o comunicarte con un ejecutivo**.\n' +
        '\n' +
        '### Producto dañado\n' +
        '\n' +
        'Si recibiste un producto dañado, puedes ingresar una solicitud en el formulario. Solo tienes que describir con detalles el daño de tu producto para que el ejecutivo sepa cuál es el procedimiento a seguir en tu caso.\n' +
        '\n' +
        '### Despacho equivocado\n' +
        '    \n' +
        'Cuando recibes un despacho equivocado, debes especificar en el formulario cuál fue el producto que te llegó y cuál debió ser la entrega correspondiente. **Nuestro equipo se contactará contigo** para retirar la compra errónea y coordinar el nuevo envío.\n' +
        '\n' +
        '### Recibo incompleto\n' +
        '   \n' +
        'Existen dos casos en los que puedes ocupar esta solicitud en el formulario. El primero es cuando **faltan unidades** dentro de la compra de varios productos y, el segundo, ocurre en el caso de que **los accesorios de un producto específico no están completos**. En ambas ocasiones, un ejecutivo se contactará contigo, luego de crear el caso, para definir el procedimiento a seguir.\n' +
        '\n' +
        '### Quiero cancelar mi pedido\n' +
        '\n' +
        'Una compra se puede cancelar solo si está en el estado “En preparación” y no cuando el progreso llega hasta “En camino”. Si es el caso, puedes cancelarla a través de [Mis compras](<URL_MIS_COMPRAS>), rechazarla al momento de la entrega o devolverla en alguna de nuestras [Tiendas Paris o puntos Cencosud](https://www.paris.cl/tiendas-paris.html)  habilitados con un documento que lo respalde.\n' +
        '  \n' +
        '``` ServiceCard  \n' +
        '{"id":3,"icon":"ayuda-form","label":"Contáctanos","label_mobile":"Contáctanos","reference":"/ayuda/contactanos","actionLabel":"Ir a Sitio","bussinesApp":"paris","order":3,"display":true,"invitedReference":"/ayuda/contactanos"}  \n' +
        '```\n' +
        '\n' +
        '',
      order: 3,
      helpCategory: context.despachoDomicilioParis,
      icon: '/icons/cards/transactionRefund.svg',
      description: 'Entérate sobre lo que puedes hacer cuando el envío de tu compra presenta alguna dificultad.',
    });
    //============ RETIRO EN TIENDA PARIS ============//
    context.compraRetiroTiendaParis = em.create(HelpContent, {
      label: 'Compra con retiro en tienda',
      reference: '/compra-retiro-tienda',
      content:
        '\n' +
        '# Compra con Retiro en Tienda\n' +
        '\n' +
        '\n' +
        '|  |  | |\n' +
        '|--|--|--|\n' +
        '|![imagen/100px/100px](https://asistencia.paris.cl/static/media/icon-identificar-producto.c55b089e.svg)|![imagen/100px/100px](https://asistencia.paris.cl/static/media/icon-mail-informando.6081682b.svg)|![imagen/100px/100px](https://asistencia.paris.cl/static/media/icon-ubicar-punto-entrega.975db4b8.svg)\n' +
        '|Al momento de comprar selecciona la tienda de retiro que más te acomode y esté disponible|Te enviaremos un mail cuando tu producto esté listo para ser retirado en la tienda.|Debes acercarte a  **retiro en tienda** de la tienda que seleccionaste.\n' +
        '\n' +
        '## Requisitos importantes:\n' +
        '|  |  |\n' +
        '|--|--|\n' +
        '|*![imagen/100px/100px](https://asistencia.paris.cl/static/media/icon-mail-producto-listo-outline.8041aa7e.svg)*  | **Recibir mail de confirmación:** Cuando tu producto esté listo para que lo retires, te enviaremos un mail para informarte. [No he recibido el correo](<URL_HELP_FORM>?data=acc1dc6df32c76d078e8148226862b54ac12a7e36dc32e22239626d8bad0acbd).|\n' +
        '|*![imagen/100px/100px](https://asistencia.paris.cl/static/media/icon-cedula-identidad-outline.50f4721d.svg)* |**Documento de identificación:** Al momento de dirigirte a la tienda, quien retire, debe portar su cédula de identidad.\n' +
        '|*![imagen/100px/100px](https://asistencia.paris.cl/static/media/icon-documento-acredita-compra-outline.4562411c.svg)* |**Documentos de compra:** Además del documento de identificación, debe llevar un documento que acredite la compra, ya sea: número de orden de compra, boleta o factura. [Quiero descargar mi boleta](<URL_HELP_FORM>?data=a288e180e94a3ca4425ba2ce3180a7963b983d2e8d2157a6d74c74fd55ffa407).|\n' +
        '|*![imagen/100px/100px](https://asistencia.paris.cl/static/media/icon-ubicar-punto-entrega-outline.3166a930.svg)* |**Retiro de un tercero:** El o los productos podrán ser retirados por el cliente que realiza la compra, o por quien haya sido autorizado al momento de la compra. [Quiero autorizar el retiro por un tercero](<URL_HELP_FORM>?data=84d986b507922bc9dbb9e0c93674d736c7785b171269b94de66531049fc138e5).|\n' +
        '\n' +
        '\n' +
        '',
      order: 1,
      helpCategory: context.retiroTiendaParis,
      icon: '/icons/cards/transactionPackageChange.svg',
      description: 'Revisa los detalles importantes que debes tener en cuenta para retirar tu compra.',
    });

    context.cuandoRetirarParis = em.create(HelpContent, {
      label: '¿Cuándo puedo retirar mi producto en la tienda?',
      reference: '/cuando-retirar',
      content:
        '\n' +
        '# ¿Cuándo puedo retirar mi compra?\n' +
        '\n' +
        '\n' +
        'Debes ingresar a [Mis compras](<URL_MIS_COMPRAS>) para revisar el estado de tu Orden. Si esta se encuentra en “Listo para Retiro”, puedes acercarte a la tienda correspondiente para retirarla.\n' +
        '\n' +
        '![imagen/500px/100px](https://asistencia.paris.cl/static/media/estados.c6a1d6aa.svg)\n' +
        '\n' +
        '\n' +
        '[Ir a Mis compras](<URL_MIS_COMPRAS>)\n' +
        '\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{"id":2,"reference":"/ayuda/contactanos?data=7539dcb305a79be3d8bddd6a8034caaa05220da4ba7c85174a1f914448a7b459","invitedReference":"/ayuda/contactanos?data=7539dcb305a79be3d8bddd6a8034caaa05220da4ba7c85174a1f914448a7b459"}\n' +
        '```\n' +
        '\n' +
        '',
      order: 2,
      helpCategory: context.retiroTiendaParis,
      icon: '/icons/cards/cuandoRetirar.svg',
      description: '',
    });

    context.noReciboMailRetiroParis = em.create(HelpContent, {
      label: 'No he recibido mail de retiro en tienda',
      reference: '/no-recibo-mail-retiro',
      content:
        '\n' +
        '# No he recibido el correo indicando que retire\n' +
        '\n' +
        'Si aún no has recibido un correo indicando que tu compra está lista para retiro, debes ingresar a [Mis compras](<URL_MIS_COMPRAS>) para revisar el estado de tu Orden. Si esta se encuentra en **"Listo para Retiro"**, puedes acercarte a la tienda correspondiente para retirarla.\n' +
        '\n' +
        '![imagen/500px/100px](https://asistencia.paris.cl/static/media/estados.c6a1d6aa.svg)\n' +
        '\n' +
        '[Ir a Mis compras](<URL_MIS_COMPRAS>)\n' +
        '\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{"id":2,"reference":"/ayuda/contactanos?data=acc1dc6df32c76d078e8148226862b54ac12a7e36dc32e22239626d8bad0acbd","invitedReference":"/ayuda/contactanos?data=acc1dc6df32c76d078e8148226862b54ac12a7e36dc32e22239626d8bad0acbd"}\n' +
        '```\n' +
        '\n' +
        '',
      order: 3,
      helpCategory: context.retiroTiendaParis,
      icon: '/icons/cards/noReciboMail.svg',
      description: '',
    });

    context.autorizoTerceroParis = em.create(HelpContent, {
      label: 'Autorizar tercero para retiro en tienda',
      reference: '/autorizo-tercero',
      content:
        '\n' +
        '# Autorizar a otra persona para el retiro\n' +
        'Si olvidaste incluir a otra persona para retiro al momento de comprar o bien algo te impide retirar tu compra el día que te corresponde. No te preocupes, sigue estos pasos y autoriza a otra persona para que lo haga por ti.\n' +
        '1.  Inicia tu sesión o regístrate.\n' +
        '2. Ubica tu compra y haz click en el botón **ver más**\n' +
        '3. Cambia a la persona autorizante para retirar, ingresando su nombre y rut (recuerda que debes ser mayor de 18 años).\n' +
        '\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{"id":2,"reference":"/ayuda/contactanos?data=84d986b507922bc9dbb9e0c93674d736c7785b171269b94de66531049fc138e5","invitedReference":"/ayuda/contactanos?data=84d986b507922bc9dbb9e0c93674d736c7785b171269b94de66531049fc138e5"}\n' +
        '```\n' +
        '\n' +
        '',
      order: 4,
      helpCategory: context.retiroTiendaParis,
      icon: '/icons/cards/autorizo.svg',
      description: '',
    });

    context.documentosRetiroParis = em.create(HelpContent, {
      label: 'Documentos para retirar mi orden',
      reference: '/documentos-para-retiro',
      content:
        '\n' +
        '# Documentos para retirar la Orden\n' +
        'Debes llevar tu cédula de identidad y un documento que acredite la compra (Número de orden, boleta o factura). Recuerda que solo puede retirar la persona que realiza la compra o la persona autorizada al momento de la compra.\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{"id":2,"reference":"/ayuda/contactanos?data=a288e180e94a3ca4425ba2ce3180a7963b983d2e8d2157a6d74c74fd55ffa407","invitedReference":"/ayuda/contactanos?data=a288e180e94a3ca4425ba2ce3180a7963b983d2e8d2157a6d74c74fd55ffa407"}\n' +
        '```\n' +
        '\n' +
        '',
      order: 5,
      helpCategory: context.retiroTiendaParis,
      icon: '/icons/cards/documentosRetiro.svg',
      description: '',
    });
    //============ GARANTÍA PRODUCTOS PARIS ============//
    context.garantiaMinimaLegalParis = em.create(HelpContent, {
      label: 'Garantía mínima legal',
      reference: '/garantia-minima-legal',
      content:
        '\n' +
        '# Garantía mínima legal\n' +
        '\n' +
        '## ¿Qué es la garantía mínima legal?\n' +
        '\n' +
        'La garantía mínima legal está protegida por la Ley del Consumidor 19.496. Con ella, tienes **6 meses de cobertura** en caso de que el producto presente fallas, desperfectos de fabricación, le falten piezas o partes, o se encuentre en alguna de las otras situaciones detalladas en esta misma norma.\n' +
        '\n' +
        'Después de que se realice un diagnóstico del estado del producto, puedes elegir **entre cambio, devolución o reparación sin costo** si es que el producto no se deterioró por una causa atribuible al consumidor.\n' +
        '\n' +
        '```GenericMessage\n' +
        '{"message":"**Importante**\\nTodos los productos comprados desde el **24 de marzo de 2022 en adelante**, tendrán una garantía mínima legal de **6 meses**.", "type":"warning", "isHighlight":true}\n' +
        '```\n' +
        '\n' +
        '## ¿Cómo acceder a la garantía mínima legal?\n' +
        '\n' +
        '1.  Ten en cuenta que se requiere una evaluación previa para corroborar que el producto no se deterioró por una causa atribuible al consumidor.\n' +
        '    \n' +
        '2.  Puedes solicitar la evaluación con el proveedor o comercializador del producto, quien emitirá **una carta de cambio o informe** que acredite la falla del artículo.\n' +
        '    \n' +
        '3.  Revisa el [Servicio técnico](https://ayuda.paris.cl/ayuda/servicios-postventa/servicio-tecnico) para conocer los detalles y forma de contacto de cada marca. Si no la encuentras, puedes ingresar una solicitud a través de nuestro [Formulario de contacto](<URL_HELP_FORM>).\n' +
        '    \n' +
        '4.  Una vez validado que el producto no se deterioró por una causa atribuible al consumidor, estando dentro del periodo de la Garantía mínima legal, puedes elegir entre:\n' +
        '    \n' +
        '\n' +
        '![imagen/745px/160px](https://lh4.googleusercontent.com/QNEf-YmQRIDMswPhuYS7JmnSjO_2HPTeuAO8ENnFalYfTFbK2SXBh7Gwck_p7KFZW1DZgoETvwKJJ8I-Lp-8d3tyAuFQjcBN4nwwzPSeXZaXURoDFLOi2w_W8ZP1ztjR015OOsMU)\n' +
        '\n' +
        '## Consideraciones para la garantía mínima legal\n' +
        '\n' +
        '-   Para hacer uso de la Garantía mínima legal, el producto no debe presentar deterioros atribuibles al consumidor.\n' +
        '    \n' +
        '-   En cuanto a los productos de paquetería o fácil traslado, dirígete a la tienda Paris más cercana para gestionar la evaluación respectiva.\n' +
        '    \n' +
        '-   Para la revisión técnica de productos de gran tamaño o difícil traslado, deberás agendar una visita a domicilio con los proveedores.\n' +
        '    \n' +
        '-   Para productos intangibles, tales como licencias de sistemas, videojuegos u otros, y artículos de segunda mano, openbox o reacondicionados no se aplica la garantía mínima legal.\n' +
        '    \n' +
        '\n' +
        '## Garantía mínima legal de productos Marketplace\n' +
        '\n' +
        'Si deseas acceder a la garantía de un artículo comercializado por un vendedor distinto a Paris.cl, en “Marketplace”, sigue los pasos detallados a continuación:\n' +
        '\n' +
        '-   En casos de productos de paquetería o fácil traslado, deberás llevar tu producto a cualquiera de nuestras [Tiendas Paris](https://www.paris.cl/tiendas-paris.html) para hacer efectiva tu garantía.\n' +
        '    \n' +
        '-   Para productos de gran tamaño, deberás ingresar una solicitud al [Formulario de contacto](<URL_HELP_FORM>) para que se realice la gestión por tu caso.\n' +
        '    \n' +
        'Este proceso de garantía mínima legal de productos Marketplace lo realizará directamente el vendedor para evaluar el producto (en caso de tener servicio técnico), repararlo, enviar uno nuevo o gestionar la anulación, y hacer el posterior reembolso del dinero. Conoce todos los plazos y procesos de los [productos Marketplace](https://ayuda.paris.cl/ayuda/comprar-en-paris/marketplace).\n' +
        '\n' +
        '## ¿Qué es una garantía convencional?\n' +
        '\n' +
        'Una garantía convencional es la que, en ocasiones, **puede otorgar el proveedor adicional a la garantía mínima legal**. Es decir, la garantía de un producto puede ser superior a los 6 meses estipulados por la ley, si así lo define el proveedor. La diferencia es que, si tu producto presenta alguna falla después del periodo mínimo legal, solo el proveedor indicará si aplica el cambio, devolución o reparación del producto.\n' +
        '\n' +
        '```GenericMessage\n' +
        '{"message":"**Nota**\\n Conoce más sobre la garantía extendida, qué incluye, los requisitos para hacerla válida y mucho más, haciendo clic en el [enlace](https://ayuda.paris.cl/ayuda/garantia-de-producto/garantia-extendida).", "type":"warning", "isHighlight":true}\n' +
        '```\n' +
        '\n' +
        'Recuerda que si necesitas **comenzar la gestión de la garantía mínima legal**, para un producto de difícil traslado, puedes hacerlo directamente desde nuestro formulario a través del [siguiente acceso](<URL_HELP_FORM>).\n' +
        '\n' +
        '``` ServiceCard\n' +
        '{"id":2,"reference":"/ayuda/contactanos?data=32f18c34450b52542cfc41f12d5b1ff2da8e76a9a6a45bde68cf8114e50330bb","invitedReference":"/ayuda/contactanos?data=32f18c34450b52542cfc41f12d5b1ff2da8e76a9a6a45bde68cf8114e50330bb"}\n' +
        '```' +
        '\n' +
        '\n',
      order: 1,
      helpCategory: context.garantiaProductosParis,
      icon: '/icons/cards/transactionPackageChange.svg',
      description:
        'Accede a la garantía de tu producto si te encuentras en alguna de las situaciones detalladas en la ley.',
    });

    context.garantiaExtendidaParis = em.create(HelpContent, {
      label: 'Garantía extendida',
      reference: '/garantia-extendida',
      content:
        '# Garantía Extendida\n' +
        '\n' +
        'El servicio de garantía extendida de Paris permite extender la garantía de tus productos entre 1 a 4 años,\n' +
        'una vez que vence la garantía original del fabricante.\n' +
        '\n' +
        '\n' +
        '```Picture\n' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/timeline-warranty-band-mob.svg", "srcDesktop": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/timeline-warranty-band.svg", "width": "", "height": "", "alt": "", "type": "image/svg+xml"}\n' +
        '```\n' +
        '\n' +
        '\n' +
        '## ¿Cuáles son los productos que tienen garantía extendida?\n' +
        '\n' +
        '\n' +
        '```IconTable\n' +
        '{"textPosition":"buttom", "columns":2, "columnsDesktop":4, "icons": [' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/1er-electricity-band.svg", "text": "Línea Blanca", "weight": "bold", "size": "5em", "reference": ""},' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/2do-electricity-band.svg", "text": "Electrodomésticos", "weight": "bold", "size": "5em", "reference": ""},' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/3er-electricity-band.svg", "text": "Imagen y audio", "weight": "bold", "size": "5em", "reference": ""},' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/4to-electricity-band.svg", "text": "Electrónica y Computación", "weight": "bold", "size": "5em", "reference": ""},' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/5to-electricity-band.svg", "text": "Climatización", "weight": "bold", "size": "5em", "reference": ""},' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/6to-electricity-band.svg", "text": "Telefonía y Smartwatchs", "weight": "bold", "size": "5em", "reference": ""},' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/7mo-electricity-band.svg", "text": "Videojuegos", "weight": "bold", "size": "5em", "reference": ""},' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/8vo-electricity-band.svg", "text": "Fotografía", "weight": "bold", "size": "5em", "reference": ""}]}\n' +
        '```\n' +
        '## ¿Qué incluye la garantía extendida?\n' +
        '\n' +
        '```Picture\n' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/table-garantia-extendida-mob.svg", "srcDesktop": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/table-garantia-extendida.svg", "width": "", "height": "", "alt": "", "type": "image/svg+xml"}\n' +
        '```\n' +
        '\n' +
        '## Consideraciones para la garantía mínima legal\n' +
        '\n' +
        '- Caídas, derrames y quiebres de pantalla.\n' +
        '\n' +
        '- Cobertura en caso de robo.\n' +
        '\n' +
        '- Cambio de producto después de la segunda reparación.\n' +
        '\n' +
        '- Cambio de producto después de la tercera reparación.\n' +
        '\n' +
        '- Protección bajo las mismas condiciones de la garantía de fábrica.\n' +
        '\n' +
        '- Cobertura ante variaciones por alto voltaje.\n' +
        '\n' +
        '- Costos de repuestos, mano de obra, traslados y visitas a domicilio.\n' +
        '\n' +
        '- Protección del producto que cuenta con servicio 24/7 los 365 días del año.\n' +
        '\n' +
        '- El servicio es transferible a nuevos dueños.\n' +
        '\n' +
        '```GenericMessage\n' +
        '{"message":"**Importante**\\n' +
        'Daño Accidental y/o robo tiene una vigencia de 365 días desde la fecha de compra. Por ejemplo, si compras una **garantía extendida + robo**, contarás con una cobertura de 1 año por robo (desde la fecha de compra) y 4 años de garantía extendida normal.", "type":"warning", "isHighlight":true}\n' +
        '```\n' +
        '\n' +
        '\n' +
        '```Picture\n' +
        '{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/coverage-services-band-mob.svg", "srcDesktop": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/coverage-services-band.svg", "width": "", "height": "", "alt": "", "type": "image/svg+xml"}\n' +
        '```\n' +
        '\n' +
        '## Garantía Premium\n' +
        '\n' +
        'Es una garantía exclusiva para los productos que corresponden a la categoría Línea blanca y considera los siguientes servicios:\n' +
        '\n' +
        '```IconTable\n' +
        '{"textPosition":"buttom", "columns":1, "columnsDesktop":2, "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/1er-services-garantia-extendida-premium-mob.svg", "text": "", "size": "100%", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/2do-service-garantia-extendida-premium-mob.svg", "text": "", "size": "100%", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/3er-service-garantia-extendida-premium-mob.svg", "text": "", "size": "100%", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/4to-service-garantia-extendida-premium-mob.svg", "text": "", "size": "100%", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/5to-service-garantia-extendida-premium-mob.svg", "text": "", "size": "100%", "reference": ""}]}\n' +
        '```\n' +
        '> **Nota**   \n' +
        'Si quieres conocer más sobre la garantía premium, encuentra más información haciendo clic en el [enlace](https://d31w2ybspxswhh.cloudfront.net/TxD/paris/Cencosud+GEX+PREMIUM.pdf).\n' +
        '\n' +
        '## ¿Qué requisitos necesitas para validar tu garantía extendida?\n' +
        '\n' +
        '-   Recuerda conservar tu boleta para comprobar la compra de tu producto.\n' +
        '    \n' +
        '-   Los datos del certificado deben estar completos.\n' +
        '    \n' +
        '-   El número de identificación o serie debe estar inalterado.\n' +
        '\n' +
        '## ¿Cómo comprar la garantía extendida?\n' +
        '```IconTable\n' +
        '{"textPosition":"buttom", "columns":1, "columnsDesktop":3, "icons": [{"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/paso1-garantiaExtendidaText-mo.svg", "text": "", "size": "100%", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/paso2-garantiaExt-Text-desk.svg", "text": "", "size": "100%", "reference": ""}, {"src": "https://d31w2ybspxswhh.cloudfront.net/TxD/paris/paso3-garantiaExt-Text-mob.svg", "text": "", "size": "100%", "reference": ""}]}\n' +
        '```\n' +
        '## ¿Cómo hacer efectiva tu garantía extendida?\n' +
        '\n' +
        'Haz efectiva tu garantía extendida llamando al 600 422 1000. Atenderemos tu caso y nos comunicaremos contigo.\n' +
        '\n' +
        '> **Nota**   \n' +
        'Conoce más detalles sobre la garantía extendida ingresando al [enlace](https://www.paris.cl/on/demandware.static/-/Library-Sites-ParisSharedLibrary/es_CL/dw4e4a9457/ayuda/garantias-extendidas.pdf?1&_ga=2.86751320.179919415.1647349965-992886329.1646050581).',
      order: 2,
      helpCategory: context.garantiaProductosParis,
      icon: '/icons/cards/transactionCancel.svg',
      description: 'Entérate sobre cómo ampliar el tiempo de protección de tus productos.',
    });

    context.servicioTecnicoGarantiaParis = em.create(HelpContent, {
      label: 'Servicio Técnico',
      reference: '/servicio-tecnico-producto',
      content:
        '# Servicios Técnicos\n' +
        'Si el producto que compraste tiene un problema y necesitas repararlo o cambiarlo, no te preocupes, podrás enviar tus productos al Servicio Técnico correspondiente para encontrar la mejor solución para tu problema.\n' +
        'Recuerda que todo producto electrónico que es enviado al Servicio Técnico pierda su información, por eso, sugerimos te asegures y respaldes todo.\n' +
        'Se considerará falla en los productos con problemas en su Hardware y no Software.\n' +
        '**Puedes seleccionar marca y región para ver el servicio técnico próximo a tu localidad.**',
      order: 3,
      helpCategory: context.garantiaProductosParis,
      display: false,
      icon: '',
      description: '',
    });
    //============ COMPRAR PARIS ============//
    context.politicaSeguridadParis = em.create(HelpContent, {
      label: 'Políticas de Seguridad',
      reference: '/politica-seguridad',
      content:
        '# Políticas de Seguridad\n' +
        '\n' +
        '¡Evita ser víctima de fraudes! Sigue nuestras recomendaciones para tener una experiencia más segura en Paris.cl.\n' +
        '\n' +
        '## Protege tu cuenta\n' +
        '\n' +
        'Nunca te pediremos tu usuario y contraseña para ayudarte con alguna compra o problema que tengas. No necesitamos tus claves para resolver tus consultas.\n' +
        '\n' +
        '## Crea una clave segura\n' +
        '\n' +
        'Crea una clave de acceso robusta que en lo posible contenga mayúsculas y minúsculas, números y caracteres especiales.\n' +
        '\n' +
        '## Guarda nuestra página web en favoritos\n' +
        '\n' +
        'Siempre que quieras acceder a nuestro sitio, hazlo tipeando [www.paris.cl](http://www.paris.cl/) directamente en el navegador y no lo hagas a través de ningún enlace que te llegue. Además, puedes guardar la dirección en tus favoritos para futuros accesos y así no volver a ingresarla cada vez que quieras entrar a Paris.cl.\n' +
        '\n' +
        '## Redes Sociales\n' +
        '\n' +
        'Contamos con tres canales oficiales en redes. Te recomendamos siempre verificar que tengan la insignia azul junto al nombre, ya que confirma la autenticidad de nuestras cuentas:\n' +
        '\n' +
        '-   Facebook:  [facebook.com/TiendasParis/](https://www.facebook.com/TiendasParis/)\n' +
        '    \n' +
        '-   Instagram:  [@tiendas_paris](https://www.instagram.com/tiendas_paris/)\n' +
        '    \n' +
        '-   Twitter:  [@tiendas_paris](https://twitter.com/tiendas_paris)\n' +
        '    \n' +
        '\n' +
        '## Verifica la dirección de correo electrónico\n' +
        '\n' +
        'Cuando te llegue un correo de Paris.cl, presta siempre atención a la dirección del correo del remitente.\n' +
        '\n' +
        '## Phishing\n' +
        '\n' +
        '¡No te dejes engañar! Desde [Paris.cl](https://www.paris.cl/) nunca te enviaremos un correo solicitando que ingreses el número de tus tarjetas, correo electrónico de registro o clave secreta. Si tienes dudas, contáctate con nosotros a través de [Facebook](https://www.facebook.com/TiendasParis), [Twitter](https://twitter.com/tiendas_paris) o [Instagram](https://www.instagram.com/tiendas_paris/) y atenderemos tu caso.\n' +
        '\n' +
        '## Nuestra página oficial\n' +
        '\n' +
        'Nuestro único sitio oficial es [www.paris.cl](http://www.paris.cl/)\n' +
        '\n' +
        '## Evita correos extraños\n' +
        '\n' +
        'Nunca respondas correos que requieran información personal.\n' +
        '\n' +
        '## Reporta casos sospechosos\n' +
        '\n' +
        'Si alguien se comunica contigo por otro medio, repórtalo a través de nuestro [Formulario de contacto](<URL_HELP_FORM>).\n' +
        '\n' +
        '## Contacta por canales oficiales\n' +
        '\n' +
        'Ante cualquier duda, comunícate con nosotros para verificar el origen de cualquier sospecha a través de [Facebook](https://www.facebook.com/TiendasParis), [Twitter](https://twitter.com/tiendas_paris) o [Instagram](https://www.instagram.com/tiendas_paris/).\n' +
        '',
      order: 1,
      helpCategory: context.comprarParis,
      icon: '/icons/cards/politicaSeguridad.svg',
      description: '',
    });

    context.marketplaceParis = em.create(HelpContent, {
      label: 'Marketplace',
      reference: '/marketplace',
      content:
        '# Marketplace\n' +
        '\n' +
        '## ¿Cómo puedo realizar una devolución?\n' +
        '\n' +
        'Los productos Marketplace **no se pueden cambiar, solo devolver.** Cuando recibas tu compra, se activará la opción para hacerlo en [Paris.cl](http://paris.cl/).\n' +
        '\n' +
        '- Para devolver artículos de **paquetería o fácil traslado**, acércate a nuestras [Tiendas o puntos Cencosud](https://www.paris.cl/tiendas-paris.html) con el RUT de quien compró o Número de orden. O puedes agendar el retiro en [Mis compras](https://www.paris.cl/mi-cuenta/mis-compras): selecciona el producto y haz clic en **“Iniciar devolución”**. Revisa las [categorías y comunas](https://ayuda2.paris.cl/ayuda/servicios-postventa/cambios-devoluciones) para las que está disponible este servicio.\n' +
        '\n' +
        '- En cuanto a **productos de gran tamaño o difícil traslado** (aquellos con un peso mayor a 30 kilos o que alguno de sus lados sobrepase los 60 centímetros), deberás ubicar el producto en [Mis compras](https://www.paris.cl/mi-cuenta/mis-compras), seleccionar el botón “**Iniciar devolución**” y luego completar el [Formulario de contacto](https://ayuda.paris.cl/ayuda/contactanos) para agendar la fecha de retiro. \n' +
        '\n' +
        '![imagen/700px/180px](https://d31w2ybspxswhh.cloudfront.net/TxD/paris/ilust-miscompras.svg)\n' +
        '\n' +
        '## Requisitos importantes para la devolución\n' +
        '\n' +
        '1.  Puedes retractarte y devolver un producto hasta **30 días** desde que lo recibiste. Si este presenta daño, falla o está incompleto, el plazo para devolución, cambio o reparación por [garantía](https://ayuda.paris.cl/ayuda/garantia-de-producto/garantia-minima-legal) es de 6 meses a contar del día en que lo recibiste (esto último aplica para productos recibidos desde el **24 de marzo de 2022**).\n' +
        '2.  El producto debe encontrarse en **buen estado**, sin uso, en su caja o embalaje y con los elementos originales de este (como las etiquetas, certificados de garantía, manuales de uso, cajas, y con sus elementos de protección).\n' +
        '3.  En el caso de **productos frágiles** (que contienen vidrio, cerámica, madera delgada y/o material sujeto a quiebre), deben estar en su envase original con todas las protecciones correspondientes.\n' +
        '4.  En el caso de productos de belleza, productos electrónicos (con pilas o enchufe) y productos de cocina, **deben estar sellados y con sus sellos originales**.\n' +
        '\n' +
        '> **Importante:** Para hacer válida la [garantía](https://ayuda.paris.cl/ayuda/garantia-de-producto/garantia-minima-legal), los productos Marketplace entregados en tienda pasan por aprobación del vendedor\n' +
        '> validado por Paris, que es quien revisa si este aplica para\n' +
        '> reparación, cambio o devolución, siempre y cuando no presente fallas\n' +
        '> por mal uso. Luego de esto, será devuelto directamente a quien realizó\n' +
        '> la compra y no a la tienda.\n' +
        '',
      order: 1,
      helpCategory: context.comprarParis,
      icon: '/icons/cards/transactionPackageChange.svg',
      description: 'Revisa cómo hacer una devolución y los requisitos que debes considerar.',
    });

    context.mediosPagoParis = em.create(HelpContent, {
      label: 'Medios de Pago',
      reference: '/medios-pago',
      content:
        '# Medios de Pago\n' +
        '|  |  |\n' +
        '|--|--|\n' +
        '| ![Tarjeta Cencosud](https://asistencia.paris.cl/static/media/icon_tarjeta_cencosud.c2eb421e.svg)| **Tarjeta Cencosud Scotiabank**: Te permite acceder a  **descuentos y promociones**  de nuestros productos. Los productos con descuentos asociados a este medio de pago, tendrán al costado una imagen de la Tarjeta Scotiabank Cencosud con el precio promocional. Si deseas pagar tu  **Tarjeta Cencosud**  haz click  [acá](https://www.mitarjetacencosud.cl/TarjetaMasWEB/iniPagoPublico.do?utm_source=paris_cl&utm_medium=Link&utm_content=rfcl&utm_campaign=Pago+F%C3%A1cil).|\n' +
        '| ![Tarjeta de Crédito](https://asistencia.paris.cl/static/media/icon_tarjeta_credito.0ccdb3c3.svg)| **Tarjeta Crédito:** Los costos y cargos asociados al uso de la Tarjeta de Crédito, dependerá de las condiciones que acordaste con tu  **banco emisor**. El cargo que aceptas a tu tarjeta, se realiza a través de WebPay.|\n' +
        '| ![Tarjeta de Débito](https://asistencia.paris.cl/static/media/icon_tarjeta_debito.5678cebc.svg)| **Tarjeta Débito:** Podrás usar tu tarjeta RedCompra de forma rápida y segura a través de  **WebPay**.\n' +
        '| ![Gift Card](https://asistencia.paris.cl/static/media/icon_giftcard.b33bbb66.svg)| **Giftcard:**  Las tarjetas de regalo o Giftcard tienen asociado un monto en pesos que te permite realizar compras en nuestras tiendas o en  [Paris.cl](http://www.paris.cl/), podrás utilizar el monto total asignado a tu tarjeta en una compra o podrás utilizar sólo una parte de ella. Además podrás usar otro medio de pago para completar el precio de un producto (Excepto Puntos Cencosud). Nuestra plataforma web sólo permite la utilización de una Giftcard por compra en  [Paris.cl](http://www.paris.cl/).  Para cualquier solicitud ingresa a  [www.giftcard.cl](http://www.giftcard.cl/).\n' +
        '| ![Puntos Cencosud](https://asistencia.paris.cl/static/media/icon_puntos_cencosud.acca7160.svg)|**Puntos Cencosud:** Podrás realizar compras con puntos sólo en  **nuestras tiendas**. Para hacer efectivo el canje debes presentar tu cédula de identidad en caja. Cada punto que uses equivale a un peso, por ejemplo, si canjeas 5.000 puntos, equivale a $5.000 de tu compra.|',
      order: 3,
      helpCategory: context.comprarParis,
      icon: '/icons/cards/mediosPago.svg',
      description: '',
    });

    context.noviosParis = em.create(HelpContent, {
      label: 'Paris Novios',
      reference: 'https://club.noviosparis.cl/home',
      content: '',
      order: 4,
      helpCategory: context.comprarParis,
      icon: '/icons/cards/noviosParis.svg',
      description: '',
    });

    context.bebeParis = em.create(HelpContent, {
      label: 'Paris Bebé',
      reference: 'http://www.bebeparis.cl/',
      content: '',
      order: 5,
      helpCategory: context.comprarParis,
      icon: '/icons/cards/bebeParis.svg',
      description: '',
    });

    context.casaParis = em.create(HelpContent, {
      label: 'Paris Casa',
      reference: 'http://www.casaparis.cl/',
      content: '',
      order: 1,
      helpCategory: context.comprarParis,
      icon: '/icons/cards/casaParis.svg',
      description: '',
    });

    context.ropaParis = em.create(HelpContent, {
      label: 'Ropa x ropa',
      reference: '/ropa',
      content:
        '# Ropa x Ropa\n' +
        'Es nuestro proyecto de reciclaje textil que desde el 2013 ha reciclado más de 1.000 toneladas de ropa, evitando que ésta llegue a vertederos. Ropa x Ropa te invita a traer la ropa que no uses, en cualquier estado excepto húmeda o mojada, y Paris la reciclará.\n' +
        '### ¿En qué consiste el reciclaje textil?\n' +
        '1.  **Reutilizar**: Convertir las prendas en nuevos productos, por ejemplo: artículos de aseo.\n' +
        '2.  **Reducir**: Descomponer las prendas en materiales, por ejemplo: materiales de aislación para la industria de construcción o automotriz.\n' +
        '3.  **Retornar**: Transformar las prendas nuevamente en tela, pero ahora recicladas, por ejemplo: algodón, poliéster.\n' +
        '4.  **Reusar**: Insertar las prendas que están en buen estado, en mercados de ropa usada.\n' +
        'Este servicio está disponible en todas las tiendas Paris (excepto Paris Ahumada) durante todo el año, con una recompensa del 10% de descuento en todo vestuario.',
      order: 2,
      helpCategory: context.comprarParis,
      icon: '/icons/cards/ropa.svg',
      description: '',
    });

    context.jugueteParis = em.create(HelpContent, {
      label: 'Juguete x juguete',
      reference: '/juguete',
      content:
        '# Juguete x Juguete\n' +
        '\n' +
        'Es nuestro proyecto de reparación, limpieza y reciclaje de juguetes. Desde sus comienzos hemos recolectado más de 50.000 juguetes, cuyo 91% se logró reparar y limpiar. El resto del 9% se recicló. Todos los juguetes fueron donados a las fundaciones San José, La Protectora de la Infancia y María Ayuda para darles una nueva vida.\n' +
        '\n' +
        'Los juguetes serán recibidos **sólo en época de campaña**  y las fechas serán comunicadas con antelación y en medios masivos. La recepción de juguetes se realizará en todas las tiendas (excepto Paris Quilicura). No se recibirán bicicletas, pelotas y rodados.\n' +
        '\n' +
        'La reparación de los juguetes la gestiona **Modulab**, empresa de ecodiseño que ofrece servicios medioambientales con diferentes soluciones.\n' +
        '\n' +
        'El reciclaje de los juguetes está a cargo de **Degraf**, empresa B que gestiona de forma integral los residuos peligrosos y no peligrosos a otras empresas.',
      order: 3,
      helpCategory: context.comprarParis,
      icon: '/icons/cards/juguete.svg',
      description: '',
    });

    context.repararParis = em.create(HelpContent, {
      label: 'ReparaLab',
      reference: '/reparar-lab',
      content:
        '# Reparalab\n' +
        '\n' +
        'Reparalab es un programa de Paris de reparación de ropa , electrodomésticos y zapatillas.\n' +
        '\n' +
        'Es un programa itinerante, donde se repara en forma gratuita y colaborativa.\n' +
        '\n' +
        '### ¿Qué productos se reciben?\n' +
        '\n' +
        'Ropa, de todo tipo, menos ropa interior. La ropa debe venir lavada y no se cambian cierres. Con las zapatillas, solo se pegan suelas. Se recibirán solo electrodomésticos que puedas cargar en tus manos, no artículos electrónicos. La diferencia está en que el artículo electrónico tienen circuitos integrados (celular , tablet , computador).\n' +
        '\n' +
        'Las tiendas y los horarios en donde se ofrece este servicio gratuito, se comunicarán en nuestras redes sociales y página web.',
      order: 4,
      helpCategory: context.comprarParis,
      icon: '/icons/cards/reparar.svg',
      description: '',
    });

    context.paradeParis = em.create(HelpContent, {
      label: 'Paris Parade',
      reference: '/paris-parade',
      content:
        '# Paris Parade\n' +
        '\n' +
        'Paris Parade es el desfile navideño más grande de Sudamérica que cada año reúne a más de 800.000 personas.\n' +
        '\n' +
        'Esto es un regalo de Navidad que le hace Paris a toda la comunidad, y se realiza todos los años en el mes de diciembre, en la principal avenida de Santiago de Chile.\n' +
        '\n' +
        'Este evento lleva 10 años realizándose y en donde globos de helio gigantes, carros alegóricos, artistas y comparsas comunitarias, invaden la Alameda y la llenan de color, magia, música y fantasía.\n' +
        '\n' +
        'El evento también se transmite por canal abierto.\n' +
        '\n' +
        'En cada edición de este desfile, se subirá toda la información relevante en nuestra página web.\n' +
        '\n' +
        '\n' +
        '![enter image description here/700px](https://asistencia.paris.cl/static/media/parisParade01.4801c654.jpg)',
      order: 5,
      helpCategory: context.comprarParis,
      icon: '/icons/cards/parisParade.svg',
      description: '',
    });
    //============ CENCOSUD PARIS ============//

    context.tarjetaCencosudParis = em.create(HelpContent, {
      label: 'Tarjeta Cencosud',
      reference: 'https://www.tarjetacencosud.cl/TarjetaMasWEB/home.html',
      content: '',
      order: 1,
      helpCategory: context.cencosudParis,
      icon: '/icons/cards/tarjetaCencosud.svg',
      description: '',
    });

    context.puntosCencosudParis = em.create(HelpContent, {
      label: 'Puntos Cencosud',
      reference: 'https://www.puntoscencosud.cl/puntos/',
      content: '',
      order: 2,
      helpCategory: context.cencosudParis,
      icon: '/icons/cards/puntos.svg',
      description: '',
    });

    context.segurosCencosudParis = em.create(HelpContent, {
      label: 'Seguros Cencosud',
      reference: 'https://www.seguroscencosud.cl/vseg-paris/index.jsp',
      content: '',
      order: 3,
      helpCategory: context.cencosudParis,
      icon: '/icons/cards/seguros.svg',
      description: '',
    });

    context.ventaEmpresaParis = em.create(HelpContent, {
      label: 'Venta Empresa',
      reference: 'https://www.ventaempresascencosud.cl/',
      content: '',
      order: 4,
      helpCategory: context.cencosudParis,
      icon: '/icons/cards/ventaEmpresa.svg',
      description: '',
    });

    context.trabajaNosotrosParis = em.create(HelpContent, {
      label: 'Trabaja con nosotros',
      reference: 'https://cencosud.trabajando.com/',
      content: '',
      order: 5,
      helpCategory: context.cencosudParis,
      icon: '/icons/cards/trabajaConNosotros.svg',
      description: '',
    });

    context.promesaServicioParis = em.create(HelpContent, {
      label: 'Promesa de Servicio',
      reference: '/promesa-servicio',
      content:
        '# Promesa de Servicio\n' +
        '\n' +
        '### Paris tu tienda\n' +
        '\n' +
        'La rapidez, seguridad y calidad en tu proceso de compra es nuestra prioridad.  **¡Queremos que Paris sea tu Tienda!**\n' +
        '\n' +
        '### Facilitamos tus devoluciones\n' +
        'Si el producto que compraste no era el correcto, lo quieres cambiar o quieres anular la compra, lo puedes realizar sin problema en nuestras tiendas. En el caso de que tengas productos de mayor tamaño o dificultad de traslado debes coordinar el retiro del producto a través de nuestro Servicio al Cliente y te reembolsaremos solo el valor pagado por el producto, es decir, no se devolverá el costo del despacho.\n' +
        '\n' +
        '### Recuerda\n' +
        'El producto debe estar en perfecto estado, es decir, sin uso, con la etiqueta adherida en su embalaje original, sellado y con sus accesorios.\n' +
        '\n' +
        'Para **recuperar tu boleta**, sigue estos pasos:\n' +
        '\n' +
        '1.  Ingresa a [Mis compras](<URL_MIS_COMPRAS>).\n' +
        '2.  Ubica una **Orden de compra o producto**. \n' +
        '3.  Selecciona la opción “**Descargar boleta**” ¡y listo!.\n' +
        '\n' +
        'En Paris, siempre encontrarás lo que estás buscando. Verás una amplia gama de productos, las mejores marcas y convenientes descuentos exclusivos que podrás disfrutar al pagar con tu  **Tarjeta Cencosud**.\n' +
        '\n' +
        'Como regla general, los productos que se encuentran publicados en  [Paris.cl](https://www.paris.cl/)  están disponibles. En el caso de quiebre de stock en bodega, te avisaremos por correo para ofrecerte una alternativa.\n' +
        '\n' +
        'Al realizar tus compras en Paris, estarás acumulando  **Puntos Cencosud**, los que podrás canjear para tus próximas compras y podrás acceder a increíbles promociones.',
      order: 6,
      helpCategory: context.cencosudParis,
      icon: '/icons/cards/promesaServicios.svg',
      description: '',
    });

    context.terminosCondicionesParis = em.create(HelpContent, {
      label: 'Términos y Condiciones',
      reference: 'https://www.paris.cl/terminos-y-condiciones.html',
      content:
        '# Términos y Condiciones\n' +
        '\n' +
        '### 1. Antecedentes Generales\n' +
        '\n' +
        'A través de este sitio web Cencosud Retail S.A. rut 81.201.000-K y su división Paris.cl ofrece sus productos vía electrónica o utilizando los mecanismos que el sitio web dispone como necesarios.\n' +
        '\n' +
        'Al ser aceptada una o más de estas ofertas ofrecidas en el sitio web, esta quedará sujeta a que se valide la transacción. En consecuencia, para toda transacción que se efectúe en este sitio, la confirmación, validación y verificación por parte de Paris S.A o de otras empresas ofertantes en el sitio web, será requisito para la formación del consentimiento. Para validar la transacción se verificará lo siguiente:\n' +
        '\n' +
        '1.  Stock disponible de los productos o servicios ofrecidos al momento en que se acepta la oferta.\n' +
        '2.  Validación del medio de pago elegido por el cliente.\n' +
        '3.  Validación de los datos registrados por el cliente. Estos deberán coincidir con los ingresados por el cliente en el sitio web al momento de registrarse o al momento de haber aceptado la oferta.\n' +
        '4.  Toda transacción que incluya bebidas alcohólicas deberá ser realizada por un mayor de 18 años.\n' +
        '\n' +
        'Al momento de ser validada la transacción se contactará al cliente vía correo electrónico, a la dirección de e-mail ingresada por aquel al momento de registrar sus datos personales en el sitio web en cuestión. En caso de que se estime necesario por parte de la parte oferente el cliente podrá ser contactado por otro medio de comunicación. Esto garantizando que el cliente sea informado de dicha validación.\n' +
        '\n' +
        '### 2. Almacenamiento, Finalidad, Custodia Y Tratamiento De Los Datos\n' +
        '\n' +
        'El usuario gozará de todos los derechos que le reconoce la legislación vigente en el territorio de Chile, además de los que se le otorgan en estos términos y condiciones. La sola visita a este sitio no impone al consumidor obligación alguna, a menos que haya aceptado en forma inequívoca las condiciones ofrecidas por la empresa, en la forma indicada en estos Términos y Condiciones.\n' +
        '\n' +
        'Esta plataforma permite otorgar a los Usuarios diversos beneficios, sobre la base de la información que estos proporcionan a momento de registrarse.\n' +
        '\n' +
        'Esta plataforma en base al conocimiento de la información personal de los Usuarios puede, entre otros beneficios, enviar detalles de ofertas, promociones y actualizaciones y/o novedades de productos y/o servicios, a los mismos, permitiendo que esta plataforma pueda ofrecer mejoras a la experiencia de los Usuarios, procurando responder a las necesidades de estos.\n' +
        '\n' +
        'Por ello es importante que el Usuario tenga presente que cuando acepta su incorporación a la plataforma, declara que los antecedentes o datos de carácter personal que proporciona, en adelante la “Información”, son sustancialmente correctos y corresponden a la realidad, debiendo comunicar cualquier modificación o cambio en estos, tan pronto como se produjeren. Para esta plataforma, la anterior declaración es un elemento determinante para permitir la incorporación del Usuario, siendo el Usuario personalmente responsable de las consecuencias que pudiere ocasionar su incumplimiento.\n' +
        '\n' +
        'En consideración a lo anterior, el Usuario consiente expresamente que, como efecto de su incorporación a esta plataforma, la Información que se acumule, recolecte, reciba o recoja de los Usuarios, podrá ser objeto de: (i) almacenamiento, entendiendo por tal el archivo de la información en lugares especialmente destinados al efecto; (ii) procesamiento, entendiendo por tal los mecanismos y procesos que permitan brindar al Usuario los servicios ofrecidos; (iii) tratamiento, entendiendo por tal cualquier operación o complejo de operaciones o procedimientos técnicos, de carácter automatizado o no, que permitan recolectar, almacenar, grabar, organizar, elaborar, agrupar, seleccionar, extraer, confrontar, interconectar, disociar o cancelar la información; y/o (iv) disposición, entendiendo por tal comunicar, ceder, transferir, transmitir o cancelar datos de carácter personal o utilizarlos en cualquier forma autorizada. Lo anterior salvo que el Usuario, respecto del tratamiento y disposición, expresamente instruya lo contrario llamando al teléfono con nuestro Servicio al Cliente al 600 400 8000.\n' +
        '\n' +
        '2.- La Información almacenada podrá ser usada para los fines que, a continuación, se expresan:\n' +
        '\n' +
        '(i) la confección y/o mejora de los productos y/o servicios que la plataforma, le prestan a los Usuarios, así como el diseño de nuevos productos y/o servicios para estos; (ii) el envío por cualquier vía de todo tipo de información, incluyendo, pero no limitada a, antecedentes técnicos, publicidad, ofertas y promoción de productos y/o servicios, ya sean de esta plataforma, o de cualquier otra empresa que forme parte, o llegaran a formar parte del Grupo Cencosud; y (iii) la realización de estudios individuales y/o colectivos de cualquier tipo como, por ejemplo, estudios en materia demográfica, histórica, comportamiento de los Usuarios e investigaciones de mercado; cuidando siempre de la reserva y confidencialidad de los datos personales de la manera exigida por la ley.\n' +
        '\n' +
        '3.- La plataforma podrá disponer y comunicar al resto de las empresas que forman parte, o llegaran a formar parte del Grupo Cencosud; todo o parte de la Información proporcionada por el Usuario, caso en el cual su destinatario deberá cumplir con alguno de los siguientes requisitos:\n' +
        '\n' +
        '(i) ser una persona relacionada a la propiedad o gestión de empresas que forman parte, o llegaran a formar parte del Grupo Cencosud; y/o\n' +
        '\n' +
        '(ii) ser una filial o controladora de la misma, o una persona jurídica que esté bajo el control común de empresas que forman parte, o llegaran a formar parte, del Grupo Cencosud; y/o de las sociedades con que estas establezcan acuerdos comerciales para el desarrollo de estrategias vinculadas con su giro.\n' +
        '\n' +
        'La plataforma procurará que el destinatario de la referida información garantice que esta será tratada bajo adecuados parámetros de reserva y que, en el evento que el Usuario se oponga al uso de esta, será eliminada de los registros respectivos. Por último, esta plataforma como los citados destinatarios solo podrán usarla Información con los propósitos informados precedentemente, caso este último en que las condiciones de esta política aplicables a la Plataforma deberán ser cumplidas por dichos destinatarios.\n' +
        '\n' +
        'El Usuario puede revocar la autorización que entrega para tratar sus datos personales en cualquier momento, en cuyo caso es posible que no pueda utilizar alguno o todos los servicios que ofrece la plataforma. Es tu derecho pedirnos información sobre los datos personales tuyos que hayamos recolectado y ejercer tus derechos de rectificación, cancelación, oposición. y todos los demás derechos que confiere la Ley N° 19.628 sobre Protección de la Vida Privada. Para ejercer estos derechos solo deberás llamar al teléfono de nuestro Servicio al Cliente al 600 400 8000. Del mismo modo, siempre puedes solicitar la suspensión de comunicaciones promocionales o publicitarias, de conformidad a lo dispuesto en el artículo 28 B de la Ley N°19.496 sobre Protección de los Derechos de los Consumidores.\n' +
        '\n' +
        '### 3. Precios\n' +
        '\n' +
        'Los precios y las condiciones ofrecidas en la página web de Paris.cl son exclusivos y vigentes de este canal online, y no necesariamente son los mismos de tiendas físicas de Paris.\n' +
        '\n' +
        '### 4. Promociones - Ofertas\n' +
        '\n' +
        'Las promociones y ofertas estarán vigentes en este sitio según el plazo informado en las bases legales de cada campaña, o evento comercial relacionado. Estas pueden ser exclusivas del canal online y no necesariamente aplicables en tiendas físicas.\n' +
        '\n' +
        '### 5. Medios de Pago Aceptados\n' +
        '\n' +
        'Los productos ofrecidos en Paris.cl, salvo que se señale una forma diferente para casos particulares u ofertas determinadas, solo pueden ser pagados con:\n' +
        '\n' +
        '1.  Tarjeta de crédito Cencosud Scotiabank\n' +
        '2.  Tarjetas de Crédito Bancarias emitidas en Chile\n' +
        '3.  Tarjetas de Crédito emitidas en el extranjero.\n' +
        '4.  Tarjeta de Débito\n' +
        '5.  Gift Card por el monto total de la compra o solo una parte. Podrá usar otro medio de pago para completar el precio de un producto. Ten presente que nuestra plataforma web solo permite la utilización de una Gift Card por compra en Paris.cl.\n' +
        '\n' +
        'En caso de anulación de la compra, una vez que el producto haya sido físicamente devuelto a Paris, se emitirá una nota de crédito para reembolsar tu dinero. Ten presente que el medio de pago que utilizaste es el que determina el plazo en que recibirás el reembolso de tu dinero. Si realizaste tu compra con Tarjeta Scotiabank Cencosud, Tarjetas de Crédito o Gift Card el cargo será anulado en 10 días hábiles aproximadamente y puede variar dependiendo de la entidad bancaria. La reversa o abono se verá reflejado en el estado de cuenta de tu tarjeta en el período siguiente o subsiguiente dependiendo de la fecha de facturación mensual de tu tarjeta.\n' +
        '\n' +
        'Si ocupaste una Tarjeta de Débito, realizaremos una transferencia electrónica a la cuenta corriente que tú nos indiques, en un plazo máximo de 30 días hábiles desde que se emite la Nota de Crédito y que tenemos tus datos bancarios.\n' +
        '\n' +
        '### 6. Despacho y entrega de productos\n' +
        '\n' +
        '**6.1. El costo del despacho.**\n' +
        '\n' +
        'El costo del despacho dependerá de:\n' +
        '\n' +
        '1.  **El tamaño del producto:** Contamos con 3 categorías: pequeño, mediano y grande;\n' +
        '2.  **El lugar del destino:** En Paris existen costos diferenciados entre los destinos de entrega;\n' +
        '3.  **El tipo de despacho que selecciones:** Contamos con tres tipos de despachos: programado, con rango de fechas y rango horario;\n' +
        '4.  **La cantidad de unidades por carro de compra:** La tarifa dependerá de la cantidad de unidades por tipo de productos;\n' +
        '5.  **Origen:** El que puede ser despachado desde un Centro de Distribución centralizado, desde la tienda Paris o desde las bodegas del fabricante del producto según correspondiere.\n' +
        '\n' +
        '**6.2 Horarios y plazo de entrega para despacho a domicilio**\n' +
        '\n' +
        'Tenemos tres tipos de despacho: despacho por rango de fechas, despacho programado y despacho por rango horario. El valor del servicio varía dependiendo de la dirección de entrega que selecciones, el tamaño o volumen del o los productos, la cantidad de productos que tengas en tu carro, y el lugar desde donde se despacha el producto (centralizado; tienda o fabricante).\n' +
        '\n' +
        'Debes tener en cuenta que los productos, pueden ser despachados en camiones y fechas distintas, dependiendo del origen del producto. Antes de comprar, revisa las comunas vigentes para nuestro servicio de despacho y la tabla de valores en [https://ayuda.paris.cl/ayuda/despacho-a-domicilio/costos-de-despacho.](https://ayuda.paris.cl/ayuda/despacho-a-domicilio/costos-de-despacho.)\n' +
        '\n' +
        'Por tanto, nuestros tipos de despachos son los siguientes:\n' +
        '\n' +
        '1.  **Despacho programado**, en donde tú eliges la fecha y el horario conforme a la disponibilidad que te informamos al momento de efectuar la solicitud de compra;\n' +
        '2.  **Despacho por rango de fechas**, en esta modalidad tu producto llegará dentro de un rango de fechas ya establecido y se despachará directamente desde el local del fabricante del producto a tu domicilio. Si compraste varios productos en una misma transacción bajo esta modalidad, estos podrían ser entregados en distintos despachos, lo que no aumentará el costo;\n' +
        '3.  **Despacho por rango horario,** está disponible solo para la categoría de muebles, línea blanca y TV. Esta modalidad te permite elegir entre 3 rangos de horario para recibir tu producto: mañana (09:00 a 12:00), medio día (12:00 a 16:00), o tarde (15:00 a 18:00).\n' +
        '\n' +
        'Eventualmente cuando una misma compra considera productos bajo la modalidad de despacho programado y despacho por rango de fechas, el costo de despacho estará asociado a cada uno de estos dependiendo de su origen, y así será informado en el resumen de tu compra antes de pagar.\n' +
        '\n' +
        'Las compras serán entregadas por personal autorizado de Paris al cliente o a la persona que previamente fue autorizada en el paso 2 de despacho, quien necesariamente debe ser mayor de edad y acreditar sus datos con su cédula de identidad.\n' +
        '\n' +
        'Si tu producto no llegó en la fecha que correspondía, debes revisar en el resumen de tu compra el detalle de las fechas de despacho por producto. Es posible que, si compraste más de un producto, estos puedan ser despachados en camiones y fechas diferentes. Revisa el Seguimiento de tu Orden.\n' +
        '\n' +
        '**6.3. Plazos para retiro en tienda**\n' +
        '\n' +
        "Si al enviar la solicitud de compra escogiste la opción de retiro en tienda, ten en consideración que una de las condiciones de la compra es que el producto debe ser retirado en máximo en 3 días desde que quedó 'Listo para Retiro'. Revisa tus pedidos y el estado de tu orden en [www.paris.cl](https://www.paris.cl/). Podrás retirar el producto en la tienda desde la fecha en que indique 'Listo para Retiro'.\n" +
        '\n' +
        'Recuerda que:\n' +
        '\n' +
        '1.  Para el retiro debes llevar tu cédula de identidad y un documento que acredite la compra (Número de orden, boleta o factura); y\n' +
        '2.  Solo puede retirar la persona que realiza la compra o la persona autorizada al momento de la compra. Si olvidaste incluir a otra persona para retiro al momento de comprar o bien algo te impide retirar tu compra el día que te corresponde, sigue los pasos informados en [https://ayuda.paris.cl/ayuda/retiro-en-tienda/compra-con-retiro](https://ayuda.paris.cl/ayuda/retiro-en-tienda/compra-con-retiro) y autoriza a otra persona para que lo haga por ti.\n' +
        '\n' +
        'Si el producto no es retirado en plazo, la compra se dejará sin efecto y se te devolverá el total de lo pagado al medio de pago correspondiente, en un plazo de 10 días hábiles.\n' +
        '\n' +
        '### 7. Cambios y devoluciones\n' +
        '\n' +
        '**7.1. Devoluciones**\n' +
        '\n' +
        'Podrás devolver en cualquiera de nuestras tiendas el o los productos que hayas comprado en [www.paris.cl](https://www.paris.cl/). Para esto tienes 30 días corridos, desde la fecha de recepción del producto. Es condición para la devolución que el producto que compraste y quieres devolver se encuentre en perfecto estado: sin uso, con etiquetas adherida en su embalaje original, sellado y con todos sus accesorios.\n' +
        '\n' +
        'En el caso de que tengas productos de mayor tamaño o dificultad de traslado debes coordinar el retiro del producto a través de nuestro Servicio al Cliente y te reembolsaremos solo el valor pagado por el producto, es decir, no se devolverá el costo del despacho.\n' +
        '\n' +
        '**7.2. Cambios**\n' +
        '\n' +
        'El cambio solo aplica para productos de fácil traslado. Para esto tienes 60 días corridos desde la fecha de recepción del producto.\n' +
        '\n' +
        'Es condición para el cambio que el producto esté en perfecto estado: sin uso, con etiqueta adherida en su embalaje original, sellado y con sus accesorios.\n' +
        '\n' +
        'Solo debes llevarlo a la tienda que más te acomode, con tu Cédula de Identidad y un documento que acredite la compra (Número de orden, boleta o factura). Recuerda que solo puede realizar el cambio la persona titular o la persona autorizada al momento de la compra.\n' +
        '\n' +
        'Para cambios o devoluciones los productos no pueden haber sido probados y/o usados, deben tener su embalaje original completo y todos sus accesorios, manuales y folletos. Por ello, cuando abras el producto, hazlo con cuidado para no romper sellos, gráficas de caja, bolsas y plumavit.\n' +
        '\n' +
        '**7.3. Productos Usados, de Segunda Mano y/o Reutilizados**\n' +
        '\n' +
        'Conforme al artículo 14 de la ley 19.496 _Sobre Protección de los Derechos de los Consumidores,_ los productos usados, los de segunda mano y/o los reutilizados, que son comercializados de dicha forma debidamente informado al consumidor en forma previa a la compra, no cuentan con la garantía legal mínima de los artículos 19 y 20 de la misma ley.\n' +
        '\n' +
        'Sin perjuicio de lo anterior, los productos mencionados en el párrafo anterior, tendrán un plazo de 10 días para devoluciones. El producto debe ser devuelto sin uso, tal como salió de la tienda, en perfectas condiciones y con su etiqueta.\n' +
        '\n' +
        '### 8. Garantías\n' +
        '\n' +
        '**8.1. Garantía Normal (legal)**\n' +
        '\n' +
        'Todos los productos que compres tienen 6 meses de garantía. Solo debes traerlo con un documento que acredite la compra, como, por ejemplo, la boleta, el voucher, el correo de confirmación de compra u otro similar, y será derivado al servicio técnico, el que evaluará y certificará la falla dentro de 15 días hábiles en Santiago (20 días hábiles en regiones);\n' +
        '\n' +
        'Si el resultado indica que la falla corresponde a deficiencias en la fabricación no atribuibles a deterioros por un hecho imputable al consumidor, puedes elegir 3 opciones: reparación, cambio o anulación.\n' +
        '\n' +
        'En el caso de productos de difícil traslado puedes coordinar el retiro a domicilio llamando al [600 400 8000](tel:6004008000) sin costo en el caso que la falla sea certificada como tal.\n' +
        '\n' +
        '**8.2. Garantía Extendida**\n' +
        '\n' +
        'El servicio de garantía extendida de Paris permite extender la garantía de tus productos entre 1 a 4 años una vez que vence la garantía original del fabricante, para productos de línea blanca, electrodomésticos, imagen y audio, electrónica y computación.\n' +
        '\n' +
        'La garantía extendida incluye:\n' +
        '\n' +
        '1.  Traslado de productos de gran tamaño sin costo al servicio técnico.\n' +
        '2.  Reparación o reemplazo de piezas o partes que presenten fallas mecánicas u operacionales.\n' +
        '3.  Cambio del producto después de la 3ª reparación.\n' +
        '4.  Protege tu producto ante variaciones de voltaje.\n' +
        '5.  Cobertura de robo para objetos portátil, teléfonos celulares y otros artículos, por un costo adicional.\n' +
        '\n' +
        'Para activar la garantía extendida debes presentar:\n' +
        '\n' +
        '1.  Tu boleta para comprobar la compra de tu producto.\n' +
        '2.  Los datos del certificado de la garantía deben estar completos.\n' +
        '3.  Número de identificación o serie del producto legible y sin alteraciones.\n' +
        '\n' +
        'Para hacer efectiva tu garantía extendida, solo tienes que llamar al [600 422 1000](tel:6004221000) y un ejecutivo atenderá tu llamado.\n' +
        '\n' +
        '**ADVERTENCIA IMPORTANTE:** Todo producto electrónico que es enviado al Servicio Técnico pierde su información, por eso, sugerimos te asegures y respaldes todo. Se considerará falla, en los productos con problemas en su Hardware y no Software.\n' +
        '\n' +
        "**8.3. La Garantía en la Ley 19.496 'Sobre Protección de los Derechos de los Consumidores':**\n" +
        '\n' +
        'La Legislación vigente en Chile considera la garantía y la expresa de la siguiente manera en los artículos 20 y 21 de la ley 19.496:\n' +
        '\n' +
        '**Artículo 20.-** En los casos que a continuación se señalan, sin perjuicio de la indemnización por los daños ocasionados, el consumidor podrá optar entre la reparación gratuita del bien o, previa restitución, su reposición o la devolución de la cantidad pagada:\n' +
        '\n' +
        '1.  Cuando los productos sujetos a normas de seguridad o calidad de cumplimiento obligatorio no cumplan las especificaciones correspondientes;\n' +
        '2.  Cuando los materiales, partes, piezas, elementos, sustancias o ingredientes que constituyan o integren los productos no correspondan a las especificaciones que ostenten o a las menciones del rotulado;\n' +
        '3.  Cuando cualquier producto, por deficiencias de fabricación, elaboración, materiales, partes, piezas, elementos, sustancias, ingredientes, estructura, calidad o condiciones sanitarias, en su caso, no sea enteramente apto para el uso o consumo al que está destinado o al que el proveedor hubiese señalado en su publicidad;\n' +
        '4.  Cuando el proveedor y consumidor hubieren convenido que los productos objeto del contrato deban reunir determinadas especificaciones y esto no ocurra;\n' +
        '5.  Cuando después de la primera vez de haberse hecho efectiva la garantía y prestado el servicio técnico correspondiente, subsistieren las deficiencias que hagan al bien inapto para el uso o consumo a que se refiere la letra c). Este derecho subsistirá para el evento de presentarse una deficiencia distinta a la que fue objeto del servicio técnico, o volviere a presentarse la misma, dentro de los plazos a que se refiere el artículo siguiente;\n' +
        '6.  Cuando la cosa objeto del contrato tenga defectos o vicios ocultos que imposibiliten el uso a que habitualmente se destine;\n' +
        '7.  Cuando la ley de los metales en los artículos de orfebrería, joyería y otros sea inferior a la que en ellos se indique.\n' +
        '\n' +
        'Para los efectos del presente artículo se considerará que es un solo bien aquel que se ha vendido como un todo, aunque esté conformado por distintas unidades, partes, piezas o módulos, no obstante que estas puedan o no prestar una utilidad en forma independiente unas de otras. Sin perjuicio de ello, tratándose de su reposición, esta se podrá efectuar respecto de una unidad, parte, pieza o módulo, siempre que sea por otra igual a la que se restituye.\n' +
        '\n' +
        '**Artículo 21.-** El ejercicio de los derechos que contemplan los artículos 19 y 20 deberá hacerse efectivo ante el vendedor dentro de los tres meses siguientes a la fecha en que se haya recibido el producto, siempre que este no se hubiere deteriorado por hecho imputable al consumidor. Si el producto se hubiere vendido con determinada garantía, prevalecerá el plazo por el cual esta se extendió, si fuere mayor.\n' +
        '\n' +
        'El consumidor que, en el ejercicio de los derechos que contempla el artículo 20, opte por la reparación, podrá dirigirse, indistinta o conjuntamente, al vendedor, al fabricante o al importador. Hecha la opción, el requerido no podrá derivar el reclamo.\n' +
        '\n' +
        'Serán solidariamente responsables por los perjuicios ocasionados al consumidor, el proveedor que haya comercializado el bien o producto y el importador que lo haya vendido o suministrado. En caso de que el consumidor solicite la reparación solo al vendedor, este gozará del derecho de resarcimiento señalado en el artículo 22.\n' +
        '\n' +
        'Las acciones a que se refiere el inciso primero podrán hacerse valer, asimismo, indistintamente en contra del fabricante o el importador, en caso de ausencia del vendedor por haber sido sometido a un procedimiento concursal de liquidación, término de giro u otra circunstancia semejante. Tratándose de la devolución de la cantidad pagada, la acción no podrá intentarse sino respecto del vendedor.\n' +
        '\n' +
        'El vendedor, fabricante o importador, en su caso, deberá responder al ejercicio de los derechos a que se refieren los artículos 19 y 20 en el mismo local donde se efectuó la venta o en las oficinas o locales en que habitualmente atiende a sus clientes, no pudiendo condicionar el ejercicio de los referidos derechos a efectuarse en otros lugares o en condiciones menos cómodas para el consumidor que las que se le ofreció para efectuar la venta, salvo que este consienta en ello.\n' +
        '\n' +
        'En el caso de productos perecibles o que por su naturaleza estén destinados a ser usados o consumidos en plazos breves, el término a que se refiere el inciso primero será el impreso en el producto o su envoltorio o, en su defecto, el término máximo de siete días.\n' +
        '\n' +
        'El plazo que la póliza de garantía otorgada por el proveedor contemple y aquel a que se refiere el inciso primero de este artículo, se suspenderán durante el tiempo en que el bien esté siendo reparado en ejercicio de la garantía.\n' +
        '\n' +
        'Tratándose de bienes amparados por una garantía otorgada por el proveedor, el consumidor, antes de ejercer alguno de los derechos que le confiere el artículo 20, deberá hacerla efectiva ante quien corresponda y agotar las posibilidades que ofrece, conforme a los términos de la póliza.\n' +
        '\n' +
        'La póliza de garantía a que se refiere el inciso anterior producirá plena prueba si ha sido fechada y timbrada al momento de la entrega del bien. Igual efecto tendrá la referida póliza, aunque no haya sido fechada ni timbrada al momento de la entrega del bien, siempre que se exhiba con la correspondiente factura o boleta de venta.\n' +
        '\n' +
        'Tratándose de la devolución de la cantidad pagada, el plazo para ejercer la acción se contará desde la fecha de la correspondiente factura o boleta y no se suspenderá en caso alguno. Si tal devolución se acordardará una vez expirado el plazo a que se refiere el artículo 70 del decreto Ley Nº 825, de 1974, el consumidor solo tendrá derecho a recuperar el precio neto del bien, excluidos los impuestos correspondientes.\n' +
        '\n' +
        'Para ejercer estas acciones, el consumidor deberá acreditar el acto o contrato con la documentación respectiva, salvo en casos en que el proveedor tribute bajo el régimen de renta presunta, en los cuales el acto o contrato podrá ser acreditado mediante todos los medios de prueba que sean conducentes...\n' +
        '\n' +
        '**9. Recupera tu boleta**\n' +
        '\n' +
        'Si necesitas recuperar tu boleta, solo debes seguir los siguientes pasos:\n' +
        '\n' +
        '1.  Ingresa a Ayuda Paris.\n' +
        '2.  Ingresar el número de tu orden o boleta;\n' +
        "3.  Selecciona 'Ver más' en el producto en el cual quieras recuperar tu boleta\n" +
        '4.  Selecciona recuperar tu boleta.\n' +
        '\n' +
        '**10. Reclamos - Jurisdicción**\n' +
        '\n' +
        'Para presentar solicitudes, y/o reclamos referentes a acciones ejecutadas o celebradas a través de este sitio comunicarse con nuestro Servicio al Cliente al [600 400 8000](tel:6004008000) o ingresando al Formulario de Contacto disponible en https://ayuda.paris.cl/ayuda/contactanos.\n' +
        '\n' +
        'Las controversias que surjan en relación con lo establecido en estos Términos y Condiciones podrán interponerse, a elección del consumidor, ante el juzgado de policía local correspondiente a su domicilio o al domicilio del proveedor. Sin perjuicio de la competencia de los tribunales ordinarios de justicia para otro tipo de materias. Todo lo anterior, según el artículo 50 A de la ley 19.496.\n' +
        '\n' +
        '**11. Representante Legal**\n' +
        '\n' +
        'Para todos los efectos legales y relacionados con la presente información Cencosud Retail S.A designa como representante legal de la empresa al señor Ricardo González Novoa. Rut: 14.292.860-4. Domiciliado en Av. Presidente Kennedy 9001, Piso 4, Las Condes.\n' +
        '\n' +
        '**12. Vigencia términos y condiciones**\n' +
        '\n' +
        'Estos Términos y Condiciones corresponden a la versión vigente a contar del día 31 de diciembre de 2021, publicada y comunicada en el sitio [www.paris.cl](https://www.paris.cl/) con la misma fecha.\n' +
        '',
      order: 7,
      helpCategory: context.cencosudParis,
      icon: '/icons/cards/tyc.svg',
      description: '',
    });

    context.privacidadDatosParis = em.create(HelpContent, {
      label: 'Políticas de Privacidad y Protección de Datos',
      reference: '/privacidad-datos',
      content:
        '# Políticas de Privacidad y Protección de Datos\n' +
        '\n' +
        '### 1. Introducción\n' +
        '\n' +
        'Cuando ingreses a [Paris.cl](https://www.paris.cl/) queremos que tengas una experiencia única que cumpla con la calidad y satisfacción que estás buscando. Cada vez que nos visites tendremos la oportunidad de conocer tus necesidades y preferencias de navegación. Esa información estadística es de gran relevancia para nosotros porque nos ayudará a mejorar constantemente nuestro servicio para entregarte una grata experiencia de navegación y compra.\n' +
        '\n' +
        'Esta información no nos permite identificar a un cliente determinado, solo tiene relación con datos sobre un determinado producto, grupo, página o categoría de productos y/o servicios.\n' +
        '\n' +
        '### 2. Almacenamiento, Finalidad, Custodia y Tratamiento\n' +
        '\n' +
        'El usuario gozará de todos los derechos que le reconoce la legislación vigente en el territorio de Chile, además de los que se le otorgan en estos términos y condiciones. La sola visita a este sitio no impone al consumidor obligación alguna, a menos que haya aceptado en forma inequívoca las condiciones ofrecidas por la empresa, en la forma indicada en estos Términos y Condiciones.\n' +
        '\n' +
        'Esta plataforma permite otorgar a los Usuarios diversos beneficios, sobre la base de la información que estos proporcionan a momento de registrarse.\n' +
        '\n' +
        'Esta plataforma en base al conocimiento de la información personal de los Usuarios puede, entre otros beneficios, enviar detalles de ofertas, promociones y actualizaciones y/o novedades de productos y/o servicios, a los mismos, permitiendo que esta plataforma pueda ofrecer mejoras a la experiencia de los Usuarios, procurando responder a las necesidades de estos.\n' +
        '\n' +
        'Por ello es importante que el Usuario tenga presente que cuando acepta su incorporación a la plataforma, declara que los antecedentes o datos de carácter personal que proporciona, en adelante la “Información”, son sustancialmente correctos y corresponden a la realidad, debiendo comunicar cualquier modificación o cambio en estos, tan pronto como se produjeren. Para esta plataforma, la anterior declaración es un elemento determinante para permitir la incorporación del Usuario, siendo el Usuario personalmente responsable de las consecuencias que pudiere ocasionar su incumplimiento.\n' +
        '\n' +
        'En consideración a lo anterior, el Usuario consiente expresamente que, como efecto de su incorporación a esta plataforma, la Información que se acumule, recolecte, reciba o recoja de los Usuarios, podrá ser objeto de: (i) almacenamiento, entendiendo por tal el archivo de la información en lugares especialmente destinados al efecto; (ii) procesamiento, entendiendo por tal los mecanismos y procesos que permitan brindar al Usuario los servicios ofrecidos; (iii) tratamiento, entendiendo por tal cualquier operación o complejo de operaciones o procedimientos técnicos, de carácter automatizado o no, que permitan recolectar, almacenar, grabar, organizar, elaborar, agrupar, seleccionar, extraer, confrontar, interconectar, disociar o cancelar la información; y/o (iv) disposición, entendiendo por tal comunicar, ceder, transferir, transmitir o cancelar datos de carácter personal o utilizarlos en cualquier forma autorizada. Lo anterior salvo que el Usuario, respecto del tratamiento y disposición, expresamente instruya lo contrario llamando al teléfono con nuestro Servicio al Cliente al 600 400 8000.\n' +
        '\n' +
        '2.- La Información almacenada podrá ser usada para los fines que, a continuación, se expresan:\n' +
        '\n' +
        '(i) la confección y/o mejora de los productos y/o servicios que la plataforma, le prestan a los Usuarios, así como el diseño de nuevos productos y/o servicios para estos; (ii) el envío por cualquier vía de todo tipo de información, incluyendo, pero no limitada a, antecedentes técnicos, publicidad, ofertas y promoción de productos y/o servicios, ya sean de esta plataforma, o de cualquier otra empresa que forme parte, o llegaran a formar parte del Grupo Cencosud; y (iii) la realización de estudios individuales y/o colectivos de cualquier tipo como, por ejemplo, estudios en materia demográfica, histórica, comportamiento de los Usuarios e investigaciones de mercado; cuidando siempre de la reserva y confidencialidad de los datos personales de la manera exigida por la ley.\n' +
        '\n' +
        '3.- La plataforma podrá disponer y comunicar al resto de las empresas que forman parte, o llegaran a formar parte del Grupo Cencosud; todo o parte de la Información proporcionada por el Usuario, caso en el cual su destinatario deberá cumplir con alguno de los siguientes requisitos:\n' +
        '\n' +
        '(i) ser una persona relacionada a la propiedad o gestión de empresas que forman parte, o llegaran a formar parte del Grupo Cencosud; y/o\n' +
        '\n' +
        '(ii) ser una filial o controladora de la misma, o una persona jurídica que esté bajo el control común de empresas que forman parte, o llegaran a formar parte, del Grupo Cencosud; y/o de las sociedades con que estas establezcan acuerdos comerciales para el desarrollo de estrategias vinculadas con su giro.\n' +
        '\n' +
        'La plataforma procurará que el destinatario de la referida información garantice que esta será tratada bajo adecuados parámetros de reserva y que, en el evento que el Usuario se oponga al uso de esta, será eliminada de los registros respectivos. Por último, esta plataforma como los citados destinatarios solo podrán usarla Información con los propósitos informados precedentemente, caso este último en que las condiciones de esta política aplicables a la Plataforma deberán ser cumplidas por dichos destinatarios.\n' +
        '\n' +
        'El Usuario puede revocar la autorización que entrega para tratar sus datos personales en cualquier momento, en cuyo caso es posible que no pueda utilizar alguno o todos los servicios que ofrece la plataforma. Es tu derecho pedirnos información sobre los datos personales tuyos que hayamos recolectado y ejercer tus derechos de rectificación, cancelación, oposición. y todos los demás derechos que confiere la Ley N° 19.628 sobre Protección de la Vida Privada. Para ejercer estos derechos solo deberás llamar al teléfono de nuestro Servicio al Cliente al 600 400 8000.\n' +
        '\n' +
        'Del mismo modo, siempre puedes solicitar la suspensión de comunicaciones promocionales o publicitarias, de conformidad a lo dispuesto en el artículo 28 B de la Ley N°19.496 sobre Protección de los Derechos de los Consumidores.\n' +
        '\n' +
        '### 3. Cookies en Paris.cl\n' +
        '\n' +
        "Una cookie (o galleta informática) es información enviada por un sitio web y almacenada en el navegador del usuario, que le permite al sitio web conocer la actividad previa de este. Paris.cl usa las 'cookies' para enviar al Cliente información relacionada con sus intereses. Paris.cl utiliza las cookies de persistencia para entregar únicamente una experiencia de compra más personalizada y así ayudar al visitante a navegar de forma más eficiente.\n" +
        '\n' +
        'Si deseas deshabilitar el almacenamiento de cookies de Paris.cl solo debes ingresar a la sección de ayuda del explorador de internet.\n' +
        '\n' +
        '### 4. Google Analytics en Paris.cl\n' +
        '\n' +
        'Google Analytics es una herramienta para el análisis web que mediante la utilización de cookies permite entregar información estadística, anónima, asociada a los visitantes de Paris.cl.\n' +
        '\n' +
        'Adicionalmente Paris.cl utiliza esta herramienta para fines publicitarios, mostrando anuncios en los sitios web asociados a la red de contenido de Google basándose en las visitas previas a nuestro sitio, lo que se conoce como Remarketing.\n' +
        '\n' +
        'Para evitar la recopilación de datos desde Google Analytics existen las siguientes alternativas:\n' +
        '\n' +
        'Deshabilitar el almacenamiento de cookies en el explorador de internet correspondiente.\n' +
        '\n' +
        'Descargar un complemento al explorador de internet en el siguiente link: [https://tools.google.com/dlpage/gaoptout/](https://tools.google.com/dlpage/gaoptout/).\n' +
        '\n' +
        'Términos legales La información que se recolectará mediante la visita a este sitio Web, será siempre anónima, de manera que, los antecedentes personales de los Clientes no serán tratados por Paris con un propósito diferente del manifestado en el presente instrumento.\n' +
        '\n' +
        'Los clientes tendrán siempre derecho a deshabilitar las cookies de que se da cuenta en los numerales anteriores, no pudiendo Paris evitar de manera alguna dicha acción.\n' +
        '\n' +
        'La utilización de la información a que acceda Paris con motivo de la visita a su sitio Web procurará siempre efectuarse con el propósito exclusivo de mejorar la experiencia de compra de sus clientes.\n' +
        '\n' +
        '### 5. Medidas de Seguridad\n' +
        '\n' +
        'Para cumplir los objetivos de seguridad Paris.cl cuenta con la tecnología SSL (Secure Sockets Layer) que asegura, tanto la autenticidad del Sitio, como el cifrado de toda la información que nos entrega el usuario. Cada vez que el usuario se registra en el Sitio y entrega información de carácter personal, sin importar el lugar geográfico en donde se encuentre, a efectos de comprar un producto, el navegador por el cual ejecuta el acto se conecta al Sitio a través del protocolo SSL que acredita que el usuario se encuentra efectivamente en el Sitio y en nuestros servidores (lo cual se aprecia con la aparición del código HTTPS en la barra de direcciones del navegador). De esta forma se establece un método de cifrado de la información entregada por el usuario y una clave de sesión única. Esta tecnología permite que la información de carácter personal del usuario, como su nombre, dirección y datos de tarjetas bancarias, sean codificadas antes para que no pueda ser leída cuando viaja a través de Internet. Todos los certificados SSL se crean para un servidor particular, en un dominio específico y para una entidad comercial comprobada.\n' +
        '\n' +
        '### 6. Certificaciones\n' +
        '\n' +
        'Certificado de Seguridad SSL GlobalSign Extended Validation CA\n' +
        '\n' +
        'Los certificados SSL protegen los datos personales de los clientes, incluyendo: domicilio, contraseñas, tarjetas bancarias, información de su identidad e historial de compras no serán divulgados. Esta tecnología también impide el acceso a la información por parte de terceros.\n' +
        '\n' +
        'Certificado de Site Blindado.\n' +
        '\n' +
        'El Sitio es permanentemente sujeto a evaluaciones en tiempo real de posibles vulnerabilidades.\n' +
        '\n' +
        '### 7. Permisos en Paris app\n' +
        '\n' +
        '### Permisos de geolocalización\n' +
        '\n' +
        'La localización permite que las aplicaciones móviles puedan utilizar la información de redes celulares, Wi-Fi, redes de sistema de posicionamiento global (GPS) y Bluetooth para conocer cuál es tu ubicación determinada.\n' +
        '\n' +
        'Al darnos permiso para conocer tu ubicación, podremos saber si te encuentras en una tienda Paris para ofrecerte los servicios del Escáner de productos y “Avisa y Retira” con los que buscamos mejorar tu experiencia de compra.\n' +
        '\n' +
        'Los mapas, las indicaciones y las apps basadas en la localización dependen de los servicios de datos. Estos servicios, están sujetos a cambios y puede que no se encuentren disponibles en todas las zonas geográficas, por lo que es posible que los mapas, las indicaciones y los datos basados en la localización sean imprecisos, estén incompletos o no estén disponibles. Por ello, te recomendamos comparar la información proporcionada por el dispositivo con lo que observas a tu alrededor.\n' +
        '\n' +
        'Puedes cambiar de opinión y desactivar el permiso de localización en cualquier momento. Para esto, en el caso de tener un dispositivo iOS solo debes ir a Configuración < Privacidad < Localización y desactivar el permiso para Paris app. Si tu dispositivo es Android deberás hacerlo ingresando a Ajustes < Privacidad < Localización < Gestor de permisos.\n' +
        '\n' +
        '### Permisos de Cámara\n' +
        '\n' +
        'Paris app te pedirá autorización para utilizar tu cámara en tiempo real y acceder a las imágenes de tus cámaras frontal y trasera del teléfono. Las aplicaciones móviles no tienen permitido utilizar la cámara sin una señal clara de que lo están haciendo.\n' +
        '\n' +
        'Habilitar este permiso nos permitirá identificar las etiquetas de productos y códigos QR específicos de la tienda para ofrecerte los servicios del Escáner de productos y de “Avisa y Retira” que buscan mejorar tu experiencia de compra.\n' +
        '\n' +
        'Las imágenes vistas desde tu cámara no serán guardadas, almacenadas o utilizadas para ningún otro uso que el reconocimiento de la imagen en vivo.\n' +
        '\n' +
        'Puedes cambiar de opinión y desactivar el permiso de localización en cualquier momento. Para esto, en el caso de tener un dispositivo iOS solo debes ir a Configuración < Privacidad < Cámara y desactivar el permiso para Paris app. Si tu dispositivo es Android deberás hacerlo ingresando a Ajustes < Privacidad < Cámara.\n' +
        '',
      order: 8,
      helpCategory: context.cencosudParis,
      icon: '/icons/cards/politicas.svg',
      description: '',
    });

    context.terminosCondicionesMarketplaceParis = em.create(HelpContent, {
      label: 'Términos y Condiciones Marketplace',
      reference: 'https://www.paris.cl/informaciones-legales/terminos-y-condiciones.html',
      content:
        '# TÉRMINOS Y CONDICIONES GENERALES Y POLÍTICA  DE PRIVACIDAD PARA “COMPRADORES” Y “CONSUMIDORES”  “MARKETPLACE” EN **[WWW.PARIS.CL](http://www.paris.cl)**\n' +
        '\n' +
        '**1. ANTECEDENTES GENERALES:**\n' +
        '\n' +
        '**1.1. ¿Qué es Marketplace?**\n' +
        '\n' +
        'Es un espacio virtual en internet que “Cencosud Retail S.A.” pone a disposición de “Vendedores”, distintos de cualquier otra unidad de negocio, marca o sociedad del grupo Cencosud, para que estos y los “Consumidores” o “Compradores” efectúen transacciones de venta y compra de los productos publicados por los “Vendedores” en “Marketplace”, en las condiciones que acuerden entre ellos en forma directa.\n' +
        '\n' +
        '**1.2. Condiciones de Uso de la Plataforma:**\n' +
        '\n' +
        'Para poder comprar a alguno de los “Vendedores” en “Marketplace”, el “Comprador” y/o “Consumidor” debe registrarse como usuario y solicitar la generación de una cuenta, salvo que ya disponga de una cuenta activa en [www.paris.cl](www.paris.cl). En todo caso, el “Comprador” y/o “Consumidor” al momento de llenar el formulario de registro deberá proporcionar datos válidos y completos. La información que registre debe estar vigente, y ser exacta, precisa y verdadera obligándose a mantenerla actualizada. “Marketplace” podrá corroborar dicha información, y suspender temporal o deﬁnitivamente a aquellos titulares de cuenta, cuyos datos no hayan podido ser conﬁrmados y/o que resulten no ser verdaderos.\n' +
        '\n' +
        'El/los “Comprador(es)” y/o “Consumidor(es)” accederán a su cuenta personal mediante el ingreso de un correo electrónico que hayan registrado al efecto, y de una clave de seguridad personal que debe elegir y definir. El/los “Comprador(es)” y/o “Consumidor(es)”se obliga(n) a mantener la conﬁdencialidad de su clave de seguridad. La cuenta es personal, única e intransferible.\n' +
        '\n' +
        'En consideración a que “Marketplace” opera dentro del sitio web [www.paris.cl](www.paris.cl), cuando el/los “Consumidor(es)” y/o “Comprador(es)” ingresan a “Marketplace”, navegan en la plataforma [www.paris.cl](www.paris.cl), por lo que al momento de registrarse y/o de realizar su solicitud de compra deben aceptar tanto los presentes “TyC” como la Política de Privacidad contenida en estos mismos “TyC”. Si se detectan distintas cuentas con datos coincidentes o relacionados, se podrán cancelar, suspender o inhabilitar como una medida preventiva de seguridad o protección a la privacidad del titular de la cuenta.\n' +
        '\n' +
        'El/los “Comprador(es)” y “Consumidor(es)” será(n) responsable(s) por todas las operaciones efectuadas en su cuenta, por lo cual se comprometen a notiﬁcar a “Marketplace” en forma inmediata, a través de los canales de contacto o comunicación que se mantendrán informados en [www.paris.cl](www.paris.cl), cualquier uso no autorizado de su cuenta, así como el ingreso por terceros no autorizados a la misma. La venta, cesión o transferencia de la cuenta a cualquier título está prohibida.\n' +
        '\n' +
        '**1.3.  Capacidad legal del comprador o contratante de los servicios: Solo mayores de 18 años.**\n' +
        '\n' +
        '“Marketplace” solo está disponible para personas con capacidad legal para contratar. No podrán utilizarlo las personas menores de 18 años, ni los “Comprador(es)” y/o “Consumidor(es)” cuyas cuentas de usuario hayan sido suspendidas temporalmente o inhabilitadas definitivamente. Si el usuario es empresa, la compra debe ser realizada por su representante legal.\n' +
        '\n' +
        '**1.4.  Efecto vinculante de los Términos y Condiciones:**\n' +
        '\n' +
        'El acceso y uso de Marketplace en [www.paris.cl](http://www.paris.cl), se rige por los Términos y Condiciones descritos a continuación, así como por la legislación que se aplique en la República de Chile. En consecuencia, todas las visitas y todos los contratos y transacciones que realice un “Consumidor” y/o “Comprador” a un “Vendedor” en Marketplace, como asimismo sus efectos jurídicos, quedarán regidos por estas reglas y sometidas a esa legislación.\n' +
        '\n' +
        'Quien desee utilizar los servicios de Marketplace y de los “Vendedores” deberá leer detenidamente estos Términos y Condiciones, así como las condiciones de los productos informadas por los “Vendedores” en Marketplace de [www.paris.cl](http://www.paris.cl), y deberá aceptarlos al registrarse y/o en forma previa a enviar la respectiva solicitud de compra.\n' +
        '\n' +
        'Aceptados los Términos y Condiciones, estos son obligatorios y vinculantes.\n' +
        '\n' +
        'Antes de solicitar la compra de un producto, el “Comprador” y/o “Consumidor” deben leer y revisar cuidadosa, detallada y responsablemente la información publicada por el “Vendedor” sobre la identificación del bien o producto, los instructivos de uso, los términos de las garantías, su precio, condiciones de contratación y otras características relevantes.\n' +
        '\n' +
        '**1.5. Definiciones**\n' +
        '\n' +
        'Para los efectos de cualquier tipo de transacción que uno o más “Compradores” y/o “Consumidores” efectúen en “Marketplace” respecto de uno cualquiera de los productos publicados por uno o más de los “Vendedores” definidos en la letra b) de este N° 1, las palabras que se identifican a continuación tendrán el significado que para cada una se señala:\n' +
        '\n' +
        '**a. “Marketplace”:** Es un espacio virtual en internet que Cencosud Retail S.A. pone a disposición de “Vendedores”, distintos de una cualquiera de sus unidades de negocio, marca o sociedad del grupo Cencosud, para que los “Vendedores”, los “Consumidores”, y los “Compradores” definidos respectivamente en las letras b), c) y d) siguientes, efectúen transacciones de venta y compra de los productos publicados por los “Vendedores” en “Marketplace”, en las condiciones que acuerden entre ellos en forma directa.\n' +
        '\n' +
        'Cencosud Retail S.A. o cualquier otra unidad de negocio, marca o sociedad del grupo Cencosud no son propietarios, ni distribuidores y/o comercializadores de los artículos ofrecidos en “Marketplace”. No están en posesión de ellos, ni los ofrecen en venta. Tampoco intervienen en el perfeccionamiento de las operaciones realizadas entre los “Vendedores” y los “Consumidores” y los “Compradores”, ni en las condiciones por ellos informadas y/o estipuladas para las mismas. Cada “Vendedor” declara ser el exclusivo responsable por los artículos y el precio que publica para su venta.\n' +
        '\n' +
        '**IMPORTANTE:** Recuerde que cuando un “Consumidor” y/o un “Comprador” genera una solicitud de compra para uno o más productos ofrecidos por un “Vendedor” en “Marketplace”, no compra en [Paris.cl](www.paris.cl), ni en ninguna otra unidad de negocio, marca o sociedad del grupo Cencosud. Compra al “Vendedor” identificado en el sitio o plataforma.\n' +
        '\n' +
        '**b. “Vendedor” o indistintamente “Vendedores”:** Para los efectos de estos “TyC”, se entenderá por “Vendedor” a la persona jurídica de derecho privado que distribuya y/o comercialice bienes a “Consumidores” y a “Compradores” en el “Marketplace” regulado por estos “TyC”.\n' +
        '\n' +
        '**c. “Consumidor” o indistintamente "Consumidores”:** Las personas naturales, microempresas y pequeñas empresas que, en virtud de la compra realizada en “Marketplace”, adquieren como destinatarios finales, bienes ofrecidos por los “Vendedores” en “Marketplace” y que cumplen con las condiciones para ser calificados como tales de conformidad con las normas contenidas en las leyes N° 19.496 y 20.416, según corresponda.\n' +
        '\n' +
        '**d. “Comprador” o indistintamente “Compradores”:** Toda persona natural o jurídica que realice una o más compras en “Marketplace” y que no cumpla con las condiciones para ser calificada como “Consumidor” o “Consumidores” en virtud de la ley 19.496 y/o la ley 20.416.\n' +
        '\n' +
        '**e. “Sitio”:** Se refiere a [www.paris.cl](http://www.paris.cl).\n' +
        '\n' +
        '**1.7. Datos personales de “comprador(es)” y/o “consumidor(es)”. Transmisión a “Vendedores” y otros proveedores.**\n' +
        '\n' +
        'Cuando Ud. ingresa una solicitud de compra para un producto publicado por un “Vendedor” en “Marketplace”, está intentando la compra respecto de ese “Vendedor” y no de “[Paris.cl](www.paris.cl)”, por lo que los datos personales necesarios para poder revisarla, validarla y, si corresponde, confirmarla, son compartidos con el “Vendedor” para que este pueda verificar, confirmar o rechazar su compra, despachar y entregar los productos. Por lo anterior, cuando envía una solicitud de compra o de pedido en “Marketplace”, Ud. está prestando su consentimiento para que sus datos personales sean almacenados, y transmitidos tanto al o los “Vendedores”, como a los proveedores de los servicios necesarios para la verificación de la compra, su pago, confirmación o rechazo, devoluciones de productos o valores asociados a alguna compra o solicitud de compra.\n' +
        '\n' +
        'Su información personal se procesa y almacena en servidores o medios magnéticos que mantienen altos estándares de seguridad y protección tanto física como tecnológica; y no será compartida o transmitida a terceros sin previa autorización del titular de la información o datos, así como tampoco fuera de los casos de excepción contemplados por la ley vigente, como por ejemplo, a requerimiento de una autoridad administrativa o judicial competente a propósito o como consecuencia de un procedimiento en curso.\n' +
        '\n' +
        '**2.  SOLICITUD DE COMPRA EN “MARKETPLACE”. VALIDACION POR EL “VENDEDOR”.**\n' +
        '\n' +
        'Una vez enviada una solicitud de compra a uno o más de los “Vendedores” que operan en “Marketplace”, esta quedará sujeta a que el respectivo “Vendedor” la valide y confirme. La confirmación, validación y verificación por parte del “Vendedor” es requisito para la formación del consentimiento en todas las solicitudes de compra y compras que se realicen en “Marketplace”.\n' +
        '\n' +
        'Para validar la transacción el “Vendedor” verificará:\n' +
        '\n' +
        'a. El stock disponible de los productos o servicios ofrecidos al momento en que envía la solicitud de compra;\n' +
        '\n' +
        'b. El medio de pago elegido por el “Consumidor” o “Comprador”;\n' +
        '\n' +
        'c. Los datos registrados por el “Consumidor” o “Comprador”, los que deberán coincidir con los ingresados por estos al momento de crear la cuenta y/o al de generar la solicitud de compra.\n' +
        '\n' +
        'd. Que la solicitud haya sido realizada por un mayor de 18 años.\n' +
        '\n' +
        'Si el “Vendedor” no pudiera validar la solicitud de compra, por inconcurrencia de una o más de las condiciones antes descrita, así se lo informará al “Consumidor” y/o “Comprador”, tomando las medidas necesarias para proceder a la devolución de lo que hubiere efectivamente pagado este.\n' +
        '\n' +
        'El “Consumidor” y/o “Comprador deberá mantenerse atento al correo electrónico que registró en la solicitud de compra, ya que este será el canal oficial de contacto o comunicación con el “Vendedor”. Lo anterior, sin perjuicio de otros medios que se pudieran disponer para tales efectos. El consentimiento se entenderá formado desde el momento en que el “Vendedor” envía la confirmación de compra escrita al “Comprador” y/o “Consumidor”.\n' +
        '\n' +
        '**3.  PRECIOS**\n' +
        '\n' +
        'Los precios informados para los productos comercializados por “Vendedores” en Marketplace en [Paris.cl](www.paris.cl) han sido determinados por cada uno de los “Vendedores”, sin intervención, ni participación de Cencosud Retail S.A. o cualquier otra unidad de negocio, marca o sociedad del grupo Cencosud.\n' +
        '\n' +
        '**4. PROMOCIONES – OFERTAS**\n' +
        '\n' +
        'Las ofertas y/o promociones que se informen para los productos comercializados por “Vendedores” en Marketplace en [Paris.cl](www.paris.cl) han sido determinados por cada uno de los “Vendedores”, sin intervención, ni participación de Cencosud Retail S.A. o cualquier otra unidad de negocio, marca o sociedad del grupo Cencosud; y no aplican a productos que se comercialicen en forma presencial.\n' +
        '\n' +
        'Marketplace y los “Vendedores” adscritos a este, solo prestan servicios de venta a distancia.\n' +
        '\n' +
        '**5.  MEDIOS DE PAGO. DEVOLUCIONES EN CASO DE ANULACIÓN DE LA COMPRA.**\n' +
        '\n' +
        'Los medios de pago que podrán utilizarse en “Marketplace” son tarjetas de débito y de crédito bancarias y no bancarias emitidas en Chile.\n' +
        '\n' +
        'En caso de anulación de la compra, una vez que el producto haya sido físicamente devuelto, se emitirá una nota de crédito para reembolsar el dinero. El “Consumidor” o “Comprador” debe tener presente que el medio de pago que utilizó es el que determina el plazo en que recibirá el reembolso del dinero.\n' +
        '\n' +
        'Si realizó la compra con Tarjeta De Crédito el “Vendedor” procederá a anular el cargo y hecho lo anterior, la entidad emisora de la tarjeta deberá reflejar e informar la reversa o abono en el estado de cuenta de la tarjeta en el período siguiente o subsiguiente dependiendo de la fecha de facturación mensual de la tarjeta.\n' +
        '\n' +
        'Si ocupó una Tarjeta de Débito para pagar la compra, la devolución se realizará mediante transferencia electrónica a la cuenta corriente que nos indique el “Consumidor” y/o “Comprador”, en un plazo máximo de 15 días hábiles contados desde que nos haya proporcionado los datos de la cuenta.\n' +
        '\n' +
        '**6. DESPACHO Y ENTREGA DE PRODUCTOS.**\n' +
        '\n' +
        '**6.1. El costo del despacho.**\n' +
        '\n' +
        'El costo del despacho es de cargo del “Consumidor” y/o “Comprador”. Los valores son informados en forma previa a la compra y su monto final dependerá del número de productos comprados, de si fueron comprados al mismo “Vendedor” o a “Vendedores” diferentes, y de la dirección que haya informado para el despacho.\n' +
        '\n' +
        'El costo del despacho se paga en conjunto con el precio del producto al momento de realizar la solicitud de compra.\n' +
        '\n' +
        '**6.2. Plazos de entrega para despacho a domicilio.**\n' +
        '\n' +
        'Los plazos de entrega son informados en forma previa a la compra y este dependerá del número de productos comprados, de si fueron comprados al mismo “Vendedor” o a “Vendedores” diferentes, y de la dirección que haya informado para el despacho.\n' +
        '\n' +
        '**7. RETRACTO.**\n' +
        '\n' +
        'En las compras efectuadas a un “Vendedor” en Marketplace el Consumidor y/o Comprador podrá ejercer su derecho a retracto en el plazo de 30 días contados desde la recepción del producto, utilizando los mismos medios empleados para la realización de la compra, siempre que el “Vendedor” haya cumplido con su obligación de enviar al Consumidor y/o Comprador la confirmación escrita de la compra. En caso de no cumplir con la obligación de enviar la confirmación de compra, el plazo se extenderá a 90 días desde la recepción del producto.\n' +
        '\n' +
        'No podrá ejercerse el derecho de retracto cuando el producto, se haya deteriorado por hecho imputable al “Consumidor” y/o “Comprador”.\n' +
        '\n' +
        'El “Consumidor” y/o “Comprador” deben tener presente que, si ejercen este derecho, para obtener la devolución del pago, previamente deberán entregar el producto lo que podrán realizar en cualquiera de las tiendas físicas París. El producto debe encontrarse en buen estado, con los elementos originales del embalaje, como las etiquetas, certificados de garantía, manuales de uso, cajas, y con sus elementos de protección.\n' +
        '\n' +
        'Una vez que el producto haya sido físicamente devuelto, se emitirá una nota de crédito para reembolsar el dinero. El “Consumidor” y/o “Comprador” debe tener presente que el medio de pago que utilizó es el que determina el plazo en que recibirá el reembolso del dinero.\n' +
        '\n' +
        'Si realizó la compra con Tarjeta De Crédito el “Vendedor” procederá a anular el cargo y hecho lo anterior, la entidad emisora de la tarjeta deberá reflejar e informar la reversa o abono en el estado de cuenta de la tarjeta en el período siguiente o subsiguiente dependiendo de la fecha de facturación mensual de la tarjeta.\n' +
        '\n' +
        'Si ocupó una Tarjeta de Débito para pagar la compra, la devolución se realizará mediante transferencia electrónica a la cuenta corriente que nos indique, en un plazo máximo de 15 días hábiles contados desde que el “Consumidor” y/o “Comprador” nos haya proporcionado los datos de la cuenta.\n' +
        '\n' +
        '**8.  GARANTÍAS: Garantía Normal (legal)**\n' +
        '\n' +
        'Todos los productos que compre a un “Vendedor” en Marketplace tienen 3 meses de garantía. Si desea hacer efectiva la garantía legal debe:\n' +
        '\n' +
        'a) Ingresar en el “Centro de Ayuda”, sección “Seguimiento de compras” del sitio de [Paris.cl](www.paris.cl);\n' +
        '\n' +
        'b)  Seleccionar el producto que desea cambiar y/o devolver; y\n' +
        '\n' +
        'c)  Completar el formulario de devolución.\n' +
        '\n' +
        'También puede imprimir desde el mismo “Centro de Ayuda” la etiqueta correspondiente.\n' +
        '\n' +
        'Luego debe llevar el producto a cualquier tienda física Paris. Para agilizar el proceso en la tienda, puede llevar impresa la etiqueta generada en el Centro de ayuda.\n' +
        '\n' +
        'Si el producto que desea cambiar y/o devolver pesa más de 30 kg o mide más de 60x60x60 centímetros, puede generar una solicitud de Retiro en Domicilio en el mismo formulario disponible en el “Centro de Ayuda” o solicitarlo al teléfono 6004008000.\n' +
        '\n' +
        'La tienda física donde haya entregado el producto lo hará llegar al “Vendedor” quien tendrá un plazo de 3 días hábiles para informar al “Consumidor” y/o “Comprador” si la falla, desperfecto, daño o pieza faltante reclamada corresponde a un evento de garantía legal. Si corresponde a garantía legal, el “Consumidor” y/o “Comprador” deberá indicar al “Vendedor” si opta por cambio, devolución o reparación sin costo, siendo de responsabilidad del “Vendedor” proceder de acuerdo con la elección del “Consumidor” y/o “Comprador”.\n' +
        '\n' +
        'Si de la revisión del producto por parte del “Vendedor”, aparece que no aplica la garantía legal porque la falla, desperfecto, daño o pieza faltante no es tal y/o esta es atribuible al “Consumidor” y/o “Comprador”, el producto será devuelto a este.\n' +
        '\n' +
        '**9. RECUPERA TU BOLETA. NO SE PUEDE CAMBIAR POR FACTURA**\n' +
        '\n' +
        '**10.1.** El Vendedor puede enviar la respectiva boleta con el producto; o remitirla al correo electrónico informado por el “Consumidor” y/o “Comprador” en la respectiva solicitud de compra; o dejarla a disposición de este en el Centro de Ayuda en [www.paris.cl](http://www.paris.cl), desde donde el “Consumidor” y/o “Comprador” podrá descargarla.\n' +
        '\n' +
        '**10.2.** Si el “Consumidor” y/o “Comprador” desea obtener factura en lugar de una boleta, debe solicitarla al momento de generar la solicitud de compra. Una vez generada la boleta esta no se puede reemplazar por factura.\n' +
        '\n' +
        '**10.  OTRAS DISPOSICIONES:**\n' +
        '\n' +
        '**10.1. VIOLACIONES DEL SISTEMA O BASES DE DATOS:**\n' +
        '\n' +
        'No está permitida ninguna acción o uso de dispositivo, software, u otro medio tendiente a interferir tanto en las actividades y operatoria de “Marketplace”, Cencosud Retail S.A. y/o en cualquiera de sus unidades de negocio, como en las ofertas, descripciones, cuentas o bases de datos. Cualquier intromisión, tentativa o actividad contraria a las leyes sobre derecho de propiedad intelectual y/o a las prohibiciones estipuladas en estos “Términos y Condiciones” dará lugar a las acciones legales pertinentes.\n' +
        '\n' +
        '**10.2. SANCIONES. SUSPENSIÓN DE OPERACIONES:**\n' +
        '\n' +
        'Sin perjuicio de otras medidas, “Marketplace” podrá advertir, suspender en forma temporal o inhabilitar deﬁnitivamente la cuenta de un usuario o una publicación, si el titular de aquella incurriera en conductas contrarias a la moral, el orden público y/o las buenas costumbres.\n' +
        '\n' +
        '**10.3. PROPIEDAD INTELECTUAL. ENLACES:**\n' +
        '\n' +
        'Los contenidos de la plataforma relativos a los servicios de [Paris.cl](www.paris.cl), como así también los programas, bases de datos, redes, archivos que permiten al “Comprador” y/o “Consumidor” acceder y usar su cuenta, son de propiedad de Cencosud Retail S.A. y están protegidas por las leyes y los tratados internacionales de derecho de autor, marcas, patentes, modelos y diseños industriales. El uso indebido y la reproducción total o parcial de dichos contenidos quedan prohibidos, salvo autorización expresa y por escrito de Cencosud Retail S.A ([Paris.cl](www.paris.cl)).\n' +
        '\n' +
        'El “Sitio” puede contener enlaces a otros sitios web lo cual no indica que sean propiedad u operados por Cencosud Retail S.A. La presencia de enlaces a otros sitios web no implica una sociedad, relación, aprobación, y/o respaldo de Cencosud Retail S.A. a dichos sitios y sus contenidos.\n' +
        '\n' +
        '**11. RECLAMOS - JURISDICCIÓN**\n' +
        '\n' +
        'Para presentar reclamos referentes a acciones ejecutadas o celebradas a través de este sitio debe comunicarse con nuestro Servicio al Cliente a través del formulario de contacto disponible en el Centro de Ayuda en el sitio [www.paris.cl](www.paris.cl). También puede tomar contacto telefónico al número 600 400 8000.\n' +
        '\n' +
        'Las controversias que surjan en relación con lo establecido en estos Términos y Condiciones podrán interponerse, a elección del consumidor, ante el juzgado de policía local correspondiente a su domicilio o al domicilio del “Vendedor” y/o “Vendedores”. Sin perjuicio de la competencia de los tribunales ordinarios de justicia para otro tipo de materias. Todo lo anterior, según el artículo 50 A de la ley 19.496.\n' +
        '\n' +
        '**12. REPRESENTANTE**\n' +
        '\n' +
        'Para todos los efectos legales y relacionados con la presente información Marketplace designa como representante legal de la empresa al señor Ricardo González Novoa. Rut: 14.292.860-4. Domiciliado en Av. Presidente Kennedy 9001, Piso 4, Las Condes.\n' +
        '\n' +
        '**13. MODIFICACIONES DE LOS “TÉRMINOS Y CONDICIONES”**\n' +
        '\n' +
        'Cualquier modificación que realice “Marketplace” a los “Términos y Condiciones” será publicada en la página web a lo menos 10 (diez) días hábiles antes de su entrada en vigencia. Las modificaciones realizadas no afectarán las compras que hayan sido confirmadas durante la vigencia de los textos modificados.\n' +
        '\n' +
        '**14. VIGENCIA TÉRMINOS Y CONDICIONES**\n' +
        '\n' +
        'Estos Términos y Condiciones corresponden a la versión vigente a contar del día 30 de septiembre de 2021, publicada y comunicada al pie de la página principal del sitio [www.paris.cl](www.paris.cl) con la misma fecha.\n' +
        '',
      order: 0,
      helpCategory: context.cencosudParis,
      icon: '/icons/cards/tycMarketplace.svg',
      description: '',
    });
    //============ ACCESIBILIDAD PARIS ============//
    context.accesibilidadParis = em.create(HelpContent, {
      label: 'Accesibilidad',
      reference: '/',
      content:
        '# Accesibilidad\n' +
        '\n' +
        '## Qué es accesibilidad\n' +
        '\n' +
        'La accesibilidad busca que todas las personas que son usuarias de un sitio web puedan navegar e interactuar, sin importar si es que tienen o no algún grado de discapacidad. \n' +
        '\n' +
        'En Paris.cl nos hemos preocupado de que nuestros términos y condiciones cumplan con los requisitos mínimos recomendados por el Servicio Nacional de la Discapacidad (Senadis) basados en los estándares entregados por el consorcio de la World Wide Web en sus Pautas de Accesibilidad para el Contenido Web (WCAG) 2.0. \n' +
        '\n' +
        '## Funcionalidades\n' +
        '\n' +
        '### Tamaño de texto\n' +
        '![Disminuir fuente/100px](https://d31w2ybspxswhh.cloudfront.net/TxD/paris/accesibildad_font_down.svg) ![Aumentar fuente/100px](https://d31w2ybspxswhh.cloudfront.net/TxD/paris/accesibildad_font_up.svg)\n' +
        '\n' +
        'La fuente de esta página tiene dimensiones relativas, así las personas podrán controlar los tamaños con los controles habilitados.\n' +
        '\n' +
        '### Contraste\n' +
        '![Contraste/200px](https://d31w2ybspxswhh.cloudfront.net/TxD/paris/accesibildad_contraste.svg)\n' +
        '\n' +
        'Habilitamos una opción con mayor contraste para mejorar la legibilidad de los textos en las personas que puedan necesitarlo. \n' +
        '\n' +
        '### Lectores de pantalla\n' +
        'Nos preocupamos de habilitar el uso de los lectores de pantalla e integramos elementos de navegación del teclado para que las personas puedan utilizarlo mediante un lector de pantalla. Para poder utilizarlo, debes bajar una extensión o instalar un software de Screen Reader. Algunos ejemplos gratuitos que puedes utilizar son: \n' +
        '\n' +
        '- [NVDA (para Windows)](https://nvda.es/descargas/descarga-de-nvda/)\n' +
        '- VoiceOver (integrado en dispositivos Apple)\n' +
        '  - [iPhone](https://support.apple.com/es-lamr/guide/iphone/iph73b8c43)\n' +
        '  - [iPad](https://support.apple.com/es-lamr/guide/iphone/iph73b8c43)\n' +
        '  - [Mac](https://support.apple.com/es-lamr/guide/voiceover/vo15607)\n' +
        '  - [Apple Watch](https://support.apple.com/es-lamr/guide/watch/apd1ffb55927/watchos)\n' +
        '  - [Apple TV](https://support.apple.com/es-lamr/guide/tv/atvb8e5f5efd)\n' +
        '  - [iPod touch](https://support.apple.com/es-lamr/guide/ipod-touch/iph73b8c43)\n' +
        '- [Screen reader (extensión de Google Chrome)](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=es)\n' +
        '\n' +
        'En celulares, solo debes ir a la configuración y activar la opción de VoiceOver en dispositivos iOS o TalkBack en Android.\n' +
        '',
      order: 1,
      helpCategory: context.accesibilidadParis,
      icon: '/icons/cards/a11y.svg',
      description: '',
    });
  }
}
