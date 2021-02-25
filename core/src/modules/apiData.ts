export namespace APIData {
  export function formatDate(date: Date | string) {
    if (!date || date === "") return null;
    else if (date instanceof Date) return date.getTime();
    else if (typeof date === "string") return new Date(date).getTime();
    else throw new Error(`${date} is not a date`);
  }
}
