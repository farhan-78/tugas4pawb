function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here

var climb = 7;
var slip = 2;
var day = 0;
    for(workdone=0;workdone<=depth;) {
        day = day + 1;
        workdone=workdone+climb;
        if(workdone>=depth){
            break;
        }
        workdone = workdone - slip;
        
    }
 console.log(day);
}