export interface EventPin {
  address: string;
  position: {
    lat: number;
    lng: number;
  }
  title: string;
  info: string;
}