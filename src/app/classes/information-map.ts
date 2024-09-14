import { Description } from './translation';
import { I18n } from './i18n';
import { Identifiable } from './interfaces/indentifiable.interface';

export class InformationMap implements Identifiable {
  id: number | undefined;
  translation: { [key: string]: Description };
  enable = true;

  static create(obj: any) {
    const im = new InformationMap();
    return Object.assign(im, obj);
  }

  constructor(enable = true) {
    this.enable = enable;
    this.translation = I18n.create<Description>(Description);
  }
}
