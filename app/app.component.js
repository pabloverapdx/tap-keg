System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var kegListComponent, AppComponent, Keg;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // all the info in here was done first. after cloning project template // Start with parent and then child. They are not in order in here thought //
            // **************************************************************************************************************** //
            // CHILD COMPONENT ///
            // Made this component after parent //
            kegListComponent = (function () {
                function kegListComponent() {
                }
                kegListComponent.prototype.kegClicked = function (clickedKeg) {
                    console.log(clickedKeg);
                };
                kegListComponent = __decorate([
                    // this line was here from the very beggining //
                    core_1.Component({
                        selector: 'keg-list',
                        inputs: ['kegList'],
                        template: "\n  <h3 *ngFor=\"#currentKeg of kegList\"(click)=\"kegClicked(currentKeg)\"> {{currentKeg.beerName}}</h3>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], kegListComponent);
                return kegListComponent;
            }());
            exports_1("kegListComponent", kegListComponent);
            // *************************************************************************************************************** //
            // PARENT COMPONENT ///
            // Made this component first //
            AppComponent = (function () {
                function AppComponent() {
                    this.kegs = [
                        new Keg("Ninkasi", 0),
                        new Keg("Deschutes", 1),
                        new Keg("Double Mountain", 2),
                        new Keg("Crux", 3),
                    ];
                }
                AppComponent.prototype.kegWasSelected = function (clickedKeg) {
                    console.log(clickedKeg);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        //   template: `
                        // <div class="container">
                        //   <h1> Tap a Keg </h1>
                        //   <h3 *ngFor="#keg of kegs"(click)="kegWasSelected(keg)"> {{keg.beerName}}</h3>
                        //   `
                        // this four lines above might have been optional.
                        directives: [kegListComponent],
                        template: "\n   <div class=\"container\">\n   <h1> Tap a Keg </h1>\n   <keg-list [kegList]=\"kegs\"></keg-list>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            Keg = (function () {
                function Keg(beerName, id) {
                    this.beerName = beerName;
                    this.id = id;
                    this.done = false;
                }
                return Keg;
            }());
            exports_1("Keg", Keg);
        }
    }
});
//# sourceMappingURL=app.component.js.map