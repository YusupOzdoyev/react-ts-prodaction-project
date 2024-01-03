import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailesComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailesComments?.error;
