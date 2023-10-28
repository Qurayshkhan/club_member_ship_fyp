<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MakeRepository extends Command
{
    protected $signature = 'make:repository {name}';
    protected $description = 'Create a repository class';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $name = $this->argument('name');
        $repositoryClassName = $name;
        $repositoryFilePath = app_path("Repositories/{$repositoryClassName}.php");

        if (File::exists($repositoryFilePath)) {
            $this->error("Repository class {$repositoryClassName} already exists.");
            return;
        }

        File::put($repositoryFilePath, $this->generateRepositoryClass($repositoryClassName));

        $this->info("Repository class created: {$repositoryClassName}");
    }

    protected function generateRepositoryClass($name)
    {
        // You can customize the repository class template here
        return "<?php\n\nnamespace App\Repositories;\n\nclass {$name}\n{\n
        public function __construct()
        {
            // Constructor logic goes here
        }

        // Your repository logic goes here
    }\n";
    }
}
