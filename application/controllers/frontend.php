<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Frontend extends CI_Controller {

	public function index()
	{
		$data = array('titre' => ''); // Vide
		//$this->parser->parse('accueil', $data);
		//$this->load->view('navbar');
		$this->load->view("templates/header", $data);
		$this->load->view('page_container');
		$this->load->view("templates/footer");
	}

	public function webwatcher()
	{
		$data = array('titre' => 'Webwatcher');
		$this->load->view("templates/header", $data);
		$this->load->view('webwatcher');
		$this->load->view("templates/footer");
	}

	public function trake()
	{
		$data = array('titre' => 'Trake');
		$this->load->view("templates/header", $data);
		$this->load->view('trake');
		$this->load->view("templates/footer");
	}

}

