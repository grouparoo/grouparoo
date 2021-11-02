class CustomObjectHandler {
  static standardObjects = [
    "DEAL",
    "COMPANY",
    "CONTACT",
    "MARKETING_EVENT",
    "PRODUCT",
    "QUOTE",
    "TICKET",
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

  public getRequiredProperties() {
    return this.customObject?.requiredProperties || [];
  }
}

export { CustomObjectHandler };
