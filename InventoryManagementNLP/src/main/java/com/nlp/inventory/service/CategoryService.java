package com.nlp.inventory.service;

import com.nlp.inventory.model.Category;
import com.nlp.inventory.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//@Service
//public class CategoryService {
//
//
//    public List<Category> getAllCategories() {
//        return categoryRepository.findAll();
//    }
//
//    public List<Category> getAllCategories() {
//        return null;
//    }
//
//    public Category getCategoryById(Long id) {
//        return categoryRepository.findById(id).orElse(null);
//    }
//
//    public Category addCategory(Category category) {
//        return categoryRepository.save(category);
//    }
//
//    public Category updateCategory(Long id, Category category) {
//        if (categoryRepository.existsById(id)) {
//            category.getId(id);
//            return categoryRepository.save(category);
//        }
//        return null;
//    }
//
//    public void deleteCategory(Long id) {
//        categoryRepository.deleteById(id);
//    }
//    // CRUD methods here
//}


@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    // Add other CRUD methods like save, delete, findById, etc.
}


