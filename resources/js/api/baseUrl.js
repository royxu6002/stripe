let baseUrl;
let devUrl =   'http://shop.comlibra.cn/';
let prodUrl =  'http://shop.comlibra.cn/';
process.env.NODE_ENV === "development"? baseUrl = devUrl : baseUrl = prodUrl;
export default { baseUrl };