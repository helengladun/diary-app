import {getStoredEntity} from "../utils/get-stored-entity";
import {IPost} from "../models/IPost";
import {EntityType} from "../enums/EntityType";
import {IComment} from "../models/IComment";

export class PostService {
    static getPosts(): IPost[] {
        return getStoredEntity(EntityType.posts) as IPost[];
    }

    static addPost(post: IPost) {
        const posts = getStoredEntity(EntityType.posts) as IPost[];
        const res = posts.concat(post);
        localStorage.setItem(EntityType.posts, JSON.stringify(res));
        return post;
    }

    static removePost(id: number) {
        const posts = getStoredEntity(EntityType.posts) as IPost[];
        const res = posts.filter((item: IPost) => item.id !== id);
        localStorage.setItem(EntityType.posts, JSON.stringify(res));
        return id;
    }

    static getComments(post_id: number): IComment[] {
        const comments = getStoredEntity(EntityType.comments) as IComment[];
        return comments.filter((item: IComment) => item.post_id === post_id);
    }
}