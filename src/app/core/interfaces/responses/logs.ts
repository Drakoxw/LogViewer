import { ResponseBase } from './common';

// ######################################################### //
// ######################## COTIZAR ######################## //
// ######################################################### //
export interface QuotePayloadClient {
  idempresa: number;
  origen: string;
  destino: string;
  valorrecaudo: number;
  valorMinimo: number;
  idasumecosto: number;
  contraentrega: number;
  productos: Array<any>;
}

export interface DataQuoteLogsRequest {
  id: number;
  idempresa: number;
  uuid: string | null;
  fecha: string;
  trama: Object;
  responses: Array<any>;
  plugin: string;
  idtransportador: number | null;
  excepciones: Array<any>;
  body: Object;
  bad_responses: Array<any>;
}

export interface QuoteLogsResponse extends ResponseBase {
  data: DataQuoteLogsRequest[];
}

// ######################################################### //
// ################## GENERACION DE GUIAS ################## //
// ######################################################### //
export interface DataShipmentLog {
  idempresa: number;
  plugin: string;
  fecha: string;
  trama: Trama|Array<any>;
  uuid?: string;
  excepciones: any[];
  id: number;
  respuesta: any;
  estado: string;
  numGuia: string;
  idtransportador?: number;
}

export interface ProductoGuia {
  alto: string;
  largo: string;
  ancho: string;
  peso: string;
  unidades: number;
  nombre: string;
  ref?: string;
  valorDeclarado: any;
  urlProducto?: boolean;
}

export interface Trama {
  uuid?: string;
  paymentLink?: boolean;
  ValorPagarUrb: any;
  idempresa: any;
  idtransportador: string;
  idasumecosto: number;
  contraentrega: number;
  valorrecaudo: any;
  idagente: string;
  dsreferencia: string;
  dsordendecompra?: string;
  bloquegenerarguia: string;
  relacion_envios: string;
  enviarcorreos: string;
  cartaporte?: string;
  valorMinimo: any;
  numeroBolsa?: string;
  numeroFactura?: string;
  dsvalor_pedido?: number;
  dsfecha_vencimiento: any;
  dsfecha_cita: any;
  dscodigo_cita: any;
  origen: string;
  dsdirre: string;
  dsbarrioo?: string;
  dstelre: string;
  dscelularre?: string;
  dscorreopre: string;
  dsnombre: string;
  dsnitre: string;
  destino: string;
  IdTipoEntrega: any;
  dsdir: string;
  dsbarrio?: string;
  dsnit: string;
  dsnombrecompleto: string;
  dscorreop?: string;
  dstel: string;
  dscelular: string;
  unidades: number;
  dscontenido: string;
  dscom: string;
  valorTransRecaudoUrbano?: number;
  fleteUrbano?: number;
  costoRecaudoUrbano?: number;
  productos: ProductoGuia[];
  tipo?: string;
  token?: string;
  codigo?: string;
  dsclavex?: string;
  plugin?: string;
  guiahija?: string;
  accesoila?: string;
  envioGratis?: number;
}

export interface ShipmentLogsResponse extends ResponseBase {
  data: DataShipmentLog[];
}
