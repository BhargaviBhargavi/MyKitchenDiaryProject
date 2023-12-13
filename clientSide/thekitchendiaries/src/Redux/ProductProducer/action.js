import {
    GET_ALL_RECIPE_FAILURE,
    GET_ALL_RECIPE_REQUEST,
    GET_ALL_RECIPE_SUCCESS,
    
    GET_SEARCH_RECIPE_FAILURE,
    GET_SEARCH_RECIPE_REQUEST,
    GET_SEARCH_RECIPE_SUCCESS,
  
    
  } from "./actionType";
  
  import axios from "axios";
  
  export const getAllRecipeRequest = () => ({
    type: GET_ALL_RECIPE_REQUEST,
  });
  
  export const getAllRecipeFailure = (error) => ({
    type: GET_ALL_RECIPE_FAILURE,
    error,
  });
  
  export const getAllRecipeSuccess = (payload) => ({
    type: GET_ALL_RECIPE_SUCCESS,
    payload,
  });
  
  export const getAllRecipe = () => (dispatch) => {
    dispatch(getAllRecipeRequest());
    axios
      .get(`http://localhost:8080/recipes`)
      .then((res) => dispatch(getAllRecipeSuccess(res.data)))
      .catch(() => dispatch(getAllRecipeRequest()));
  };
  


  export const getSearchRecipeRequest = () => ({
    type: GET_SEARCH_RECIPE_REQUEST,
  });
  
  export const getSearchRecipeFailure = (error) => ({
    type: GET_SEARCH_RECIPE_FAILURE,
    error,
  });
  
  export const getSearchRecipeSuccess = (payload) => ({
    type: GET_SEARCH_RECIPE_SUCCESS,
    payload,
  });
  
  export const getSearchRecipe = (data) => (dispatch) => {
    dispatch(getSearchRecipeRequest());
    axios
      .get(`http://localhost:8080/recipes/search?query=${data}`)
      .then((res) => dispatch(getSearchRecipeSuccess(res.data)))
      .catch(() => dispatch(getSearchRecipeRequest()));
  };
  


