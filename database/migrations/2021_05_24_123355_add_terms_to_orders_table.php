<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTermsToOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->date('due_date')->after('created_at')->nullable();
            $table->date('delivery_date')->after('created_at')->nullable();
            $table->string('price_term')->nullable();
            $table->string('payment_term')->after('payment_method')->nullable();
            $table->unsignedBigInteger('invoice_no')->after('user_id')->nullable();
            $table->string('from')->nullable();
            $table->string('to')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn([
                'due_date', 
                'delivery_date', 
                'price_term', 
                'payment_term', 
                'invoice_no', 
                'from', 
                'to'
            ]);
        });
    }
}
