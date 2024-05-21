import { DataFilesLogs, DataQuoteLogsRequest, DataRelationsLog, DataShipmentLog, MimError } from "@interfaces/responses";

export const ShipmentVoidResponse: DataShipmentLog = {
  idempresa: 0,
  plugin: "",
  fecha: "",
  trama: [],
  trama_sw: [],
  excepciones: [],
  id: 0,
  respuesta: [],
  estado: "",
  numGuia: ""
}

export const QuoteVoidResponse: DataQuoteLogsRequest = {
  id: 0,
  idempresa: 0,
  uuid: '',
  fecha: '',
  trama: {},
  responses: [],
  plugin: '',
  idtransportador: 0,
  excepciones: [],
  body: [],
  bad_responses: []
}

export const RelationsVoidResponse: DataRelationsLog = {
  idempresa: 0,
  uuid: "",
  operatorQuote: 0,
  timeQuote: "",
  guide: "",
  statusGuide: "",
  shipmentOperatorId: 0,
  dateShipment: "",
  quotePayloadClient: [],
  bodyQuote: [],
  responsesQuote: [],
  excepctionsQuote: [],
  shipmentPayloadClient: [],
  excepctionsShipment: [],
  responseShipment: []
}

export const DataFilesVoidResponse: DataFilesLogs = {
  date: "",
  environment: "",
  type_log: "",
  payload: ""
}

export const MimErorVoidResponse: MimError = {
  id_error: "",
  contacto: "",
  canal: null,
  pedido_token: null,
  pedido_order_number: null,
  pedido_valor: null,
  pedido_destinatario: null,
  pedido_destino: null,
  pedido_address: null,
  pedido_phone: null,
  pedido_email: null,
  pedido_items: [],
  error: {},
  scope: "",
  event: "",
  tipo: null,
  mensaje: "",
  payload: {},
  job_start_time: "",
  job_finish_time: ""
}
