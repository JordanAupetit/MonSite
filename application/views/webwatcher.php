
<h1> Premier test de parsage </h1>

<?php 
	$page1 = file_get_contents( 'http://remixjobs.com/emploi/Developpement/Dev-HTML5-JS-Phonegap-obj-C-Start-up-en-croissance-H-F/22361' );
	$page2 = file_get_contents( 'http://remixjobs.com/emploi/Developpement/Ingenieur-en-developpement-PHP-Symfony-2-H-F/22417' );
	$page3 = file_get_contents( 'http://remixjobs.com/emploi/Developpement/Lead-developpeur-Zend-H-F/22415' );
	$page4 = file_get_contents( 'http://remixjobs.com/emploi/Developpement/Ingenieur-etude-et-developpement-PHP-Symfony-2-H-F/22418' );
	$page5 = file_get_contents( 'http://remixjobs.com/emploi/Developpement/Developpeur-senior-Front-End-AngularJS-H-F/22407' );
	$page6 = file_get_contents( 'http://remixjobs.com/emploi/Developpement/Lead-Developpeur-PHP-Symfony-H-F/22402' );

	$pages = array($page1, $page2, $page3, $page4, $page5, $page6);

	//http://remixjobs.com/emploi/web/1
	//echo $page;

	$keywords =	array(
					array("css3", 0),
					array("c++", 0),
					array("php", 0),
					array("js", 0),
					array("jquery", 0),
					array("sql", 0),
					array("java", 0),
					array("android", 0),
					array("ios", 0),
					array("phonegap", 0),
					array("backbone", 0),
					array("objective", 0),
					array("ajax", 0),

					array("responsive", 0),

					array("Symfony", 0),
					array("CodeIgniter", 0),
					array("Zend", 0),
					array("Laravel", 0),
					array("FuelPhp", 0),
					array("CakePhp", 0),

					array("Drupal", 0),
					array("WordPress", 0),
					array("Prestashop", 0),
					array("Joomla", 0),

					array("git", 0),
					array("svn", 0),
					array("mercurial", 0)
				);

	foreach ($pages as $current_page) {
		//foreach ($keywords as $keyword) {
		for ($i = 0; $i < count($keywords); $i++) {
		    if (preg_match("#".$keywords[$i][0]."#i", $current_page))
			{
				//$keyword[1] += 1;
				//$keywords[1][1] += 4;
				$keywords[$i][1] += 1;
			    //echo $keyword[0]." trouvé => ".$keyword[1]."<br/>";
			}
		}
	}

	/*echo "<pre>";
	echo print_r($keywords);
	echo "</pre>";*/

	//unset($keywords);

	
 ?>


<button class="btn btn-lg btn-primary">Générer</button>

<div id="highchart_container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
