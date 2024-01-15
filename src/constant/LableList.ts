type Label = {
  id: number,
  name: string,
  profile: string,
  // path: string,
  soundCloud: string,
  tracks: string[],
  description: string,
}

type LabelList = {
  list: Label[]
}

const LABEL_LIST: LabelList =
{
  list: [
    {
      id: 0,
      name: 'BETTER THAN YOU',
      // path: '/smasher',
      soundCloud: 'https://soundcloud.com/betterthanyou_official',
      tracks: [
        // 'https://soundcloud.com/clubwrk/smasher-arkins-yangjae',
        // 'https://soundcloud.com/smasher_official/natalie-dont',
      ],
      profile: 'better-than-you.jpeg',
      description: `'BETTER THAN YOU' 라는 주제하에, 비공식 리믹스들을 무료 배포하는 NOWHERE의 FREE DOWNLOAD 레이블 NOWHERE를 비롯한 유수의 프로듀서들과 다양한 레이블들이 참여중`,
    },{
      id: 1,
      name: 'OROZEE',
      // path: '/smasher',
      soundCloud: 'https://soundcloud.com/nowhere_nowhere4',
       tracks: [
        // 'https://soundcloud.com/clubwrk/smasher-arkins-yangjae',
        // 'https://soundcloud.com/smasher_official/natalie-dont',
      ],
      profile:'orozee.jpeg',
      description: `NOWHERE NOWHERE의 기존 레이블들을 리뉴얼한 레이블 Original 음원들을 정식 발매하고 있으며 한국 뿐아니라 세계적인 아티스트들 곡 또한 발매해 나가는 채널. 장르에 한계를 두지 않음`,
    },{
      id: 2,
      name: 'WHEREISMYDREAM',
      // path:  '/smasher',
      soundCloud: 'https://soundcloud.com/nowhere_nowhere3',
       tracks: [
        // 'https://soundcloud.com/clubwrk/smasher-arkins-yangjae',
        // 'https://soundcloud.com/smasher_official/natalie-dont',
      ],
      profile:'whereismydream.jpeg',
      description: `NOWHERE NOWHERE의 기존 레이블들을 리뉴얼한 레이블 Original 음원들을 정식 발매하고 있으며 새로운 세대를 이끌 프로듀서 및 가능성 있는 라이징 스타들의 데모를 받아 발매하는 서브레이블`,
    },{
      id: 3,
      name: 'SOJU RECORDS',
      // path:  '/smasher',
      soundCloud: 'https://soundcloud.com/soju-gang',
       tracks: [
        // 'https://soundcloud.com/clubwrk/smasher-arkins-yangjae',
        // 'https://soundcloud.com/smasher_official/natalie-dont',
      ],
      profile:'soju-records.jpeg',
      description: `SOJU GANG이라는 프로젝트 아티스트 그룹을 필두로 Tiktok, Reels, Shorts 등 SNS의 트렌드 숏폼 컨텐츠를 겨냥한 자극적이고 커머셜한 음악을 발매하는 레이블`,
    },{
      id: 4,
      name: 'SOUNDWHERE',
      // path:  '/smasher',
      soundCloud: 'https://soundcloud.com/soundwhere_official',
       tracks: [
        // 'https://soundcloud.com/clubwrk/smasher-arkins-yangjae',
        // 'https://soundcloud.com/smasher_official/natalie-dont',
      ],
      profile:'soundwhere.png',
      description: `NOWHERE NOWHERE 에서 음악감독을 맡고 있는 강남의 대표 클럽 ‘Club Sound’와의 콜라보레이션 레이블 강남 클럽씬을 주로 타겟팅한 비공식 리믹스들을 무료로 배포하는 레이블`,
    },
  ]
}
 
export default LABEL_LIST      