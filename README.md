# typescript-utils-study

学习使用typescript完成的一些工具类库，但有限学习使用typescript的一些用法。

## TODO
- 填充TypeScript的基本类型
- typedoc
    直接将entry设置为src/index.ts会忽略未导出的内容，因此在使用前需要先生成d.ts进行处理，再进行导出
    考虑使用 @microsoft/api-extractor / microbundle 先行生成d.ts
- 对Type的测试，验证如何使用TypeScript的类型检查「优先级低」