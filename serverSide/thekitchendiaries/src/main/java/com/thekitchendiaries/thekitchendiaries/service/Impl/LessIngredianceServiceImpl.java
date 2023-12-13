// package com.Thekitchendiaries.Thekitchendiaries.Service.Impl;

// import com.Thekitchendiaries.Thekitchendiaries.Model.LessIngrediance;
// import com.Thekitchendiaries.Thekitchendiaries.Repository.LessIngredianceRepository;
// import com.Thekitchendiaries.Thekitchendiaries.Service.LessIngredianceService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class LessIngredianceServiceImpl implements LessIngredianceService {
//     @Autowired
//     LessIngredianceRepository lessIngredianceRepository;

//     @Override
//     public LessIngrediance create(LessIngrediance lessIngrediance) {
//         return lessIngredianceRepository.save(lessIngrediance);
//     }

//     @Override
//     public List<LessIngrediance> getAllLessIngrediance() {
//         return lessIngredianceRepository.findAll();
//     }

//     @Override
//     public LessIngrediance getOneLessIngrediance(Integer id) {
//         return lessIngredianceRepository.findById(id).get();
//     }

//     @Override
//     public LessIngrediance update(LessIngrediance lessIngrediance) {
//         return lessIngredianceRepository.save(lessIngrediance);
//     }

//     @Override
//     public String deleteLessIngrediance(Integer id) {
//         lessIngredianceRepository.deleteById(id);
//         return "Recipe Details are deleted";
//     }

//     @Override
//     public List<LessIngrediance> getSearch(String name) {
//         return lessIngredianceRepository.getSearch(name);
//     }

// }
