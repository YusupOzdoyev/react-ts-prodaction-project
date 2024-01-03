import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticleDetailesCommentSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
