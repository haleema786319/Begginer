const matches=require('./jsonDB/matches.json');
function matches_per_year() {
    let obj={};
    for(let match of matches) {
        const season= match.season;
        if(!obj[season]) {
            obj[season]=0;
        }
        obj[season]++;
        }
        return obj;
    }
    console.log(matches_per_year());
    
