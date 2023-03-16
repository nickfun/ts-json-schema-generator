export type Fish = {
    animal_type: "fish";
    found_in: "ocean" | "river";
};

export type Bird = {
    animal_type: "bird";
    can_fly: boolean;
};

/**
 * @discriminator animal_type
 */
export type Animal = Bird | Fish;

export type MaxAnimal = Animal & {
  name: string;
  age: number;
  happyness: number;
}

const babyBird: MaxAnimal = {
  animal_type: "bird",
  can_fly: false,
  name: "chirpy",
  age: 1,
  happyness: 100
}

const oldShark: MaxAnimal = {
  animal_type: "fish",
  found_in: "ocean",
  name: "grandpa",
  age: 74,
  happyness: 3,
}
