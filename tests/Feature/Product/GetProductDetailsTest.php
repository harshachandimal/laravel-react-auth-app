<?php

namespace Product;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;


final class GetProductDetailsTest extends TestCase
{
    use RefreshDatabase;

    public function test_get_all_product_details()
    {
        $product = Product::factory()->create();

        $response = $this->get('api/get-product-details');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'product_details'
        ]);

        $response->assertSimilarJson([
            'status' => 200,
            'product_details' => [
                [
                    'product_name' => $product->product_name,
                    'product_price' => (string)$product->product_price,
                    'product_qty' => $product->product_qty,
                    'product_description' => $product->product_description,
                ]
            ]
        ]);


    }

}
