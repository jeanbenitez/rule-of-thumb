import LocalDB from 'local-db';
import { ROTVoteType } from './interfaces';

// initial data to populate our db tables
const initialData = {
  categories: [
    { slug: 'business', name: 'Business' },
    { slug: 'cultural', name: 'Cultural' },
    { slug: 'entertaiment', name: 'Entertaiment' },
    { slug: 'politics', name: 'Politics' }
  ],
  persons: [
    {
      name: 'Pope Francis',
      image: 'assets/images/people/pope.png',
      description: 'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
      category: 'cultural',
      extras: {
        moreInfoLink: 'https://en.wikipedia.org/wiki/Pope_Francis',
        questionOpening: 'What’s your opinion on',
        veredictQuestion: 'What’s your veredict?'
      },
      votes: { up: 0, down: 0 },
      expireDate: '06/07/2020'
    }
  ]
};

// Types
export type ROTDataType = typeof initialData;
export type ROTPersonType = { id: string } & ROTDataType['persons'][0];
export type ROTCategoryType = { id: string } & ROTDataType['categories'][0];

export class RotDB {
  static persons = new LocalDB('persons');
  static categories = new LocalDB('categories');

  static init() {
    if (!this.getPersons()?.length) {
      initialData.persons.map(p => this.persons.insert(p));
    }

    if (!this.getCategories()?.length) {
      initialData.categories.map(c => this.categories.insert(c));
    }
  }

  static updatePerson(person: ROTPersonType) {
    this.persons.update({ id: person.id }, person);
  }

  static addVoteToPerson(personId: string, vote: ROTVoteType) {
    const person = this.getPerson(personId);
    person.votes[vote] = person.votes[vote] + 1;
    this.updatePerson(person);

    return this.getPersons();
  }

  static getCategory(id: string): ROTCategoryType {
    return this.categories.query({ id })[0];
  }

  static getPerson(id: string): ROTPersonType {
    return this.persons.query({ id })[0];
  }

  static getCategories(): ROTCategoryType[] {
    return this.categories.query();
  }

  static getPersons(): ROTPersonType[] {
    return this.persons.query();
  }
}
