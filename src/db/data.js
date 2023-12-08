import {AiFillStar} from "react-icons/ai"


const products = [
  {
    img: "./assets/karhu.webp",
    nimi: "Karhu ",
    kategoria: "Olut ",
    hinta: "1.99 ",
    kuvaus: "Kellanruskea, keskitäyteläinen, keskiasteisesti humaloitu, maltainen, kevyen hedelmäinen ",
    koko: " 0.33 ",
    alkoholi: "5,3",
    star: <AiFillStar className="rating-star"/>,
    arvostelu:"(1337)"

},

{
    img: "../assets/jekku.webp ",
    nimi: "Jägermaister ",
    kategoria: "'Liköörit ja Katkerot' ",
    hinta: " 24.90 ",
    kuvaus: "Tummanruskea, keskitäyteläinen, terävä, lääkeyrttinen, kevyen lakritsinen, mausteinen",
    koko: " 0.5 ",
    alkoholi: "5,3",
    star: <AiFillStar className="rating-star"/>,
    arvostelu:"(69)"

},

{
    img: "../assets/leijona.webp ",
    nimi: "Leijona ",
    kategoria: "Vodkat ja Viinat ",
    hinta: "12.49 ",
    kuvaus: "Väritön, kuiva, lämmin, neutraali ",
    koko: "0.5 ",
    alkoholi: "5,3",
    star: <AiFillStar className="rating-star"/>,
    arvostelu:"(323212)"

}
];

export default products;