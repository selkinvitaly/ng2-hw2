webpackJsonp([0],{

/***/ 124:
/* unknown exports provided */
/* all exports used */
/*!**********************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/stylus-loader?resolve url!./client/js/app/app-container/app-container.component.styl ***!
  \**********************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 125)();
// imports


// module
exports.push([module.i, "h1 {\n  color: #ffa500;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n", ""]);

// exports


/***/ },

/***/ 125:
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 126:
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ./client/js/app/app-container/app-container.component.html ***!
  \******************************************************************/
/***/ function(module, exports) {

module.exports = "<widget></widget>\n";

/***/ },

/***/ 127:
/* unknown exports provided */
/* all exports used */
/*!***************************************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place-item/place-item.component.html ***!
  \***************************************************************************************/
/***/ function(module, exports) {

module.exports = "<div class=\"activity-row\" (click)=\"changePlaceHandler(placeItem.id)\" [class.activity-row_selected]=\"isSelected\">\n  <div class=\"activity-desc\">\n    <h5>{{placeItem.placeTitle}}</h5>\n    <h6>T: {{placeItem.temperature}}</h6>\n  </div>\n  <div class=\"activity-img\">\n    <ul>\n      <li style=\"display: inline-block; width: 50px; height: 50px;\">\n        <img style=\"height: 100%;\" [src]=\"placeItem.firstImage\" alt=\"\" />\n      </li>\n      <li style=\"display: inline-block; width: 50px; height: 50px;\">\n        <img style=\"height: 100%;\" [src]=\"placeItem.secondImage\" alt=\"\" />\n      </li>\n    </ul>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n";

/***/ },

/***/ 128:
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place.component.html ***!
  \***********************************************************************/
/***/ function(module, exports) {

module.exports = "<div class=\"element-bg-img\"><img [src]=\"headerImage\" alt=\"\" class=\"img-responsive\"> </div>\n<div class=\"element-left-bottom\">\n  <place-filter\n    [currentFilterId]=\"currentFilterId\"\n    (changeType)=changeTypeHandler($event.selected)\n  ></place-filter>\n  <div class=\"village\">\n    <h3>Righteous indignation & like</h3>\n    <span class=\"line\"> </span>\n    <div class=\"activity_box\">\n      <div class=\"scrollbar\" id=\"style-2\">\n        <place-item\n          *ngFor=\"let placeItem of places | filterType: currentFilterId; let i = index; trackBy: placeItem?.id\"\n          (changePlace)=\"changePlaceHandler($event.selected)\"\n          [placeItem]=\"placeItem\"\n          [isSelected]=\"placeItem.id === selected\"\n        ></place-item>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },

/***/ 129:
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************!*\
  !*** ./client/js/app/app-container/widget/stats/stats.component.html ***!
  \***********************************************************************/
/***/ function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{currentPlace.statsTitle}}</h4>\n    <span class=\"w-line\"> </span>\n    <img style=\"width: 90px; height: 90px\" [src]=\"currentPlace.secondImage\" alt=\"\" class=\"img-responsive\">\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\">\n        <h3>{{currentPlace.followers}}</h3>\n        <p>Followers</p>\n      </li>\n      <li>\n        <h3>{{currentPlace.following}}</h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },

/***/ 130:
/* unknown exports provided */
/* all exports used */
/*!***************************************************************************!*\
  !*** ./client/js/app/app-container/widget/weather/weather.component.html ***!
  \***************************************************************************/
/***/ function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>{{currentPlace.weatherTitle}}</h5>\n  <span class=\"w-line\"> </span>\n  <span class=\"cloud\"> </span>\n  <h5>{{currentPlace.temperature}}<sup class=\"degree\">°</sup></h5>\n  <h6>Water {{currentPlace.humidity}}<sup class=\"degree\">°</sup></h6>\n</div>\n";

/***/ },

/***/ 131:
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ./client/js/app/app-container/widget/widget.component.html ***!
  \******************************************************************/
/***/ function(module, exports) {

module.exports = "<h1>Hot Weather Widget</h1>\n\n<div class=\"element\">\n  <div class=\"element-left\">\n    <place-component\n      (changePlace)=\"changePlace($event.selected)\"\n      [places]=\"places\"\n      [selected]=\"selectedId\"\n    ></place-component>\n  </div>\n  <div class=\"element-right\">\n    <weather-component [currentPlace]=\"currentPlace\"></weather-component>\n    <stats-component [currentPlace]=\"currentPlace\"></stats-component>\n  </div>\n</div>\n\n<p class=\"clear\"></p>\n\n<div class=\"copy-right\">\n  <p>© 2015 Hot Weather Widget. All rights reserved | Design by  <a href=\"http://w3layouts.com/\" target=\"_blank\">W3layouts </a></p>\n</div>\n";

/***/ },

/***/ 142:
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ./client/js/app/app-container/app-container.component.styl ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/postcss-loader!./../../../../~/stylus-loader?resolve url!./app-container.component.styl */ 124);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 143:
/* unknown exports provided */
/* all exports used */
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./client/js/main */63);


/***/ },

/***/ 145:
/* exports provided: places */
/* exports used: places */
/*!********************************************************!*\
  !*** ./client/js/app/app-container/widget/fixtures.ts ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return places; });
var places = [{
        id: "0",
        firstImage: "assets/img/widget/1.jpg",
        secondImage: "assets/img/widget/2.jpg",
        types: ["all", "fishing"],
        temperature: 14,
        humidity: 20,
        followers: 2850,
        following: 675,
        weatherTitle: "weather title 1",
        statsTitle: "stats title 1",
        placeTitle: "place title 1"
    }, {
        id: "1",
        firstImage: "assets/img/widget/3.jpg",
        secondImage: "assets/img/widget/4.jpg",
        types: ["all", "hotel"],
        temperature: 15,
        humidity: 21,
        followers: 3850,
        following: 775,
        weatherTitle: "weather title 2",
        statsTitle: "stats title 2",
        placeTitle: "place title 2"
    }];


/***/ },

/***/ 146:
/* unknown exports provided */
/* exports used: WidgetPlaceItem */
/*!********************************************************!*\
  !*** ./client/js/shared/interfaces/WidgetPlaceItem.ts ***!
  \********************************************************/
/***/ function(module, exports) {



/***/ },

/***/ 147:
/* exports provided: PlaceFilterComponent */
/* exports used: PlaceFilterComponent */
/*!*****************************************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place-filter/place-filter.component.ts ***!
  \*****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlaceFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaceFilterComponent = (function () {
    function PlaceFilterComponent() {
        this.changeType = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.filterTypes = [{
                id: "all",
                name: "All"
            }, {
                id: "hotel",
                name: "Hotel"
            }, {
                id: "fishing",
                name: "Fishing"
            }, {
                id: "tour",
                name: "Tour"
            }];
    }
    PlaceFilterComponent.prototype.changeTypeHandler = function (e, filterTypeId) {
        e.preventDefault();
        this.changeType.emit({ selected: filterTypeId });
    };
    PlaceFilterComponent.prototype.checkSelected = function (filterId) {
        return filterId === this.currentFilterId;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PlaceFilterComponent.prototype, "currentFilterId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], PlaceFilterComponent.prototype, "changeType", void 0);
    PlaceFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "place-filter",
            template: __webpack_require__(/*! ./place-filter.component.html */ 148),
            styles: [__webpack_require__(/*! ./place-filter.component.styl */ 150)]
        }), 
        __metadata('design:paramtypes', [])
    ], PlaceFilterComponent);
    return PlaceFilterComponent;
    var _a;
}());


/***/ },

/***/ 148:
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place-filter/place-filter.component.html ***!
  \*******************************************************************************************/
/***/ function(module, exports) {

module.exports = "<div class=\"ele-strip\">\n  <ul>\n    <li *ngFor=\"let filterTypeItem of filterTypes; trackBy: filterType?.id\"\n        (click)=\"changeTypeHandler($event, filterTypeItem.id)\"\n        [ngClass]=\"{'filter__item_selected': checkSelected(filterTypeItem.id)}\">\n      <a href=\"#\">{{filterTypeItem.name}}</a>\n    </li>\n  </ul>\n</div>\n";

/***/ },

/***/ 149:
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/stylus-loader?resolve url!./client/js/app/app-container/widget/place/place-filter/place-filter.component.styl ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./../../../../../../../~/css-loader/lib/css-base.js */ 125)();
// imports


// module
exports.push([module.i, ".filter__item_selected a {\n  color: #df6e37;\n  text-decoration: underline;\n  cursor: default;\n}\n", ""]);

// exports


/***/ },

/***/ 150:
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place-filter/place-filter.component.styl ***!
  \*******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !./../../../../../../../~/css-loader!./../../../../../../../~/postcss-loader!./../../../../../../../~/stylus-loader?resolve url!./place-filter.component.styl */ 149);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 151:
/* exports provided: FilterTypePipe */
/* exports used: FilterTypePipe */
/*!**********************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/filter-type.pipe.ts ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FilterTypePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterTypePipe = (function () {
    function FilterTypePipe() {
    }
    FilterTypePipe.prototype.transform = function (places, currentFilterId) {
        return places
            .filter(function (placeItem) { return !!~placeItem.types.indexOf(currentFilterId); });
    };
    FilterTypePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "filterType"
        }), 
        __metadata('design:paramtypes', [])
    ], FilterTypePipe);
    return FilterTypePipe;
}());


/***/ },

/***/ 63:
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./client/js/main.ts ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(/*! ./app/app.module */ 73);
"use strict";


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);


/***/ },

/***/ 67:
/* exports provided: AppContainerComponent */
/* exports used: AppContainerComponent */
/*!****************************************************************!*\
  !*** ./client/js/app/app-container/app-container.component.ts ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppContainerComponent = (function () {
    function AppContainerComponent() {
    }
    AppContainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-container",
            template: __webpack_require__(/*! ./app-container.component.html */ 126),
            styles: [__webpack_require__(/*! ./app-container.component.styl */ 142)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppContainerComponent);
    return AppContainerComponent;
}());


/***/ },

/***/ 68:
/* exports provided: PlaceItemComponent */
/* exports used: PlaceItemComponent */
/*!*************************************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place-item/place-item.component.ts ***!
  \*************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_WidgetPlaceItem__ = __webpack_require__(/*! ../../../../../shared/interfaces/WidgetPlaceItem */ 146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_WidgetPlaceItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_interfaces_WidgetPlaceItem__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlaceItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceItemComponent = (function () {
    function PlaceItemComponent() {
        this.changePlace = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PlaceItemComponent.prototype.changePlaceHandler = function (placeItemId) {
        if (this.isSelected) {
            return;
        }
        this.changePlace.emit({ selected: placeItemId });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], PlaceItemComponent.prototype, "changePlace", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_WidgetPlaceItem__["WidgetPlaceItem"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_WidgetPlaceItem__["WidgetPlaceItem"]) === 'function' && _b) || Object)
    ], PlaceItemComponent.prototype, "placeItem", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], PlaceItemComponent.prototype, "isSelected", void 0);
    PlaceItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "place-item",
            template: __webpack_require__(/*! ./place-item.component.html */ 127)
        }), 
        __metadata('design:paramtypes', [])
    ], PlaceItemComponent);
    return PlaceItemComponent;
    var _a, _b;
}());


/***/ },

/***/ 69:
/* exports provided: PlaceComponent */
/* exports used: PlaceComponent */
/*!*********************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place.component.ts ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaceComponent = (function () {
    function PlaceComponent() {
        this.currentFilterId = "all";
        this.changePlace = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(PlaceComponent.prototype, "headerImage", {
        get: function () {
            var _this = this;
            return this.places
                .filter(function (placeItem) { return placeItem.id === _this.selected; })[0].firstImage;
        },
        enumerable: true,
        configurable: true
    });
    PlaceComponent.prototype.changeTypeHandler = function (currentFilterId) {
        this.currentFilterId = currentFilterId;
    };
    PlaceComponent.prototype.changePlaceHandler = function (placeItemId) {
        this.changePlace.emit({ selected: placeItemId });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PlaceComponent.prototype, "places", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], PlaceComponent.prototype, "changePlace", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PlaceComponent.prototype, "selected", void 0);
    PlaceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "place-component",
            template: __webpack_require__(/*! ./place.component.html */ 128)
        }), 
        __metadata('design:paramtypes', [])
    ], PlaceComponent);
    return PlaceComponent;
    var _a;
}());


/***/ },

/***/ 70:
/* exports provided: StatsComponent */
/* exports used: StatsComponent */
/*!*********************************************************************!*\
  !*** ./client/js/app/app-container/widget/stats/stats.component.ts ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = (function () {
    function StatsComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], StatsComponent.prototype, "currentPlace", void 0);
    StatsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "stats-component",
            template: __webpack_require__(/*! ./stats.component.html */ 129)
        }), 
        __metadata('design:paramtypes', [])
    ], StatsComponent);
    return StatsComponent;
}());


/***/ },

/***/ 71:
/* exports provided: WeatherComponent */
/* exports used: WeatherComponent */
/*!*************************************************************************!*\
  !*** ./client/js/app/app-container/widget/weather/weather.component.ts ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WeatherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherComponent = (function () {
    function WeatherComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], WeatherComponent.prototype, "currentPlace", void 0);
    WeatherComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "weather-component",
            template: __webpack_require__(/*! ./weather.component.html */ 130)
        }), 
        __metadata('design:paramtypes', [])
    ], WeatherComponent);
    return WeatherComponent;
}());


/***/ },

/***/ 72:
/* exports provided: WidgetComponent */
/* exports used: WidgetComponent */
/*!****************************************************************!*\
  !*** ./client/js/app/app-container/widget/widget.component.ts ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fixtures__ = __webpack_require__(/*! ./fixtures */ 145);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetComponent = (function () {
    function WidgetComponent() {
        this.places = __WEBPACK_IMPORTED_MODULE_1__fixtures__["a" /* places */];
        this.selectedId = __WEBPACK_IMPORTED_MODULE_1__fixtures__["a" /* places */][0].id;
    }
    WidgetComponent.prototype.changePlace = function (placeItemId) {
        this.selectedId = placeItemId;
    };
    Object.defineProperty(WidgetComponent.prototype, "currentPlace", {
        get: function () {
            var _this = this;
            return this.places
                .filter(function (placeItem) { return placeItem.id === _this.selectedId; })[0];
        },
        enumerable: true,
        configurable: true
    });
    WidgetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "widget",
            template: __webpack_require__(/*! ./widget.component.html */ 131)
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetComponent);
    return WidgetComponent;
}());


/***/ },

/***/ 73:
/* exports provided: AppModule */
/* exports used: AppModule */
/*!*************************************!*\
  !*** ./client/js/app/app.module.ts ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(/*! @angular/platform-browser */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(/*! @angular/core */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_container_app_container_component__ = __webpack_require__(/*! ./app-container/app-container.component */ 67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_container_widget_widget_component__ = __webpack_require__(/*! ./app-container/widget/widget.component */ 72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_container_widget_place_place_component__ = __webpack_require__(/*! ./app-container/widget/place/place.component */ 69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_container_widget_weather_weather_component__ = __webpack_require__(/*! ./app-container/widget/weather/weather.component */ 71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_container_widget_stats_stats_component__ = __webpack_require__(/*! ./app-container/widget/stats/stats.component */ 70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_container_widget_place_place_item_place_item_component__ = __webpack_require__(/*! ./app-container/widget/place/place-item/place-item.component */ 68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_container_widget_place_place_filter_place_filter_component__ = __webpack_require__(/*! ./app-container/widget/place/place-filter/place-filter.component */ 147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_container_widget_place_filter_type_pipe__ = __webpack_require__(/*! ./app-container/widget/place/filter-type.pipe */ 151);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_container_app_container_component__["a" /* AppContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_container_widget_widget_component__["a" /* WidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_4__app_container_widget_place_place_component__["a" /* PlaceComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_container_widget_weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_container_widget_stats_stats_component__["a" /* StatsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_container_widget_place_place_item_place_item_component__["a" /* PlaceItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_container_widget_place_place_filter_place_filter_component__["a" /* PlaceFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_container_widget_place_filter_type_pipe__["a" /* FilterTypePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_container_app_container_component__["a" /* AppContainerComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());


/***/ }

},[143]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvYXBwLWNvbnRhaW5lci5jb21wb25lbnQuc3R5bCIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci9hcHAtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UtaXRlbS9wbGFjZS1pdGVtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9zdGF0cy9zdGF0cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3dpZGdldC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvYXBwLWNvbnRhaW5lci5jb21wb25lbnQuc3R5bD8yMWRhIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvZml4dHVyZXMudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9wbGFjZS9wbGFjZS1maWx0ZXIvcGxhY2UtZmlsdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL3BsYWNlLWZpbHRlci9wbGFjZS1maWx0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9wbGFjZS9wbGFjZS1maWx0ZXIvcGxhY2UtZmlsdGVyLmNvbXBvbmVudC5zdHlsIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UtZmlsdGVyL3BsYWNlLWZpbHRlci5jb21wb25lbnQuc3R5bD80Y2NhIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvZmlsdGVyLXR5cGUucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvYXBwLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9wbGFjZS9wbGFjZS1pdGVtL3BsYWNlLWl0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvc3RhdHMvc3RhdHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3dpZGdldC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2FwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7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LENBQUMscUdBQXFCLENBQUM7U0FDbkMsQ0FBQzs7aUJBQUE7SUFDc0IsZ0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaDEge1xcbiAgY29sb3I6ICNmZmE1MDA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Bvc3Rjc3MtbG9hZGVyIS4vfi9zdHlsdXMtbG9hZGVyP3Jlc29sdmUgdXJsIS4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL2FwcC1jb250YWluZXIuY29tcG9uZW50LnN0eWxcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx3aWRnZXQ+PC93aWRnZXQ+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvYXBwLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhY3Rpdml0eS1yb3dcXFwiIChjbGljayk9XFxcImNoYW5nZVBsYWNlSGFuZGxlcihwbGFjZUl0ZW0uaWQpXFxcIiBbY2xhc3MuYWN0aXZpdHktcm93X3NlbGVjdGVkXT1cXFwiaXNTZWxlY3RlZFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhY3Rpdml0eS1kZXNjXFxcIj5cXG4gICAgPGg1Pnt7cGxhY2VJdGVtLnBsYWNlVGl0bGV9fTwvaDU+XFxuICAgIDxoNj5UOiB7e3BsYWNlSXRlbS50ZW1wZXJhdHVyZX19PC9oNj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiYWN0aXZpdHktaW1nXFxcIj5cXG4gICAgPHVsPlxcbiAgICAgIDxsaSBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4O1xcXCI+XFxuICAgICAgICA8aW1nIHN0eWxlPVxcXCJoZWlnaHQ6IDEwMCU7XFxcIiBbc3JjXT1cXFwicGxhY2VJdGVtLmZpcnN0SW1hZ2VcXFwiIGFsdD1cXFwiXFxcIiAvPlxcbiAgICAgIDwvbGk+XFxuICAgICAgPGxpIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7XFxcIj5cXG4gICAgICAgIDxpbWcgc3R5bGU9XFxcImhlaWdodDogMTAwJTtcXFwiIFtzcmNdPVxcXCJwbGFjZUl0ZW0uc2Vjb25kSW1hZ2VcXFwiIGFsdD1cXFwiXFxcIiAvPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNsZWFyXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UtaXRlbS9wbGFjZS1pdGVtLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImVsZW1lbnQtYmctaW1nXFxcIj48aW1nIFtzcmNdPVxcXCJoZWFkZXJJbWFnZVxcXCIgYWx0PVxcXCJcXFwiIGNsYXNzPVxcXCJpbWctcmVzcG9uc2l2ZVxcXCI+IDwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImVsZW1lbnQtbGVmdC1ib3R0b21cXFwiPlxcbiAgPHBsYWNlLWZpbHRlclxcbiAgICBbY3VycmVudEZpbHRlcklkXT1cXFwiY3VycmVudEZpbHRlcklkXFxcIlxcbiAgICAoY2hhbmdlVHlwZSk9Y2hhbmdlVHlwZUhhbmRsZXIoJGV2ZW50LnNlbGVjdGVkKVxcbiAgPjwvcGxhY2UtZmlsdGVyPlxcbiAgPGRpdiBjbGFzcz1cXFwidmlsbGFnZVxcXCI+XFxuICAgIDxoMz5SaWdodGVvdXMgaW5kaWduYXRpb24gJiBsaWtlPC9oMz5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImxpbmVcXFwiPiA8L3NwYW4+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFjdGl2aXR5X2JveFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2Nyb2xsYmFyXFxcIiBpZD1cXFwic3R5bGUtMlxcXCI+XFxuICAgICAgICA8cGxhY2UtaXRlbVxcbiAgICAgICAgICAqbmdGb3I9XFxcImxldCBwbGFjZUl0ZW0gb2YgcGxhY2VzIHwgZmlsdGVyVHlwZTogY3VycmVudEZpbHRlcklkOyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiBwbGFjZUl0ZW0/LmlkXFxcIlxcbiAgICAgICAgICAoY2hhbmdlUGxhY2UpPVxcXCJjaGFuZ2VQbGFjZUhhbmRsZXIoJGV2ZW50LnNlbGVjdGVkKVxcXCJcXG4gICAgICAgICAgW3BsYWNlSXRlbV09XFxcInBsYWNlSXRlbVxcXCJcXG4gICAgICAgICAgW2lzU2VsZWN0ZWRdPVxcXCJwbGFjZUl0ZW0uaWQgPT09IHNlbGVjdGVkXFxcIlxcbiAgICAgICAgPjwvcGxhY2UtaXRlbT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidGVkZHktYmVhclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0ZWRkeS10ZXh0XFxcIj5cXG4gICAgPGg0Pnt7Y3VycmVudFBsYWNlLnN0YXRzVGl0bGV9fTwvaDQ+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ3LWxpbmVcXFwiPiA8L3NwYW4+XFxuICAgIDxpbWcgc3R5bGU9XFxcIndpZHRoOiA5MHB4OyBoZWlnaHQ6IDkwcHhcXFwiIFtzcmNdPVxcXCJjdXJyZW50UGxhY2Uuc2Vjb25kSW1hZ2VcXFwiIGFsdD1cXFwiXFxcIiBjbGFzcz1cXFwiaW1nLXJlc3BvbnNpdmVcXFwiPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0ZWRkeS1mb2xsb3dcXFwiPlxcbiAgICA8dWw+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJmb2x3LWhcXFwiPlxcbiAgICAgICAgPGgzPnt7Y3VycmVudFBsYWNlLmZvbGxvd2Vyc319PC9oMz5cXG4gICAgICAgIDxwPkZvbGxvd2VyczwvcD5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaT5cXG4gICAgICAgIDxoMz57e2N1cnJlbnRQbGFjZS5mb2xsb3dpbmd9fTwvaDM+XFxuICAgICAgICA8cD5Gb2xsb3dpbmc8L3A+XFxuICAgICAgPC9saT5cXG4gICAgPC91bD5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9zdGF0cy9zdGF0cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ0ZW1wZXJhdHVyXFxcIj5cXG4gIDxoNT57e2N1cnJlbnRQbGFjZS53ZWF0aGVyVGl0bGV9fTwvaDU+XFxuICA8c3BhbiBjbGFzcz1cXFwidy1saW5lXFxcIj4gPC9zcGFuPlxcbiAgPHNwYW4gY2xhc3M9XFxcImNsb3VkXFxcIj4gPC9zcGFuPlxcbiAgPGg1Pnt7Y3VycmVudFBsYWNlLnRlbXBlcmF0dXJlfX08c3VwIGNsYXNzPVxcXCJkZWdyZWVcXFwiPsKwPC9zdXA+PC9oNT5cXG4gIDxoNj5XYXRlciB7e2N1cnJlbnRQbGFjZS5odW1pZGl0eX19PHN1cCBjbGFzcz1cXFwiZGVncmVlXFxcIj7CsDwvc3VwPjwvaDY+XFxuPC9kaXY+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+SG90IFdlYXRoZXIgV2lkZ2V0PC9oMT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJlbGVtZW50XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImVsZW1lbnQtbGVmdFxcXCI+XFxuICAgIDxwbGFjZS1jb21wb25lbnRcXG4gICAgICAoY2hhbmdlUGxhY2UpPVxcXCJjaGFuZ2VQbGFjZSgkZXZlbnQuc2VsZWN0ZWQpXFxcIlxcbiAgICAgIFtwbGFjZXNdPVxcXCJwbGFjZXNcXFwiXFxuICAgICAgW3NlbGVjdGVkXT1cXFwic2VsZWN0ZWRJZFxcXCJcXG4gICAgPjwvcGxhY2UtY29tcG9uZW50PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJlbGVtZW50LXJpZ2h0XFxcIj5cXG4gICAgPHdlYXRoZXItY29tcG9uZW50IFtjdXJyZW50UGxhY2VdPVxcXCJjdXJyZW50UGxhY2VcXFwiPjwvd2VhdGhlci1jb21wb25lbnQ+XFxuICAgIDxzdGF0cy1jb21wb25lbnQgW2N1cnJlbnRQbGFjZV09XFxcImN1cnJlbnRQbGFjZVxcXCI+PC9zdGF0cy1jb21wb25lbnQ+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48cCBjbGFzcz1cXFwiY2xlYXJcXFwiPjwvcD5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjb3B5LXJpZ2h0XFxcIj5cXG4gIDxwPsKpIDIwMTUgSG90IFdlYXRoZXIgV2lkZ2V0LiBBbGwgcmlnaHRzIHJlc2VydmVkIHwgRGVzaWduIGJ5ICA8YSBocmVmPVxcXCJodHRwOi8vdzNsYXlvdXRzLmNvbS9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5XM2xheW91dHMgPC9hPjwvcD5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/cmVzb2x2ZSB1cmwhLi9hcHAtY29udGFpbmVyLmNvbXBvbmVudC5zdHlsXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci9hcHAtY29udGFpbmVyLmNvbXBvbmVudC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IHBsYWNlcyA9IFt7XG4gIGlkOiBcIjBcIixcbiAgZmlyc3RJbWFnZTogXCJhc3NldHMvaW1nL3dpZGdldC8xLmpwZ1wiLFxuICBzZWNvbmRJbWFnZTogXCJhc3NldHMvaW1nL3dpZGdldC8yLmpwZ1wiLFxuICB0eXBlczogW1wiYWxsXCIsIFwiZmlzaGluZ1wiXSxcbiAgdGVtcGVyYXR1cmU6IDE0LFxuICBodW1pZGl0eTogMjAsXG4gIGZvbGxvd2VyczogMjg1MCxcbiAgZm9sbG93aW5nOiA2NzUsXG4gIHdlYXRoZXJUaXRsZTogXCJ3ZWF0aGVyIHRpdGxlIDFcIixcbiAgc3RhdHNUaXRsZTogXCJzdGF0cyB0aXRsZSAxXCIsXG4gIHBsYWNlVGl0bGU6IFwicGxhY2UgdGl0bGUgMVwiXG59LCB7XG4gIGlkOiBcIjFcIixcbiAgZmlyc3RJbWFnZTogXCJhc3NldHMvaW1nL3dpZGdldC8zLmpwZ1wiLFxuICBzZWNvbmRJbWFnZTogXCJhc3NldHMvaW1nL3dpZGdldC80LmpwZ1wiLFxuICB0eXBlczogW1wiYWxsXCIsIFwiaG90ZWxcIl0sXG4gIHRlbXBlcmF0dXJlOiAxNSxcbiAgaHVtaWRpdHk6IDIxLFxuICBmb2xsb3dlcnM6IDM4NTAsXG4gIGZvbGxvd2luZzogNzc1LFxuICB3ZWF0aGVyVGl0bGU6IFwid2VhdGhlciB0aXRsZSAyXCIsXG4gIHN0YXRzVGl0bGU6IFwic3RhdHMgdGl0bGUgMlwiLFxuICBwbGFjZVRpdGxlOiBcInBsYWNlIHRpdGxlIDJcIlxufV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L2ZpeHR1cmVzLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRmlsdGVyUGxhY2VJdGVtIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL0ZpbHRlclBsYWNlSXRlbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZVR5cGVFdmVudCB7XG4gIHNlbGVjdGVkOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJwbGFjZS1maWx0ZXJcIixcbiAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3BsYWNlLWZpbHRlci5jb21wb25lbnQuaHRtbFwiKSxcbiAgc3R5bGVzOiBbIHJlcXVpcmUoXCIuL3BsYWNlLWZpbHRlci5jb21wb25lbnQuc3R5bFwiKSBdXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlRmlsdGVyQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBjdXJyZW50RmlsdGVySWQ6IHN0cmluZztcblxuICBAT3V0cHV0KClcbiAgY2hhbmdlVHlwZTogRXZlbnRFbWl0dGVyPENoYW5nZVR5cGVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZmlsdGVyVHlwZXM6IEFycmF5PEZpbHRlclBsYWNlSXRlbT4gPSBbe1xuICAgIGlkOiBcImFsbFwiLFxuICAgIG5hbWU6IFwiQWxsXCJcbiAgfSwge1xuICAgIGlkOiBcImhvdGVsXCIsXG4gICAgbmFtZTogXCJIb3RlbFwiXG4gIH0sIHtcbiAgICBpZDogXCJmaXNoaW5nXCIsXG4gICAgbmFtZTogXCJGaXNoaW5nXCJcbiAgfSwge1xuICAgIGlkOiBcInRvdXJcIixcbiAgICBuYW1lOiBcIlRvdXJcIlxuICB9XTtcblxuICBjaGFuZ2VUeXBlSGFuZGxlcihlOiBNb3VzZUV2ZW50LCBmaWx0ZXJUeXBlSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNoYW5nZVR5cGUuZW1pdCh7c2VsZWN0ZWQ6IGZpbHRlclR5cGVJZH0gYXMgQ2hhbmdlVHlwZUV2ZW50KTtcbiAgfVxuXG4gIGNoZWNrU2VsZWN0ZWQoZmlsdGVySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmaWx0ZXJJZCA9PT0gdGhpcy5jdXJyZW50RmlsdGVySWQ7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9wbGFjZS9wbGFjZS1maWx0ZXIvcGxhY2UtZmlsdGVyLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJlbGUtc3RyaXBcXFwiPlxcbiAgPHVsPlxcbiAgICA8bGkgKm5nRm9yPVxcXCJsZXQgZmlsdGVyVHlwZUl0ZW0gb2YgZmlsdGVyVHlwZXM7IHRyYWNrQnk6IGZpbHRlclR5cGU/LmlkXFxcIlxcbiAgICAgICAgKGNsaWNrKT1cXFwiY2hhbmdlVHlwZUhhbmRsZXIoJGV2ZW50LCBmaWx0ZXJUeXBlSXRlbS5pZClcXFwiXFxuICAgICAgICBbbmdDbGFzc109XFxcInsnZmlsdGVyX19pdGVtX3NlbGVjdGVkJzogY2hlY2tTZWxlY3RlZChmaWx0ZXJUeXBlSXRlbS5pZCl9XFxcIj5cXG4gICAgICA8YSBocmVmPVxcXCIjXFxcIj57e2ZpbHRlclR5cGVJdGVtLm5hbWV9fTwvYT5cXG4gICAgPC9saT5cXG4gIDwvdWw+XFxuPC9kaXY+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL3BsYWNlLWZpbHRlci9wbGFjZS1maWx0ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5maWx0ZXJfX2l0ZW1fc2VsZWN0ZWQgYSB7XFxuICBjb2xvcjogI2RmNmUzNztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vcG9zdGNzcy1sb2FkZXIhLi9+L3N0eWx1cy1sb2FkZXI/cmVzb2x2ZSB1cmwhLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL3BsYWNlLWZpbHRlci9wbGFjZS1maWx0ZXIuY29tcG9uZW50LnN0eWxcbi8vIG1vZHVsZSBpZCA9IDE0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz9yZXNvbHZlIHVybCEuL3BsYWNlLWZpbHRlci5jb21wb25lbnQuc3R5bFwiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL3BsYWNlLWZpbHRlci9wbGFjZS1maWx0ZXIuY29tcG9uZW50LnN0eWxcbi8vIG1vZHVsZSBpZCA9IDE1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFdpZGdldFBsYWNlSXRlbSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9XaWRnZXRQbGFjZUl0ZW1cIjtcblxuQFBpcGUoe1xuICBuYW1lOiBcImZpbHRlclR5cGVcIlxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJUeXBlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0ocGxhY2VzOiBBcnJheTxXaWRnZXRQbGFjZUl0ZW0+LCBjdXJyZW50RmlsdGVySWQ6IHN0cmluZyk6IEFycmF5PFdpZGdldFBsYWNlSXRlbT4ge1xuICAgIHJldHVybiBwbGFjZXNcbiAgICAgIC5maWx0ZXIoKHBsYWNlSXRlbTogV2lkZ2V0UGxhY2VJdGVtKSA9PiAhIX5wbGFjZUl0ZW0udHlwZXMuaW5kZXhPZihjdXJyZW50RmlsdGVySWQpKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9wbGFjZS9maWx0ZXItdHlwZS5waXBlLnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljXCI7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAvYXBwLm1vZHVsZVwiO1xuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvbWFpbi50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtY29udGFpbmVyXCIsXG4gIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9hcHAtY29udGFpbmVyLmNvbXBvbmVudC5odG1sXCIpLFxuICBzdHlsZXM6IFsgcmVxdWlyZShcIi4vYXBwLWNvbnRhaW5lci5jb21wb25lbnQuc3R5bFwiKSBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbnRhaW5lckNvbXBvbmVudCB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL2FwcC1jb250YWluZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgV2lkZ2V0UGxhY2VJdGVtIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL1dpZGdldFBsYWNlSXRlbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZVBsYWNlRXZlbnQge1xuICBzZWxlY3RlZDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicGxhY2UtaXRlbVwiLFxuICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcGxhY2UtaXRlbS5jb21wb25lbnQuaHRtbFwiKVxufSlcbmV4cG9ydCBjbGFzcyBQbGFjZUl0ZW1Db21wb25lbnQge1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VQbGFjZTogRXZlbnRFbWl0dGVyPENoYW5nZVBsYWNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIHByaXZhdGUgcGxhY2VJdGVtOiBXaWRnZXRQbGFjZUl0ZW07XG5cbiAgQElucHV0KClcbiAgcHJpdmF0ZSBpc1NlbGVjdGVkOiBib29sZWFuO1xuXG4gIGNoYW5nZVBsYWNlSGFuZGxlcihwbGFjZUl0ZW1JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlUGxhY2UuZW1pdCh7IHNlbGVjdGVkOiBwbGFjZUl0ZW1JZCB9IGFzIENoYW5nZVBsYWNlRXZlbnQpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UtaXRlbS9wbGFjZS1pdGVtLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFdpZGdldFBsYWNlSXRlbSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9XaWRnZXRQbGFjZUl0ZW1cIjtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQbGFjZUV2ZW50IHtcbiAgc2VsZWN0ZWQ6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBsYWNlLWNvbXBvbmVudFwiLFxuICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcGxhY2UuY29tcG9uZW50Lmh0bWxcIilcbn0pXG5leHBvcnQgY2xhc3MgUGxhY2VDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHBsYWNlczogQXJyYXk8V2lkZ2V0UGxhY2VJdGVtPjtcblxuICBjdXJyZW50RmlsdGVySWQgPSBcImFsbFwiO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VQbGFjZTogRXZlbnRFbWl0dGVyPENoYW5nZVBsYWNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIHNlbGVjdGVkOiBzdHJpbmc7XG5cbiAgZ2V0IGhlYWRlckltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGxhY2VzXG4gICAgICAuZmlsdGVyKChwbGFjZUl0ZW06IFdpZGdldFBsYWNlSXRlbSkgPT4gcGxhY2VJdGVtLmlkID09PSB0aGlzLnNlbGVjdGVkKVswXS5maXJzdEltYWdlO1xuICB9XG5cbiAgY2hhbmdlVHlwZUhhbmRsZXIoY3VycmVudEZpbHRlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXJJZCA9IGN1cnJlbnRGaWx0ZXJJZDtcbiAgfVxuXG4gIGNoYW5nZVBsYWNlSGFuZGxlcihwbGFjZUl0ZW1JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VQbGFjZS5lbWl0KHsgc2VsZWN0ZWQ6IHBsYWNlSXRlbUlkIH0gYXMgQ2hhbmdlUGxhY2VFdmVudCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzdGF0cy1jb21wb25lbnRcIixcbiAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3N0YXRzLmNvbXBvbmVudC5odG1sXCIpXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRzQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBwcml2YXRlIGN1cnJlbnRQbGFjZTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9zdGF0cy9zdGF0cy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIndlYXRoZXItY29tcG9uZW50XCIsXG4gIHRlbXBsYXRlOiByZXF1aXJlKFwiLi93ZWF0aGVyLmNvbXBvbmVudC5odG1sXCIpXG59KVxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXJyZW50UGxhY2U7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBXaWRnZXRQbGFjZUl0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvV2lkZ2V0UGxhY2VJdGVtXCI7XG5pbXBvcnQgeyBwbGFjZXMgYXMgZml4dHVyZXMgfSBmcm9tIFwiLi9maXh0dXJlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwid2lkZ2V0XCIsXG4gIHRlbXBsYXRlOiByZXF1aXJlKFwiLi93aWRnZXQuY29tcG9uZW50Lmh0bWxcIilcbn0pXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29tcG9uZW50IHtcblxuICBwbGFjZXM6IFdpZGdldFBsYWNlSXRlbVtdID0gZml4dHVyZXM7XG4gIHNlbGVjdGVkSWQ6IHN0cmluZyA9IGZpeHR1cmVzWzBdLmlkO1xuXG4gIGNoYW5nZVBsYWNlKHBsYWNlSXRlbUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSWQgPSBwbGFjZUl0ZW1JZDtcbiAgfVxuXG4gIGdldCBjdXJyZW50UGxhY2UoKTogV2lkZ2V0UGxhY2VJdGVtIHtcbiAgICByZXR1cm4gdGhpcy5wbGFjZXNcbiAgICAgIC5maWx0ZXIoKHBsYWNlSXRlbTogV2lkZ2V0UGxhY2VJdGVtKSA9PiBwbGFjZUl0ZW0uaWQgPT09IHRoaXMuc2VsZWN0ZWRJZClbMF07XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC93aWRnZXQuY29tcG9uZW50LnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBBcHBDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAtY29udGFpbmVyL2FwcC1jb250YWluZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBXaWRnZXRDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAtY29udGFpbmVyL3dpZGdldC93aWRnZXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQbGFjZUNvbXBvbmVudCB9IGZyb20gXCIuL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL3BsYWNlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgV2VhdGhlckNvbXBvbmVudCB9IGZyb20gXCIuL2FwcC1jb250YWluZXIvd2lkZ2V0L3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN0YXRzQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLWNvbnRhaW5lci93aWRnZXQvc3RhdHMvc3RhdHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQbGFjZUl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9hcHAtY29udGFpbmVyL3dpZGdldC9wbGFjZS9wbGFjZS1pdGVtL3BsYWNlLWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQbGFjZUZpbHRlckNvbXBvbmVudCB9IGZyb20gXCIuL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL3BsYWNlLWZpbHRlci9wbGFjZS1maWx0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUGlwZSB9IGZyb20gXCIuL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL2ZpbHRlci10eXBlLnBpcGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFdpZGdldENvbXBvbmVudCxcbiAgICBQbGFjZUNvbXBvbmVudCxcbiAgICBXZWF0aGVyQ29tcG9uZW50LFxuICAgIFN0YXRzQ29tcG9uZW50LFxuICAgIFBsYWNlSXRlbUNvbXBvbmVudCxcbiAgICBQbGFjZUZpbHRlckNvbXBvbmVudCxcbiAgICBGaWx0ZXJUeXBlUGlwZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBib290c3RyYXA6IFtBcHBDb250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FwcC9hcHAubW9kdWxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==