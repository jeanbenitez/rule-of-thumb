import LocalDB from 'local-db';
import { ROTVoteType, ROTCategoryType, ROTPersonType } from './interfaces';
import { getExpirationDays } from '../helpers/date';

// initial data to populate our db tables
const initialData: { categories: ROTCategoryType[]; persons: ROTPersonType[]; } = {
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
    },
    {
      name: 'Kanye West',
      image: 'assets/images/people/kanye.png',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      category: 'entertaiment',
      votes: { up: 3, down: 4 },
      expireDate: '04/27/2020'
    },
    {
      name: 'Mark Zuckerberg',
      image: 'assets/images/people/mark.png',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      category: 'business',
      votes: { up: 6, down: 2 },
      expireDate: '04/25/2020'
    },
    {
      name: 'Cristina Fernández de Kirchner',
      image: 'assets/images/people/cristina.png',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      category: 'politics',
      votes: { up: 3, down: 12 },
      expireDate: '04/23/2020'
    },
    {
      name: 'Malala Yousafai',
      image: 'assets/images/people/malala.png',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      category: 'entertaiment',
      votes: { up: 31, down: 1 },
      expireDate: '04/20/2020'
    }
  ]
};

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

    return this.getNotMainPersons();
  }

  static getCategory(id: string): ROTCategoryType {
    return this.categories.query({ id })[0];
  }

  static getPerson(id: string): ROTPersonType {
    return this.persons.query({ id })[0];
  }

  static getMainPerson(): ROTPersonType {
    const persons = this.getPersons();
    return persons.find(person => getExpirationDays(new Date(person.expireDate)) > 0);
  }

  static getNotMainPersons(): ROTPersonType[] {
    const persons = this.getPersons();
    return persons.filter(person => getExpirationDays(new Date(person.expireDate)) <= 0);
  }

  static getCategories(): ROTCategoryType[] {
    return this.categories.query();
  }

  static getPersons(): ROTPersonType[] {
    const persons: ROTPersonType[] = this.persons.query();

    persons.sort((a, b) => (
      new Date(b.expireDate).getTime() - new Date(a.expireDate).getTime()
    ));

    return persons;
  }
}
