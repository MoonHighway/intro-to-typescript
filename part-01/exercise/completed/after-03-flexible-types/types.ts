export type Destination = {
  id: number;
  name: string;
  country: string;
  description: string;
  local_dishes: string[];
  activities: string[];
};

export type DestinationMetadata = {
  name: string;
  type: string;
  destinationId: number;
};

export type Question = {
  question: string;
  choices: DestinationMetadata[];
};

export type Food = DestinationMetadata & {
  type: "food";
};

export type Activity = DestinationMetadata & {
  type: "activity";
};
