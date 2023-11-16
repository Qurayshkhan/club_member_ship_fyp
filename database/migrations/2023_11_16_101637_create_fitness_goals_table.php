<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fitness_goals', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->nullable()
                ->constrained()
                ->cascadeOnUpdate()
                ->cascadeOnUpdate();
            $table->string('goal')->nullable();
            $table->double('initial_weight')->nullable();
            $table->double('target_weight')->nullable();
            $table->dateTime('start_date');
            $table->dateTime('target_date');
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
        Schema::dropIfExists('fitness_goals');
    }
};
