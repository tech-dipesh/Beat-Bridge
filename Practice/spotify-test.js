// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQCjPIytheu2Ij--8l2145y_Vw0YeS_Owjx2muY0bqq8j2bOJ7_4ueyMSKxoGHiNnYidU-ucHOrKLVVOc_QGF8dHOmnZuggo_0r7yeYqvVwX36OHvg3Z2UnWlKGafhK1bnYLRO6qlE3cE8GMUTisNs1TK_oC_EdMbTlKqWe1GXwnujtLKjk9XVlMS0wYsMwBHznyRigpK1TARI-stmfjmqRrBJYMZSUE_9_30laWDddI8YaU6uCypWfQsAILWIPnpxQ8JcNNTVyKvgbvq-OT8Q4Bc-CyDi8aPaYgqx2hN9gSJUBILqYIbjxMN8S_smAbX7op';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);