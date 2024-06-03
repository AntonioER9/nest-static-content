import { BannerModelNull } from '../models/banner.model';
export const BannerService = jest.fn().mockReturnValue({
  findByFlag: jest.fn().mockResolvedValue(BannerModelNull),
});
