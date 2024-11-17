<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShipmentsTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('shipping_mark')->nullable();
            $table->unsignedBigInteger('order_id');
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
            $table->string('delivery_term');
            $table->string('express_tracking_no_if')->nullable();
            $table->string('vessel_if')->nullable();
            $table->string('container_no')->nullable();
            $table->string('seal_no')->nullable();
            $table->date('etd');
            $table->date('eta');
            $table->enum('status', [
                'goods not ready',
                'not shipped',
                'to be shipped',
                'en route',
                'custom clearance',
                'received',
            ]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('shipments', function(Blueprint $table) {
            $table->dropForeign(['order_id']);
        });
        Schema::dropIfExists('shipments');
    }
}
