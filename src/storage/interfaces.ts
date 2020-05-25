export type ROTVoteType = 'up' | 'down';

export interface ROTVoteEvent {
  personId: string;
  vote: ROTVoteType
};

export interface ROTPersonType {
  id?: string;
  name: string;
  image: string;
  description: string;
  category: string;
  extras?: {
      moreInfoLink?: string;
      questionOpening?: string;
      veredictQuestion?: string;
  };
  votes: {
      up: number;
      down: number;
  };
  expireDate: string;
};

export interface ROTCategoryType {
  id?: string;
  slug: string;
  name: string;
};
