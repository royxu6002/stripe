let baseUrl;
let devUrl = 'http://online.comlibra.com/';
let prodUrl = 'http://online.comlibra.com/';
process.env.NODE_ENV === "development"? baseUrl = devUrl : baseUrl = prodUrl;
export default { baseUrl };