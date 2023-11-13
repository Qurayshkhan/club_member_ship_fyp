<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class UserMemberShipsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => fake()->randomDigitNot(0),
            'membership_id' => fake()->randomElement([1, 2, 3]),
            'created_at' => fake()->dateTimeBetween("-10 year", '+1 year'),
        ];
    }
}
