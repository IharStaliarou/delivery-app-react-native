import Header from "../header/header";
import Promo from "../content/promo/promo";
import OurBest from "../content/our-best/our-best";
import Footer from "../footer/footer";

import './app.scss';

const App =  () => {

    return (
        <div className='app'>
            <Header />
            <Promo />
            <OurBest />
            <Footer />
        </div>
    )
}

export default App;