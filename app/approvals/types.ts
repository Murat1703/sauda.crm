export type ApprovalStatus =
  | "pending"
  | "approved"
  | "rejected";

export type ApprovalDecision =
  | "waiting"
  | "approved"
  | "rejected";

export type ApprovalType =
  | "purchase_request"
  | "deal_request";

export type ApprovalUser = {
  id: number;
  name: string;
  position: string;
};

export type ApprovalPerson = {
  id: number;
  name: string;
  position: string;

  status: ApprovalDecision;

  decidedAt?: string;
  comment?: string;
};

export type ApprovalRequest = {
  id: number;

  /**
   * ID самой заявки.
   * Потом по нему сможешь открыть LeadDetails.
   */
  leadId: number;

  /**
   * Например №0002915
   */
  number: string;

  type: ApprovalType;

  title: string;

  object: string;

  city: string;

  createdAt: string;

  /**
   * До какого момента желательно согласовать.
   */
  approvalDeadline?: string;

  initiator: ApprovalUser;

  /**
   * Статус всего согласования.
   */
  status: ApprovalStatus;

  /**
   * Решение текущего пользователя.
   * Именно по нему удобно строить вкладки
   * "На согласовании" / "Согласовано мной".
   */
  myDecision: ApprovalDecision;

  budget?: number;

  itemsCount: number;

  categories: string[];

  approvers: ApprovalPerson[];
};