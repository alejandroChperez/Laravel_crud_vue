
      new Vue({
          el: '#crud',
          created: function(){
              this.getKeeps();
          },
          data: {
               keeps: []
              // puestos: []
          },
          methods: {
              getKeeps: function(){
                  var urlKeeps = 'tasks';
                  axios.get(urlKeeps).then(response => {
                      this.keeps = response.data
                  });
             /*     var urlKeepss = 'tasks';
                  axios.get(urlKeepss).then(response =>{
                      this.puestos = response.data
                  });  */
              }
          }
      });