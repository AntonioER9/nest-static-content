import { ConnectionOptions, Options, SeederOptions } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const connOptions: ConnectionOptions = {
  host: process.env.DB_HOST ?? '',
  port: process.env.DB_PORT ? Number.parseInt(process.env.DB_PORT, 10) : 5432,
  dbName: process.env.DB_NAME ?? '',
  user: process.env.DB_USERNAME ?? '',
  password: process.env.DB_PASSWORD ?? '',
};

const entitiesOptions = { entities: ['./**/*.entity.js'], entitiesTs: ['./**/*.entity.ts'] };

const schemaGeneratorOptions = { disableForeignKeys: false, ignoreSchema: ['CustomBaseEntity', 'BaseEntity'] };

const seederOptions: SeederOptions = {
  path: './db/seeders',
  defaultSeeder: 'DatabaseSeeder',
  glob: '!(*.d).{js,ts}',
  emit: 'ts',
};

const ormOptions: Options = {
  type: 'postgresql',
  allowGlobalContext: true,
  ...connOptions,
  ...entitiesOptions,
  schemaGenerator: schemaGeneratorOptions,
  seeder: seederOptions,
  debug: (process.env.DB_LOG && process.env.DB_LOG == 'true') || false,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
};

export default ormOptions;
