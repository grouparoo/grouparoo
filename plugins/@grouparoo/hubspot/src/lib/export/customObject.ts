class CustomObjectHandler {
  static standardObjects = [
    "CONTACT",
    "PRODUCT",
    "COMPANY",
    "DEAL",
    "TICKET",
    "MARKETING_EVENT",
    "QUOTE",
  ];
  customObject: any;

  constructor(object) {
    this.customObject = object;
  }

  public getPropertyByName(name: string) {
    if (this.customObject?.properties) {
      for (const property of this.customObject.properties) {
        if (property.name === name) {
          return property;
        }
      }
    }
    return null;
  }

  public getProperties() {
    return this.customObject?.properties || [];
  }
}

export { CustomObjectHandler };
