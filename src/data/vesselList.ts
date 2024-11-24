// src/data/vesselList.ts
import { Vessel } from '../types/vesselTypes';

export const vesselList: Vessel[] = [
  {
    name: 'BREB TIMBER',
    type: 'General Cargo Ship',
    flag: 'Portugal',
    flagCode: 'PT',
    mmsi: '255802490',
    dwt: 3817,
    loa: 88.6,
    beam: 12.52,
    yearBuilt: 2005,
    imoNumber: '9319430',
    imageUrl: 'https://example.com/images/breb_timber.jpg', // Замените на реальный URL изображения
    marinetrafficUrl: 'https://www.marinetraffic.com/en/ais/details/ships/imo:9319430',
  },
  {
    name: 'ANTARES',
    type: 'General Cargo Ship',
    flag: 'Sierra Leone',
    flagCode: 'SL',
    mmsi: '667022000',
    dwt: 3.757,
    loa: 108,
    beam: 15,
    yearBuilt: 1988,
    imoNumber: '8943404',
    imageUrl: 'https://example.com/images/antares.jpg', // Замените на реальный URL изображения
    marinetrafficUrl: 'https://www.marinetraffic.com/en/ais/details/ships/imo:8943404',
  },
  {
    name: 'HECTOR',
    type: 'Bulk Carrier',
    flag: 'Liberia',
    flagCode: 'LR',
    mmsi: '636015034',
    dwt: 75.200,
    loa: 225 ,
    beam: 32,
    yearBuilt: 2012,
    imoNumber: '9502635',
    imageUrl: 'https://example.com/images/hector.jpg', // Замените на реальный URL изображения
    marinetrafficUrl: 'https://www.marinetraffic.com/en/ais/details/ships/imo:9502635',
  },
  {
    name: 'PATROKLOS',
    type: 'Bulk Carrier',
    flag: 'Liberia',
    flagCode: 'LR',
    mmsi: '636018051',
    dwt: 82000,
    loa: 229,
    beam: 32,
    yearBuilt: 2015,
    imoNumber: '9729893',
    imageUrl: 'https://example.com/images/patroklos.jpg', // Замените на реальный URL изображения
    marinetrafficUrl: 'https://www.marinetraffic.com/en/ais/details/ships/imo:9729893',
  },
  {
    name: 'ORPHEUS',
    type: 'Bulk Carrier',
    flag: 'Liberia',
    flagCode: 'LR',
    mmsi: '636017782',
    dwt: 75.631,
    loa: 224.9,
    beam: 32.25,
    yearBuilt: 2017,
    imoNumber: '9646675',
    imageUrl: 'https://example.com/images/orpheus.jpg', // Замените на реальный URL изображения
    marinetrafficUrl: 'https://www.marinetraffic.com/en/ais/details/ships/imo:9646675',
  },
  {
    name: 'APOLLON',
    type: 'Bulk Carrier',
    flag: 'Liberia',
    flagCode: 'LR',
    mmsi: '636017781',
    dwt: 75.614,
    loa: 224.9,
    beam: 32.25,
    yearBuilt: 2017,
    imoNumber: '9646663',
    imageUrl: 'https://example.com/images/apollon.jpg', // Замените на реальный URL изображения
    marinetrafficUrl: 'https://www.marinetraffic.com/en/ais/details/ships/imo:9646663',
  },
  {
    name: 'IOLAOS',
    type: 'Bulk Carrier',
    flag: 'Liberia',
    flagCode: 'LR',
    mmsi: '636017197',
    dwt: 63.413,
    loa: 200,
    beam: 32,
    yearBuilt: 2016,
    imoNumber: '9696450',
    imageUrl: 'https://example.com/images/iolaos.jpg', // Замените на реальный URL изображения
    marinetrafficUrl: 'https://www.marinetraffic.com/en/ais/details/ships/imo:9696450',
  },
  {
    name: 'MAERSK VIGO',
    type: 'Container Ship',
    flag: 'Singapore',
    flagCode: 'SG',
    mmsi: '565967000',
    dwt: 23.338,
    loa: 175.47,
    beam: 27.71,
    yearBuilt: 2010,
    imoNumber: '9401697',
    imageUrl: 'https://example.com/images/maersk_vigo.jpg', // Замените на реальный URL изображения
    marinetrafficUrl: 'https://www.marinetraffic.com/en/ais/details/ships/imo:9401697',
  },
  {
    name: 'SAFEEN PRIZE',
    type: 'Container Ship',
    flag: 'Marshall Islands',
    flagCode: 'MH',
    mmsi: '538005057',
    dwt: 34.366,
    loa: 208.9,
    beam: 29.8,
    yearBuilt: 2013,
    imoNumber: '9603594',
    imageUrl: 'https://example.com/images/safeen_prize.jpg', // Замените на реальный URL изображения
    marinetrafficUrl: 'https://www.marinetraffic.com/en/ais/details/ships/imo:9603594',
  },
  {
    name: 'MAERSK BENGUELA',
    type: 'Container Ship',
    flag: 'Hong Kong',
    flagCode: 'HK',
    mmsi: '477552400',
    dwt: 43.133,
    loa: 223,
    beam: 32,
    yearBuilt: 2009,
    imoNumber: '9355367',
    imageUrl: 'https://example.com/images/maersk_benguela.jpg', // Замените на реальный URL изображения
    marinetrafficUrl: 'https://www.marinetraffic.com/en/ais/details/ships/imo:9355367',
  },
  {
    name: 'GSL VIOLETTA',
    type: 'Container Ship',
    flag: 'Liberia',
    flagCode: 'LR',
    mmsi: '636020776',
    dwt: 67.566,
    loa: 277,
    beam: 40.35,
    yearBuilt: 2000,
    imoNumber: '9214202',
    imageUrl: 'https://example.com/images/gsl_violetta.jpg', // Замените на реальный URL изображения
    marinetrafficUrl: 'https://www.marinetraffic.com/en/ais/details/ships/imo:9214202',
  },
];


//GSL VIOLETTA - 636020776
//MAERSK BENGUELA - 477552400
//SAFEEN PRIZE - 538005057
//MAERSK VIGO - 565967000
//IOLAOS - 636017197
//APOLLON - 636017781
//ORPHEUS - 636017782
//PATROKLOS - 636018051
//HECTOR - 636015034
//ANTARES - 667022000
//BREB TIMBER - 255802490