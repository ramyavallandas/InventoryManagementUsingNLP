import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category.module'; // Assuming you have a model for Category

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = '/categories'; // Endpoint URL

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  // getCategoryById(id: number): Observable<Category> {
  //   return this.http.get<Category>(`${this.baseUrl}/${id}`);
  // }
  //
  // createCategory(category: Category): Observable<Category> {
  //   return this.http.post<Category>(this.baseUrl, category);
  // }
  //
  // updateCategory(id: number, category: Category): Observable<Category> {
  //   return this.http.put<Category>(`${this.baseUrl}/${id}`, category);
  // }
  //
  // deleteCategory(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/${id}`);
  // }
}
