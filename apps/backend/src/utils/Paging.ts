import { Paging } from 'src/dto/paging.dto';

export const createPaging = (paging: Paging) => {
  const { page = 1, limit = 10 } = paging;

  const where: any = {};

  if (paging.category) {
    where.category = paging.category;
  }

  if (paging.name) {
    where.name = {
      contains: paging.name,
    };
  }

  where.isDeleted = false;

  const skip = (page - 1) * limit;

  return { skip, take: limit, where };
};
