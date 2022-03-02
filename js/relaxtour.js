const relaxtour = async () =>{
    let response = await fetch (
        'https://621f8b37ce99a7de19408c94.mockapi.io/relaxtour',
        {
            method: 'GET',
            
        });
        console.log(response);

        let data = await response.json();
        data.forEach(element => {
            document.getElementById('container1').innerHTML+=`
            <div class="col">
                    <div class="card h-100">
                        <img src="${element.foto}"
                            class="card-img-top" alt="Boat" width="448" height="280">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                        </div>
                    </div>
                </div>
            `
        })
    }
    relaxtour();


    const relaxtour2 = async () =>{
        let response = await fetch (
            'https://621f8b37ce99a7de19408c94.mockapi.io/relaxtour',
            {
                method: 'GET',
                
            });
            console.log(response);
    
            let data = await response.json();
            data.forEach(element => {
                document.getElementById('container2').innerHTML+=`
                <div class="col">
                        <div class="card h-100">
                            <img src="${element.foto}"
                                class="card-img-top" alt="Boat" width="448" height="280">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                            </div>
                        </div>
                    </div>
                `
            })
        }
        relaxtour2();
    