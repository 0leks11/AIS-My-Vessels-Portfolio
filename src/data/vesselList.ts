// src/data/vesselList.ts
import VesselMilady from "../components/img/GalerySectionVessels/VesselMilady";
import VesselAntares from "../components/img/GalerySectionVessels/VesselAntares";
import VesselHector from "../components/img/GalerySectionVessels/VesselHector";
import VesselPatroklos from "../components/img/GalerySectionVessels/VesselPatroklos";
import VesselOrpheus from "../components/img/GalerySectionVessels/VesselOrpheus";
import VesselApolon from "../components/img/GalerySectionVessels/VesselApolon";
import VesselIolaos from "../components/img/GalerySectionVessels/VesselIolaos";
import VesselmaerskVigo from "../components/img/GalerySectionVessels/VesselmaerskVigo";
import VesselsafinPrize from "../components/img/GalerySectionVessels/VesselsafinPrize";
import VesselmaerskBenguella from "../components/img/GalerySectionVessels/VesselmaerskBenguella";
import VesselgslVioletta from "../components/img/GalerySectionVessels/VesselgslVioletta";

import { Vessel } from "../types/vesselTypes";

export const vesselList: Vessel[] = [
  {
    vessel_name: "BREB TIMBER",
    ship_type: "General Cargo Ship",
    flag: "Portugal",
    flagCode: "PT",
    mmsi: 255802490,
    dwt: 3817,
    loa: 88.6,
    beam: 12.52,
    yearBuilt: 2005,
    registryPort: "MADEIRA",
    imoNumber: "9319430",
    imageComponent: VesselMilady,
    marinetrafficUrl:
      "https://www.marinetraffic.com/en/ais/details/ships/imo:9319430",
  },
  {
    vessel_name: "ANTARES",
    ship_type: "General Cargo Ship",
    flag: "Sierra Leone",
    flagCode: "SL",
    mmsi: 667022000,
    dwt: 3757,
    loa: 108,
    beam: 15,
    yearBuilt: 1988,
    registryPort: "FREETOWN",
    imoNumber: "8943404",
    imageComponent: VesselAntares,
    marinetrafficUrl:
      "https://www.marinetraffic.com/en/ais/details/ships/imo:8943404",
  },
  {
    vessel_name: "HECTOR",
    ship_type: "Bulk Carrier",
    flag: "Liberia",
    flagCode: "LR",
    mmsi: 636015034,
    dwt: 75200,
    loa: 225,
    beam: 32,
    yearBuilt: 2012,
    registryPort: "MONROVIA",
    imoNumber: "9502635",
    imageComponent: VesselHector,
    marinetrafficUrl:
      "https://www.marinetraffic.com/en/ais/details/ships/imo:9502635",
  },
  {
    vessel_name: "PATROKLOS",
    ship_type: "Bulk Carrier",
    flag: "Liberia",
    flagCode: "LR",
    mmsi: 636018051,
    dwt: 82000,
    loa: 229,
    beam: 32,
    yearBuilt: 2015,
    registryPort: "MONROVIA",
    imoNumber: "9729893",
    imageComponent: VesselPatroklos,
    marinetrafficUrl:
      "https://www.marinetraffic.com/en/ais/details/ships/imo:9729893",
  },
  {
    vessel_name: "ORPHEUS",
    ship_type: "Bulk Carrier",
    flag: "Liberia",
    flagCode: "LR",
    mmsi: 636017782,
    dwt: 75631,
    loa: 224.9,
    beam: 32.25,
    yearBuilt: 2017,
    registryPort: "MONROVIA",
    imoNumber: "9646675",
    imageComponent: VesselOrpheus,
    marinetrafficUrl:
      "https://www.marinetraffic.com/en/ais/details/ships/imo:9646675",
  },
  {
    vessel_name: "APOLLON",
    ship_type: "Bulk Carrier",
    flag: "Liberia",
    flagCode: "LR",
    mmsi: 636017781,
    dwt: 75614,
    loa: 224.9,
    beam: 32.25,
    yearBuilt: 2017,
    registryPort: "MONROVIA",
    imoNumber: "9646663",
    imageComponent: VesselApolon,
    marinetrafficUrl:
      "https://www.marinetraffic.com/en/ais/details/ships/imo:9646663",
  },
  {
    vessel_name: "IOLAOS",
    ship_type: "Bulk Carrier",
    flag: "Liberia",
    flagCode: "LR",
    mmsi: 636017197,
    dwt: 63413,
    loa: 200,
    beam: 32,
    yearBuilt: 2016,
    registryPort: "MONROVIA",
    imoNumber: "9696450",
    imageComponent: VesselIolaos,
    marinetrafficUrl:
      "https://www.marinetraffic.com/en/ais/details/ships/imo:9696450",
  },
  {
    vessel_name: "MAERSK VIGO",
    ship_type: "Container Ship",
    flag: "Singapore",
    flagCode: "SG",
    mmsi: 565967000,
    dwt: 23338,
    loa: 175.47,
    beam: 27.71,
    yearBuilt: 2010,
    registryPort: "SINGAPORE",
    imoNumber: "9401697",
    imageComponent: VesselmaerskVigo,
    marinetrafficUrl:
      "https://www.marinetraffic.com/en/ais/details/ships/imo:9401697",
  },
  {
    vessel_name: "SAFEEN PRIZE",
    ship_type: "Container Ship",
    flag: "Marshall Islands",
    flagCode: "MH",
    mmsi: 538005057,
    dwt: 34366,
    loa: 208.9,
    beam: 29.8,
    yearBuilt: 2013,
    registryPort: "MAJURO",
    imoNumber: "9603594",
    imageComponent: VesselsafinPrize,
    marinetrafficUrl:
      "https://www.marinetraffic.com/en/ais/details/ships/imo:9603594",
  },
  {
    vessel_name: "MAERSK BENGUELA",
    ship_type: "Container Ship",
    flag: "Hong Kong",
    flagCode: "HK",
    mmsi: 477552400,
    dwt: 43133,
    loa: 223,
    beam: 32,
    yearBuilt: 2009,
    registryPort: "HONG KONG",
    imoNumber: "9355367",
    imageComponent: VesselmaerskBenguella,
    marinetrafficUrl:
      "https://www.marinetraffic.com/en/ais/details/ships/imo:9355367",
  },
  {
    vessel_name: "GSL VIOLETTA",
    ship_type: "Container Ship",
    flag: "Liberia",
    flagCode: "LR",
    mmsi: 636020776,
    dwt: 67566,
    loa: 277,
    beam: 40.35,
    yearBuilt: 2000,
    registryPort: "MONROVIA",
    imoNumber: "9214202",
    imageComponent: VesselgslVioletta,
    marinetrafficUrl:
      "https://www.marinetraffic.com/en/ais/details/ships/imo:9214202",
  },
];
