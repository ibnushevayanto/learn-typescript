// ! Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal): void => {
  let speed: number = 0;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      break;
  }

  console.log("Speed", animal.type, speed);
};

moveAnimal({ type: "horse", runningSpeed: 1000 });
moveAnimal({ type: "bird", flyingSpeed: 50 });
