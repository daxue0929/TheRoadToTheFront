
import useUserStore from "./modules/user";

export default function useStore(): any {
    return {
        userStore: useUserStore(),
    };
}