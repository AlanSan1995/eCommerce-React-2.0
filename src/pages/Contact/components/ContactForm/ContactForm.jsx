import "./ContactForm.css";

function ContactForm() {
  return (
    <form className='ContactForm'>
      <div className='ContactInputGroup'>
        <label>Nombre</label>
        <input type='text' placeholder='Ingrese su nombre' />
      </div>
      <div className='ContactInputGroup'>
        <label>Apellido</label>
        <input type='text' placeholder='Ingrese su apellido' />
      </div>
      <div className='ContactInputGroup'>
        <label>Email</label>
        <input type='text' placeholder='Ingrese su email' />
      </div>
      <div className='ContactInputGroup'>
        <label>Mensaje</label>
        <textarea placeholder='Ingrese un mensaje'></textarea>
      </div>
      <div className='ContactSendButton'>
        <button>Enviar</button>
        <span>¡Gracias por tu Mensaje!</span>
      </div>
    </form>
  );
}

export default ContactForm;
