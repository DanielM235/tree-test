
export class Account {
  id: number | undefined;
  firstName: string | undefined;
  login: string | undefined;
}

export class KeyPassword {
  key: string | undefined;
  newPassword: string | undefined;

  constructor(key?: string, newPassword?: string) {
    this.key = key;
    this.newPassword = newPassword;
  }

}
