import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageRecommendationReducer } from './articleDetailsPageRecommendationsSlice';
import { articleDetailesCommentsReducer } from './ArticleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationReducer,
    comments: articleDetailesCommentsReducer,
});
