class ToggleButton {
  constructor(button, heading, counter) {
    this.count = 0;
    this.elementCounter = document.querySelector(counter);
    this.heading = document.querySelector(heading); // document.querySelector('h1'); => <h1 class="important class2 class3">Hello World</h1>
    this.elementButton = document.querySelector(button); // document.querySelector('#toggle-button'); => <button id="toggle-button">Toggle Class</button>
    
    this.onClickButton = this.onClickButton.bind(this);
    this.elementButton.addEventListener('click', this.onClickButton);

  }

  onClickButton(event) {
    console.log(event);
    // alert(`Click! ${this.button}`)
    this.heading.classList.toggle('red');
  }
}

new ToggleButton('#toggle-button','h1', 'h1 span');