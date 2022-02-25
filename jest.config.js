export default {
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx$': 'babel-jest',
        '^.+\\.ts$': 'babel-jest',
    },
    setupFiles: [
        // 前置操作
        // '<rootDir>/jest.init.js',
    ],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
    ],
}