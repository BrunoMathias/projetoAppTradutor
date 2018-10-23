(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-size: 25px;\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-topo></app-topo>\n<div *ngIf='jogoEmAndamento; else fimDeJogo'>\n    <app-painel (encerrarJogo)='encerrarJogo($event)'></app-painel>\n</div>\n<ng-template #fimDeJogo>\n    <div *ngIf=\"tipoEncerramento === 'Derrota'; else fimDeJogoVitoria\" class=\"container\" style=\"margin-top: 50px\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3 style=\"color:red\">\n                    Infelizmente você perdeu o jogo T_T\n                </h3>\n                <button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Reiniciar</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #fimDeJogoVitoria>\n    <div class=\"container\" style=\"margin-top: 50px\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3 style=\"color:palegreen\">\n                    Você Ganhou o jogo\n                </h3>\n                <button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Reiniciar</button>\n            </div>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.jogoEmAndamento = true;
    }
    AppComponent.prototype.encerrarJogo = function (tipo) {
        this.jogoEmAndamento = false;
        this.tipoEncerramento = tipo;
    };
    AppComponent.prototype.reiniciarJogo = function () {
        this.jogoEmAndamento = true;
        this.tipoEncerramento = undefined;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topo/topo.component */ "./src/app/topo/topo.component.ts");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./painel/painel.component */ "./src/app/painel/painel.component.ts");
/* harmony import */ var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tentativas/tentativas.component */ "./src/app/tentativas/tentativas.component.ts");
/* harmony import */ var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progresso/progresso.component */ "./src/app/progresso/progresso.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _topo_topo_component__WEBPACK_IMPORTED_MODULE_3__["TopoComponent"],
                _painel_painel_component__WEBPACK_IMPORTED_MODULE_4__["PainelComponent"],
                _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_5__["TentativasComponent"],
                _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_6__["ProgressoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/painel/frases-mock.ts":
/*!***************************************!*\
  !*** ./src/app/painel/frases-mock.ts ***!
  \***************************************/
/*! exports provided: FRASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRASES", function() { return FRASES; });
var FRASES = [
    { fraseEng: 'I like to learn', frasePtBr: 'Eu gosto de aprender' },
    { fraseEng: 'I watch tv', frasePtBr: 'Eu assisto tv' },
    { fraseEng: 'How are you?', frasePtBr: 'Como vai você?' },
    { fraseEng: 'I eat bread', frasePtBr: 'Eu como pão' }
];


/***/ }),

/***/ "./src/app/painel/painel.component.css":
/*!*********************************************!*\
  !*** ./src/app/painel/painel.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n    padding-top: 30px;\r\n    margin-top: 25px;\r\n    padding-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/painel/painel.component.html":
/*!**********************************************!*\
  !*** ./src/app/painel/painel.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <app-progresso [progresso]='progresso'></app-progresso>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"d-flex justify-content-end\">\r\n                    <app-tentativas [tentativas]='tentativas'></app-tentativas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h6>{{ instrucao }}</h6> <!-- Interpolação do tipo String Interpolation  -->\r\n                <p>{{ rodadaFrase.fraseEng }}</p> <!--String Interpolation onde recupero valor\r\n                     de Array Especifico. No caso acesso o array e seu atributo em seguida-->\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" \r\n                    rows=\"3\" \r\n                    (input)='atualizaResposta($event)'\r\n                    [value]='resposta'\r\n                    ></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"d-flex justify-content-end\">\r\n                    <button type=\"button\" class=\"btn btn-info\" (click)='verificaResposta()'>Traduzir</button>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/painel/painel.component.ts":
/*!********************************************!*\
  !*** ./src/app/painel/painel.component.ts ***!
  \********************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frases_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frases-mock */ "./src/app/painel/frases-mock.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PainelComponent = /** @class */ (function () {
    function PainelComponent() {
        this.frases = _frases_mock__WEBPACK_IMPORTED_MODULE_1__["FRASES"];
        this.instrucao = 'Traduza';
        this.resposta = '';
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3; //Corações - 
        this.encerrarJogo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.atualizaRodada(); //Criei esta função pois a utilizo em dois blocos dioferentes neste codigo
    }
    PainelComponent.prototype.ngOnInit = function () {
    };
    PainelComponent.prototype.ngOnDestroy = function () {
        //console.log('Jogo Destruido')
    };
    // Capturo event do meu codigo html onde defini o parametro $event no textare
    PainelComponent.prototype.atualizaResposta = function (resposta) {
        this.resposta = resposta.target.value;
        //console.log(this.resposta)
    };
    /*Atraves do Evento Click no botão Verificar do HTML, recebo o que foi digitado
    atraves da variavel resposta declarada acima
    */
    PainelComponent.prototype.verificaResposta = function () {
        if (this.rodadaFrase.frasePtBr == this.resposta) {
            /* Acesso o atributo atual de rodadaFrase PtBr e comparo com a resposta digitada
            e capturada no textbox pela variavel resposta */
            //alert('Tradução Correta')
            //TROCA PERGUNTA DA RODADA
            this.rodada++;
            if (this.rodada == 4) {
                this.encerrarJogo.emit('Vitoria');
            }
            //Atualiza objeto da rodada
            this.atualizaRodada();
            //Progresso
            this.progresso = this.progresso + (100 / this.frases.length);
            //console.log(this.progresso)
        }
        else {
            //alert('Tradução Errada')
            this.tentativas--;
            if (this.tentativas === -1) {
                this.encerrarJogo.emit('Derrota');
            }
        }
    };
    PainelComponent.prototype.atualizaRodada = function () {
        /* atribuo a rodadaFrase, uma frase guardada no meu array de frases na posição especificada guardada
        na vcariavel rodada */
        this.rodadaFrase = this.frases[this.rodada];
        //limpa resposta
        this.resposta = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PainelComponent.prototype, "encerrarJogo", void 0);
    PainelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-painel',
            template: __webpack_require__(/*! ./painel.component.html */ "./src/app/painel/painel.component.html"),
            styles: [__webpack_require__(/*! ./painel.component.css */ "./src/app/painel/painel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PainelComponent);
    return PainelComponent;
}());



/***/ }),

/***/ "./src/app/progresso/progresso.component.css":
/*!***************************************************!*\
  !*** ./src/app/progresso/progresso.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress{\r\n    border: solid 1px white\r\n}"

/***/ }),

/***/ "./src/app/progresso/progresso.component.html":
/*!****************************************************!*\
  !*** ./src/app/progresso/progresso.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress bg-secondary\">\n    <div class=\"progress-bar w-{{ progresso }} bg-success\" ></div>\n</div>"

/***/ }),

/***/ "./src/app/progresso/progresso.component.ts":
/*!**************************************************!*\
  !*** ./src/app/progresso/progresso.component.ts ***!
  \**************************************************/
/*! exports provided: ProgressoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressoComponent", function() { return ProgressoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressoComponent = /** @class */ (function () {
    function ProgressoComponent() {
        this.progresso = 0; /* Recupero atraves da função Input o valor atribuido em progresso no componente do painel */
    }
    ProgressoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProgressoComponent.prototype, "progresso", void 0);
    ProgressoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progresso',
            template: __webpack_require__(/*! ./progresso.component.html */ "./src/app/progresso/progresso.component.html"),
            styles: [__webpack_require__(/*! ./progresso.component.css */ "./src/app/progresso/progresso.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressoComponent);
    return ProgressoComponent;
}());



/***/ }),

/***/ "./src/app/shared/coracao.model.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/coracao.model.ts ***!
  \*****************************************/
/*! exports provided: Coracao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coracao", function() { return Coracao; });
var Coracao = /** @class */ (function () {
    function Coracao(cheio, urlCoracaoCheio, urlCoracaoVazio) {
        if (urlCoracaoCheio === void 0) { urlCoracaoCheio = '/assets/cheio.png'; }
        if (urlCoracaoVazio === void 0) { urlCoracaoVazio = '/assets/vazio.png'; }
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }
    Coracao.prototype.exibeCoracao = function () {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    };
    return Coracao;
}());



/***/ }),

/***/ "./src/app/tentativas/tentativas.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.html":
/*!******************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<img [src]=\"coracaoVazio\">\n<img [src]=\"coracaoCheio\">\n<img [src]=\"coracaoCheio\">\n-->\n\n<img *ngFor='let coracao of coracoes' [src]='coracao.exibeCoracao()'>"

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.ts ***!
  \****************************************************/
/*! exports provided: TentativasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TentativasComponent", function() { return TentativasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/coracao.model */ "./src/app/shared/coracao.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TentativasComponent = /** @class */ (function () {
    function TentativasComponent() {
        this.coracoes = [
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__["Coracao"](true),
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__["Coracao"](true),
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__["Coracao"](true)
        ];
        //console.log(this.coracoes)
    }
    TentativasComponent.prototype.ngOnChanges = function () {
        //this.tentativas
        //this.coraccoes.lenght (Conto o numero de indices dentro do array com o Lenght)
        if (this.tentativas !== this.coracoes.length) {
            var indice = this.coracoes.length - this.tentativas; /* Tenho um total de 3 tentativas para 3 indices
            quanto tiver alteração ele entrará nesta verificação e fará Nº Tentativas - Numero de Indices do Array
            */
            this.coracoes[indice - 1].cheio = false; //Indice decremento 1 pois a primeira posição do array é 0
        }
    };
    TentativasComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TentativasComponent.prototype, "tentativas", void 0);
    TentativasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tentativas',
            template: __webpack_require__(/*! ./tentativas.component.html */ "./src/app/tentativas/tentativas.component.html"),
            styles: [__webpack_require__(/*! ./tentativas.component.css */ "./src/app/tentativas/tentativas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TentativasComponent);
    return TentativasComponent;
}());



/***/ }),

/***/ "./src/app/topo/topo.component.css":
/*!*****************************************!*\
  !*** ./src/app/topo/topo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".exemplo{\r\n    color: blue\r\n}"

/***/ }),

/***/ "./src/app/topo/topo.component.html":
/*!******************************************!*\
  !*** ./src/app/topo/topo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\r\n    <span class=\"navbar-brand mb-0 h1\">{{titulo}}</span>\r\n</nav>"

/***/ }),

/***/ "./src/app/topo/topo.component.ts":
/*!****************************************!*\
  !*** ./src/app/topo/topo.component.ts ***!
  \****************************************/
/*! exports provided: TopoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopoComponent", function() { return TopoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopoComponent = /** @class */ (function () {
    function TopoComponent() {
        this.titulo = 'Aprendendo Inglês com o Bruno';
    }
    TopoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topo',
            template: __webpack_require__(/*! ./topo.component.html */ "./src/app/topo/topo.component.html"),
            styles: [__webpack_require__(/*! ./topo.component.css */ "./src/app/topo/topo.component.css")]
        })
    ], TopoComponent);
    return TopoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bruno\Documents\workspace\angular\projects\app1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map