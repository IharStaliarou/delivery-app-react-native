import CoffeeList from "../../coffee-list/coffee-list";

import "./our-best.scss";

const OurBest = () => {
    return (
        <section className="our-best">
            <div className="container">
                <h2 className="our-best__title">Our best</h2>
                <CoffeeList />
            </div>
        </section>
    )
}

export default OurBest;