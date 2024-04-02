import { useState } from "react";

const Main = () => {
  const [articulos, setArticulos] = useState([]),
    [form, setForm] = useState({
    }),
    [actual, setActual] = useState([]),
    [categorias, setCategorias] = useState({});

  const handleForm = (event) => {
    setForm({...form, [event.target.name] : event.target.value});
  };

  const handleSubmitCrear = (event) => {
    event.preventDefault();
    setCategorias({ ...categorias, [form.crear]: [] });
    setForm({
        crear: ""
    });
  };

  const handleSubmitArt = (event) => {
    event.preventDefault();
    console.log(categorias);
    setCategorias({ ...categorias,  [heladera]:[form.art] });
    console.log(categorias);
    setForm({
        art: ""
    });
  };

  const handleQuitar = (event) => {
    setArticulos(
      articulos.filter((articulo) => articulo !== event.target.value)
    );
  };

  const handleAgregar = (event) => {
    setActual([...actual, event.target.value]);
  };

  const handleQuitarActual = (event) => {
    setActual(actual.filter((articulo) => articulo !== event.target.value));
  };


  return (
    <main>
      <article className="item">
        <h2>Lista Original</h2>
        <form onSubmit={handleSubmitCrear}>
          <label htmlFor="">Crear categoria</label>
          <input
            type="text"
            name="crear"
            value={form.crear}
            onChange={handleForm}
          />
          <button>Agregar Categoria</button>
          <br />
          
        </form>

        <form onSubmit={handleSubmitArt}>
        <label htmlFor="">Ingrese articulos</label>
          <input
            type="text"
            name="art"
            value={form.art}
            onChange={handleForm}
          />

          <button>Agregar Articulo</button>
        </form>



        {articulos.map((articulo, i) => {
          return (
            <div key={i}>
              <p>{articulo}</p>
              <button value={articulo} onClick={handleAgregar}>
                Agregar
              </button>
              <button value={articulo} onClick={handleQuitar}>
                Quitar
              </button>
            </div>
          );
        })}
      </article>

      <article className="item">
        <h2>Lista actual</h2>

        {actual.map((articulo, i) => {
          return (
            <div key={i}>
              <p>{articulo}</p>
              <button value={articulo} onClick={handleQuitarActual}>
                Quitar
              </button>
            </div>
          );
        })}
      </article>
    </main>
  );
};

export default Main;
