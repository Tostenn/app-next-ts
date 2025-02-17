export interface IFood {
    name: string;
    calories: number
    carbohydrates: number
    protein: number
    sugar?: number
    fat?: number
    fiber?: number
    vitamins?: string[]
    minerals?: string[]
}

export interface IFoodReduced {
    value: string;
    label: string;
}

export interface IMacronutrientData {
    name: 'carbohydrates' | 'protein' | 'fat';
    value: number;
}