/*
Ranked = [100,90,90,80] 
Player = [70,80, 105]

masuk
[100,90,90,80]
create index
input 105
keluar 1

output 
[1]

*/

function createRankingStanding(ranked) {
  let unique = [...new Set(ranked)];
  console.log(unique);
  standing = unique.map((v,i)=>{
    return {
      "value": v,
      "rank": i+1
    }
  })
  return standing;
}

function getRanking(standing, player) {
  if (player < standing[standing.length-1].value ){
    return standing.length +1
  }
  for (let i = 0; i < standing.length; i++) {
    if (standing[i].value <= player){
      return standing[i].rank;
    }
  }
}

function getRankings(standing, players) {
  allRankPlayers = players.map((v,i)=>{
    return getRanking(standing,v)
  })
  return allRankPlayers.reverse();
}
ranked = [100,90,90,80]
player = [105,80,70]
standing = createRankingStanding(ranked)
allRank = getRankings(standing, player)
console.log(allRank)
