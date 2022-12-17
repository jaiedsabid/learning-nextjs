// Local imports.
import { HeadMeta, Layout } from '../components';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

// Styles
import utilStyles from '../styles/utils.module.scss';

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <HeadMeta
                title="Home"
                description="Home page of my portfolio site."
            />
            <section className={utilStyles.headingMd}>
                <p>
                    I’m currently working as a Software Developer at a foreign
                    Company. I graduated with a BSc in Computer Science &
                    Engineering from American International
                    University-Bangladesh (AIUB) in 2021. I am a passionate
                    learner who is always willing to learn new technologies, and
                    I love to explore and work with new technologies to solve
                    real-life problems. <br />
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p>
            </section>
            {/* Posts */}
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
