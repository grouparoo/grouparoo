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

  public getPropertyByName(name: string): any {
    if (this.customObject?.properties) {
      for (const property of this.customObject.properties) {
        if (property.name === name) {
          return property;
        }
      }
    }
    return null;
  }

  public shouldShowProperty(property: any): boolean {
    return (
      !property.archived &&
      !property.calculated &&
      !property.modificationMetadata.readOnlyValue &&
      !property.modificationMetadata.readOnlyOptions
    );
  }

  public getProperties(): any[] {
    return this.customObject?.properties || [];
  }

  public getRequiredProperties(): string[] {
    return this.customObject?.requiredProperties || [];
  }

  public getSearchableProperties(): string[] {
    return this.customObject?.searchableProperties || [];
  }
}

export { CustomObjectHandler };
