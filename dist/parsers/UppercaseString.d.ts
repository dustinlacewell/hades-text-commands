import { TextArgInstaller } from '../services/TextCommandFactory/TextArgInstaller';
import { TextCommandContext } from '../models/TextCommandContext';
import { TextArgParser } from './TextArgParser';
export declare type UppercaseString = Uppercase<string>;
export declare class UppercaseStringParser extends TextArgParser {
    name: string;
    description: string;
    parse(arg: TextArgInstaller, context: TextCommandContext): Promise<string>;
}
//# sourceMappingURL=UppercaseString.d.ts.map