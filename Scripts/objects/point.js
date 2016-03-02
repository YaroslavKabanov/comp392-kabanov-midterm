/// <reference path="../../typings/tsd.d.ts"/>
// ********************************************
// * Source file : point.ts                    *
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
    // POINT CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Point = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Point(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        return Point;
    })();
    objects.Point = Point;
})(objects || (objects = {}));
//# sourceMappingURL=point.js.map