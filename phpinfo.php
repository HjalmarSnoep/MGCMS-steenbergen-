<?php
echo(__FILE__);
echo "<br>";
echo exec('whoami'); // we need to use 777 write and execute... to be able to write there.

// Show all information, defaults to INFO_ALL
phpinfo();

// Show just the module information.
// phpinfo(8) yields identical results.
phpinfo(INFO_MODULES);

?>