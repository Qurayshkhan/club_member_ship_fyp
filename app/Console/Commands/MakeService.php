<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MakeService extends Command
{
    protected $signature = 'make:service {name}';
    protected $description = 'Create a service class';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $name = $this->argument('name');
        $serviceClassName = $name;
        $serviceFilePath = app_path("Services/{$serviceClassName}.php");

        if (File::exists($serviceFilePath)) {
            $this->error("Service class {$serviceClassName} already exists.");
            return;
        }

        File::put($serviceFilePath, $this->generateServiceClass($serviceClassName));

        $this->info("Service class created: {$serviceClassName}");
    }

    protected function generateServiceClass($name)
    {
        // You can customize the repository class template here
        return "<?php\n\nnamespace App\Services;\n\nclass {$name}\n{\n
        public function __construct()
        {
            // Constructor logic goes here
        }

        // Your repository logic goes here
    }\n";
    }
}
