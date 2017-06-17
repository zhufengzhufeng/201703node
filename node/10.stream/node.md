## 可读流
- on('data') on('end') on('error') .pause() .resume()
## 可写流
- write end  on('drain')

> 被http 例如request response 都是流



## gulp 基于流的


## 不关心文件整体有多大，可以控制速率，只关心读到的内容。有方向的（拷贝，读一点写一点，不会淹没内存）