import Head from 'next/head';

const HeadMeta = ({ title, description }) => {
    return (
        <Head>
            <title>{title} | Jaied Al Sabid</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default HeadMeta;
