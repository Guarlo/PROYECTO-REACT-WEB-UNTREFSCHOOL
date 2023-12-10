import React from "react";
import Section from "./Section";
import "../assets/styles/formContact.css";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mayggoyv");
  if (state.succeeded) {
    return (
      <h3 style={{ marginTop: "10em", marginBottom: "20em" }}>
        Tu consulta ha sido enviada correctamente!
      </h3>
    );
  }
  return (
    <Section
      titulo="Póngase en contacto con nosotros, le responderemos a la brevedad"
      descripcion="Nos encantaría poder ayudarte. Contáctenos si tienes cualquier tipo de duda con respecto al seguro de computadora o celular o la compra de éstos, que componentes poseen, medios de pago y más."
    >
      <form onSubmit={handleSubmit} className="form">
        <input id="name" type="name" name="name" placeholder="Nombre" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Correo electrónico"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" placeholder="Consulta" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Enviar consulta
        </button>
      </form>
    </Section>
  );
}

export default ContactForm;
