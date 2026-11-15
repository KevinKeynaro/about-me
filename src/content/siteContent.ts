export interface BookItem {
  id: string
  title: string
  note?: string
}

export interface MovieItem {
  id: string
  title: string
}

export interface SportItem {
  name: string
  detail: string
  type: 'jiujitsu' | 'swimming'
}

export const siteContent = {
  name: 'Kevin Keynaro',
  heroCountry: 'Indonesia',
  about: '', // TODO: written by Kevin, leave empty string so fallback is used
  identity: {
    nationality: 'Indonesia',
    ideology: 'Social Democracy',
  },
  reading: {
    comicsAndLightNovels: [
      { id: 'youjo-senki', title: 'Youjo Senki' },
      { id: 'gate-jsdf', title: 'Gate: JSDF' },
      { id: 'archmage-restaurant', title: 'Archmage Restaurant' },
    ] as BookItem[],
    novels: [
      { id: 'the-cat-who-saved-books', title: 'The Cat Who Saved Books' },
      { id: 'to-kill-a-mockingbird', title: 'To Kill a Mockingbird' },
      { id: 'a-clergymans-daughter', title: "A Clergyman's Daughter" },
    ] as BookItem[],
  },
  movies: [
    { id: 'violet-evergarden-movie', title: 'Violet Evergarden The Movie' },
    { id: 'violet-evergarden-eternity', title: 'Violet Evergarden: Eternity and the Auto Memory Doll' },
  ] as MovieItem[],
  sports: [
    { name: 'Japanese Jiu Jitsu', detail: 'White Belt', type: 'jiujitsu' },
    { name: 'Swimming', detail: 'Once a week', type: 'swimming' },
  ] as SportItem[],
  footerSignoff: '', // TODO: written by Kevin
} as const
