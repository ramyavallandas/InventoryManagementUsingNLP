package com.nlp.inventory.service;

import com.nlp.inventory.model.Product;
import com.nlp.inventory.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    public ProductService(ProductRepository productRepository) {
    }

    public List<Product> getAllProducts() {
        return null;
    }

    // CRUD methods here
}

