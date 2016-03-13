
declare interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  picture: {url: string};
  phoneNumber: string;
  email: string;
  address: string;
}
declare const CONTACTS: Contact[];

export default CONTACTS;

