let str =  'https://username:password@localhost:8080/a?a=1&b=2#top';
let url = require('url');
let urlObj = url.parse(str,true);//true作用是让query转化成对象
/*let pathname =urlObj.pathname;
let query = urlObj.query;*/
let {pathname,query} = urlObj;
console.log(pathname,query);
/*
 Url {
 protocol: 'https:', 协议
 slashes: true, 是否有//
 auth: 'username:password',
 host: 'localhost:8080',
 port: '8080',
 hostname: 'localhost',
 hash: '#top',
 search: '?a=1&b=2',
 query: 'a=1&b=2',  /([^&=?]+)=([^&=?]+)/
 pathname: '/a',
 path: '/a?a=1&b=2',
 href: 'https://username:password@localhost:8080/a?a=1&b=2#top' }
 */