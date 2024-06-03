import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { TechnicalService } from 'modules/content/technical-services/entities/technical-service.entity';

export class TechnicalServicesParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(TechnicalService, {
      info: 'https://www.acer.com/ac/es/CL/content/support',
      notes: '',
      type: context.Link,
      brand: context.Acer,
    });

    em.create(TechnicalService, {
      info: '227500777',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Acer,
    });

    em.create(TechnicalService, {
      info: 'https://www.airolite.cl/contacto/',
      notes: '',
      type: context.Link,
      brand: context.Airolite,
    });

    em.create(TechnicalService, {
      info: '223455200',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Airolite,
    });

    em.create(TechnicalService, {
      info: 'https://www.albintrotter.com/index.php?route=information/asistencia',
      notes: '',
      type: context.Link,
      brand: context.AlbinTrotter,
    });

    em.create(TechnicalService, {
      info: '228878000',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Airolite,
    });

    em.create(TechnicalService, {
      info: 'http://almore.cl/',
      notes: '',
      type: context.Link,
      brand: context.Almore,
    });

    em.create(TechnicalService, {
      info: '56950082611',
      notes: '',
      type: context.Phone,
      brand: context.Almore,
    });

    em.create(TechnicalService, {
      info: '56942735343',
      notes: '',
      type: context.Phone,
      brand: context.Almore,
    });

    em.create(TechnicalService, {
      info: 'https://altavision.cl/contacto/',
      notes: '',
      type: context.Link,
      brand: context.Altavision,
    });

    em.create(TechnicalService, {
      info: '227403100',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Altavision,
    });

    em.create(TechnicalService, {
      info: 'https://www.altohogar.cl/contactese',
      notes: '',
      type: context.Link,
      brand: context.Altohogar,
    });

    em.create(TechnicalService, {
      info: 'https://latin.aoc.com/cl/service_centers',
      notes: '',
      type: context.Link,
      brand: context.Aoc,
    });

    em.create(TechnicalService, {
      info: '800394100',
      notes: '',
      type: context.Phone,
      brand: context.Aoc,
    });

    em.create(TechnicalService, {
      info: 'https://getsupport.apple.com/',
      notes: '',
      type: context.Link,
      brand: context.Apple,
    });

    em.create(TechnicalService, {
      info: 'freddy.arrieta@asiamerica.cl',
      notes: '',
      type: context.Mail,
      brand: context.Asiamerica,
    });

    em.create(TechnicalService, {
      info: 'serviciotecnico@asiamerica.cl',
      notes: '',
      type: context.Mail,
      brand: context.Asiamerica,
    });

    em.create(TechnicalService, {
      info: '56932146174',
      notes: '',
      type: context.Phone,
      brand: context.Asiamerica,
    });

    em.create(TechnicalService, {
      info: 'https://www.asimetrika.cl/pages/conversemos',
      notes: '',
      type: context.Link,
      brand: context.Asiamerica,
    });

    em.create(TechnicalService, {
      info: '56964897790',
      notes: '',
      type: context.Phone,
      brand: context.Asimetrika,
    });

    em.create(TechnicalService, {
      info: '56962374951',
      notes: '',
      type: context.Phone,
      brand: context.Asimetrika,
    });

    em.create(TechnicalService, {
      info: 'https://www.asus.com/latin/support/contact/troubleshooting',
      notes: '',
      type: context.Link,
      brand: context.Asus,
    });

    em.create(TechnicalService, {
      info: '800835994',
      notes: '',
      type: context.Phone,
      brand: context.Asus,
    });

    em.create(TechnicalService, {
      info: 'https://imagenes.paris.cl/is/content/Cencosud/Servicios_Tecnico_Trekpdf',
      notes: '',
      type: context.Link,
      brand: context.Avalanche,
    });

    em.create(TechnicalService, {
      info: 'https://www.bebesit.cl/completa-el-formulario',
      notes: '',
      type: context.Link,
      brand: context.Avent,
    });

    em.create(TechnicalService, {
      info: 'https://mueblesbyb.cl/contacto/',
      notes: '',
      type: context.Link,
      brand: context.ByB,
    });

    em.create(TechnicalService, {
      info: '56995050660',
      notes: '',
      type: context.Phone,
      brand: context.ByB,
    });

    em.create(TechnicalService, {
      info: 'contactoclientes@bbqhouse.cl',
      notes: '',
      type: context.Mail,
      brand: context.BbqHouse,
    });

    em.create(TechnicalService, {
      info: '223566749',
      notes: '',
      type: context.Phone,
      brand: context.BbqHouse,
    });

    em.create(TechnicalService, {
      info: '56966568808',
      notes: '',
      type: context.Phone,
      brand: context.BbqHouse,
    });

    em.create(TechnicalService, {
      info: '56996890531',
      notes: '',
      type: context.Phone,
      brand: context.BbqHouse,
    });

    em.create(TechnicalService, {
      info: 'https://www.bebesit.cl/completa-el-formulario',
      notes: '',
      type: context.Link,
      brand: context.Bebesit,
    });

    em.create(TechnicalService, {
      info: 'https://www.merritt.cl/soporte-tecnico',
      notes: '',
      type: context.Link,
      brand: context.Bernina,
    });

    em.create(TechnicalService, {
      info: 'http://www.sgservicios.cl/',
      notes: '',
      type: context.Link,
      brand: context.Bgh,
    });

    em.create(TechnicalService, {
      info: '223417759',
      notes: '',
      type: context.Phone,
      brand: context.Bgh,
    });

    em.create(TechnicalService, {
      info: '223415709',
      notes: '',
      type: context.Phone,
      brand: context.Bgh,
    });

    em.create(TechnicalService, {
      info: 'contacto@bianchi.cl',
      notes: '',
      type: context.Mail,
      brand: context.Bianchi,
    });

    em.create(TechnicalService, {
      info: 'postventa@bianchi.cl',
      notes: '',
      type: context.Mail,
      brand: context.Bianchi,
    });

    em.create(TechnicalService, {
      info: '224499353',
      notes: '',
      type: context.Phone,
      brand: context.Bianchi,
    });

    em.create(TechnicalService, {
      info: '56953700013',
      notes: '',
      type: context.Phone,
      brand: context.Bianchi,
    });

    em.create(TechnicalService, {
      info: 'bicicletasscott.online@grylan.cl',
      notes: '',
      type: context.Mail,
      brand: context.BicicletasScott,
    });

    em.create(TechnicalService, {
      info: 'serviciotecnico@stg-spa.cl',
      notes: '',
      type: context.Mail,
      brand: context.BodySculture,
    });

    em.create(TechnicalService, {
      info: '225522966',
      notes: '',
      type: context.Phone,
      brand: context.BodySculture,
    });

    em.create(TechnicalService, {
      info: '56958733043',
      notes: '',
      type: context.Phone,
      brand: context.BodySculture,
    });

    em.create(TechnicalService, {
      info: 'https://www.bosch-home.cl/especiales/servicios-tecnicos',
      notes: '',
      type: context.Link,
      brand: context.Bosch,
    });

    em.create(TechnicalService, {
      info: '800400008',
      notes: '',
      type: context.Phone,
      brand: context.Bosch,
    });
    em.create(TechnicalService, {
      info: 'https://brasforma.cl/es/contacto/',
      notes: '',
      type: context.Link,
      brand: context.Brasforma,
    });

    em.create(TechnicalService, {
      info: '56997301927',
      notes: '',
      type: context.Phone,
      brand: context.Brasforma,
    });

    em.create(TechnicalService, {
      info: '56997301926',
      notes: '',
      type: context.Phone,
      brand: context.Brasforma,
    });

    em.create(TechnicalService, {
      info: 'https://www.brother.cl/soporte-tecnico',
      notes: '',
      type: context.Link,
      brand: context.Brother,
    });

    em.create(TechnicalService, {
      info: '800541000',
      notes: '',
      type: context.Phone,
      brand: context.Brother,
    });

    em.create(TechnicalService, {
      info: 'http://comercialcaburga.cl/contacto.php',
      notes: '',
      type: context.Link,
      brand: context.Caburga,
    });

    em.create(TechnicalService, {
      info: '225586268',
      notes: '',
      type: context.Phone,
      brand: context.Caburga,
    });

    em.create(TechnicalService, {
      info: '229045895',
      notes: '',
      type: context.Phone,
      brand: context.Caburga,
    });

    em.create(TechnicalService, {
      info: 'https://caixun.cl/soporte/',
      notes: '',
      type: context.Link,
      brand: context.Caixun,
    });

    em.create(TechnicalService, {
      info: 'https://www.calma.cl/servicio-tecnico/',
      notes: '',
      type: context.Link,
      brand: context.Calma,
    });

    em.create(TechnicalService, {
      info: '56971895194',
      notes: '',
      type: context.Phone,
      brand: context.Calma,
    });

    em.create(TechnicalService, {
      info: 'https://candy-home.cl/servicio-tecnico/',
      notes: '',
      type: context.Link,
      brand: context.Candy,
    });

    em.create(TechnicalService, {
      info: '56986948348',
      notes: '',
      type: context.Phone,
      brand: context.Candy,
    });

    em.create(TechnicalService, {
      info: 'https://www.canon.cl/servicios-tecnicos-autorizados/empresa?field_sta_ciudad_tid=All',
      notes: '',
      type: context.Link,
      brand: context.Canon,
    });

    em.create(TechnicalService, {
      info: '800470855',
      notes: '',
      type: context.Phone,
      brand: context.Canon,
    });

    em.create(TechnicalService, {
      info: '800470855',
      notes: '',
      type: context.Phone,
      brand: context.Canon,
    });

    em.create(TechnicalService, {
      info: 'https://www.midea.com/cl/support',
      notes: '',
      type: context.Link,
      brand: context.Carrier,
    });

    em.create(TechnicalService, {
      info: '600 461 1000',
      notes: '',
      type: context.Phone,
      brand: context.Carrier,
    });

    em.create(TechnicalService, {
      info: 'postventa@celta.cl',
      notes: '',
      type: context.Mail,
      brand: context.Celta,
    });

    em.create(TechnicalService, {
      info: '56985969932',
      notes: '',
      type: context.Phone,
      brand: context.Celta,
    });

    em.create(TechnicalService, {
      info: '56942481280',
      notes: '',
      type: context.Phone,
      brand: context.Celta,
    });

    em.create(TechnicalService, {
      info: 'https://www.cic.cl/contacto.html',
      notes: '',
      type: context.Link,
      brand: context.Cic,
    });

    em.create(TechnicalService, {
      info: '800740000',
      notes: '',
      type: context.Phone,
      brand: context.Cic,
    });

    em.create(TechnicalService, {
      info: '25304558',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Cic,
    });

    em.create(TechnicalService, {
      info: 'info@grawtrade.cl',
      notes: '',
      type: context.Mail,
      brand: context.Cleanbot,
    });

    em.create(TechnicalService, {
      info: '222359387',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Cleanbot,
    });

    em.create(TechnicalService, {
      info: 'https://www.favatex.com/contact/',
      notes: '',
      type: context.Link,
      brand: context.ComercialFavatex,
    });

    em.create(TechnicalService, {
      info: '56951976319',
      notes: '',
      type: context.Phone,
      brand: context.ComercialFavatex,
    });

    em.create(TechnicalService, {
      info: 'https://catalogo.contatto.cl/servicio-al-cliente/servicio-tecnico/',
      notes: '',
      type: context.Link,
      brand: context.Contatto,
    });

    em.create(TechnicalService, {
      info: '56977202406',
      notes: '',
      type: context.Phone,
      brand: context.Contatto,
    });

    em.create(TechnicalService, {
      info: 'https://tienda.estufascorona.cl/listado-servicio-tecnico/',
      notes: '',
      type: context.Link,
      brand: context.Corona,
    });

    em.create(TechnicalService, {
      info: '56971374742',
      notes: '',
      type: context.Phone,
      brand: context.Corona,
    });

    em.create(TechnicalService, {
      info: '6006005353',
      notes: '',
      type: context.Phone,
      brand: context.Fensa,
    });

    em.create(TechnicalService, {
      info: '227318786',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Fensa,
    });

    em.create(TechnicalService, {
      info: 'https://decus.cl/servicios.aspx',
      notes: '',
      type: context.Link,
      brand: context.Decus,
    });

    em.create(TechnicalService, {
      info: '228868673',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Decus,
    });

    em.create(TechnicalService, {
      info: 'contacto@kitchencenter.cl',
      notes: '',
      type: context.Mail,
      brand: context.Delonghi,
    });

    em.create(TechnicalService, {
      info: '225779700',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Delonghi,
    });

    em.create(TechnicalService, {
      info: 'https://www.creativecenterchile.cl/soporte-tecnico',
      notes: '',
      type: context.Link,
      brand: context.Dismaco,
    });

    em.create(TechnicalService, {
      info: 'serviciosalconsumidor@cl.nestle.com',
      notes: '',
      type: context.Mail,
      brand: context.DolceGusto,
    });

    em.create(TechnicalService, {
      info: '800800711',
      notes: '',
      type: context.Phone,
      brand: context.DolceGusto,
    });

    em.create(TechnicalService, {
      info: 'contacto@drimkip.cl',
      notes: '',
      type: context.Mail,
      brand: context.Drimkip,
    });

    em.create(TechnicalService, {
      info: '2232107656',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Drimkip,
    });

    em.create(TechnicalService, {
      info: 'https://www.electricway.cl/index.php?route=information/contact',
      notes: '',
      type: context.Link,
      brand: context.ElectricWay,
    });

    em.create(TechnicalService, {
      info: '56995312552',
      notes: '',
      type: context.Phone,
      brand: context.ElectricWay,
    });

    em.create(TechnicalService, {
      info: 'soporteretail@electrolux.com',
      notes: '',
      type: context.Mail,
      brand: context.Electrolux,
    });

    em.create(TechnicalService, {
      info: '225921340',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.ElectronicaGerona,
    });

    em.create(TechnicalService, {
      info: 'https://epson.cl/Support/ServiceCenterLocator',
      notes: '',
      type: context.Link,
      brand: context.Epson,
    });

    em.create(TechnicalService, {
      info: '6004117700',
      notes: '',
      type: context.Phone,
      brand: context.Fdv,
    });

    em.create(TechnicalService, {
      info: 'https://www.festinachile.cl/contacto/',
      notes: '',
      type: context.Link,
      brand: context.Festina,
    });

    em.create(TechnicalService, {
      info: 'contacto.chile@flex.es',
      notes: '',
      type: context.Mail,
      brand: context.Flex,
    });

    em.create(TechnicalService, {
      info: '229593539',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Flex,
    });

    em.create(TechnicalService, {
      info: 'https://www.gamaitaly.com/latam/cl/soporte/',
      notes: '',
      type: context.Link,
      brand: context.Gama,
    });

    em.create(TechnicalService, {
      info: '228982200',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Gama,
    });

    em.create(TechnicalService, {
      info: 'soporte.chile@garmin.com',
      notes: '',
      type: context.Mail,
      brand: context.Garmin,
    });

    em.create(TechnicalService, {
      info: '800392603',
      notes: '',
      type: context.Phone,
      brand: context.Garmin,
    });

    em.create(TechnicalService, {
      info: 'https://support.hp.com/cl-es/contact-hp',
      notes: '',
      type: context.Link,
      brand: context.Hp,
    });

    em.create(TechnicalService, {
      info: '123-0020-7503',
      notes: '',
      type: context.Phone,
      brand: context.Hp,
    });

    em.create(TechnicalService, {
      info: '229884804',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Hp,
    });

    em.create(TechnicalService, {
      info: 'https://hpmuebles.cl/contacto/',
      notes: '',
      type: context.Link,
      brand: context.HpMuebles,
    });

    em.create(TechnicalService, {
      info: '227740726',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.HpMuebles,
    });

    em.create(TechnicalService, {
      info: 'https://consumer.huawei.com/en/support/product/',
      notes: '800201335',
      type: context.Link,
      brand: context.Huawei,
    });

    em.create(TechnicalService, {
      info: 'ventas@idetex.cl',
      notes: '',
      type: context.Mail,
      brand: context.Idetex,
    });

    em.create(TechnicalService, {
      info: '56954015427',
      notes: '',
      type: context.Phone,
      brand: context.Idetex,
    });

    em.create(TechnicalService, {
      info: '224825807',
      notes: '',
      type: context.Phone,
      brand: context.Idetex,
    });

    em.create(TechnicalService, {
      info: 'https://infanti.zendesk.com/hc/es/requests/new?ticket_form_id=360000456351',
      notes: '',
      type: context.Link,
      brand: context.Infanti,
    });

    em.create(TechnicalService, {
      info: 'ventas@innovamobel.cl',
      notes: '',
      type: context.Mail,
      brand: context.Innovamobel,
    });

    em.create(TechnicalService, {
      info: '56967595902',
      notes: '',
      type: context.Phone,
      brand: context.Innovamobel,
    });

    em.create(TechnicalService, {
      info: '800360999',
      notes: '',
      type: context.Phone,
      brand: context.Intconmex,
    });

    em.create(TechnicalService, {
      info: '229884804',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Intconmex,
    });

    em.create(TechnicalService, {
      info: 'soportechile@aftechcorp.com',
      notes: '',
      type: context.Mail,
      brand: context.Irobot,
    });

    em.create(TechnicalService, {
      info: '2232985450',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Irobot,
    });

    em.create(TechnicalService, {
      info: 'https://janome.cl/servicio-tecnico/',
      notes: '',
      type: context.Link,
      brand: context.Janome,
    });

    em.create(TechnicalService, {
      info: '222472750',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Janome,
    });

    em.create(TechnicalService, {
      info: 'https://www.karcherstore.cl/servicio-tecnico',
      notes: '',
      type: context.Link,
      brand: context.Karcher,
    });

    em.create(TechnicalService, {
      info: '223806100',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Karcher,
    });

    em.create(TechnicalService, {
      info: 'https://www.kendalchile.cl/contacto-servicio-tecnico/',
      notes: '',
      type: context.Link,
      brand: context.KendalChile,
    });

    em.create(TechnicalService, {
      info: '223870891',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.KendalChile,
    });

    em.create(TechnicalService, {
      info: 'contacto@kitchencenter.cl',
      notes: '',
      type: context.Mail,
      brand: context.Kenwood,
    });

    em.create(TechnicalService, {
      info: '6007121000',
      notes: '',
      type: context.Phone,
      brand: context.Kenwood,
    });

    em.create(TechnicalService, {
      info: '56934022135',
      notes: 'WhatsApp de servicio al cliente',
      type: context.Phone,
      brand: context.Kenwood,
    });

    em.create(TechnicalService, {
      info: '6007121000',
      notes: '',
      type: context.Phone,
      brand: context.KitchenCenter,
    });

    em.create(TechnicalService, {
      info: 'https://lahsen.cl/servicios/',
      notes: '',
      type: context.Link,
      brand: context.Lahsen,
    });

    em.create(TechnicalService, {
      info: '2232730000',
      notes: '',
      type: context.Phone,
      brand: context.Lahsen,
    });

    em.create(TechnicalService, {
      info: 'https://latamhome.com/contacto/',
      notes: '',
      type: context.Link,
      brand: context.LatamHomeSpa,
    });

    em.create(TechnicalService, {
      info: '56951352722',
      notes: '',
      type: context.Phone,
      brand: context.LatamHomeSpa,
    });

    em.create(TechnicalService, {
      info: 'https://support.lenovo.com/cl/es',
      notes: '',
      type: context.Link,
      brand: context.Lenovo,
    });

    em.create(TechnicalService, {
      info: '232103145',
      notes: '',
      type: context.Phone,
      brand: context.Lenovo,
    });

    em.create(TechnicalService, {
      info: '88-800-462-888',
      notes: '',
      type: context.Phone,
      brand: context.Lenovo,
    });

    em.create(TechnicalService, {
      info: 'https://www.lg.com/cl/soporte/localizar-reparacion-centro',
      notes: '',
      type: context.Link,
      brand: context.Lg,
    });

    em.create(TechnicalService, {
      info: '800542000',
      notes: '',
      type: context.Phone,
      brand: context.Lg,
    });

    em.create(TechnicalService, {
      info: '222995454',
      notes: 'Desde Celulares',
      type: context.Phone,
      brand: context.Lg,
    });

    em.create(TechnicalService, {
      info: 'https://liberochile.cl/solicitud-servicio-tecnico/',
      notes: '',
      type: context.Link,
      brand: context.Libero,
    });

    em.create(TechnicalService, {
      info: '226180700',
      notes: 'Desde Celulares',
      type: context.Phone,
      brand: context.Libero,
    });

    em.create(TechnicalService, {
      info: '226180701',
      notes: 'Desde Celulares',
      type: context.Phone,
      brand: context.Libero,
    });

    em.create(TechnicalService, {
      info: 'https://www.livingstore.cl/contacto/',
      notes: '',
      type: context.Link,
      brand: context.LivingStore,
    });

    em.create(TechnicalService, {
      info: '227744603',
      notes: 'Desde Celulares',
      type: context.Phone,
      brand: context.LivingStore,
    });

    em.create(TechnicalService, {
      info: 'servicio.chile@mabe.cl',
      notes: '',
      type: context.Mail,
      brand: context.Mabe,
    });

    em.create(TechnicalService, {
      info: '226188346',
      notes: 'Desde Celulares',
      type: context.Phone,
      brand: context.Mabe,
    });

    em.create(TechnicalService, {
      info: 'serviciotecnico@macrotel.cl',
      notes: '',
      type: context.Mail,
      brand: context.Macrotel,
    });

    em.create(TechnicalService, {
      info: '22656 9200',
      notes: 'Desde celulares - Anexo 6',
      type: context.Phone,
      brand: context.Macrotel,
    });

    em.create(TechnicalService, {
      info: 'https://www.magasa.cl/contacto',
      notes: '',
      type: context.Link,
      brand: context.Macrotel,
    });

    em.create(TechnicalService, {
      info: '56966895348',
      notes: 'Desde celulares - Anexo 6',
      type: context.Phone,
      brand: context.Macrotel,
    });

    em.create(TechnicalService, {
      info: '6006005353',
      notes: '',
      type: context.Phone,
      brand: context.Mademsa,
    });

    em.create(TechnicalService, {
      info: '227318786',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Mademsa,
    });

    em.create(TechnicalService, {
      info: 'https://www.magasa.cl/contacto',
      notes: '',
      type: context.Link,
      brand: context.Magasa,
    });

    em.create(TechnicalService, {
      info: '56966895348',
      notes: '',
      type: context.Phone,
      brand: context.Magasa,
    });

    em.create(TechnicalService, {
      info: 'maigas@maigas.cl',
      notes: '',
      type: context.Mail,
      brand: context.Maigas,
    });

    em.create(TechnicalService, {
      info: '224450079',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Maigas,
    });

    em.create(TechnicalService, {
      info: 'https://www.mardelsur.cl/contacto/',
      notes: '',
      type: context.Link,
      brand: context.MarDelSurSpa,
    });

    em.create(TechnicalService, {
      info: 'contacto@sgservicios.cl',
      notes: '',
      type: context.Mail,
      brand: context.Nex,
    });

    em.create(TechnicalService, {
      info: '223417759',
      notes: '',
      type: context.Phone,
      brand: context.Nex,
    });

    em.create(TechnicalService, {
      info: '223415709',
      notes: '',
      type: context.Phone,
      brand: context.Nex,
    });

    em.create(TechnicalService, {
      info: 'https://www.master-g.com/soporte-tecnico-chile/',
      notes: '',
      type: context.Link,
      brand: context.MasterG,
    });

    em.create(TechnicalService, {
      info: '227378292',
      notes: '',
      type: context.Phone,
      brand: context.MasterG,
    });

    em.create(TechnicalService, {
      info: '227351284',
      notes: '',
      type: context.Phone,
      brand: context.MasterG,
    });

    em.create(TechnicalService, {
      info: 'https://medular.cl/',
      notes: '',
      type: context.Link,
      brand: context.Medular,
    });

    em.create(TechnicalService, {
      info: 'postventa@medular.cl',
      notes: '',
      type: context.Mail,
      brand: context.Medular,
    });

    em.create(TechnicalService, {
      info: '225013644',
      notes: '',
      type: context.Phone,
      brand: context.Medular,
    });

    em.create(TechnicalService, {
      info: '223660841',
      notes: '',
      type: context.Phone,
      brand: context.Medular,
    });

    em.create(TechnicalService, {
      info: 'https://www.merritt.cl/soporte-tecnico',
      notes: '',
      type: context.Link,
      brand: context.Merrit,
    });

    em.create(TechnicalService, {
      info: 'https://www.hj.cl/informacion-tecnica/',
      notes: '',
      type: context.Link,
      brand: context.Microlab,
    });

    em.create(TechnicalService, {
      info: 'https://www.midea.com/cl/contact-us',
      notes: '',
      type: context.Link,
      brand: context.Midea,
    });

    em.create(TechnicalService, {
      info: '6004611000',
      notes: '',
      type: context.Phone,
      brand: context.Midea,
    });

    em.create(TechnicalService, {
      info: 'Info@miele.cl',
      notes: '',
      type: context.Mail,
      brand: context.Miele,
    });

    em.create(TechnicalService, {
      info: '800265050',
      notes: '',
      type: context.Phone,
      brand: context.Miele,
    });

    em.create(TechnicalService, {
      info: 'contacto@mobel.cl',
      notes: '',
      type: context.Mail,
      brand: context.MobelHome,
    });

    em.create(TechnicalService, {
      info: '56981399146',
      notes: '',
      type: context.Phone,
      brand: context.MobelHome,
    });

    em.create(TechnicalService, {
      info: '228306005',
      notes: '',
      type: context.Phone,
      brand: context.MobelHome,
    });

    em.create(TechnicalService, {
      info: 'https://support.motorola.com/rola/es/ContactUs',
      notes: '',
      type: context.Link,
      brand: context.Motorola,
    });

    em.create(TechnicalService, {
      info: 'https://moulinex.cl/wp-content/uploads/2019/04/Red-de-servicios-tecnicos-Administrada-por-Plus-Service.pdf',
      notes: '',
      type: context.Link,
      brand: context.Moulinex,
    });

    em.create(TechnicalService, {
      info: '226820212',
      notes: '',
      type: context.Phone,
      brand: context.Moulinex,
    });

    em.create(TechnicalService, {
      info: '226820217',
      notes: '',
      type: context.Phone,
      brand: context.Moulinex,
    });

    em.create(TechnicalService, {
      info: 'https://latam.msi.com/support',
      notes: '',
      type: context.Link,
      brand: context.Msi,
    });

    em.create(TechnicalService, {
      info: 'https://mueblesamerica.cl/',
      notes: '',
      type: context.Link,
      brand: context.MueblesAmericaSpa,
    });

    em.create(TechnicalService, {
      info: '225538112',
      notes: '',
      type: context.Phone,
      brand: context.MueblesAmericaSpa,
    });

    em.create(TechnicalService, {
      info: '229691810',
      notes: '',
      type: context.Phone,
      brand: context.MueblesAmericaSpa,
    });

    em.create(TechnicalService, {
      info: 'https://www.muvostore.cl/servicio-tecnico',
      notes: '',
      type: context.Link,
      brand: context.MuvoDeOxford,
    });

    em.create(TechnicalService, {
      info: '226319700',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.MuvoDeOxford,
    });

    em.create(TechnicalService, {
      info: 'https://www.nikoncenter.cl/service/service.php',
      notes: '',
      type: context.Link,
      brand: context.Nikon,
    });

    em.create(TechnicalService, {
      info: '222340210',
      notes: 'Anexo:104',
      type: context.Phone,
      brand: context.Nikon,
    });

    em.create(TechnicalService, {
      info: 'https://www.jvlat.com/soporte-tecnico/chile/',
      notes: '',
      type: context.Link,
      brand: context.Nintendo,
    });

    em.create(TechnicalService, {
      info: 'https://www.nokia.com/support/',
      notes: '',
      type: context.Link,
      brand: context.Nokia,
    });

    em.create(TechnicalService, {
      info: 'https://www.oster.cl/servicio-y-soporte/contactanos',
      notes: '',
      type: context.Link,
      brand: context.Oster,
    });

    em.create(TechnicalService, {
      info: '225945098',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Oster,
    });

    em.create(TechnicalService, {
      info: 'https://www.oxfordstore.cl/servicio-tecnico-oxford',
      notes: '',
      type: context.Link,
      brand: context.Oxford,
    });

    em.create(TechnicalService, {
      info: '232149673',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Oxford,
    });

    em.create(TechnicalService, {
      info: 'https://www.panasonic.com/cl/contact-us.html',
      notes: '',
      type: context.Link,
      brand: context.Panasonic,
    });

    em.create(TechnicalService, {
      info: '800390602',
      notes: '',
      type: context.Phone,
      brand: context.Panasonic,
    });

    em.create(TechnicalService, {
      info: '227975000',
      notes: '',
      type: context.Phone,
      brand: context.Panasonic,
    });

    em.create(TechnicalService, {
      info: 'www.philips.cl/c-w/support-home/support-contact-page.html',
      notes: '',
      type: context.Link,
      brand: context.Philips,
    });

    em.create(TechnicalService, {
      info: '6007445477',
      notes: '',
      type: context.Phone,
      brand: context.Philips,
    });

    em.create(TechnicalService, {
      info: 'https://www.puntaranco.cl/copy-of-contacto',
      notes: '',
      type: context.Link,
      brand: context.PuntaRancoSpa,
    });

    em.create(TechnicalService, {
      info: '232211157',
      notes: '',
      type: context.Phone,
      brand: context.PuntaRancoSpa,
    });

    em.create(TechnicalService, {
      info: '56944010198',
      notes: '',
      type: context.Phone,
      brand: context.PuntaRancoSpa,
    });

    em.create(TechnicalService, {
      info: '600 9451941',
      notes: '',
      type: context.Phone,
      brand: context.Rca,
    });

    em.create(TechnicalService, {
      info: '5697375299',
      notes: '',
      type: context.Phone,
      brand: context.Rca,
    });

    em.create(TechnicalService, {
      info: 'https://www.rematime.cl/contacto',
      notes: '',
      type: context.Link,
      brand: context.Rematime,
    });

    em.create(TechnicalService, {
      info: '227161932',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Rematime,
    });

    em.create(TechnicalService, {
      info: 'https://www.jvlat.com/soporte-tecnico/chile/',
      notes: '',
      type: context.Link,
      brand: context.Roku,
    });

    em.create(TechnicalService, {
      info: 'https://servicio-al-cliente.rosen.cl/hc/es-419',
      notes: '',
      type: context.Link,
      brand: context.Rosen,
    });

    em.create(TechnicalService, {
      info: 'servicio.clientes@rosen.cl ',
      notes: '',
      type: context.Mail,
      brand: context.Rosen,
    });

    em.create(TechnicalService, {
      info: '226205300',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Rosen,
    });

    em.create(TechnicalService, {
      info: 'https://www.samsung.com/cl/support/service-center/',
      notes: '',
      type: context.Link,
      brand: context.Samsung,
    });

    em.create(TechnicalService, {
      info: '8007267864',
      notes: '',
      type: context.Phone,
      brand: context.Samsung,
    });

    em.create(TechnicalService, {
      info: 'https://www.sanenzzo.cl/contact',
      notes: '',
      type: context.Link,
      brand: context.Sannenzo,
    });

    em.create(TechnicalService, {
      info: '56939148472',
      notes: '',
      type: context.Phone,
      brand: context.Sannenzo,
    });

    em.create(TechnicalService, {
      info: 'https://saxoline.cl/pages/servicio-tecnico',
      notes: '',
      type: context.Link,
      brand: context.Saxoline,
    });

    em.create(TechnicalService, {
      info: 'https://www.scaldasonno.cl/centros-de-asistencia',
      notes: '',
      type: context.Link,
      brand: context.Scaldasonno,
    });

    em.create(TechnicalService, {
      info: '223870800',
      notes: '',
      type: context.Phone,
      brand: context.Scaldasonno,
    });

    em.create(TechnicalService, {
      info: '223870891',
      notes: '',
      type: context.Phone,
      brand: context.Scaldasonno,
    });

    em.create(TechnicalService, {
      info: 'https://thomas.cl/servicio-tecnico#',
      notes: '',
      type: context.Link,
      brand: context.Siegen,
    });

    em.create(TechnicalService, {
      info: 'https://www.sindelen.cl/servicio',
      notes: '',
      type: context.Link,
      brand: context.Sindelen,
    });

    em.create(TechnicalService, {
      info: '800225002',
      notes: '',
      type: context.Phone,
      brand: context.Sindelen,
    });

    em.create(TechnicalService, {
      info: '6006005353',
      notes: '',
      type: context.Phone,
      brand: context.Somela,
    });

    em.create(TechnicalService, {
      info: '227318786',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Somela,
    });

    em.create(TechnicalService, {
      info: 'https://www.sony.cl/corporate/CL/servicioysoporte/servicio.html?XID=M:svc:esupport',
      notes: '',
      type: context.Link,
      brand: context.Sony,
    });

    em.create(TechnicalService, {
      info: '800004310',
      notes: '',
      type: context.Phone,
      brand: context.Sony,
    });

    em.create(TechnicalService, {
      info: '229884920',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Sony,
    });

    em.create(TechnicalService, {
      info: 'contacto@soymomo.com',
      notes: '',
      type: context.Mail,
      brand: context.SoyMomo,
    });

    em.create(TechnicalService, {
      info: 'https://sparta.cl/servicio-tecnico-sparta.html',
      notes: '',
      type: context.Link,
      brand: context.Sparta,
    });

    em.create(TechnicalService, {
      info: '225521672',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Sparta,
    });

    em.create(TechnicalService, {
      info: '225521827',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Sparta,
    });

    em.create(TechnicalService, {
      info: 'ventas@sportek.cl',
      notes: '',
      type: context.Mail,
      brand: context.Sportek,
    });

    em.create(TechnicalService, {
      info: 'smarconi@sportek.cl',
      notes: '',
      type: context.Mail,
      brand: context.Sportek,
    });

    em.create(TechnicalService, {
      info: 'contacto@bikegym.cl',
      notes: '',
      type: context.Mail,
      brand: context.SportingLineChileSpa,
    });

    em.create(TechnicalService, {
      info: 'https://www.tefal.cl/servicio-tecnico/',
      notes: '',
      type: context.Link,
      brand: context.Tefal,
    });

    em.create(TechnicalService, {
      info: 'https://www.teka.com/es-cl/soporte/',
      notes: '',
      type: context.Link,
      brand: context.Teka,
    });

    em.create(TechnicalService, {
      info: '6003600330',
      notes: '',
      type: context.Phone,
      brand: context.Teka,
    });

    em.create(TechnicalService, {
      info: '224386080',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Teka,
    });

    em.create(TechnicalService, {
      info: 'https://thomas.cl/servicio-tecnico',
      notes: '',
      type: context.Link,
      brand: context.Thomas,
    });

    em.create(TechnicalService, {
      info: '226091807',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Thomas,
    });

    em.create(TechnicalService, {
      info: 'https://thorbenstore.cl/servicio-tecnico',
      notes: '',
      type: context.Link,
      brand: context.Thorben,
    });

    em.create(TechnicalService, {
      info: '232512290',
      notes: 'Desde celulares',
      type: context.Phone,
      brand: context.Thorben,
    });

    em.create(TechnicalService, {
      info: 'https://www.tclchile.cl/servicio-tecnico',
      notes: '',
      type: context.Link,
      brand: context.Tlc,
    });

    em.create(TechnicalService, {
      info: 'https://www.merritt.cl/soporte-tecnico',
      notes: '',
      type: context.Link,
      brand: context.Toyota,
    });

    em.create(TechnicalService, {
      info: 'https://ayuda.sparta.cl/support/solutions/articles/66000370802-red-servicio-t%C3%A9cnico-trek-y-altitude',
      notes: '',
      type: context.Link,
      brand: context.Trek,
    });

    em.create(TechnicalService, {
      info: 'postventartachile@rta.com.co',
      notes: '',
      type: context.Mail,
      brand: context.TuHome,
    });

    em.create(TechnicalService, {
      info: '56944121048',
      notes: '',
      type: context.Phone,
      brand: context.TuHome,
    });

    em.create(TechnicalService, {
      info: '232025116',
      notes: '',
      type: context.Phone,
      brand: context.TuHome,
    });

    em.create(TechnicalService, {
      info: 'contacto@ursustrotter.cl',
      notes: '',
      type: context.Mail,
      brand: context.UrsusTrotter,
    });

    em.create(TechnicalService, {
      info: '6003003080',
      notes: '',
      type: context.Phone,
      brand: context.UrsusTrotter,
    });

    em.create(TechnicalService, {
      info: 'https://www.valory.cl/servicio-tecnico/',
      notes: '',
      type: context.Link,
      brand: context.Valory,
    });

    em.create(TechnicalService, {
      info: '56971895194',
      notes: '',
      type: context.Phone,
      brand: context.Valory,
    });

    em.create(TechnicalService, {
      info: '800201736',
      notes: '',
      type: context.Phone,
      brand: context.WhirlpoolChile,
    });

    em.create(TechnicalService, {
      info: 'https://winia.cl/content/3-contacto',
      notes: '',
      type: context.Link,
      brand: context.Winia,
    });

    em.create(TechnicalService, {
      info: '800383000',
      notes: '',
      type: context.Phone,
      brand: context.Winia,
    });

    em.create(TechnicalService, {
      info: '800202011',
      notes: 'Solo para productos con fecha de compra superior a 90 días',
      type: context.Phone,
      brand: context.Xbox,
    });

    em.create(TechnicalService, {
      info: 'https://www.yardas.cl/contacto',
      notes: '',
      type: context.Link,
      brand: context.Yardas,
    });

    em.create(TechnicalService, {
      info: '225800624',
      notes: '',
      type: context.Phone,
      brand: context.Yardas,
    });

    em.create(TechnicalService, {
      info: '22580644',
      notes: '',
      type: context.Phone,
      brand: context.Yardas,
    });

    em.create(TechnicalService, {
      info: 'serviciotecnico@zmart.cl',
      notes: '',
      type: context.Mail,
      brand: context.ZmartConsolas,
    });

    em.create(TechnicalService, {
      info: 'https://www.dell.com/support/incidents-online/es-cl/contactus/dynamic?lwp=rt',
      notes: '',
      type: context.Link,
      brand: context.Dell,
    });

    em.create(TechnicalService, {
      info: '800202044',
      notes: '',
      type: context.Phone,
      brand: context.Dell,
    });

    em.create(TechnicalService, {
      info: '12300203762',
      notes: '',
      type: context.Phone,
      brand: context.Dell,
    });

    em.create(TechnicalService, {
      info: 'sat@hisense.com',
      notes: '',
      type: context.Mail,
      brand: context.Hisense,
    });

    em.create(TechnicalService, {
      info: '22 840 15 68',
      notes: '',
      type: context.Phone,
      brand: context.Hisense,
    });

    em.create(TechnicalService, {
      info: 'theclub@mycocos.cl',
      notes: '',
      type: context.Mail,
      brand: context.MyCocos,
    });

    em.create(TechnicalService, {
      info: '56 9 20535552',
      notes: 'Whatsapp',
      type: context.Phone,
      brand: context.MyCocos,
    });

    em.create(TechnicalService, {
      info: 'https://rambikes.cl/',
      notes: '',
      type: context.Link,
      brand: context.Ram,
    });
  }
}
