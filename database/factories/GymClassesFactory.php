<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GymClasses>
 */
class GymClassesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        return [
            'name' => fake()->name(),
            'description' => fake()->paragraph(20),
            'fee' => fake()->randomDigit(1111),
            'class_time' => fake()->time('H:i:s') . " to " . fake()->time('H:i:s'),
        ];
    }
}
