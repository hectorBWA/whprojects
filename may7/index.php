<?php
    $first = 'hector';
    $last = 'zavala';
    $a2 = 10;
    $b = 25;
    $c = $a2 + $b;
    $d = 'black';
    ?>


<?php
    $x = 5;
    function test($myVar){
        echo "The value of x is: " . $myVar;
    }
    test($x);
    
    function test2(){
        global $y;
        $y = 75;
    }
    test2();
    echo $y;
?>
