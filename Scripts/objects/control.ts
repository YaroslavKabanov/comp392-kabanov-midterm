/// <reference path="../../typings/tsd.d.ts"/>

// ********************************************
// * Source file : control.ts                 *
// * Author name : Yaroslav Kabanov           *
// * Last Modified by : Yaroslav Kabanov      *
// * Last Date Modified : March 2th, 2016     *
// * Program Description : Tapered Tower      * 
// * Version: 1.0                             * 
// ********************************************
// Git Link : https://github.com/YaroslavKabanov/comp392-kabanov-midterm.git
// Live Link : http://comp392-midterm-kabanov.azurewebsites.net 

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        
        public rotatationCube1: number;
        public rotatationCube2: number;
        public rotatationCube3: number;
        public rotatationCube4: number;
        public rotatationCube5: number;
        public rotatationCube6: number;
        public rotatationCube7: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeedy:number) {
            this.rotatationCube1 = rotationSpeedy;
            this.rotatationCube2 = rotationSpeedy;
            this.rotatationCube3 = rotationSpeedy;
            this.rotatationCube4 = rotationSpeedy;
            this.rotatationCube5 = rotationSpeedy;
            this.rotatationCube6 = rotationSpeedy;
            this.rotatationCube7 = rotationSpeedy;

        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       
    }
}
