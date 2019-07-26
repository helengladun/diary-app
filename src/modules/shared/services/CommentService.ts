import {IComment} from "../models/IComment";
import {getStoredEntity} from "../utils/get-stored-entity";
import {EntityType} from "../enums/EntityType";

export class CommentService {
    static getComments(): IComment[] {
        return getStoredEntity(EntityType.comments) as IComment[];
    }

    static addComment(comment: IComment) {
        const comments = getStoredEntity(EntityType.comments) as IComment[];
        const res = comments.concat(comment);
        localStorage.setItem(EntityType.comments, JSON.stringify(res));
        return comment;
    }

    static removeComment(id: number) {
        const comments = getStoredEntity(EntityType.comments) as IComment[];
        const res = comments.filter((item: IComment) => item.id !== id);
        localStorage.setItem('comments', JSON.stringify(res));
        return id;
    }
}