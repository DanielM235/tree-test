
export class Documentation {
  id: number | undefined;
  informationMapId: number | undefined;
  title = '';
  rank: number | undefined;
  parentId: number | undefined;
  productId: number | undefined;
  children: Documentation[] = [];

  static create(obj: any) {
    const im = new Documentation();
    return Object.assign(im, obj);
  }
}
