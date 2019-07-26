import { CommentService } from '../CommentService';
import {comments} from "../../fixtures/comments";
import {EntityType} from "../../enums/EntityType";

describe('CommentService test',  () => {
    const comment = {
        id: 10,
        description: 'description',
        post_id: 10
    };

    beforeEach(() => {
        localStorage.clear();
    });

    test('getComments should be success', () => {
        const allCommentsWithFixtures = comments.concat(comment);

        CommentService.addComment(comment);
        const result = CommentService.getComments();
        expect(result).toEqual(allCommentsWithFixtures);
    });

    test('setComments should be success', () => {
        const allCommentsWithFixtures = JSON.stringify(comments.concat(comment));

        CommentService.addComment(comment);
        const result = localStorage.getItem(EntityType.comments);

        expect(result).toEqual(allCommentsWithFixtures);
    });


    test('removeComment should be success', () => {
        CommentService.addComment(comment);
        CommentService.removeComment(comment.id);

        expect(localStorage.getItem(EntityType.comments)).toEqual(JSON.stringify(comments));
    });
});
