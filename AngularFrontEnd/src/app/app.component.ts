import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category/category.service';
import { Category } from './category/category.module'; // Assuming you have this model


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Your Frontend App Name';
    categories: Category[] = [];
    selectedCategory?: Category; // for editing or displaying details

    constructor(private categoryService: CategoryService) { }



    categoriesCount: number = 0;

    ngOnInit(): void {
        this.categoryService.getCategories().subscribe(
            data => {
                this.categories = data;
            },
            error => {
                console.error('Error fetching categories:', error);
            }
        );

    }




    showChat: boolean = false; // To toggle the chat window
    userMessage: string = ""; // To hold the user's message

    // Toggle the chat window
    toggleChat() {
        this.showChat = !this.showChat;
    }

    // Send the user's message (you can add logic here to process the message)
    products: any;
    sendMessage() {
        if (this.userMessage.trim()) {
            // Process the user's message
            // For now, just resetting the message
            this.userMessage = "";
        }
    }





}

