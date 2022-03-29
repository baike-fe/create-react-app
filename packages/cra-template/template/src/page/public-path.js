export const isDev = () => {
    // webpack会在打包时匹配 process.env.NODE_ENV 并替换为一个常量
    // https://webpack.js.org/guides/production/#root
    return process.env.NODE_ENV === "development";
};

export const isOtp = () => {
    return window.location.href.indexOf("otp") > -1;
};

const cdn = "//baike.bdimg.com";
const repoName = "wiki-react-editor";
const appName = "app-react";
__webpack_public_path__ = (() => {
    if (isDev()) {
        return "";
    }
    if (isOtp()) {
        return `/static/${repoName}/${appName}/`;
    }
    return `${cdn}/static/${repoName}/${appName}/`;
})();
