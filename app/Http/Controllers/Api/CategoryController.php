<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {

        return Category::has('products')->get();
    }

    public function show(Category $category)
    {
        $category->load('products');
        return $category;
    }

}
