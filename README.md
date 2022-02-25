# typescript-utils-study

## TODO
- typedoc
    直接将entry设置为src/index.ts会忽略未导出的内容，因此在使用前需要先生成d.ts进行处理，再进行导出
    考虑使用 @microsoft/api-extractor / microbundle 先行生成d.ts