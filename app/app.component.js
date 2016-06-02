System.register(['angular2/core', './keg-list.component', './keg.model'], function(exports_1, context_1) {
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
    var core_1, keg_list_component_1, keg_model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_list_component_1_1) {
                keg_list_component_1 = keg_list_component_1_1;
            },
            function (keg_model_1_1) {
                keg_model_1 = keg_model_1_1;
            }],
        execute: function() {
            // this line was here from the very beggining //
            // EventEmitter lets components share information - talk to each other //
            // all the info in here was done first. after cloning project template // Start with parent and then child. They are not in order in here thought //
            // To summarize, to add a child component to a parent component, we need to follow these steps:
            // Create the child component's @Component decorator and Controller class.
            // If the component needs to receive data from a parent component, define an input for it and an accompanying property to store the input in
            // *********************************************************************************
            // Grandchild //
            // **************************************************************************************************************** //
            // CHILD COMPONENT ///
            // Made this component after parent //
            // *************************************************************************************************************** //
            // PARENT COMPONENT ///
            // Made this component first //
            AppComponent = (function () {
                function AppComponent() {
                    this.kegs = [
                        new keg_model_1.Keg("Ninkasi", 0),
                        new keg_model_1.Keg("Deschutes", 1),
                        new keg_model_1.Keg("Double Mountain", 2),
                        new keg_model_1.Keg("Crux", 3),
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
                        directives: [keg_list_component_1.kegListComponent],
                        template: "\n   <div class=\"container\">\n   <h1> Tap a Keg </h1>\n   <keg-list [kegList]=\"kegs\" (onKegSelect)=\"kegWasSelected($event)\">\n   </keg-list>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map