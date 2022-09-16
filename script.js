console.log("JS OK!");

console.log(contacts);

const app = new Vue({
    el: '#app',
    data: {
        contacts,
    }
  })