export type ROTVoteType = 'up' | 'down';

export interface ROTVoteEvent {
  personId: string;
  vote: ROTVoteType
};
