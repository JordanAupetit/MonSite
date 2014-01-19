<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Frontend extends CI_Controller {

	public function index()
	{
		$data = array('titre' => 'accueil');
		//$this->parser->parse('accueil', $data);
		//$this->load->view('navbar');
		$this->load->view("templates/header", $data);
		$this->load->view('accueil');
		$this->load->view("templates/footer");
	}

}

