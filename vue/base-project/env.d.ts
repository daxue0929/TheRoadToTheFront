/// <reference types="vite/client" />
declare module '*.vue' {
    import type {DefineComponent} from 'vue';
    const component:DefineComponent<{},{},any>
    export default component;
}

type ElementUIPlusSize = import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;


class UserInfo {
    username: string
    password: string
    code: string
    uuid: string
}