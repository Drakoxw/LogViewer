import { ResponseBase } from './common';

// ######################################################### //
// #################### LISTA ARCHIVOS ##################### //
// ######################################################### //

export interface ListFilesLogsResponse extends ResponseBase {
  data: string[];
}

// ######################################################### //
// #################### DATA DE ARCHIVOS ################### //
// ######################################################### //

export interface DataFilesLogs {
  date: string
  environment: string
  type_log: string
  payload: string
}

export interface DataFilesLogsResponse extends ResponseBase {
  data: DataFilesLogs[];
}
