import {EntityType} from "../enums/EntityType";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import {posts} from "../fixtures/posts";
import {comments} from "../fixtures/comments";

type Param = IComment | IPost;

export const getStoredEntity = (type: EntityType): Param[] => {
    const storedEntity = localStorage.getItem(type);
    let entityRes = [];

    if (type === EntityType.posts) {
        entityRes = posts;
    }

    if (type === EntityType.comments) {
        entityRes = comments;
    }

    if (typeof storedEntity === 'string') {
        entityRes = JSON.parse(storedEntity);
    }

    return entityRes;
};