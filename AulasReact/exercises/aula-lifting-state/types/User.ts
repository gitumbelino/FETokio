type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};