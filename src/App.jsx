import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "./components/MyCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header title="Adopta un Perrito" />
      </div>

      <div className="Tarjetas">
        <MyCard
          img="https://static.wixstatic.com/media/db516d_8ce0a3ab3c2342938ff8f5c419be17f8~mv2_d_3702_2832_s_4_2.jpg/v1/fill/w_640,h_504,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/db516d_8ce0a3ab3c2342938ff8f5c419be17f8~mv2_d_3702_2832_s_4_2.jpg"
          title="Peludin"
          texto="Los cotones pueden tener un tacto suave y también esponjoso, sin embargo, son más como el velcro, ya que se pegarán a su lado donde quiera que vaya. Eso es porque lo único que desea este canino es estar cerca de su dueño."
          text="Cotón De Tulear"
          color="primary"
        />
        <MyCard
          img="https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP3159414A-h-o.webp"
          title="Richy"
          texto="Los Dachshunds o perro salchicha, como se les conoce popularmente, son animales muy activos y enérgicos, aunque también son bastante independientes"
          text="Dachshunds"
          color="success"
        />
        <MyCard
          img="https://www.hogarmania.com/archivos/201809/alaskan-malamute-caracteristicas-ficha-1280x720x80xX.jpg"
          title="Reina"
          texto="El Alaskan Malamute o Malamute de Alaska es un perro originario de la zona ártica (Alaska, EEUU), y se trata de una de las razas más antiguas y cercanas al lobo dentro de la categoría de perros de trineo y nieve."
          text="Malamute"
          color="warning"
        />
        <MyCard
          img="https://t2.ea.ltmcdn.com/es/posts/1/0/1/2_shar_pei_25101_1_orig.jpg"
          title="Arrugas"
          texto="Es de origen asiático, pues los datos apuntan a que fue una de las primeras razas de perro que aparecieron en el mar del sur de China. En un principio, el shar pei era utilizado en actividades de caza, pastoreo, como perro de pelea, guardián de propiedades o incluso servía de alimento."
          text="Shar pei"
          color="secondary"
        />
      </div>

      <Footer className="Pie" />
    </>
  );
}
export default App;
