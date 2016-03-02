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
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeedy) {
            this.rotatationCube1 = rotationSpeedy;
            this.rotatationCube2 = rotationSpeedy;
            this.rotatationCube3 = rotationSpeedy;
            this.rotatationCube4 = rotationSpeedy;
            this.rotatationCube5 = rotationSpeedy;
            this.rotatationCube6 = rotationSpeedy;
            this.rotatationCube7 = rotationSpeedy;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map