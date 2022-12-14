import Link from 'next/link';

// Local Imports.
import { Image } from '../index';
import { classNames } from '../../utils/util-functions';
import styles from './layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';

const name = 'Jaied Al Sabid';

const Layout = ({ children, home }) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={classNames(
                                utilStyles.borderCircle,
                                utilStyles.objectCover
                            )}
                            height={144}
                            width={144}
                            alt=""
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={classNames(
                                    utilStyles.borderCircle,
                                    utilStyles.objectCover
                                )}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">??? Back to home</Link>
                </div>
            )}
        </div>
    );
};

export default Layout;
