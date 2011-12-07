<?php
require_once 'PHPUnit/Extensions/SeleniumTestCase.php';

class TankTest extends PHPUnit_Extensions_SeleniumTestCase
{
    public $name = 'Tank test';

    function setUp()
    {
        $this->setBrowser("*firefox");
        $this->setBrowserUrl("http://vtk.tom.ru/");
    }

    public function testTank()
    {
        $this->open("/#test");
        $this->type("nick", rand(1000, 9999));
        $this->click('//input[@value="Войти"]');
        sleep(1);
        $this->type('name', rand(1000, 9999));
        $this->click('//input[@value="Создать"]');
        sleep(1);
        $this->click('//input[@value="Старт!"]');
        sleep(30);

    }
}
