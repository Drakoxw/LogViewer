import { DataFilesLogs, DataQuoteLogsRequest, DataRelationsLog, DataShipmentLog } from "@interfaces/responses";

export const ShipmentVoidResponse: DataShipmentLog = {
  idempresa: 0,
  plugin: "",
  fecha: "",
  trama: [],
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
