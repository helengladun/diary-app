import { PostService } from '../PostService';
import {EntityType} from "../../enums/EntityType";
import {posts} from "../../fixtures/posts";
import {CommentService} from "../CommentService";

describe('PostService test',  () => {
    const post = {
        id: 10,
        description: 'description',
    };

    const allPostsWithFixtures = posts.concat(post);

    beforeEach(() => {
        localStorage.clear();
    });

    test('getPosts should be success', () => {
        PostService.addPost(post);
        const result = PostService.getPosts();
        expect(result).toEqual(allPostsWithFixtures);
    });

    test('setPosts should be success', () => {
        PostService.addPost(post);
        const result = localStorage.getItem(EntityType.posts);
        expect(result).toEqual(JSON.stringify(allPostsWithFixtures));
    });


    test('removePost should be success', () => {
        PostService.addPost(post);
        PostService.removePost(post.id);
        expect(localStorage.getItem(EntityType.posts)).toEqual(JSON.stringify(posts));
    });

    test('getComments should be success', () => {
        const comment = {
            id: 100,
            description: 'description',
            post_id: 101
        };

        CommentService.addComment(comment);
        const result = PostService.getComments(comment.post_id);
        expect(result).toEqual([comment]);
    });
});
