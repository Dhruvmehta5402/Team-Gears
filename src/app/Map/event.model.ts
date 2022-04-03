export interface EventPin {
  name: string;
  address: string;
  position: {
    lat: number;
    lng: number;
  }
  purpose: string;
}
