import { CalendarDate } from "@internationalized/date";
import { STEPS_DATA } from "../constants";
import type { Section } from "../types";

export const calculateSectionCompletion = (
  section: Section,
  values: Record<string, string>,
  flaggedItems: Set<string>
) => {
  const requiredQuestions = section.questions.filter((q) => q.required);
  if (requiredQuestions.length === 0) return true;

  return requiredQuestions.every((q) => {
    const value = values[q.key] || "";
    const isFlagged = flaggedItems.has(q.key);
    return value.trim() !== "" && !isFlagged;
  });
};

export const getAllCompletion = (
  values: Record<string, any>,
  flaggedItems: Set<string>
) => {
  try {
    const completion =
      Array.from({ length: STEPS_DATA.length }, (_, i) =>
        getStepCompletion(values, i + 1, flaggedItems)
      ).reduce((prev, curr) => {
        curr += prev;
        return curr;
      }, 0) / STEPS_DATA.length;

    return Math.floor(completion);
  } catch (e) {
    return 0;
  }
};

export const getSectionStats = (
  section: Section,
  values: Record<string, string>,
  flaggedItems: Set<string>
) => {
  const requiredQuestions = section.questions.filter((q) => q.required);
  const total = requiredQuestions.length;
  const completed = requiredQuestions.filter((q) => {
    const value = values[q.key] || "";
    const isFlagged = flaggedItems.has(q.key);
    return value.trim() !== "" && !isFlagged;
  }).length;
  const flagged = section.questions.filter((q) =>
    flaggedItems.has(q.key)
  ).length;

  return {
    completed,
    total,
    flagged,
    isCompleted: completed === total && flagged === 0,
  };
};

export const getStepCompletion = (
  values: Record<string, string>,
  stepNumber: number,
  flaggedItems: Set<string>
) => {
  const stepData = STEPS_DATA[stepNumber - 1];
  if (!stepData || stepData.sections.length === 0) return 100;

  const allQuestions = stepData.sections.flatMap((s) => s.questions);
  const requiredQuestions = allQuestions.filter((q) => q.required);
  if (requiredQuestions.length === 0) return 100;

  const answered = requiredQuestions.filter((q) => {
    const value = values[q.key] || "";
    const isFlagged = flaggedItems.has(q.key);
    return value.trim() !== "" && !isFlagged;
  }).length;

  return Math.round((answered / requiredQuestions.length) * 100);
};

export const isStepCompleted = (
  values: Record<string, string>,
  stepNumber: number,
  flaggedItems: Set<string>
): boolean => {
  const stepData = STEPS_DATA[stepNumber - 1];
  if (!stepData) return false;

  return stepData.sections.every((section) => {
    const requiredQuestions = section.questions.filter((q) => q.required);
    if (requiredQuestions.length === 0) return true;

    let valuesForStep: Record<string, string> = {};
    let flaggedForStep = new Set<string>();

    valuesForStep = values;
    flaggedForStep = flaggedItems;

    return requiredQuestions.every((q) => {
      const value = valuesForStep[q.key] || "";
      const isFlagged = flaggedForStep.has(q.key);
      return value.trim() !== "" && !isFlagged;
    });
  });
};

export const getCompletionColor = (percentage: number) => {
  if (percentage === 0) return "bg-gray-200";
  if (percentage < 25) return "bg-red-200";
  if (percentage < 50) return "bg-orange-200";
  if (percentage < 75) return "bg-yellow-200";
  return "bg-green-200";
};

export const getCompletionTextColor = (percentage: number) => {
  if (percentage === 0) return "text-gray-700";
  if (percentage < 25) return "text-red-700";
  if (percentage < 50) return "text-orange-700";
  if (percentage < 75) return "text-yellow-700";
  return "text-green-700";
};

export const getCompletionChipColor = (percentage: number) => {
  if (percentage === 0) return "bg-gray-100 text-gray-700 border-gray-200";
  if (percentage < 25) return "bg-red-100 text-red-700 border-red-200";
  if (percentage < 50) return "bg-orange-100 text-orange-700 border-orange-200";
  if (percentage < 75) return "bg-yellow-100 text-yellow-700 border-yellow-200";
  return "bg-green-100 text-green-700 border-green-200";
};

export const dateToCalendarDate = (date: Date) => {
  return new CalendarDate(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate()
  );
};
