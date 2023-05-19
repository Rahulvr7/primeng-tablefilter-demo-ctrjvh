export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Grid {
  deviceId: number;
  serialNumber: string;
  productDescription: string;
  productTypeId?: number;
  productTypeName?: string;
  productGroupId?: number;
  productGroupName?: string;
  productNumber: string;
  bornOnDate: string;
  deviceAge: number;
  maintenanceStatus: string;
  maintenanceStatusCode: string;
  maintenanceRecommendation: string;
  maintenanceRecommendationCode: string;
  lastKnownLocation: string;
  lastConnectionDate: string | Date;
  connectionStatus: string;
  isLoaner: boolean;
  loanerDueDate: string;
  isLoanerDueSoon: string;
  isLoanerPastDue: string;
  loanerOrderNumber: string;
  usagePatternValue: number;
  usagePatternUnitOfMeasure: string;
  usagePatternNumberOfDays: number;
  productGroupImage: string;
  facilityName: string;
  inCart: boolean;
  countOfHighPriorityEvents: number;
  runtime: number;
  runtimeUnitOfMeasure: string;
  workOrderNumber?: string;
  maintenanceEventStartDate?: string;
  maintenanceEventCompleteDate?: string;
}
