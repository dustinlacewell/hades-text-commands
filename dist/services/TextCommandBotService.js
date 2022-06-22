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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCommandBotService = void 0;
const inversify_1 = require("inversify");
const hades_1 = require("hades");
const TextCommandHelpService_1 = require("./TextCommandHelpService");
const TextCommandService_1 = require("./TextCommandService/TextCommandService");
/**
 * A base bot class with text command support.
 */
let TextCommandBotService = class TextCommandBotService extends hades_1.HadesBotService {
    onMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            this.commandService.dispatch(message);
        });
    }
};
__decorate([
    (0, inversify_1.inject)(TextCommandService_1.TextCommandService),
    __metadata("design:type", TextCommandService_1.TextCommandService)
], TextCommandBotService.prototype, "commandService", void 0);
__decorate([
    (0, inversify_1.inject)(TextCommandHelpService_1.TextCommandHelpService),
    __metadata("design:type", TextCommandHelpService_1.TextCommandHelpService)
], TextCommandBotService.prototype, "helpService", void 0);
TextCommandBotService = __decorate([
    (0, inversify_1.injectable)()
], TextCommandBotService);
exports.TextCommandBotService = TextCommandBotService;
//# sourceMappingURL=TextCommandBotService.js.map