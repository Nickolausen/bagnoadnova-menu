export type Dish = {
    dishName: string,
    price: number,
    description?: string
}

export type Menu = {
    id: string,
    antipasti: Dish[],
    primi: Dish[],
    secondi: Dish[],
    insalate: Dish[],
    dolci: Dish[]
}