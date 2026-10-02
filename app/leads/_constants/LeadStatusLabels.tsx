import type { LeadStatus } from "../types";

export const LeadStatusLabels: Record<LeadStatus, string> = {
  draft: "Черновик",
  approval: "На согласовании",
  collecting_responses: "Идет прием откликов",
  proposals_sent: "Отправлены предложения",
  summing_up: "Подведение итогов",
  deal_approval: "Согласование сделки",
  completed: "Завершено",
  archived: "Архив",
};