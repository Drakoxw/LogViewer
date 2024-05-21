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
  trama_sw: Object|Array<any>;
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

// ######################################################### //

export interface RelationsLogsResponse {
  status: string
  message: string
  data: DataRelationsLog[]
}

export interface DataRelationsLog {
  idempresa: number
  uuid: string
  operatorQuote: number
  timeQuote: string
  guide: string
  statusGuide: string
  shipmentOperatorId: number
  dateShipment: string
  quotePayloadClient: QuotePayloadClient|[]
  bodyQuote: BodyQuote|[]
  responsesQuote: ResponsesQuote[]
  excepctionsQuote: any[]
  shipmentPayloadClient: ShipmentPayloadClient|[]
  excepctionsShipment: any[]
  responseShipment: any
}

export interface Producto {
  alto: string
  largo: string
  ancho: string
  peso: string
  unidades: number
  nombre: string
  valorDeclarado: string
}

export interface BodyQuote {
  origen: string
  destino: string
  idsercontraentrega: number
  kilos: number
  dsvalorrecaudo: number
  valordeclarado: number
  idasumecosto: number
  origenpedidos: number
  unidades: number
  idempresa: number
  pesoVol: number
  idalto: number
  idancho: number
  idlargo: number
  plugin: string
}

export interface ResponsesQuote {
  numbererror: string
  dataerror: string
  codigotransportadora: string
  transportadora: string
  logotransportadora: string
  logotransportadora2: string
  origen: string
  destino: string
  unidades: number
  kilosacobrar: number
  pesovolumen: number
  valoracion: number
  porvaloracion: string
  trayecto: string
  codtrayecto: string
  tipoenvio: string
  fletexkilo: number
  fletexund: number
  fletetotal: number
  diasentrega: string
  flete: number
  costomanejo: number
  valortotal: number
  valorotros: number
  grantotal: number
  codmostrartransportadora: string
  topemaximo: number
  dscontraentrega: number
  alto: number
  largo: number
  ancho: number
  uuid: string
}

export interface ShipmentPayloadClient {
  uuid: string
  paymentLink: boolean
  ValorPagarUrb: any
  idempresa: number
  idtransportador: string
  idasumecosto: number
  contraentrega: number
  valorrecaudo: number
  idagente: string
  dsreferencia: string
  dsordendecompra: any
  bloquegenerarguia: string
  relacion_envios: string
  enviarcorreos: string
  cartaporte: any
  valorMinimo: number
  numeroBolsa: any
  numeroFactura: string
  dsvalor_pedido: number
  dsfecha_vencimiento: any
  dsfecha_cita: any
  dscodigo_cita: any
  origen: string
  dsdirre: string
  dsbarrioo: string
  dstelre: string
  dscelularre: string
  dscorreopre: string
  dsnombre: string
  dsnitre: string
  destino: string
  IdTipoEntrega: any
  dsdir: string
  dsbarrio: string
  dsnit: string
  dsnombrecompleto: string
  dscorreop: string
  dstel: string
  dscelular: string
  unidades: number
  dscontenido: string
  dscom: string
  valorTransRecaudoUrbano: number
  fleteUrbano: number
  costoRecaudoUrbano: number
  productos: Producto2[]
}

export interface Producto2 {
  alto: string
  largo: string
  ancho: string
  peso: string
  unidades: number
  nombre: string
  ref: any
  valorDeclarado: string
}

// ######################################################### //


export interface MimErrorResponse extends ResponseBase {
  success: boolean
  errores: Array<MimError>
}

export interface MimError {
  id_error: string
  contacto: string
  canal: string|null
  pedido_token: string|null
  pedido_order_number: number|null
  pedido_valor: number|null
  pedido_destinatario: string|null
  pedido_destino: string|null
  pedido_address: string|null
  pedido_phone: string|null
  pedido_email: string|null
  pedido_items: Array<any>
  error: object
  scope: string
  event: string
  tipo: number|null
  mensaje: string
  payload: object
  job_start_time: string
  job_finish_time: string
}
