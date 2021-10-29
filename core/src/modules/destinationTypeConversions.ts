/**
 * List of conversions from Grouparoo Types to Destination Types
 * In many cases, we can do conversions, ie: 'integer' or 'float' to 'number' or there are cast-able representations in other types, like 'integer' to 'string'.
 * Any conversion that's not listed here is not valid.
 * Learn more at https://docs.google.com/spreadsheets/d/1Fbkdsq_IR8deOYF4QpVq_XIdqpvAah3tJbVP2K5nCdc
 */
export const destinationTypeConversions = {
  float: {
    any: (v: number) => v,
    float: (v: number) => v,
    string: (v: number) => v.toString(),
    number: (v: number) => v,
  },

  integer: {
    any: (v: number) => v,
    float: (v: number) => v,
    integer: (v: number) => v,
    string: (v: number) => v.toString(),
    number: (v: number) => v,
  },

  string: {
    any: (v: string) => v,
    string: (v: string) => v,
    url: (v: string) => v,
    email: (v: string) => v,
    boolean: (v: string) => v,
    date: (v: string) => v,
    float: (v: string) => v,
    integer: (v: string) => v,
    number: (v: string) => v,
    phoneNumber: (v: string) => v,
  },

  url: {
    any: (v: string) => v,
    string: (v: string) => v,
    url: (v: string) => v,
  },

  email: {
    any: (v: string) => v,
    string: (v: string) => v,
    email: (v: string) => v,
  },

  phoneNumber: {
    any: (v: string) => v,
    string: (v: string) => v,
    phoneNumber: (v: string) => v,
  },

  boolean: {
    any: (v: boolean) => v,
    string: (v: boolean) => v.toString(),
    boolean: (v: boolean) => v,
    number: (v: boolean) => (v === true ? 1 : 0),
  },

  date: {
    any: (v: Date) => v,
    float: (v: Date) => v.getTime(),
    integer: (v: Date) => v.getTime(),
    string: (v: Date) => v.toISOString(),
    date: (v: Date) => v,
    number: (v: Date) => v.getTime(),
  },
};
