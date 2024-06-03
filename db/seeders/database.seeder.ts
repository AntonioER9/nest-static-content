import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { FlagsSeeder } from './common/flags.seeder';
import { RelatedTopicsParisSeeder } from './flags/cl/paris/related-topics.seeder';
import { TechnicalServicesBrandsParisSeeder } from './flags/cl/paris/technical-services-brands.seeder';
import { TechnicalServicesTypesSeeder } from './common/technical-services-types.seeder';
import { TechnicalServicesParisSeeder } from './flags/cl/paris/technical-services.seeder';
import { BannersEasySeeder } from './flags/cl/easy/banners.seeder';
import { BannersJumboSeeder } from './flags/cl/jumbo/banners.seeder';
import { BannersParisSeeder } from './flags/cl/paris/banners.seeder';
import { BannersSisaSeeder } from './flags/cl/sisa/banners.seeder';
import { BannersWongSeeder } from './flags/pe/wong/banners.seeder';
import { ContactChannelJumboSeeder } from './flags/cl/jumbo/contact-channels.seeder';
import { FootersSpidSeeder } from './flags/cl/spid/footers.seeder';
import { FootersSisaSeeder } from './flags/cl/sisa/footers.seeder';
import { FootersParisSeeder } from './flags/cl/paris/footers.seeder';
import { FootersJumboSeeder } from './flags/cl/jumbo/footers.seeder';
import { FootersEasySeeder } from './flags/cl/easy/footers.seeder';
import { FaqsWongSeeder } from './flags/pe/wong/faqs.seeder';
import { FaqsEasySeeder } from './flags/cl/easy/faqs.seeder';
import { FaqsParisSeeder } from './flags/cl/paris/faqs.seeder';
import { FaqsJumboSeeder } from './flags/cl/jumbo/faqs.seeder';
import { RrssJumboSeeder } from './flags/cl/jumbo/rrss.seeder';
import { RrssParisSeeder } from './flags/cl/paris/rrss.seeder';
import { RrssSpidSeeder } from './flags/cl/spid/rrss.seeder';
import { RrssSisaSeeder } from './flags/cl/sisa/rrss.seeder';
import { RrssEasySeeder } from './flags/cl/easy/rrss.seeder';
import { RrssWongSeeder } from './flags/pe/wong/rrss.seeder';
import { SocialMediaParisSeeder } from './flags/cl/paris/social-media.seeder';
import { SocialMediaJumboSeeder } from './flags/cl/jumbo/social-media.seeder';
import { SocialMediaEasySeeder } from './flags/cl/easy/social-media.seeder';
import { SocialMediaSisaSeeder } from './flags/cl/sisa/social-media.seeder';
import { SocialMediaSpidSeeder } from './flags/cl/spid/social-media.seeder';
import { InfoMessagesParisSeeder } from './flags/cl/paris/info-messages.seeder';
import { InfoMessagesJumboSeeder } from './flags/cl/jumbo/info-messages.seeder';
import { InfoMessagesSisaSeeder } from './flags/cl/sisa/info-messages.seeder';
import { InfoMessagesSpidSeeder } from './flags/cl/spid/info-messages.seeder';
import { InfoMessagesWongSeeder } from './flags/pe/wong/info-messages.seeder';
import { PaymentMethodParisSeeder } from './flags/cl/paris/payment-methods.seeder';
import { PaymentMethodJumboSeeder } from './flags/cl/jumbo/payment-methods.seeder';
import { PaymentMethodEasySeeder } from './flags/cl/easy/payment-methods.seeder';
import { PaymentMethodSisaSeeder } from './flags/cl/sisa/payment-methods.seeder';
import { PaymentMethodSpidSeeder } from './flags/cl/spid/payment-methods.seeder';
import { MostPopularsParisSeeder } from './flags/cl/paris/most-populars.seeder';
import { MostPopularsJumboSeeder } from './flags/cl/jumbo/most-populars.seeder';
import { MostPopularsEasySeeder } from './flags/cl/easy/most-populars.seeder';
import { MostPopularsSpidSeeder } from './flags/cl/spid/most-populars.seeder';
import { MostPopularsSisaSeeder } from './flags/cl/sisa/most-populars.seeder';
import { MostPopularsWongSeeder } from './flags/pe/wong/most-populars.seeder';
import { ServicesParisSeeder } from './flags/cl/paris/services.seeder';
import { ServicesJumboSeeder } from './flags/cl/jumbo/services.seeder';
import { ServicesEasySeeder } from './flags/cl/easy/services.seeder';
import { ServicesSisaSeeder } from './flags/cl/sisa/services.seeder';
import { ServicesSpidSeeder } from './flags/cl/spid/services.seeder';
import { ServicesWongSeeder } from './flags/pe/wong/services.seeder';
import { PrefootersCategoryParisSeeder } from './flags/cl/paris/prefooters-category.seeder';
import { PrefootersCategoryJumboSeeder } from './flags/cl/jumbo/prefooters-category.seeder';
import { PrefootersCategoryEasySeeder } from './flags/cl/easy/prefooters-category.seeder';
import { PrefootersCategorySisaSeeder } from './flags/cl/sisa/prefooters-category.seeder';
import { PrefootersCategorySpidSeeder } from './flags/cl/spid/prefooters-category.seeder';
import { PrefootersCategoryWongSeeder } from './flags/pe/wong/prefooters-category.seeder';
import { PrefootersSubcategoryParisSeeder } from './flags/cl/paris/prefooters-subcategory.seeder';
import { PrefootersSubcategoryJumboSeeder } from './flags/cl/jumbo/prefooters-subcategory.seeder';
import { PrefootersSubcategoryEasySeeder } from './flags/cl/easy/prefooters-subcategory.seeder';
import { PrefootersSubcategorySisaSeeder } from './flags/cl/sisa/prefooters-subcategory.seeder';
import { PrefootersSubcategorySpidSeeder } from './flags/cl/spid/prefooters-subcategory.seeder';
import { PrefootersSubcategoryWongSeeder } from './flags/pe/wong/prefooters-subcategory.seeder';
import { HelpCategoryEasySeeder } from './flags/cl/easy/help-category.seeder';
import { HelpCategoryParisSeeder } from './flags/cl/paris/help-category.seeder';
import { HelpCategoryJumboSeeder } from './flags/cl/jumbo/help-category.seeder';
import { HelpCategorySisaSeeder } from './flags/cl/sisa/help-category.seeder';
import { HelpCategorySpidSeeder } from './flags/cl/spid/help-category.seeder';
import { HelpCategoryWongSeeder } from './flags/pe/wong/help-category.seeder';
import { HelpContentParisSeeder } from './flags/cl/paris/help-content.seeder';
import { HelpContentJumboSeeder } from './flags/cl/jumbo/help-content.seeder';
import { HelpContentEasySeeder } from './flags/cl/easy/help-content.seeder';
import { HelpContentSisaSeeder } from './flags/cl/sisa/help-content.seeder';
import { HelpContentSpidSeeder } from './flags/cl/spid/help-content.seeder';
import { HelpContentWongSeeder } from './flags/pe/wong/help-content.seeder';
import { DeliveryCostTypeSeederParis } from './flags/cl/paris/delivery-cost-type.seeder';
import { DeliveryCostTypeSeederJumbo } from './flags/cl/jumbo/delivery-cost-type.seeder';
import { DeliveryCostLocationTypeSeeder } from './others/delivery-cost-location-type.seeder';
import { DeliveryCostLocationSeeder } from './others/delivery-cost-location.seeder';
import { DeliveryCostLocationClosureSeeder } from './others/delivery-cost-location-closure.seeder';
import { SocialMediaWongSeeder } from './flags/pe/wong/social-media.seeder';
import { PaymentMethodWongSeeder } from './flags/pe/wong/payment-methods.seeder';
import { ArticleEvaluationOptionEasySeeder } from './flags/cl/easy/article-evaluation-option.seeder';
import { ArticleEvaluationOptionParisSeeder } from './flags/cl/paris/article-evaluation-option.seeder';
import { ArticleEvaluationOptionJumboSeeder } from './flags/cl/jumbo/article-evaluation-option.seeder';
import { ArticleEvaluationOptionSisaSeeder } from './flags/cl/sisa/article-evaluation-option.seeder';
import { ArticleEvaluationOptionSpidSeeder } from './flags/cl/spid/article-evaluation-option.seeder';
import { ArticleEvaluationOptionWongSeeder } from './flags/pe/wong/article-evaluation-option.seeder';

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    return this.call(em, [
      FlagsSeeder,
      FootersSpidSeeder,
      FootersSisaSeeder,
      FootersParisSeeder,
      FootersJumboSeeder,
      FootersEasySeeder,
      MostPopularsParisSeeder,
      MostPopularsJumboSeeder,
      MostPopularsEasySeeder,
      MostPopularsSpidSeeder,
      MostPopularsSisaSeeder,
      MostPopularsWongSeeder,
      HelpCategoryParisSeeder,
      HelpCategoryJumboSeeder,
      HelpCategoryEasySeeder,
      HelpCategorySisaSeeder,
      HelpCategorySpidSeeder,
      HelpCategoryWongSeeder,
      HelpContentParisSeeder,
      HelpContentJumboSeeder,
      HelpContentEasySeeder,
      HelpContentSisaSeeder,
      HelpContentSpidSeeder,
      HelpContentWongSeeder,
      PrefootersCategoryParisSeeder,
      PrefootersCategoryJumboSeeder,
      PrefootersCategoryEasySeeder,
      PrefootersCategorySisaSeeder,
      PrefootersCategorySpidSeeder,
      PrefootersCategoryWongSeeder,
      FaqsParisSeeder,
      FaqsJumboSeeder,
      FaqsWongSeeder,
      FaqsEasySeeder,
      PrefootersSubcategoryParisSeeder,
      PrefootersSubcategoryJumboSeeder,
      PrefootersSubcategoryEasySeeder,
      PrefootersSubcategorySisaSeeder,
      PrefootersSubcategorySpidSeeder,
      PrefootersSubcategoryWongSeeder,
      ServicesParisSeeder,
      ServicesJumboSeeder,
      ServicesEasySeeder,
      ServicesSisaSeeder,
      ServicesSpidSeeder,
      ServicesWongSeeder,
      InfoMessagesParisSeeder,
      InfoMessagesJumboSeeder,
      InfoMessagesSisaSeeder,
      InfoMessagesSpidSeeder,
      InfoMessagesWongSeeder,
      BannersEasySeeder,
      BannersJumboSeeder,
      BannersParisSeeder,
      BannersSisaSeeder,
      BannersWongSeeder,
      RrssJumboSeeder,
      RrssParisSeeder,
      RrssSpidSeeder,
      RrssSisaSeeder,
      RrssEasySeeder,
      RrssWongSeeder,
      ContactChannelJumboSeeder,
      PaymentMethodParisSeeder,
      PaymentMethodJumboSeeder,
      PaymentMethodEasySeeder,
      PaymentMethodSisaSeeder,
      PaymentMethodSpidSeeder,
      PaymentMethodWongSeeder,
      SocialMediaParisSeeder,
      SocialMediaJumboSeeder,
      SocialMediaEasySeeder,
      SocialMediaSisaSeeder,
      SocialMediaSpidSeeder,
      SocialMediaWongSeeder,
      RelatedTopicsParisSeeder,
      TechnicalServicesBrandsParisSeeder,
      TechnicalServicesTypesSeeder,
      TechnicalServicesParisSeeder,
      ArticleEvaluationOptionEasySeeder,
      ArticleEvaluationOptionJumboSeeder,
      ArticleEvaluationOptionParisSeeder,
      ArticleEvaluationOptionSpidSeeder,
      ArticleEvaluationOptionSisaSeeder,
      ArticleEvaluationOptionWongSeeder,
      DeliveryCostTypeSeederParis,
      DeliveryCostTypeSeederJumbo,
      DeliveryCostLocationSeeder,
      DeliveryCostLocationTypeSeeder,
      DeliveryCostLocationClosureSeeder,
    ]);
  }
}
