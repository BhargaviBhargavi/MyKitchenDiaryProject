package com.thekitchendiaries.thekitchendiaries.service.Impl;

import com.thekitchendiaries.thekitchendiaries.model.Recipes;
import com.thekitchendiaries.thekitchendiaries.repository.RecipeRepository;
import com.thekitchendiaries.thekitchendiaries.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    RecipeRepository recipeRepository;
    @Override
    public Recipes create(Recipes recipes) {
        return recipeRepository.save(recipes);
    }
    @Override
    public List<Recipes> getAllRecipes(){
        return recipeRepository.findAll();
    }
    @Override
    public Recipes getOneRecipes(Integer id){return recipeRepository.findById(id).get();

    }
    @Override
    public Recipes update(Recipes recipes){return recipeRepository.save(recipes);
    }
    @Override
    public String deleteRecipes(Integer id){recipeRepository.deleteById(id);
        return "Recipe Details are deleted from the database";
    }

    @Override
    public List<Recipes> getSearch(String name) {
        return recipeRepository.getSearch(name);
    }
}
