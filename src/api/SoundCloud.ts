// import Soundcloud from "soundcloud.ts"

// const soundcloud = new Soundcloud({
//   clientId: process.env.SOUNDCLOUD_CLIENT_ID,
//   oauthToken: process.env.SOUNDCLOUD_OAUTH_TOKEN,
// })

// /*Credentials are optional, client id is manually found if omitted.*/
const getBetterThanYouTracks = async () => {
  const result : string[] = [];
  // const betterThanYouTracks = await soundcloud.users.tracksV2("BETTER THAN YOU")
  // betterThanYouTracks.forEach(track => {
  //   result.push(track.uri)
  // });

  return result
}

export { getBetterThanYouTracks }