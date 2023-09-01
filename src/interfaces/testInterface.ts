import { readonly } from "vue"

interface Props {
    isShow: boolean,
    readonly defaultName: string,
    selectable?: string
}

export type { Props }