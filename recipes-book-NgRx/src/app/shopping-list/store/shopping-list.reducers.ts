import { Ingredient } from '../../../../../recipes-book/src/app/shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface AppState {
    shoppingList: State;
}

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

// The initial state
const initialState: State = {
    ingredients: [],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions): State {
    let ingredient: Ingredient, ingredients: Ingredient[];

    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            // Devolveremos un nuevo objeto que represente el estado (inmutabilidad)
            return {
                ...state, // Spread operator, expanding the old state object. Se añaden todas las propiedades del antiguo estado al nuevo.
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = { // Estamos creando un nuevo ingrediente inmutable, con las propiedades que ya tenia el antiguo
                ...ingredient,
                ...action.payload.ingredient // Sobreescribimos con las propiedades que vengan en el nuevo ingrediente.
            };
            ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            ingredients = [...state.ingredients];
            ingredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        case ShoppingListActions.START_EDIT:
            return {
                ...state,
                editedIngredient: {...state.ingredients[action.payload]},
                editedIngredientIndex: action.payload
            };
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        default:
            return state;
    }
}
