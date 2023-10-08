package com.nlp.inventory.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1")
public class AlexaSkillController {

    @Autowired
    ObjectMapper objectMapper;

    @PostMapping("newItem")
    String addNewItem(
            @RequestBody Object body
    ) {
        try {
            var message = objectMapper.writeValueAsString(body);
            System.out.println(message);
        } catch (JsonProcessingException e) {
            System.out.println("Error while parsing the request body");
            throw new RuntimeException(e);
        }
        return "Item added successfully";
    }
}
