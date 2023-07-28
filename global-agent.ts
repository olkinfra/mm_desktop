import { getEnv, setEnv } from './utils';

const env = getEnv('GLOBAL_AGENT_');

setEnv('GLOBAL_AGENT_HTTP_PROXY', env('HTTP_PROXY'));
setEnv('GLOBAL_AGENT_HTTPS_PROXY', env('HTTPS_PROXY'));
setEnv('GLOBAL_AGENT_NO_PROXY', env('NO_PROXY'));

require('global-agent').bootstrap();
 

