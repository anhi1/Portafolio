import ObjetoUno from "./ObjetoUno";


export default function HomePage() {
  return (
    <>
      <div className="absolute top-30 left-20 md:top-20 md:left-100 mt-20">
        <h1 className="drop-shadow-md text-primary text-5xl md:text-9xl font-bold">
          <span className="text-2xl md:text-5xl font-normal">Hola,</span>
          <br />Soy Annie
        </h1>
        <p className="text-white font-light mt-8 text-2xl md:text-2xl">Desarrolladora web full Stack junior<br /> Diseñadora gráfica</p>
        <button className="bg-black hover:bg-gray-200 text-white hover:text-gray-600 font-bold py-2 px-4 rounded-lg mt-8">
        <a href="https://github.com/anhi1" target="_blank" rel="noopener noreferrer" >
          Mi perfil de GitHub
        </a>
        </button>
      </div>

      <ObjetoUno />
      
    </>
  );
}
