import type { SidebarItem } from "./Sidebar.types"

export const TAMANHO_ESPACAMENTO = 6

export const isParentActive = (items: SidebarItem[] | undefined, rotaAtiva: string): boolean => {
    if (!items?.length) return false

    return items.some((item) => {
        if (item.to) {
            const urlSemQueryParams = item.to.replace(/\?.*$/, "")
            return rotaAtiva.startsWith(urlSemQueryParams) && urlSemQueryParams !== "/"
        }

        if (item.itens) {
            return isParentActive(item.itens, rotaAtiva)
        }

        return false
    })
}
