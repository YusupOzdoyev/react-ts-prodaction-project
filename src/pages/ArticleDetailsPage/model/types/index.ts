import { ArticleDetailesCommentSchema } from './ArticleDetailesCommentSchema';
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailesCommentSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
