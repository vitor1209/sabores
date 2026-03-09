import type React from "react"

type SidebarItemComum = {
    titulo: string
    icone?: React.ReactNode
    funcionalidades?: string[]
}

export type SidebarItem =
    | (SidebarItemComum & {
          to?: never
          itens: SidebarItem[]
      })
    | (SidebarItemComum & {
          itens?: never
          to: string
      })

export interface SidebarProps {
    /**
     * @default 300
     */
    largura?: number
    header?: React.ReactNode
    conteudo: SidebarItem[]
    footer?: React.ReactNode
}

export interface ItemProps {
    title: string
    icon?: React.ReactNode
    to: string
    espacamentoEsquerda: number
}

export type ItemsMapperProps = SidebarItem & {
    espacamentoEsquerda?: number
    rotaAtiva: string
}
