export type RequestStatus =
  | "draft"
  | "approval"
  | "collecting_responses"
  | "proposals_sent"
  | "summing_up"
  | "deal_approval"
  | "completed"
  | "archived";


export const RequestStatusLabel: Record<RequestStatus, string> = {
  draft: "Черновик",
  approval: "На согласовании",
  collecting_responses: "Идет прием откликов",
  proposals_sent: "Отправлены предложения",
  summing_up: "Подведение итогов",
  deal_approval: "Согласование сделки",
  completed: "Завершено",
  archived: "Архив",
};


export type RequestDetailsTab = "details" | "views" | "responses";

export type RequestStatusInfo = {
  value: RequestStatus;
  label: string;
};

export type RequestStats = {
  responses: number;
  additionalResponses?: number;
  views: number;
};

export type RequestResponsible = {
  id: number;
  name: string;
  position?: string;
};

export type RequestApproval = {
  id: number;
  name: string;
  position: string;
  approvedAt?: string;
  approved: boolean;
};

export type RequestParticipants = {
  legalEntities: number;
  individuals: number;
};

export type RequestItem = {
  id: number;
  name: string;
  brand?: string;
  model?: string;
  quantity: number;
  unit: string;
};

export type RequestDeliveryTerm = {
  positions: string;
  date: string;
};

export type RequestDelivery = {
  terms: RequestDeliveryTerm[];
  deliveryCondition: string;
  paymentCondition: string;
};

export type RequestAttachment = {
  id: number;
  name: string;
  url: string;
};

export type Request = {
  id: number;
  number: string;
  title: string;
  object: string;
  city: string;
  isPrivate?: boolean;
  status: RequestStatus;
  categories: string[];
  createdAt: string;
  responseDeadline?: string;
  resultsDate?: string;
  responsible: RequestResponsible;
  stats: RequestStats;
  participants: RequestParticipants;
  budget?: number;
  winnerSelection?: string;
  approvals: RequestApproval[];
  items: RequestItem[];
  delivery: RequestDelivery;
  attachments: RequestAttachment[];
  viewsDetails?: RequestView[];
  responsesDetails?: RequestResponse[];
};


export type RequestView = {
  id: number;
  companyName: string;
  viewedAt: string;
  isFavorite?: boolean;
};

export type RequestResponseItem = {
  id: number;
  name: string;
  model?: string;
  brand?: string;
  quantity: number;
  unit: string;
  pricePerUnit: number;
  total: number;
  isAlternative?: boolean;
};

export type RequestResponse = {
  id: number;

  supplier: {
    id: number;
    name: string;
    rating: number;
    reliability: number;
  };

  respondedAt: string;

  positions: {
    offered: number;
    total: number;
  };

  subtotal: number;
  deliveryCost: number;
  totalWithDelivery: number;

  items: RequestResponseItem[];
};