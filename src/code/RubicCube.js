// A class to represent rubik cube and simulate action performed on it. 
/*
    Face representation 
    [
        0, 1, 2,
        3, 4, 5,
        6, 7, 8
    ]
*/
export default class RubikCube {

    // Constructing a unsolved cube
    constructor() {
        this.upFace = ['w','w','w','w','w','w','w','w','w'];
        this.downFace = ['y','y','y','y','y','y','y','y','y'];
        this.frontFace = ['b','b','b','b','b','b','b','b','b'];
        this.backFace = ['g','g','g','g','g','g','g','g','g'];
        this.leftFace = ['o','o','o','o','o','o','o','o','o']; 
        this.rightFace = ['r','r','r','r','r','r','r','r','r'];
    }

    // Implemeting clocwise rotation of the cube.
    // If we move up clockwise then upper row of facese move like this F -> R -> B -> L
    upClock() {
        let tempRow = [this.rightFace[0], this.rightFace[1], this.rightFace[2]]
        
        // this.rightFace[0] = this.frontFace[0];
        // this.rightFace[1] = this.frontFace[1];
        // this.rightFace[2] = this.frontFace[2];
        
        // this.frontFace[0] = this.leftFace[0];
        // this.frontFace[1] = this.leftFace[1];
        // this.frontFace[2] = this.leftFace[2];

        // this.leftFace[0] = this.backFace[0];
        tempRow.forEach((value, index) => {
            this.rightFace[index] = this.frontFace[index];
            this.frontFace[index] = this.leftFace[index];
            this.leftFace[index] = this.backFace[index];
            this.backFace[index] = value;
        })
    }

    // If we move doen clockeise then bottom row of faces move like this F -> R -> B -> L
    downClock() {
        let tempRow = [this.rightFace[6], this.rightFace[7], this.rightFace[8]];

        for(let i = 6; i < 9; i++){
            this.rightFace[i] = this.frontFace[i];
            this.frontFace[i] = this.leftFace[i];
            this.leftFace[i] = this.backFace[i];
            this.backFace[i] = tempRow[i - 6]
        }
    }

    // If we move front face clockwise then bottom row of U and down will exchange with side row of right and left 
    //  U -> R -> D -> L
    frontClock() {
        let tempRow = [this.rightFace[0], this.rightFace[3], this.rightFace[6]]
        
        this.rightFace[0] = this.upFace[6];
        this.rightFace[3] = this.upFace[7];
        this.rightFace[6] = this.upFace[8];

        this.upFace[6] = this.leftFace[8];
        this.upFace[7] = this.leftFace[5];
        this.upFace[8] = this.leftFace[2];

        this.leftFace[8] = this.downFace[2];
        this.leftFace[5] = this.downFace[1];
        this.leftFace[2] = this.downFace[0];

        this.downFace[0] = tempRow[2]
        this.downFace[1] = tempRow[1];
        this.downFace[2] = tempRow[0];
    }

    // backClock U -> R -> D -> L
    backClock() {
        let tempRow = [this.rightFace[2], this.rightFace[5], this.rightFace[8]]
        
        this.rightFace[2] = this.upFace[0];
        this.rightFace[5] = this.upFace[1];
        this.rightFace[8] = this.upFace[2];

        this.upFace[0] = this.leftFace[6];
        this.upFace[1] = this.leftFace[3];
        this.upFace[2] = this.leftFace[0];

        this.leftFace[6] = this.downFace[8];
        this.leftFace[3] = this.downFace[7];
        this.leftFace[0] = this.downFace[6];

        this.downFace[8] = tempRow[0]
        this.downFace[7] = tempRow[1];
        this.downFace[6] = tempRow[2];
    }

    // Right Clock U -> F -> D -> B
    rightClock() {
        let temp = [this.frontFace[2], this.frontFace[5], this.frontFace[8]]

        this.frontFace[2] = this.upFace[2];
        this.frontFace[5] = this.upFace[5];
        this.frontFace[8] = this.upFace[8];

        this.upFace[2] = this.backFace[2];
        this.upFace[5] = this.backFace[5];
        this.upFace[8] = this.backFace[8];

        this.backFace[2] = this.downFace[2]
        this.backFace[5] = this.downFace[5]
        this.backFace[8] = this.downFace[8]

        this.downFace[2] = temp[0];
        this.downFace[5] = temp[1];
        this.downFace[8] = temp[2];
    }

    // Left clock U -> F -> D -> B
    leftClock() {
        let temp = [this.frontFace[0], this.frontFace[3], this.frontFace[6]]

        this.frontFace[0] = this.upFace[0];
        this.frontFace[3] = this.upFace[3];
        this.frontFace[6] = this.upFace[6];

        this.upFace[0] = this.backFace[0];
        this.upFace[3] = this.backFace[3];
        this.upFace[6] = this.backFace[6];

        this.backFace[0] = this.downFace[0]
        this.backFace[3] = this.downFace[3]
        this.backFace[6] = this.downFace[6]

        this.downFace[0] = temp[0];
        this.downFace[3] = temp[1];
        this.downFace[6] = temp[2];
    }

    // Now implementing all the anticlockwise moves. 
    // If we move up face anticlock wise  F -> L -> B -> R
    upAntiClock() {
        let tempRow = [this.leftFace[0], this.leftFace[1], this.leftFace[2]]

        for(let i = 0; i < 3; i++){
            this.leftFace[i] = this.frontFace[i];
            this.frontFace[i] = this.rightFace[i];
            this.rightFace[i] = this.backFace[i];
            this.backFace[i] = tempRow[i]
        }
    }

    // Down anticlock move F -> L -> B -> R
    downAntiClock() {
        let tempRow = [this.leftFace[6], this.leftFace[7], this.leftFace[8]]

        for(let i = 6; i < 9; i++){
            this.leftFace[i] = this.frontFace[i];
            this.frontFace[i] = this.rightFace[i];
            this.rightFace[i] = this.backFace[i];
            this.backFace[i] = tempRow[i - 6]
        }
    }

    // Front anticlock move U -> L -> D -> R
    frontAntiClock() {
        let tempRow = [this.leftFace[2], this.leftFace[5], this.leftFace[8]];

        this.leftFace[2] = this.upFace[8];
        this.leftFace[5] = this.upFace[7];
        this.leftFace[8] = this.upFace[6];

        this.upFace[6] = this.rightFace[0];
        this.upFace[7] = this.rightFace[3];
        this.upFace[8] = this.rightFace[6];

        this.rightFace[0] = this.downFace[2];
        this.rightFace[3] = this.downFace[1];
        this.rightFace[6] = this.downFace[0];

        this.downFace[2] = tempRow[2];
        this.downFace[1] = tempRow[1];
        this.downFace[0] = tempRow[0];
    }

    // Back anticlock move U -> L -> D -> R

    backAntiClock() {
        let tempRow = [this.leftFace[0], this.leftFace[3], this.leftFace[6]]

        this.leftFace[0] = this.upFace[2];
        this.leftFace[3] = this.upFace[1];
        this.leftFace[6] = this.upFace[0];

        this.upFace[2] = this.rightFace[8];
        this.upFace[1] = this.rightFace[5];
        this.upFace[0] = this.rightFace[2];

        this.rightFace[8] = this.downFace[6];
        this.rightFace[5] = this.downFace[7];
        this.rightFace[2] = this.downFace[8];

        this.downFace[6] = tempRow[0];
        this.downFace[7] = tempRow[1];
        this.downFace[8] = tempRow[2];

    }

    // Right anticlock move U -> B -> D -> F
    rightAntiClock() {
        let tempRow = [this.backFace[2], this.backFace[5], this.backFace[8]];

        this.backFace[2] = this.upFace[2];
        this.backFace[5] = this.upFace[5];
        this.backFace[8] = this.upFace[8];

        this.upFace[2] = this.frontFace[2];
        this.upFace[5] = this.frontFace[5];
        this.upFace[8] = this.frontFace[8];

        this.frontFace[2] = this.downFace[2];
        this.frontFace[5] = this.downFace[5];
        this.frontFace[8] = this.downFace[8];

        this.downFace[2] = tempRow[0];
        this.downFace[5] = tempRow[1];
        this.downFace[8] = tempRow[2];
    }

    // left anticlock move U -> B -> D -> F
    leftAntiClock() {
        let tempRow = [this.backFace[0], this.backFace[3], this.backFace[6]];

        this.backFace[0] = this.upFace[0];
        this.backFace[3] = this.upFace[3];
        this.backFace[6] = this.upFace[6];

        this.upFace[0] = this.frontFace[0];
        this.upFace[3] = this.frontFace[3];
        this.upFace[6] = this.frontFace[6];

        this.frontFace[0] = this.downFace[0];
        this.frontFace[3] = this.downFace[3];
        this.frontFace[6] = this.downFace[6];

        this.downFace[0] = tempRow[0];
        this.downFace[3] = tempRow[1];
        this.downFace[6] = tempRow[2];
    }
}