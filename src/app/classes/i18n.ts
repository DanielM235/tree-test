export class I18n {

  public static create<T>(type: (new () => T)): { [key: string]: T } {
    return {
      'en-gb': new type()
    };
  }
}
