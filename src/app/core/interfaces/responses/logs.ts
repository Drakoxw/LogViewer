import { ResponseBase } from './common';

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
  idEnterprise: number;
  uuid: string;
  operatorQuote: number;
  timeQuote: string;
  guide: string;
  statusGuide: string;
  shipmentOperatorId: number;
  dateShipment: string;
  quotePayloadClient: QuotePayloadClient;
  bodyQuote: Object | Array<any>;
  responsesQuote: Array<any>;
  excepctionsQuote: Array<any>;
  shipmentPayloadClient: Object | Array<any>;
  excepctionsShipment: Array<any>;
  responseShipment: Object | Array<any>;
}

export interface QuoteLogsResponse extends ResponseBase {
  data: DataQuoteLogsRequest;
}
