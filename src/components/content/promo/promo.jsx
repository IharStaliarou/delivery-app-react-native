import BeansLogo from '../../beans-logo/beans-logo';

import './promo.scss';
import './../../styles/heading.scss';

const Promo = () => {
    return (
        <section className='promo'>
            <div className="container">
                <div className="promo-block">
                    <h1 className="heading heading-main">Everything You Love About Coffee</h1>
                    <BeansLogo />
                    <span>We makes every day full of energy and taste</span>
                    <span>Want to try our beans?</span>
                    <button className="promo-btn">More</button>
                </div>
            </div>
        </section>
    )
}

export default Promo;