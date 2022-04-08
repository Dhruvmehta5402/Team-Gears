export interface EventPin {
  address: string;
  position: {
    lat: number;
    lng: number;
  }
  title: string;
  eventDetails:string;
  otherInformation:string;
}
