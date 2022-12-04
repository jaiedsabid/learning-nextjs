import React from 'react';
import { HeadMeta, Layout } from '../../components';
import { getAllPostIds, getPostData } from '../../lib/posts';

const Post = ({ postData }) => {
    return (
        <>
            <HeadMeta title={postData.title} description={postData.title} />
            <Layout>
                {postData.title}
                <br />
                {postData.id}
                <br />
                {postData.date}
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
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default Post;
