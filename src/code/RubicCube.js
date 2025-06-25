// A class to represent rubik cube and simulate action performed on it. 
/*
    Face representation 
    [
        0, 1, 2,
        3, 4, 5,
        6, 7, 8
    ]
*/
class RubikCube {

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
        
    }

    // If we move doen clockeise then bottom row of faces move like this F -> R -> B -> L
    downClock() {
        let tempRow = this.rightFace[2];
        this.rightFace[2] = this.frontFace[2]
        this.frontFace[2] = this.leftFace[2]
        this.leftFace[2] = this.backFace[2]
        this.backFace[2] = tempRow;
    }

    // If we move front face clockwise then bottom row of U and down will exchange with side row of right and left 
    //  U -> R -> D -> L
    frontClock() {

    }
}