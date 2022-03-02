



        const destinasi = async () =>{
          let response = await fetch (
              'https://621eeb9d849220b1fca4bccf.mockapi.io/destinasi1',
              {
                  method: 'GET',
                  
              });
              console.log(response);
      
              let data = await response.json();
              data.forEach(element => {
                  document.getElementById('container1').innerHTML+=`
                  <div class="col">
                  <div class="card h-100">
                    <img src="${element.foto}" class="card-img-top" alt="mata jitu" width="400" height="250">
                    <div class="card-body">
                      <h5 class="card-title">${element.title}</h5>
                      <p class="card-text">${element.deskripsi}</p>
                    </div>
                    <div class="card-footer">
                    </div>
                  </div>
                </div>
                  `
              })
          }
          destinasi();

      
          const destinasi2 = async () =>{
            let response = await fetch (
                'https://621eeb9d849220b1fca4bccf.mockapi.io/destinasi2',
                {
                    method: 'GET',
                    
                });
                console.log(response);
        
                let data = await response.json();
                data.forEach(element => {
                    document.getElementById('container2').innerHTML+=`
                    <div class="col">
                    <div class="card h-100">
                      <img src="${element.foto}" class="card-img-top" alt="mata jitu" width="400" height="250">
                      <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.deskripsi}</p>
                      </div>
                      <div class="card-footer">
                      </div>
                    </div>
                  </div>
                    `
                })
            }
            destinasi2();
        