export interface User {
  username: string;
  name: {
    firstName: string,
    lastName: string,
  },
  email: string;
  gender: string;
  age: number;
  location: {
    street: string,
    city: string,
    state: string,
    coordinates: {
      latitude: string,
      longitude: string
    }
  },
  picture: {
    large: string,
    thumbnail: string
  },
}
