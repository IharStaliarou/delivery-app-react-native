import "./coffee-item.scss";
import solimo from "./img/solimo.png";
import presto from "./img/presto.png";
import aromistico from "./img/aromistico.png";

const coffeeData = [
    {
        src: solimo,
        alt: 'solimo coffee',
        label: 'Solimo Coffee Beans',
        weight: 2,
        price: 10.73,
        id: 1
    },
    {
        src: presto,
        alt: 'presto coffee',
        label: 'Presto Coffee Beans',
        weight: 1,
        price: 15.99,
        id: 2
    },
    {
        src: aromistico,
        alt: 'aromistico coffee',
        label: 'AROMISTICO Coffee',
        weight: 1,
        price: 6.99,
        id: 3
    },
];

const CoffeeItem = () => {

    const products = coffeeData.map(product => {

        return (
            <li key={product.id} className="coffee__item">
                <img className="coffee__item-img" src={product.src} alt={product.alt} />
                <div className="coffee__item__info">
                    <h3 className="coffee__item-title">{product.label} {product.weight}kg</h3>
                    <div className="coffee__item-price">{product.price}$</div>
                </div>
            </li>
        )
    })

    return (
        <>
            {products}
        </>
    )
}

export default CoffeeItem;