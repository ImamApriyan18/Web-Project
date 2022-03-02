const tourPaket = async () =>{
    let response = await fetch (
        'https://621eeb9d849220b1fca4bccf.mockapi.io/paketTour',
        {
            method: 'GET',
            
        });
        console.log(response);

        let data = await response.json();
        data.forEach(element => {
            document.getElementById('get-paket').innerHTML+=`
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a>
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src="${element.foto}"
                                    alt="gambar 1" />
                            </div>
                            <div class="text-container">
                                <h6>${element.namapaket}</h6>
                                <p class="justify-content-between">
                                    Rp. ${element.harga} / Orang
                                </p>
                                <a type="button" class="btn btn-primary" href="${element.link}">FOR DETAIL</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            
            `
        })
    }
    tourPaket();
