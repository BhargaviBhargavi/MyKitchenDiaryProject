package com.thekitchendiaries.thekitchendiaries.repository;

import com.thekitchendiaries.thekitchendiaries.model.Recipes;
//import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipes, Integer> {
    @Query("select l from Recipes l where l.recipe_Name like %?1%")
    List<Recipes> getSearch(String name);
}
