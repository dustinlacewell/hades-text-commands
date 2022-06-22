import { Collection, MessageEmbed } from 'discord.js';
import { TextArgMeta, TextCommandMeta } from '../../metadata';
/**
 * Extracts help information from a command meta.
 */
export declare class TextCommandHelper {
    private meta;
    constructor(meta: TextCommandMeta);
    get name(): string;
    get args(): Collection<string, TextArgMeta>;
    get target(): import("hades").Constructor;
    get description(): string;
    getArgTags(): string[];
    getArgUsage(): string;
    getUsage(): string;
    getArgFields(): {
        name: string;
        value: string;
    }[];
    getHelpEmbed(): MessageEmbed;
}
//# sourceMappingURL=TextCommandHelper.d.ts.map