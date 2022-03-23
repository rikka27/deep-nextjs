import {
    GetStaticPaths,
    GetStaticPathsContext,
    GetStaticProps,
    GetStaticPropsContext,
    NextPage,
} from 'next';
import React from 'react';

const Post: NextPage<{ ctx: GetStaticPropsContext }> = ({ ctx }) => {
    return (
        <div>
            <h1>post</h1>
            <pre>{JSON.stringify(ctx, null, 4)}</pre>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async (
    ctx: GetStaticPathsContext
) => {
    console.log(ctx);

    return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (
    ctx: GetStaticPropsContext
) => {
    return { props: { ctx } };
};

export default Post;
