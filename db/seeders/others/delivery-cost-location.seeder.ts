import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { DeliveryCostLocation } from 'modules/content/delivery-cost/entities/delivery-cost-location.entity';

export class DeliveryCostLocationSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(DeliveryCostLocation, {
      name: 'CL',
      parent: null,
      flags: [context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DE TARAPACÁ',
      parent: 1,
      flags: [context.jumbo],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DE ANTOFAGASTA',
      parent: 1,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DE ATACAMA',
      parent: 1,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DE COQUIMBO',
      parent: 1,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DE VALPARAÍSO',
      parent: 1,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: "REGIÓN DEL LIBERTADOR BERNARDO O'HIGGINS",
      parent: 1,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DEL MAULE',
      parent: 1,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DEL BIOBÍO',
      parent: 1,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DE LA ARAUCANÍA',
      parent: 1,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DE LOS LAGOS',
      parent: 1,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN AYSÉN DEL GENERAL CARLOS IBAÑEZ DEL CAMPO',
      display: false,
      parent: 1,
      flags: [context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DE MAGALLANES Y ANTÁRTICA CHILENA',
      display: false,
      parent: 1,
      flags: [context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN METROPOLITANA',
      parent: 1,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DE LOS RÍOS',
      parent: 1,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DE ARICA Y PARINACOTA',
      parent: 1,
      flags: [context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REGIÓN DE ÑUBLE',
      parent: 1,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'ALTO HOSPICIO',
      parent: 2,
    });
    em.create(DeliveryCostLocation, {
      name: 'IQUIQUE',
      parent: 2,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'POZO ALMONTE',
      parent: 2,
    });
    em.create(DeliveryCostLocation, {
      name: 'ANTOFAGASTA',
      parent: 3,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CALAMA',
      parent: 3,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CHUQUICAMATA',
      parent: 3,
    });
    em.create(DeliveryCostLocation, {
      name: 'MARIA ELENA',
      parent: 3,
    });
    em.create(DeliveryCostLocation, {
      name: 'MEJILLONES',
      parent: 3,
    });
    em.create(DeliveryCostLocation, {
      name: 'OLLAGUE',
      parent: 3,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN PEDRO DE ATACAMA',
      parent: 3,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'SIERRA GORDA',
      parent: 3,
    });
    em.create(DeliveryCostLocation, {
      name: 'TOCOPILLA',
      parent: 3,
    });
    em.create(DeliveryCostLocation, {
      name: 'ALTO DEL CARMEN',
      parent: 4,
    });
    em.create(DeliveryCostLocation, {
      name: 'CALDERA',
      parent: 4,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CHAÑARAL',
      parent: 4,
    });
    em.create(DeliveryCostLocation, {
      name: 'COPIAPO',
      parent: 4,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'DIEGO DE ALMAGR',
      parent: 4,
    });
    em.create(DeliveryCostLocation, {
      name: 'EL SALVADOR',
      parent: 4,
    });
    em.create(DeliveryCostLocation, {
      name: 'FREIRINA',
      parent: 4,
    });
    em.create(DeliveryCostLocation, {
      name: 'HUASCO',
      parent: 4,
    });
    em.create(DeliveryCostLocation, {
      name: 'TIERRA AMARILLA',
      parent: 4,
    });
    em.create(DeliveryCostLocation, {
      name: 'VALLENAR',
      parent: 4,
    });
    em.create(DeliveryCostLocation, {
      name: 'ANDACOLLO',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'CANELA',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'COMBARBALÁ',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'COQUIMBO',
      parent: 5,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'GUANAQUEROS',
      parent: 5,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'ILLAPEL',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'LA HERRADURA ',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'LA HIGUERA',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'LA SERENA',
      parent: 5,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LAS TACAS',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'LOS VILOS',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'MINCHA',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'MONTE PATRIA',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'OVALLE',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'PAIHUANO',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'PAN DE AZUCAR',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'PICHIDANGUI',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'PLAYA BLANCA',
      parent: 5,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PUERTO VELERO',
      parent: 5,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PUNITAQUI',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'RIO HURTADO',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'SALAMANCA',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'TONGOY',
      parent: 5,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'VICUÑA',
      parent: 5,
    });
    em.create(DeliveryCostLocation, {
      name: 'ALGARROBO',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CABILDO',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'CALERA',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'CALLE LARGA',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'CARTAGENA',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'CASABLANCA',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CATEMU',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'CON CON',
      parent: 6,
      flags: [context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'EL QUISCO',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'EL TABO',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'HIJUELAS',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'HORCON',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'LA CRUZ',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'LA LIGUA',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'LAS CRUCES',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'LIMACHE',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LLAY LLAY',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'LLO-LLEO',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'LOS ANDES',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'NOGALES',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'OLMUE',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PANQUEHUE',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'PAPUDO',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PETORCA',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'POLPAICO',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'PUCHUNCAVI',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PUTAENDO',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'QUILLOTA',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'QUILPUE',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'QUINTERO',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'REÑACA',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'RINCONADA',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN ANTONIO',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN ESTEBAN',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN FELIPE',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN SEBASTIAN',
      parent: 6,
    });
    em.create(DeliveryCostLocation, {
      name: 'SANTA MARIA',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'SANTO DOMINGO',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'VALPARAISO',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'VILLA ALEMANA',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'VIÑA DEL MAR',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'ZAPALLAR',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CHEPICA',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'CHIMBARONGO',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'CODEGUA',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'COINCO',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'COLTAUCO',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'DOÑIHUE',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'GRANEROS',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'GULTRO',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'HOSPITAL',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'LA ESTRELLA',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'LAS CABRAS',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'LITUECHE',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'LO MIRANDA',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'LOLOL',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'LOS LIRIOS',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'MACHALI',
      parent: 7,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'MALLOA',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'MARCHIGUE',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'MOSTAZAL',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'NANCAGUA',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'NAVIDAD',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'NILAHUE',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'OLIVAR',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'PALMILLA',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'PAREDONES',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'PERALILLO',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'PEUMO',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'PICHIDEGUA',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'PICHILEMU',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'PLACILLA',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'PUMANQUE',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'QUINTA DE TILCO',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'RANCAGUA',
      parent: 7,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'RENGO',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'REQUINOA',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'ROSARIO',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN FERNANDO',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN VICENTE',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'SANTA CRUZ',
      parent: 7,
    });
    em.create(DeliveryCostLocation, {
      name: 'CAUQUENES',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'CHANCO',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'COLBUN',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'CONSTITUCION',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'CUREPTO',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'CURICO',
      parent: 8,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'EMPEDRADO',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'HUALAÑE',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'LICANTEN',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'LINARES',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'LONGAVI',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'MAULE',
      parent: 8,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'MOLINA',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'PARRAL',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'PELARCO',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'PELLUHUE',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'PENCAHUE',
      parent: 8,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'RAUCO',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'RETIRO',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'RIO CLARO',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'ROMERAL',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAGRADA FAMILIA',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN CLEMENTE',
      parent: 8,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN JAVIER',
      parent: 8,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN RAFAEL',
      parent: 8,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'TALCA',
      parent: 8,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'TENO',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'VICHUQUEN',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'VILLA ALEGRE',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'YERBAS BUENAS',
      parent: 8,
    });
    em.create(DeliveryCostLocation, {
      name: 'ALAMEDAS D S FRANCISCO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'ANTUCO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'ARAS DEL LAJA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'ARAUCO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'CABRERO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'CAMINO EL BOLSON',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'CAÑETE',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'CERRO COLORADO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'CHACACO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'CHIGUAYANTE',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'CHILLAN',
      parent: 9,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CHILLAN VIEJO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'CONTULMO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'CORONEL',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'CURANILAHUE',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'DICHATO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'EL ARRAYAN',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'EL OLIVO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'EL PERAL',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'FLORIDA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'HARAS LA MONTAÑA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'HUALPEN',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'HUALPENCILLO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'HUALQUI',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'HUEPIL',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'LA MONA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'LAJA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'LEBU',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'LIRQUEN',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'LLANO BLANCO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'LOS ALAMOS',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'LOS ANGELES',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'LOTA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'MARIPOSA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'MILLANTU',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'MONTEAGUILA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'MULCHEN',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'NACIMIENTO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'NEGRETE',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'PATA GALLINA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'PENCO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'QUILACO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'QUILLECO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'QUILLON',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'RANQUIL',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'SALTO DEL LAJA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN CARLOS PUREN',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN FABIAN',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN PEDRO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN PEDRO PAZ',
      parent: 9,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN ROSENDO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'SANTA BARBARA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'SANTA CATALINA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'SANTA FE',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'SANTA JUANA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'SANTA LAURA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'TALCAHUANO',
      parent: 9,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'TIRUA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'TOME',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'TREHUACO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'TUCAPEL',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'VILLA GENESIS',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'VILLUCURA',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'VIRQUENCO',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'YUMBEL',
      parent: 9,
    });
    em.create(DeliveryCostLocation, {
      name: 'ANGOL',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'CARAHUE',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'COLLIPULLI',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'CUNCO',
      parent: 10,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CURACAUTIN ',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'CURARREHUE',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'ERCILLA',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'FREIRE',
      parent: 10,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'GALVARINO',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'GORBEA',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'LAUTARO',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'LICANRAY',
      parent: 10,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LONCOCHE',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'LONQUIMAY',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'LOS SAUCES',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'LUMACO',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'MELIPEUCO',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'NUEVA IMPERIAL',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'PADRE LAS CASAS',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'PERQUENCO',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'PITRUFQUEN',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'PUCÓN',
      parent: 10,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PURÉN',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'RENAICO',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAAVEDRA',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'TEMUCO',
      parent: 10,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'TEODORO SCHMIDT',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'TOLTÉN',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'TRAIGUÉN',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'VICTORIA',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'VILCUN',
      parent: 10,
    });
    em.create(DeliveryCostLocation, {
      name: 'VILLARRICA',
      parent: 10,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'ANCUD',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'CALBUCO',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'CASTRO',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'CHONCHI',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'COCHAMÓ',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'CURACO DE VÉLEZ',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'DALCAHUE',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'ENTRE LAGOS',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'FRESIA',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'FRUTILLAR',
      parent: 11,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LLANQUIHUE',
      parent: 11,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LOS MUERMOS',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'MAULLÍN',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'OSORNO',
      parent: 11,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PUERTO MONTT',
      parent: 11,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PUERTO OCTAY',
      parent: 11,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PUERTO VARAS',
      parent: 11,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PUQUELDÓN',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'PURRANQUE',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'PUYEHUE',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'QUEMCHI',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'QUINCHAO',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'RIO BUENO',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'RIO NEGRO',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN JUAN DE LA COSTA',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN PABLO',
      parent: 11,
    });
    em.create(DeliveryCostLocation, {
      name: 'ALHUE',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'ALTO JAHUEL',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'BATUCO',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'BOLLENAR ',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'BUIN',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CALERA DE TANGO',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CALEU',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'CERRILLOS',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CERRO NAVIA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CHAMPA ',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'CHICUREO',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'COLINA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CONCHALI',
      parent: 14,
      flags: [context.jumbo],
    });
    em.create(DeliveryCostLocation, {
      name: 'CURACAVI',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'EL BOSQUE',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'EL CANELO',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'EL COLORADO',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'EL MANZANO ',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'EL MONTE',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'ESMERALDA',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'ESTACION CENTRAL',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'FARELLONES',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'HUECHURABA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'HUELQUEN ',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'INDEPENDENCIA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'ISLA DE MAIPO',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LA CISTERNA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LA DEHESA',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'LA FLORIDA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LA GRANJA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LA OBRA',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'LA PARVA',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'LA PINTANA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LA REINA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LAMPA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LAS CANTERAS',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'LAS CONDES',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LAS VERTIENTES ',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'LAS VISCACHAS',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'LINDEROS',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LO BARNECHEA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LO CURRO',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'LO ESPEJO',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LO HERRERA ',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'LO PRADO',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LOMAS D AGUIRRE',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'LONQUEN',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'MACUL',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'MAIPU',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'MALLOCO',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'MARIA PINTO',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'MELIPILLA',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'MELOCOTON',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'NOS',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'NOVICIADO',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'ÑUÑOA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PEDRO AGUIRRE CERDA',
      parent: 14,
      flags: [context.jumbo],
    });
    em.create(DeliveryCostLocation, {
      name: 'PADRE HURTADO',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PAINE',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PEÑAFLOR',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PEÑALOLEN',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PIRQUE',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'POMAIRE',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'PROVIDENCIA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PUDAHUEL',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'PUENTE ALTO',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'QUILICURA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'QUINTA NORMAL',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'RECOLETA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'RENCA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'RUNGUE',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN ALFONSO',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN BERNARDO',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN GABRIEL',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN JOAQUIN',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN JOSE DE MAIPO',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN MANUEL ',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN MIGUEL',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN PEDRO FRU',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN RAMON',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'SANTIAGO',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'TALAGANTE',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'TIL TIL',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'VALLE NEVADO',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'VILUCO ',
      parent: 14,
    });
    em.create(DeliveryCostLocation, {
      name: 'VITACURA',
      parent: 14,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'COÑARIPE',
      parent: 15,
      flags: [context.jumbo],
    });
    em.create(DeliveryCostLocation, {
      name: 'FUTRONO',
      parent: 15,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LA UNIÓN',
      parent: 15,
    });
    em.create(DeliveryCostLocation, {
      name: 'LAGO RANCO',
      parent: 15,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LANCO',
      parent: 15,
    });
    em.create(DeliveryCostLocation, {
      name: 'LOS LAGOS',
      parent: 15,
    });
    em.create(DeliveryCostLocation, {
      name: 'MÁFIL',
      parent: 15,
    });
    em.create(DeliveryCostLocation, {
      name: 'MARIQUINA',
      parent: 15,
    });
    em.create(DeliveryCostLocation, {
      name: 'PAILLACO',
      parent: 15,
    });
    em.create(DeliveryCostLocation, {
      name: 'PANGUIPULLI',
      parent: 15,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'VALDIVIA',
      parent: 15,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'ARICA',
      parent: 16,
    });
    em.create(DeliveryCostLocation, {
      name: 'AZAPA',
      parent: 16,
    });
    em.create(DeliveryCostLocation, {
      name: 'POCON CHILE',
      parent: 16,
    });
    em.create(DeliveryCostLocation, {
      name: 'YUTA',
      parent: 16,
    });
    em.create(DeliveryCostLocation, {
      name: 'BULNES',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'CATO',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'CHACAYAL',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'COBQUECURA',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'COELEMU',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'COIHUECO',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'COLLANCO',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'CONCEPCIÓN',
      parent: 17,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'EL CARMEN',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'LAS TRANCAS',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'NINHUE',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'ÑIPAS',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'ÑIQUEN',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'PEMUCO',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'PINTO',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'PORTEZUELO',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'PUEBLO SECO',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'PUENTE ÑUBLE',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'QUINCHAMALI',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'QUIRIHUE',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'QUIRIQUINA',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN CARLOS',
      parent: 17,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN IGNACIO',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'SAN NICOLAS',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'YUNGAY',
      parent: 17,
    });
    em.create(DeliveryCostLocation, {
      name: 'MORRILLOS',
      parent: 5,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'TOTORALILLO',
      parent: 5,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CONCON',
      parent: 6,
      flags: [context.jumbo],
    });
    em.create(DeliveryCostLocation, {
      name: 'MAITENCILLO',
      parent: 6,
      flags: [context.jumbo],
    });
    em.create(DeliveryCostLocation, {
      name: 'CURAUMA',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LAGUNA VERDE',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'MANTAGUA',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'MARBELLA',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'CACHAGUA',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'LAS BRISAS',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'TUNQUEN',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'QUINTAY',
      parent: 6,
      flags: [context.jumbo, context.paris],
    });
    em.create(DeliveryCostLocation, {
      name: 'COLICO',
      parent: 10,
      flags: [context.jumbo],
    });
    em.create(DeliveryCostLocation, {
      name: 'CABURGA',
      parent: 10,
      flags: [context.jumbo],
    });
    em.create(DeliveryCostLocation, {
      name: 'ENSENADA',
      parent: 11,
      flags: [context.jumbo],
    });
    em.create(DeliveryCostLocation, {
      name: 'NIEBLA',
      parent: 15,
      flags: [context.jumbo],
    });
    em.create(DeliveryCostLocation, {
      name: 'CALAFQUEN',
      parent: 15,
      flags: [context.jumbo],
    });
  }
}
