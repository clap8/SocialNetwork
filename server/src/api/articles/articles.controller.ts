//////////////////////////////////////////////////////////////////////////////////////////////
// ARTICLES CONTROLLER
//////////////////////////////////////////////////////////////////////////////////////////////
import _ from 'lodash';
import express, { Request } from 'express';
import AuthGuard from '@lib/auth-guard/auth-guard';
//--------------------------------------------------------------------------------------------
import { APIError, APICodes, HttpStatus } from '@api/common/utils/api-error';
import { Article } from './models/article.model';
import { CreateArticleDto, UpdateArticleDto } from './dto/articles.dto';
//--------------------------------------------------------------------------------------------

interface IGetArticleInfoRequest extends Request {
  _article?: any;
};

let router = express.Router();

//
// [GET /] - get all articles with paginate
//
router.get('/', async (req, res) => {
  const { page = 1, perPage = 10 } = req.query;
  
  let options = {
    sort: { created: -1 },
    populate: 'author',
    page: page,
    limit: perPage
  };

  let articles = await Article.paginate({}, options);
  res.json(articles);
});

//
// [POST /] - create a new article
//
router.post('/', AuthGuard(), async (req, res) => {
  let data = new CreateArticleDto(req.body);

  const article = new Article(data);
  article.slug = await article.generateSlug();
  article.author = req.user;

  let articleCreated = await article.save();
  res.json(articleCreated);
});

//
// [UPDATE /:articleId] - update an existing article
//
router.put('/:articleId', AuthGuard([{ role: 'user', when: isOwner }, { role: 'admin' }]), async (req: IGetArticleInfoRequest, res) => {
  let data = new UpdateArticleDto(req.body);

  let article = _.extend(req._article, data);
  article.slug = await article.generateSlug();

  let articleSaved = await article.save();
  res.json(articleSaved);
});

//
// [GET /:articleId] - get one article
//
router.get('/:articleId', async (req: IGetArticleInfoRequest, res) => {
  return res.json(req._article);
});

//
// [REMOVE /:articleId] - remove article
//
router.get('/:articleId', AuthGuard([{ role: 'admin' }]), async (req: IGetArticleInfoRequest, res) => {
  let deletedArticle = await Article.remove(req._article);
  res.json(deletedArticle);
});

//
// [PARAM articleId] - preload article by id when :articleId catch
//
router.param('articleId', async (req: IGetArticleInfoRequest, res, next, id) => {
  let article = await Article.findById(id);
  if (!article) {
    throw new APIError('Article not found', APICodes.ENTITY_NOT_FOUND, HttpStatus.BAD_REQUEST, true);
  }

  req._article = article;
  next();
});

export default router;

//--------------------------------------------------------------------------------------------
// SUB-ROUTINES IF NEEDED
//--------------------------------------------------------------------------------------------
function isOwner(req) {
  return (req._article && req._article.author == req.user.id);
};