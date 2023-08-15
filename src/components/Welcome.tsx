import './Welcome.scss';

export default function WelcomeSection(){
  return(
    <div className="hero-body-container">
      <div className="hero-content-container">
        <div className="text-hero-container">
          <h1>Bienvenid@ a mi sitio</h1>
          <p>Esta es una nueva version de mi portfolio, en el mismo puedes encontrar un breve resumen de mi perfil, mis proyectos realizados y algunas funciones adaptadas, como un contador de vistas y la posibilidad de llenar un formulario que al completarlo te envia una copia a tu correo electronico.<br/>Cada vez que recibo una visita el sitio me lo notifica mediante un correo electronico con fecha y hora exacta en la cual se genera una visita, tiene una funciona de espera para evitar el envio masivo de notificaciones en caso de que se refresque la pagina (1hs).<br/>El sitio esta echo con React para el front-end y con Laravel para el back-end, al igual que varios proyectos que ralice.</p>
        </div>
        <div className="hero-image-container">
        </div>
      </div>
    </div>
  )
}