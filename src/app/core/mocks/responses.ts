import { DataQuoteLogsRequest } from "@interfaces/responses";

export const QuoteVoidResponse: DataQuoteLogsRequest = {
  idEnterprise: 0,
  uuid: "",
  operatorQuote: 0,
  timeQuote: "",
  guide: "",
  statusGuide: "",
  shipmentOperatorId: 0,
  dateShipment: "",
  quotePayloadClient: {
    idempresa: 0,
    origen: "",
    destino: "",
    valorrecaudo: 0,
    valorMinimo: 0,
    idasumecosto: 0,
    contraentrega: 0,
    productos: []
  },
  bodyQuote: [],
  responsesQuote: [],
  excepctionsQuote: [],
  shipmentPayloadClient: [],
  excepctionsShipment: [],
  responseShipment: []
}
