import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta(){
  return [
    {
      title: 'GuitarLA - Sobre Nosotros',
      description: 'Venta de guitarras, blog de música.'
    }
  ]
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div>
          <p>
            Aliquam volutpat eleifend suscipit. Nulla tincidunt, mauris at
            ultricies luctus, leo nibh fringilla eros, at viverra nibh lectus
            accumsan nisl. Fusce commodo, tellus non volutpat varius, purus diam
            aliquet eros, non ultrices massa ipsum sit amet neque. Pellentesque
            suscipit faucibus volutpat. Nunc dignissim massa eget faucibus
            cursus. Etiam vestibulum vestibulum sapien, id venenatis neque
            eleifend sed. Vivamus nisl est, porta quis lacus id, tempor
            tincidunt velit. Donec a felis lacinia, laoreet nisl nec, porttitor
            eros.
          </p>

          <p>
            Aliquam volutpat eleifend suscipit. Nulla tincidunt, mauris at
            ultricies luctus, leo nibh fringilla eros, at viverra nibh lectus
            accumsan nisl. Fusce commodo, tellus non volutpat varius, purus diam
            aliquet eros, non ultrices massa ipsum sit amet neque. Pellentesque
            suscipit faucibus volutpat. Nunc dignissim massa eget faucibus
            cursus. Etiam vestibulum vestibulum sapien, id venenatis neque
            eleifend sed. Vivamus nisl est, porta quis lacus id, tempor
            tincidunt velit. Donec a felis lacinia, laoreet nisl nec, porttitor
            eros.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
