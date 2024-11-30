export interface IFood {
    name: string;
    content: string
}

export interface IFoodReduced {
    value: string;
    label: string;
}

export interface IMacronutrientData {
    name: 'carbohydrates' | 'protein' | 'fat';
    value: number;
}