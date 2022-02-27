const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    // transform: {
    //     '^.+\\.tsx$': 'babel-jest',
    //     '^.+\\.ts$': 'babel-jest',
    // },
    setupFiles: [
        // 前置操作
        // '<rootDir>/jest.init.js',
    ],
    collectCoverageFrom: [
        'src/**/!(*.d).{js,jsx,ts,tsx}',
    ],
    testRegex: "(/__tests__/.*|(\\.|/))(test|spec)\\.[jt]sx?$"
}

export default config;
