package com.thekitchendiaries.thekitchendiaries.service;

import com.thekitchendiaries.thekitchendiaries.model.Recipes;
// import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RecipeService {
    public Recipes create(Recipes recipes);
    public List<Recipes> getAllRecipes();
    public Recipes getOneRecipes(Integer id);
    public Recipes update(Recipes recipes);
    public String deleteRecipes(Integer id);
    public List<Recipes> getSearch(String name);
}
