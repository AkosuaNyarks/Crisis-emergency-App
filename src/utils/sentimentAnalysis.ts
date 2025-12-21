import Sentiment from "sentiment";

const sentiment = new Sentiment();

export type DistressLevel = "none" | "low" | "medium" | "high" | "critical";

const CRITICAL_KEYWORDS = [
  "kill myself",
  "end my life",
  "want to die",
  "better off dead",
  "suicide",
];

const HIGH_DISTRESS_KEYWORDS = [
  "hopeless",
  "can't go on",
  "give up",
  "no point",
  "worthless",
  "hate myself",
];

export function analyzeDistress(text: string): {
  level: DistressLevel;
  score: number;
  suggestion: string;
} {
  if (!text || text.trim().length < 10) {
    return {
      level: "none",
      score: 0,
      suggestion: "",
    };
  }
  const lowerText = text.toLowerCase();

  const hasCriticalKeywords = CRITICAL_KEYWORDS.some((keyword) =>
    lowerText.includes(keyword)
  );

  if (hasCriticalKeywords) {
    return {
      level: "critical",
      score: -10,
      suggestion:
        "We're concerned about your safety. Please reach out for immediate help",
    };
  }

  const hasHighDistressKeywords = HIGH_DISTRESS_KEYWORDS.some((keyword) =>
    lowerText.includes(keyword)
  );

  const result = sentiment.analyze(text);
  const score = result.score;

  if (hasHighDistressKeywords || score <= -5) {
    return {
      level: "high",
      score,
      suggestion:
        "It sounds like you're going through a really difficult time.Would you like to see some support",
    };
  }

  if (score <= -3) {
    return {
      level: "medium",
      score,
      suggestion: "Support is available if you need",
    };
  }

  if (score <= -1) {
    return {
      level: "low",
      score,
      suggestion: "",
    };
  }
  return {
    level: "none",
    score,
    suggestion: "",
  };
}
