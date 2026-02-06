export enum AppStep {
  FIND_UNI = 'FIND_UNI',
  VALIDATION = 'VALIDATION',
  APS_VISA = 'APS_VISA',
  HOUSING = 'HOUSING',
  LIVE_AGENT = 'LIVE_AGENT',
  VIDEO_KYC = 'VIDEO_KYC',
  ANMELDUNG = 'ANMELDUNG',
}

export interface VerificationResult {
  isValid: boolean;
  universityName?: string;
  studentName?: string;
  passportNumber?: string;
  studentHash?: string;
  confidence?: number;
  reasoning?: string;
}

export interface KYCResult {
  verified: boolean;
  keyExchanged: boolean;
  peopleCount: number;
  landlordName?: string;
  contractAnalyzed?: boolean;
  analysis: string;
}

export interface AnmeldungData {
  landlordName: string;
  moveInDate: string;
  address: string;
  tenantName: string;
  extractedFromContract: boolean;
}

export interface FunctionCallResponse {
  functionName: string;
  args: any;
}

export interface UniSearchResult {
  university: string;
  program: string;
  location: string;
  ranking?: string;
  tuition: string;
  ncReasoning: string;
  url: string;
}

export interface HousingResult {
  location: string;
  priceEstimate: string;
  commuteAnalysis: string;
  sources: { title: string; uri: string }[];
}