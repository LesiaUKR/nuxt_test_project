import { newsData } from '../../data/news';

export default defineEventHandler((event) => {
 
  const id = parseInt(event.context.params.id);
  
  const newsItem = newsData.find(item => item.id === id);
  
  if (!newsItem) {
    throw createError({
      statusCode: 404,
      statusMessage: 'News article not found'
    });
  }
  
  return newsItem;
});