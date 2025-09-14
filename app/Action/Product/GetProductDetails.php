<?php

namespace App\Action\Product;

use App\Models\Product;

class GetProductDetails
{
    public function __invoke():array

    {

        $products = Product::query()
            ->select(['product_name', 'product_price', 'product_qty', 'product_description'])
            ->get();

        return [
            'status' => 200,
            'product_details' => $products,
        ];



    }

}
