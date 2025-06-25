export function getBackgroundColor(code) {
    let color = "#AAA"

    switch(code) {
        case 'w' :
            color = "#FFF";
            break;
        case 'y' :
            color = "#FF0";
            break;
        case 'b' : 
            color = "#00F";
            break;
        case 'g' :
            color = "#0F0";
            break;
        case 'o' :
            color = "#FA5";
            break;
        case 'r' :
            color = "#F00";
            break;
        default :
            break;
    }

    return color;
}

export function scrambleCube(turns, cube){
    console.log("Cube is ", cube);
    const moves = ['up-clock', 'down-clock', 'front-clock', 'back-clock', 'right-clock', 'left-clock', 
                    'up-anti-clock', 'down-anti-clock', 'front-anti-clock', 'back-anti-clock', 'right-anti-clock', 'left-anti-clock']
    for(let i = 1; i <= turns; i++) {

        let index = Math.floor(Math.random()*moves.length) - 1;

        switch(moves[index]){
        
            case 'up-clock':
                cube.upClock();
                break;
            case 'down-clock': 
                cube.downClock();
                break;

            case 'front-clock':
                cube.frontClock();
                break;

            case 'back-clock':
                cube.backClock();
                break;

            case 'right-clock' :
                cube.rightClock();
                break;

            case 'left-clock':
                cube.leftClock();
                break;

            case 'up-anti-clock':
                cube.upAntiClock();
                break;

            case 'down-anti-clock':
                cube.downAntiClock();
                break;

            case 'front-anti-clock':
                cube.frontAntiClock();
                break;

            case 'back-anti-clock' :
                cube.backAntiClok();
                break;

            case 'right-anti-clock' :
                cube.rightAntiClock();
                break;

            case 'left-anti-clock' :
                cube.leftAntiClock();
                break;
        }
    }

    return cube;
}

export function cloneDeepObject(obj) {
    const properties = Object.getPrototypeOf(obj);
    const clone = Object.create(properties);
    return Object.assign(clone, obj);
}