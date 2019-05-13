
      new Vue({
          el: '#crud' ,
          created: function(){
              this.getKeeps();
          },
          data: {
               nombres: [],
               puestos: []
          },
          methods:{
              getKeeps: function(){
                  var urlKeeps = 'tasks';
                  axios.get(urlKeeps).then(response =>{
                      this.nombres = response.data
                  });
                  var urlKeepss = 'tasks';
                  axios.get(urlKeepss).then(response =>{
                      this.puestos = response.data
                  });
              }
          }
      });