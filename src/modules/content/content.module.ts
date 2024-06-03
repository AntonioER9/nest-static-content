import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Flag } from '../flags/entities/flag.entity';
import { Faq } from './faqs/entities/faq.entity';
import { FaqController } from './faqs/faqs.controller';
import { FaqService } from './faqs/faqs.service';
import { Footer } from './footers/entities/footer.entity';
import { FooterController } from './footers/footers.controller';
import { FooterService } from './footers/footers.service';
import { InfoMessage } from './info-messages/entities/info-message.entity';
import { InfoMessagesController } from './info-messages/info-messages.controller';
import { InfoMessagesService } from './info-messages/info-messages.service';
import { HelpCategory } from './help-category/entities/help-category.entity';
import { HelpCategoryController } from './help-category/help-category.controller';
import { HelpCategoryService } from './help-category/help-category.service';
import { MostPopular } from './most-populars/entities/most-populars.entity';
import { MostPopularsController } from './most-populars/most-populars.controller';
import { MostPopularsService } from './most-populars/most-populars.service';
import { PrefooterCategory } from './prefooters/entities/prefooter-category.entity';
import { PrefooterSubcategory } from './prefooters/entities/prefooter-subcategory.entity';
import { PrefooterController } from './prefooters/prefooters.controller';
import { PrefooterService } from './prefooters/prefooters.service';
import { HelpContent } from './help-category/entities/help-content.entity';
import { Service } from './services/entities/service.entity';
import { ServiceController } from './services/services.controller';
import { ServiceService } from './services/services.service';
import { BannerController } from './banners/banners.controller';
import { BannerService } from './banners/banners.service';
import { Banner } from './banners/entities/banner.entity';
import { Rrss } from './rrss/entities/rrss.entity';
import { RrssController } from './rrss/rrss.controller';
import { RrssService } from './rrss/rrss.service';
import { ContactChannel } from './contact-channels/entities/contact-channel.entity';
import { ContactChannelsController } from './contact-channels/contact-channels.controller';
import { ContactChannelsService } from './contact-channels/contact-channels.service';
import { PaymentMethod } from './payment-methods/entities/payment-methods.entity';
import { PaymentMethodController } from './payment-methods/payment-methods.controller';
import { PaymentMethodService } from './payment-methods/payment-methods.service';
import { SocialMedia } from './social-media/entities/social-media.entity';
import { SocialMediaController } from './social-media/social-media.controller';
import { SocialMediaService } from './social-media/social-media.service';
import { RelatedTopicsController } from './related-topics/related-topics.controller';
import { RelatedTopicsService } from './related-topics/related-topics.service';
import { RelatedTopics } from './related-topics/entities/related-topics.entity';
import { TechnicalServiceBrand } from './technical-services/entities/technical-service-brand.entity';
import { TechnicalService } from './technical-services/entities/technical-service.entity';
import { TechnicalServiceType } from './technical-services/entities/technical-service-type.entity';
import { TechnicalServiceService } from './technical-services/technical-services.service';
import { TechnicalServiceController } from './technical-services/technical-services.controller';
import { SearchHistoryController } from './search-history/search-history.controller';
import { SearchHistoryService } from './search-history/search-history.service';
import { AdapterSearchModule } from 'modules/services/adapter-search/adapter-search.module';
import { CencoNavController } from './cenco-nav/cenco-nav.controller';
import { CencoNavService } from './cenco-nav/cenco-nav.service';
import { DeliveryCostController } from './delivery-cost/delivery-cost.controller';
import { DeliveryCostService } from './delivery-cost/delivery-cost.service';
import { DeliveryCostLocation } from 'modules/content/delivery-cost/entities/delivery-cost-location.entity';
import { DeliveryCostLocationType } from './delivery-cost/entities/delivery-cost-location-type.entity';
import { ArticleEvaluationOption } from './article-evaluation/entities/article-evaluation-option.entity';
import { ArticleEvaluationController } from './article-evaluation/article-evaluation.controller';
import { ArticleEvaluationService } from './article-evaluation/article-evaluation.service';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [
        Flag,
        Footer,
        MostPopular,
        Service,
        PrefooterCategory,
        PrefooterSubcategory,
        HelpCategory,
        HelpContent,
        Faq,
        InfoMessage,
        Banner,
        Rrss,
        ContactChannel,
        PaymentMethod,
        SocialMedia,
        RelatedTopics,
        TechnicalServiceBrand,
        TechnicalService,
        TechnicalServiceType,
        ArticleEvaluationOption,
        DeliveryCostLocation,
        DeliveryCostLocationType,
      ],
    }),
    AdapterSearchModule,
  ],
  controllers: [
    FooterController,
    FaqController,
    MostPopularsController,
    PrefooterController,
    ServiceController,
    HelpCategoryController,
    InfoMessagesController,
    BannerController,
    RrssController,
    ContactChannelsController,
    PaymentMethodController,
    SocialMediaController,
    RelatedTopicsController,
    TechnicalServiceController,
    SearchHistoryController,
    ArticleEvaluationController,
    CencoNavController,
    DeliveryCostController,
  ],
  providers: [
    FooterService,
    FaqService,
    MostPopularsService,
    PrefooterService,
    ServiceService,
    HelpCategoryService,
    InfoMessagesService,
    BannerService,
    RrssService,
    ContactChannelsService,
    PaymentMethodService,
    SocialMediaService,
    RelatedTopicsService,
    TechnicalServiceService,
    SearchHistoryService,
    ArticleEvaluationService,
    CencoNavService,
    DeliveryCostService,
  ],
})
export class ContentModule {}
