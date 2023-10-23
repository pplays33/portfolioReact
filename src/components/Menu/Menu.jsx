import styles from './Menu.module.scss';
import dev from './assets/image3.png';
import design from './assets/image4.png';

import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <>
            <div className={styles.container_menu}>
                <div className={styles.ferst_item_me}>
                    <div className={styles.img_card}>
                        <img src={design} alt="dev-img" />
                    </div>
                    <div className={styles.about_card}>
                        <Link to='/progect'> Learn my web-dev portfolio → </Link>            
                    </div>
                </div>
                <div className={styles.two_item_me}>
                    <div className={styles.img_card}>
                        <img src={dev} alt="design-img" />
                    </div>
                    <div className={styles.about_card}>
                        <a href='https://www.behance.net/vaimechi' className={styles.href}>Learn my design portfolio →</a>
                    </div>
                </div>
            </div>
        </>
    );
}