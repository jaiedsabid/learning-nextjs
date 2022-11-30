import Head from 'next/head';

// Local imports.
import { siteTitle } from '../../utils/constants';

const HeadMeta = ({ title, description }) => {
    return (
        <Head>
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="og:title" content={siteTitle} />
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
        </Head>
    );
};

export default HeadMeta;
