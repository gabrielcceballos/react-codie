
export interface ICartItem {
    id: number,
    name: string
}

export interface ICart {
    items: ICartItem[]
}

export interface ICartAction {
    type: 'GeItems' | 'NewItem' | 'DeleteItem',
    payload:  ICartItem[] | number | ICartItem
} 