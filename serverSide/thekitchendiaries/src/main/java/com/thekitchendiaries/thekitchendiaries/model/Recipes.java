package com.thekitchendiaries.thekitchendiaries.model;

import jakarta.persistence.*;

@Entity
public class Recipes {
     @Id
     @GeneratedValue(strategy = GenerationType.AUTO)
     private int recipe_id;
     @Column
     private String recipe_Name;
     @Column
     private String recipe_image;
     @Column
     private int rating;

     public int getRecipe_id() {
          return recipe_id;
     }

     public void setRecipe_id(int recipe_id) {
          this.recipe_id = recipe_id;
     }

     public String getRecipe_Name() {
          return recipe_Name;
     }

     public void setRecipe_Name(String recipe_Name) {
          this.recipe_Name = recipe_Name;
     }

     public String getRecipe_image() {
          return recipe_image;
     }

     public void setRecipe_image(String recipe_image) {
          this.recipe_image = recipe_image;
     }

     public int getRating() {
          return rating;
     }

     public void setRating(int rating) {
          this.rating = rating;
     }
}
