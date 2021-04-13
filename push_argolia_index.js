/*
上传 algolia 索引文件
参考：https://www.algolia.com/doc/guides/getting-started/quick-start/tutorials/quick-start-with-the-api-client/javascript/?client=javascript
*/

// For the default version
const algoliasearch = require('algoliasearch');

const appID = "RF9CYMTLK8"
const indexName = "clearblog"
const adminKey = 2b73109c4f48779878c0e143dc031e27
const indexFile = "./public/index.json"

const client = algoliasearch(appID, adminKey);
const index = client.initIndex(indexName);
const indexJson = require(indexFile);

index.saveObjects(indexJson, {
  autoGenerateObjectIDIfNotExist: true
}).then(({ objectIDs }) => {
  console.log(objectIDs);
});