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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var index_1 = require('../index');
var MIN_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MinValidator; }),
    multi: true
};
var MinValidator = (function () {
    function MinValidator() {
    }
    MinValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.min(this.min);
    };
    MinValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'min') {
                this.validator = index_1.CustomValidators.min(changes[key].currentValue);
            }
        }
    };
    MinValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MinValidator.prototype, "min", void 0);
    MinValidator = __decorate([
        core_1.Directive({
            selector: '[min][formControlName],[min][formControl],[min][ngModel]',
            providers: [MIN_VALIDATOR]
        }), 
        __metadata('design:paramtypes', [])
    ], MinValidator);
    return MinValidator;
}());
exports.MinValidator = MinValidator;
//# sourceMappingURL=min.js.map