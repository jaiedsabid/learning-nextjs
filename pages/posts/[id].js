import React from 'react';
import { HeadMeta, Layout, Date } from '../../components';
import { getAllPostIds, getPostData } from '../../lib/posts';

// Styles
import utilStyles from '../../styles/utils.module.scss';

const Post = ({ postData }) => {
    return (
        <>
            <HeadMeta title={postData.title} description={postData.title} />
            <Layout>
                <article>
                    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                    <div className={utilStyles.lightText}>
                        <Date dateString={postData.date} />
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />
                </article>
            </Layout>
        </>
    );
};

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default Post;
