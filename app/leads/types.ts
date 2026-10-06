export type LeadStatus =
  | "draft"
  | "approval"
  | "collecting_responses"
  | "proposals_sent"
  | "summing_up"
  | "deal_approval"
  | "completed"
  | "archived";

export type LeadDetailsTab = "details" | "views" | "responses";

export type LeadStatusInfo = {
  value: LeadStatus;
  label: string;
};

export type LeadStats = {
  responses: number;
  additionalResponses?: number;
  views: number;
};

export type LeadResponsible = {
  id: number;
  name: string;
  position?: string;
};

export type LeadApproval = {
  id: number;
  name: string;
  position: string;
  approvedAt?: string;
  approved: boolean;
};

export type LeadParticipants = {
  legalEntities: number;
  individuals: number;
};

export type LeadItem = {
  id: number;
  name: string;
  brand?: string;
  model?: string;
  quantity: number;
  unit: string;
};

export type LeadDeliveryTerm = {
  positions: string;
  date: string;
};

export type LeadDelivery = {
  terms: LeadDeliveryTerm[];
  deliveryCondition: string;
  paymentCondition: string;
};

export type LeadAttachment = {
  id: number;
  name: string;
  url: string;
};

export type Lead = {
  id: number;

  /** Например №0002916 */
  number: string;

  title: string;

  /** ЖК Hayat Astoria */
  object: string;

  city: string;

  isPrivate?: boolean;

  status: LeadStatus;

  categories: string[];

  createdAt: string;

  /** До какого времени принимаются отклики */
  responseDeadline?: string;

  /** Дата подведения итогов */
  resultsDate?: string;

  responsible: LeadResponsible;

  stats: LeadStats;

  participants: LeadParticipants;

  budget?: number;

  /** Как выбирается победитель */
  winnerSelection?: string;

  approvals: LeadApproval[];

  items: LeadItem[];

  delivery: LeadDelivery;

  attachments: LeadAttachment[];
  viewsDetails?: LeadView[];
  responsesDetails?: LeadResponse[];

};


export type LeadView = {
  id: number;
  companyName: string;
  viewedAt: string;
  isFavorite?: boolean;
};

export type LeadResponseItem = {
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

export type LeadResponse = {
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

  items: LeadResponseItem[];
};