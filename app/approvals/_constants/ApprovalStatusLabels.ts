import type { ApprovalStatus } from "../types";

export const ApprovalStatusLabels: Record<ApprovalStatus, string> = {
  pending: "На согласовании",
  approved: "Согласована",
  rejected: "Отклонена",
  canceled: "Отклонена",
};