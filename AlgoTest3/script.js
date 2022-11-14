class Message {
    constructor(authorName, sendTime, text) {
      this.authorName = authorName;
      this.sendTime = sendTime;
      this.text = text;
    }
  
    toHtml() {
      const messageBox = document.getElementById("messageBox");
      const p = document.createElement("p");
      p.innerHTML = `${this.sendTime} ${this.authorName}: ${this.text} </b>`;
      messageBox.append(p);
    }
  }
  
  class Messenger {
    constructor() {
      this.messages = [];
    }
  
    show_history() {
      this.messages.shift().toHtml();
    }
  
    send(authorName, text) {
      this.messages.push(new Message(authorName, this.gettime(), text));
    }
  
    gettime() {
      let now = new Date();
      return `${now.getHours()}:${now.getMinutes()}`;
    }
  }
  
  let messenger = new Messenger();
  const inputName = document.getElementById("inputName");
  const inputMessage = document.getElementById("inputMessage");
  const button = document.getElementById("sendButton");
  
  button.addEventListener("click", () => {
    messenger.send(inputName.value, inputMessage.value);
    messenger.show_history();
    inputMessage.value = "";
  });