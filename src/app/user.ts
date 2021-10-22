export interface User {
  username: string;
  picture: string;
  name: string;
  email: string;
  gender: string;
  age: number;
  location: {
    coordinates: {
      latitude: string,
      longitude: string
    }
  },
}
