import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
	typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
	key: "persist",
	storage: sessionStorage,
});

export const loginAtom = atom({
	key: "login",
	default: {
		username: "",
	},
	effects_UNSTABLE: [persistAtom],
});
