import { JwtModuleOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export const getJwtConfig = async (
  config: ConfigService,
): Promise<JwtModuleOptions> => ({
  secret: config.get('JWT_SECRET'),
});
