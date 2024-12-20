import { generateApi } from 'swagger-typescript-api';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import prettier from 'prettier';

dotenv.config();

const PREFIX_URL = 'https://gateway-dev.gachdong.club';

const apis = [
  {
    name: 'club',
    url: `${PREFIX_URL}/club/v3/api-docs`,
    output: 'src/__generated__/club',
  },
  {
    name: 'application',
    url: `${PREFIX_URL}/application/v3/api-docs`,
    output: 'src/__generated__/application',
  },
  {
    name: 'auth',
    url: `${PREFIX_URL}/auth/v3/api-docs`,
    output: 'src/__generated__/auth',
  },
  {
    name: 'user',
    url: `${PREFIX_URL}/user/v3/api-docs`,
    output: 'src/__generated__/user',
  },
  {
    name: 'admin',
    url: `${PREFIX_URL}/admin/v3/api-docs`,
    output: 'src/__generated__/admin',
  },
  {
    name: 'notification',
    url: `${PREFIX_URL}/notification/v3/api-docs`,
    output: 'src/__generated__/notification',
  },
];

async function getPrettierConfig() {
  try {
    const prettierConfig = await prettier.resolveConfig(process.cwd());
    return prettierConfig || {};
  } catch (error) {
    console.warn('Failed to load prettier config, using defaults:', error);
    return {};
  }
}

async function generateApiClient(api: (typeof apis)[0]) {
  try {
    const prettierConfig = await getPrettierConfig();
    const result = await generateApi({
      name: 'swagger.ts',
      output: path.resolve(api.output),
      url: api.url,
      moduleNameFirstTag: true,
      generateClient: true,
      generateRouteTypes: true,
      generateResponses: true,
      unwrapResponseData: true,
      extractRequestParams: true,
      extractRequestBody: true,
      httpClientType: 'fetch',
      prettier: {
        ...prettierConfig,
        parser: 'typescript',
      },
      defaultResponseAsSuccess: false,
      enumNamesAsValues: true,
    });

    console.log(`Successfully generated API client for ${api.url}`);
    return result;
  } catch (error) {
    console.error(`Failed to generate API client for ${api.url}:`, error);
    throw error;
  }
}

async function generateIndexFile() {
  try {
    const indexContent = `// This file is auto-generated. Do not edit manually.
${apis
  .map(
    api => `import * as ${api.name} from './__generated__/${api.name}/swagger';
export { ${api.name} };`
  )
  .join('\n')}
`;

    const prettierConfig = await getPrettierConfig();
    const formattedContent = await prettier.format(indexContent, {
      ...prettierConfig,
      parser: 'typescript',
    });

    const indexPath = path.resolve('src/index.ts');
    fs.writeFileSync(indexPath, formattedContent);
    console.log('Successfully generated index.ts file');
  } catch (error) {
    console.error('Failed to generate index.ts:', error);
    throw error;
  }
}

async function generateAllApis() {
  try {
    const targetApis = process.argv.slice(2);
    let apisToGenerate = apis;

    if (targetApis.length > 0) {
      apisToGenerate = apis.filter(api => targetApis.includes(api.name));
      if (apisToGenerate.length === 0) {
        console.error('지정된 API를 찾을 수 없습니다.');
        process.exit(1);
      }
    }

    await Promise.all(apisToGenerate.map(generateApiClient));
    await generateIndexFile();
    console.log('API 클라이언트 생성이 완료되었습니다.');
  } catch (error) {
    console.error('API 클라이언트 생성 실패:', error);
    process.exit(1);
  }
}

generateAllApis();
