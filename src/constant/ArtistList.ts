import Iframe from "react-iframe"
import { IIframe } from "react-iframe/types"

type Artist = {
  id: number,
  name: string,
  profile: string,
  path: string,
  soundCloud: string,
  instagram: string,
  tracks: string[],
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
      path: 'smasher',
      soundCloud: 'https://soundcloud.com/smasher_official',
      instagram: 'https://www.instagram.com/smasher_mk/',
      tracks: [
        'https://soundcloud.com/clubwrk/smasher-arkins-yangjae',
        'https://soundcloud.com/smasher_official/natalie-dont',
      ],
      profile:'smasher1000.png',
    },
    {
      id: 1,
      name: 'Fatrik',
      path: 'fatrik',
      soundCloud: 'https://soundcloud.com/justfatrikmusic',
      instagram: 'https://www.instagram.com/fatrik__/',
      tracks: [
        'https://soundcloud.com/justfatrikmusic/no-need-to-high',
        'https://soundcloud.com/justfatrikmusic/its-like-that'
      ],
      profile:'fatrik1000.png',
    },
    {
      id: 2,
      name: 'Arkins',
      path: 'arkins',
      soundCloud: 'https://soundcloud.com/arkinsofficial',
      instagram: 'https://www.instagram.com/arkins_official/',
      tracks: [
        'https://www.youtube.com/watch?v=gr9_5y5JXTs',
        'https://www.youtube.com/watch?v=u7u80fHlYZc',
        'https://www.youtube.com/watch?v=OmMTVS6pMSY'
      ],
      profile:'arkins1000.png',
    },
    {
      id: 3,
      name: 'Castle J',
      path: 'castle-j',
      soundCloud: 'https://soundcloud.com/castle_j_official',
      instagram: 'https://www.instagram.com/djcastle_j__jin/',
      tracks: [
        'https://soundcloud.com/soundwhere_official/1004-rework',
        'https://soundcloud.com/castle_j_official/castle-j-calfskin-set-me-free'
      ],
      profile:'castlej1000.png',
    },
    {
      id: 4,
      name: 'Boyd',
      path: 'boyd',
      soundCloud: 'https://soundcloud.com/castle_j_official',
      instagram: 'https://www.instagram.com/djcastle_j__jin/',
      tracks: [
        // 'https://soundcloud.com/soundwhere_official/1004-rework',
        // 'https://soundcloud.com/castle_j_official/castle-j-calfskin-set-me-free'
      ],
      profile:'boyd1000.png',
    },
    {
      id: 5,
      name: 'Nwan Ji',
      path: 'nwanji',
      soundCloud: 'https://soundcloud.com/castle_j_official',
      instagram: 'https://www.instagram.com/djcastle_j__jin/',
      tracks: [
        // 'https://soundcloud.com/soundwhere_official/1004-rework',
        // 'https://soundcloud.com/castle_j_official/castle-j-calfskin-set-me-free'
      ],
      profile:'nwanji1000.png',
    },
    {
      id: 6,
      name: 'KAI',
      path: 'kai',
      soundCloud: 'https://soundcloud.com/castle_j_official',
      instagram: 'https://www.instagram.com/djcastle_j__jin/',
      tracks: [
        // 'https://soundcloud.com/soundwhere_official/1004-rework',
        // 'https://soundcloud.com/castle_j_official/castle-j-calfskin-set-me-free'
      ],
      profile:'kai1000.png',
    },
    {
      id: 7,
      name: 'LOODA',
      path: 'looda',
      soundCloud: 'https://soundcloud.com/castle_j_official',
      instagram: 'https://www.instagram.com/djcastle_j__jin/',
      tracks: [
        // 'https://soundcloud.com/soundwhere_official/1004-rework',
        // 'https://soundcloud.com/castle_j_official/castle-j-calfskin-set-me-free'
      ],
      profile:'looda1000.png',
    },
  ]
}

export default ARTIST_LIST