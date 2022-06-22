import { Collection } from "discord.js";
import { Constructor } from "hades";
import { TextArgMeta } from "./TextArgMeta";
/**
 * Decorator metadata for @command
 */
export declare class TextCommandMeta {
    name: string;
    target: Constructor;
    args: Collection<string, TextArgMeta>;
    description?: string;
    getArgMeta(name: string): TextArgMeta;
    addValidatorMethod(argName: string, methodName: string): Set<string>;
}
