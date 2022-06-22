import { TextArgInstaller } from '../services/TextCommandFactory/TextArgInstaller';
import { Constructable } from 'hades';
import { TextCommandContext } from '../models/TextCommandContext';
/**
 * Base class for reusable argument validators.
 */
export declare class Validator {
    validate(arg: TextArgInstaller, ctx: TextCommandContext, value: any): Promise<any>;
    static check(): ({ constructor }: Constructable, key: string) => void;
}
//# sourceMappingURL=Validator.d.ts.map