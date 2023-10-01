import { DataQuoteLogsRequest, DataShipmentLog } from "@interfaces/responses";

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
