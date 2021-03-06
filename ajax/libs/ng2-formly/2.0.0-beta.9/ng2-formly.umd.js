(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("rxjs/Subject"), require("rxjs/add/operator/debounceTime"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms", "rxjs/Subject", "rxjs/add/operator/debounceTime"], factory);
	else if(typeof exports === 'object')
		exports["ng2-formly"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("rxjs/Subject"), require("rxjs/add/operator/debounceTime"));
	else
		root["ng2-formly"] = factory(root["ng"]["core"], root["ng"]["common"], root["ng"]["forms"], root["Rx"]["Subject"], root["Rx"]["Observable"]["prototype"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(16));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(4);
	var formly_form_1 = __webpack_require__(5);
	exports.FormlyForm = formly_form_1.FormlyForm;
	var formly_field_1 = __webpack_require__(7);
	exports.FormlyField = formly_field_1.FormlyField;
	var formly_attributes_1 = __webpack_require__(13);
	var formly_config_1 = __webpack_require__(6);
	exports.FormlyConfig = formly_config_1.FormlyConfig;
	var formly_messages_1 = __webpack_require__(15);
	exports.FormlyMessage = formly_messages_1.FormlyMessage;
	exports.FormlyMessages = formly_messages_1.FormlyMessages;
	var formly_event_emitter_1 = __webpack_require__(8);
	exports.FormlyPubSub = formly_event_emitter_1.FormlyPubSub;
	exports.FormlyEventEmitter = formly_event_emitter_1.FormlyEventEmitter;
	var formly_field_delegates_1 = __webpack_require__(10);
	exports.FormlyFieldVisibilityDelegate = formly_field_delegates_1.FormlyFieldVisibilityDelegate;
	var FORMLY_DIRECTIVES = [formly_form_1.FormlyForm, formly_field_1.FormlyField, formly_messages_1.FormlyMessage, formly_attributes_1.FormlyAttributes];
	var FormlyModule = (function () {
	    function FormlyModule() {
	    }
	    FormlyModule.forRoot = function (config) {
	        if (config === void 0) { config = {}; }
	        return {
	            ngModule: FormlyModule,
	            providers: [
	                formly_config_1.FormlyConfig,
	                formly_event_emitter_1.FormlyPubSub,
	                formly_messages_1.FormlyMessages,
	                { provide: formly_config_1.FORMLY_CONFIG_TOKEN, useValue: config, multi: true },
	                { provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config, multi: true },
	            ],
	        };
	    };
	    FormlyModule = __decorate([
	        core_1.NgModule({
	            declarations: FORMLY_DIRECTIVES,
	            exports: FORMLY_DIRECTIVES,
	            imports: [
	                common_1.CommonModule,
	                forms_1.ReactiveFormsModule,
	            ],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FormlyModule);
	    return FormlyModule;
	}());
	exports.FormlyModule = FormlyModule;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(4);
	var formly_config_1 = __webpack_require__(6);
	var FormlyForm = (function () {
	    function FormlyForm(formlyConfig) {
	        this.formlyConfig = formlyConfig;
	        this.model = {};
	        this.form = new forms_1.FormGroup({});
	        this.fields = [];
	        this.validationOpts = ['required', 'pattern', 'minLength', 'maxLength', 'min', 'max'];
	    }
	    FormlyForm.prototype.ngOnInit = function () {
	        if (!this.formModel) {
	            this.formModel = this.model;
	        }
	    };
	    FormlyForm.prototype.ngOnChanges = function (changes) {
	        if (changes['fields']) {
	            this.registerFormControls(this.fields, this.form, this.model);
	        }
	    };
	    FormlyForm.prototype.changeModel = function (event) {
	        this.assignModelValue(this.model, event.key, event.value);
	    };
	    FormlyForm.prototype.registerFormControls = function (fields, form, model) {
	        var _this = this;
	        fields.map(function (field) {
	            if (field.key && field.type) {
	                _this.initFieldTemplateOptions(field);
	                _this.initFieldValidation(field);
	                _this.initFieldAsyncValidation(field);
	                var path = field.key;
	                if (typeof path === 'string') {
	                    if (field.defaultValue) {
	                        _this.defaultPath = path;
	                    }
	                    path = path.split('.');
	                }
	                if (path.length > 1) {
	                    var nestedForm = (form.get(path[0]) ? form.get(path[0]) : new forms_1.FormGroup({}, field.validators ? field.validators.validation : undefined, field.asyncValidation));
	                    if (!form.get(field.key)) {
	                        form.addControl(path[0], nestedForm);
	                    }
	                    path.shift();
	                    _this.registerFormControls([Object.assign({}, field, { key: path })], nestedForm, model[path[0]] || isNaN(path[0]) ? {} : []);
	                }
	                else {
	                    _this.addFormControl(form, field, model[path[0]] || field.defaultValue || '');
	                    if (field.defaultValue && !model[path[0]]) {
	                        _this.assignModelValue(_this.model, _this.defaultPath, field.defaultValue);
	                        _this.defaultPath = undefined;
	                    }
	                }
	            }
	            if (field.fieldGroup) {
	                if (field.key) {
	                    var nestedForm = (form.get(field.key) ? form.get(field.key) : new forms_1.FormGroup({}, field.validators ? field.validators.validation : undefined, field.asyncValidation)), nestedModel = model[field.key] || {};
	                    if (!form.get(field.key)) {
	                        form.addControl(field.key, nestedForm);
	                    }
	                    _this.registerFormControls(field.fieldGroup, nestedForm, nestedModel);
	                }
	                else {
	                    _this.registerFormControls(field.fieldGroup, form, model);
	                }
	            }
	        });
	    };
	    FormlyForm.prototype.initFieldTemplateOptions = function (field) {
	        field.templateOptions = Object.assign({
	            label: '',
	            placeholder: '',
	            focus: false,
	        }, field.templateOptions);
	    };
	    FormlyForm.prototype.initFieldAsyncValidation = function (field) {
	        var _this = this;
	        var validators = [];
	        if (Array.isArray(field.asyncValidation)) {
	            field.asyncValidation.map(function (validate) {
	                if (typeof validate === 'string') {
	                    validators.push(_this.formlyConfig.getValidator(validate).validation);
	                }
	                else {
	                    validators.push(validate);
	                }
	            });
	        }
	        if (validators.length) {
	            field.asyncValidation = forms_1.Validators.composeAsync(validators);
	        }
	    };
	    FormlyForm.prototype.initFieldValidation = function (field) {
	        var _this = this;
	        var validators = [];
	        var _loop_1 = function(option) {
	            this_1.validationOpts.filter(function (opt) { return opt === option; }).map(function (opt) {
	                validators.push(_this.getValidation(opt, field.templateOptions[opt]));
	            });
	        };
	        var this_1 = this;
	        for (var option in field.templateOptions) {
	            _loop_1(option);
	        }
	        if (field.validators) {
	            var validatorFn = function (fn, validator) { return function (control) {
	                return fn(control) ? null : (_a = {}, _a[validator] = true, _a);
	                var _a;
	            }; };
	            for (var validator in field.validators) {
	                if (validator !== 'validation') {
	                    validators.push(validatorFn(field.validators[validator], validator));
	                }
	            }
	        }
	        if (field.validators && Array.isArray(field.validators.validation)) {
	            field.validators.validation.map(function (validate) {
	                if (typeof validate === 'string') {
	                    validators.push(_this.formlyConfig.getValidator(validate).validation);
	                }
	                else {
	                    validators.push(validate);
	                }
	            });
	        }
	        if (validators.length) {
	            if (field.validators && !Array.isArray(field.validators.validation)) {
	                field.validators.validation = forms_1.Validators.compose([field.validators.validation].concat(validators));
	            }
	            else {
	                field.validators = {
	                    validation: forms_1.Validators.compose(validators),
	                };
	            }
	        }
	    };
	    FormlyForm.prototype.addFormControl = function (form, field, model) {
	        var componentType = this.formlyConfig.getType(field.type).component;
	        if (componentType.createControl) {
	            form.addControl(field.key, componentType.createControl(model, field));
	        }
	        else {
	            form.addControl(field.key, new forms_1.FormControl({ value: model, disabled: field.templateOptions.disabled }, field.validators ? field.validators.validation : undefined, field.asyncValidation));
	        }
	        if (field.validation && field.validation.show) {
	            form.get(field.key).markAsTouched();
	        }
	    };
	    FormlyForm.prototype.assignModelValue = function (model, path, value) {
	        if (typeof path === 'string') {
	            path = path.split('.');
	        }
	        if (path.length > 1) {
	            var e = path.shift();
	            if (!model[e]) {
	                model[e] = isNaN(path[0]) ? {} : [];
	            }
	            this.assignModelValue(model[e], path, value);
	        }
	        else {
	            model[path[0]] = value;
	        }
	    };
	    FormlyForm.prototype.getValidation = function (opt, value) {
	        var _this = this;
	        switch (opt) {
	            case this.validationOpts[0]:
	                return forms_1.Validators[opt];
	            case this.validationOpts[1]:
	            case this.validationOpts[2]:
	            case this.validationOpts[3]:
	                return forms_1.Validators[opt](value);
	            case this.validationOpts[4]:
	            case this.validationOpts[5]:
	                return function (changes) {
	                    if (_this.checkMinMax(opt, changes.value, value)) {
	                        return null;
	                    }
	                    else {
	                        return (_a = {}, _a[opt] = true, _a);
	                    }
	                    var _a;
	                };
	        }
	    };
	    FormlyForm.prototype.checkMinMax = function (opt, changes, value) {
	        if (opt === this.validationOpts[4]) {
	            return parseInt(changes) > value;
	        }
	        else {
	            return parseInt(changes) < value;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FormlyForm.prototype, "formModel", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FormlyForm.prototype, "model", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', forms_1.FormGroup)
	    ], FormlyForm.prototype, "form", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], FormlyForm.prototype, "fields", void 0);
	    FormlyForm = __decorate([
	        core_1.Component({
	            selector: 'formly-form',
	            template: "\n    <formly-field *ngFor=\"let field of fields\"\n      [hide]=\"field.hideExpression\" [model]=\"field.key?model[field.key]:model\"\n      [form]=\"form\" [field]=\"field\" [formModel]=\"model\"\n      (modelChange)=\"changeModel($event)\"\n      [ngClass]=\"field.className\">\n    </formly-field>\n    <ng-content></ng-content>\n  ",
	        }), 
	        __metadata('design:paramtypes', [formly_config_1.FormlyConfig])
	    ], FormlyForm);
	    return FormlyForm;
	}());
	exports.FormlyForm = FormlyForm;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	exports.FORMLY_CONFIG_TOKEN = new core_1.OpaqueToken('FORMLY_CONFIG_TOKEN');
	var FormlyConfig = (function () {
	    function FormlyConfig(configs) {
	        var _this = this;
	        if (configs === void 0) { configs = []; }
	        this.types = {};
	        this.validators = {};
	        this.wrappers = {};
	        configs.map(function (config) {
	            if (config.types) {
	                config.types.map(function (type) { return _this.setType(type); });
	            }
	            if (config.validators) {
	                config.validators.map(function (validator) { return _this.setValidator(validator); });
	            }
	            if (config.wrappers) {
	                config.wrappers.map(function (wrapper) { return _this.setWrapper(wrapper); });
	            }
	        });
	    }
	    FormlyConfig.prototype.setType = function (options) {
	        var _this = this;
	        if (!this.types[options.name]) {
	            this.types[options.name] = {};
	        }
	        this.types[options.name].component = options.component;
	        this.types[options.name].name = options.name;
	        this.types[options.name].extends = options.extends;
	        if (options.wrappers) {
	            options.wrappers.map(function (wrapper) {
	                _this.setTypeWrapper(options.name, wrapper);
	            });
	        }
	    };
	    FormlyConfig.prototype.getType = function (name) {
	        if (!this.types[name]) {
	            throw new Error("[Formly Error] There is no type by the name of \"" + name + "\"");
	        }
	        if (!this.types[name].component && this.types[name].extends) {
	            this.types[name].component = this.getType(this.types[name].extends).component;
	        }
	        return this.types[name];
	    };
	    FormlyConfig.prototype.setWrapper = function (options) {
	        var _this = this;
	        this.wrappers[options.name] = options;
	        if (options.types) {
	            options.types.map(function (type) {
	                _this.setTypeWrapper(type, options.name);
	            });
	        }
	    };
	    FormlyConfig.prototype.getWrapper = function (name) {
	        if (!this.wrappers[name]) {
	            throw new Error("[Formly Error] There is no wrapper by the name of \"" + name + "\"");
	        }
	        return this.wrappers[name];
	    };
	    FormlyConfig.prototype.setTypeWrapper = function (type, name) {
	        if (!this.types[type]) {
	            this.types[type] = {};
	        }
	        if (!this.types[type].wrappers) {
	            this.types[type].wrappers = [];
	        }
	        this.types[type].wrappers.push(name);
	    };
	    FormlyConfig.prototype.setValidator = function (options) {
	        this.validators[options.name] = options;
	    };
	    FormlyConfig.prototype.getValidator = function (name) {
	        if (!this.validators[name]) {
	            throw new Error("[Formly Error] There is no validator by the name of \"" + name + "\"");
	        }
	        return this.validators[name];
	    };
	    FormlyConfig = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(exports.FORMLY_CONFIG_TOKEN)), 
	        __metadata('design:paramtypes', [Object])
	    ], FormlyConfig);
	    return FormlyConfig;
	}());
	exports.FormlyConfig = FormlyConfig;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(4);
	var formly_event_emitter_1 = __webpack_require__(8);
	var formly_config_1 = __webpack_require__(6);
	var formly_field_delegates_1 = __webpack_require__(10);
	__webpack_require__(12);
	var FormlyField = (function () {
	    function FormlyField(elementRef, formlyPubSub, renderer, formlyConfig, componentFactoryResolver) {
	        this.elementRef = elementRef;
	        this.formlyPubSub = formlyPubSub;
	        this.renderer = renderer;
	        this.formlyConfig = formlyConfig;
	        this.componentFactoryResolver = componentFactoryResolver;
	        this.modelChange = new core_1.EventEmitter();
	        this.visibilityDelegate = new formly_field_delegates_1.FormlyFieldVisibilityDelegate(this);
	        this.expressionDelegate = new formly_field_delegates_1.FormlyFieldExpressionDelegate(this);
	    }
	    Object.defineProperty(FormlyField.prototype, "hide", {
	        get: function () { return this._hide; },
	        set: function (value) {
	            this._hide = value;
	            this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', value ? 'none' : '');
	            if (this.field.fieldGroup) {
	                for (var i = 0; i < this.field.fieldGroup.length; i++) {
	                    this.psEmit(this.field.fieldGroup[i].key, 'hidden', this._hide);
	                }
	            }
	            else {
	                this.psEmit(this.field.key, 'hidden', this._hide);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FormlyField.prototype.ngDoCheck = function () {
	        this.visibilityDelegate.checkVisibilityChange();
	        this.expressionDelegate.checkExpressionChange();
	    };
	    FormlyField.prototype.ngOnInit = function () {
	        this.createChildFields();
	    };
	    Object.defineProperty(FormlyField.prototype, "fieldGroupForm", {
	        get: function () {
	            if (this.field.key && this.form.get(this.field.key)) {
	                return this.form.get(this.field.key);
	            }
	            return this.form;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FormlyField.prototype.changeModel = function (event) {
	        if (this.field.fieldGroup && this.field.key) {
	            event = new formly_event_emitter_1.FormlyValueChangeEvent(this.field.key + "." + event.key, event.value);
	        }
	        this.modelChange.emit(event);
	    };
	    FormlyField.prototype.createChildFields = function () {
	        var _this = this;
	        if (this.field && !this.field.template && !this.field.fieldGroup) {
	            var debounce = 0;
	            if (this.field.modelOptions && this.field.modelOptions.debounce && this.field.modelOptions.debounce.default) {
	                debounce = this.field.modelOptions.debounce.default;
	            }
	            var fieldComponentRef = this.createFieldComponent();
	            fieldComponentRef.instance.formControl.valueChanges
	                .debounceTime(debounce)
	                .subscribe(function (event) {
	                _this.changeModel(new formly_event_emitter_1.FormlyValueChangeEvent(_this.field.key, event));
	            });
	            var update = new formly_event_emitter_1.FormlyEventEmitter();
	            update.subscribe(function (option) {
	                _this.field.templateOptions[option.key] = option.value;
	            });
	            this.formlyPubSub.setEmitter(this.field.key, update);
	        }
	    };
	    FormlyField.prototype.createFieldComponent = function () {
	        var _this = this;
	        this.hide = this.field.hideExpression ? true : false;
	        var type = this.formlyConfig.getType(this.field.type);
	        var fieldComponent = this.fieldComponent;
	        if (type.wrappers) {
	            type.wrappers.map(function (wrapperName) {
	                var wrapperRef = _this.createComponent(fieldComponent, _this.formlyConfig.getWrapper(wrapperName).component);
	                fieldComponent = wrapperRef.instance.fieldComponent;
	            });
	        }
	        return this.createComponent(fieldComponent, type.component);
	    };
	    FormlyField.prototype.createComponent = function (fieldComponent, component) {
	        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
	        var ref = fieldComponent.createComponent(componentFactory);
	        Object.assign(ref.instance, {
	            model: this.model,
	            form: this.form,
	            field: this.field,
	            formModel: this.formModel,
	        });
	        return ref;
	    };
	    FormlyField.prototype.psEmit = function (fieldKey, eventKey, value) {
	        if (this.formlyPubSub && this.formlyPubSub.getEmitter(fieldKey) && this.formlyPubSub.getEmitter(fieldKey).emit) {
	            this.formlyPubSub.getEmitter(fieldKey).emit(new formly_event_emitter_1.FormlyValueChangeEvent(eventKey, value));
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FormlyField.prototype, "formModel", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FormlyField.prototype, "model", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', forms_1.FormGroup)
	    ], FormlyField.prototype, "form", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FormlyField.prototype, "field", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FormlyField.prototype, "hide", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], FormlyField.prototype, "modelChange", void 0);
	    __decorate([
	        core_1.ViewChild('fieldComponent', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], FormlyField.prototype, "fieldComponent", void 0);
	    FormlyField = __decorate([
	        core_1.Component({
	            selector: 'formly-field',
	            template: "\n    <template #fieldComponent></template>\n    <div *ngIf=\"field.template && !field.fieldGroup\" [innerHtml]=\"field.template\"></div>\n\n    <formly-field *ngFor=\"let f of field.fieldGroup\"\n      [hide]=\"f.hideExpression\"\n      [model]=\"model?(f.key ? model[f.key]: model):''\"\n      [form]=\"fieldGroupForm\" [field]=\"f\" [formModel]=\"formModel\"\n      (modelChange)=\"changeModel($event)\"\n      [ngClass]=\"f.className\">\n    </formly-field>\n  ",
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, formly_event_emitter_1.FormlyPubSub, core_1.Renderer, formly_config_1.FormlyConfig, core_1.ComponentFactoryResolver])
	    ], FormlyField);
	    return FormlyField;
	}());
	exports.FormlyField = FormlyField;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(9);
	var FormlyValueChangeEvent = (function () {
	    function FormlyValueChangeEvent(key, value) {
	        this.key = key;
	        this.value = value;
	    }
	    return FormlyValueChangeEvent;
	}());
	exports.FormlyValueChangeEvent = FormlyValueChangeEvent;
	var FormlyEventEmitter = (function (_super) {
	    __extends(FormlyEventEmitter, _super);
	    function FormlyEventEmitter() {
	        _super.apply(this, arguments);
	    }
	    FormlyEventEmitter.prototype.emit = function (value) {
	        _super.prototype.next.call(this, value);
	    };
	    return FormlyEventEmitter;
	}(Subject_1.Subject));
	exports.FormlyEventEmitter = FormlyEventEmitter;
	var FormlyPubSub = (function () {
	    function FormlyPubSub() {
	        this.emitters = {};
	    }
	    FormlyPubSub.prototype.setEmitter = function (key, emitter) {
	        this.emitters[key] = emitter;
	    };
	    FormlyPubSub.prototype.getEmitter = function (key) {
	        return this.emitters[key];
	    };
	    return FormlyPubSub;
	}());
	exports.FormlyPubSub = FormlyPubSub;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var formly_expression_1 = __webpack_require__(11);
	var FormlyFieldVisibilityDelegate = (function () {
	    function FormlyFieldVisibilityDelegate(formlyCommon) {
	        this.formlyCommon = formlyCommon;
	    }
	    FormlyFieldVisibilityDelegate.prototype.eval = function (expression) {
	        if (expression instanceof Function) {
	            return expression();
	        }
	        else if (typeof expression === 'string') {
	            return formly_expression_1.evalExpression(expression, this.formlyCommon, ['model', 'fieldModel'], [this.formlyCommon.formModel, this.formlyCommon.model]);
	        }
	        else {
	            return expression ? true : false;
	        }
	    };
	    FormlyFieldVisibilityDelegate.prototype.hasHideExpression = function () {
	        return (this.formlyCommon.field && this.formlyCommon.field.hideExpression !== undefined) && this.formlyCommon.field.hideExpression ? true : false;
	    };
	    FormlyFieldVisibilityDelegate.prototype.checkVisibilityChange = function () {
	        if (this.hasHideExpression()) {
	            var hideExpressionResult = this.eval(this.formlyCommon.field.hideExpression);
	            if (hideExpressionResult !== this.formlyCommon.hide) {
	                this.formlyCommon.hide = hideExpressionResult;
	            }
	        }
	    };
	    return FormlyFieldVisibilityDelegate;
	}());
	exports.FormlyFieldVisibilityDelegate = FormlyFieldVisibilityDelegate;
	var FormlyFieldExpressionDelegate = (function () {
	    function FormlyFieldExpressionDelegate(formlyCommon) {
	        this.formlyCommon = formlyCommon;
	    }
	    FormlyFieldExpressionDelegate.prototype.hasExpression = function () {
	        return (this.formlyCommon.field && this.formlyCommon.field.expressionProperties !== undefined);
	    };
	    FormlyFieldExpressionDelegate.prototype.checkExpressionChange = function () {
	        if (this.hasExpression()) {
	            var expressionProperties = this.formlyCommon.field.expressionProperties;
	            if (expressionProperties) {
	                for (var key in expressionProperties) {
	                    var expressionValue = formly_expression_1.evalExpression(expressionProperties[key], this.formlyCommon, ['model', 'fieldValue'], [this.formlyCommon.formModel, this.formlyCommon.model]);
	                    formly_expression_1.expressionValueSetter(key, expressionValue, this.formlyCommon, ['model', 'fieldModel', 'templateOptions', 'validation'], [this.formlyCommon.formModel, this.formlyCommon.model, this.formlyCommon.field.templateOptions, this.formlyCommon.field.validation]);
	                }
	                var formControl = this.formlyCommon.form.get(this.formlyCommon.field.key);
	                if (formControl) {
	                    if (formControl.status === 'DISABLED' && !this.formlyCommon.field.templateOptions.disabled) {
	                        formControl.enable();
	                    }
	                    if (formControl.status !== 'DISABLED' && this.formlyCommon.field.templateOptions.disabled) {
	                        formControl.disable();
	                    }
	                    if (!formControl.dirty && formControl.invalid && this.formlyCommon.field.validation && !this.formlyCommon.field.validation.show) {
	                        formControl.markAsUntouched();
	                    }
	                    if (!formControl.dirty && formControl.invalid && this.formlyCommon.field.validation && this.formlyCommon.field.validation.show) {
	                        formControl.markAsTouched();
	                    }
	                }
	            }
	        }
	    };
	    return FormlyFieldExpressionDelegate;
	}());
	exports.FormlyFieldExpressionDelegate = FormlyFieldExpressionDelegate;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	function evalExpression(expression, thisArg, argNames, argVal) {
	    try {
	        return Function.bind.apply(Function, [void 0].concat(argNames.concat("return " + expression + ";")))().apply(thisArg, argVal);
	    }
	    catch (error) {
	        console.error(error);
	    }
	}
	exports.evalExpression = evalExpression;
	function expressionValueSetter(expression, expressionValue, thisArg, argNames, argVal) {
	    try {
	        return Function.bind
	            .apply(Function, [void 0].concat(['expressionValue'].concat(argNames.concat(expression + " = expressionValue;"))))()
	            .apply(thisArg, [expressionValue].concat(argVal));
	    }
	    catch (error) {
	        console.error(error);
	    }
	}
	exports.expressionValueSetter = expressionValueSetter;


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var formly_single_focus_dispatcher_1 = __webpack_require__(14);
	var FormlyAttributes = (function () {
	    function FormlyAttributes(renderer, elementRef, focusDispatcher) {
	        var _this = this;
	        this.renderer = renderer;
	        this.elementRef = elementRef;
	        this.focusDispatcher = focusDispatcher;
	        this.attributes = ['placeholder', 'tabindex', 'step'];
	        focusDispatcher.listen(function (key) {
	            if (_this.formControlName !== key) {
	                _this.templateOptions.focus = false;
	            }
	        });
	    }
	    Object.defineProperty(FormlyAttributes.prototype, "templateOptions", {
	        set: function (val) {
	            var _this = this;
	            if (!this._focus && val.focus) {
	                this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus', []);
	                this.focusDispatcher.notify(this.formControlName);
	            }
	            if (this._focus && !val.focus) {
	                this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'blur', []);
	            }
	            this._focus = val.focus;
	            this.attributes.filter(function (attribute) { return val[attribute] !== '' || val[attribute] !== undefined; })
	                .map(function (attribute) { return _this.renderer.setElementAttribute(_this.elementRef.nativeElement, attribute, val[attribute]); });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    FormlyAttributes.prototype.onFocus = function () {
	        if (!this._focus) {
	            this.focusDispatcher.notify(this.formControlName);
	            this._focus = true;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FormlyAttributes.prototype, "formControlName", void 0);
	    __decorate([
	        core_1.Input('formlyAttributes'), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], FormlyAttributes.prototype, "templateOptions", null);
	    __decorate([
	        core_1.HostListener('focus'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], FormlyAttributes.prototype, "onFocus", null);
	    FormlyAttributes = __decorate([
	        core_1.Directive({
	            selector: '[formlyAttributes]',
	            providers: [formly_single_focus_dispatcher_1.SingleFocusDispatcher],
	        }), 
	        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef, formly_single_focus_dispatcher_1.SingleFocusDispatcher])
	    ], FormlyAttributes);
	    return FormlyAttributes;
	}());
	exports.FormlyAttributes = FormlyAttributes;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var SingleFocusDispatcher = (function () {
	    function SingleFocusDispatcher() {
	        this._listeners = [];
	    }
	    SingleFocusDispatcher.prototype.notify = function (key) {
	        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
	            var listener = _a[_i];
	            listener(key);
	        }
	    };
	    SingleFocusDispatcher.prototype.listen = function (listener) {
	        this._listeners.push(listener);
	    };
	    SingleFocusDispatcher = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], SingleFocusDispatcher);
	    return SingleFocusDispatcher;
	}());
	exports.SingleFocusDispatcher = SingleFocusDispatcher;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(4);
	var formly_config_1 = __webpack_require__(6);
	var FormlyMessages = (function () {
	    function FormlyMessages(configs) {
	        var _this = this;
	        this.messages = {};
	        configs.map(function (config) {
	            if (config.validationMessages) {
	                config.validationMessages.map(function (validation) { return _this.addStringMessage(validation.name, validation.message); });
	            }
	        });
	    }
	    FormlyMessages.prototype.addStringMessage = function (validator, message) {
	        this.messages[validator] = message;
	    };
	    FormlyMessages.prototype.getMessages = function () {
	        return this.messages;
	    };
	    FormlyMessages.prototype.getValidatorErrorMessage = function (prop) {
	        return this.messages[prop];
	    };
	    FormlyMessages = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(formly_config_1.FORMLY_CONFIG_TOKEN)), 
	        __metadata('design:paramtypes', [Object])
	    ], FormlyMessages);
	    return FormlyMessages;
	}());
	exports.FormlyMessages = FormlyMessages;
	var FormlyMessage = (function () {
	    function FormlyMessage(formlyMessages) {
	        this.formlyMessages = formlyMessages;
	    }
	    Object.defineProperty(FormlyMessage.prototype, "errorMessage", {
	        get: function () {
	            var formControl = this.form.get(this.controlName);
	            for (var propertyName in formControl.errors) {
	                if (formControl.errors.hasOwnProperty(propertyName)) {
	                    var message = this.formlyMessages.getValidatorErrorMessage(propertyName);
	                    if (typeof message === 'function') {
	                        return message(formControl.errors[propertyName], this.field);
	                    }
	                    return message;
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], FormlyMessage.prototype, "controlName", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', forms_1.FormGroup)
	    ], FormlyMessage.prototype, "form", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FormlyMessage.prototype, "field", void 0);
	    FormlyMessage = __decorate([
	        core_1.Component({
	            selector: 'formly-message',
	            template: "<div *ngIf=\"errorMessage\">{{errorMessage}}</div>",
	        }), 
	        __metadata('design:paramtypes', [FormlyMessages])
	    ], FormlyMessage);
	    return FormlyMessage;
	}());
	exports.FormlyMessage = FormlyMessage;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(17));
	__export(__webpack_require__(26));
	var formlyBootstrap_1 = __webpack_require__(32);
	exports.FormlyBootstrapModule = formlyBootstrap_1.FormlyBootstrapModule;
	var field_1 = __webpack_require__(20);
	exports.Field = field_1.Field;
	var field_type_1 = __webpack_require__(19);
	exports.FieldType = field_type_1.FieldType;
	var field_wrapper_1 = __webpack_require__(28);
	exports.FieldWrapper = field_wrapper_1.FieldWrapper;
	var formly_single_focus_dispatcher_1 = __webpack_require__(14);
	exports.SingleFocusDispatcher = formly_single_focus_dispatcher_1.SingleFocusDispatcher;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var checkbox_1 = __webpack_require__(18);
	exports.FormlyFieldCheckbox = checkbox_1.FormlyFieldCheckbox;
	var multicheckbox_1 = __webpack_require__(21);
	exports.FormlyFieldMultiCheckbox = multicheckbox_1.FormlyFieldMultiCheckbox;
	var input_1 = __webpack_require__(22);
	exports.FormlyFieldInput = input_1.FormlyFieldInput;
	var radio_1 = __webpack_require__(23);
	exports.FormlyFieldRadio = radio_1.FormlyFieldRadio;
	var textarea_1 = __webpack_require__(24);
	exports.FormlyFieldTextArea = textarea_1.FormlyFieldTextArea;
	var select_1 = __webpack_require__(25);
	exports.FormlyFieldSelect = select_1.FormlyFieldSelect;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(4);
	var field_type_1 = __webpack_require__(19);
	var FormlyFieldCheckbox = (function (_super) {
	    __extends(FormlyFieldCheckbox, _super);
	    function FormlyFieldCheckbox() {
	        _super.apply(this, arguments);
	    }
	    FormlyFieldCheckbox.createControl = function (model, field) {
	        return new forms_1.FormControl({ value: model ? 'on' : undefined, disabled: field.templateOptions.disabled }, field.validators ? field.validators.validation : undefined, field.asyncValidation);
	    };
	    FormlyFieldCheckbox = __decorate([
	        core_1.Component({
	            selector: 'formly-field-checkbox',
	            template: "\n    <label class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" [formControl]=\"formControl\"\n        *ngIf=\"!templateOptions.hidden\" value=\"on\"\n        [formlyAttributes]=\"templateOptions\" class=\"custom-control-input\">\n        {{templateOptions.label}}\n        <span class=\"custom-control-indicator\"></span>\n    </label>\n  ",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FormlyFieldCheckbox);
	    return FormlyFieldCheckbox;
	}(field_type_1.FieldType));
	exports.FormlyFieldCheckbox = FormlyFieldCheckbox;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var field_1 = __webpack_require__(20);
	var FieldType = (function (_super) {
	    __extends(FieldType, _super);
	    function FieldType() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(FieldType.prototype, "lifecycle", {
	        get: function () {
	            return this.field.lifecycle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FieldType.prototype.ngOnInit = function () {
	        this.lifeCycleHooks('onInit');
	    };
	    FieldType.prototype.ngOnChanges = function (changes) {
	        this.lifeCycleHooks('onChanges');
	    };
	    FieldType.prototype.ngDoCheck = function () {
	        this.lifeCycleHooks('doCheck');
	    };
	    FieldType.prototype.ngAfterContentInit = function () {
	        this.lifeCycleHooks('afterContentInit');
	    };
	    FieldType.prototype.ngAfterContentChecked = function () {
	        this.lifeCycleHooks('afterContentChecked');
	    };
	    FieldType.prototype.ngAfterViewInit = function () {
	        this.lifeCycleHooks('afterViewInit');
	    };
	    FieldType.prototype.ngAfterViewChecked = function () {
	        this.lifeCycleHooks('afterViewChecked');
	    };
	    FieldType.prototype.ngOnDestroy = function () {
	        this.lifeCycleHooks('onDestroy');
	    };
	    FieldType.prototype.lifeCycleHooks = function (type) {
	        if (this.lifecycle && this.lifecycle[type]) {
	            this.lifecycle[type].bind(this)();
	        }
	    };
	    return FieldType;
	}(field_1.Field));
	exports.FieldType = FieldType;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(4);
	var Field = (function () {
	    function Field() {
	    }
	    Object.defineProperty(Field.prototype, "key", {
	        get: function () { return this.field.key; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "formControl", {
	        get: function () { return this.form.get(this.key); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "templateOptions", {
	        get: function () { return this.field.templateOptions; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "valid", {
	        get: function () { return this.formControl.touched && !this.formControl.valid; },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', forms_1.FormGroup)
	    ], Field.prototype, "form", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], Field.prototype, "field", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], Field.prototype, "formModel", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], Field.prototype, "model", void 0);
	    return Field;
	}());
	exports.Field = Field;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(4);
	var field_type_1 = __webpack_require__(19);
	var FormlyFieldMultiCheckbox = (function (_super) {
	    __extends(FormlyFieldMultiCheckbox, _super);
	    function FormlyFieldMultiCheckbox() {
	        _super.apply(this, arguments);
	    }
	    FormlyFieldMultiCheckbox.createControl = function (model, field) {
	        var controlGroupConfig = field.templateOptions.options.reduce(function (previous, option) {
	            previous[option.key] = new forms_1.FormControl(model ? model[option.key] : undefined);
	            return previous;
	        }, {});
	        return new forms_1.FormGroup(controlGroupConfig);
	    };
	    FormlyFieldMultiCheckbox = __decorate([
	        core_1.Component({
	            selector: 'formly-field-multicheckbox',
	            template: "\n    <div *ngFor=\"let option of templateOptions.options\" class=\"checkbox\">\n        <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" name=\"choose\" value=\"{{option.value}}\" [formControl]=\"formControl.get(option.key)\"\n            [formlyAttributes]=\"templateOptions\" class=\"custom-control-input\">\n            {{option.value}}\n            <span class=\"custom-control-indicator\"></span>\n        </label>\n    </div>\n  ",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FormlyFieldMultiCheckbox);
	    return FormlyFieldMultiCheckbox;
	}(field_type_1.FieldType));
	exports.FormlyFieldMultiCheckbox = FormlyFieldMultiCheckbox;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var field_type_1 = __webpack_require__(19);
	var FormlyFieldInput = (function (_super) {
	    __extends(FormlyFieldInput, _super);
	    function FormlyFieldInput() {
	        _super.apply(this, arguments);
	    }
	    FormlyFieldInput = __decorate([
	        core_1.Component({
	            selector: 'formly-field-input',
	            template: "\n    <input [type]=\"templateOptions.type\" [formControl]=\"formControl\" class=\"form-control\" id=\"{{key}}\"\n      [formlyAttributes]=\"templateOptions\" [ngClass]=\"{'form-control-danger': valid}\">\n    ",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FormlyFieldInput);
	    return FormlyFieldInput;
	}(field_type_1.FieldType));
	exports.FormlyFieldInput = FormlyFieldInput;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var field_type_1 = __webpack_require__(19);
	var FormlyFieldRadio = (function (_super) {
	    __extends(FormlyFieldRadio, _super);
	    function FormlyFieldRadio() {
	        _super.apply(this, arguments);
	    }
	    FormlyFieldRadio = __decorate([
	        core_1.Component({
	            selector: 'formly-field-radio',
	            template: "\n    <div *ngFor=\"let option of templateOptions.options\" class=\"radio\">\n      <label class=\"custom-control custom-radio\">\n        <input type=\"radio\" [value]=\"option.key\" [formControl]=\"form.get(key)\"\n        [formlyAttributes]=\"templateOptions\" class=\"custom-control-input\">\n        {{option.value}}\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  ",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FormlyFieldRadio);
	    return FormlyFieldRadio;
	}(field_type_1.FieldType));
	exports.FormlyFieldRadio = FormlyFieldRadio;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var field_type_1 = __webpack_require__(19);
	var FormlyFieldTextArea = (function (_super) {
	    __extends(FormlyFieldTextArea, _super);
	    function FormlyFieldTextArea() {
	        _super.apply(this, arguments);
	    }
	    FormlyFieldTextArea = __decorate([
	        core_1.Component({
	            selector: 'formly-field-textarea',
	            template: "\n    <textarea name=\"{{key}}\" [formControl]=\"formControl\" id=\"{{key}}\" cols=\"{{templateOptions.cols}}\"\n      rows=\"{{templateOptions.rows}}\" class=\"form-control\"\n      [formlyAttributes]=\"templateOptions\">\n    </textarea>\n  ",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FormlyFieldTextArea);
	    return FormlyFieldTextArea;
	}(field_type_1.FieldType));
	exports.FormlyFieldTextArea = FormlyFieldTextArea;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var field_type_1 = __webpack_require__(19);
	var FormlyFieldSelect = (function (_super) {
	    __extends(FormlyFieldSelect, _super);
	    function FormlyFieldSelect() {
	        _super.apply(this, arguments);
	    }
	    FormlyFieldSelect = __decorate([
	        core_1.Component({
	            selector: 'formly-field-select',
	            template: "\n    <select [id]=\"key\" [formControl]=\"formControl\" class=\"form-control\" [formlyAttributes]=\"templateOptions\">\n      <option value=\"\" *ngIf=\"templateOptions.placeholder\">{{templateOptions.placeholder}}</option>\n      <option *ngFor=\"let option of templateOptions.options\" [value]=\"option.value\">{{option.label}}</option>\n    </select>\n  ",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FormlyFieldSelect);
	    return FormlyFieldSelect;
	}(field_type_1.FieldType));
	exports.FormlyFieldSelect = FormlyFieldSelect;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var fieldset_1 = __webpack_require__(27);
	exports.FormlyWrapperFieldset = fieldset_1.FormlyWrapperFieldset;
	var label_1 = __webpack_require__(29);
	exports.FormlyWrapperLabel = label_1.FormlyWrapperLabel;
	var description_1 = __webpack_require__(30);
	exports.FormlyWrapperDescription = description_1.FormlyWrapperDescription;
	var message_validation_1 = __webpack_require__(31);
	exports.FormlyWrapperValidationMessages = message_validation_1.FormlyWrapperValidationMessages;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var field_wrapper_1 = __webpack_require__(28);
	var FormlyWrapperFieldset = (function (_super) {
	    __extends(FormlyWrapperFieldset, _super);
	    function FormlyWrapperFieldset() {
	        _super.apply(this, arguments);
	    }
	    __decorate([
	        core_1.ViewChild('fieldComponent', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], FormlyWrapperFieldset.prototype, "fieldComponent", void 0);
	    FormlyWrapperFieldset = __decorate([
	        core_1.Component({
	            selector: 'formly-wrapper-fieldset',
	            template: "\n    <div class=\"form-group\" [ngClass]=\"{'has-danger': valid}\">\n      <template #fieldComponent></template>\n    </div>\n  ",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FormlyWrapperFieldset);
	    return FormlyWrapperFieldset;
	}(field_wrapper_1.FieldWrapper));
	exports.FormlyWrapperFieldset = FormlyWrapperFieldset;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var field_1 = __webpack_require__(20);
	var FieldWrapper = (function (_super) {
	    __extends(FieldWrapper, _super);
	    function FieldWrapper() {
	        _super.apply(this, arguments);
	    }
	    return FieldWrapper;
	}(field_1.Field));
	exports.FieldWrapper = FieldWrapper;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var field_wrapper_1 = __webpack_require__(28);
	var FormlyWrapperLabel = (function (_super) {
	    __extends(FormlyWrapperLabel, _super);
	    function FormlyWrapperLabel() {
	        _super.apply(this, arguments);
	    }
	    __decorate([
	        core_1.ViewChild('fieldComponent', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], FormlyWrapperLabel.prototype, "fieldComponent", void 0);
	    FormlyWrapperLabel = __decorate([
	        core_1.Component({
	            selector: 'formly-wrapper-label',
	            template: "\n    <div>\n      <label attr.for=\"{{key}}\" class=\"form-control-label\">{{templateOptions.label}}</label>\n      <template #fieldComponent></template>\n    </div>\n  ",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FormlyWrapperLabel);
	    return FormlyWrapperLabel;
	}(field_wrapper_1.FieldWrapper));
	exports.FormlyWrapperLabel = FormlyWrapperLabel;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var field_wrapper_1 = __webpack_require__(28);
	var FormlyWrapperDescription = (function (_super) {
	    __extends(FormlyWrapperDescription, _super);
	    function FormlyWrapperDescription() {
	        _super.apply(this, arguments);
	    }
	    __decorate([
	        core_1.ViewChild('fieldComponent', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], FormlyWrapperDescription.prototype, "fieldComponent", void 0);
	    FormlyWrapperDescription = __decorate([
	        core_1.Component({
	            selector: 'formly-wrapper-description',
	            template: "\n    <template #fieldComponent></template>\n    <div>\n      <small class=\"text-muted\">{{templateOptions.description}}</small>\n    </div>\n  ",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FormlyWrapperDescription);
	    return FormlyWrapperDescription;
	}(field_wrapper_1.FieldWrapper));
	exports.FormlyWrapperDescription = FormlyWrapperDescription;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var field_wrapper_1 = __webpack_require__(28);
	var FormlyWrapperValidationMessages = (function (_super) {
	    __extends(FormlyWrapperValidationMessages, _super);
	    function FormlyWrapperValidationMessages() {
	        _super.apply(this, arguments);
	    }
	    __decorate([
	        core_1.ViewChild('fieldComponent', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], FormlyWrapperValidationMessages.prototype, "fieldComponent", void 0);
	    FormlyWrapperValidationMessages = __decorate([
	        core_1.Component({
	            selector: 'formly-wrapper-validation-messages',
	            template: "\n    <template #fieldComponent></template>\n    <div>\n      <small class=\"text-muted text-danger\" *ngIf=\"valid\"><formly-message [form]=\"form\" [field]=\"field\" [controlName]=\"key\"></formly-message></small>\n    </div>\n  ",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FormlyWrapperValidationMessages);
	    return FormlyWrapperValidationMessages;
	}(field_wrapper_1.FieldWrapper));
	exports.FormlyWrapperValidationMessages = FormlyWrapperValidationMessages;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(4);
	var core_2 = __webpack_require__(1);
	var formlyBootstrap_config_1 = __webpack_require__(33);
	var FormlyBootstrapModule = (function () {
	    function FormlyBootstrapModule() {
	    }
	    FormlyBootstrapModule = __decorate([
	        core_1.NgModule({
	            declarations: formlyBootstrap_config_1.FIELD_TYPE_COMPONENTS,
	            imports: [
	                common_1.CommonModule,
	                forms_1.ReactiveFormsModule,
	                core_2.FormlyModule.forRoot(formlyBootstrap_config_1.BOOTSTRAP_FORMLY_CONFIG),
	            ],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FormlyBootstrapModule);
	    return FormlyBootstrapModule;
	}());
	exports.FormlyBootstrapModule = FormlyBootstrapModule;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var types_1 = __webpack_require__(17);
	var wrappers_1 = __webpack_require__(26);
	exports.FIELD_TYPE_COMPONENTS = [
	    types_1.FormlyFieldInput,
	    types_1.FormlyFieldCheckbox,
	    types_1.FormlyFieldRadio,
	    types_1.FormlyFieldSelect,
	    types_1.FormlyFieldTextArea,
	    types_1.FormlyFieldMultiCheckbox,
	    wrappers_1.FormlyWrapperLabel,
	    wrappers_1.FormlyWrapperDescription,
	    wrappers_1.FormlyWrapperValidationMessages,
	    wrappers_1.FormlyWrapperFieldset,
	];
	exports.BOOTSTRAP_FORMLY_CONFIG = {
	    types: [
	        {
	            name: 'input',
	            component: types_1.FormlyFieldInput,
	            wrappers: ['fieldset', 'label', 'description', 'validation-message'],
	        },
	        {
	            name: 'checkbox',
	            component: types_1.FormlyFieldCheckbox,
	            wrappers: ['fieldset', 'description', 'validation-message'],
	        },
	        {
	            name: 'radio',
	            component: types_1.FormlyFieldRadio,
	            wrappers: ['fieldset', 'label', 'description', 'validation-message'],
	        },
	        {
	            name: 'select',
	            component: types_1.FormlyFieldSelect,
	            wrappers: ['fieldset', 'label', 'description', 'validation-message'],
	        },
	        {
	            name: 'textarea',
	            component: types_1.FormlyFieldTextArea,
	            wrappers: ['fieldset', 'label', 'description', 'validation-message'],
	        },
	        {
	            name: 'multicheckbox',
	            component: types_1.FormlyFieldMultiCheckbox,
	            wrappers: ['fieldset', 'label', 'description', 'validation-message'],
	        },
	    ],
	    wrappers: [
	        { name: 'label', component: wrappers_1.FormlyWrapperLabel },
	        { name: 'description', component: wrappers_1.FormlyWrapperDescription },
	        { name: 'validation-message', component: wrappers_1.FormlyWrapperValidationMessages },
	        { name: 'fieldset', component: wrappers_1.FormlyWrapperFieldset },
	    ],
	    validationMessages: [
	        { name: 'required', message: 'This field is required.' },
	        { name: 'invalidEmailAddress', message: 'Invalid Email Address' },
	        { name: 'maxlength', message: 'Maximum Length Exceeded.' },
	        { name: 'minlength', message: 'Should have atleast 2 Characters' },
	    ],
	};


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-formly.umd.js.map