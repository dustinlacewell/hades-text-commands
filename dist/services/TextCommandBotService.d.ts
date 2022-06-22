import { Message } from "discord.js";
import { HadesBotService } from "hades";
import { TextCommandHelpService } from "./TextCommandHelpService";
import { TextCommandService } from "./TextCommandService/TextCommandService";
/**
 * A base bot class with text command support.
 */
export declare class TextCommandBotService extends HadesBotService {
    commandService: TextCommandService;
    helpService: TextCommandHelpService;
    onMessage<T extends Message>(message: T): Promise<void>;
}
//# sourceMappingURL=TextCommandBotService.d.ts.map