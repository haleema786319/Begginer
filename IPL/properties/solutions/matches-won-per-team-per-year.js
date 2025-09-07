const matches = require('./jsonDB/matches.json');
function matches_won_per_team_per_year() {
let obj={};
//     for(let i=0;i<matches.length;i++) {
//         const season=matches[i].season;
//         const winner=matches[i].winner;
//         if(!obj[season]) {
//             obj[season]={};
//         }
//         if(!obj[season][winner]) {
//             obj[season][winner]=1;
//         }
//         else {
//             obj[season][winner]++;
//         }
//     }
//     return obj;
// }
// for(let match of matches) {
//     const season=match.season;
//     const winner=match.winner;
//     if(!obj[season]) {
//         obj[season]={};
//     }
//     if(!obj[season][winner]) {
//         obj[season][winner]=1;
//     }
//     else {
//         obj[season][winner]++;
//     }
// }
// return obj;
// }

return matches.reduce((obj, match) => {
    const season=match.season;
    const winner=match.winner;
    if(!obj[season]) {
        obj[season]={};
    }
    if(!obj[season][winner]) {
        obj[season][winner]=1;
    }
    else {
        obj[season][winner]++;
    }
    return obj;
}, {})
}
console.log(matches_won_per_team_per_year());
    