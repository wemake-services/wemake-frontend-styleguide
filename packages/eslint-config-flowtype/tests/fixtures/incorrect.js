// @flow
/* eslint-disable */

type Client <T> = {
  name: String;
  surname: string;
  age: number|string;
  isRegular: bool;
  reference: T;
  related: T[];
  preferences: (string | Object)[];
}

// eslint-disable-next-line no-unused-vars
function greetClient (client:Client< string >):string {
  return `Hi, ${client.name}-{$client.reference}`
}
