const CookieSSR = () => {
  return (
    <form method="GET">
      <input type="text" name="name" placeholder="Nombre" />
      <input type="number" name="age" placeholder="Edad" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default CookieSSR;