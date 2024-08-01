const SubmitEmail = () => {
  return ( 
    <form  className="gap-2 flex flex-col items-center w-full max-w-screen-sm mx-auto justify-center">
      <label id="form" className="font-bold text-2xl">Quero automatizar meu WhatsApp</label>
      <input
        type="email" 
        placeholder="Seu melhor e-mail"
        className="p-4 rounded-md border px-6 text-xl w-full border-primary"
      />
      <button className="p-8 py-4 text-xl bg-primary text-background font-bold rounded-md">
        Automatizar
      </button>
    </form>
  );
}
 
export default SubmitEmail;