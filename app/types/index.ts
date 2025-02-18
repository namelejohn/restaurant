export interface Product {
  id: number;
  name: string;
  price: number;
  image: any;
  category: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  detail: string;
}

export interface Filter {
  id: number;
  name: string;
}

export interface Match {
  id: number;
  league: string;
  date: string;
  time: string;
  team1: string;
  team2: string;
}
