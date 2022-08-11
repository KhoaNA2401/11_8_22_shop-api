import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopService } from './service/shop/shop.service';
import { ShopController } from './apis/shop/shop.controller';

@Module({
  imports: [],
  controllers: [AppController, ShopController],
  providers: [AppService, ShopService],
})
export class AppModule {}
