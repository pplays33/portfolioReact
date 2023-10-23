import styles from './Home.module.scss';

import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

export default function Home(){
    return(
        <div className={styles.container}>
            <div className={styles.container_content}>
                <Header />
                <Menu />
            </div>
        </div>
    );
}