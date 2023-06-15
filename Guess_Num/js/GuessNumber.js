export default class GuessNumber {
    
  constructor(app){
      
      this.app = app;
      this.randomNumber = Math.round(Math.random() * 15);
      this.sendBtn = this.app.querySelector("#button-send");
      this.screen = this.app.querySelector("#screen");
      this.input = this.app.querySelector("#entryField");
      
      this.sendBtn.addEventListener("click", ()=>{
          this.checkGuess();
      });
  
  }

  init(){
      console.log(this.randomNumber);
      this.bubble("Я загадал число от 1 до 15", "left");
  }

  bubble(message, cls){
      const block = document.createElement("div");
      block.classList.add("bubble");
      block.classList.add(cls);
      block.innerHTML = message;

      this.screen.append(block);
  }

  checkGuess(){
      const answer = parseInt(this.input.value);
      const hiddenNumber = parseInt(this.randomNumber);
      this.bubble(answer, "right");

      if (answer < hiddenNumber){
          this.bubble("Больше", "left");
      }
      else if (answer > hiddenNumber){
          this.bubble("Меньше", "left");
      }
      else if (answer == hiddenNumber){
          this.bubble("Тебе повезло, ты выиграл", "left");
      }
      else {
          this.bubble("Попробуй ещё", "left")
      }
  }

}