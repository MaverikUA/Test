export class Ajax {
    constructor(url) {
      this.url = url;
    }
  
    put(data, successCallback) {
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', this.url);
      xhr.setRequestHeader('Content-Type', 'application/json');
  
      xhr.send(JSON.stringify(data));
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 || xhr.status === 201) {
            successCallback(xhr.response);
          } else {
            console.error(xhr.response);
            alert('Error!');
          }
        }
      }
    }
  }