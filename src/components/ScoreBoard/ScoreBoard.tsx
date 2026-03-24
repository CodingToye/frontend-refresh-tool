import {Score} from "./Score";
import type {ScoreBoardProps} from "./types";
export function ScoreBoard({
  poorCount,
  weakCount,
  decentCount,
  strongCount,
  poorTrend,
  weakTrend,
  decentTrend,
  strongTrend,
}: ScoreBoardProps) {
  const scores = [
    {
      count: poorCount,
      scoreStyle: "poor" as const,
      contentNoun: "Topic",
      contentVerb: "poor",
      trend: poorTrend,
    },
    {
      count: weakCount,
      scoreStyle: "weak" as const,
      contentNoun: "Topic",
      contentVerb: "weak",
      trend: weakTrend,
    },
    {
      count: decentCount,
      scoreStyle: "decent" as const,
      contentNoun: "Topic",
      contentVerb: "decent",
      trend: decentTrend,
    },
    {
      count: strongCount,
      scoreStyle: "strong" as const,
      contentNoun: "Topic",
      contentVerb: "strong",
      trend: strongTrend,
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {scores.map(({count, scoreStyle, contentNoun, contentVerb, trend}, i) => (
        <Score
          key={i}
          count={count}
          scoreIcon="flag"
          scoreStyle={scoreStyle}
          contentNoun={contentNoun}
          contentVerb={contentVerb}
          trend={trend}
        />
      ))}
    </div>
  );
}
