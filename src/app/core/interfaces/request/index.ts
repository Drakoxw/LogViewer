
export interface QuotePayload {
  date?: string
  idEnterprise?: number
}

export interface ShipmentPayload {
  date: string
  idEnterprise?: number
  guide: string
}

export interface RelationsPayload {
  date?: string
  idEnterprise?: number
  uuid?: string
}
