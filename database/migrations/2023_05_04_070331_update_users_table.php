<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends  Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasColumn('last_name', 'users')) {
            Schema::table('users', static function (Blueprint $table) {
                $table->string('last_name');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasColumn('last_name', 'users')) {
            Schema::table('users', static function (Blueprint $table) {
                $table->dropColumn('last_name');
            });
        }
    }
};
