import {
    GET_ALL_RECIPE_FAILURE,
    GET_ALL_RECIPE_REQUEST,
    GET_ALL_RECIPE_SUCCESS,
    
    GET_SEARCH_RECIPE_FAILURE,
     GET_SEARCH_RECIPE_REQUEST,
    GET_SEARCH_RECIPE_SUCCESS,
    
  } from "./actionType";
  
  export const initState = {
    recipeData: [],
    error: "",
    loading: false,
    searchData: [],
    requestedRecipe: []
  };
  
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case GET_ALL_RECIPE_REQUEST :
        return {
          ...state,
          loading: true,
          error: "",
        };
      case GET_ALL_RECIPE_FAILURE :
        return {
          ...state,
          loading: false,
          error: "Something went wrong",
        };
      case GET_ALL_RECIPE_SUCCESS :
        return {
          ...state,
          error: "",
          loading: false,
          recipeData: action.payload,
        };
        



        case GET_SEARCH_RECIPE_REQUEST :
        return {
          ...state,
          loading: true,
          error: "",
        };
      case GET_SEARCH_RECIPE_FAILURE :
        return {
          ...state,
          loading: false,
          error: "Something went wrong",
        };
      case GET_SEARCH_RECIPE_SUCCESS :
        return {
          ...state,
          error: "",
          loading: false,
          recipeData: action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default reducer;
  
  
