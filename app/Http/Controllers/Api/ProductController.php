<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return Product::with('categories:id,name,slug')->get();
    }

    public function show(Product $product)
    {
        $product->load('categories:id,name');

        return $product;
    }
}
