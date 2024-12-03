
import { Dispatch, SetStateAction } from "react";
import { IFood } from "../types";

type useFoodParam = {
    formRef: {
        current: HTMLFormElement | undefined |null;
    };
    setLoading: Dispatch<SetStateAction<boolean>>;
    setNotFound: Dispatch<SetStateAction<boolean>>;
    setPosSearch: Dispatch<SetStateAction<any>>;
    setFood: Dispatch<SetStateAction<IFood[]|undefined>>;
};

export async function useFood({ formRef, setLoading, setPosSearch, setFood, setNotFound }: useFoodParam) {
    if (!formRef.current) return
    const form = new FormData(formRef.current);

    if (form.get("option") && form.get("search")) {
        setLoading(true);

        const option = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                option: form.get("option"),
                search: form.get("search"),
            }),
        };
        await fetch("/api/food/search", option)
            .then((e) => e.json())
            .then((e) => {
                setLoading(false);
                console.log(e);
                if (e.length) {
                    e = Array.from(e);
                    setPosSearch("active");
                    setFood(e);
                    setNotFound(false);
                } else {
                    setFood([]);
                    console.log(e.length);
                    setNotFound(true);
                    setPosSearch("");
                }
            });
    }
}