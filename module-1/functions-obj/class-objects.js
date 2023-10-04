class Animal {
  
  constructor(name, mainColor, sound) {
    this.name = name;
    this.mainColor = mainColor;
    this.sound = sound;
  }

  sleep() {
    console.log(`${this.name} is sleeping zzzzZZZzz`);
  }
  
  scream(intensity) {
    console.log(`The "${this.name}" is making a sound: ${this.sound} ${'!'.repeat(intensity)}`);
  }

}

class Fish extends Animal {
  constructor(name, mainColor, sound) {
    super(name,mainColor, sound);
  }

  sleep() {
    console.log(`${this.name} never sleeps hehe`);
  }
}

const lion = new Animal('Lion','orange','RWAAAAARRR');
const elephant = new Animal('Elephant', 'gris','HHIIIUUUJJJ');
const shark = new Fish('Shaun the Shark', 'gris', 'blup blup');

lion.sleep();
elephant.sleep();
shark.sleep();
// shark.scream(10);