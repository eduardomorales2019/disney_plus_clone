// =================
let movies = [
  {
    name: "falcon and the winter Soldier",
    des: "Falcon y Winter Soldier, Falcon y el Soldado de Invierno en Latinoamerica, sigue la historia de Sam Wilson y Bucky Barnes tras los acontecimientos de Vengadores: Endgame, donde deben lidiar con el legado de poder llegar a ser el nuevo Capitán América , Steve Rogers ha dejado atrás su papel de superhéroe tras entregar las gemas del infinito a su correspondiente línea temporal, otorgando así su escudo a Falcon. Sin embargo, éste no está muy de acuerdo de seguir su legado porque cree que solo hay un Capitán América y es él Aunque su relación nunca han sido de mejores amigos, Falcon y el Soldado de Invierno deben luchar juntos contra una nueva amenaza, mientras también deben lidiar con sus problemas personales, como es el caso de Bucky y sus pesadillas por su pasado",

    image: "./images/slider 2.png",
  },
  {
    name: "loki",
    des: "Loki es una serie que gira en torno al Dios del Engaño de Marvel y que retoma su historia justo después de cuando éste se hace con el Teseracto en Vengadores: Endgame, la última película de la Fase 3 del Universo Cinematográfico de Marvel.Tras este acontecimiento, Loki se encuentra con la Agencia de Variación Temporal (AVT), una organización burocrática que existe fuera del tiempo y el espacio, obligado a responder por sus crímenes que realizó contra la línea del tiempo y le da una opción: Ser eliminado de la realidad o ayudar a atrapar una amenaza aún mayor.En esta nueva organización del universo Marvel, Loki conoce a Mobius, un agente de la AVT que le salva de su destino cuando le da la oportunidad de unirse a él para dar caza a una persona que intenta acabar con la Sagrada Línea Temporal, no sin antes mostrarle el futuro que tenía el Loki original y que éste desconoce totalmente.",

    image: "./images/slider 1.png",
  },
  {
    name: "Wanda Vision",
    des: "WandaVision, Bruja Escarlata y Visión en España, sigue la historia de Bruja Escarlata. En un principio, la vimos como una supervillana miembro de la Hermandad de Mutantes. Esta superheroína, que se convirtió en miembro de Los Vengadores, posee poderes para cambiar la realidad de varias formas no específicas además de ser una gran hechicera.La serie sigue en concreto la historia de Bruja Escarlata y Visión que se encuentran dentro de una constante sitcom, desde la edad de oro de la televisión hasta hoy día. Pasando asi por todos los elementos de comedia de una serie de este tipo mientras se intenta aclarar que es lo que le ha pasado a Wanda Maximoff y a Visión tras los acontecimientos de Vengadores: Endgame.",

    image: "./images/slider 3.png",
  },
  {
    name: "raya",
    des: "Ambientada en el sudeste asiático, la cinta sigue la historia de Raya, una niña de un gran espíritu aventurero que vive en un reino llamado Kumandra. Este lejano y recóndito territorio está habitado por una civilización milenaria. Cinco son los clanes que forman esta tierra conocida como la del dragón y Raya, con el objetivo de devolver el equilibrio a su tierra, será la encargada de encontrar al último de los dragones en la mayor aventura de su vida.",

    image: "./images/slider 4.png",
  },
  {
    name: "luka",
    des: "Ambientada en un precioso pueblo italiano costero (está claramente inspirada en los pueblos de la zona conocida como Cinque Terre), esta historia de convivencia entre lugareños y monstruos marinos parece una metáfora sobre la inmigración. Quizás en algunos aspectos es demasiado amable, pero está claro que estamos hablando de una película de animación dirigida a los pequeños y las pequeñas y ello hace que el mensaje siempre se simplifique. En cuanto a la animación, no es de las más destacadas de la compañía ni mucho menos, es más bien simple pero efectista, sobre todo en el colorido, pero la aventura es bastante entretenida.",

    image: "./images/slider 5.png",
  },
];

// =================

const carousel = document.querySelector(".carousel");
console.log(carousel);
// creaamos un array para almacenar los slides.
let sliders = [];
// index del slide, siempre en 0
let slideIndex = 0;

// funcion  que crea slides.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //=================--> creating Dome elements  . as  the one we create manually

  const slide = document.createElement("div");
  const imgElement = document.createElement("img");
  const content = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  //!=================-->  now I m attach all elements.

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));

  content.appendChild(h1);
  content.appendChild(p);

  slide.appendChild(content);
  slide.appendChild(imgElement);

  carousel.appendChild(slide);
  //=================--> setting up images  Source
  imgElement.src = movies[slideIndex].image;
  slideIndex++; // important to set  the increase value in 1. if not the carrousel not  go as plan.

  //!=================--> setting elements className
  slide.className = "slider";
  content.className = "slide_content";
  h1.className = "movie-title";
  p.className = "movie-description";

  // we must push  the slide elemeny wo the slider.
  sliders.push(slide);
  console.log(sliders);

  // addding slideng effect.
  try {
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}%  - ${
        30 * (sliders.length - 2)
      }px  )`;
    }
  } catch (error) {}
};

for (let i = 0; i < 5; i++) {
  createSlide();
}
try {
  setInterval(() => {
    createSlide();
  }, 3000);
} catch (error) {
  console.log(error);
}

//!=================--> TO PLAY DE VIDEOS.

const videoCards = [...document.querySelectorAll(".video-card")]; // cojiendo todos los selectores. de video-cards para poder iterarlos despues

console.log(videoCards, "Soy video Cards");

//

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // al poner el mouse se empize a ejecutar el video.
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1]; // al quitar el hover se ejecuta la pausa
    video.pause();
  });
});
