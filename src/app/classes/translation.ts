export class Translation {
  title: string | undefined;
  languageId: number | undefined;
  languageLabel: string | undefined;
  languageCode: string | undefined;
  $checked: boolean | undefined;
  confirm?: boolean | undefined;
  complete = false;
  $parentId?: number; // Identifier of the parent element
}

export class Description extends Translation {
  content?: string;
  shortName?: string;
}
