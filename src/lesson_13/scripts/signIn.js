import { Ajax } from './ajax';

export class SignInForm {
    constructor(targetElement) {
      this.URL = "https://rest-node-course-api.herokuapp.com/auth/signup";
      this.main = targetElement;
      this.emailInput = document.createElement('input');
      this.passwordInput = document.createElement('input');
      this.nameInput = document.createElement('input');
      this.submit = document.createElement('button');
      this.createLogInForm();

      this.submit.addEventListener("click", this.putItem.bind(this));
    }
  
    createLogInForm() {
      this.emailInput.classList.add('email-input', 'main_item');
      this.passwordInput.classList.add('password-input', 'main_item');
      this.nameInput.classList.add('name-input', 'main_item');
      this.submit.classList.add('submit', 'main_item');
  
      this.emailInput.placeholder = "Email";
      this.passwordInput.placeholder = "Password";
      this.nameInput.placeholder = "Name";
  
      this.emailInput.type = "email";
      this.passwordInput.type = "password";
      this.nameInput.type = "name";
  
      this.submit.innerHTML = "Submit";
  
      this.main.appendChild(this.emailInput);
      this.main.appendChild(this.passwordInput);
      this.main.appendChild(this.nameInput);
      this.main.appendChild(this.submit);
    }
  
    onSuccessSignUp() {
      console.log('asdasd');
    }
  
    putItem() {
        console.log(this);
      const ajaxObj = new Ajax('https://rest-node-course-api.herokuapp.com/auth/signup');
      let putItem = {
        email: this.emailInput.value,
        password: this.passwordInput.value,
        name: this.nameInput.value
      };
      
      ajaxObj.put(putItem, this.onSuccessSignUp);
  
      this.resetFields();
    }
  
    resetFields() {
      this.emailInput.value = "";
      this.passwordInput.value = "";
      this.nameInput.value = "";
    }
  
  }
  
  
  
  