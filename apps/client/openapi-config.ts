import { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'http://localhost:5000/docs-json',
  apiFile: './src/shared/api/baseApi.ts',
  apiImport: 'baseApi',
  outputFile: './src/shared/api/generated.ts',
  exportName: 'generatedApi',
  hooks: true,
};

export default config;
