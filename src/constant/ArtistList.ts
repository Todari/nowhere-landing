type Artist = {
  id: number,
  name: string,
  profile: string,
  path: string,
  soundCloud: string,
  instagram: string,
}

type ArtistList = {
  list: Artist[]
}

const ARTIST_LIST: ArtistList =
{
  list: [
    {
      id: 0,
      name: 'Smasher',
      profile: '',
      path: '/smasher',
      soundCloud: 'https://soundcloud.com/smasher_official',
      instagram: 'https://www.instagram.com/smasher_mk/',
    },
    {
      id: 1,
      name: 'Fatrik',
      profile: '',
      path: '/fatrik',
      soundCloud: 'https://soundcloud.com/justfatrikmusic',
      instagram: 'https://www.instagram.com/fatrik__/',
    },
    {
      id: 2,
      name: 'Arkins',
      profile: '',
      path: '/arkins',
      soundCloud: 'https://soundcloud.com/arkinsofficial',
      instagram: 'https://www.instagram.com/arkins_official/',
    },
    {
      id: 3,
      name: 'Castle J',
      profile: '',
      path: '/castle-j',
      soundCloud: 'https://soundcloud.com/castle_j_official',
      instagram: 'https://www.instagram.com/djcastle_j__jin/',
    },
  ]
}

export default ARTIST_LIST