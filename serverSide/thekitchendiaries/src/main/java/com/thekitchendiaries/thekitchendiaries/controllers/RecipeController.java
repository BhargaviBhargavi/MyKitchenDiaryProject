package com.thekitchendiaries.thekitchendiaries.controllers;

import com.thekitchendiaries.thekitchendiaries.model.Recipes;
import com.thekitchendiaries.thekitchendiaries.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
public class RecipeController {


    @Autowired
    RecipeService recipeService;

    @PostMapping("/create")
    public Recipes create(@RequestBody Recipes recipes){

        return recipeService.create(recipes);
    }
    @GetMapping("")
    public List<Recipes> getAllRecipes(){
        return recipeService.getAllRecipes();

    }
    @GetMapping("/{id}")
    public Recipes getOneRecipes(@PathVariable Integer id ){
        return recipeService.getOneRecipes(id);
    }
    @PutMapping("/update")
    public Recipes update(@RequestBody Recipes recipes){
        return recipeService.update(recipes);

    }
    @DeleteMapping("/{id}")
    public String deleteRecipes(@PathVariable Integer id){
        return recipeService.deleteRecipes(id);
    }

    @GetMapping("/search")
    public List<Recipes> getSearch(@RequestParam("query") String name) {
        return recipeService.getSearch(name);
    }
}
