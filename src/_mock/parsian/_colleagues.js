import { _mock } from '../_mock';

export const _carouselColleagues = [...Array(5)].map((_, index) => ({
  id: _mock.id(index + 1),
  avatarUrl: _mock.image.colleagues(index + 1),
}));
