import React from 'react';
import Layout from "./modules/shared/components/Layout/Layout";
import PostsContainer from "./modules/posts/containers/Posts/PostsContainer";

const App: React.FC = () => {
    return (
        <div className="App">
            <Layout>
                <PostsContainer/>
            </Layout>
        </div>
    );
};

export default App;
