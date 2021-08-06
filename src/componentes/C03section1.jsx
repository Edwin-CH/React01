import React from 'react'

const C03section1 = () => {
      return (
            <div>
<section className="row bg-primary"> 


<article className="col-md-6 bg-danger"> 
                <hr />
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/5vbDC1s/galeria1.jpg" className="d-block w-100" alt="galeria 1"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Nissan Skyline GTR34</h5>
        <p>Uno de los autos legendarios de la marca, para tu dia a dia.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/TRCC0RV/galeria2.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Nissan GTR 35 Yokohama Build</h5>
        <p>Un auto puro de competicion, lleva las prestaciones del R35 al maximo.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/gRRpcbH/galeria3.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Nissan RCP 92</h5>
        <p>El rediseño de una leyenda de Le Mans, con mas potencia y fiabilidad</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<hr />
<p>Nissan siempre se ha caracterisado por el diseño agresivo de sus coches deportivos y de competicion, un buen rendimiento y la mejor confianza del mercado. Nissan te acompaña en tu dia a dia con los mejores autos de su historia a un precio razonable, es el momento de adquirir tu NISSAN.</p>
</article>


  <article class="col-md-3 bg-dark">
                <hr/>
    <div className="card" style={{width: "19rem"}}>
    <img src="https://i.ibb.co/PN1PbDZ/NISMO.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">NISMO</h5>
    <p className="card-text">Nismo es la división de automovilismo y de tuning de Nissan Motor Company. Se creó en 1984 como resultado de la fusión de dos departamentos deportivos.</p>
    <a href="#" className="btn btn-primary">Me interesa</a>
          </div>
          </div>
          <hr />
    </article>


  <aside class="col-md-2 bg-primary">

    <hr />
        <h3>Taller nissan</h3>
    <hr/>
    <img src="https://i.ibb.co/x21Lv0k/taller.jpg"  className="img-fluid img-thumbnail" alt="taller" />
    <hr />
    <p>Tienes problemas con tu unidad nissan, nuestros taller solucionaran tu problema y potenciaran la vida de tu coche.</p>
    <hr />
    <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Video demostrativo</button>

<div class="offcanvas offcanvas-top" tabindex="1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
<div class="offcanvas-header">
  <h5 id="offcanvasTopLabel"><iframe width="560" height="315" src="https://www.youtube.com/embed/a25rwwXJnKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></h5>
  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
  ...
</div>
</div>

<hr/>

<button class="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Guia de nuestros talleres</button>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
<div class="offcanvas-header">
  <h5 id="offcanvasTopLabel"><iframe width="560" height="315" src="https://www.youtube.com/embed/yKX1OtB-tKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></h5>
  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
  ...
</div>
</div>
<hr/>

          </aside>
    </section>
            </div>
      )
}

export default C03section1
