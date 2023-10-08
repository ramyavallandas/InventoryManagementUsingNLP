package com.nlp.inventory.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Inventory {
    @Id
    private String name;
    private String category;

    private int cost;
    private int stockcount;
}
