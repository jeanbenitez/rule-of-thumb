import { ROTPersonType } from "../storage/data";
import { ROTVoteType } from "../storage/interfaces";

export function getVotesInPercents(votes: ROTPersonType['votes']) {
  return {
    up: Math.round(100 * votes.up / (votes.up + votes.down)) || 0,
    down: Math.round(100 * votes.down / (votes.up + votes.down)) || 0
  };
}

export function getMajorVote(votes: ROTPersonType['votes']): ROTVoteType {
  const percents = getVotesInPercents(votes);
  return percents.down > percents.up ? 'down' : 'up';
}
